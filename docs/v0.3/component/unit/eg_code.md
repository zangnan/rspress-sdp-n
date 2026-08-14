# 代码演示

## config.tsx

```ts title="config.tsx"
/**
 * title: 数据封装页面
 */
const unitConfig: any = {};

// 配置项
// 如果配置unit_key 则采用预计crud方法，也可自定义crud接口链接，覆盖默认配置
unitConfig.unit_key = 'EXAMPLE_DATA_PAGE_1';                                          // 业务单元key，对应后端接口
unitConfig.page_id = 'example_list_1';                                                // 页面id
unitConfig.layout_type = 'default';                                                   // 页面类型，默认default 可选 default modal tabs
unitConfig.form_title = 'BGD';                                                        // 表单：标题，可选
unitConfig.grid_show_serial_number = false;                                           // 列表：是否显示序号，默认不显示
unitConfig.grid_title = { type: 'function', func: 'setGridTitle' };                   // 列表：标题，可选 object 或 string
unitConfig.grid_click_checked = '1';                                                  // 列表：是否开启单击或双击勾选事件，1单击勾选，2双击勾选，默认点击不勾选
unitConfig.toolbar_show_grid_checked_num = true;                                      // 工具栏：是否显示数据条数及选中数，默认false关闭
// unitConfig.grid_pagination = false;                                                // 列表：是否含有分页，默认 true
// unitConfig.form_width = 1200;                                                      // 表单：宽度，默认1200，可选 480 720 960 1200 max
// unitConfig.form_layout_type = 'horizontal';                                        // 表单：整体一列或多列布局，默认vertical，可选 horizontal vertical 2 3 4 6 8 12
// unitConfig.toolbar_open = true;                                                    // 工具栏：是否开启，默认true显示
// unitConfig.toobar_affix = 44;                                                      // 工具栏：锁定高度，如果layout_type=default=>44；tabs=>84
// unitConfig.grid_sticky_affix = 94;                                                 // 列表：列表锁定高度，如果layout_type=default=>94；tabs=>134
// unitConfig.grid_title = 'BGD';                                                     // 列表：标题，可选 object 或 string
// unitConfig.grid_scroll_y = '200px';                                                // 列表：y轴滚动条，默认null
// unitConfig.grid_scroll_x = '700px';                                                // 列表：x轴滚动条，默认700px
// unitConfig.grid_selection_type = 'checkbox';                                       // 列表：首选项类别，默认 checkbox，可选 false radio checkbox
// unitConfig.grid_border = false;                                                    // 列表：边框，默认true
// unitConfig.grid_handle_width = 500;                                                // 列表：自定义操作列宽度
// unitConfig.grid_row_key = 'uuid';                                                  // 列表：主键，默认uuid
// unitConfig.grid_row_key = ['uuid1', 'uuid2'];                                      // 列表：主键，联合主键，array格式
// unitConfig.gridIsInitSearch = true;                                                // 列表：是否开启默认查询，默认true开启
// unitConfig.form_save_check = false;                                                // 表单：编辑是否执行后端校验，默认false不执行
// unitConfig.api_grid_query = `${API_URL_BASE}/yw/bszx/wbsj/bgd/queryBgd18Page`;     // api：列表查询
// unitConfig.api_form_query=`${API_URL_BASE}/yw/bszx/wbsj/bgd/queryBgdByKey`;        // api：表单查询
// unitConfig.api_form_edit=`${API_URL_BASE}/yw/bszx/wbsj/bgd/updateBgd`;             // api：表单更新
// unitConfig.api_form_delete=`${API_URL_BASE}/yw/bszx/wbsj/bgd/deleteBgd21`;         // api：表单删除
// unitConfig.api_form_check=`${API_URL_BASE}/yw/bszx/wbsj/bgd/checkCkbgdh`;          // api：表单校验
unitConfig.delete_key='uuids';                                                     // 删除时的参数键：主键，默认uuids

// 配置项：列表列
unitConfig.grid_columns = [
  // { title: 'uuid1', dataIndex: 'uuid1', width: 260, fixed: 'left' },
  // { title: 'uuid2', dataIndex: 'uuid2', width: 260, fixed: 'left' },
  {
    title: '报关单号', titleTooltip: '报关单号说明......{br}报关单号说明......', dataIndex: 'ckbgdh', width: 220, fixed: 'left', sorter: true,
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
  { title: '监管方式代码', dataIndex: 'jgfsDm', width: 155 },
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
  { title: '商品代码', dataIndex: 'ckspDm', width: 95, render: { type: 'mask' } },
  { title: '状态', dataIndex: 'spzt', width: 95, render: { poweroff: 'handleSetStatus' } },
  { title: '调用耗时', dataIndex: 'usedTime', width: 70, align: 'right', render: { timeEasyRead: true } },
  {
    title: '商品名称', dataIndex: 'ckspmc', width: 180, ellipsis: true,
    filter: {
      type: 'Input',
    }
  },
  { title: '海关商品名称', dataIndex: 'hgspmc', width: 180, render: { copy: true } },
  { title: '出口合同号', dataIndex: 'ckhth', width: 115 },
  {
    title: '成交信息', dataIndex: 'cjxxGroup', children: [
      { title: '成交方式', dataIndex: 'hgcjfsmc', width: 85 },
      { title: '成交单位', dataIndex: 'hgjldwmc', width: 90, ellipsis: true },
      { title: '成交数量', dataIndex: 'cjsl1', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
      { title: '成交币制', dataIndex: 'cjhghbzmDm', width: 85 },
      { title: '成交金额', dataIndex: 'cjzj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' }, sum: true, sum2: true },
    ]
  },
  { title: '美元离岸价', dataIndex: 'mylaj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' }, sum: true },
  { title: '法定单位', dataIndex: 'dyjldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
  { title: '法定单位数量', dataIndex: 'cksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' }, sum: true, sum2: true },
  { title: '第二单位', dataIndex: 'dejldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
  { title: '第二单位数量', dataIndex: 'decksl', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
  { title: '隐藏列', dataIndex: 'hiddenCol', width: 130, hidden: true },
];

// 配置项：筛选_普通筛选 页面最上方 第一层筛选
unitConfig.filter_items = [
  { name: 'sbyw', label: '申报业务', type: 'Select', codeTable: 'code_static_bgd_sbyw_dm', tooltip: '申报业务说明...' },
  { name: 'sybz', label: '生成状态', type: 'Select', showType: '3', codeTable: 'code_static_bgd_sbyw_dm' },
  { name: 'zmlx', label: '征免类型', type: 'Select', codeTable: 'code_static_bgd_zmlx_dm' },
  { name: 'czbz1', label: '关单信息', type: 'Select', codeTable: 'code_static_bgd_gdxx_dm' },
  { name: 'ckhth', label: '出口合同号', type: 'Input', },
  { name: 'ckrq1', label: '出口日期', type: 'DatePicker' },
  { name: 'kprq', label: '开票日期', type: 'DatePicker', range: true, layout: {
    xs: {span: 23, offset:1, pull: 1},
    sm: {span: 23, offset:1, pull: 1},
    md: {span: 23, offset:1, pull: 1},
    lg: {span: 23, offset:1, pull: 1},
    xl: {span: 15, offset:1, pull: 1},
    xxl: {span: 15, offset:1, pull: 1}
  } }, // , placeholder: ['aaa', 'bbb'] 日期范围的placeholder属性需要传递数组
  { name: 'ckbgdh', label: '报关单号', type: 'Input' },
  { name: 'jgfsDm', label: '监管方式', type: 'Input' },
  { name: 'cytgbz', label: '数据检查状态', type: 'Select', codeTable: 'code_static_bgd_cytgbz_dm' },
  { name: 'cylv', label: '差异率', type: 'Input', range: true },
  {
    name: 'treeSelect', label: '单证', type: 'TreeSelect', isSelectLeaf: true, showSearch: true, labelInValue: false, treeTable: ['CODE_DM_BADZ_BADZ', '01']
    // , list: [
    //   { title: '退税单证', value: '1',
    //     children: [
    //       {title: '出口发票', value: '1-1', children: [{title: '出口发票1', value: '1-1-1'}]},
    //       {title: '进口发票', value: '1-2'}
    //     ]
    //   },
    //   { title: '退税单证2', value: '2'},
    //   { title: '退税单证3', value: '3', children: [
    //       { title: '退税单证3-1', value: '3-1', children: [{title: '退税单证3-1-1', value: '3-1-1'}, {title: '退税单证3-1-2', value: '3-1-2'}]},
    //       { title: '退税单证3-2', value: '3-2'}
    //   ]},
    //   ]
  },
  { name: 'bgdhgbh', label: '18位或后4位报关单号', type: 'InputTags' },
];

// 配置项：筛选_快捷筛选 列表上方，标题和区域 第二层筛选
unitConfig.grid_filter_quick = [
  {
    label: '是否结关', name: 'sfjg', type: 'Select', tooltip: '是否结关tooltip', defaultValue: '2',
    codeTable: 'code_static_bgd_sbyw_dm'
    // list: [
    //   { label: '全部', value: 'qb' },
    //   { label: '已结', value: 'yjg' },
    //   { label: '未结', value: 'wjg' },
    // ]
  },
  { label: '报关单号', name: 'bgd', type: 'Input', defaultValue: '1234567890' }, // defaultValue 可选
  // { label: '差异率', name: 'cyl', type: 'Input', tooltip: '差异率tooltip', range: true },
  // { name: 'jgzrhl', type: 'Checkbox', tooltip: '关注日tooltip', list: [
  //   { label: '关注日', value: 'gzr' },
  // ]},
  // { label: '出口日期', name: 'ckrq1', type: 'DatePicker', tooltip: '出口日期tooltip', defaultValue: ['2021-10-10', '2021-10-20'], range: true },
  // { label: '出口日期', name: 'ckrq2', type: 'DatePicker', tooltip: '出口日期tooltip', defaultValue: '2021-11-12' },
  // { label: '报关单', name: 'bgd', type: 'Select', defaultValue: '21', list: [
  //   { label: '18位', value: '18' },
  //   { label: '21位', value: '21' },
  // ]},
];

// 配置项：列表统计字段
unitConfig.grid_sum_field = [
  { label: '成交金额', field: 'cjzj', unit: '元', format: '0,0.00' },
  { label: '成交数量', field: 'cjsl1', format: '0,0.0000' },
];

// 配置项：列表排序字段
unitConfig.grid_setting_sort = [
  { col: '报关单号', order: 'asc', name: 'bgd' },
  { col: '出口日期', order: 'desc', name: 'ckrq' },
  { col: '数据检查状态', order: 'default', name: 'sjjczt' },
  { col: '征免类型', order: 'default', name: 'zmlx' }
];

// 配置项：列表高级筛选字段
unitConfig.grid_setting_filter_advanced = {
  range: [
    {
      name: 'ckrq', label: '出口日期', type: 'DatePicker', range: true, quickOption: {
        type: 'Radio',
        list: [
          { value: 'ckrqv1', name: '本月' },
          { value: 'ckrqv2', name: '三个月' },
          { value: 'ckrqv3', name: '本年' },
        ]
      }
    },
    {
      name: 'ckgb', label: '出口国别', mode: 'multiple', type: 'Select', list: [
        { value: 'ckgb1', name: '出口国别1' },
        { value: 'ckgb2', name: '出口国别2' },
      ], quickOption: {
        type: 'Radio',
        list: [
          { value: 'ckgbv1', name: '亚洲' },
          { value: 'ckgbv2', name: '欧洲' },
          { value: 'ckgbv3', name: '美国' },
        ]
      }
    },
    {
      name: 'myfs', label: '贸易方式', type: 'Select', list: [
        { value: 'myfs1', name: '贸易方式1' },
        { value: 'myfs2', name: '贸易方式2' },
      ]
    },
    {
      name: 'ckka', label: '出口口岸', type: 'Select', list: [
        { value: 'ckka1', name: '出口口岸1' },
        { value: 'ckka2', name: '出口口岸2' },
      ]
    },
    {
      name: 'ysfs', label: '运输方式', type: 'Select', list: [
        { value: 'ysfs1', name: '运输方式1' },
        { value: 'ysfs2', name: '运输方式2' },
      ]
    },
    {
      name: 'hwlx', label: '货物类型', type: 'Checkbox', list: [
        { value: 'bqf', name: '不区分' },
        { value: 'tshw', name: '退税货物' },
        { value: 'yzshw', name: '应征税货物' },
      ],
    },
    {
      name: 'ckfslx', label: '出口方式类型', type: 'Radio', list: [
        { value: 'bqf', name: '不区分' },
        { value: 'zyck', name: '自营出口' },
        { value: 'wtck', name: '委托出口' },
      ],
    },
    {
      name: 'spdm', label: '商品代码', type: 'Select', list: [
        { value: 'spdm1', name: '商品代码1' },
        { value: 'spdm2', name: '商品代码2' },
      ]
    },
    {
      name: 'sjzt', label: '数据状态', type: 'Select', list: [
        { value: 'sjzt1', name: '数据状态1' },
        { value: 'sjzt2', name: '数据状态2' },
      ]
    },
    { name: 'sybz', label: '生成状态', type: 'Radio', codeTable: 'code_static_bgd_zt_dm' },
    { name: 'zmlx', label: '征免类型', type: 'Checkbox', codeTable: 'code_static_bgd_zmlx_dm' },
    { name: 'czbz1', label: '关单信息', type: 'Select', codeTable: 'code_static_bgd_gdxx_dm' },
  ],
  condition: [
    {
      groupLabel: '报关单表头',
      items: [
        { value: 'bgdh', label: '报关单号' },
        { value: 'ckhth', label: '出口合同号' },
        { value: 'cke', label: '出口额' },
        { value: 'jldw', label: '计量单位' },
      ]
    },
    {
      groupLabel: '报关单表体',
      items: [
        { value: 'xh', label: '项号' },
        { value: 'fddw', label: '法定单位' },
      ]
    },
    {
      groupLabel: '商品维度',
      items: [
        { value: 'spdm', label: '商品代码' },
        { value: 'spmc', label: '商品名称' },
      ]
    },
    {
      groupLabel: '贸易方式',
      items: [
        { value: 'myfsdm', label: '贸易方式代码' },
        { value: 'myfsmc', label: '贸易方式名称' },
      ]
    }
  ]
};

// 配置项：表单项
unitConfig.form_items = [
  { label: 'ID', type: 'Hidden', name: 'uuid' },
  { label: '基本信息', type: 'GroupTitle', name: 'jbxx' },
  { label: '报关单号', type: 'Input', name: 'ckbgdh', tooltip: '报关单号说明...', rules: [
    { type: 'base_required', message: '必录项可选提示信息' },
  ] },
  { label: '出口日期', type: 'DatePicker', name: 'ckrq1', format: 'YYYY-MM-DD', range: true  },
  { label: '出口合同号', type: 'Input', name: 'ckhth', range: true },
  { label: '核销单号', type: 'Input', name: 'hxdh', defaultValue:'12311234' },
  { label: '运输工具名称', type: 'Input', name: 'ysgjmc' },
  { label: '单证1', name: 'dz1', type: 'TreeSelect', isSelectLeaf: true, showSearch: true, labelInValue: false, treeTable: ['CODE_DM_BADZ_BADZ', '01'] },
  { label: '单证2', name: 'dz2', type: 'TreeSelect', isSelectLeaf: true, showSearch: true, labelInValue: false, list: [
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
  { label: '备注', type: 'TextArea', name: 'bz', layout: {
    item: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 },
    labelcol: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 },
    wrappercol: { xs: 22, sm: 22, md: 22, lg: 22, xl: 22, xxl: 22 },
  } },
];

// 配置项：批量修改表单项
unitConfig.batch_update_items = [
  { dataIndex: 'ssq', label: '所属期', type: "Input" },
  { dataIndex: 'ybhl', label: '原币汇率', type: "InputNumber" },
  { dataIndex: 'myhl', label: '美元汇率', type: "InputNumber" },
  { dataIndex: 'ckfph', label: '出口发票号', type: "Input" },
  { dataIndex: 'ckrq1', label: '出口日期', type: "Date" },
  { dataIndex: 'cktmsywlxdmjh', label: '业务类型代码', type: "tableSelect", codeTable: 'CODE_DM_CKTS_CKTMSYWLX' },
  { dataIndex: 'szch', label: '手（账）册号', type: "Input" },
];

// 配置项：工具栏
unitConfig.toolbar_default = {
  add: true,                        // 是否显示增加按钮，默认关闭
  edit: true,                        // 是否显示修改按钮，默认关闭
  delete: true,                    // 是否显示删除按钮，默认关闭
  setting: true,                    // 是否显示设置按钮，默认关闭
  full: true,                       // 是否显示全屏按钮，默认关闭
  download: true,                   // 是否显示导出按钮，默认关闭
  upload: true,                     // 是否显示导入按钮，默认关闭
  reload: true,                     // 是否显示刷新按钮，默认关闭
};

// 配置项：列表操作列
unitConfig.grid_handle_columns_default = {
  edit: true,                       // 是否显示编辑链接，默认关闭
  delete: true,                     // 是否显示删除链接，默认关闭
};

// 配置项：自定义工具栏
unitConfig.customer_toobar = [
  { name: '测一', key: 'cs1', func: 'handleCostomerToobar1' },
  { name: '测二', key: 'cs2', func: 'handleCostomerToobar2', disabled: true },
  {
    name: '红冲', type: 'dropdown', list: [
      { name: '设置红冲', func: 'handleCostomerToobar1' },
      { name: '取消红冲', func: 'handleCostomerToobar2' },
    ]
  },
  { name: '导入', key: 'mydr', func: 'handleCostomerImport' }
];

// 配置项：自定义操作列
unitConfig.handle_columns = [
  { name: '测试1', key: 'cs11', func: 'handleColumns1' },
  { name: '测试2', key: 'cs12', func: 'handleColumns2' },
  { name: '测试3', key: 'cs13', func: 'handleColumns3', disabled: 'setCs3Disabled' },  // disabled: true false 自定义方法
];

export default unitConfig;
```

## index.tsx

```ts title="index.tsx"
import React, { useRef } from 'react';
import DDBunit2 from '@/components/DDBunit/DDBunit2';
import unitConfig from './config';
import Func from './f';
import { history } from 'umi';
import DrawerList from './drawer_list';
import DDImportNodeEnv from '@/components/DDImportNodeEnv';

const Unit: React.FC<unknown> = () => {
  // 改变默认配置项
  const myConfig = { ...unitConfig };
  if (history?.location?.pathname === '/example/data_page/list2') {
    myConfig.grid_columns = [
      { title: '报关单号', dataIndex: 'ckbgdh', width: 180 },
      { title: '海关商品名称', dataIndex: 'hgspmc', width: 180 },
      { title: '出口合同号', dataIndex: 'ckhth', width: 115 },
    ];
    myConfig.grid_title = '修改默认标题';
  }

  // 添加私有页面或组件
  const drawerRef: any = useRef();
  const ModalRef: any = useRef();
  Func.getOtherRef = () => {
    const otherRef = [];
    otherRef.push(drawerRef);
    otherRef.push(ModalRef);
    return otherRef;
  };

  return <>
    <DDBunit2 config={myConfig} func={Func} />
    <DrawerList onRef={drawerRef} />
    <DDImportNodeEnv onRef={ModalRef} />
  </>;
};
export default Unit;
```

## f.tsx

```ts title="f.tsx"
import { message, Tooltip, Badge, Space, Segmented } from 'antd';
import React from 'react';
import myUtil from '@/components/DDAssist/util';
import { testReturnCode200 } from '@/services/hts/api';
import { FilePdfTwoTone } from '@ant-design/icons';
import { history } from '@umijs/max';

const Func: any = {
  refUnit: React.createRef(),
};

const badgeSuccess = <Badge status="success" key='success' />;
const badgeError = <Badge status="error" key='error' />;

// 页面元素初始化后执行 useEffectEnd -> afterReload
Func.useEffectEnd = (param: any) => {
  console.info('页面元素初始化后执行', param);
}

// 列表数据加载后执行 useEffectEnd -> afterReload
Func.afterReload = (param: any) => {
  console.info('列表数据加载后执行', param);
};

// 表单新建初始化
Func.initAddForm = (param: any) => {
  console.info('表单新建初始化', param);
  const { form, handleModalVisible, pageId, unitKey, refUnit } = param;
  refUnit.current?.setMasker(true);
  testReturnCode200().then((response) => {
    const { code } = response;
    refUnit.current?.setMasker(false);
    if (code === '200') {
      form.setFieldsValue({
        ckbgdh: '123456789012345678',
      });
      handleModalVisible(true);
    }
  })
}

// 表单编辑初始化
Func.initEditForm = (param: any) => {
  console.info('表单编辑初始化', param);
  const { handleModalVisible } = param;
  handleModalVisible(true);
}

// 表单提交前调用
Func.formBeforeSubmit = (param: any) => {
  console.info('表单提交前调用', param);
  return true;
}

// 删除前调用
Func.beforeDelete = (param: any) => {
  console.info('删除前调用', param);
  return true;
}

// 删除失败后调用
Func.afterDeletionFailure = (param: any) => {
  console.info('删除失败后调用', param);
}

// 列表行单击事件
Func.gridOnRowClick = (param: any) => {
  console.info('列表行单击事件', param);
}

// 列表行双击击事件
Func.gridOnRowDoubleClick = (param: any) => {
  console.info('列表行双击击事件', param);
}

// 配置项：列表首选项改变时回调，即选择Chexcbox、Radion回调
Func.rowSelection = (param: any) => {
  console.info('列表首选项改变时回调', param);
  const { refUnit } = param;
  // 设置按钮屏蔽
  const btnFunc: any = refUnit.current!.handleCustomerToobarBtn();
  btnFunc.setBtnDisabled('cs2', false);
  btnFunc.setBtnDisabled('cs1', true);
}

// 列表自定义渲染
Func.columnsRender = {
  // 银行账号
  renderExampleYhzh: (param: any) => {
    return myUtil.grid.formatBankNo(param);
  },
  // 报关单号
  renderCkbgdh: (param: any) => {
    const sybz = param?.record.sybz; // N=未使用; Y=已使用
    const czbz1 = param?.record.czbz1; // N=不存在; Y=存在
    const ckbgdh = param?.record.ckbgdh;
    const fileIcon = (
      <span
        key='ckbgdh_ele_span'
        style={{ marginLeft: '5px', cursor: 'pointer' }}
        onClick={(event: any) => {
          event.stopPropagation();
        }}
      >
        <FilePdfTwoTone />
      </span>
    );
    const html = [];
    const ckbgdhEle = (
      <a key='ckbgdh_ele_link' type="link" onClick={(event: any) => {
          event.stopPropagation();
        }}
      >
        {ckbgdh}
      </a>
    );
    html.push(sybz === 'Y' ? badgeSuccess : badgeError);
    html.push(czbz1 === 'Y' ? badgeSuccess : badgeError);
    html.push(ckbgdhEle);
    html.push(fileIcon);
    // 列表列tooltip
    const tip = () => {
      const info = [];
      info.push(
        sybz === 'Y' ? (
          <div>使用状态：{badgeSuccess} 已使用</div>
        ) : (
          <div>使用状态：{badgeError} 未使用</div>
        ),
      );
      info.push(
        czbz1 === 'Y' ? <div>关单信息：{badgeSuccess} 有</div> : <div>关单信息：{badgeError} 无</div>,
      );
      return info;
    };
    return <Tooltip title={() => tip()}><Space>{html}</Space></Tooltip>;
  },
  // 数据检查状态
  renderExampleXh4: (param: any) => {
    const { text } = param;
    return <a onClick={(event: any) => {
      event.stopPropagation();
      Func.openDrawer(param);
    }}>{text}
    </a>;
  },
}

// 开关图标点击回调
Func.poweroff = {
  // 状态列
  handleSetStatus: (param: any) => {
    console.info('开关图标点击回调', param);
  },
}

// 配置项：自定义工具栏
Func.handleCostomerToobar1 = (param: any) => {
  const { selectionRowKeys, refGrid, refUnit } = param;
  // 获取列表数据
  const gridData = refUnit.current?.getGridData();
  // 获取页头筛选区域数据
  const headerFilterValue = refGrid.current?.getHeaderFilter();
  console.info('配置项：自定义工具栏', param, gridData, headerFilterValue);
  if (!selectionRowKeys || selectionRowKeys.length === 0) {
    message.info('请选择要操作的数据！');
    return;
  } else {
    message.info({
      content: `当前选中 ${selectionRowKeys.length} 条数据！`,
      onClose: () => {
        // testFlag, 演示用数据
        refGrid.current?.reload({ testFlag: 111 }); // 刷新并清空SelectionRows、SelectionRowKeys
      }
    });
  }
}

// 配置项：自定义工具栏
Func.handleCostomerToobar2 = (param: any) => {
  console.info('配置项：自定义工具栏', param);
  const { refUnit } = param;
  refUnit.current?.setMasker(true);
  testReturnCode200({ id: 1 }).then((response) => {
    const { code, desc } = response;
    refUnit.current?.setMasker(false);
    refUnit.current?.setSelectionRowKeys([]);  // 设置SelectionRows
    refUnit.current?.setSelectionRows([]);     // 设置SelectionRowKeys
    refUnit.current?.reload(); // 刷新并清空SelectionRows、SelectionRowKeys
    if (code === '200') {
      message.info(desc);
    } else {
      message.error(desc);
    }
  })
}

// 配置项：自定义工具栏
Func.handleCostomerImport = (param: any) => {
  const { refUnit } = param;
  const otherRef = refUnit.current?.getOtherRefs();
  if (otherRef && otherRef[1]) {
    param.columns = [
      { title: '姓名', dataIndex: 'name_chi' },
      { title: '登录名', dataIndex: 'name' },
      { title: '密码', dataIndex: 'password' },
      { title: '权限', dataIndex: 'authority' },
      { title: 'svn登录名', dataIndex: 'svn_name' },
      { title: 'svn密码', dataIndex: 'svn_password' },
      { title: 'svn权限', dataIndex: 'svn_authority' },
    ];
    param.templateUrl = '/import_template/user.xlsx';
    param.tableKey = 'user';
    otherRef[1].current?.showModal(param);
  }
}

// 配置项：自定义操作列
Func.handleColumns1 = (param: any, event: any) => {
  event.stopPropagation();
  const { target, currentTarget } = event;
  console.info('配置项：自定义操作列', param, event, target);
  currentTarget.disabled = true;
  currentTarget.innerText = '测试11';
  const antBtnLink: any = document.querySelectorAll(".ant-table-cell .ant-btn.cs12");
  antBtnLink.forEach((item: any) => {
    item.disabled = true;
    item.innerText = '测试22';
  });
}

// 配置项：自定义操作列
Func.handleColumns2 = (param: any, event: any) => {
  event.stopPropagation();
  const { record, refGrid } = param;
  console.info('配置项：自定义操作列', param, event, record);
  message.info({
    content: '配置项：自定义操作列2',
    onClose: () => {
      refGrid.current!.reload({
        afterReload: () => {
          const antBtnLink: any = document.querySelectorAll(".toobar-right .ant-btn");
          if (antBtnLink?.length > 0) {
            antBtnLink[0].disabled = true;
            antBtnLink[0].innerText = '测试222';
          }
        }
      }); // 仅刷新列表数据
    }
  });
}

// 配置项：自定义操作列
Func.handleColumns3 = (param: any, event: any) => {
  event.stopPropagation();
  const { refUnit } = param;
  refUnit.current?.setMasker(true);
  testReturnCode200().then((response) => {
    const { code, desc } = response;
    refUnit.current?.setMasker(false);
    if (code === '200') {
      message.info(desc);
      // 设置按钮屏蔽
      const btnFunc: any = refUnit.current!.handleCustomerToobarBtn();
      btnFunc.setBtnDisabled('cs1', true);
    } else {
      message.error(desc);
    }
  })
}

// 配置项：自定义操作列是否可用
Func.setCs3Disabled = (record: any) => {
  if (record.jgfsDm === '0139' || record.jgfsDm === '0110' || record.jgfsDm === '0160') {
    return true;
  }
  return false;
}

// 配置项：自定义列表标题区域
Func.setGridTitle = (param: any) => {
  console.info('配置项：自定义列表标题区域', param);
  const options = ['选择A', '选择B', '跳转C']
  const ele = <Segmented options={options} onChange={(value: any) => {
    if (value === '跳转C') {
      history.push('/example/json_page/unit2');
    }
  }}/>
  return ele;
}

// 开启自定义Drawer
Func.openDrawer = (param: any) => {
  console.info('开启自定义Drawer', param);
  const { otherRef } = param;
  // const otherRef = param.refUnit.current?.getOtherRefs();
  if (otherRef && otherRef[0]) {
    otherRef[0].current?.showModal(param);
  }
};

export default Func;
```

## drawer_list_config.tsx

```ts title="drawer_list_config.tsx"
/**
 * title: 数据封装页面
 * author: zn
 */
const unitConfig: any = {};

// 配置项
unitConfig.unit_key = 'EXAMPLE_DATA_PAGE_1';                                          // 业务单元key，对应后端接口
unitConfig.show_toolbar = true;                                                       // 是否开启工具栏，默认true开启
unitConfig.layout_type = 'modal';                                                     // 页面类型，默认default 可选 default modal tabs
// unitConfig.grid_sticky_affix = 51;                                                    // 列表锁定高度， 默认页头高度94
// unitConfig.toobar_affix = 44;                                                       // 工具条锁定高度， 默认页头高度44

// 配置项：列表列
unitConfig.grid_columns = [
  { title: '出口日期', dataIndex: 'ckrq1', width: 120, sorter: true, render: { type: 'date', format: 'yyyy-MM-DD' }},
  { title: '出口合同号', dataIndex: 'ckhth', width: 115 },
  { title: '成交方式', dataIndex: 'hgcjfsmc', width: 85 },
  { title: '成交单位', dataIndex: 'hgjldwmc', width: 90, ellipsis: true },
  { title: '成交数量', dataIndex: 'cjsl1', width: 140, align: 'right', render: { type: 'number', format: '0,0.0000' } },
  { title: '成交币制', dataIndex: 'cjhghbzmDm', width: 85 },
  { title: '成交金额', dataIndex: 'cjzj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
  { title: '美元离岸价', dataIndex: 'mylaj', width: 140, align: 'right', render: { type: 'number', format: '0,0.00' } },
  { title: '法定单位', dataIndex: 'dyjldwDm', width: 90, codeTable: 'code_dm_ckts_hgjldw', ellipsis: true },
];

// 配置项：筛选_普通筛选 页面最上方 第一层筛选
unitConfig.filter_items = [
  { name: 'zmlx', label: '征免类型', type: 'Select', codeTable: 'code_static_bgd_zmlx_dm' },
  { name: 'ckhth', label: '出口合同号', type: 'Input', },
  { name: 'ckrq1', label: '出口日期', type: 'DatePicker' },
  { name: 'jgfsDm', label: '监管方式', type: 'Input' },
];

// 配置项：筛选_快捷筛选 列表上方，标题和区域 第二层筛选
unitConfig.grid_filter_quick = [
  { label: '是否结关', name: 'sfjg', type: 'Select', list: [
    { label: '全部', value: 'qb' },
    { label: '已结', value: 'yjg' },
  ]},
];

// 配置项：工具栏
unitConfig.toolbar_default = {
  delete: true,                    // 是否显示删除按钮，默认关闭
  setting: true,                    // 是否显示设置按钮，默认关闭
  full: true,                       // 是否显示全屏按钮，默认关闭
  download: true,                   // 是否显示导出按钮，默认关闭
  upload: true,                     // 是否显示导入按钮，默认关闭
  reload: true,                     // 是否显示刷新按钮，默认关闭
};

export default unitConfig;
```

## drawer_list.tsx

```ts title="drawer_list.tsx"
import React, { useImperativeHandle, useState } from 'react';
import DDBunit2 from '@/components/DDBunit/DDBunit2';
import CONSTANTS from '@/components/DDAssist/constants';
import { Drawer, Button, message } from 'antd';
import drawer_list_config from './drawer_list_config';
import Func from './drawer_list_fun';

export interface BdjgProps {
  onRef?: any;
}

const DrawerList: React.FC<BdjgProps> = ({
  onRef,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [myConfig, setMyconfig] = useState<any>(drawer_list_config);
  const [refGrid, setRefGrid] = useState<any>();

  // 开启
  const showModal = (param: any) => {
    const c = { ...myConfig };
    c.grid_title = `报关单号：${param.record.ckbgdh}`;

    const gridParams: any = {
      initSearchModal: [
        { property: 'aaa', value: '11', op: 'al' },
        { property: 'bbb', value: '22', op: 'al' },
        { property: 'gdh', value: param.record.ckbgdh, op: 'al' },
      ],
    }
    c.gridParams = gridParams;

    setMyconfig(c);
    setModalVisible(true);
    setRefGrid(param.refGrid);

  };

  // 测试
  const test = () => {
    message.info('测试');
    refGrid.current!.reload(); // 仅刷新列表数据
  }

  useImperativeHandle(onRef, () => {
    return {
      showModal,
    };
  });

  return (
    <Drawer
      title="DrawerList"
      open={modalVisible}
      onClose={() => {setModalVisible(false)}}
      width={CONSTANTS.C_MODAL_WIDTH_X3}
      destroyOnClose={true}
      className="dd_modal_bg"
    >
      <DDBunit2 config={myConfig} func={Func} />
      <Button onClick={() => {test()}}>测试</Button>
    </Drawer>
  );
};

export default DrawerList;

```

## drawer_list_fun.tsx

```ts title="drawer_list_fun.tsx"
import React from 'react';

const Func: any = {
  refUnit: React.createRef(),
};

export default Func;
```
