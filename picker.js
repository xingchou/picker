/**
 * picker v1.0 Created by zx.
 */
(function (window, document, Math) {
    //scroll
    function Scroll(id, params) {
        this.scroller = document.querySelector(id);
        this.childNode = this.scroller.childNodes[0];
        this.options = {
            step: true,// 是否开启步长模式
            defaultPlace: 0,// 默认列表位置
            callback: null
        };

        this.startPageY = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.offsetTop = 0;//上一次滚动位置

        this.scrollerHeight = this.scroller.clientHeight;//scroller高度
        this.childNodeHeight = this.childNode.clientHeight;//scroller子元素的高度
        this.scrollHeight = this.childNodeHeight - this.scrollerHeight;//滚动高度

        var childNodes = this.childNode.childNodes;
        this.stepLen =  childNodes.length > 0 ? childNodes[0].clientHeight : 0;// 步长

        // 设置参数
        for(var i in params){
            this.options[i] = params[i];
        }

        // 默认列表位置
        var defaultPlace = this.options.defaultPlace ? this.options.defaultPlace : 0;
        this.scrollTo(0, defaultPlace);

        this._start();
        this._move();
        this._end();
        // console.log(this);
    }

    Scroll.prototype = {
        _start: function () {
            var self = this;
            self.scroller.addEventListener('touchstart', function (e) {
                e.stopPropagation();
                e.preventDefault();

                self.startTime = self.getTime();
                var touches = e.touches ? e.touches[0] : e;
                self.startPageY = touches.pageY;//起始触摸点

                self.browserVendor('transition', 'none');
            }, false);
        },

        _move: function () {
            var self = this;
            self.scroller.addEventListener('touchmove', function (e) {
                e.stopPropagation();
                e.preventDefault();

                var timestamp = self.getTime();
                var touches = e.touches ? e.touches[0] : e;

                // 滚动高度
                var diffPageY = touches.pageY - self.startPageY;
                var movePageY = diffPageY + self.offsetTop;

                // 最少移动10px
                if ( timestamp - self.endTime > 300 && Math.abs(diffPageY) < 10 ) {
                    return;
                }

                // 超过边缘滚动有阻力
                if( movePageY > 0 ){
                    movePageY /= 3;
                }else if( Math.abs(movePageY) > Math.abs(self.scrollHeight) ){
                    movePageY = Math.abs(self.scrollHeight) - Math.abs(movePageY);
                    movePageY = movePageY / 3 - self.scrollHeight;
                }

                self.browserVendor('transform', 'translate(0, '+ movePageY +'px)');
            }, false);
        },

        _end: function () {
            var self = this;
            self.scroller.addEventListener('touchend', function (e) {
                e.stopPropagation();
                e.preventDefault();

                self.endTime = self.getTime();
                var duration = self.endTime - self.startTime;

                var touches = e.changedTouches ? e.changedTouches[0] : e;
                var offsetHeight = touches.pageY - self.startPageY;//本次滚动偏移位置
                self.offsetTop += offsetHeight;//记录总偏移位置

                if( (self.offsetTop > 0) || (Math.abs(self.offsetTop) > Math.abs(self.scrollHeight)) ){
                    //上边缘&下边缘
                    self.browserVendor('transition', 'all 500ms');
                }else if( duration < 300 ){ // 惯性滚动
                    var speed = Math.abs(offsetHeight) / duration;// 惯性移动速度
                    var moveTime = duration * speed * 20;// 惯性滚动时间(动画)
                    moveTime = moveTime > 2000 ? 2000 : moveTime;
                    self.offsetTop += offsetHeight * speed * 10;// 惯性移动距离

                    self.browserVendor('transitionProperty', 'all');
                    self.browserVendor('transitionDuration', moveTime + 'ms');
                    self.browserVendor('transitionTimingFunction', 'cubic-bezier(0.1, 0.57, 0.1, 1)');
                }else{
                    self.browserVendor('transition', 'all 500ms');
                }

                if( self.offsetTop > 0 ){
                    self.offsetTop = 0;
                }else if( Math.abs(self.offsetTop) > Math.abs(self.scrollHeight) ){
                    self.offsetTop = -self.scrollHeight;
                }

                // 步长模式
                if( self.options.step && self.stepLen > 0 ){
                    var nowEndY = self.offsetTop;
                    var h = Math.abs( nowEndY % self.stepLen );//滚动多余不足step的高度
                    var halfHeight = self.stepLen / 2;//step一半的高度

                    //超过行一半的高度，则滚动一行
                    var moveY = (h >= halfHeight) ? (nowEndY - self.stepLen + h) : (nowEndY + h);

                    var index = parseInt( Math.abs(moveY) / self.stepLen );
                    self.options.callback({
                        index: index,
                        node: self.childNode.childNodes
                    });
                    self.offsetTop = moveY;
                }

                self.browserVendor('transform', 'translate(0, '+ self.offsetTop +'px)');

            }, false);
        },

        // 滚动到指定位置
        scrollTo: function (x, y, time) {
            var self = this;

            if( time && time > 0 ){
                self.browserVendor('transitionProperty', 'all');
                self.browserVendor('transitionDuration', time + 'ms');
                self.browserVendor('transitionTimingFunction', 'cubic-bezier(0.1, 0.57, 0.1, 1)');
            }else{
                self.browserVendor('transition', 'none');
            }

            y = -y;
            self.offsetTop = y;
            self.browserVendor('transform', 'translate(0, '+ y +'px)');
        },

        // 刷新
        refresh: function () {
            this.childNode = this.scroller.childNodes[0];
            this.startPageY = 0;
            this.startTime = 0;
            this.endTime = 0;
            this.offsetTop = 0;

            this.scrollerHeight = this.scroller.clientHeight;//scroller高度
            this.childNodeHeight = this.childNode.clientHeight;//scroller子元素的高度
            this.scrollHeight = this.childNodeHeight - this.scrollerHeight;//滚动高度

            var childNodes = this.childNode.childNodes;
            this.stepLen =  childNodes.length > 0 ? childNodes[0].clientHeight : 0;// 步长

            this.scrollTo(0, 0, 500);
        },

        // 浏览器兼容
        browserVendor: function(styleStr, value){
            var self = this;
            var vendors = ['t', 'WebkitT', 'MozT', 'msT', 'OT'],
                styleObj,
                len = vendors.length;
            var elementStyle = self.childNode.style;

            for (var i = 0; i < len; i++ ) {
                styleObj = vendors[i] + styleStr.substr(1);
                if ( styleObj in elementStyle ) {
                    elementStyle[styleObj] = value;
                    // console.log(styleObj + ' = ' + value);
                }
            }
        },

        // 获取当前时间
        getTime: function () {
            return parseInt(new Date().getTime());
        }
    };


    // Picker
    function Picker(params) {
        this.dataListTwo = null;//二级数据
        this.arrayDepth = 1;//数组深度
        this.scrollArray = [];//iscroll变量
        this.textArray = [];//选中的值
        this.isScrollTo = false;//是否是scrollTo 滚动

        //参数
        this.options = {
            "title": '请选择',//标题(可选)
            "defaultValue": '',//默认值-多个以空格分开（可选）
            "type": '',//几级联动（1、2、3）
            "data": [],//数组数据(必传)
            "keys": null,//数组内的键名称(必传，id、text、data)
            "callBack": null
        };

        // 参数赋值
        for ( var i in params ) {
            this.options[i] = params[i];
        }

        // 键名称不能为空, 数组数据不能为空
        if( !this.options.keys && this.options.data.length <= 0 ){
            //console.log('键名称不能为空, 数组数据不能为空');
            return;
        }

        // 几级联动
        if( !this.options.type || this.options.type > 3 || this.options.type < 1 ){
            //获取数组深度（几级联动）
            this.getArrayDepth(params.data);
        }else{
            this.arrayDepth = this.options.type;
        }

        //键值
        var keys = this.options.keys;
        this.keyId = keys.id;
        this.keyValue = keys.value;
        this.keyData = keys.childData;

        //是否有默认值
        this.defaultArray = ['', '', ''];
        if ( this.options.defaultValue ) {
            var defaultValue = this.options.defaultValue;
            var dvArray = defaultValue.split(" ");
            if( dvArray.length > 0 ){
                for( var num = 0; num < dvArray.length; num++ ){
                    this.defaultArray[num] = dvArray[num];
                }
            }
        }

        //填充数据并显示picker
        this.FillData();

        //添加click事件
        this.eventClick();
    }

    Picker.prototype = {
        //填充data
        FillData: function () {
            var self = this;

            // 所有输入失去焦点
            self.enterNodesBlur();

            //body中是否存在picker
            var modalbox = document.querySelector(".zx_mask");
            if( modalbox ){
                document.body.removeChild(modalbox);
            }

            var title = self.options.title ? self.options.title : '请选择';
            var modalParent = document.createElement("div"); //父节点
            modalParent.className = "zx_mask";

            var picker_list = '<div class="zx_select showPicker">' +
                '<header><button class="nav_left picker-cancel">取消</button>' +
                '<h1>' + title + '</h1><button class="nav_right picker-ok">确定</button></header>' +
                '<div class="ub"><div class="ub-f1 picker-wrapper" id="picker-wrapper0"><ul></ul></div>';

            //2级选择
            if( self.arrayDepth >= 2 ) {
                picker_list += '<div class="ub-f1 picker-wrapper" id="picker-wrapper1"><ul></ul></div>';
            }

            //3级选择
            if( self.arrayDepth >= 3 ){
                picker_list += '<div class="ub-f1 picker-wrapper" id="picker-wrapper2"><ul></ul></div>';
            }

            picker_list += '<div class="sel_top"></div><div class="sel_bottom"></div>';
            picker_list += '<div class="sel_middle"></div></div></div>';
            modalParent.innerHTML = picker_list;
            document.body.appendChild( modalParent );

            //设置宽度
            var listWidth = parseFloat(100 / self.arrayDepth).toFixed(3) + "%";
            var pickerWrapperArr = document.querySelectorAll('.picker-wrapper');
            for( var i = 0; i < pickerWrapperArr.length; i++ ){
                pickerWrapperArr[i].style.minWidth = listWidth;
                pickerWrapperArr[i].style.maxWidth = listWidth;
            }

            if( self.arrayDepth >= 1 ) {
                self.showScrollList(this.options.data, 0, true);
            }

            setTimeout(function () {
                document.querySelector('.zx_select').style.height = '245px';
            }, 0);
        },

        // iscroll初始化
        scrollInit: function (index, num) {
            var self = this;

            //每个选项对的高度
            var wrapperList = document.querySelector('#picker-wrapper0').childNodes[0];
            var itemHeight = wrapperList.childNodes[0].clientHeight;

            var id = '#picker-wrapper' + index;
            self.scrollArray[index] = new Scroll(id, {
                //步长（每次滚动固定距离）
                step: itemHeight,

                // 列表默认位置(默认为0)
                defaultPlace: itemHeight * num,

                // 滚动结束回调函数
                callback: function (params) {
                    var num = params.index + 2;
                    var node = params.node[num];
                    self.SetItemList(node, index);
                }
            });

            //禁止move事件
            self.add_EventListen();
        },

        //设置列表、存储选中数据
        SetItemList: function (nowScroll, index) {
            // nowScroll, 当前选择项的节点
            // index, 当前选择的是第几级列表 0，1，2
            var self = this;
            if ( nowScroll ) {
                //键值
                var keyId = self.keyId;
                var keyValue = self.keyValue;

                // 当前选择项的值
                var nowItem = {};
                nowItem[keyValue] = nowScroll.textContent;
                nowItem[keyId] = nowScroll.attributes[0].value;

                // 默认值重置
                self.defaultArray = ['', '', ''];
                if ( index == 0 ) {
                    // 滚动一级列表
                    self.defaultArray[index] = nowItem[keyValue];
                    self.showScrollList(self.options.data, 0);
                } else if ( index == 1 ) {
                    // 滚动二级列表
                    self.defaultArray[index] = nowItem[keyValue];
                    self.showScrollList(self.dataListTwo, 1);
                }
            } else {
                var nowItem = "";
            }

            self.textArray[index] = nowItem;
        },

        // 显示数据列表
        showScrollList: function (dataList, index, isInit) {
            // dataList, 数据(例如：省、市、区)
            // index, 当前wrapper列数(0、1、2)
            // hasDefaultValue, 需要判断默认值(true/false)
            // isInit, 需要判断是否为初始化(true/false)

            var self = this;
            var keyId = self.keyId;
            var keyValue = self.keyValue;
            var keyData = self.keyData;

            var list = '<li></li><li></li>', defaultNum, childData = [];//默认值

            if ( self.defaultArray[index] ) {
                // 判断默认值
                var isMatch = false;// 默认值是否能匹配
                for (var i = 0; i < dataList.length; i++) {
                    if ( self.defaultArray[index] && self.defaultArray[index] == dataList[i][keyValue] ) {
                        isMatch = true;
                        defaultNum = i;//默认选中的值
                        if( keyData && dataList[i][keyData] ){
                            childData = dataList[i][keyData];//子集
                        }
                        self.setDefaultItem(index, dataList[i][keyValue], dataList[i][keyId]);
                    }

                    list += '<li data-id="' + dataList[i][keyId] + '">' + dataList[i][keyValue] + '</li>';
                }

                if( !isMatch ){
                    if( keyData && dataList[0][keyData] ){
                        childData = dataList[0][keyData];//子集
                    }
                    self.setDefaultItem(index, dataList[0][keyValue], dataList[0][keyId]);
                }
            }else {
                //无默认值
                for (var i = 0; i < dataList.length; i++) {
                    list += '<li data-id="' + dataList[i][keyId] + '">' + dataList[i][keyValue] + '</li>';
                }

                if( keyData && dataList[0][keyData] ){
                    childData = dataList[0][keyData];//子集
                }
                self.setDefaultItem(index, dataList[0][keyValue], dataList[0][keyId]);
            }

            list += '<li></li><li></li>';
            document.querySelector('#picker-wrapper' + index).childNodes[0].innerHTML = list;

            // 初始化&滚动选择
            var num = index + 1;
            if( isInit ){
                self.scrollInit(index, defaultNum);//iscroll init
                if( num < self.arrayDepth && childData.length > 0 ){
                    self.showScrollList(childData, num, true);
                }
            }else{
                if( num < self.arrayDepth ){
                    if( childData.length > 0 ){
                        self.showScrollList(childData, num);
                    }

                    setTimeout(function () {
                        self.scrollArray[num].refresh();
                    }, 0);
                }
            }

            // 保存一级数据（只滚动二级时使用）
            if( index == 0 ){
                self.dataListTwo = childData;
            }
        },

        // 默认选中的值
        setDefaultItem: function (index, value, id) {
            var self = this;

            //键值
            var keyId = self.keyId;
            var keyValue = self.keyValue;

            var newItem = {};
            newItem[keyValue] = value;
            newItem[keyId] = id;

            self.textArray[index] = newItem;
        },

        //点击事件
        eventClick: function () {
            var self = this;

            //取消按钮
            document.querySelector('.picker-cancel').addEventListener("touchstart", function (e) {
                e.stopPropagation();
                e.preventDefault();
                self.HidePicker();//隐藏picker
            });

            //确定按钮
            document.querySelector('.picker-ok').addEventListener("touchstart", function (e) {
                e.stopPropagation();
                e.preventDefault();

                var inputValue = '';
                var dataCode = '';

                var keys = self.options.keys;
                for (var i = 0; i < self.textArray.length; i++) {
                    var id = keys.id;
                    var value = keys.value;

                    if (i == 0) {
                        inputValue += self.textArray[i][value];
                        dataCode += self.textArray[i][id];
                    } else {
                        inputValue += " " + self.textArray[i][value];
                        dataCode += "," + self.textArray[i][id];
                    }
                }

                //回调函数
                if( self.options.callBack ){
                    self.options.callBack(inputValue);
                }

                //隐藏picker
                self.HidePicker();
            });
        },

        //隐藏picker
        HidePicker : function(){
            var self = this;
            document.querySelector('.zx_select').style.height = '0';
            self.remove_EventListen();
            setTimeout(function () {
                var modalBox = document.querySelector('.zx_mask');
                document.body.removeChild( modalBox );
                self.destroy();//销毁变量
            }, 200);
        },

        //获取数组深度
        getArrayDepth : function (data){
            var self = this;
            var dataArray = data[0], index = "";

            for(var i in dataArray){
                if( Array.isArray(dataArray[i]) && dataArray[i].length != 0 ){
                    index = i;
                    self.arrayDepth++;
                    break;
                }
            }

            if( index ){
                self.getArrayDepth(dataArray[index]);
            }
        },

        // 所有输入失去焦点(隐藏键盘)
        enterNodesBlur: function () {
            var inputArr = document.querySelectorAll('input');
            for(var m = 0; m < inputArr.length; m++){
                inputArr[m].blur();
            }

            var textareaArr = document.querySelectorAll('textarea');
            for(var n = 0; n < textareaArr.length; n++){
                textareaArr[n].blur();
            }
        },

        //禁止默认事件
        touchDefault: function (e) {
            e.preventDefault();
        },

        //阻止冒泡&默认事件
        touchStop : function (e) {
            e.stopPropagation();
            e.preventDefault();
        },

        //添加监听事件
        add_EventListen: function () {
            var self = this;
            // document.addEventListener('touchstart', self.touchDefault, false);
            document.addEventListener('touchmove', self.touchDefault, false);
            // document.addEventListener('touchend', self.touchDefault, false);
        },

        //移除监听事件
        remove_EventListen: function () {
            var self = this;
            // document.removeEventListener('touchstart', self.touchDefault, false);
            document.removeEventListener('touchmove', self.touchDefault, false);
            // document.removeEventListener('touchend', self.touchDefault, false);
        },

        //picker销毁
        destroy: function () {
            var self = this;

            self.dataListTwo = null;//二级地址数据
            self.options = null;//参数
            self.arrayDepth = 1;//数组深度
            self.scrollArray = [];//iscroll变量
            self.textArray = [];//选中的值
            self.isScrollTo = false;//是否是scrollTo 滚动

            this.keyId = '';
            this.keyValue = '';
            this.keyData = '';

            this.defaultArray = ['', '', ''];//默认值
        }
    };

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = Picker;
    } else {
        window.Picker = Picker;
    }
})(window, document, Math);
