## localStore
### setItem
设置键值key的localStore数据  
### getItem
根据键值key从localStore里获取数据  
### getStorage
从localStore里获取全部数据  
### clear
根据键值key删除localStore里的数据  
## sessionStore
### setItem
设置键值key的sessionStore数据  
### getItem
根据键值key从sessionStore里获取数据  
### getStorage
从sessionStore里获取全部数据  
### clear
根据键值key删除sessionStore里的数据  
### clearAll
删除sessionStore里的所有数据  
## 文字处理
### formatNum
基于Numeral.js 处理数字  
### getNumVal
基于Numeral.js 获取数值  
### leadingZeroize
补0并截取字符  
### toUpper
字符转大写  
### toLower
字符转小写  
### arrayToStr
数组转字符串  
### uuid
生成uuid  
### formatRepalce
字符窜占位符替换  
## 日期处理
### formatDate
将日期格式化成指定格式的字符串  
获取当前月的最后一天 （精确到秒23:59:59）  
### accurateDate
毫秒数精确到秒  
### compareTime
判断日期是否在几个月得范围内 (YYYY-MM-DD | YYYY-MM-DD Hi:mm:ss | 时间戳)  
## 列表组件
### formatDate
格式化日期格式  
### formatNum
格式化数值格式  
### formatBankNo
格式化银行卡号格式  
### formatBankNo
格式化*符号  
## 码表
### getHeaderFilterOption
码表内容格式为页头筛选  
### getSelectOption
码表内容格式为下拉选项  
### getUrlCodeParams
码表内容,单独使用url请求,参数初始化  
### getCodeFromServerT1
获取指定码表，服务器端  
### saveCodeToLocalTable
保存码表值本地存贮  
### getCode
获取指定码表  
### getCodeValByKey
根据key获取指定码表的指定值，如果码表中无标准 code、name， 则采用match进行匹配  
### getCodeValByKey2
根据key及获取指定码表的指定值  
### getCodeTableParam
根据key及获取指定码表的指定值  
### getCodeTableParamFromJson
获取表单参数  
### getCodeTablePromise
获取表单promise  
## 文件
