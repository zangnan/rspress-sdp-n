# 不编码，能完成哪些页面和功能？



## 一. 概述
无需通过编码，仅编写如下图所示的Excel模版文件，并通过敏捷开发平台进行模块构建，即可以完成下列类型页面及模块的搭建，可供`需求/设计`、`开发`人员使用。

[📗Excel编写说明](/sdp/build_by_excel/1-sheet_table.html)

**已支持的配置页面**

* [m1.数据列表+采集](/sdp/what_can_do/what_can_do_01.html#m1-数据列表采集)
* [m2.媒体列表+采集](/sdp/what_can_do/what_can_do_01.html#m2-媒体列表采集)
* [m3.主子表展示+采集](/sdp/what_can_do/what_can_do_01.html#m3-主子表展示采集)
* [m4.关联表展示](/sdp/what_can_do/what_can_do_01.html#m4-关联表展示)
* [m5.树状数据+采集](/sdp/what_can_do/what_can_do_01.html#m5-树状数据采集)
* [m6.树状数据+数据列表](/sdp/what_can_do/what_can_do_01.html#m6-树状数据数据列表)

![](/excel_intro/module_intro_54.png)

**从数据库层面考虑，当完成上述配置，已经具备了基于数据表及数据间关系，处理数据的基础能力**

* 数据库的单表维护
   1. 普通表 [（m1.数据列表+采集）](/sdp/what_can_do/what_can_do_01.html#m1-数据列表采集)
   1. 树状表 [（m5.树状数据+采集）](/sdp/what_can_do/what_can_do_01.html#m5-树状数据采集)
* 数据库的主子表维护
   1. 子表含有主表主键，如主表"人员基本信息表"、子表"人员工作履历表" [（m3.主子表展示+采集）](/sdp/what_can_do/what_can_do_01.html#m3-主子表展示采集)
* 数据库的一对一、一对多关系表，所有含有外键关系的表都符合这种情况，如"人员表"、"角色表"。可细化为两种：
   1. 主表中含有关联表主键 [（m4.关联表展示）](/sdp/what_can_do/what_can_do_01.html#m4-关联表展示)
   1. 关联关系在第三张关联表中 [（m4.关联表展示）](/sdp/what_can_do/what_can_do_01.html#m4-关联表展示)

**谁可以用**

* **需求/设计人员**：对接客户需求，迅速产出原型图，减少原型图设计时间。并同步生成部分设计文档，规避繁琐工作。
* **开发人员**：初始化系统搭建，基础模块搭建，同步完成数据库设计。



## 二. 模块页面展示 & 功能明细

### m1. 数据列表+采集

![](/excel_intro/module_intro_64.png)
【图m1. 数据列表 **⤴** 】

##### 配置
1. 配置列表　[📗配置说明](/sdp/build_by_excel/1-sheet_table.html) [📗配置列表项](/sdp/build_by_excel/2-sheet_module.html#列表)
1. 配置筛选　[📗配置说明](/sdp/build_by_excel/3-sheet_dict.html#筛选项)
1. 配置表单　[📗配置说明](/sdp/build_by_excel/2-sheet_module.html#表单) [📗配置表单项](/sdp/build_by_excel/3-sheet_dict.html#表单项)
1. 配置工具栏　[📗配置说明](/sdp/build_by_excel/2-sheet_module.html#工具栏默认按钮)
1. 配置列表默认操作列　[📗配置说明](/sdp/build_by_excel/2-sheet_module.html#列编辑列删除列详情)
1. 配置自定义按钮（位于工具栏或列表列），`💻需要配合自定义开发`　[📗配置说明](/sdp/build_by_excel/2-sheet_module.html#自定义按钮)
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

![](/excel_intro/module_intro_48.png)
【图m1. 数据列表 **⤴** 】

![](/excel_intro/module_intro_49.png)
【图m1. 数据采集 **⤴** 】

### m2. 媒体列表+采集

![](/excel_intro/module_intro_50.png)
【图m2. 媒体列表 - 卡片形态 **⤴** 】

![](/excel_intro/module_intro_51.png)
【图m2. 媒体列表 - 列表形态 **⤴** 】

##### 配置
1. 配置媒体列表形态　[📗配置说明](/sdp/build_by_excel/2-sheet_module.html#列表扩展)
1. 配置卡片属性，卡片标题、说明、图片、预览地址可匹配任意字段　[📗配置说明](/sdp/build_by_excel/3-sheet_dict.html#参数8列表项格式化列)

##### 展示 & 使用
1. 切换媒体卡片形态、列表形态
1. 预览图片、视音频文件
1. 上述`m1.`数据列表+采集的功能
1. 支持自定义卡片布局及渲染 `💻需要配合自定义开发`

### m3. 主子表展示+采集

![](/dataToView/demo07.png)
【图m3.主子表展示+采集 —— 子表 **⤴** 】

##### 应用场景
如人员管理中对学历、工作经验等一对多数据维护，或发票明细数据，报关单明细数据等
##### 配置
1. 子表配置　[📗配置说明](/sdp/build_by_excel/3-sheet_dict.html#参数8列表项格式化列)
   * 关联数据及id可匹配任意模块和字段
   * 子列表标题可匹配主表任意字段
##### 展示 & 使用
1. 子表数据查询及采集，子表为`m1`形态并涵盖其所有功能
1. 上述`m1.`数据列表+采集的功能

### m4. 关联表展示

![](/excel_intro/module_intro_52.png)
【图m4.关联表展示 - 设置关联 **⤴** 】

##### 配置
1. 关联表配置数据关系维护　[📗配置说明](/sdp/build_by_excel/3-sheet_dict.html#参数8列表项格式化列)
##### 展示 & 使用
1. 关联表数据关系维护
1. 上述`m1.`数据列表+采集的功能

### m5. 树状数据+采集

![](/dataToView/demo06.png)
【图m5.树状数据+采集 **⤴** 】

* **使用场景**：如菜单维护、组织机构维护等业务场景。
##### 配置
1. 树配置　[📗配置说明](/sdp/build_by_excel/3-sheet_dict.html#参数8列表项格式化列)
   *  配置数据父子节点，可匹配任意字段
   *  配置树节点标题，可匹配任意字段
##### 展示 & 使用
1. 新建，修改，删除（CRUD）

### m6. 树状数据+数据列表

![](/excel_intro/module_intro_53.png)
【图m6.树状数据+数据列表 **⤴** 】

##### 配置
1. 数据关系维护
   [📗配置说明](/sdp/build_by_excel/1-sheet_table.html#参数8组件)
   [📙配置说明]/sdp/customer_dev.html#7-树列表组合系数据类型的采集及展示)
##### 展示 & 使用
1. 树节点关联数据查询
1. 右侧为数据列表+采集，涵盖其所有功能



## 三. 预制的功能

### f1. 维度表统计
   [🚀使用说明](/sdp/instruction.html#f1-维度表统计)
### f2. 图表统计
   [🚀使用说明](/sdp/instruction.html#f2-图表统计)
### f3. 列表高级筛选
   [🚀使用说明](/sdp/instruction.html#f3-列表高级筛选)
### f4. 列表视图设置
   [🚀使用说明](/sdp/instruction.html#f4-列表视图设置)
### f5. 列表数据导出
   [🚀使用说明](/sdp/instruction.html#f5-列表数据导出)
### f6. 生成设计文档
   [🚀使用说明](/sdp/instruction.html#f6-生成设计文档)
### f7. 管理帮助文档
   [🚀使用说明](/sdp/instruction.html#f7-管理帮助文档)
### f8. 管理色彩主题及布局
   [🚀使用说明](/sdp/instruction.html#f8-管理色彩主题及布局)
### f9. AI生成主题
   [🚀使用说明](/sdp/instruction.html#f9-ai生成主题)
### f10. AI模块生成
   [🚀使用说明](/sdp/instruction.html#f10-ai模块生成)
 