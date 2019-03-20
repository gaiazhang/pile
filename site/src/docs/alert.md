# mobile端alert组件

## 基本用法
alert
包含无按钮, 确认框, 多按钮情况

```jsx harmony
onClick = () => {
  Modal.alert('删除', '确定删除么???', [
    { text: '取消', onPress: () => console.log('cancel') },
    { text: '确定', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },
  ]);
}

render () {
  return (
    <div>
      <Button type='primary' onClick={this.onClick}>alert click</Button>{' '}
    </div>
  )
}
```

## API

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| title      |  String 或 React.Element  |      无     | 标题 |
| message   |  String 或 React.Element  |  无    | 提示信息	|
| actions    | Array | 无 |   按钮组, [{text, onpress}]     |
