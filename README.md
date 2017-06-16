# picker
移动端的联动选择器组件（例如：地址联动），压缩后只有几KB，非常小巧


## 引入
```javascript 
import：
    import Picker from 'picker.min.js'
    @import "picker.css"
    
直接引入：
    <link href="picker.css" rel="stylesheet" />
    <script src='picker.min.js'></script>
```

## 数据格式
```javascript
// 例：城市数据(3级联动)
let cityData = {
    "Code": "310000",
    "Name": "上海市",
    "level": [
        {
            "Code": "310000",
            "Name": "上海市",
            "sort": 1,
            "level": [
                {
                    "Code": "312000",
                    "Name": "黄浦区",
                    "sort": 1
                }
            ]
        }
    ]
}
```

## 调用方法
```javascript
// 选择器
new Picker({
    "title": '请选择', //标题(可选)
    
    "defaultValue": '上海市 上海市 上海市', //默认值： 多个用空格隔开；（可选）

    //需要联动级数[1、2、3]（可选）
    //不传时默认获取数据的深度,最多3级
    "type": 1,

    "data": cityData, //数据(必传)

    //数据内的键名称[Code、Name、level](必传)
    "keys": {
        "id": "Code",
        "value": "Name",
        "childData": "level"
    },

    "callBack": function (val) {
        //回调函数（val为当前选中的值）
        // 可在此处显示选中的值
    }
});
```


## demo：

https://xingchou.github.io/pluginApp/dist/index.html#/list/picker



