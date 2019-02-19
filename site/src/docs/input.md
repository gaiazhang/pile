# mobile端input组件

## 基本用法
```js
render () {
  return (
    <div>
      <Input placeholder='请输入姓名' value='我是谁'>姓名：</Input>
      <Input placeholder='请输入电话'>电话：</Input>
      <Input placeholder='我要自动获取焦点' autoFocus={true}>自动对焦</Input>
    </div>
  )
}
```

## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  String  |  -      | input类型 |
| disabled  |  Boolean  |  -      | 禁用状态 |
| readonly  |  Boolean  |  -      | 只读状态 |
| maxlength  |  Number  |  -      | 最大输入长度 |
| placehodler  |  String  |  -      | 占位文本 |
| autofocus  |  Boolean  |  -      | 自动对焦 |
| clearable  |  Boolean  |  -      | 是否使用清空按钮 |
| eye  |  Boolean  |  -      | 是否密码可见|
| focus  |  Function  |  -      | 获取焦点|
| blur  |  Function  |  -      | 失去焦点|
| onChange  |  Function  |  -      | 内容变化|








