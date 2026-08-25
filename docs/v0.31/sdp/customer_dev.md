# 开发者进阶

## 字典自定义开发

### 1. 添加自定义按钮
* 配置工具栏自定义按钮，并开发其业务逻辑，多用于针对查询列表的一条或多条数据进行处理。`customer_toobar`
* 配置列表列自定义按钮，并开发其业务逻辑，多用于针对查询列表的当前行数据进行处理。`handle_columns`

### 2. 对列表自定义开发
* 按照当前行数据设置操作列是否可用。`handle_columns disabled`
* 对列表单元格进行个性化渲染展示。`columnsRender`
* 自定义列表行单击事件。`gridOnRowClick#`
* 自定义列表行双击击事件。`gridOnRowDoubleClick`
* 列表首选项改变时执行自定义方法，即选择Chexcbox、Radion回调。`rowSelection`
* 列表数据删除前执行自定义方法，如需要验证删除数据的合理性。`beforeDelete`
* 列表数据删除失败后调用自定义方法，如弹窗显示特殊格式异常信息及应对方案。`afterDeletionFailure`
* 列表数据加载后调用自定义方法，如获取加载后的第一行数据等。`afterReload`

### 3. 对表单生命周期自定义开发
* 打开新建弹窗前调用自定义方法，如填充表单值、设置某项只读。`initAddForm`
* 打开编辑弹窗前调用自定义方法，如提前填充表单值、设置某项只读。`initEditForm`
* 表单提交前调用自定义方法，如设置私有化的表单校验或其他业务处理。`formBeforeSubmit`
* 表单保存成功后回调，如更新码表。`afterFormSaveSuccess`
* 表单删除成功后回调，如更新码表。`afterFormDeleteSuccess`

### 4. 对表单采集项自定义开发
* 除如长度，类型，大小等常规表单校验项外，自定义表单项校验方法。`validator`
* 添加自定义表单项事件OnChange、OnBlur、OnFocus。`eventOnChange、OnBlur、OnFocus`

### 5. 对媒体列表自定义开发
* 默认卡片展示无法满足需求是，自定义开发卡片展现页面。

### 6. 默认接口扩展
* 数据的增删查改、导入、导出接口可采用默认，也可自定义接口。



## 其他

### 1. 添加自定义开发内容
##### 建立页面
示例：
1. \src\pages\example\json_page\unit_from_api\index.tsx
1. \src\pages\example\json_page\unit_from_api\f.tsx

##### 建立菜单并绑定页面
示例：
1. \config\routes\routes.example.ts

### 2. 媒体类字典开发 <Badge text="2024-11-19" type="tip" />

#### 媒体管理模块构建与使用
媒体管理中的视频预览依赖组件`react-player`，如果是增量更新，需要执行依赖安装`yarn add react-player`。

* **模块构建**
1. 在`敏捷开发 - 系统构建`模块中导入构建文件[`数据字典_字典导入_媒体管理_vyyyymmdd.x.y.z.xlsx`](/sdp/docs_map.html)，完成`媒体管理`模块构建。
1. 刷新页面，可以看到`媒体管理`模块菜单。

* **模块使用**
1. 通过`新建`按钮完成媒体类型的文件采集（支持多文件上传），可以设置媒体名称、备注等附属信息，如果附属信息字段无法满足业务需求，可自行修改`数据字典_字典导入_媒体管理_vyyyymmdd.x.y.z.xlsx`构建文件，添加业务需要字段后在进行采集。
1. 采集的文件将以宫格卡片的形式展示在列表中，视频、音频、图片类型文件支持预览，其他类型文件不支持，仅以图标进行区分展示。
1. 列表页面可切换显示宫格、列表两种状态。
1. 图片、视频类型文件可以直接预览。

#### 构建含有媒体类型的字典模块
可以参照示例构建含有媒体类型的模块，媒体模块通常以宫格卡片形式展现。表单采集时通过侧滑弹窗选择需要的媒体资源。
* **涉及媒体类型的构建内容：**
1. [Sheet.模块 - 列表扩展：`card`](/sdp/build_by_excel/2-sheet_module.html#列表扩展)
1. [Sheet.字典构建 - 列表项格式化列： `media:imagepath`、`media:videopath`、`media:title`、`media:description`](/sdp/build_by_excel/3-sheet_dict.html#参数8列表项格式化列)
1. [Sheet.字典构建 - 表单项类型： `MediaLibrary`](/sdp/build_by_excel/3-sheet_dict.html#参数2表单项类型)

*  **示例：含有媒体类型的字典模块使用**
1. 卡片图片 \
    参照`前端媒体示例 - 卡片图片`菜单，支持任意字典字段设定为图片地址、标题、描述。
1. 卡片视频 \
    参照`前端媒体示例 - 卡片视频`菜单，支持任意字典字段设定为图片地址、标题、描述。
1. 卡片自定义 \
    参照`前端媒体示例 - 卡片自定义`菜单，支持自行编码卡片内容。

### 3. 资源权限开发 <Badge text="2024-11-26" type="tip" />

#### 使用方式
##### 字典模块
**通过Excel构建系统时使用**

![](/excel_intro/module_intro_23.png)

![](/excel_intro/module_intro_24.png)

* 默认按钮配置 \
构建Excel文件，`Sheet.菜单构建`中： \
(1)`菜单名称`栏填写按钮名称，位于需要添加按钮的菜单下一层级。 \
(2)`前端组件ID`栏中填写`权限按钮ID`，格式：`模块key_按钮英文标识`，按钮英文标识不可更改，为系统预制。  \
    &emsp;如模块key是test_app_mts_tssb，则配置如下： \
    &emsp;工具栏新建：`test_app_mts_tssb_toolbar_add` \
    &emsp;工具栏编辑：`test_app_mts_tssb_toolbar_edit` \
    &emsp;工具栏删除：`test_app_mts_tssb_toolbar_delete` \
    &emsp;工具栏导出：`test_app_mts_tssb_toolbar_download` \
    &emsp;工具栏导入：`test_app_mts_tssb_toolbar_upload` \
    &emsp;列表栏编辑：`test_app_mts_tssb_grid_col_edit` \
    &emsp;列表栏删除：`test_app_mts_tssb_grid_col_delete`
* 自定义按钮配置 \
构建Excel文件，`Sheet.菜单构建`中： \
(1)`菜单名称`栏填写按钮名称，位于需要添加按钮的菜单下一层级。 \
(2)`前端组件ID`栏中填写`权限按钮ID`，且需要满足： \
    &emsp;ID全局唯一，不可重复。 \
    &emsp;与`Sheet.模块`中，`自定义按钮工具栏`或`列表列自定义按钮`栏中填写的ID一致。 \
    &emsp;如`Sheet.模块`中，`自定义按钮工具栏`中的一个按钮填写为`开票&doKp&kp_001`，则`前端组件ID`填写`kp_001`。

##### 非字典模块
**通过模块`系统管理 - 菜单管理`建立菜单**
    * 按钮配置 \
      菜单编辑页面，分类选择`按钮`，同时录入`菜单/资源代码（权限按钮ID）`，规则同上述自定义按钮配置。
    * 页面开发 \
      参考资料： https://umijs.org/docs/max/access#access-1 \
      按钮权限开发一般会使用`Access`、`useAccess`组件，如按钮编码常用格式：
```html
<Access accessible={...}>
  <Button size="small" type="link">编辑</Button>
</Access>
```


#### 实现方式
1. 系统加载时，获取所有`权限按钮ID数组`（通过Excel字典构建或菜单管理中添加维护）。
1. 用户登录时，获取有使用权限的`用户权限按钮ID数组`。
1. 进入含有`权限按钮`页面时，依次判断每个`权限按钮`：
    * 是否开启资源权限判断（配置文件中是否开启资源权限判断标识）：`OPEN_RESOURCE_AUTHORITY` \
      IF false：有权限 \
      IF true: 后续流程
      ```ts
      OPEN_RESOURCE_AUTHORITY: true, // 是否开启资源权限判断
      ```
    * 判断`权限按钮ID`是否在`权限按钮ID数组` \
      IF 不存在：有权限 \
      IF 存在：后续流程
    * 用户使用权限判断，`权限按钮ID`是否在`用户权限按钮ID数组` \
      IF 存在：有权限 \
      IF 不存在：无权限
