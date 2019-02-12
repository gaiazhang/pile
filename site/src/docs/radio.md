# mobile端Radio组件

## 基本用法

```js
render () {
	var options = [
	{value: 1, label: '选项1'}, 
	{value: 2, label: '选项2'},
	{value: 3, label: '选项3'}, ]
	var onChange = (v) => console.log('onChange===>', v)
  return (
    <div>
      <Radio options={options} value={1} onChange={onChange} ></Radio>
    </div>
  )
}
```