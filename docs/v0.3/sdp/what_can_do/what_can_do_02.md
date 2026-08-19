# 开发者进阶
## 1. 添加自定义按钮
* 配置工具栏自定义按钮，并开发其业务逻辑，多用于针对查询列表的一条或多条数据进行处理。`customer_toobar`
* 配置列表列自定义按钮，并开发其业务逻辑，多用于针对查询列表的当前行数据进行处理。`handle_columns`

## 2. 对列表的自定义开发
* 按照当前行数据设置操作列是否可用。`handle_columns disabled`
* 对列表单元格进行个性化渲染展示。`columnsRender`
* 自定义列表行单击事件。`gridOnRowClick#`
* 自定义列表行双击击事件。`gridOnRowDoubleClick`
* 列表首选项改变时执行自定义方法，即选择Chexcbox、Radion回调。`rowSelection`
* 列表数据删除前执行自定义方法，如需要验证删除数据的合理性。`beforeDelete`
* 列表数据删除失败后调用自定义方法，如弹窗显示特殊格式异常信息及应对方案。`afterDeletionFailure`
* 列表数据加载后调用自定义方法，如获取加载后的第一行数据等。`afterReload`

## 3. 对表单采集生命周期的自定义开发
* 打开新建弹窗前调用自定义方法，如填充表单值、设置某项只读。`initAddForm`
* 打开编辑弹窗前调用自定义方法，如提前填充表单值、设置某项只读。`initEditForm`
* 表单提交前调用自定义方法，如设置私有化的表单校验或其他业务处理。`formBeforeSubmit`
* 表单保存成功后回调，如更新码表。`afterFormSaveSuccess`
* 表单删除成功后回调，如更新码表。`afterFormDeleteSuccess`

## 4. 对表单采集项进行自定义开发
* 除如长度，类型，大小等常规表单校验项外，自定义表单项校验方法。`validator`
* 添加自定义表单项事件OnChange、OnBlur、OnFocus。`eventOnChange、OnBlur、OnFocus`

## 5. 对媒体列表的自定义开发
* 默认卡片展示无法满足需求是，自定义开发卡片展现页面。

## 6. 默认接口扩展
* 数据的增删查改、导入、导出接口可采用默认，也可自定义接口。
