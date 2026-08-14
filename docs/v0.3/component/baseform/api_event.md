# 事件 & API

## API

### DDBaseForm
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| [config](/component/api/baseform/api_event.html#config) | 基础配置 | object | - |
| func | 表单校验、表单事件，参照 [自定义事件及校验](/component/api/baseform/api_event.html#configform_itemsrules) | object | - |
| form | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | FormInstance | - |
| initialValues | 表单默认值，只有初始化以及重置时生效 | object | - |

### config
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form_layout_type | 表单整体一列或多列布局 | `horizontal`\|`vertical`\|2、3、4、6、8、12... | `vertical`
| form_label_input_layout | 标签与录入框排列方式 | `horizontal`\|`vertical` |
| form_submit_type | 表单提交方式 | `FormData` | - |
| [form_items](/component/api/baseform/api_event.html#configform_items) | 表单项 | array | - |

### config.form_items
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签的文本 | string | - |
| name | 字段名 | string | - |
| tooltip | 配置提示信息 | string | - |
| [type](/component/api/baseform/api_event.html#configform_itemstype) | 录入项类别 | enum | - |
| [codeTable](/component/api/baseform/api_event.html#configform_itemscodetable) | 码表转换 | objcet | - |
| [treeTable](/component/api/baseform/api_event.html#configform_itemstreetable) | 码表转换 | objcet | - |
| [list](/component/api/baseform/api_event.html#configform_itemslist) | 设置Select、TreeSelect选项 | array | - |
| showSearch | 是否支持搜索框，用于Selete及TreeSelect | boolean | - |
| mode | 设置 Select 的模式为多选或标签 | `multiple`\|`tags` | - |
| labelInValue | 是否把每个选项的 label 包装到 value 中 | boolean | false |
| isSelectLeaf | TreeSelect 只能选择叶子节点 | boolean | - |
| [rules](/component/api/baseform/api_event.html#configform_itemsrules) | 校验规则，设置字段的校验逻辑。 | Rule[] | - |
| readOnly | 是否只读 | boolean | - |
| eventOnChange | 内容变化时的回调，参照 [自定义事件及校验](/component/api/baseform/api_event.html#configform_itemsrules) | function | - |
| eventOnBlur | 失去焦点时回调，参照 [自定义事件及校验](/component/api/baseform/api_event.html#configform_itemsrules) | function | - |
| eventOnFocus | 获得焦点时回调，参照 [自定义事件及校验](/component/api/baseform/api_event.html#configform_itemsrules) | function | - |
| enterFocus | 按下回车的回调，参照 [自定义事件及校验](/component/api/baseform/api_event.html#configform_itemsrules) | function | - |
| [format](/component/api/baseform/api_event.html#configform_itemsformat) | 格式化日期、数值 | string | - |
| layout | 表单项布局，参照 [简单示例](/component/api/baseform/eg_code.html#简单示例) | object | - |
| range | 日期或文本是否是范围控件 | boolean | - |
| placeholder | 文本框的占位符 | string \| array | - |
| defaultValue | 默认值 | object | - |
| maxCount | type为Upload时，上传附件最大数量 | number | - |

### config.form_items.type
* Hidden、Input、Password、InputNumber、Select、DatePicker、TimePicker、Radio、Checkbox、AutoComplete、ComplexPicker、Cascader、GroupTitle、Avatar、Upload、UploadVideo、UploadAudio、UploadPicture、TextArea、TreeSelect、InputTags、Blank、Switch、RichTextEditor、MarkdownEditor

### config.form_items.codeTable

* 用于设置 Select 选项
* 也可以利用 [config.form_items.list](/component/api/baseform/api_event.html#configform_itemslist) 属性格式化码表

```ts
codeTable: ['code_dm_ckts_hgjldw', '01']
```
### config.form_items.treeTable

* 用于设置 TreeSelect 选项
* 也可以利用 [config.form_items.list](/component/api/baseform/api_event.html#configform_itemslist) 属性格式化码表

```ts
treeTable: ['CODE_DM_BADZ_BADZ', '01']
```

### config.form_items.list

* 用于设置Select、TreeSelect选项
* Select 也可以利用 [config.form_items.codeTable](/component/api/baseform/api_event.html#configform_itemscodetable) 属性格式化码表
* TreeSelect 也可以利用 [config.form_items.treeTable](/component/api/baseform/api_event.html#configform_itemstreetable) 属性格式化码表

```ts
// select
list: [
    { name: '中国', value: 'china' },
    { name: '日本', value: 'japan' },
    { name: '韩国', value: 'korea' },
]
// treeSelect
list: [
  { title: '退税单证', value: '1',
    children: [
      {title: '出口发票', value: '1-1', children: [{title: '出口发票1', value: '1-1-1'}]},
      {title: '进口发票', value: '1-2'}
    ]
  },
  { title: '退税单证2', value: '2'},
  { title: '退税单证3', value: '3', children: [
      { title: '退税单证3-1', value: '3-1', children: [{title: '退税单证3-1-1', value: '3-1-1'}, {title: '退税单证3-1-2', value: '3-1-2'}]},
      { title: '退税单证3-2', value: '3-2'}
  ]},
]
```

### config.form_items.format

```ts
// 格式化日期
format: 'YYYY-MM-DD HH:mm:ss'
// 格式化数值
format: '0,0.00'
```

### config.form_items.rules
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| [type](/component/api/baseform/api_event.html#基础校验) | 类型 | string | - |
| message | 错误信息 | string | - |
| range | 校验范围 | string\|array | - |
| func | 自定义校验，参照 [自定义事件及校验](/component/api/baseform/api_event.html#configform_itemsrules) | function | - |

#### 基础校验
config.form_items.rules.type
* **base_required** 必录
* **base_string** 字符
* **base_date** 日期
* **base_number** 数值
* **base_type_number** 数字
* **base_type_number_english** 数字字母
* **base_type_phone** 电话
* **base_type_idcard** 身份证
* **base_type_chinese** 中文
* **base_type_mail** 邮件

#### 数值校验
config.form_items.rules.range
* **\+** 正数
* **\-** 负数
* **\+-** 非0
* **\+0** 大于等于0
* **\-0** 小于等于0

#### 数值范围
* **config.form_items.rules.length** 整数位
* **config.form_items.rules.decimal** 小数位

#### 字符校验
* **config.form_items.rules.range** 范围
* **config.form_items.rules.length** 长度