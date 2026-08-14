# 我能做什么？

## 一、不编码，能完成哪些页面和功能？

### 1. 概述
无编码，仅编写如下图所示的Excel模版文件，并通过敏捷开发平台进行模块构建，即可以完成下列类型页面及模块的搭建，可供`需求/设计`、`开发`人员使用。
[📗Excel编写说明](/component/build_sys/build_by_excel/1-sheet_menu.html)
* **需求/设计人员**：对接客户需求，迅速产出原型图，减少原型图设计时间。并同步生成部分设计文档，规避繁琐工作。
* **开发人员**：初始化系统搭建，基础模块搭建，同步完成数据库设计。
![](/excel_intro/module_intro_54.png)

### 2. 模块一览表  & 页面展示
* `m1.`数据列表+数据采集
* `m2.`媒体列表+数据采集-m1扩展
* `m3.`主子表展示及采集-m1扩展
* `m4.`关联表展示-m1扩展
* `m5.`树状结构数据展示+表单采集
* `m6.`树状结构数据+数据列表

#### m1. 数据列表+数据采集
![](/excel_intro/module_intro_64.png)
![](/excel_intro/module_intro_48.png)
【图m1. 数据列表 **⤴** 】
![](/excel_intro/module_intro_49.png)
【图m1. 数据采集 **⤴** 】

#### m2. 媒体列表+数据采集-m1扩展
![](/excel_intro/module_intro_50.png)
【图m2. 媒体列表 - 卡片形态 **⤴** 】
![](/excel_intro/module_intro_51.png)
【图m2. 媒体列表 - 列表形态 **⤴** 】

#### m3. 主子表展示及采集-m1扩展
![](/dataToView/demo07.png)
【图m3.主子表展示及采集 - 子表 **⤴** 】

#### m4. 关联表展示-m1扩展
![](/excel_intro/module_intro_52.png)
【图m4.关联表展示 - 设置关联 **⤴** 】

#### m5. 树状结构数据展示+表单采集
![](/dataToView/demo06.png)
【图m5.树状结构数据展示+表单采集 **⤴** 】

#### m6. 树状结构数据+数据列表
![](/excel_intro/module_intro_53.png)
【图m6.树状结构数据+数据列表 **⤴** 】

### 3. 生成页面＆功能明细

#### m1. 数据列表+数据采集
##### 配置
1. 配置列表　[📗配置说明](/component/build_sys/build_by_excel/4-sheet_dict.html#列表项) [📗配置列表项](/component/build_sys/build_by_excel/2-sheet_module.html#列表)
1. 配置筛选　[📗配置说明](/component/build_sys/build_by_excel/4-sheet_dict.html#筛选项)
1. 配置表单　[📗配置说明](/component/build_sys/build_by_excel/2-sheet_module.html#表单) [📗配置表单项](/component/build_sys/build_by_excel/4-sheet_dict.html#表单项)
1. 配置工具栏　[📗配置说明](/component/build_sys/build_by_excel/2-sheet_module.html#工具栏)
1. 配置列表默认操作列　[📗配置说明](/component/build_sys/build_by_excel/2-sheet_module.html#图示-46)
1. 配置自定义按钮（位于工具栏或列表列），`💻需要配合自定义开发`　[📗配置说明](/component/build_sys/build_by_excel/2-sheet_module.html#自定义按钮)
##### 展示 & 使用
1. 查列表
   * 单表查询
   * 多表关联查询
   * 自定义SQL/视图查询
   * 码表转换
   * 格式化数据：根据字段类别如日期、数值等设置不同展示方式
   * 展示统计项：合计、最大值、最小值、平均值
   * 按照`预制接口`查询列表数据，也可以配置`自定义接口`，`💻需要配合自定义开发`
   * 按需展示列表配置项内容：列表序号、边框、列表首选项（Radio、Checkbox或无）
   * 按需展示列表列配置项内容，如：开启标识、主键标识、对齐方式、列宽、固定列、隐藏标识、超出隐藏、排序开关、序列、列表项合并列头
   * 按需展示筛选列，如：类型、类型扩展参数、序列、名称、位置、占位符、布局
   * 按需展示列表默认操作列
   * 展示列表自定义操作列 `💻需要配合自定义开发`
1. 查详情
   * 单表查询
   * 多表关联查询
1. 工具栏
   * 按需展示工具栏默认按钮
   * 展示自定义按钮 `💻需要配合自定义开发`
1. 数据维护 - 删除
   * 支持单一主键及联合主键数据删除
1. 数据维护 - 新建，修改 （表单编辑）
   * 常规录入控件支持：Input、 InputNumber、 Select、 DatePicker、 Radio、 Checkbox、 TextArea、 GroupTitle、 TreeSelect、 Upload、 UploadVideo、 UploadAudio、 UploadPicture、 RichTextEditor
   *   常规类型校验：必录、数字、数字字母 、电话 、邮件 、身份证 、中文 、日期 、数值范围+ 、数值范围- 、数值范围+- 、数值范围+0 、数值范围-0 、NUMBER(15,5) 、VARCHAR2(6) 、长度范围2\~10 、长度=21 、yyyy-MM-dd 、yyyyMM 、`[string (自定义方法的名称)]` `💻需要配合自定义开发`
   * 依据配置的码表展示Select、Radio、Checkbox、TreeSelect内容
   * 依据配置的格式化内容展示数据：如根据字段类别日期、数值...设置不同展示方式
   * 依据配置自动计算表单项公式
   * 依据配置展示表单布局宽度
   * 依据配置展示表单项：开启、只读、类型扩展参数、布局、项序列
   * 依据配置设置表单项事件：事件失去焦点、事件得到焦点、事件值改变、事件查询 `💻需要配合自定义开发`
1. 数据导入

#### m2. 媒体列表+数据采集-m1扩展
##### 配置
1. 配置媒体列表形态　[📗配置说明](/component/build_sys/build_by_excel/2-sheet_module.html#图示-7)
1. 配置卡片属性，卡片标题、说明、图片、预览地址可匹配任意字段　[📗配置说明](/component/build_sys/build_by_excel/4-sheet_dict.html#参数8列表项格式化列)

##### 展示 & 使用
1. 切换媒体卡片形态、列表形态
1. 预览图片、视音频文件
1. 上述`m1.`数据列表+数据采集的功能
1. 支持自定义卡片布局及渲染 `💻需要配合自定义开发`

#### m3. 主子表展示及采集-m1扩展
##### 应用场景
如人员管理中对学历、工作经验等一对多数据维护，或发票明细数据，报关单明细数据等
##### 配置
1. 子表配置　[📗配置说明](/component/build_sys/build_by_excel/4-sheet_dict.html#参数8列表项格式化列)
   * 关联数据及id可匹配任意模块和字段
   * 子列表标题可匹配主表任意字段
##### 展示 & 使用
1. 子表数据查询及采集，子表为`m1`形态并涵盖其所有功能
1. 上述`m1.`数据列表+数据采集的功能

#### m4. 关联表展示-m1扩展
##### 配置
1. 关联表配置数据关系维护　[📗配置说明](/component/build_sys/build_by_excel/4-sheet_dict.html#参数8列表项格式化列)
##### 展示 & 使用
1. 关联表数据关系维护
1. 上述`m1.`数据列表+数据采集的功能

#### m5. 树状结构数据展示+表单采集
* **使用场景**：如菜单维护、组织机构维护等业务场景。
##### 配置
1. 树配置　[📗配置说明](/component/build_sys/build_by_excel/4-sheet_dict.html#参数8列表项格式化列)
   *  配置数据父子节点，可匹配任意字段
   *  配置树节点标题，可匹配任意字段
##### 展示 & 使用
1. 新建，修改，删除（CRUD）

#### m6. 树状结构数据+数据列表
##### 配置
1. 数据关系维护
   [📗配置说明](/component/build_sys/build_by_excel/1-sheet_menu.html#参数8组件)
   [📙配置说明](/component/build_sys/customer_dev.html#7-树列表组合系数据类型的采集及展示)
##### 展示 & 使用
1. 树节点关联数据查询
1. 右侧为数据列表+数据采集，涵盖其所有功能

### 4. 预制的功能

#### f1. 维度表统计
[🚀使用说明](/component/build_sys/instruction.html#维度表统计)
   * 自由设计、保存统计方案：行、列维度字段、统计字段、方案名称
   * 可选聚合方式：合计、最大值、最小值、平均值、计数
   * 灵活分组合计：小计行、总计行、小计列、总计列
   * 展示方式可切换：平铺或树形
   * 统计结果可导出
![](/excel_intro/module_intro_55.png)
![](/excel_intro/module_intro_56.png)

#### f2. 图表统计
[🚀使用说明](/component/build_sys/instruction.html#图表统计)
![](/excel_intro/module_intro_57.png)
![](/excel_intro/module_intro_58.png)

#### f3. 高级筛选
* 查询方案维护
* 查询条件可选：and、or
* 查询条件可多层嵌套组合
![](/excel_intro/module_intro_59.png)
![](/excel_intro/module_intro_60.png)

#### f4. 列表视图设置
* 视图方案维护
* 设置列顺序、是否左右冻结、是否展示
![](/excel_intro/module_intro_61.png)

#### f5. 列表数据导出
* 前端导出： (1) 可选择导出列；(2) 调整导出顺序；(3) 支持筛选条件导出，勾选数据导出。
* 后端导出
![](/excel_intro/module_intro_62.png)

#### f6. 生成设计文档
[🚀使用说明](/component/build_sys/instruction.html#文档生成)
![](/excel_intro/module_intro_45.png)
![](/excel_intro/module_intro_46.png)

#### f7. 管理帮助文档
[🚀使用说明](/component/build_sys/instruction.html#帮助文档)
![](/excel_intro/module_intro_42.png)
![](/excel_intro/module_intro_43.png)
![](/excel_intro/module_intro_44.png)

#### f8. 管理色彩主题及布局
* 可选择系统预制的色彩主题
* 可自定义色彩主题并保存为方案 [🚀使用说明](/component/build_sys/instruction.html#皮肤设置)
![](/excel_intro/module_intro_63.png)

## 二、开发者进阶
### 1. 添加自定义按钮
* 配置工具栏自定义按钮，并开发其业务逻辑，多用于针对查询列表的一条或多条数据进行处理。`customer_toobar`
* 配置列表列自定义按钮，并开发其业务逻辑，多用于针对查询列表的当前行数据进行处理。`handle_columns`

### 2. 对列表的自定义开发
* 按照当前行数据设置操作列是否可用。`handle_columns disabled`
* 对列表单元格进行个性化渲染展示。`columnsRender`
* 自定义列表行单击事件。`gridOnRowClick#`
* 自定义列表行双击击事件。`gridOnRowDoubleClick`
* 列表首选项改变时执行自定义方法，即选择Chexcbox、Radion回调。`rowSelection`
* 列表数据删除前执行自定义方法，如需要验证删除数据的合理性。`beforeDelete`
* 列表数据删除失败后调用自定义方法，如弹窗显示特殊格式异常信息及应对方案。`afterDeletionFailure`
* 列表数据加载后调用自定义方法，如获取加载后的第一行数据等。`afterReload`

### 3. 对表单采集生命周期的自定义开发
* 打开新建弹窗前调用自定义方法，如填充表单值、设置某项只读。`initAddForm`
* 打开编辑弹窗前调用自定义方法，如提前填充表单值、设置某项只读。`initEditForm`
* 表单提交前调用自定义方法，如设置私有化的表单校验或其他业务处理。`formBeforeSubmit`
* 表单保存成功后回调，如更新码表。`afterFormSaveSuccess`
* 表单删除成功后回调，如更新码表。`afterFormDeleteSuccess`

### 4. 对表单采集项进行自定义开发
* 除如长度，类型，大小等常规表单校验项外，自定义表单项校验方法。`validator`
* 添加自定义表单项事件OnChange、OnBlur、OnFocus。`eventOnChange、OnBlur、OnFocus`

### 5. 对媒体列表的自定义开发
* 默认卡片展示无法满足需求是，自定义开发卡片展现页面。

### 6. 默认接口扩展
* 数据的增删查改、导入、导出接口可采用默认，也可自定义接口。

## 三、平台功能模块介绍

### 1. 系统管理
1. 人员管理
1. 角色管理
   * 预制按钮支持到按钮级权限
   * 自定义支持到按钮级权限
1. 菜单管理
1. 码表管理
1. 自定义SQL管理
1. 自定义码表管理
   * 通过配置任意物理表的任意字段映射为码表
   * 通过自定义SQL配置码表
1. 系统日志管理
1. 组织机构管理
1. 皮肤设置
1. 帮助文档管理

### 2. 敏捷开发管理
1. 系统初始化
   * 一键初始化系统：完成`基本表结构`创建、`系统基本信息`导入、`系统管理模块`构建
1. 系统构建
    1. ) 一键初始化系统基础构建
        * 初始化基本表结构
        * 初始化系统基本信息
        * 初始化系统管理模块
    1. ) 通过Excel完成采集
        * 菜单构建
        * 模块
        * 表管理
        * 字典构建
        * 业务码表
        * 业务表共通字段
        * 自定义SQL
        * 自定义码表：①、通过配置任意物理表的任意字段映射为码表。②、通过自定义SQL配置码表
    1. ) 前端预校验
1. 物理表管理
   * 物理表导出
   * 可基于物理表导出默认数据字典模板   
1. 表字段管理
1. 模块管理
   * 模块关联数据导出  
1. 字典/模块字段管理
1. 文档生成管理
1. 帮助文档管理
1. Excel采集
   * 仿Excel进行网页端数据整理

#### 系统构建
1.  通过Excel完成采集
    *   菜单构建
    *   模块
    *   表管理
    *   字典构建
    *   业务码表
    *   业务表共通字段
    *   自定义SQL
    *   自定义码表
1.  前端预校验
1.  仿Excel进行网页端数据整理
1.  数据字典、物理表、模块线上管理及导出
1.  基于物理表导出默认数据字典模板

### 3. 媒体管理
* 媒体类型的文件采集
* 列表页面可切换显示宫格、列表两种状态
* 图片、视频类型文件可直接预览

<!-- 2.  支持按钮级权限 -->
<!-- 5.  PDF导出 -->
