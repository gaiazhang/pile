# mobile端toast组件

## 基本用法

```js
componentWillMount () {
  //this.setState({content : "hi,jasmine"})
  Toast.show({content : "hi,jasmine",iconType : "success",duration: 0})
  setTimeout(() => {
        //this.setState({content : "hei,potato",iconType : "warn"})
        Toast.hide();
  }, 1 * 1000);
}
render () {
  return (
    <div>
      111
    </div>
  )
}
```
## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  string  |  -      | one of [arrow-left, arrow-right, ... , icon-warnning]  |
| size  |  string  |  -      | small/large，small: 12px，large: 24px; |
