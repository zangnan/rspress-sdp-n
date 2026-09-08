import { Badge } from '@theme';

# 事件 & API

## 事件 f.tsx

### useEffectEnd

页面元素初始化后执行。

### afterReload

列表数据加载后执行，操作需要依赖当前列表数据，如获取加载后的第一行数据等。

### initAddForm

表单新建初始化，打开新建弹窗前执行，如提前填充表单值、设置某项只读。

### initEditForm

表单编辑初始化，打开编辑弹窗前执行，如提前填充表单值、设置某项只读。

### formBeforeSubmit

表单提交前调用，返回tree则正常提交，返回false则阻断提交。

### beforeDelete

删除前执行，如需要验证删除数据的合理性，返回tree则正常提交，返回false则阻断提交。

### afterDeletionFailure

删除失败后调用，如弹窗后端返回的特殊格式异常信息。

### afterFormSaveSuccess

表单保存成功后回调，如更新码表。

### afterFormDeleteSuccess

表单删除成功后回调，如更新码表。

### gridOnRowClick

列表行单击事件。

### gridOnRowDoubleClick

列表行双击击事件。

### rowSelection

列表首选项改变时回调，即选择Chexcbox、Radion回调。

### handleExport

自定义导出。

### columnsRender

列表自定义渲染

```ts title="f.tsx"
Func.columnsRender = {
  // 对应的列表列配置 { title: 'xxx', dataIndex: 'xxx', width: 100, render: { func: 'renderXX1' } }
  renderXX1: (param: any) => {
    return <span>自定义内容1</span>;
  },
  // 对应的列表列配置 { title: 'xxx', dataIndex: 'xxx', width: 100, render: { func: 'renderXX2' } }
  renderXX2: (param: any) => {
    return <span>自定义内容2</span>;
  },
}
```

### statistics

列表合计自定义渲染

```ts title="f.tsx"
Func.statistics = {
  sum2: {
    je: ({sum2}: any) => '自行格式化： ' + sum2?.je || 0
  },
  min2: {
    je: ({min2}: any) => '自行格式化： ' + min2?.je || 0
  },
  max2: {
    je: ({max2}: any) => '自行格式化： ' + max2?.je || 0
  },
  avg2: {
    je: ({avg2}: any) => '自行格式化： ' + avg2?.je || 0
  }
}
```

### isSonTableEdit

子表数据是否可以编辑（新建、编辑、删除按钮是否可用）

```ts title="f.tsx"
Func.isSonTableEdit = ({record}: any) => {
  if (record.xxx === '1') {
    return false;
  }
  return true;
}
```

### poweroff

开关图标点击回调

```ts title="f.tsx"
// 开关图标点击回调
Func.poweroff = {
// 对应的列表列配置 { title: '状态', dataIndex: 'spzt', width: 95, render: { poweroff: 'handleSetStatus1' } },
  handleSetStatus1: (param: any) => {
    console.info('开关图标点击回调', param);
  },
}
```

### setGridTitle

// 自定义列表标题区域

```ts title="f.tsx"
Func.setGridTitle = (param: any) => {
  console.info('配置项：自定义列表标题区域', param);
  return <span>自定义标题</span>;
}
```

### setEditDisabled\_moduleKey

默认操作列编辑只读属性的自定义渲染，如根据列表数据中的某一项动态设置编辑、删除按钮的只读状态。

```ts title="f.tsx"
Func.setEditDisabled_mdouleKey = (param: any) => {
  if (param.xxx ===  '1') {
    return true;
  }
  return false;
}
```

### setDeleteDisabled\_moduleKey

默认操作列删除只读属性的自定义渲染，如根据列表数据中的某一项动态设置编辑、删除按钮的只读状态。

```ts title="f.tsx"
Func.setDeleteDisabled_mdouleKey = (param: any) => {
  if (param.xxx ===  '1') {
    return true;
  }
  return false;
}
```

### 自定义工具栏

```ts title="f.tsx"
// 配置项：自定义工具栏
// 对应配置 customer_toobar: [ { name: 'xxx', key: 'xxx', func: 'handleCostomerToobar1' }, ];
Func.handleCostomerToobar1 = (param: any) => {
  console.info('配置项：自定义工具栏', param);
}
```

### 自定义操作列

```ts title="f.tsx"
// 配置项：自定义操作列
// 对应配置 handle_columns: [ { name: 'xxx', key: 'xxx', func: 'handleColumns1' }, ];
Func.handleColumns1 = (param: any, event: any) => {
  console.info('配置项：自定义操作列', param, event);
}
```

### 自定义操作列是否可用

根据当前数据状态判断操作列disabled状态。

```ts title="f.tsx"
// 配置项：自定义操作列是否可用
// 对应配置 handle_columns: [ { name: 'xxx', key: 'xxx', func: 'xxx', disabled: 'setCs3Disabled' }, ];
Func.setCs3Disabled = (record: any) => {
  if (record.jgfsDm === '0139' || record.jgfsDm === '0110' || record.jgfsDm === '0160') {
    return true;
  }
  return false;
}
```

### 自定义表单项校验

```ts title="f.tsx"
Func.validator = {
  // itemXXX
  // 对应的表单项配置 form_items: [{ label: 'xxx', type: 'xxx', name: 'xxx', rules: [ { func: 'itemXXX' } ]},
  itemXXX: (form: any) => {},
}
```

### 自定义表单项事件 OnChange

```ts title="f.tsx"
Func.eventOnChange = {
  // itemXXX
  // 对应的表单项配置 form_items: [{ label: 'xxx', type: 'xxx', name: 'xxx', eventOnChange: 'itemXXX' },
  itemXXX: (param: any) => {},
}
```

### 自定义表单项事件 OnBlur

```ts title="f.tsx"
Func.OnBlur = {
  // itemXXX
  // 对应的表单项配置 form_items: [{ label: 'xxx', type: 'xxx', name: 'xxx', eventOnBlur: 'itemXXX' },
  itemXXX: (param: any) => {},
}
```

### 自定义表单项事件 OnFocus

```ts title="f.tsx"
Func.eventOnFocus = {
  // itemXXX
  // 对应的表单项配置 form_items: [{ label: 'xxx', type: 'xxx', name: 'xxx', eventOnFocus: 'itemXXX' },
  itemXXX: (param: any) => {},
}
```

## API

### DDBunit2

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| [config](/rspress-sdp-n/component/unit/api_event.md#config) | 基础配置 | object | - |
| func | 列的自定义渲染、操作列设置、行单/双击事件...，参照 \[代码演示]\(/component/unit/eg\_code.html | object | - |

### config

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| unit\_key | 业务单元key，对应后端接口 | string | - |
| page\_id | 页面id | string | - |
| layout\_type | 页面类型 | `default`|`modal`|`tabs` | `default` |
| form\_title | 表单：标题，可选 | string | - |
| form\_save\_check | 表单：编辑是否执行后端校验，默认false不执行 | boolean | false |
| grid\_show\_serial\_number | 列表：是否显示序号 | boolean | false |
| grid\_title | 列表：标题 | string/object | - |
| grid\_click\_checked | 列表：开启单击或双击勾选，1单击勾选，2双击勾选 | `1`|`2` | - |
| grid\_sticky\_affix | 列表：列表锁定高度，如果layout\_type=default=>94；tabs=>134 | number | - |
| grid\_scroll\_y | 列表：y轴滚动条，默认null | number | - |
| grid\_scroll\_x | 列表：x轴滚动条，默认700px | number | 700 |
| grid\_selection\_type | 列表：首选项类别 | `false`|`radio`|`checkbox` | `checkbox` |
| grid\_border | 列表：边框 | boolean | true |
| grid\_handle\_width | 列表：自定义操作列宽度 | number | - |
| grid\_row\_key | 列表：主键 | string|array | uuid |
| toolbar\_show\_grid\_checked\_num | 工具栏：是否显示数据条数及选中数 | boolean | false |
| toolbar\_open | 工具栏：是否开启，默认true显示 | boolean | true |
| toobar\_affix | 工具栏：锁定高度，如果layout\_type=default=>44；tabs=>84 | number | - |
| api\_grid\_query | api：列表查询 | string | - |
| api\_form\_query | api：表单查询 | string | - |
| api\_form\_edit | api：表单更新 | string | - |
| api\_form\_delete | api：表单删除 | string | - |
| api\_excel\_export | api：导入 | string | - |
| api\_excel\_import | api：导出 | string | - |
| api\_excel\_template | api：模板下载 | string | - |
| api\_form\_check | api：表单校验 | string | - |
| form\_items | 表单项，参照[基础表单](/rspress-sdp-n/component/baseform/api_event.md#configform_items) | array | - |
| grid\_columns | 列表列，参照[基础列表](/rspress-sdp-n/component/basegrid/api_event.md#configgrid_columns) | array | - |
| filter\_items | 普通筛选，参照[基础表单](/rspress-sdp-n/component/baseform/api_event.md#configform_items) | array | - |
| grid\_filter\_quick  | 快捷筛选，参照[基础表单](/rspress-sdp-n/component/baseform/api_event.md#configform_items) | array | - |
| [grid\_sum\_field](/rspress-sdp-n/component/unit/api_event.md#configgrid_sum_field) | 列表统计字段 | array | - |
| [toolbar\_default](/rspress-sdp-n/component/unit/api_event.md#configtoolbar_default) | 工具栏默认模块 | object | - |
| [costomer\_toobar](/rspress-sdp-n/component/unit/api_event.md#configcostomer_toobar) | 工具栏自定义模块 | array | - |
| [grid\_handle\_columns\_default](/rspress-sdp-n/component/unit/api_event.md#configgrid_handle_columns_default) | 列表默认操作列 | object | - |
| [handle\_columns](/rspress-sdp-n/component/unit/api_event.md#confighandle_columns) | 列表自定义操作列 | array | - |
| [grid\_setting\_sort](/rspress-sdp-n/component/unit/api_event.md#configgrid_setting_sort) | 列表排序字段设置 | array | - |

### config.grid\_sum\_field

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 显示名称 | string | - |
| field | 对应列表字段 | string | - |
| unit | 单位 | string | - |
| format | 格式化 | string | - |

### config.toolbar\_default

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| add | 是否显示增加按钮 | boolean | false |
| edit | 是否显示修改按钮 | boolean | false |
| delete | 是否显示删除按钮 | boolean | false |
| setting | 是否显示设置按钮 | boolean | false |
| full | 是否显示全屏按钮 | boolean | false |
| download | 是否显示导出按钮 | boolean | false |
| upload | 是否显示导入按钮 | boolean | false |
| reload | 是否显示刷新按钮 | boolean | false |
| delete\_by\_condition <Badge text="2025-09-23" type="tip" /> | 筛选删除按钮 | boolean | false |

### config.grid\_handle\_columns\_default

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| edit | 是否显示编辑链接 | boolean | false |
| delete | 是否显示删除链接 | boolean | false |
| detail | 是否显示详情链接 | boolean | false |

### config.grid\_setting\_sort

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 排序字段英文名 | string | - |
| col | 排序字段中文名 | string | - |
| asc | 排序规则 |  `asc`|`desc` | - |

### config.costomer\_toobar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 按钮名称 | string | - |
| key | 按钮键值 | string | - |
| func | 按钮方法 | function | - |
| disabled | 是否可用 | boolean | - |
| type | 按钮类型 | string | - |
| list | 下拉按钮 | array | - |

### config.handle\_columns

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 链接名称 | string | - |
| key | 链接键值 | string | - |
| func | 链接方法 | function | - |
| disabled | 是否可用 | boolean | - |
