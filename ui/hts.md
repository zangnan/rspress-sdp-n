# 开发文档

## 基础组件

### 布局

![image](/img/hts_layout_MarkMan.png)

### 文字

#### 开发说明

1. 默认字号均为14px。
2. 颜色#32363a。
3. 字体：-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"。

### 色彩

#### 标准色

![image](/img/hts_color3_MarkMan.png)
![image](/img/hts_color5_MarkMan.png)
![image](/img/hts_color1_MarkMan.png)
![image](/img/hts_color2_MarkMan.png)

* \#32363A：默认文本颜色。
* \#999999：录入框边框、placeholder、Checkbox、Radio、弹窗关闭图标文本色。
* \#BBBBBB：普通按钮边框、只读属性文本颜色。
* \#CFCFCF：屏蔽按钮或链接文本色。
* \#DBDBDB：列表边线色。
* \#E6E6E6：屏蔽按钮边框色。
* \#EDEDED：列表列头背景色。
* \#F5F5F5：列表划过背景色、屏蔽状态录入框背景色。
* \#F8F8F8：屏蔽按钮背景色。
* \#0A6ED1：主按钮背景色、链接文本色、录入框图标色、Radio及Checkbox选中、Tab标签选中色。
* \#085CAF：主按钮hover背景、链接按钮文本色、链接按钮hover边框色、链钮hover文本色、图标按钮文本色。
* \#E6F0FA：列表选中背景色。
* \#52C41A：成功类圆点图标背景色。
* \#FF4D4F：失败类圆点图标背景色。
* \#FAAD14：警告类圆点图标背景色、表单必录项目标识文本色。

#### 辅助色

![image](/img/hts_color4_MarkMan.png)

* \#EAEAEA：业务区域背景色、弹窗页头页脚边线色。
* \#F7F7F7：基础页面列表区域背景色。
* \#F1F4F7：表单标题区域背景色。
* \#FA6E00：区域间需显著区别的分割线。

### 按钮

##### Normal

![image](/img/hts_btn_normal_MarkMan.png)

##### Hover

![image](/img/hts_btn_hover_MarkMan.png)

##### Disable

![image](/img/hts_btn_disable_MarkMan.png)

##### 其他

![image](/img/hts_btn_toolbar_right_MarkMan.png)

### 链接

![image](/img/hts_link_MarkMan.png)

### 编辑组件

![image](/img/hts_input_MarkMan.png)

### 列表

![image](/img/hts_table_MarkMan.png)

#### 开发说明

1. 对齐方式：数字居右，操作列（含开关）居中，其他居左。特例：‘’数字/数字‘’格式居右。
2. 数字：千分位展示，金额2位小数，汇率5位、税率2位小数、数量4位。
3. 列宽：固定字数或可以确定字数的列（如码表、日期）按照其最多字数设置。
4. 列宽：除特殊要求，显示内容不允许折行，超出设定单元格或表格x轴宽度，显示省略符。
5. 列宽：能够确定字数的列，需要显示完整，内容不要折行。
6. 列宽：测试1280分辨率，列不能折行。
7. 列宽：如果数据列较少，至少有一列列宽宽度是自适应，即不设置宽度，防止列宽等比放大。
8. 列表中单位，写到工具栏左侧，标题所在区域。
9. Mock数据完整，且真实数据，不要出现111、222、aaa、bbb。
10. 关于表头折行，原则上表头不允许折行，如果表头过长，字数超过10个字，可考虑适当位置换行，换行除需考虑语义与断句。

#### 常见列表字段列宽

* **格式：0,0.00**
  列宽：140px
  示例：同比占比、单价、金额、总价、保费、退税到账额、退税额、计税金额、美元离岸价、成交总价、人民币离岸价、成交金额、运费金额、保费金额、杂费金额、申报价格、收款金额(本币)、收款金额(原币)、征税率、退税率
* **格式：0,0.0000**
  列宽：140px
  示例：数量、申报数量、法定数量、第二数量、剩余数量、出口数量、成交数量、法定单位数量、第二单位数、成交剩余数量
* **格式：0,0.00000**
  列宽：100px
  示例：汇率、征税率、退税率
* **格式：0,0**
  列宽：100px
  示例：条数
* **格式：yyyy-MM-DD**
  列宽：120px
* **格式：yyyy-MM-DD hh:mm**
  列宽：140px
* **格式：yyyy-MM-DD hh:mm:ss**
  列宽：150px
* **格式：名称类**
  列宽：180px
  示例：海关商品名称、商品名称、生产销售单位名称、企业商品名称、备注、供应商名称、对方账户名称、银行名称、银行分行、用途、纳税人名称、对方开户行名

### 分页符

![image](/img/hts_pagination_MarkMan.png)

### Tab标签页

![image](/img/hts_tab_MarkMan.png)

### 弹窗

![image](/img/hts_modal_MarkMan.png)

#### 开发说明

1. 弹窗可选宽度：480px|720px|960px|1200px|max
2. 弹窗高度根据内容进行设置，但不得高于浏览器高度。

### 蒙版

![image](/img/hts_masker_MarkMan.png)

### 消息提示

![image](/img/hts_alert_MarkMan.png)

#### 开发说明

1. 前端的提升统一用info类型， 蓝色图标。
2. 后端返回成功success类型，绿色图标。
3. 后端返回异常，error类型，红色图标。
4. 后端返回提示信息，info类型， 蓝色图标。
5. 暂不使用warning类型的展示。

### 加载中

![image](/img/hts_loading0_MarkMan.png)
![image](/img/hts_loading1.png)
![image](/img/hts_loading2.png)
![image](/img/hts_loading3.png)

#### 开发说明

1. 根据业务需求添加蒙版。

### 滚动条

##### 默认样式

![image](/img/hts_scrollbar1_MarkMan.png)

##### 鼠标划过样式

![image](/img/hts_scrollbar2_MarkMan.png)

#### 开发说明

1. 左侧菜单栏滚动条样式与其他滚动条不一致。

## 封装组件

### 筛选区

![image](/img/hts_filter_MarkMan.png)

#### 开发说明

1. 两个及以下筛选条件的，放到工具栏所在行。
2. 列头筛选，如果只有两种状态，则用radio类型，且增加全部；两种以上状态，且10个以内，采用Checkbox；其他或特殊码表筛选，按需求说明开发。
3. 列排序、列筛选：严格按照需求文档，如果和上述规范冲突，及时与需求协商调整。
4. 列表上方的快捷筛选，在最后一个查询录入框中保留查询按钮。
5. 栅格布局说明：
   1200px以上分辨率时，默认显示3列布局。
   992px至1200间分辨率时，显示2列布局。
   小于992px分辨率时，显示1列布局。

### 工具栏

![image](/img/hts_toolbar_MarkMan.png)

#### 开发说明

1. 右侧除图标按钮外的其他按钮数量如果小于5个，则依次将设置下的通用按钮（导入、导出、刷新、全屏）移到外侧，直到外侧按钮数量为5个。

### 普通表单

![image](/img/hts_form_MarkMan.png)

#### 开发说明

1. 栅格布局说明：
   1200px以上分辨率时，默认显示3列布局。
   992px至1200间分辨率时，显示2列布局。
   小于992px分辨率时，显示1列布局。

### 工作台/主页

![image](/img/hts_workspace_MarkMan.png)

#### 开发说明

1. 工作台尺寸：无左侧菜单时，最大宽度1300px。

## 通用页面布局

### 设置

![image](/img/hts_table_setting.png)

### 导入

![image](/img/hts_import.png)
