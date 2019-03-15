# mobile端Radio组件

## 基本用法

```js
render () {
	var onChange = (v) => console.log('onChange===>', v)
  return (
    <div>
      <Radio value='1' onChange={onChange}>选项1</Radio>
    </div>
  )
}
```

## 基本用法

```js
render () {
	var onChange = (v) => console.log('onChange===>', v)
  return (
    <div>
      <Radio.RadioGroup disabled={false} value={2} onChange={onChange} >
      	<Radio value='1' disabled>选项1</Radio>
      	<Radio value='2'>选项2</Radio>
      	<Radio value='3'>选项3</Radio>
      </Radio.RadioGroup>
    </div>
  )
}
```



## 配置options用法

```js
render () {
	var options = [
	{value: 1, label: '选项1'}, 
	{value: 2, label: '选项2'},
	{value: 3, label: '选项3'}, ]
	var onChange = (v) => console.log('options---onChange===>', v)
  return (
    <div>
      <Radio.RadioGroup options={options} disabled={false} value={1} onChange={onChange} >
      </Radio.RadioGroup>
    </div>
  )
}
```

## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| options  |  object  |  -      | 需要配置的radio。value：radio值；label：radio文案 |
| value  |  string，number  |  -      | 默认选中的radio值 |
| disabled     | boolean |  false    | 是否禁用 |
| onChange     | function |  -    | 选中回调函数 |