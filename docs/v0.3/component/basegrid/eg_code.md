# 代码演示

## 后端分页 - 简单示例

![](/component/basegrid01.png)

### config.ts

```ts title="config.ts"
export default {
  api_grid_query: '/hx/ty/crud/queryPager',
  grid_columns: [
    { title: '报关单号', dataIndex: 'ckbgdh', width: 180, fixed: 'left' },
    { title: '项号', dataIndex: 'xh4', width: 60, fixed: 'left' },
    { title: '银行账号', dataIndex: 'yhzh', width: 160 },
    { title: '监管方式', dataIndex: 'jgfsDm', width: 155, sorter: true, codeTable: 'code_dm_ckts_hgjgfs', },
    { title: '出口日期', dataIndex: 'ckrq1', width: 120, sorter: true, render: { type: 'date', format: 'YYYY-MM-DD' } },
    { title: '商品代码', dataIndex: 'ckspDm', width: 95 },
    { title: '商品名称', dataIndex: 'ckspmc', width: 180, ellipsis: true, },
    { title: '海关商品名称', dataIndex: 'hgspmc', width: 180 },
    { title: '出口合同号', dataIndex: 'ckhth', width: 115 },
    { title: '成交方式', dataIndex: 'hgcjfsmc', width: 85 },
    { title: '成交单位', dataIndex: 'hgjldwmc', width: 90, ellipsis: true },
    { title: '成交数量', dataIndex: 'cjsl1', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
    { title: '成交币制', dataIndex: 'cjhghbzmDm', width: 85 },
    { title: '成交金额', dataIndex: 'cjzj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
    { title: '美元离岸价', dataIndex: 'mylaj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
    { title: '法定单位', dataIndex: 'dyjldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
    { title: '法定单位数量', dataIndex: 'cksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
    { title: '第二单位', dataIndex: 'dejldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
    { title: '第二单位数量', dataIndex: 'decksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
  ],
};
```

### index.tsx

```ts title="index.tsx"
import React from 'react';
import DDBaseGrid from '@/components/DDBaseGrid';
import ProCard from '@ant-design/pro-card';
import tableConfig from './config';
import { Typography } from 'antd';

const TableList: React.FC<unknown> = () => {
  return (<>
    <Typography.Title level={4}>后端分页 - 简单示例</Typography.Title>
    <ProCard>
      <DDBaseGrid config={tableConfig} />
    </ProCard>
    </>);
};

export default TableList;
```

## 后端分页 - 复杂示例

![](/component/basegrid02.png)

### config.ts

```ts title="config.ts"
export default {
  api_grid_query: '/hx/ty/crud/queryPager',
  // grid_show_serial_number: false,
  grid_row_key: 'uuid', // 列表：主键，默认uuid
  // grid_row_key: ['uuid1', 'uuid2'], // 列表：主键，联合主键，array格式
  // grid_click_checked: '1', // 列表：是否开启单击或双击勾选事件，1单击勾选，2双击勾选，默认null点击不勾选
  // grid_sticky_affix: 44, // 列表：列表锁定高度，默认null
  // grid_scroll_y: '200px', // 列表：y轴滚动条，默认null
  // grid_scroll_x: '700px', // 列表：x轴滚动条，默认700px
  // grid_border: false, // 列表：边框，默认true
  // grid_handle_width: 500, // 列表：自定义操作列宽度，默认null
  grid_columns: [
    // { title: 'uuid1', dataIndex: 'uuid1', width: 260, fixed: 'left' },
    // { title: 'uuid2', dataIndex: 'uuid2', width: 260, fixed: 'left' },
    {
      title: '报关单号', titleTooltip: '报关单号说明......{br}报关单号说明......', dataIndex: 'ckbgdh', width: 180, fixed: 'left', sorter: true,
      render: { func: 'renderCkbgdh' },
      filter: {
        type: 'Select',
        codeTable: 'code_dm_ckts_hgjgfs',
        showCode: true,
      }
    },
    { title: '项号', dataIndex: 'xh4', width: 60, render: { func: 'renderExampleXh4' }, fixed: 'left' },
    { title: '银行账号', dataIndex: 'yhzh', width: 160, render: { func: 'renderExampleYhzh' },
      filter: {
        type: 'Select',
        list: [
          { text: '已结关', value: 'yjg' },
          { text: '未结关', value: 'wjg' },
        ],
      }
    },
    {
      title: '监管方式', dataIndex: 'jgfsDm', width: 155, sorter: true,
      codeTable: 'code_dm_ckts_hgjgfs',
      filter: {
        type: 'Tree',
        list: [
          {
            text: '数据状态', value: 'sjzt', children: [
              { text: '已结关', value: 'yjg', },
              { text: '未结关', value: 'wjg', },
            ]
          },
          {
            text: '报关单', value: 'bgd', children: [
              { text: '18位', value: '18', },
              { text: '21位', value: '21', },
            ]
          },
        ]
      },
      render: {
        // 可以使用codeTable或自定义map中的一种
        // map: [
        //   { value: '0139', text: 'aaa' },
        //   { value: '0130', text: 'BBB' },
        //   { value: '', text: 'CCC' },
        // ],
        tag: [
          { value: '0139', color: 'default' },
          { value: '0130', color: 'error' },
          { value: '', color: 'processing' },
        ],
        icon: [
          { value: '0139', icon: 'CheckOutlined', color: 'default' },
          { value: '0130', icon: 'CoffeeOutlined', color: 'error' },
          { value: '', icon: 'RobotOutlined', color: 'processing' },
        ],
        circle: [
          { value: '0139', color: 'default' },
          { value: '0130', color: 'error' },
          { value: '', color: 'processing' },
        ]
      }
    },
    { title: '出口日期', dataIndex: 'ckrq1', width: 120, sorter: true, render: { type: 'date', format: 'YYYY-MM-DD' } },
    {
      title: '数据检查状态', dataIndex: 'cytgbz', width: 145, sorter: true,
      filter: {
        type: 'Radio',
        codeTable: 'code_dm_ckts_hgzfjsfs',
      },
      render: { map: [
        { value: 'Y', text: '检查通过' },
        { value: 'N', text: '检查未通过' },
        { value: '', text: '未检查' },
      ], circle: [
        { value: 'Y', color: 'default' },
        { value: 'N', color: 'processing' },
        { value: '', color: 'success' },
      ] }
    },
    {
      title: '审批状态', dataIndex: 'spzt', width: 125, sorter: true,
      filter: {
        type: 'Radio',
        list: [
          { text: '全部', value: 'qb' },
          { text: '通过', value: 'tg' },
          { text: '驳回', value: 'bh' },
        ],
      },
      render: { map: [
        { value: 'Y', text: '通过' },
        { value: 'N', text: '未通过' },
        { value: '', text: '未检查' },
      ]}
    },
    { title: '征免{br}类型', dataIndex: 'zmlx', width: 95, render: { map: [
        { value: '4', text: '免税' },
        { value: '5', text: '征税' },
        { value: '', text: '退税' },
      ], tag: [
        { value: '4', color: 'warning' },
        { value: '5', color: 'processing' },
        { value: '6', color: 'default' },
        { value: '7', color: 'error' },
        { value: '', color: 'success' },
      ] }
    },
    { title: '申报{br}业务', dataIndex: 'sbyw', width: 105, render: { map: [
        { value: '1', text: '退税申报' },
        { value: '2', text: '代理出口' },
        { value: '6', text: '代办退税' },
      ], icon: [
        { value: '1', icon: 'CheckOutlined', color: 'success' },
        { value: '2', icon: 'CoffeeOutlined', color: 'processing' },
        { value: '6', icon: 'RobotOutlined', color: 'default' },
      ] },
    },
    { title: '商品代码', dataIndex: 'ckspDm', width: 95 },
    {
      title: '商品名称', dataIndex: 'ckspmc', width: 180, ellipsis: true,
      filter: {
        type: 'Input',
      }
    },
    { title: '海关商品名称', dataIndex: 'hgspmc', width: 180 },
    { title: '出口合同号', dataIndex: 'ckhth', width: 115 },
    {
      title: '成交信息', dataIndex: 'cjxxGroup', children: [
        { title: '成交方式', dataIndex: 'hgcjfsmc', width: 85 },
        { title: '成交单位', dataIndex: 'hgjldwmc', width: 90, ellipsis: true },
        { title: '成交数量', dataIndex: 'cjsl1', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
        { title: '成交币制', dataIndex: 'cjhghbzmDm', width: 85 },
        { title: '成交金额', dataIndex: 'cjzj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' }, sum: true },
      ]
    },
    { title: '美元离岸价', dataIndex: 'mylaj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' }, sum: true },
    { title: '法定单位', dataIndex: 'dyjldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
    { title: '法定单位数量', dataIndex: 'cksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' }, sum: true },
    { title: '第二单位', dataIndex: 'dejldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
    { title: '第二单位数量', dataIndex: 'decksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
    { title: '隐藏列', dataIndex: 'hiddenCol', width: 130, hidden: true },
  ],
  handle_columns: [
    { name: '事项通知书', key: 'cs1', func: 'handleColumns1' },
    { name: '随附单据', key: 'cs2', func: 'handleColumns2', disabled: 'setCs2Disabled' }
  ]
};
```

### index.tsx

```ts title="index.tsx"
import React, { useState, useRef } from 'react';
import DDBaseGrid from '@/components/DDBaseGrid';
import tableUtil from '@/components/DDBaseGrid/tableUtil';
import ProCard from '@ant-design/pro-card';
import { Tooltip, Badge, Space, message } from 'antd';
import tableConfig from './config';
import myUtil from '@/components/DDAssist/util';
import { Typography } from 'antd';

const TableList: React.FC<unknown> = () => {
  const [selectionRowKeys, setSelectionRowKeys] = useState<any>([]);
  const [selectionRows, setSelectionRows] = useState<any>([]);
  const [queryParam, setQueryParam] = useState({}); // 设置列表查询条件
  const refGrid: any = useRef();
  const Func: any = {};

  // 列表自定义渲染
  Func.columnsRender = {
    renderExampleYhzh: (param: any) => {
      return myUtil.grid.formatBankNo(param);
    },
    renderCkbgdh: (param: any) => {
      const { text, record } = param;
      const badgeSuccess = <Badge status="success" key='success' />;
      const badgeError = <Badge status="error" key='error' />;
      const sybz = record.sybz; // N=未使用; Y=已使用
      const html = [];
      html.push(sybz === 'Y' ? badgeSuccess : badgeError);
      html.push(<a key='ckbgdh_ele_link' type="link" >{text}</a>);
      return <Tooltip title='tooltip'><Space>{html}</Space></Tooltip>;
    },
    renderExampleXh4: (param: any) => {
      const { text } = param;
      return <a onClick={(event: any) => {
        event.stopPropagation();
        Func.openDrawer(param);
      }}>{text}
      </a>;
    },
  }

  // 配置项：自定义操作列是否可用
  Func.setCs2Disabled = (record: any) => {
    if (record.jgfsDm === '0139' || record.jgfsDm === '0110') {
      return true;
    }
    return false;
  }

  // 配置项：自定义操作列
  Func.handleColumns1 = (param: any, event: any) => {
    event.stopPropagation();
    const { record } = param;
    message.info(`事项通知书: ${record?.ckbgdh}`);
    refGrid.current!.reload({
      afterReload: () => {
        setTimeout(() => {
          message.info('列表加载后执行');
        }, 1500);
      }
    });
  }

  // 配置项：自定义操作列
  Func.handleColumns2 = (param: any, event: any) => {
    event.stopPropagation();
    const { record } = param;
    message.info(`随附单据: ${record?.ckbgdh}`);
    setQueryParam({a: 112});
  }

  // 列表行单击事件
  Func.gridOnRowClick = (param: any) => {
    console.info(param);
  }

  // 列表行双击击事件
  Func.gridOnRowDoubleClick = (param: any) => {
    console.info(param);
  }

  // 列选择
  const rowSelection = tableUtil.initRowSelection({
    selectionType: 'checkbox',
    selectedRowKeys: selectionRowKeys,
    onChange: (selectedRowKeys: any, selectedRows: any[]) => {
      setSelectionRowKeys(selectedRowKeys);
      console.info(selectedRowKeys, selectedRows);
    },
    onSelect: ( record: any, selected: any, selectedRows: any, nativeEvent: any ) => {
      console.info(record, selected, selectedRows, nativeEvent);
    },
    onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
      console.info(selected, selectedRows, changeRows);
    },
  });

  // 列表数据加载后执行
  const afterReloadGridData = (param: any) => {
    console.info('列表数据加载后执行', param);
  };

  return (<>
    <Typography.Title level={4}>后端分页 - 复杂示例</Typography.Title>
    <ProCard>
      <DDBaseGrid
        config={tableConfig}
        func={Func}
        actionRef={refGrid}
        queryParam={queryParam}
        onRow={tableUtil.initOnRow({
          refGrid,
          selectionRows,
          selectionRowKeys,
          setSelectionRowKeys,
          setSelectionRows,
          func: Func,
          config: tableConfig,
        })}
        afterReloadGridData={afterReloadGridData}
        {...rowSelection}
      />
    </ProCard>
  </>);
};

export default TableList;

```

## 传入数据 & 前端分页

![](/component/basegrid03.png)

### config.ts

```ts title="config.ts"
export default {
  api_grid_query: '/hx/ty/crud/queryPager',
  grid_columns: [
    { title: '报关单号', dataIndex: 'ckbgdh', width: 180, fixed: 'left' },
    { title: '项号', dataIndex: 'xh4', width: 60, fixed: 'left' },
    { title: '银行账号', dataIndex: 'yhzh', width: 160 },
    { title: '监管方式', dataIndex: 'jgfsDm', width: 155, sorter: true, codeTable: ['code_dm_ckts_hgjgfs', '01'], },
    { title: '出口日期', dataIndex: 'ckrq1', width: 120, sorter: true, render: { type: 'date', format: 'YYYY-MM-DD' } },
    { title: '商品代码', dataIndex: 'ckspDm', width: 95 },
    { title: '商品名称', dataIndex: 'ckspmc', width: 180, ellipsis: true, },
    { title: '海关商品名称', dataIndex: 'hgspmc', width: 180 },
    { title: '出口合同号', dataIndex: 'ckhth', width: 115 },
    { title: '成交方式', dataIndex: 'hgcjfsmc', width: 85 },
    { title: '成交单位', dataIndex: 'hgjldwmc', width: 90, ellipsis: true },
    { title: '成交数量', dataIndex: 'cjsl1', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
    { title: '成交币制', dataIndex: 'cjhghbzmDm', width: 85 },
    { title: '成交金额', dataIndex: 'cjzj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
    { title: '美元离岸价', dataIndex: 'mylaj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
    { title: '法定单位', dataIndex: 'dyjldwDm', width: 90, codeTable: ['code_dm_ckts_hgjldw', '01'], ellipsis: true },
    { title: '法定单位数量', dataIndex: 'cksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
    { title: '第二单位', dataIndex: 'dejldwDm', width: 90, codeTable: ['code_dm_ckts_hgjldw', '01'], ellipsis: true },
    { title: '第二单位数量', dataIndex: 'decksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
  ],
};
```

### index.tsx

```ts title="index.tsx"
import React, { useState, useEffect } from 'react';
import DDBaseGrid from '@/components/DDBaseGrid';
import ProCard from '@ant-design/pro-card';
import tableConfig from './config';
import { Typography } from 'antd';
import { getGridData } from '@/services/hts/api';

const TableList: React.FC<unknown> = () => {
  const [gridData, setGridData] = useState<any>([]);

  // 获取数据
  const getData = () => {
    getGridData(`${API_URL_BASE}/hx/ty/crud/queryPager2`, {}).then((response) => {
      setGridData(response?.body || []);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (<>
    <Typography.Title level={4}>传入数据 & 前端分页</Typography.Title>
    <ProCard>
      <DDBaseGrid config={tableConfig} userDataSource={gridData} />
    </ProCard>
  </>);
};

export default TableList;

```

## 传入数据 & 无分页

![](/component/basegrid04.png)

### config.ts

```ts title="config.ts"
export default {
  api_grid_query: '/hx/ty/crud/queryPager',
  grid_columns: [
    { title: '报关单号', dataIndex: 'ckbgdh', width: 180, fixed: 'left' },
    { title: '项号', dataIndex: 'xh4', width: 60, fixed: 'left' },
    { title: '银行账号', dataIndex: 'yhzh', width: 160 },
    { title: '监管方式', dataIndex: 'jgfsDm', width: 155, sorter: true, codeTable: 'code_dm_ckts_hgjgfs', },
    { title: '出口日期', dataIndex: 'ckrq1', width: 120, sorter: true, render: { type: 'date', format: 'YYYY-MM-DD' } },
    { title: '商品代码', dataIndex: 'ckspDm', width: 95 },
    { title: '商品名称', dataIndex: 'ckspmc', width: 180, ellipsis: true, },
    { title: '海关商品名称', dataIndex: 'hgspmc', width: 180 },
    { title: '出口合同号', dataIndex: 'ckhth', width: 115 },
    { title: '成交方式', dataIndex: 'hgcjfsmc', width: 85 },
    { title: '成交单位', dataIndex: 'hgjldwmc', width: 90, ellipsis: true },
    { title: '成交数量', dataIndex: 'cjsl1', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
    { title: '成交币制', dataIndex: 'cjhghbzmDm', width: 85 },
    { title: '成交金额', dataIndex: 'cjzj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
    { title: '美元离岸价', dataIndex: 'mylaj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
    { title: '法定单位', dataIndex: 'dyjldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
    { title: '法定单位数量', dataIndex: 'cksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
    { title: '第二单位', dataIndex: 'dejldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
    { title: '第二单位数量', dataIndex: 'decksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
  ],
};
```

### index.tsx

```ts title="index.tsx"
import React, { useState, useEffect } from 'react';
import DDBaseGrid from '@/components/DDBaseGrid';
import ProCard from '@ant-design/pro-card';
import tableConfig from './config';
import { Typography } from 'antd';
import { getGridData } from '@/services/hts/api';

const TableList: React.FC<unknown> = () => {
  const [gridData, setGridData] = useState<any>([]);

  // 获取数据
  const getData = () => {
    getGridData(`${API_URL_BASE}/hx/ty/crud/queryPager2`, {}).then((response) => {
      setGridData(response?.body || []);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (<>
    <Typography.Title level={4}>传入数据 & 前端分页</Typography.Title>
    <ProCard>
      <DDBaseGrid config={tableConfig} userDataSource={gridData} />
    </ProCard>
    <Typography.Title level={4}>传入数据 & 无分页</Typography.Title>
    <ProCard>
      <DDBaseGrid config={tableConfig} userDataSource={gridData} pagination={false} />
    </ProCard>
  </>);
};

export default TableList;

```
