# 代码演示

## 简单示例

![](/component/baseform01.png)

### config.ts

```ts title="config.ts"
export default {
  form_layout_type: 4, // 表单整体一列或多列布局: horizontal vertical 2 3 4 6 8 12
  form_label_input_layout: 'vertical', // 标签与录入框排列方式: horizontal vertical
  // 配置项：表单项
  form_items: [
    { label: 'ID', type: 'Hidden', name: 'uuid' },
    { label: '基本信息', type: 'GroupTitle', name: 'jbxx' },
    { label: '报关单号', type: 'Input', name: 'ckbgdh', tooltip: '报关单号说明...', rules: [
      { type: 'base_required', message: '必录项可选提示信息' },
    ] },
    { label: '出口日期', type: 'DatePicker', name: 'ckrq1', format: 'YYYY-MM-DD' },
    { label: '出口合同号', type: 'Input', name: 'ckhth' },
    { label: '核销单号', type: 'Input', name: 'hxdh' },
    { label: '运输工具名称', type: 'Input', name: 'ysgjmc' },
    { label: '单证', name: 'dz1', type: 'TreeSelect', isSelectLeaf: true, showSearch: true, labelInValue: false, treeTable: ['CODE_DM_BADZ_BADZ', '01'] },
    { label: '单证', name: 'dz2', type: 'TreeSelect', isSelectLeaf: true, showSearch: true, labelInValue: false, list: [
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
    },
    { label: '监管方式代码', type: 'Input', name: 'jgfsDm' },
    { label: '海关成交方式', type: 'Select', name: 'hgcjfsmc', codeTable: 'code_static_hgcjfs_mc' },
    { label: '国别', type: 'Select', name: 'gb',  list: [
        { name: '中国', value: 'china' },
        { name: '日本', value: 'japan' },
        { name: '韩国', value: 'korea' },
    ] },
    { label: '成交海关货币字母代码', type: 'Input', name: 'cjhghbzmDm' },
    { label: '成交总价', type: 'InputNumber', name: 'cjzj', format: '0,0.00' },
    { label: '运费海关货币字母代码', type: 'Input', name: 'yfhghbzmDm' },
    { label: '运费金额', type: 'InputNumber', name: 'yfje', format: '0,0.00' },
    { label: '运费计算方式代码', type: 'Select', name: 'yfjsfsDm', codeTable: 'code_dm_ckts_hgyfjsfs' },
    { label: '运费折算数量', type: 'InputNumber', name: 'yfzssl', format: '0,0.0000' },
    { label: '保费海关货币字母代码', type: 'Input', name: 'bfhghbzmDm' },
    { label: '保费金额', type: 'InputNumber', name: 'bfje', format: '0,0.00' },
    { label: '保费计算方式代码', type: 'Select', name: 'bfjsfsDm', codeTable: 'code_dm_ckts_hgbfjsfs' },
    { label: '杂费海关货币字母代码', type: 'Input', name: 'zfhghbzmDm' },
    { label: '杂费金额', type: 'InputNumber', name: 'zfje1', format: '0,0.00' },
    { label: '杂费计算方式代码', type: 'Select', name: 'zfjsfsDm', codeTable: 'code_dm_ckts_hgzfjsfs' },
    { label: '商品信息', type: 'GroupTitle', name: 'spxx' },
    { label: '出口商品代码', type: 'Input', name: 'ckspDm' },
    { label: '出口商品名称', type: 'Input', name: 'ckspmc', readOnly: true },
    { label: '海关商品名称', type: 'Input', name: 'hgspmc' },
    { label: '成交计量单位', type: 'Input', name: 'hgjldwmc' },
    { label: '成交数量', type: 'InputNumber', name: 'cjsl1', format: '0,0.0000' },
    { label: '法定计量单位', type: 'Input', name: 'dyjldwDm' },
    { label: '法定数量', type: 'InputNumber', name: 'cksl', format: '0,0.0000' },
    { label: '第二计量单位', type: 'Input', name: 'dejldwDm' },
    { label: '第二出口数量', type: 'InputNumber', name: 'decksl', format: '0,0.0000' },
    { label: '规格型号', type: 'Input', name: 'ggxh' },
    { label: '数据检查标志', type: 'Hidden', name: 'cytgbz' },
    { label: '其他信息', type: 'GroupTitle', name: 'qtxx' },
    { label: '备注', type: 'TextArea', name: 'bz', autoSize: { minRows:3, maxRows: 3}, layout: {
      xs: {span: 24, offset: 0, pull: 0},
      sm: {span: 24, offset: 0, pull: 0},
      md: {span: 24, offset: 0, pull: 0},
      lg: {span: 24, offset: 0, pull: 0},
      xl: {span: 24, offset: 0, pull: 0},
      xxl: {span: 24, offset: 0, pull: 0}
    } },
  ],
};
```

### index.tsx

```ts title="index.tsx"
import React, { useEffect } from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Button, Form } from 'antd';
import DDBaseForm from '@/components/DDForm/DDBaseForm';
import formConfig from './config';
import { Typography } from 'antd';
import { FooterToolbar } from '@ant-design/pro-components';

const TableList: React.FC<unknown> = () => {
  const [form] = Form.useForm();
  useEffect(() => {
  }, []);

  const onReset = () => {
    form.resetFields();
  };

  const onSave = () => {
    form.validateFields().then(async (values: any) => {
      console.info(values)
    });
  };

  return (<>
    <Typography.Title level={4}>表单 - 简单示例</Typography.Title>
    <ProCard>
      <DDBaseForm config={formConfig} form={form} initialValues={{}}/>
      <FooterToolbar >
        <Button type='default' onClick={onReset}>重置</Button>
        <Button type='primary' onClick={onSave}>保存</Button>
      </FooterToolbar>
    </ProCard>
  </>);
};

export default TableList;

```

## 自定义事件及校验

![](/component/baseform02.png)

### config.ts

```ts title="config.ts"
export default {
  form_layout_type: 4, // 表单整体一列或多列布局: horizontal vertical 2 3 4 6 8 12
  form_label_input_layout: 'vertical', // 标签与录入框排列方式: horizontal vertical
  // 配置项：表单项
  form_items: [
    { label: 'Select', type: 'GroupTitle', name: 'zdsj' },
    { label: 'Select1', type: 'Select', name: 'test81', codeTable: 'code_dm_ckts_cktmsywlx', showSearch: true, layout: {
      xs: {span: 5, offset: 0, pull: 0},
      sm: {span: 5, offset: 0, pull: 0},
      md: {span: 5, offset: 0, pull: 0},
      lg: {span: 5, offset: 0, pull: 0},
      xl: {span: 5, offset: 0, pull: 0},
      xxl: {span: 5, offset: 0, pull: 0}
    } },
    { label: 'Select3', type: 'Select', name: 'test82', showType: '2', codeTable: 'code_dm_ckts_cktmsywlx' },
    { label: 'Select2', type: 'Select', name: 'test83', showType: '3', codeTable: 'code_dm_ckts_cktmsywlx', eventOnChange: 'test83', mode: 'multiple', layout: {
      xs: {span: 2, offset: 0, pull: 0},
      sm: {span: 2, offset: 0, pull: 0},
      md: {span: 2, offset: 0, pull: 0},
      lg: {span: 2, offset: 0, pull: 0},
      xl: {span: 2, offset: 0, pull: 0},
      xxl: {span: 2, offset: 0, pull: 0}
    } },
    { label: 'Select2Name', type: 'Input', name: 'test84', readOnly: true, layout: {
      xs: {span: 6, offset: 0, pull: 0},
      sm: {span: 6, offset: 0, pull: 0},
      md: {span: 6, offset: 0, pull: 0},
      lg: {span: 6, offset: 0, pull: 0},
      xl: {span: 6, offset: 0, pull: 0},
      xxl: {span: 6, offset: 0, pull: 0}
    } },
    { label: '字段事件', type: 'GroupTitle', name: 'zdsj' },
    { label: 'OnChange1', type: 'Input', name: 'test91', eventOnChange: 'test91' },
    { label: 'OnBlur', type: 'Input', name: 'test92', eventOnBlur: 'test92' },
    { label: 'OnFocus', type: 'Input', name: 'test93', eventOnFocus: 'test93' },
    { label: 'OnChange2', type: 'Select', name: 'test94', eventOnChange: 'test94', list: [
      { value: 'a', name: 'A' },
      { value: 'b', name: 'B' },
    ]},
    { label: 'OnChange3', type: 'DatePicker', name: 'test95', eventOnChange: 'test95' },
    { label: '必录信息', type: 'GroupTitle', name: 'blxx' },
    { label: '必填字段', type: 'Input', name: 'test01', rules: [
      { type: 'base_required', message: '必录项可选提示信息' },
    ]},
    { label: '按需必填字段', type: 'Input', name: 'test02', tooltip: 'OnChange1字段非空，则必录', rules: [
      { func: 'myValidator02' },
    ]},
    { label: '按需只读字段', type: 'Input', name: 'test03', tooltip: 'OnChange1字段非空，则只读' },
    { label: '按需只读字段', type: 'Select', name: 'test04', tooltip: 'OnChange1字段非空，则只读', list: [
      { value: 'a', name: 'A' },
      { value: 'b', name: 'B' },
    ]},
    { label: '字符校验', type: 'GroupTitle', name: 'zfjy' },
    { label: '字符长度3', type: 'Input', name: 'test11', rules: [
      { type: 'base_string', length: 3},
    ]},
    { label: '字符范围0-5', type: 'Input', name: 'test12', rules: [
      { type: 'base_string', range: 5 },
    ]},
    { label: '字符范围3-10', type: 'Input', name: 'test13', rules: [
      { type: 'base_string', range: [3, 10]},
    ]},
    { label: '日期校验', type: 'GroupTitle', name: 'rqjy' },
    { label: '日期yyyyMMdd', type: 'Input', name: 'test21', rules: [
      { type: 'base_date', format: 'yyyyMMdd'},
    ]},
    { label: '日期yyyyMM', type: 'Input', name: 'test22', rules: [
      { type: 'base_date', format: 'yyyyMM'},
    ]},
    { label: '日期yyyy', type: 'Input', name: 'test23', rules: [
      { type: 'base_date', format: 'yyyy'},
    ]},
    { label: '日期MM', type: 'Input', name: 'test24', rules: [
      { type: 'base_date', format: 'MM'},
    ]},
    { label: '数值校验', type: 'GroupTitle', name: 'szjy' },
    { label: '数值NUMBER(10, 2)', type: 'InputNumber', name: 'test31', format: '0,0.00', rules: [
      { type: 'base_number', length: 10, decimal: 2 },
    ]},
    { label: '数值NUMBER(5)', type: 'InputNumber', name: 'test32', format: '0,0', rules: [
      { type: 'base_number', length: 5 },
    ]},
    { label: '数值+', type: 'InputNumber', name: 'test33', format: '0,0', rules: [
      { type: 'base_number', range: '+'},
    ]},
    { label: '数值-', type: 'InputNumber', name: 'test34', format: '0,0', rules: [
      { type: 'base_number', range: '-'},
    ]},
    { label: '数值0', type: 'InputNumber', name: 'test35', format: '0,0', rules: [
      { type: 'base_number', range: '0'},
    ]},
    { label: '数值+-', type: 'InputNumber', name: 'test36', format: '0,0', rules: [
      { type: 'base_number', range: '+-'},
    ]},
    { label: '数值+0', type: 'InputNumber', name: 'test37', rules: [
      { type: 'base_number', range: '+0'},
    ]},
    { label: '数值-0', type: 'InputNumber', name: 'test38', format: '0,0', rules: [
      { type: 'base_number', range: '-0'},
    ]},
    { label: '类型校验', type: 'GroupTitle', name: 'szjy' },
    { label: '数字', type: 'Input', name: 'test41', rules: [
      { type: 'base_type_number' },
    ]},
    { label: '数字及字母', type: 'Input', name: 'test42', rules: [
      { type: 'base_type_number_english' },
    ]},
    { label: '邮件', type: 'Input', name: 'test43', rules: [
      { type: 'base_type_mail' },
    ]},
    { label: '电话', type: 'Input', name: 'test44', enterFocus: false, tooltip: '取消默认回车焦点后移', rules: [
      { type: 'base_type_phone' },
    ]},
    { label: '身份证', type: 'Input', name: 'test45', rules: [
      { type: 'base_type_idcard' },
    ]},
    { label: '汉字', type: 'Input', name: 'test46', rules: [
      { type: 'base_type_chinese' },
    ]},
    { label: '自定义校验', type: 'GroupTitle', name: 'zdyjy' },
    { label: '后端校验', type: 'Input', name: 'test52', rules: [
      { func: 'myValidator52' },
    ]},
    { label: '自定义', type: 'Input', name: 'test51', rules: [
      { func: 'myValidator51' },
    ]},
    { label: '测试回车焦点', type: 'GroupTitle', name: 'szjy' },
    { label: 'TextArea', type: 'TextArea', name: 'test61', rules: [
      { type: 'base_type_number' },
    ]},
  ],
};
```

### index.tsx

```ts title="index.tsx"
import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Button, Form } from 'antd';
import DDBaseForm from '@/components/DDForm/DDBaseForm';
import formConfig from './config';
import { Typography } from 'antd';
import { FooterToolbar } from '@ant-design/pro-components';
import myUtil from '@/components/DDAssist/util';
import formUtil from '@/components/DDForm/formUtil';

const TableList: React.FC<unknown> = () => {
  const [form] = Form.useForm();
  const Func: any = {};
  // 表单校验
  Func.validator = {
    // 自定义校验
    myValidator51: (form: any) => {
      const formId = form?.__INTERNAL__?.name;    // 表单id
      const test01 = form?.getFieldValue('test01');    // 表单其他项目
      console.info(formId);
      console.info(test01);
      const validator = async (_rule: any, value: any) => {
        if (value !== '111') {
          return Promise.reject(new Error('自定义校验error'));
        }
        return Promise.resolve();
      };
      return { validator };
    },

    // 自定义校验 后端
    myValidator52: (form: any) => {
      const formId = form?.__INTERNAL__?.name;    // 表单id
      const test01 = form?.getFieldValue('test01');    // 表单其他项目
      console.info(formId);
      console.info(test01);
      const validator = async (_rule: any, value: any) => {
        console.info(_rule);
        console.info(value);
        await testReturnCode500({}).then((response) => {
          if (response.code === '500') {
            return Promise.reject(new Error('error 测试后端校验'));
          }
          return Promise.resolve();
        }).catch((err) => {
          return Promise.reject(err);
        });
        return Promise.resolve();
      };
      return { validator };
    },

    // 自定义校验
    myValidator02: (form: any) => {
      const test91 = form?.getFieldValue('test91');    // 表单其他项目
      const validator = async (_rule: any, value: any) => {
        if (test91) {
          if (!value) {
            return Promise.reject(new Error('按需必录项目'));
          }
        }
        return Promise.resolve();
      };
      return { validator };
    },
  }

  // 表单事件：OnChange
  Func.eventOnChange = {
    test91: (param: any) => {
      const { event, form, myItems, setMyItems } = param;
      // 表单id、录入值
      const inputValue = event.target.value;
      // 获取其他项目值
      const test31 = form.getFieldValue('test31') || 0;
      // 表单赋值
      form.setFieldsValue({
        test01: 'onBlur测试数据',
        test11: myUtil.text.leadingZeroize(inputValue, 8),
        test13: test31,
      });
      // 按需必填字段
      myItems[1].rules = [{ type: 'base_required', message: '必录项可选提示信息' }];
      // 设置只读非只读
      myItems[15].disabled = true;
      setMyItems([...formUtil.init({ items: myItems || [] })]);
    },
    test94: (param: any) => {
      const { value, form, option } = param;
      console.info(value);
      console.info(form);
      console.info(option);
    },
    test95: (param: any) => {
      const { date, dateString, form } = param;
      console.info(date);
      console.info(dateString);
      console.info(form);
    },
    test83: (param: any) => {
      const { value, form } = param;
      form.setFieldsValue({
        test84: myUtil.code.getCodeValByKey(value, 'code_dm_ckts_cktmsywlx'),
      });
    },
  }

  // 表单事件：OnBlur
  Func.eventOnBlur = {
    test92: (param: any) => {
      console.info('表单事件OnBlur', param.event.target.value, param);
    }
  }

  // 表单事件：OnFocus
  Func.eventOnFocus = {
    test93: (param: any) => {
      console.info('表单事件OnFocus', param.event.target.value, param);
    }
  }

  const onReset = () => {
    form.resetFields();
  };

  const onSave = () => {
    form.validateFields().then(async (values: any) => {
      console.info(values)
    });
  };

  return (<>
    <Typography.Title level={4}>表单 - 自定义事件及校验</Typography.Title>
    <ProCard>
      <DDBaseForm config={formConfig} form={form} initialValues={{}} func={Func}/>
      <FooterToolbar >
        <Button type='default' onClick={onReset}>重置</Button>
        <Button type='primary' onClick={onSave}>保存</Button>
      </FooterToolbar>
    </ProCard>
  </>);
};

export default TableList;

```



