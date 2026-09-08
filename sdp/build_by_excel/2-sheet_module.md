import { Badge } from '@theme';

# Sheet.模块

## 填写示例

![](/excel_intro/module_intro_81.png)

![](/excel_intro/module_intro_82.png)

![](/excel_intro/module_intro_83.png)

![](/excel_intro/module_intro_84.png)

![](/excel_intro/module_intro_85.png)

## 填写说明

### 模块

* 参数取值说明

| 参数 | 对应api参数 | 说明 |
| --- | --- | --- |
| 模块key | unit\_key | 模块唯一标识 |
| 模块名称 | grid\_title & form\_title | |

### 列表

#### 序号、边框、首选项

![](/excel_intro/module_intro_02.png)

* 参数取值说明

| 参数 | 默认值 | 可选值 | 对应api参数 |
| --- | --- | --- | --- |
| 列表序号 | | `1` | grid\_show\_serial\_number |
| 列表边框 | | `1` | grid\_border |
| 列表首选项 | `checkbox` | `checkbox` | `radio` | `null` | grid\_selection\_type |

#### 列编辑、列删除、列详情

![](/excel_intro/module_intro_03.png)

* 参数取值说明

| 参数 | 默认值 | 可选值 | 对应api参数 |
| --- | --- | --- | --- |
| 列表列编辑 | | `1` | grid\_handle\_columns\_default.edit |
| 列表列删除 | | `1` | grid\_handle\_columns\_default.delete |
| 列表列详情 | | `1` | grid\_handle\_columns\_default.detail |

#### 列表扩展 <Badge text="2024-11-19" type="tip" />

![](/excel_intro/module_intro_20.png)

* 参数取值说明

| 参数 | 默认值 | 可选值 | 对应api参数 |
| --- | --- | --- | --- |
| 7.列表扩展 <Badge text="2024-11-19" type="tip" /> | | `card` | grid\_type |

### 工具栏默认按钮

![](/excel_intro/module_intro_01.png)

* 参数取值说明

| 参数 | 默认值 | 可选值 | 对应api参数 |
| --- | --- | --- | --- |
| 工具栏增加 | | `1` | toolbar\_default.add |
| 工具栏删除 | | `1` | toolbar\_default.delete |
| 工具栏编辑 | | `1` | toolbar\_default.edit |
| 工具栏导入 | | `1` | toolbar\_default.upload |
| 工具栏导出 | | `1` | `2`| `pdf` | toolbar\_default.download & toolbar\_default.download\_config & toolbar\_default.download\_pdf |
| 工具栏设置 | | `1` | toolbar\_default.setting |
| 工具栏全屏 | | `1` | toolbar\_default.full |
| 工具栏刷新 | | `1` | toolbar\_default.reload |
| 工具栏筛选 | | `1` | toolbar\_default.advanced\_filter |

* 参数5.工具栏导出，
  如果设置为包含`2`，则为后端导出数据。如：填写`1,pdf`表示开启Excel前端导出数据和PDF导出。
  <Badge text="2025-2-13" type="tip" />

### 后端Api

* 参数取值说明

| 参数 | 默认值 | 可选值 | 对应api参数 |
| --- | --- | --- | --- |
| Api保存表单 | | | api\_form\_edit |
| Api查询表单 | | | api\_form\_query |
| Api删除 | | | api\_form\_delete |
| Api查询列表 | | | api\_grid\_query |
| Api导出 | | | api\_excel\_export |
| Api导入 | | | api\_excel\_import |
| Api模板下载 | | | api\_excel\_template |

### 表单

![](/excel_intro/module_intro_05.png)

![](/excel_intro/module_intro_06.png)

* 参数取值说明

| 参数 | 默认值 | 可选值 | 对应api参数 |
| --- | --- | --- | --- |
| 表单布局 | `horizontal` | `horizontal` | `vertical` | `2` | `3` | `4` | form\_layout\_type |
| 表单宽度 | `960` | `480` | `720` | `960` | `1200` | `max` | form\_width |
| 表单提交方式 <Badge text="2024-10-31" type="tip" /> | | `1` | form\_submit\_type |

* 参数3.表单提交方式：如果设置为`1`，则采用`FormData`格式提交数据至后端。

### 自定义按钮

![](/excel_intro/module_intro_04.png)

* 参数取值说明

| 参数 | 默认值 | 可选值 | 对应api参数 |
| --- | --- | --- | --- |
| 自定义按钮工具栏 | | | customer\_toobar |
| 列表列自定义按钮 | | | handle\_columns |
