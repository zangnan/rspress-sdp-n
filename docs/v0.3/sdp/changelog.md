# 修订记录

<!-- 是否开启快捷键 -->
<!-- 列表列自定义按钮：提交审批&C_ACT_BPM&C_ACT_BPM
批量编辑 -->
<!-- customer:sql_tsjh_tssb -->
<!-- 工具栏导出配置，node版本未实现2、pdf选项 -->
<!-- 表单提交方式，node版本未实现1选项 -->
<!-- 完善工具文档 -->

## 2026-04-16
- 🔥 新增 `AutomaticPageVTable`组件，用于将 DDBaseGridVtable 纳入字典管理
- 🔥 新增 [视频介绍页](http://192.168.21.5:7777/ddit_sdp/intro/)
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20260416.1.1.2.zip`](/ddit_sdp/docs_map.html)。
- **`新增`** 模块API日志分析
- **`新增`** 模块应用日志分析

## 2026-03-13
- 🔥 新增 `DDBaseGridVtable`组件及示例，用于处理大数据量、高性能要求的表格场景。
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20260313.1.1.1.zip`](/ddit_sdp/docs_map.html)。
- **`变更`** antd版本`6.3.1+`，umijs版本`4.6.29+`。
- **`变更`** 调整node版本`24.14.0(LTS)+`。
- **`新增`** 包管理工具增加对`pnpm`支持，推荐采用pnpm进行管理。
- **`新增`** 主页，后续可按需调整。
- 🐞 修复清空缓存后首次进入系统登录经常出现白页的问题。
- 🐞 修复表单组件中由于拖拽组件引起的'Cannot have two HTML5 backends at the same time'的问题。
- 🐞 修复浏览器大量警告'Warning:Each child in an arrayoriteratorshouldhave a unique"key"prop'的问题。
- 🐞 修复接连访问两个由automatic_page组件编码的页面时，列表标题下方出现多行空格问题。

## 2026-01-12
- 🔥 新增AI 主题设置。
- 🔥 新增工具文档，涵盖文字处理、日期处理、本地存储、会话存储、数组处理、树形结构、Word 文档、图表工具、弹窗工具集、码表处理等...`http://xxx.xxx.xxx.xxx/UtilDoc`。
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20260112.1.1.0.zip`](/ddit_sdp/docs_map.html)，后续所有基础组件将放置在代码包中。
- **`变更`** antd版本`6.0.0+`，umijs版本`4.6.4+`，ant-design/x版本`2.0.0+`。
- **`变更`** node版本`25.2.1+`。

## 2025-12-04
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20251204.1.0.4.zip`](/ddit_sdp/docs_map.html)。
- **`新增`** 三方系统接入页。`/user/transition?encodedData=xxx`

## 2025-11-28
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20251128.1.0.3.zip`](/ddit_sdp/docs_map.html)。
- **`新增`** 文档生成管理，新增`数据字典接口`生成。
- **`新增`** 数据字典，列表格式化增加`switch`配置，用于是否等类型数据（1、0；Y、N...）快捷编辑。
- **`新增`** 数据字典，列表格式化增加`timeEasyRead`配置，将毫秒数转为xx毫秒、xx秒或xx分。
- **`新增`** 数据字典，列表格式化增加`tagColor`配置。
- **`新增`** 列表视图展示，工具栏视图设置按钮增加视图筛选及重置。配置module_key页面将同步开启视图方案，并可存储视图方案。选中方案后，再次进入该页面会采用最后选择的视图方案。

## 2025-09-23
- 🔥 新增 模块 [帮助文档管理](/component/build_sys/instruction.html#帮助文档)。
- 🔥 新增 模块 [文档生成管理](/component/build_sys/instruction.html#文档生成)。
- 🔥 新增 模块 [皮肤设置](/component/build_sys/instruction.html#皮肤设置)。
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20250923.1.0.2.zip`](/ddit_sdp/docs_map.html)。
- **`新增`** 基础单元表单事件新增[`afterFormSaveSuccess`](/component/api/unit/api_event.html#afterformsavesuccess)，表单保存成功后回调，如更新码表。
- **`新增`** 基础单元表单事件新增[`afterFormDeleteSuccess`](/component/api/unit/api_event.html#afterformdeletesuccess)，表单删除成功后回调，如更新码表。
- **`新增`** 基础单元列表事件新增[`statistics`](/component/api/unit/api_event.html#statistics)，合计自定义渲染，如格式化合计结果。
- **`新增`** 基础单元工具栏配置新增[`delete_by_condition`](/component/api/unit/api_event.html#configtoolbar_default)，筛选删除配置。
- **`新增`** 基础单元事件新增[`isSonTableEdit`](/component/api/unit/api_event.html#issontableedit)配置。
- **`新增`** 基础单元视图设置按钮后增加已保存视图快捷筛选。
- **`新增`** 表单组件新增[`MarkdownEditor`](/component/build_sys/build_by_excel/4-sheet_dict.html#参数2表单项类型)类型。
- **`新增`** 表单组件新增[`Cascader`](/component/build_sys/build_by_excel/4-sheet_dict.html#参数2表单项类型)类型。
- **`新增`** 列表组件新增渲染[`MarkdownEditor`](/component/build_sys/build_by_excel/4-sheet_dict.html#参数8列表项格式化列)类型。
- **`新增`** 列表组件新增渲染[`RichText`](/component/build_sys/build_by_excel/4-sheet_dict.html#参数8列表项格式化列)数据弹窗展示示例。
- **`变更`** 详情组件变更，采用更适合仅查看而非编辑的布局风格。
- **`新增`** 主题设置新增`列表默认显示条数`。
- **`变更`** 侧滑列表的筛选，由默认3列变为默认2列，适配小屏幕下的布局。
- **`新增`** 敏捷开发 - Excel采集模块，增加模块/字典过滤及编辑项类别过滤。
- **`新增`** 基础单元树事件新增[`treeOnSelect`](/component/api/unit_tree/api_event.html)，表单保存成功后回调，如选择节点后，变更某项表单值。
- **`新增`** 基础单元树新增[`order`](/component/api/unit_tree/api_event.html)，用于指定排序字段。
- **`新增`** 字典构建sheet页，新增[`扩展信息`](/component/build_sys/build_by_excel/4-sheet_dict.html#其他)配置，用于配置列表列头、筛选、表单采集时的tooltip。
- **`新增`** 默认操作列编辑只读属性的自定义渲染[`setEditDisabled_模块key`](/component/api/unit/api_event.html#seteditdisabled_modulekey)。
- **`新增`** 默认操作列删除只读属性的自定义渲染[`setDeleteDisabled_模块key`](/component/api/unit/api_event.html#setdeletedisabled_modulekey)。

## 2025-07-04
- 🔥 新增 根据字典视图，自定义设置图表，参照[树列表组合系数据类型的采集及展示](/component/build_sys/instruction.html#图表统计)。
- **`变更`** @ant-design/charts版本`2.3.0+`。

## 2025-05-29
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20250529.1.0.1.zip`](/ddit_sdp/docs_map.html)。
- **`变更`** antd版本`5.4.0+`，umijs版本`4.4.11+`。
- **`变更`** node版本`22.9.0+`。
- **`新增`** 字典视图，树列表组合字典配置，参照[树列表组合系数据类型的采集及展示](/component/build_sys/customer_dev.html#7-树列表组合系数据类型的采集及展示)。
- **`新增`** 字典视图，两种关联表数据适配视图，参照[关联表数据采集及展示一](/component/build_sys/customer_dev.html#8-关联表数据采集及展示一)，[关联表数据采集及展示二](/component/build_sys/customer_dev.html#9-关联表数据采集及展示二)。
- **`新增`** 数据字典，列表格式化增加`color`配置，用于颜色标签渲染。
- **`新增`** 数据字典，表单及筛选中增加树组件数据配置。
- **`新增`** 维度表方案、个人筛选方案配置入库。
- **`新增`** 系统配置如标题、图标、copyright等加入配置文件中。
- **`新增`** 敏捷开发-模块管理中，新增功能`增加模拟数据`。

## 2025-05-01
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20250501.1.0.0.zip`](/ddit_sdp/docs_map.html)
- **`新增`** 敏捷开发 - 物理表管理，加入对非字典管理的物理表查询及字典数据视图导出。
- **`新增`** 系统管理 - 组织机构管理。
- **`新增`** 系统管理 - 系统日志管理。
- **`新增`** 数据字典，`自定义码表`sheet页增加`父节点codeValue数据库字段名称`，用于支持表单中的树组件。
- **`新增`** 数据字典，列表格式化增加`json`配置，用于json数据弹窗展示。
- **`新增`** 数据字典，列表格式化增加`copy`配置，用于展示copy图标，并实现快速复制。
<!-- - **`变更`** 文档[`设计概述`](/component/process.html)。
- **`新增`** 文档[`应用场景 - 我是设计者`](/component/app_scenarios/desinger.html)。
- **`新增`** 文档[`应用场景 - 我是开发者`](/component/app_scenarios/developer.html)。 -->

## 2025-02-13
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20250213.0.2.12.zip`](/ddit_sdp/docs_map.html)
- **`新增`** pdf导出配置。

## 2025-02-12
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20250212.0.2.11.zip`](/ddit_sdp/docs_map.html)
- **`新增`** `敏捷开发-Excel采集`功能，仿Excel进行网页端数据整理。

## 2025-01-24
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20250124.0.2.10.zip`](/ddit_sdp/docs_map.html)
- **`新增`** [`维度表统计功能。`](/component/build_sys/instruction.html#维度表统计)

## 2025-01-08
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20250108.0.2.9.zip`](/ddit_sdp/docs_map.html)
- **`变更`** 数据字典模板，新增一对多关系数据类型的采集及展示，参照[一对多关系数据类型的采集及展示](/component/build_sys/customer_dev.html#6-一对多关系数据类型的采集及展示)。

## 2024-12-20
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241220.0.2.8.zip`](/ddit_sdp/docs_map.html)
- **`新增`** 系统构建时，可选前端预校验。校验内容包括：
    1. 所有Sheet固定录入内容校验、数值类型校验、数字或字母类型校验、必录校验。
    1. 【模块.sheet】【字典构建.sheet】【表管理.sheet】，`数据字典`字段关系校验。
    1. 【菜单构建.sheet】：采用预制页面直接展示时，`组件`字段、`菜单路径`字段格式校验。
    1. 【字典构建.sheet】：数值类型字段与页面录入框类型是否匹配校验。

## 2024-12-12
- **`新增`** [`树形结构数据视图构建说明。`](/component/build_sys/customer_dev.html#4-敏捷开发导出使用说明)
- **`新增`** [`Sheet.菜单构建内容补充 2024-12-12 内容。`](/component/build_sys/build_by_excel/1-sheet_menu.html)
- **`新增`** [`Sheet.字典构建内容补充 2024-12-12 内容。`](/component/build_sys/build_by_excel/4-sheet_dict.html)
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241212.0.2.7.zip`](/ddit_sdp/docs_map.html)
- **`变更`** 数据字典模板，新增树示例。

## 2024-12-04
- **`新增`** [`敏捷开发导出使用说明。`](/component/build_sys/customer_dev.html#4-敏捷开发导出使用说明)
- **`新增`** [`Excel构建文件，新增自定义码表配置页面。`](/component/build_sys/build_by_excel/8-sheet_codetable_manage.html)
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241204.0.2.6.zip`](/ddit_sdp/docs_map.html)
- **`变更`** 后端代码，最新版本为：[`ddit-cloud-dict-deploy-1.0.0-SNAPSHOT_v.20241204.0.2.6.jar`](/ddit_sdp/docs_map.html)
- **`变更`** 数据字典模板，后续模板将放置在前端代码包中进行管理。

## 2024-11-26
- **`新增`** [`资源权限开发使用说明。`](/component/build_sys/customer_dev.html#资源权限开发)
- **`新增`** [`表单公式配置。`](/component/build_sys/build_by_excel/4-sheet_dict.html#参数5表单项类型扩展参数)
- **`新增`** [`Sheet.字典构建内容补充 2024-11-26 内容。`](/component/build_sys/build_by_excel/4-sheet_dict.html)
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241126.0.2.5.zip`](/ddit_sdp/docs_map.html)
- **`变更`** 后端代码，最新版本为：[`ddit-cloud-dict-deploy-1.0.0-SNAPSHOT_v.20241126.0.2.5.jar`](/ddit_sdp/docs_map.html)
- **`新增`** 数据字典_分词管理，最新版本为：[`数据字典_分词管理_v20241126.0.2.5.xlsx`](/ddit_sdp/docs_map.html)
- **`变更`** 数据字典模板，最新版本为：[`数据字典_字典导入模板_v20241126.0.2.5.xlsx`](/ddit_sdp/docs_map.html)
    1. Sheet.菜单构建增加`前端组件ID`列。


## 2024-11-19
- **`新增`** [`媒体管理模块及媒体类型字典使用。`](/component/build_sys/customer_dev.html#媒体类字典开发)
- **`新增`** [`Q&A内容补充 2024-11-19 内容。`](/component/build_sys/qa.html)
- **`新增`** [`Sheet.模块内容补充 2024-11-19 内容。`](/component/build_sys/build_by_excel/2-sheet_module.html)
- **`新增`** [`Sheet.字典构建内容补充 2024-11-19 内容。`](/component/build_sys/build_by_excel/4-sheet_dict.html)
- **`变更`** 数据字典模板，最新版本为：[`数据字典_字典导入模板_v20241119.0.2.4.xlsx`](/ddit_sdp/docs_map.html)
    1. Sheet.字典构建增加`表单项事件查询`列。
- **`新增`** [`数据字典_媒体管理_v20241119.0.2.4.xlsx`](/ddit_sdp/docs_map.html)
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241119.0.2.4.zip`](/ddit_sdp/docs_map.html)
- **`变更`** 后端代码，最新版本为：[`ddit-cloud-dict-deploy-1.0.0-SNAPSHOT_v.20241119.0.2.4.jar`](/ddit_sdp/docs_map.html)


## 2024-11-07
- **`变更`** 数据字典模板，最新版本为：[`数据字典_字典导入模板_v20241107.0.2.3.xlsx`](/ddit_sdp/docs_map.html)
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241107.0.2.3.zip`](/ddit_sdp/docs_map.html)
- **`变更`** 后端代码，最新版本为：[`ddit-cloud-dict-deploy-1.0.0-SNAPSHOT_v.20241107.0.2.3.jar`](/ddit_sdp/docs_map.html)

## 2024-10-31
- **`变更`** 数据字典模板，最新版本为：[`数据字典_字典导入模板_v20241031.0.2.2.xlsx`](/ddit_sdp/docs_map.html)
    1. 模板增加表单提交方式。

- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241031.0.2.2.zip`](/ddit_sdp/docs_map.html)
    1. 一键/自定义初始化增加`系统管理模块`相关内容。
    1. 支持同时导入多模板构建，增加模板导入提示。
    1. 增加`react-player`依赖包，如增量更新，根目录下安装依赖 `yarn add react-player`
- **`变更`** 后端代码，最新版本为：[`ddit-cloud-dict-deploy-1.0.0-SNAPSHOT_v.20241031.0.2.2.jar`](/ddit_sdp/docs_map.html)

## 2024-10-22
- **`变更`** [敏捷开发平台代码说明](/component/build_sys/env_init.html#敏捷开发平台代码说明)
- **`变更`** 数据字典模板，最新版本为：[`数据字典_字典导入模板_v20241022.0.2.1.xlsx`](/ddit_sdp/docs_map.html)
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241022.0.2.1.zip`](/ddit_sdp/docs_map.html)
- **`变更`** 后端代码，最新版本为：[`ddit-cloud-dict-deploy-1.0.0-SNAPSHOT_v.20241022.0.2.1`](/ddit_sdp/docs_map.html)

## 2024-10-15
- **`变更`** 数据字典模板，最新版本为：[`数据字典_字典导入模板_v20241015.01`](/ddit_sdp/docs_map.html)，
    1. 当前版本变更内容标黄展示。
    1. 增加业务码表配置。
    1. 增加业务表共通字段配置。
- **`变更`** 前端代码，最新版本为：[`ddit_sdp_code_frontend_v.20241015.01.zip`](/ddit_sdp/docs_map.html)
    1. 需覆盖原代码，并在根目录下执行组件库更新操作。执行 `npm install ddittool --legacy-peer-deps --registry=http://192.168.21.5:4873`
