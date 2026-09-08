import { Badge } from '@theme';

# Sheet.自定义码表

## 填写示例

![](/excel_intro/module_intro_26.png)

![](/excel_intro/module_intro_25.png)

* 上述示例第1行：取`eg_org`表的`org_name`、`org_id`、`pid`字段作为码表字段，匹配前端格式为`name`、`code`、 `pid`字段，码表标识为`code_dm_def_003`。
* 上述示例第2行：取`dict_name`表的`dict_name`、`dict_desc`字段作为码表字段，匹配前端格式为`name`、`code`字段，码表标识为`code_dm_def_table`。
* 上述示例第3行：自定义sql作为码表字段来源，码表标识为`code_dm_def_004`。

## 填写说明

* 参数取值说明

| 参数 | 说明 |
| --- | --- |
| 码表KEY | |
| 码表数据库表 | |
| 码表类别 | |
| codeName数据库字段名称 | |
| codeValue数据库字段名称 | |
| codeName前端名称 | |
| codeValue前端名称 | |
| 父节点codeValue数据库字段名称  <Badge text="2025-01-01" type="tip" /> | |
| 自定义SQL | |
| 码表名称 | |
