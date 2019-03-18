# mobile端alert组件

## 基本用法
alert
包含无按钮, 确认框

```jsx harmony
onClick = () => {
      Alert.open({
      alertTip: '这是一个测试弹框',
      alertCon: '内容内容123',
      callBack: function() {
        console.log('关闭了...');
      }
    });
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
| alertTip      |  String 或 React.Element  |      无     | 标题 |
| alertCon   |  String 或 React.Element  |  无    | 提示信息	|
| alertStatus   |  bool  |  false    | icon是否显示	|
| closeAlert    | function | 无 |   按钮回调函数    |
