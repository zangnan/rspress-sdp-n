# 后端总览

SDP 后端是一个独立的 **Egg.js** 工程仓库，为前端 SDP 提供接口、数据存储、权限与运行日志。它不是前端项目的子模块，而是另一个仓库（下文简称"后端工程"），通过 HTTP 接口与前端协作。

> 如果你只关心"怎么把前端跑起来"，看 [快速开始](/rspress-sdp-n/sdp/env_init.md) 就够了 —— 本页是给**需要理解、改动、扩展后端**的人看的。

***

## 1. 这是什么 & 给谁看

**一句话：** 它是 SDP 平台所有 CRUD、Excel 导入导出、登录鉴权、日志分析背后的**那个 Node 服务**。

**适合看：**

* 需要给 SDP 加自定义接口 / 自定义 SQL 的后端开发者
* 需要接入或排查 JWT、用户角色、菜单权限的人
* 需要看 API 日志、应用日志统计的人（平台自带分析模块）
* 排查"前端报 401 / 500 / 接口 404"等问题的前端工程师

**不适合看：**

* 只做 Excel 配模块、不写代码的"业务配置人员"——他们不需要碰后端
* 想要"全栈一键搞定"的人——SDP 的核心价值在前端 + Excel，后端是底层支撑

***

## 2. 技术栈

| 项 | 选型 | 备注 |
| --- | --- | --- |
| **框架** | Egg.js 3.x（基于 Koa） | 约定式目录，内置插件机制 |
| **语言** | JavaScript（Node.js ≥ 18.0.0） | 非 TypeScript，无 tsconfig |
| **数据访问** | `egg-mysql` 直连 SQL | 无 ORM 层，Service 直接拼 SQL，约定优于配置 |
| **数据库** | MySQL（库名见 `config/config.default.js`） | 默认账号 / 密码 / host 见后端工程配置文件，**勿硬编码到文档或 git** |
| **认证** | `egg-jwt`，Token 通过 `AccessToken` 头传递 | **不是** 标准的 `Authorization: Bearer` |
| **跨域** | `egg-cors`，默认 `origin: '*'` | 生产环境按需收紧 |
| **参数校验** | `egg-validate` + `app/contract/` | 配合 Swagger 自动生成 schema |
| **API 文档** | `egg-swagger-doc` | 从 controller JSDoc 自动生成，**无需手写 swagger.json** |
| **Excel** | `exceljs` | 流式导入/导出，单文件上限 100mb |
| **包管理** | yarn 1.22.22（亦支持 npm/pnpm） | 见 `package.json#packageManager` |

***

## 3. 一图看能力

后端能力分两层：**Controller 负责路由，Service 负责业务**。所有"由 Excel 自动生成的模块"都走 **baseService** 这一个万能 Service。

### 3.1 Controller（8 个）

| 文件 | 路由前缀 | 职责 |
| --- | --- | --- |
| `home.js` | `/` | 默认首页 |
| `example.js` | `/example/*` | 示例 CRUD（test01/02/03） |
| `common.js` | `/ns/base/*` | 通用 CRUD + Excel 导入导出 |
| `db.js` | `/ns/db/*` | 建表 / 删表 / 初始化数据 |
| `sdp.js` | `/dict/automatic/exp/*` | **敏捷开发核心**：pageDef / baseList2 / baseEdit / baseShow / baseDelete |
| `authority.js` | `/dict/security/*` `/ns/base/authority/*` | 登录、Token、用户角色、菜单权限 |
| `apiAnalysis.js` | `/api/analysis/*` | API 日志 8 维统计 |
| `appLog.js` | `/api/appLog/*` | 应用日志 8 维统计 |

### 3.2 Service（5 个）

| 文件 | 职责 |
| --- | --- |
| `baseService.js`（≈ 1700 行） | **万能 CRUD / Excel / 建表 / 初始化 / 角色权限** —— 平台所有自动生成模块都走它 |
| `example.js` | 示例模块业务 |
| `apiAnalysis.js` | 对应 `apiAnalysis` 控制器，读 `sys_api_log` |
| `appLog.js` | 对应 `appLog` 控制器，读 `sys_app_log` |
| `ddit/user.js` | 登录态、用户信息 |

> **关键认知：** 新增一个业务模块，**通常不需要新增 Service**——只要在 Excel 里把表/字段/模块/菜单配齐，`baseService` 就够用了。只在 Excel 表达不了（自定义 SQL、复杂权限、外部对接）时才写自己的 Service。

***

## 4. 怎么跑起来

```bash title="后端工程根目录"
npm i          # 或 yarn / pnpm install
npm run dev    # 端口 7001
```

启动后：

1. 浏览器打开 <http://localhost:7001/swagger-ui.html> —— 应能看到所有接口
2. 默认管理员账号见后端工程配置或初始化脚本，**勿提交明文到 git**
3. 前端 SDP 在另一仓库跑起来后，把 `API_URL_BASE_NODE` 指到 `http://localhost:7001` 即可联通

**生产环境** 用 `npm start`（守护进程）/ `npm stop` 启停。

> ⚠️ **端口说明：** 后端默认 **7001**；前端 [env\_init.mdx](/rspress-sdp-n/sdp/env_init.md) 默认配的 `API_URL_BASE_NODE=http://localhost:8080` 是个**占位/历史值**，并不是后端真实端口。前后端联通前，请按 [Q\&A · 改变后端接口地址](/rspress-sdp-n/sdp/qa.md#改变后端接口地址) 把前端配置指到 `http://localhost:7001`（或通过反代统一为 8080）。

***

## 5. 关键约定

### 5.1 URL 风格

* **所有新接口统一用 POST**（GET 仅保留示例）
* 路径以业务域分桶：`/ns/*` = node server 通用，`/dict/*` = 字典/业务，`/api/*` = 平台能力

### 5.2 响应格式

```json
{ "code": "200", "msg": "ok", "body": { /* 数据 */ } }
```

非 2xx 时 `code` 是业务错误码（如 `E900110`），`msg` 是可读说明。

### 5.3 JWT

* Token 放在请求头 **`AccessToken`**（不是 `Authorization`）
* 登录接口：`POST /dict/security/login`
* 鉴权白名单见 `config/config.default.js#config.authorization.ignore`

### 5.4 日志

* **API 日志**（`sys_api_log`）由 `writeApiLog` 中间件自动写入
* **应用日志**（`sys_app_log`）由 `RemoteErrorTransport` 写入
* 两者分别对应前端"统计分析"菜单下挂的 API 日志分析 / 应用日志分析两个模块

***

## 6. API 文档从哪里看

后端**不维护手写 `API.md`**。接口文档只有一个权威源：

* **Swagger UI**：`http://localhost:7001/swagger-ui.html`（后端启动后访问）
* 由 `egg-swagger-doc` 扫描 `app/controller/` 下的 JSDoc 注释（`@Controller`、`@Router`、`@summary`、`@request`、`@response`）自动生成
* 改了 controller 注释后**重启服务**即可刷新

需要新增接口时，在对应 controller 上写 JSDoc 注释 + 在 `app/router.js` 登记路由即可。

***

## 7. 下一步

| 你想做的事 | 看哪里 |
| --- | --- |
| 跑通前后端联调 | [快速开始](/rspress-sdp-n/sdp/env_init.md) + [Q\&A · 改变后端接口地址](/rspress-sdp-n/sdp/qa.md#改变后端接口地址) |
| 加自定义接口 / SQL | 后端工程的 `app/controller/` 与 `app/service/baseService.js` |
| 看某张表的字段定义 | 后端工程的 MySQL 库；核心表：`sys_user / sys_role / sys_menu / app_module / app_module_field / dict / dict_field` |
| 看 API / 应用日志统计 | 启动前端后，菜单"统计分析"下挂的两个分析模块 |
| 排错（401 / 500） | Swagger UI 在线试 + 后端工程根目录 `logs/` 日志 |
