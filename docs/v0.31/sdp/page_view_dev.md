## Json配置数据
![](/dataToView/intro_json.png)

## Json配置数据生成方式完成度

### 全局配置项 config
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| unit_key | 业务单元key，对应后端接口 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| page_id | 页面id | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/wrong.png) |
| layout_type | 页面类型 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| form_title | 表单：标题 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| form_width | 表单：宽度 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| form_layout_type | 表单：布局 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| form_save_check | 表单：编辑是否执行后端校验 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| grid_show_serial_number | 列表：是否显示序号 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| grid_title | 列表：标题 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| grid_click_checked | 列表：开启单击或双击勾选 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| grid_sticky_affix | 列表：列表锁定高度 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| grid_scroll_y | 列表：y轴滚动条 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| grid_scroll_x | 列表：x轴滚动条 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| grid_selection_type | 列表：首选项类别 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| grid_border | 列表：边框 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| grid_handle_width | 列表：自定义操作列宽度 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| grid_row_key | 列表：主键 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |
| delete_key | 列表：删除参数键 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |
| toolbar_show_grid_checked_num | 工具栏：是否显示数据条数及选中数 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |
| toolbar_open | 工具栏：是否开启 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |
| toobar_affix | 工具栏：锁定高度 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| api_grid_query | api：列表查询 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| api_form_query | api：表单查询 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| api_form_edit | api：表单更新 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| api_form_delete | api：表单删除 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| api_excel_export | api：导入 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| api_excel_import | api：导出 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| api_excel_template | api：模板下载 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| api_form_check | api：表单校验 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |

### 选中字段统计 config.grid_sum_field
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| label | 显示名称 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| field | 对应列表字段 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| unit | 单位 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| format | 格式化 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |

### 默认工具栏 config.toolbar_default
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| add | 是否显示增加按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| edit | 是否显示修改按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| delete | 是否显示删除按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| setting | 是否显示设置按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| full | 是否显示全屏按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| download | 是否显示导出按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| upload | 是否显示导入按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| reload | 是否显示刷新按钮 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |

### 默认操作列 config.grid_handle_columns_default
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| edit | 是否显示编辑链接 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| delete | 是否显示删除链接 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| detail | 是否显示详情链接 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |

### 自定义工具栏config.costomer_toobar
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| name | 按钮名称 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| key | 按钮键值 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| func | 按钮方法 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| disabled | 是否可用 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| type | 按钮类型 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| list | 下拉按钮 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |

### 自定义列表操作列 config.handle_columns
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| name | 链接名称 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| key | 链接键值 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| func | 链接方法 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| disabled | 是否可用 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |

### 列表列 config.grid_columns
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| title | 列头显示文字 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| dataIndex | 数据key | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| width | 列宽度 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| fixed | 列是否固定 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| titleTooltip | 列头说明文字 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |
| align | 列对齐方式 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| ellipsis | 超过宽度自动省略 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| hidden | 隐藏列 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| sorter | 排序 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| sum | 是否开启求和 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| sum2 | 是否开启后端求和 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| children | 分组表头 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/wrong.png) |
| render | 列渲染 | ![](/right.png) | ![](/harf.png) | ![](/harf.png) | ![](/harf.png) |
| filter | 表头筛选 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| codeTable | 码表转换 | ![](/right.png) | ![](/harf.png) | ![](/harf.png) | ![](/harf.png) |

### 表单项 config.form_items
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| label | 标签的文本 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| name | 字段名 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |
| tooltip | 配置提示信息 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| type | 录入项类别 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| codeTable | 码表转换 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| treeTable | 码表转换 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| list | 设置Select、TreeSelect选项 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| showSearch | 是否支持搜索框，用于Selete及TreeSelect | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| mode | 设置 Select 的模式为多选或标签 | ![](/right.png) | ![](/harf.png) | ![](/harf.png) | ![](/harf.png) |
| labelInValue | 是否把每个选项的 label 包装到 value 中 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| isSelectLeaf | TreeSelect 只能选择叶子节点 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| rules | 校验规则，设置字段的校验逻辑 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/harf.png) |
| readOnly | 是否只读 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/wrong.png) |
| eventOnChange | 内容变化时的回调 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| eventOnBlur | 失去焦点时回调 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| eventOnFocus | 获得焦点时回调 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| enterFocus | 按下回车的回调 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| format | 格式化日期、数值 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/wrong.png) |
| layout | 表单项布局 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| showType | Select组件显示方式 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| range | 日期或文本是否是范围控件 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| placeholder | 文本框的占位符 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| defaultValue | 默认值 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| gridIsInitSearch | 列表：是否开启默认查询 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |

### 筛选项 config.filter_items
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| label | 标签的文本 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| name | 字段名 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| type | 录入项类别 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| tooltip | 配置提示信息 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/right.png) |
| codeTable | 码表转换 | ![](/right.png) | ![](/right.png) | ![](/right.png) | ![](/right.png) |
| treeTable | 码表转换 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| list | 设置Select、TreeSelect选项 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| layout | 表单项布局 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| showType | Select组件显示方式 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| isSelectLeaf | TreeSelect 只能选择叶子节点 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| showSearch | 是否支持搜索框，用于Selete及TreeSelect | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| labelInValue | 是否把每个选项的 label 包装到 value 中 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| placeholder | 文本框的占位符 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |

### 筛选项工具栏区域 config.grid_filter_quick
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| label | 标签的文本 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| name | 字段名 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| type | 录入项类别 | ![](/right.png) | ![](/wrong.png) | ![](/right.png) | ![](/right.png) |
| tooltip | 配置提示信息 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| defaultValue | 默认值 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |
| list | 设置Select、TreeSelect选项 | ![](/right.png) | ![](/wrong.png) | ![](/wrong.png) | ![](/wrong.png) |

<!-- ### config.grid_setting_sort
| 参数 | 参数说明 | Json编码 | Excel & 批处理 | Excel & 导入 | 页面配置 |
| --- | --- | --- | --- | --- | --- |
| name | ✔ | --- | --- | --- |
| col | ✔ | --- | --- | --- |
| asc | ✔ | --- | --- | --- | -->


## 数据驱动视图组件树
![](/dataToView/compontTree.png)