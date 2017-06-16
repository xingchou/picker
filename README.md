# Picker
移动端的联动选择器组件（例如：地址省市区三级联动），压缩后只有几KB，非常小巧


## Usage
```javascript 
import：
    import Picker from 'picker.min.js'
    @import "picker.css"
    
直接引入：
    <link href="picker.css" rel="stylesheet" />
    <script src='picker.min.js'></script>
```

## Data
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

## Function
```javascript
// 选择器（将方法封装到函数内，每次使用调用此函数就行）
new Picker({
    "title": '请选择', //标题(可选)
    
    //默认值： 多个用空格隔开；（可选）
    "defaultValue": '上海市 上海市 上海市', 

    //需要联动级数[1、2、3]（可选）
    //不传时默认获取数据的深度,最多3级
    "type": 1,

    //数据(必选)
    //在使用时，把cityData替换为后台返回的数据即可，但格式要和cityData一致
    "data": cityData, 

    //数据内的键名称[Code、Name、level](必选)
    "keys": {
        "id": "Code",
        "value": "Name",
        "childData": "level"
    },

   //回调函数（val为当前选中的值）(必选)
   "callBack": function (val) {
     
        // 可在此处显示选中的值
    }
});
```

## Demo：

https://xingchou.github.io/pluginApp/dist/index.html#/list/picker



