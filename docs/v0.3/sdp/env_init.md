# 快速开始

## 开发准备

### 主要技术栈
**React + UmiJS + antd**

### 参考网站
+ [UMIJS](https://umijs.org)
+ [Ant Design](https://ant-design.antgroup.com)
+ [ProComponents](https://procomponents.ant.design)
+ [Ant Design Pro](https://pro.ant.design)
+ [ES6核心内容上](https://segmentfault.com/a/1190000004365693)
+ [ES6核心内容下](https://segmentfault.com/a/1190000004368132)
+ [ES6入门教程](https://es6.ruanyifeng.com)

## 开发环境搭建
1. **nodejs**: 24.14.0+
   <!-- * 安装 `node-v24.14.0-x64.msi` -->
   * 安装 `node-v24.14.0`
   * 查看版本：`node -v`
1. **pnpm**: 8.10.2+
   * `npm install -g pnpm`
   * 查看版本：`pnpm -v`
1. **yarn**[备选]: 1.22.22+
   * `npm install --global yarn`
   * 查看版本：`yarn -v`
<!-- 1. **tyarn**[备选]: 1.22.22+
   * `npm install yarn tyarn -g`
   * 查看版本：`tyarn -v` -->

## 项目搭建
1. 下载项目代码
1. 项目依赖安装
   * 项目安装目录下执行 `pnpm install` 或 `yarn`
   ```bash
      pnpm install
   ```
   <!-- * 项目安装目录下执行
   ```bash
      npm install ddittool --legacy-peer-deps --registry=http://192.168.21.5:4873
   ``` -->
1. 配置文件调整
   * `config.ts`为项目的配置文件，开发模式中如果需要调整，则在`config.dev.ts`增加对应配置。
   * `ACCESS_CLIENT_ID`：后端接口环境标识
   * `API_URL_BASE`：后端接口根目录地址
1. 启动项目 **npm start**
1. 系统初始化
   * **http://localhost:3001/easy_dev_dc/init**
   * 一键初始化系统基础构建：创建系统默认表及导入系统默认表初始数据。
      1. ) 初始化基本表结构
      1. ) 初始化系统基本信息
   * 自定义初始化：下载模板，按需调整表结构及数据，依次完成初始化。
1. 登录
   * **http://localhost:3001/user/login**
   * 默认用户名/密码：admin/ddit@1234
1. 通过Excel完成采集
   * 菜单中进入`敏捷开发 - 系统构建`模块，构建业务系统，参照[Excel构建](/sdp/build_by_excel/1-sheet_table.html)
      1. ) 表
      1. ) 模块
      1. ) 字段
      1. ) 菜单
      1. ) 自定义SQL
      1. ) 自定义码表

## 项目发布
1. 配置文件调整
   * 调整根目录，`config.ts`文件中，变更`ddittoolV0.2`为所发布的根目录。
   ```ts
   let proBase = process.env.NODE_ENV === 'production' ? 'ddittoolV0.2' : '';
   ```
1. 打包
   * 项目安装目录下执行 `npm run build`
1. 部署至服务器
   * 打包后的dist文件夹变更名称为上述根目录名称后部署到服务器中。
1. 执行
   * 如本地部署，端口为8080，执行下列地址可进行初始化及登录操作。
   * `http://localhost:8080/ddittoolV0.2/#/ddittoolV0.2/easy_dev/init`
   * `http://localhost:8080/ddittoolV0.2/#/ddittoolV0.2/user/login`

## 敏捷开发平台代码说明
### 代码版本命名规范
代码版本号格式`v.yyyymmdd.x.y.z`。如版本`v.20241022.0.2.1`，对应关联文件命名如下：
1. 前端代码zip包：`ddit_sdp_code_frontend_v.20241022.0.2.1.zip`
   * 对应package.json中版本号：`0.2.1`
   * 对应前端代码组件最低版本：`1.0.132` （在package.json中，查看节点`"ddittool": "^1.0.132"`）
   * 对应数据字典导入模板名称，`“数据字典_字典导入模板_v20241022.0.2.1.xlsx”`
1. 后端jar包：`ddit-cloud-dict-deploy-1.0.0-SNAPSHOT_v.20241022.0.2.1.jar`

### 前端代码 - 使用人员 - 代码更新流程
1. 下载最新前端代码包。下载地址：[DDIT-SDP](/sdp/docs_map)
1. 全量覆盖本地代码，代码中涵盖基础组件、静态资源文件、示例mock数据、Excel模板、新增模块引用页面、新增示例引用页面。
<!-- 1. 更新最新组件包，前端主要代码更新都会在组件包中完成。根目录下执行：
   ```ts
   npm install ddittool --legacy-peer-deps --registry=http://192.168.21.5:4873
   ``` -->

### 前端代码 - 工具开发人员 - 发布流程
1. git拉取最新代码。
1. 变更package.json中版本号加1，格式 `version": "0.2.X"`，`X`在每次发布时加`1`。
<!-- 1. 上传组件包至服务器。
   ```ts
   npm version patch   # 这会将 package.json 中的版本号更新为当前最小版本号的下一个补丁版本
   npm publish         # 然后发布包
   ``` -->
1. 拷贝代码为基准版本，并在根目录执行`node fs.js`。
1. 压缩当前代码做为`“敏捷开发平台代码”`基础包下发开发人员使用。命名规范参照`“敏捷开发平台代码 - 命名规范”`。
