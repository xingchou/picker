
(function (window, document, Math) {

var cityData = [
    {
        "Code": "940000",
        "Name": "澳门特别行政区",
        "level": [
            {
                "Code": "940000",
                "Name": "澳门特别行政区",
                "sort": 1,
                "level": [
                    {
                        "Code": "940000",
                        "Name": "澳门特别行政区",
                        "sort": 1
                    }
                ]
            }
        ]
    },
    {
        "Code": "150000",
        "Name": "内蒙古自治区",
        "level": [
            {
                "Code": "150100",
                "Name": "呼和浩特市",
                "sort": 1,
                "level": [
                    {
                        "Code": "150100",
                        "Name": "赛罕区",
                        "sort": 1
                    },
                    {
                        "Code": "150100",
                        "Name": "玉泉区",
                        "sort": 2
                    },
                    {
                        "Code": "150100",
                        "Name": "回民区",
                        "sort": 3
                    },
                    {
                        "Code": "150100",
                        "Name": "新城区",
                        "sort": 4
                    },
                    {
                        "Code": "150100",
                        "Name": "土默特左旗",
                        "sort": 5
                    },
                    {
                        "Code": "150100",
                        "Name": "托克托县",
                        "sort": 6
                    },
                    {
                        "Code": "150170",
                        "Name": "准格尔旗",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "150120",
                "Name": "乌兰察布市",
                "sort": 2,
                "level": [
                    {
                        "Code": "150120",
                        "Name": "集宁区",
                        "sort": 1
                    },
                    {
                        "Code": "150120",
                        "Name": "丰镇市",
                        "sort": 2
                    },
                    {
                        "Code": "150120",
                        "Name": "察哈尔右翼前旗",
                        "sort": 3
                    },
                    {
                        "Code": "150120",
                        "Name": "卓资县",
                        "sort": 4
                    },
                    {
                        "Code": "150120",
                        "Name": "察哈尔右翼后旗",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "150140",
                "Name": "包头市",
                "sort": 3,
                "level": [
                    {
                        "Code": "150140",
                        "Name": "昆都仑区",
                        "sort": 1
                    },
                    {
                        "Code": "150140",
                        "Name": "青山区",
                        "sort": 2
                    },
                    {
                        "Code": "150140",
                        "Name": "白云矿区",
                        "sort": 3
                    },
                    {
                        "Code": "150140",
                        "Name": "东河区",
                        "sort": 4
                    },
                    {
                        "Code": "150140",
                        "Name": "九原区",
                        "sort": 5
                    },
                    {
                        "Code": "150140",
                        "Name": "石拐区",
                        "sort": 6
                    },
                    {
                        "Code": "150140",
                        "Name": "土默特右旗",
                        "sort": 7
                    },
                    {
                        "Code": "150140",
                        "Name": "固阳县",
                        "sort": 8
                    },
                    {
                        "Code": "150170",
                        "Name": "达拉特旗",
                        "sort": 9
                    },
                    {
                        "Code": "150150",
                        "Name": "乌拉特前旗",
                        "sort": 10
                    },
                    {
                        "Code": "150140",
                        "Name": "达尔罕茂明安联合旗",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "150150",
                "Name": "巴彦淖尔市",
                "sort": 4,
                "level": [
                    {
                        "Code": "150150",
                        "Name": "临河区",
                        "sort": 1
                    },
                    {
                        "Code": "150150",
                        "Name": "五原县",
                        "sort": 2
                    },
                    {
                        "Code": "150150",
                        "Name": "磴口县",
                        "sort": 3
                    },
                    {
                        "Code": "150150",
                        "Name": "乌拉特中旗",
                        "sort": 4
                    },
                    {
                        "Code": "150150",
                        "Name": "杭锦后旗",
                        "sort": 5
                    },
                    {
                        "Code": "150150",
                        "Name": "乌拉特后旗",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "150160",
                "Name": "乌海市",
                "sort": 5,
                "level": [
                    {
                        "Code": "150160",
                        "Name": "海勃湾区",
                        "sort": 1
                    },
                    {
                        "Code": "150160",
                        "Name": "海南区",
                        "sort": 2
                    },
                    {
                        "Code": "150160",
                        "Name": "乌达区",
                        "sort": 3
                    },
                    {
                        "Code": "150170",
                        "Name": "鄂托克旗",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "150170",
                "Name": "鄂尔多斯市",
                "sort": 6,
                "level": [
                    {
                        "Code": "150170",
                        "Name": "东胜区",
                        "sort": 1
                    },
                    {
                        "Code": "150170",
                        "Name": "伊金霍洛旗",
                        "sort": 2
                    },
                    {
                        "Code": "150170",
                        "Name": "乌审旗",
                        "sort": 3
                    },
                    {
                        "Code": "150170",
                        "Name": "杭锦旗",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "150210",
                "Name": "呼伦贝尔市",
                "sort": 7,
                "level": [
                    {
                        "Code": "150210",
                        "Name": "海拉尔区",
                        "sort": 1
                    },
                    {
                        "Code": "150210",
                        "Name": "新巴尔虎左旗",
                        "sort": 2
                    },
                    {
                        "Code": "150210",
                        "Name": "陈巴尔虎旗",
                        "sort": 3
                    },
                    {
                        "Code": "150210",
                        "Name": "鄂温克族自治旗",
                        "sort": 4
                    },
                    {
                        "Code": "150210",
                        "Name": "新巴尔虎右旗",
                        "sort": 5
                    },
                    {
                        "Code": "150210",
                        "Name": "满洲里市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "150240",
                "Name": "赤峰市",
                "sort": 8,
                "level": [
                    {
                        "Code": "150240",
                        "Name": "红山区",
                        "sort": 1
                    },
                    {
                        "Code": "150240",
                        "Name": "松山区",
                        "sort": 2
                    },
                    {
                        "Code": "150240",
                        "Name": "元宝山区",
                        "sort": 3
                    },
                    {
                        "Code": "150240",
                        "Name": "宁城县",
                        "sort": 4
                    },
                    {
                        "Code": "150240",
                        "Name": "敖汉旗",
                        "sort": 5
                    },
                    {
                        "Code": "150240",
                        "Name": "喀喇沁旗",
                        "sort": 6
                    },
                    {
                        "Code": "150240",
                        "Name": "翁牛特旗",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "150260",
                "Name": "锡林郭勒盟",
                "sort": 9,
                "level": [
                    {
                        "Code": "150260",
                        "Name": "锡林浩特市",
                        "sort": 1
                    },
                    {
                        "Code": "150260",
                        "Name": "西乌珠穆沁旗",
                        "sort": 2
                    },
                    {
                        "Code": "150260",
                        "Name": "东乌珠穆沁旗",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "150280",
                "Name": "通辽市",
                "sort": 10,
                "level": [
                    {
                        "Code": "150280",
                        "Name": "科尔沁区",
                        "sort": 1
                    },
                    {
                        "Code": "150280",
                        "Name": "库伦旗",
                        "sort": 2
                    },
                    {
                        "Code": "150280",
                        "Name": "奈曼旗",
                        "sort": 3
                    },
                    {
                        "Code": "150280",
                        "Name": "开鲁县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "151374",
                "Name": "兴安盟",
                "sort": 11,
                "level": [
                    {
                        "Code": "151374",
                        "Name": "乌兰浩特市",
                        "sort": 1
                    },
                    {
                        "Code": "151374",
                        "Name": "扎赉特旗",
                        "sort": 2
                    },
                    {
                        "Code": "151374",
                        "Name": "科尔沁右翼前旗",
                        "sort": 3
                    },
                    {
                        "Code": "151374",
                        "Name": "阿尔山市",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "157503",
                "Name": "阿拉善盟",
                "sort": 12,
                "level": [
                    {
                        "Code": "157503",
                        "Name": "阿拉善左旗",
                        "sort": 1
                    }
                ]
            }
        ]
    },
    {
        "Code": "140000",
        "Name": "山西省",
        "level": [
            {
                "Code": "140300",
                "Name": "太原市",
                "sort": 1,
                "level": [
                    {
                        "Code": "140300",
                        "Name": "迎泽区",
                        "sort": 1
                    },
                    {
                        "Code": "140300",
                        "Name": "杏花岭区",
                        "sort": 2
                    },
                    {
                        "Code": "140300",
                        "Name": "小店区",
                        "sort": 3
                    },
                    {
                        "Code": "140300",
                        "Name": "尖草坪区",
                        "sort": 4
                    },
                    {
                        "Code": "140300",
                        "Name": "晋源区",
                        "sort": 5
                    },
                    {
                        "Code": "140300",
                        "Name": "万柏林区",
                        "sort": 6
                    },
                    {
                        "Code": "140300",
                        "Name": "阳曲县",
                        "sort": 7
                    },
                    {
                        "Code": "140300",
                        "Name": "古交市",
                        "sort": 8
                    },
                    {
                        "Code": "140300",
                        "Name": "娄烦县",
                        "sort": 9
                    },
                    {
                        "Code": "140300",
                        "Name": "清徐县",
                        "sort": 10
                    },
                    {
                        "Code": "140330",
                        "Name": "交城县",
                        "sort": 11
                    },
                    {
                        "Code": "140306",
                        "Name": "榆次区",
                        "sort": 12
                    },
                    {
                        "Code": "140306",
                        "Name": "太谷县",
                        "sort": 13
                    },
                    {
                        "Code": "140306",
                        "Name": "昔阳县",
                        "sort": 14
                    },
                    {
                        "Code": "140306",
                        "Name": "祁县",
                        "sort": 15
                    }
                ]
            },
            {
                "Code": "140306",
                "Name": "晋中市",
                "sort": 2,
                "level": [
                    {
                        "Code": "140300",
                        "Name": "迎泽区",
                        "sort": 1
                    },
                    {
                        "Code": "140300",
                        "Name": "杏花岭区",
                        "sort": 2
                    },
                    {
                        "Code": "140300",
                        "Name": "小店区",
                        "sort": 3
                    },
                    {
                        "Code": "140300",
                        "Name": "尖草坪区",
                        "sort": 4
                    },
                    {
                        "Code": "140300",
                        "Name": "晋源区",
                        "sort": 5
                    },
                    {
                        "Code": "140300",
                        "Name": "万柏林区",
                        "sort": 6
                    },
                    {
                        "Code": "140300",
                        "Name": "阳曲县",
                        "sort": 7
                    },
                    {
                        "Code": "140300",
                        "Name": "古交市",
                        "sort": 8
                    },
                    {
                        "Code": "140300",
                        "Name": "娄烦县",
                        "sort": 9
                    },
                    {
                        "Code": "140300",
                        "Name": "清徐县",
                        "sort": 10
                    },
                    {
                        "Code": "140330",
                        "Name": "交城县",
                        "sort": 11
                    },
                    {
                        "Code": "140306",
                        "Name": "榆次区",
                        "sort": 12
                    },
                    {
                        "Code": "140306",
                        "Name": "太谷县",
                        "sort": 13
                    },
                    {
                        "Code": "140306",
                        "Name": "昔阳县",
                        "sort": 14
                    },
                    {
                        "Code": "140306",
                        "Name": "祁县",
                        "sort": 15
                    }
                ]
            },
            {
                "Code": "140330",
                "Name": "吕梁市",
                "sort": 3,
                "level": [
                    {
                        "Code": "140330",
                        "Name": "离石区",
                        "sort": 1
                    },
                    {
                        "Code": "140330",
                        "Name": "方山县",
                        "sort": 2
                    },
                    {
                        "Code": "140330",
                        "Name": "临县",
                        "sort": 3
                    },
                    {
                        "Code": "140330",
                        "Name": "柳林县",
                        "sort": 4
                    },
                    {
                        "Code": "140330",
                        "Name": "中阳县",
                        "sort": 5
                    },
                    {
                        "Code": "140330",
                        "Name": "岚县",
                        "sort": 6
                    },
                    {
                        "Code": "140330",
                        "Name": "兴县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "140340",
                "Name": "忻州市",
                "sort": 4,
                "level": [
                    {
                        "Code": "140340",
                        "Name": "忻府区",
                        "sort": 1
                    },
                    {
                        "Code": "140340",
                        "Name": "原平市",
                        "sort": 2
                    },
                    {
                        "Code": "140340",
                        "Name": "代县",
                        "sort": 3
                    },
                    {
                        "Code": "140340",
                        "Name": "繁峙县",
                        "sort": 4
                    },
                    {
                        "Code": "140370",
                        "Name": "灵丘县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "140360",
                "Name": "朔州市",
                "sort": 5,
                "level": [
                    {
                        "Code": "140360",
                        "Name": "朔城区",
                        "sort": 1
                    },
                    {
                        "Code": "140340",
                        "Name": "神池县",
                        "sort": 2
                    },
                    {
                        "Code": "140340",
                        "Name": "五寨县",
                        "sort": 3
                    },
                    {
                        "Code": "140340",
                        "Name": "岢岚县",
                        "sort": 4
                    },
                    {
                        "Code": "140340",
                        "Name": "偏关县",
                        "sort": 5
                    },
                    {
                        "Code": "140340",
                        "Name": "河曲县",
                        "sort": 6
                    },
                    {
                        "Code": "140340",
                        "Name": "保德县",
                        "sort": 7
                    },
                    {
                        "Code": "140340",
                        "Name": "宁武县",
                        "sort": 8
                    },
                    {
                        "Code": "140360",
                        "Name": "平鲁区",
                        "sort": 9
                    },
                    {
                        "Code": "140360",
                        "Name": "山阴县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "140370",
                "Name": "大同市",
                "sort": 6,
                "level": [
                    {
                        "Code": "140370",
                        "Name": "南郊区",
                        "sort": 1
                    },
                    {
                        "Code": "140370",
                        "Name": "新荣区",
                        "sort": 2
                    },
                    {
                        "Code": "140370",
                        "Name": "矿区",
                        "sort": 3
                    },
                    {
                        "Code": "140370",
                        "Name": "城区",
                        "sort": 4
                    },
                    {
                        "Code": "140370",
                        "Name": "左云县",
                        "sort": 5
                    },
                    {
                        "Code": "140360",
                        "Name": "右玉县",
                        "sort": 6
                    },
                    {
                        "Code": "140370",
                        "Name": "大同县",
                        "sort": 7
                    },
                    {
                        "Code": "140370",
                        "Name": "浑源县",
                        "sort": 8
                    },
                    {
                        "Code": "140370",
                        "Name": "广灵县",
                        "sort": 9
                    },
                    {
                        "Code": "140360",
                        "Name": "应县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "140410",
                "Name": "临汾市",
                "sort": 7,
                "level": [
                    {
                        "Code": "140410",
                        "Name": "尧都区",
                        "sort": 1
                    },
                    {
                        "Code": "140410",
                        "Name": "蒲县",
                        "sort": 2
                    },
                    {
                        "Code": "140410",
                        "Name": "隰县",
                        "sort": 3
                    },
                    {
                        "Code": "140410",
                        "Name": "永和县",
                        "sort": 4
                    },
                    {
                        "Code": "140410",
                        "Name": "襄汾县",
                        "sort": 5
                    },
                    {
                        "Code": "140410",
                        "Name": "洪洞县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "140440",
                "Name": "运城市",
                "sort": 8,
                "level": [
                    {
                        "Code": "140440",
                        "Name": "盐湖区",
                        "sort": 1
                    },
                    {
                        "Code": "140440",
                        "Name": "临猗县",
                        "sort": 2
                    },
                    {
                        "Code": "140440",
                        "Name": "万荣县",
                        "sort": 3
                    },
                    {
                        "Code": "140440",
                        "Name": "平陆县",
                        "sort": 4
                    },
                    {
                        "Code": "140440",
                        "Name": "夏县",
                        "sort": 5
                    },
                    {
                        "Code": "140440",
                        "Name": "永济市",
                        "sort": 6
                    },
                    {
                        "Code": "140440",
                        "Name": "芮城县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "140450",
                "Name": "阳泉市",
                "sort": 9,
                "level": [
                    {
                        "Code": "140450",
                        "Name": "城区",
                        "sort": 1
                    },
                    {
                        "Code": "140450",
                        "Name": "郊区",
                        "sort": 2
                    },
                    {
                        "Code": "140450",
                        "Name": "盂县",
                        "sort": 3
                    },
                    {
                        "Code": "140450",
                        "Name": "平定县",
                        "sort": 4
                    },
                    {
                        "Code": "140306",
                        "Name": "寿阳县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "140460",
                "Name": "长治市",
                "sort": 10,
                "level": [
                    {
                        "Code": "140460",
                        "Name": "城区",
                        "sort": 1
                    },
                    {
                        "Code": "140460",
                        "Name": "屯留县",
                        "sort": 2
                    },
                    {
                        "Code": "140460",
                        "Name": "襄垣县",
                        "sort": 3
                    },
                    {
                        "Code": "140460",
                        "Name": "武乡县",
                        "sort": 4
                    },
                    {
                        "Code": "140460",
                        "Name": "沁县",
                        "sort": 5
                    },
                    {
                        "Code": "140460",
                        "Name": "沁源县",
                        "sort": 6
                    },
                    {
                        "Code": "140460",
                        "Name": "长子县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "140480",
                "Name": "晋城市",
                "sort": 11,
                "level": [
                    {
                        "Code": "140480",
                        "Name": "泽州县",
                        "sort": 1
                    },
                    {
                        "Code": "140480",
                        "Name": "城区",
                        "sort": 2
                    },
                    {
                        "Code": "140480",
                        "Name": "阳城县",
                        "sort": 3
                    },
                    {
                        "Code": "140480",
                        "Name": "沁水县",
                        "sort": 4
                    },
                    {
                        "Code": "140480",
                        "Name": "陵川县",
                        "sort": 5
                    },
                    {
                        "Code": "140480",
                        "Name": "高平市",
                        "sort": 6
                    }
                ]
            }
        ]
    },
    {
        "Code": "130000",
        "Name": "河北省",
        "level": [
            {
                "Code": "130500",
                "Name": "石家庄市",
                "sort": 1,
                "level": [
                    {
                        "Code": "130500",
                        "Name": "桥西区",
                        "sort": 1
                    },
                    {
                        "Code": "130500",
                        "Name": "新华区",
                        "sort": 2
                    },
                    {
                        "Code": "130500",
                        "Name": "桥东区",
                        "sort": 3
                    },
                    {
                        "Code": "130500",
                        "Name": "长安区",
                        "sort": 4
                    },
                    {
                        "Code": "130500",
                        "Name": "裕华区",
                        "sort": 5
                    },
                    {
                        "Code": "130500",
                        "Name": "鹿泉市",
                        "sort": 6
                    },
                    {
                        "Code": "130500",
                        "Name": "井陉县",
                        "sort": 7
                    },
                    {
                        "Code": "130500",
                        "Name": "平山县",
                        "sort": 8
                    },
                    {
                        "Code": "130500",
                        "Name": "行唐县",
                        "sort": 9
                    },
                    {
                        "Code": "130500",
                        "Name": "新乐市",
                        "sort": 10
                    },
                    {
                        "Code": "130500",
                        "Name": "正定县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "130530",
                "Name": "衡水市",
                "sort": 2,
                "level": [
                    {
                        "Code": "130530",
                        "Name": "桃城区",
                        "sort": 1
                    },
                    {
                        "Code": "130530",
                        "Name": "枣强县",
                        "sort": 2
                    },
                    {
                        "Code": "130530",
                        "Name": "冀州市",
                        "sort": 3
                    },
                    {
                        "Code": "130530",
                        "Name": "武强县",
                        "sort": 4
                    },
                    {
                        "Code": "130530",
                        "Name": "武邑县",
                        "sort": 5
                    },
                    {
                        "Code": "130530",
                        "Name": "景县",
                        "sort": 6
                    },
                    {
                        "Code": "130530",
                        "Name": "安平县",
                        "sort": 7
                    },
                    {
                        "Code": "130530",
                        "Name": "阜城县",
                        "sort": 8
                    },
                    {
                        "Code": "130530",
                        "Name": "深州市",
                        "sort": 9
                    },
                    {
                        "Code": "130530",
                        "Name": "饶阳县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "130540",
                "Name": "邢台市",
                "sort": 3,
                "level": [
                    {
                        "Code": "130540",
                        "Name": "桥西区",
                        "sort": 1
                    },
                    {
                        "Code": "130540",
                        "Name": "桥东区",
                        "sort": 2
                    },
                    {
                        "Code": "130540",
                        "Name": "邢台县",
                        "sort": 3
                    },
                    {
                        "Code": "130540",
                        "Name": "沙河市",
                        "sort": 4
                    },
                    {
                        "Code": "130540",
                        "Name": "内丘县",
                        "sort": 5
                    },
                    {
                        "Code": "130540",
                        "Name": "临城县",
                        "sort": 6
                    },
                    {
                        "Code": "130540",
                        "Name": "南和县",
                        "sort": 7
                    },
                    {
                        "Code": "130540",
                        "Name": "平乡县",
                        "sort": 8
                    },
                    {
                        "Code": "130540",
                        "Name": "广宗县",
                        "sort": 9
                    },
                    {
                        "Code": "130540",
                        "Name": "威县",
                        "sort": 10
                    },
                    {
                        "Code": "130540",
                        "Name": "清河县",
                        "sort": 11
                    },
                    {
                        "Code": "130540",
                        "Name": "临西县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "130560",
                "Name": "邯郸市",
                "sort": 4,
                "level": [
                    {
                        "Code": "130560",
                        "Name": "邯山区",
                        "sort": 1
                    },
                    {
                        "Code": "130560",
                        "Name": "丛台区",
                        "sort": 2
                    },
                    {
                        "Code": "130560",
                        "Name": "复兴区",
                        "sort": 3
                    },
                    {
                        "Code": "130560",
                        "Name": "邯郸县",
                        "sort": 4
                    },
                    {
                        "Code": "130560",
                        "Name": "峰峰矿区",
                        "sort": 5
                    },
                    {
                        "Code": "130560",
                        "Name": "武安市",
                        "sort": 6
                    },
                    {
                        "Code": "130560",
                        "Name": "涉县",
                        "sort": 7
                    },
                    {
                        "Code": "130560",
                        "Name": "磁县",
                        "sort": 8
                    },
                    {
                        "Code": "130560",
                        "Name": "临漳县",
                        "sort": 9
                    },
                    {
                        "Code": "130560",
                        "Name": "成安县",
                        "sort": 10
                    },
                    {
                        "Code": "130560",
                        "Name": "魏县",
                        "sort": 11
                    },
                    {
                        "Code": "130560",
                        "Name": "大名县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "130610",
                "Name": "沧州市",
                "sort": 5,
                "level": [
                    {
                        "Code": "130610",
                        "Name": "新华区",
                        "sort": 1
                    },
                    {
                        "Code": "130610",
                        "Name": "运河区",
                        "sort": 2
                    },
                    {
                        "Code": "130610",
                        "Name": "沧县",
                        "sort": 3
                    },
                    {
                        "Code": "130610",
                        "Name": "黄骅市",
                        "sort": 4
                    },
                    {
                        "Code": "130610",
                        "Name": "海兴县",
                        "sort": 5
                    },
                    {
                        "Code": "130610",
                        "Name": "盐山县",
                        "sort": 6
                    },
                    {
                        "Code": "130610",
                        "Name": "孟村回族自治县",
                        "sort": 7
                    },
                    {
                        "Code": "130610",
                        "Name": "南皮县",
                        "sort": 8
                    },
                    {
                        "Code": "130610",
                        "Name": "东光县",
                        "sort": 9
                    },
                    {
                        "Code": "130610",
                        "Name": "吴桥县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "130630",
                "Name": "唐山市",
                "sort": 6,
                "level": [
                    {
                        "Code": "130630",
                        "Name": "路南区",
                        "sort": 1
                    },
                    {
                        "Code": "130630",
                        "Name": "路北区",
                        "sort": 2
                    },
                    {
                        "Code": "130630",
                        "Name": "开平区",
                        "sort": 3
                    },
                    {
                        "Code": "130630",
                        "Name": "古冶区",
                        "sort": 4
                    },
                    {
                        "Code": "130630",
                        "Name": "唐海县",
                        "sort": 5
                    },
                    {
                        "Code": "130630",
                        "Name": "丰南区",
                        "sort": 6
                    },
                    {
                        "Code": "130630",
                        "Name": "滦南县",
                        "sort": 7
                    },
                    {
                        "Code": "130630",
                        "Name": "乐亭县",
                        "sort": 8
                    },
                    {
                        "Code": "130630",
                        "Name": "滦县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "130650",
                "Name": "廊坊市",
                "sort": 7,
                "level": [
                    {
                        "Code": "130650",
                        "Name": "广阳区",
                        "sort": 1
                    },
                    {
                        "Code": "130650",
                        "Name": "安次区",
                        "sort": 2
                    },
                    {
                        "Code": "130650",
                        "Name": "三河市",
                        "sort": 3
                    },
                    {
                        "Code": "130650",
                        "Name": "大厂回族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "130650",
                        "Name": "香河县",
                        "sort": 5
                    },
                    {
                        "Code": "130650",
                        "Name": "固安县",
                        "sort": 6
                    },
                    {
                        "Code": "130650",
                        "Name": "永清县",
                        "sort": 7
                    },
                    {
                        "Code": "130650",
                        "Name": "霸州市",
                        "sort": 8
                    },
                    {
                        "Code": "130650",
                        "Name": "文安县",
                        "sort": 9
                    },
                    {
                        "Code": "130650",
                        "Name": "大城县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "130660",
                "Name": "秦皇岛市",
                "sort": 8,
                "level": [
                    {
                        "Code": "130660",
                        "Name": "海港区",
                        "sort": 1
                    },
                    {
                        "Code": "130660",
                        "Name": "北戴河区",
                        "sort": 2
                    },
                    {
                        "Code": "130660",
                        "Name": "山海关区",
                        "sort": 3
                    },
                    {
                        "Code": "130660",
                        "Name": "抚宁县",
                        "sort": 4
                    },
                    {
                        "Code": "130660",
                        "Name": "卢龙县",
                        "sort": 5
                    },
                    {
                        "Code": "130660",
                        "Name": "青龙满族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "130660",
                        "Name": "昌黎县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "130670",
                "Name": "承德市",
                "sort": 9,
                "level": [
                    {
                        "Code": "130670",
                        "Name": "双桥区",
                        "sort": 1
                    },
                    {
                        "Code": "130670",
                        "Name": "双滦区",
                        "sort": 2
                    },
                    {
                        "Code": "130670",
                        "Name": "滦平县",
                        "sort": 3
                    },
                    {
                        "Code": "130670",
                        "Name": "兴隆县",
                        "sort": 4
                    },
                    {
                        "Code": "130670",
                        "Name": "鹰手营子矿区",
                        "sort": 5
                    },
                    {
                        "Code": "130670",
                        "Name": "承德县",
                        "sort": 6
                    },
                    {
                        "Code": "130670",
                        "Name": "平泉县",
                        "sort": 7
                    },
                    {
                        "Code": "130670",
                        "Name": "宽城满族自治县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "130710",
                "Name": "保定市",
                "sort": 10,
                "level": [
                    {
                        "Code": "130710",
                        "Name": "南市区",
                        "sort": 1
                    },
                    {
                        "Code": "130710",
                        "Name": "新市区",
                        "sort": 2
                    },
                    {
                        "Code": "130710",
                        "Name": "清苑县",
                        "sort": 3
                    },
                    {
                        "Code": "130710",
                        "Name": "安国市",
                        "sort": 4
                    },
                    {
                        "Code": "130710",
                        "Name": "博野县",
                        "sort": 5
                    },
                    {
                        "Code": "130710",
                        "Name": "蠡县",
                        "sort": 6
                    },
                    {
                        "Code": "130710",
                        "Name": "高阳县",
                        "sort": 7
                    },
                    {
                        "Code": "130710",
                        "Name": "安新县",
                        "sort": 8
                    },
                    {
                        "Code": "130710",
                        "Name": "容城县",
                        "sort": 9
                    },
                    {
                        "Code": "130710",
                        "Name": "雄县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "130750",
                "Name": "张家口市",
                "sort": 11,
                "level": [
                    {
                        "Code": "130750",
                        "Name": "桥西区",
                        "sort": 1
                    },
                    {
                        "Code": "130750",
                        "Name": "桥东区",
                        "sort": 2
                    },
                    {
                        "Code": "130750",
                        "Name": "宣化区",
                        "sort": 3
                    },
                    {
                        "Code": "130750",
                        "Name": "宣化县",
                        "sort": 4
                    },
                    {
                        "Code": "130750",
                        "Name": "怀来县",
                        "sort": 5
                    },
                    {
                        "Code": "130750",
                        "Name": "赤城县",
                        "sort": 6
                    },
                    {
                        "Code": "130750",
                        "Name": "涿鹿县",
                        "sort": 7
                    },
                    {
                        "Code": "130750",
                        "Name": "蔚县",
                        "sort": 8
                    },
                    {
                        "Code": "130750",
                        "Name": "阳原县",
                        "sort": 9
                    }
                ]
            }
        ]
    },
    {
        "Code": "110000",
        "Name": "北京市",
        "level": [
            {
                "Code": "110000",
                "Name": "北京市",
                "sort": 1,
                "level": [
                    {
                        "Code": "111000",
                        "Name": "东城区",
                        "sort": 1
                    },
                    {
                        "Code": "111000",
                        "Name": "朝阳区",
                        "sort": 2
                    },
                    {
                        "Code": "111000",
                        "Name": "西城区",
                        "sort": 3
                    },
                    {
                        "Code": "111000",
                        "Name": "石景山区",
                        "sort": 4
                    },
                    {
                        "Code": "111000",
                        "Name": "海淀区",
                        "sort": 5
                    },
                    {
                        "Code": "111000",
                        "Name": "崇文区",
                        "sort": 6
                    },
                    {
                        "Code": "111000",
                        "Name": "宣武区",
                        "sort": 7
                    },
                    {
                        "Code": "111000",
                        "Name": "丰台区",
                        "sort": 8
                    },
                    {
                        "Code": "111000",
                        "Name": "通州区",
                        "sort": 9
                    },
                    {
                        "Code": "111000",
                        "Name": "平谷区",
                        "sort": 10
                    },
                    {
                        "Code": "111000",
                        "Name": "顺义区",
                        "sort": 11
                    },
                    {
                        "Code": "111000",
                        "Name": "怀柔区",
                        "sort": 12
                    },
                    {
                        "Code": "111000",
                        "Name": "密云县",
                        "sort": 13
                    },
                    {
                        "Code": "111000",
                        "Name": "延庆县",
                        "sort": 14
                    },
                    {
                        "Code": "111000",
                        "Name": "昌平区",
                        "sort": 15
                    },
                    {
                        "Code": "111000",
                        "Name": "门头沟区",
                        "sort": 16
                    },
                    {
                        "Code": "111000",
                        "Name": "房山区",
                        "sort": 17
                    },
                    {
                        "Code": "111000",
                        "Name": "大兴区",
                        "sort": 18
                    }
                ]
            }
        ]
    },
    {
        "Code": "210000",
        "Name": "辽宁省",
        "level": [
            {
                "Code": "211100",
                "Name": "沈阳市",
                "sort": 1,
                "level": [
                    {
                        "Code": "211100",
                        "Name": "和平区",
                        "sort": 1
                    },
                    {
                        "Code": "211100",
                        "Name": "沈河区",
                        "sort": 2
                    },
                    {
                        "Code": "211100",
                        "Name": "东陵区",
                        "sort": 3
                    },
                    {
                        "Code": "211100",
                        "Name": "铁西区",
                        "sort": 4
                    },
                    {
                        "Code": "211100",
                        "Name": "皇姑区",
                        "sort": 5
                    },
                    {
                        "Code": "211100",
                        "Name": "大东区",
                        "sort": 6
                    },
                    {
                        "Code": "211100",
                        "Name": "苏家屯区",
                        "sort": 7
                    },
                    {
                        "Code": "211100",
                        "Name": "新城子区",
                        "sort": 8
                    },
                    {
                        "Code": "211100",
                        "Name": "于洪区",
                        "sort": 9
                    },
                    {
                        "Code": "211100",
                        "Name": "辽中县",
                        "sort": 10
                    },
                    {
                        "Code": "211100",
                        "Name": "新民市",
                        "sort": 11
                    },
                    {
                        "Code": "211100",
                        "Name": "法库县",
                        "sort": 12
                    },
                    {
                        "Code": "211100",
                        "Name": "康平县",
                        "sort": 13
                    }
                ]
            },
            {
                "Code": "211110",
                "Name": "辽阳市",
                "sort": 2,
                "level": [
                    {
                        "Code": "211110",
                        "Name": "文圣区",
                        "sort": 1
                    },
                    {
                        "Code": "211110",
                        "Name": "太子河区",
                        "sort": 2
                    },
                    {
                        "Code": "211110",
                        "Name": "宏伟区",
                        "sort": 3
                    },
                    {
                        "Code": "211110",
                        "Name": "弓长岭区",
                        "sort": 4
                    },
                    {
                        "Code": "211110",
                        "Name": "辽阳县",
                        "sort": 5
                    },
                    {
                        "Code": "211110",
                        "Name": "灯塔市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "211120",
                "Name": "铁岭市",
                "sort": 3,
                "level": [
                    {
                        "Code": "211120",
                        "Name": "银州区",
                        "sort": 1
                    },
                    {
                        "Code": "211120",
                        "Name": "清河区",
                        "sort": 2
                    },
                    {
                        "Code": "211120",
                        "Name": "开原市",
                        "sort": 3
                    },
                    {
                        "Code": "211120",
                        "Name": "西丰县",
                        "sort": 4
                    },
                    {
                        "Code": "211120",
                        "Name": "昌图县",
                        "sort": 5
                    },
                    {
                        "Code": "211120",
                        "Name": "铁岭县",
                        "sort": 6
                    },
                    {
                        "Code": "211120",
                        "Name": "调兵山市",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "211130",
                "Name": "抚顺市",
                "sort": 4,
                "level": [
                    {
                        "Code": "211130",
                        "Name": "望花区",
                        "sort": 1
                    },
                    {
                        "Code": "211130",
                        "Name": "东洲区",
                        "sort": 2
                    },
                    {
                        "Code": "211130",
                        "Name": "新抚区",
                        "sort": 3
                    },
                    {
                        "Code": "211130",
                        "Name": "顺城区",
                        "sort": 4
                    },
                    {
                        "Code": "211130",
                        "Name": "抚顺县",
                        "sort": 5
                    },
                    {
                        "Code": "211130",
                        "Name": "新宾满族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "211130",
                        "Name": "清原满族自治县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "211140",
                "Name": "鞍山市",
                "sort": 5,
                "level": [
                    {
                        "Code": "211140",
                        "Name": "铁东区",
                        "sort": 1
                    },
                    {
                        "Code": "211140",
                        "Name": "铁西区",
                        "sort": 2
                    },
                    {
                        "Code": "211140",
                        "Name": "立山区",
                        "sort": 3
                    },
                    {
                        "Code": "211140",
                        "Name": "千山区",
                        "sort": 4
                    },
                    {
                        "Code": "211140",
                        "Name": "台安县",
                        "sort": 5
                    },
                    {
                        "Code": "211140",
                        "Name": "海城市",
                        "sort": 6
                    },
                    {
                        "Code": "211140",
                        "Name": "岫岩满族自治县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "211150",
                "Name": "营口市",
                "sort": 6,
                "level": [
                    {
                        "Code": "211150",
                        "Name": "站前区",
                        "sort": 1
                    },
                    {
                        "Code": "211150",
                        "Name": "西市区",
                        "sort": 2
                    },
                    {
                        "Code": "211150",
                        "Name": "老边区",
                        "sort": 3
                    },
                    {
                        "Code": "211150",
                        "Name": "鲅鱼圈区",
                        "sort": 4
                    },
                    {
                        "Code": "211150",
                        "Name": "大石桥市",
                        "sort": 5
                    },
                    {
                        "Code": "211150",
                        "Name": "盖州市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "211160",
                "Name": "大连市",
                "sort": 7,
                "level": [
                    {
                        "Code": "211160",
                        "Name": "中山区",
                        "sort": 1
                    },
                    {
                        "Code": "211160",
                        "Name": "西岗区",
                        "sort": 2
                    },
                    {
                        "Code": "211160",
                        "Name": "沙河口区",
                        "sort": 3
                    },
                    {
                        "Code": "211160",
                        "Name": "甘井子区",
                        "sort": 4
                    },
                    {
                        "Code": "211160",
                        "Name": "旅顺口区",
                        "sort": 5
                    },
                    {
                        "Code": "211160",
                        "Name": "金州区",
                        "sort": 6
                    },
                    {
                        "Code": "211160",
                        "Name": "普兰店市",
                        "sort": 7
                    },
                    {
                        "Code": "211160",
                        "Name": "瓦房店市",
                        "sort": 8
                    },
                    {
                        "Code": "211160",
                        "Name": "庄河市",
                        "sort": 9
                    },
                    {
                        "Code": "211160",
                        "Name": "长海县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "211170",
                "Name": "本溪市",
                "sort": 8,
                "level": [
                    {
                        "Code": "211170",
                        "Name": "平山区",
                        "sort": 1
                    },
                    {
                        "Code": "211170",
                        "Name": "明山区",
                        "sort": 2
                    },
                    {
                        "Code": "211170",
                        "Name": "溪湖区",
                        "sort": 3
                    },
                    {
                        "Code": "211170",
                        "Name": "南芬区",
                        "sort": 4
                    },
                    {
                        "Code": "211170",
                        "Name": "本溪满族自治县",
                        "sort": 5
                    },
                    {
                        "Code": "211170",
                        "Name": "桓仁满族自治县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "211180",
                "Name": "丹东市",
                "sort": 9,
                "level": [
                    {
                        "Code": "211180",
                        "Name": "振兴区",
                        "sort": 1
                    },
                    {
                        "Code": "211180",
                        "Name": "振安区",
                        "sort": 2
                    },
                    {
                        "Code": "211180",
                        "Name": "凤城市",
                        "sort": 3
                    },
                    {
                        "Code": "211180",
                        "Name": "宽甸满族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "211180",
                        "Name": "东港市",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "211210",
                "Name": "锦州市",
                "sort": 10,
                "level": [
                    {
                        "Code": "211210",
                        "Name": "太和区",
                        "sort": 1
                    },
                    {
                        "Code": "211210",
                        "Name": "凌河区",
                        "sort": 2
                    },
                    {
                        "Code": "211210",
                        "Name": "义县",
                        "sort": 3
                    },
                    {
                        "Code": "211210",
                        "Name": "凌海市",
                        "sort": 4
                    },
                    {
                        "Code": "211210",
                        "Name": "北宁市",
                        "sort": 5
                    },
                    {
                        "Code": "211210",
                        "Name": "黑山县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "211220",
                "Name": "朝阳市",
                "sort": 11,
                "level": [
                    {
                        "Code": "211220",
                        "Name": "双塔区",
                        "sort": 1
                    },
                    {
                        "Code": "211220",
                        "Name": "龙城区",
                        "sort": 2
                    },
                    {
                        "Code": "211220",
                        "Name": "北票市",
                        "sort": 3
                    },
                    {
                        "Code": "211220",
                        "Name": "喀喇沁左翼蒙古族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "211220",
                        "Name": "建平县",
                        "sort": 5
                    },
                    {
                        "Code": "211220",
                        "Name": "凌源市",
                        "sort": 6
                    },
                    {
                        "Code": "211220",
                        "Name": "朝阳县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "211230",
                "Name": "阜新市",
                "sort": 12,
                "level": [
                    {
                        "Code": "211230",
                        "Name": "海州区",
                        "sort": 1
                    },
                    {
                        "Code": "211230",
                        "Name": "太平区",
                        "sort": 2
                    },
                    {
                        "Code": "211230",
                        "Name": "新邱区",
                        "sort": 3
                    },
                    {
                        "Code": "211230",
                        "Name": "清河门区",
                        "sort": 4
                    },
                    {
                        "Code": "211230",
                        "Name": "阜新蒙古族自治县",
                        "sort": 5
                    },
                    {
                        "Code": "211230",
                        "Name": "彰武县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "211240",
                "Name": "盘锦市",
                "sort": 13,
                "level": [
                    {
                        "Code": "211240",
                        "Name": "双台子区",
                        "sort": 1
                    },
                    {
                        "Code": "211240",
                        "Name": "兴隆台区",
                        "sort": 2
                    },
                    {
                        "Code": "211240",
                        "Name": "盘山县",
                        "sort": 3
                    },
                    {
                        "Code": "211240",
                        "Name": "大洼县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "211250",
                "Name": "葫芦岛市",
                "sort": 14,
                "level": [
                    {
                        "Code": "211250",
                        "Name": "龙港区",
                        "sort": 1
                    },
                    {
                        "Code": "211250",
                        "Name": "连山区",
                        "sort": 2
                    },
                    {
                        "Code": "211250",
                        "Name": "南票区",
                        "sort": 3
                    },
                    {
                        "Code": "211250",
                        "Name": "兴城市",
                        "sort": 4
                    },
                    {
                        "Code": "211250",
                        "Name": "绥中县",
                        "sort": 5
                    },
                    {
                        "Code": "211250",
                        "Name": "建昌县",
                        "sort": 6
                    }
                ]
            }
        ]
    },
    {
        "Code": "220000",
        "Name": "吉林省",
        "level": [
            {
                "Code": "221300",
                "Name": "长春市",
                "sort": 1,
                "level": [
                    {
                        "Code": "221300",
                        "Name": "绿园区",
                        "sort": 1
                    },
                    {
                        "Code": "221300",
                        "Name": "朝阳区",
                        "sort": 2
                    },
                    {
                        "Code": "221300",
                        "Name": "南关区",
                        "sort": 3
                    },
                    {
                        "Code": "221300",
                        "Name": "二道区",
                        "sort": 4
                    },
                    {
                        "Code": "221300",
                        "Name": "宽城区",
                        "sort": 5
                    },
                    {
                        "Code": "221300",
                        "Name": "农安县",
                        "sort": 6
                    },
                    {
                        "Code": "221300",
                        "Name": "德惠市",
                        "sort": 7
                    },
                    {
                        "Code": "221300",
                        "Name": "榆树市",
                        "sort": 8
                    },
                    {
                        "Code": "221300",
                        "Name": "九台市",
                        "sort": 9
                    },
                    {
                        "Code": "221300",
                        "Name": "双阳区",
                        "sort": 10
                    },
                    {
                        "Code": "221360",
                        "Name": "伊通满族自治县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "221320",
                "Name": "吉林市",
                "sort": 2,
                "level": [
                    {
                        "Code": "221320",
                        "Name": "昌邑区",
                        "sort": 1
                    },
                    {
                        "Code": "221320",
                        "Name": "船营区",
                        "sort": 2
                    },
                    {
                        "Code": "221320",
                        "Name": "丰满区",
                        "sort": 3
                    },
                    {
                        "Code": "221320",
                        "Name": "龙潭区",
                        "sort": 4
                    },
                    {
                        "Code": "221320",
                        "Name": "永吉县",
                        "sort": 5
                    },
                    {
                        "Code": "221320",
                        "Name": "磐石市",
                        "sort": 6
                    },
                    {
                        "Code": "221320",
                        "Name": "桦甸市",
                        "sort": 7
                    },
                    {
                        "Code": "221320",
                        "Name": "蛟河市",
                        "sort": 8
                    },
                    {
                        "Code": "221320",
                        "Name": "舒兰市",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "221330",
                "Name": "延边朝鲜族自治州",
                "sort": 3,
                "level": [
                    {
                        "Code": "221330",
                        "Name": "延吉市",
                        "sort": 1
                    },
                    {
                        "Code": "221330",
                        "Name": "图们市",
                        "sort": 2
                    },
                    {
                        "Code": "221330",
                        "Name": "汪清县",
                        "sort": 3
                    },
                    {
                        "Code": "221330",
                        "Name": "珲春市",
                        "sort": 4
                    },
                    {
                        "Code": "221330",
                        "Name": "龙井市",
                        "sort": 5
                    },
                    {
                        "Code": "221330",
                        "Name": "和龙市",
                        "sort": 6
                    },
                    {
                        "Code": "221330",
                        "Name": "安图县",
                        "sort": 7
                    },
                    {
                        "Code": "221330",
                        "Name": "敦化市",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "221340",
                "Name": "通化市",
                "sort": 4,
                "level": [
                    {
                        "Code": "221340",
                        "Name": "东昌区",
                        "sort": 1
                    },
                    {
                        "Code": "221340",
                        "Name": "二道江区",
                        "sort": 2
                    },
                    {
                        "Code": "221340",
                        "Name": "通化县",
                        "sort": 3
                    },
                    {
                        "Code": "221340",
                        "Name": "集安市",
                        "sort": 4
                    },
                    {
                        "Code": "221343",
                        "Name": "八道江区",
                        "sort": 5
                    },
                    {
                        "Code": "221343",
                        "Name": "长白朝鲜族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "221343",
                        "Name": "抚松县",
                        "sort": 7
                    },
                    {
                        "Code": "221343",
                        "Name": "临江市",
                        "sort": 8
                    },
                    {
                        "Code": "221343",
                        "Name": "江源县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "221343",
                "Name": "白山市",
                "sort": 5,
                "level": [
                    {
                        "Code": "221340",
                        "Name": "东昌区",
                        "sort": 1
                    },
                    {
                        "Code": "221340",
                        "Name": "二道江区",
                        "sort": 2
                    },
                    {
                        "Code": "221340",
                        "Name": "通化县",
                        "sort": 3
                    },
                    {
                        "Code": "221340",
                        "Name": "集安市",
                        "sort": 4
                    },
                    {
                        "Code": "221343",
                        "Name": "八道江区",
                        "sort": 5
                    },
                    {
                        "Code": "221343",
                        "Name": "长白朝鲜族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "221343",
                        "Name": "抚松县",
                        "sort": 7
                    },
                    {
                        "Code": "221343",
                        "Name": "临江市",
                        "sort": 8
                    },
                    {
                        "Code": "221343",
                        "Name": "江源县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "221360",
                "Name": "四平市",
                "sort": 6,
                "level": [
                    {
                        "Code": "221360",
                        "Name": "铁西区",
                        "sort": 1
                    },
                    {
                        "Code": "221360",
                        "Name": "铁东区",
                        "sort": 2
                    },
                    {
                        "Code": "221360",
                        "Name": "公主岭市",
                        "sort": 3
                    },
                    {
                        "Code": "221362",
                        "Name": "龙山区",
                        "sort": 4
                    },
                    {
                        "Code": "221362",
                        "Name": "西安区",
                        "sort": 5
                    },
                    {
                        "Code": "221362",
                        "Name": "东丰县",
                        "sort": 6
                    },
                    {
                        "Code": "221360",
                        "Name": "双辽市",
                        "sort": 7
                    },
                    {
                        "Code": "221360",
                        "Name": "梨树县",
                        "sort": 8
                    },
                    {
                        "Code": "221362",
                        "Name": "东辽县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "221362",
                "Name": "辽源市",
                "sort": 7,
                "level": [
                    {
                        "Code": "221360",
                        "Name": "铁西区",
                        "sort": 1
                    },
                    {
                        "Code": "221360",
                        "Name": "铁东区",
                        "sort": 2
                    },
                    {
                        "Code": "221360",
                        "Name": "公主岭市",
                        "sort": 3
                    },
                    {
                        "Code": "221362",
                        "Name": "龙山区",
                        "sort": 4
                    },
                    {
                        "Code": "221362",
                        "Name": "西安区",
                        "sort": 5
                    },
                    {
                        "Code": "221362",
                        "Name": "东丰县",
                        "sort": 6
                    },
                    {
                        "Code": "221360",
                        "Name": "双辽市",
                        "sort": 7
                    },
                    {
                        "Code": "221360",
                        "Name": "梨树县",
                        "sort": 8
                    },
                    {
                        "Code": "221362",
                        "Name": "东辽县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "221370",
                "Name": "白城市",
                "sort": 8,
                "level": [
                    {
                        "Code": "221370",
                        "Name": "洮北区",
                        "sort": 1
                    },
                    {
                        "Code": "221370",
                        "Name": "洮南市",
                        "sort": 2
                    },
                    {
                        "Code": "221370",
                        "Name": "通榆县",
                        "sort": 3
                    },
                    {
                        "Code": "221370",
                        "Name": "镇赉县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "221380",
                "Name": "松原市",
                "sort": 9,
                "level": [
                    {
                        "Code": "221380",
                        "Name": "宁江区",
                        "sort": 1
                    }
                ]
            }
        ]
    },
    {
        "Code": "230000",
        "Name": "黑龙江省",
        "level": [
            {
                "Code": "231500",
                "Name": "哈尔滨市",
                "sort": 1,
                "level": [
                    {
                        "Code": "231500",
                        "Name": "南岗区",
                        "sort": 1
                    },
                    {
                        "Code": "231500",
                        "Name": "道里区",
                        "sort": 2
                    },
                    {
                        "Code": "231500",
                        "Name": "道外区",
                        "sort": 3
                    },
                    {
                        "Code": "231500",
                        "Name": "呼兰区",
                        "sort": 4
                    },
                    {
                        "Code": "231500",
                        "Name": "香坊区",
                        "sort": 5
                    },
                    {
                        "Code": "231500",
                        "Name": "动力区",
                        "sort": 6
                    },
                    {
                        "Code": "231500",
                        "Name": "平房区",
                        "sort": 7
                    },
                    {
                        "Code": "231500",
                        "Name": "双城市",
                        "sort": 8
                    },
                    {
                        "Code": "231500",
                        "Name": "五常市",
                        "sort": 9
                    },
                    {
                        "Code": "231500",
                        "Name": "阿城市",
                        "sort": 10
                    },
                    {
                        "Code": "231500",
                        "Name": "宾县",
                        "sort": 11
                    },
                    {
                        "Code": "231500",
                        "Name": "尚志市",
                        "sort": 12
                    },
                    {
                        "Code": "231500",
                        "Name": "延寿县",
                        "sort": 13
                    },
                    {
                        "Code": "231500",
                        "Name": "方正县",
                        "sort": 14
                    },
                    {
                        "Code": "231500",
                        "Name": "通河县",
                        "sort": 15
                    }
                ]
            },
            {
                "Code": "231520",
                "Name": "绥化市",
                "sort": 2,
                "level": [
                    {
                        "Code": "231520",
                        "Name": "北林区",
                        "sort": 1
                    },
                    {
                        "Code": "231520",
                        "Name": "望奎县",
                        "sort": 2
                    },
                    {
                        "Code": "231520",
                        "Name": "绥棱县",
                        "sort": 3
                    },
                    {
                        "Code": "231520",
                        "Name": "海伦市",
                        "sort": 4
                    },
                    {
                        "Code": "231530",
                        "Name": "铁力市",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "231530",
                "Name": "伊春市",
                "sort": 3,
                "level": [
                    {
                        "Code": "231530",
                        "Name": "伊春区",
                        "sort": 1
                    },
                    {
                        "Code": "231530",
                        "Name": "乌马河区",
                        "sort": 2
                    },
                    {
                        "Code": "231530",
                        "Name": "翠峦区",
                        "sort": 3
                    },
                    {
                        "Code": "231530",
                        "Name": "美溪区",
                        "sort": 4
                    },
                    {
                        "Code": "231530",
                        "Name": "西林区",
                        "sort": 5
                    },
                    {
                        "Code": "231530",
                        "Name": "金山屯区",
                        "sort": 6
                    },
                    {
                        "Code": "231530",
                        "Name": "友好区",
                        "sort": 7
                    },
                    {
                        "Code": "231530",
                        "Name": "上甘岭区",
                        "sort": 8
                    },
                    {
                        "Code": "231530",
                        "Name": "五营区",
                        "sort": 9
                    },
                    {
                        "Code": "231530",
                        "Name": "红星区",
                        "sort": 10
                    },
                    {
                        "Code": "231530",
                        "Name": "新青区",
                        "sort": 11
                    },
                    {
                        "Code": "231530",
                        "Name": "汤旺河区",
                        "sort": 12
                    },
                    {
                        "Code": "231530",
                        "Name": "乌伊岭区",
                        "sort": 13
                    },
                    {
                        "Code": "231530",
                        "Name": "南岔区",
                        "sort": 14
                    },
                    {
                        "Code": "231530",
                        "Name": "带岭区",
                        "sort": 15
                    },
                    {
                        "Code": "231530",
                        "Name": "嘉荫县",
                        "sort": 16
                    }
                ]
            },
            {
                "Code": "231540",
                "Name": "佳木斯市",
                "sort": 4,
                "level": [
                    {
                        "Code": "231540",
                        "Name": "前进区",
                        "sort": 1
                    },
                    {
                        "Code": "231540",
                        "Name": "向阳区",
                        "sort": 2
                    },
                    {
                        "Code": "231540",
                        "Name": "郊区",
                        "sort": 3
                    },
                    {
                        "Code": "231540",
                        "Name": "东风区",
                        "sort": 4
                    },
                    {
                        "Code": "231541",
                        "Name": "向阳区",
                        "sort": 5
                    },
                    {
                        "Code": "231541",
                        "Name": "工农区",
                        "sort": 6
                    },
                    {
                        "Code": "231541",
                        "Name": "兴安区",
                        "sort": 7
                    },
                    {
                        "Code": "231541",
                        "Name": "南山区",
                        "sort": 8
                    },
                    {
                        "Code": "231541",
                        "Name": "兴山区",
                        "sort": 9
                    },
                    {
                        "Code": "231541",
                        "Name": "东山区",
                        "sort": 10
                    },
                    {
                        "Code": "231541",
                        "Name": "萝北县",
                        "sort": 11
                    },
                    {
                        "Code": "231540",
                        "Name": "桦川县",
                        "sort": 12
                    },
                    {
                        "Code": "231540",
                        "Name": "桦南县",
                        "sort": 13
                    },
                    {
                        "Code": "231546",
                        "Name": "勃利县",
                        "sort": 14
                    },
                    {
                        "Code": "231546",
                        "Name": "桃山区",
                        "sort": 15
                    },
                    {
                        "Code": "231546",
                        "Name": "新兴区",
                        "sort": 16
                    },
                    {
                        "Code": "231546",
                        "Name": "茄子河区",
                        "sort": 17
                    },
                    {
                        "Code": "231540",
                        "Name": "汤原县",
                        "sort": 18
                    },
                    {
                        "Code": "231500",
                        "Name": "依兰县",
                        "sort": 19
                    }
                ]
            },
            {
                "Code": "231541",
                "Name": "鹤岗市",
                "sort": 5,
                "level": [
                    {
                        "Code": "231540",
                        "Name": "前进区",
                        "sort": 1
                    },
                    {
                        "Code": "231540",
                        "Name": "向阳区",
                        "sort": 2
                    },
                    {
                        "Code": "231540",
                        "Name": "郊区",
                        "sort": 3
                    },
                    {
                        "Code": "231540",
                        "Name": "东风区",
                        "sort": 4
                    },
                    {
                        "Code": "231541",
                        "Name": "向阳区",
                        "sort": 5
                    },
                    {
                        "Code": "231541",
                        "Name": "工农区",
                        "sort": 6
                    },
                    {
                        "Code": "231541",
                        "Name": "兴安区",
                        "sort": 7
                    },
                    {
                        "Code": "231541",
                        "Name": "南山区",
                        "sort": 8
                    },
                    {
                        "Code": "231541",
                        "Name": "兴山区",
                        "sort": 9
                    },
                    {
                        "Code": "231541",
                        "Name": "东山区",
                        "sort": 10
                    },
                    {
                        "Code": "231541",
                        "Name": "萝北县",
                        "sort": 11
                    },
                    {
                        "Code": "231540",
                        "Name": "桦川县",
                        "sort": 12
                    },
                    {
                        "Code": "231540",
                        "Name": "桦南县",
                        "sort": 13
                    },
                    {
                        "Code": "231546",
                        "Name": "勃利县",
                        "sort": 14
                    },
                    {
                        "Code": "231546",
                        "Name": "桃山区",
                        "sort": 15
                    },
                    {
                        "Code": "231546",
                        "Name": "新兴区",
                        "sort": 16
                    },
                    {
                        "Code": "231546",
                        "Name": "茄子河区",
                        "sort": 17
                    },
                    {
                        "Code": "231540",
                        "Name": "汤原县",
                        "sort": 18
                    },
                    {
                        "Code": "231500",
                        "Name": "依兰县",
                        "sort": 19
                    }
                ]
            },
            {
                "Code": "231546",
                "Name": "七台河市",
                "sort": 6,
                "level": [
                    {
                        "Code": "231540",
                        "Name": "前进区",
                        "sort": 1
                    },
                    {
                        "Code": "231540",
                        "Name": "向阳区",
                        "sort": 2
                    },
                    {
                        "Code": "231540",
                        "Name": "郊区",
                        "sort": 3
                    },
                    {
                        "Code": "231540",
                        "Name": "东风区",
                        "sort": 4
                    },
                    {
                        "Code": "231541",
                        "Name": "向阳区",
                        "sort": 5
                    },
                    {
                        "Code": "231541",
                        "Name": "工农区",
                        "sort": 6
                    },
                    {
                        "Code": "231541",
                        "Name": "兴安区",
                        "sort": 7
                    },
                    {
                        "Code": "231541",
                        "Name": "南山区",
                        "sort": 8
                    },
                    {
                        "Code": "231541",
                        "Name": "兴山区",
                        "sort": 9
                    },
                    {
                        "Code": "231541",
                        "Name": "东山区",
                        "sort": 10
                    },
                    {
                        "Code": "231541",
                        "Name": "萝北县",
                        "sort": 11
                    },
                    {
                        "Code": "231540",
                        "Name": "桦川县",
                        "sort": 12
                    },
                    {
                        "Code": "231540",
                        "Name": "桦南县",
                        "sort": 13
                    },
                    {
                        "Code": "231546",
                        "Name": "勃利县",
                        "sort": 14
                    },
                    {
                        "Code": "231546",
                        "Name": "桃山区",
                        "sort": 15
                    },
                    {
                        "Code": "231546",
                        "Name": "新兴区",
                        "sort": 16
                    },
                    {
                        "Code": "231546",
                        "Name": "茄子河区",
                        "sort": 17
                    },
                    {
                        "Code": "231540",
                        "Name": "汤原县",
                        "sort": 18
                    },
                    {
                        "Code": "231500",
                        "Name": "依兰县",
                        "sort": 19
                    }
                ]
            },
            {
                "Code": "231551",
                "Name": "双鸭山市",
                "sort": 7,
                "level": [
                    {
                        "Code": "231551",
                        "Name": "尖山区",
                        "sort": 1
                    },
                    {
                        "Code": "231551",
                        "Name": "四方台区",
                        "sort": 2
                    },
                    {
                        "Code": "231551",
                        "Name": "岭东区",
                        "sort": 3
                    },
                    {
                        "Code": "231551",
                        "Name": "宝山区",
                        "sort": 4
                    },
                    {
                        "Code": "231551",
                        "Name": "宝清县",
                        "sort": 5
                    },
                    {
                        "Code": "231551",
                        "Name": "饶河县",
                        "sort": 6
                    },
                    {
                        "Code": "231551",
                        "Name": "友谊县",
                        "sort": 7
                    },
                    {
                        "Code": "231551",
                        "Name": "集贤县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "231570",
                "Name": "牡丹江市",
                "sort": 8,
                "level": [
                    {
                        "Code": "231570",
                        "Name": "西安区",
                        "sort": 1
                    },
                    {
                        "Code": "231570",
                        "Name": "阳明区",
                        "sort": 2
                    },
                    {
                        "Code": "231570",
                        "Name": "爱民区",
                        "sort": 3
                    },
                    {
                        "Code": "231570",
                        "Name": "东安区",
                        "sort": 4
                    },
                    {
                        "Code": "231570",
                        "Name": "海林市",
                        "sort": 5
                    },
                    {
                        "Code": "231570",
                        "Name": "东宁县",
                        "sort": 6
                    },
                    {
                        "Code": "231570",
                        "Name": "绥芬河市",
                        "sort": 7
                    },
                    {
                        "Code": "231570",
                        "Name": "宁安市",
                        "sort": 8
                    },
                    {
                        "Code": "231570",
                        "Name": "穆棱市",
                        "sort": 9
                    },
                    {
                        "Code": "231570",
                        "Name": "林口县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "231581",
                "Name": "鸡西市",
                "sort": 9,
                "level": [
                    {
                        "Code": "231581",
                        "Name": "鸡冠区",
                        "sort": 1
                    },
                    {
                        "Code": "231581",
                        "Name": "恒山区",
                        "sort": 2
                    },
                    {
                        "Code": "231581",
                        "Name": "滴道区",
                        "sort": 3
                    },
                    {
                        "Code": "231581",
                        "Name": "梨树区",
                        "sort": 4
                    },
                    {
                        "Code": "231581",
                        "Name": "城子河区",
                        "sort": 5
                    },
                    {
                        "Code": "231581",
                        "Name": "麻山区",
                        "sort": 6
                    },
                    {
                        "Code": "231581",
                        "Name": "鸡东县",
                        "sort": 7
                    },
                    {
                        "Code": "231581",
                        "Name": "密山市",
                        "sort": 8
                    },
                    {
                        "Code": "231581",
                        "Name": "虎林市",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "231610",
                "Name": "齐齐哈尔市",
                "sort": 10,
                "level": [
                    {
                        "Code": "231610",
                        "Name": "铁锋区",
                        "sort": 1
                    },
                    {
                        "Code": "231610",
                        "Name": "龙沙区",
                        "sort": 2
                    },
                    {
                        "Code": "231610",
                        "Name": "建华区",
                        "sort": 3
                    },
                    {
                        "Code": "231610",
                        "Name": "梅里斯达斡尔族区",
                        "sort": 4
                    },
                    {
                        "Code": "231610",
                        "Name": "昂昂溪区",
                        "sort": 5
                    },
                    {
                        "Code": "231610",
                        "Name": "富拉尔基区",
                        "sort": 6
                    },
                    {
                        "Code": "231610",
                        "Name": "碾子山区",
                        "sort": 7
                    },
                    {
                        "Code": "231610",
                        "Name": "龙江县",
                        "sort": 8
                    },
                    {
                        "Code": "231610",
                        "Name": "富裕县",
                        "sort": 9
                    },
                    {
                        "Code": "231610",
                        "Name": "讷河市",
                        "sort": 10
                    },
                    {
                        "Code": "231643",
                        "Name": "嫩江县",
                        "sort": 11
                    },
                    {
                        "Code": "231610",
                        "Name": "依安县",
                        "sort": 12
                    },
                    {
                        "Code": "231610",
                        "Name": "克山县",
                        "sort": 13
                    }
                ]
            },
            {
                "Code": "231630",
                "Name": "大庆市",
                "sort": 11,
                "level": [
                    {
                        "Code": "231630",
                        "Name": "萨尔图区",
                        "sort": 1
                    },
                    {
                        "Code": "231630",
                        "Name": "让胡路区",
                        "sort": 2
                    },
                    {
                        "Code": "231630",
                        "Name": "龙凤区",
                        "sort": 3
                    },
                    {
                        "Code": "231630",
                        "Name": "红岗区",
                        "sort": 4
                    },
                    {
                        "Code": "231630",
                        "Name": "大同区",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "231643",
                "Name": "黑河市",
                "sort": 12,
                "level": [
                    {
                        "Code": "231643",
                        "Name": "北安市",
                        "sort": 1
                    },
                    {
                        "Code": "231643",
                        "Name": "五大连池市",
                        "sort": 2
                    },
                    {
                        "Code": "231643",
                        "Name": "孙吴县",
                        "sort": 3
                    },
                    {
                        "Code": "231643",
                        "Name": "爱辉区",
                        "sort": 4
                    },
                    {
                        "Code": "231643",
                        "Name": "逊克县",
                        "sort": 5
                    },
                    {
                        "Code": "231610",
                        "Name": "拜泉县",
                        "sort": 6
                    },
                    {
                        "Code": "231610",
                        "Name": "克东县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "231650",
                "Name": "大兴安岭地区",
                "sort": 13,
                "level": [
                    {
                        "Code": "231650",
                        "Name": "呼玛县",
                        "sort": 1
                    },
                    {
                        "Code": "231650",
                        "Name": "塔河县",
                        "sort": 2
                    },
                    {
                        "Code": "231650",
                        "Name": "漠河县",
                        "sort": 3
                    }
                ]
            }
        ]
    },
    {
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
                    },
                    {
                        "Code": "312000",
                        "Name": "卢湾区",
                        "sort": 2
                    },
                    {
                        "Code": "312000",
                        "Name": "徐汇区",
                        "sort": 3
                    },
                    {
                        "Code": "312000",
                        "Name": "静安区",
                        "sort": 4
                    },
                    {
                        "Code": "312000",
                        "Name": "长宁区",
                        "sort": 5
                    },
                    {
                        "Code": "312000",
                        "Name": "普陀区",
                        "sort": 6
                    },
                    {
                        "Code": "312000",
                        "Name": "闸北区",
                        "sort": 7
                    },
                    {
                        "Code": "312000",
                        "Name": "虹口区",
                        "sort": 8
                    },
                    {
                        "Code": "312000",
                        "Name": "杨浦区",
                        "sort": 9
                    },
                    {
                        "Code": "312000",
                        "Name": "浦东新区",
                        "sort": 10
                    },
                    {
                        "Code": "312000",
                        "Name": "闵行区",
                        "sort": 11
                    },
                    {
                        "Code": "312000",
                        "Name": "宝山区",
                        "sort": 12
                    },
                    {
                        "Code": "312000",
                        "Name": "金山区",
                        "sort": 13
                    },
                    {
                        "Code": "312000",
                        "Name": "南汇区",
                        "sort": 14
                    },
                    {
                        "Code": "312000",
                        "Name": "奉贤区",
                        "sort": 15
                    },
                    {
                        "Code": "312000",
                        "Name": "松江区",
                        "sort": 16
                    },
                    {
                        "Code": "312000",
                        "Name": "青浦区",
                        "sort": 17
                    },
                    {
                        "Code": "312000",
                        "Name": "嘉定区",
                        "sort": 18
                    },
                    {
                        "Code": "312000",
                        "Name": "崇明县",
                        "sort": 19
                    }
                ]
            }
        ]
    },
    {
        "Code": "320000",
        "Name": "江苏省",
        "level": [
            {
                "Code": "322100",
                "Name": "南京市",
                "sort": 1,
                "level": [
                    {
                        "Code": "322100",
                        "Name": "白下区",
                        "sort": 1
                    },
                    {
                        "Code": "322100",
                        "Name": "鼓楼区",
                        "sort": 2
                    },
                    {
                        "Code": "322100",
                        "Name": "玄武区",
                        "sort": 3
                    },
                    {
                        "Code": "322100",
                        "Name": "下关区",
                        "sort": 4
                    },
                    {
                        "Code": "322100",
                        "Name": "雨花台区",
                        "sort": 5
                    },
                    {
                        "Code": "322100",
                        "Name": "建邺区",
                        "sort": 6
                    },
                    {
                        "Code": "322100",
                        "Name": "秦淮区",
                        "sort": 7
                    },
                    {
                        "Code": "322100",
                        "Name": "浦口区",
                        "sort": 8
                    },
                    {
                        "Code": "322100",
                        "Name": "栖霞区",
                        "sort": 9
                    },
                    {
                        "Code": "322100",
                        "Name": "六合区",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "322120",
                "Name": "镇江市",
                "sort": 2,
                "level": [
                    {
                        "Code": "322120",
                        "Name": "京口区",
                        "sort": 1
                    },
                    {
                        "Code": "322120",
                        "Name": "润州区",
                        "sort": 2
                    },
                    {
                        "Code": "322120",
                        "Name": "丹徒区",
                        "sort": 3
                    },
                    {
                        "Code": "322120",
                        "Name": "扬中市",
                        "sort": 4
                    },
                    {
                        "Code": "322120",
                        "Name": "丹阳市",
                        "sort": 5
                    },
                    {
                        "Code": "322120",
                        "Name": "句容市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "322130",
                "Name": "常州市",
                "sort": 3,
                "level": [
                    {
                        "Code": "322130",
                        "Name": "天宁区",
                        "sort": 1
                    },
                    {
                        "Code": "322130",
                        "Name": "戚墅堰区",
                        "sort": 2
                    },
                    {
                        "Code": "322130",
                        "Name": "钟楼区",
                        "sort": 3
                    },
                    {
                        "Code": "322130",
                        "Name": "新北区",
                        "sort": 4
                    },
                    {
                        "Code": "322130",
                        "Name": "武进区",
                        "sort": 5
                    },
                    {
                        "Code": "322130",
                        "Name": "金坛市",
                        "sort": 6
                    },
                    {
                        "Code": "322130",
                        "Name": "溧阳市",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "322140",
                "Name": "无锡市",
                "sort": 4,
                "level": [
                    {
                        "Code": "322140",
                        "Name": "崇安区",
                        "sort": 1
                    },
                    {
                        "Code": "322140",
                        "Name": "南长区",
                        "sort": 2
                    },
                    {
                        "Code": "322140",
                        "Name": "北塘区",
                        "sort": 3
                    },
                    {
                        "Code": "322140",
                        "Name": "滨湖区",
                        "sort": 4
                    },
                    {
                        "Code": "322140",
                        "Name": "锡山区",
                        "sort": 5
                    },
                    {
                        "Code": "322140",
                        "Name": "惠山区",
                        "sort": 6
                    },
                    {
                        "Code": "322140",
                        "Name": "宜兴市",
                        "sort": 7
                    },
                    {
                        "Code": "322140",
                        "Name": "江阴市",
                        "sort": 8
                    },
                    {
                        "Code": "322253",
                        "Name": "靖江市",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "322150",
                "Name": "苏州市",
                "sort": 5,
                "level": [
                    {
                        "Code": "322150",
                        "Name": "平江区",
                        "sort": 1
                    },
                    {
                        "Code": "322150",
                        "Name": "沧浪区",
                        "sort": 2
                    },
                    {
                        "Code": "322150",
                        "Name": "金阊区",
                        "sort": 3
                    },
                    {
                        "Code": "322150",
                        "Name": "虎丘区",
                        "sort": 4
                    },
                    {
                        "Code": "322150",
                        "Name": "吴中区",
                        "sort": 5
                    },
                    {
                        "Code": "322150",
                        "Name": "相城区",
                        "sort": 6
                    },
                    {
                        "Code": "322150",
                        "Name": "吴江市",
                        "sort": 7
                    },
                    {
                        "Code": "322150",
                        "Name": "昆山市",
                        "sort": 8
                    },
                    {
                        "Code": "322150",
                        "Name": "太仓市",
                        "sort": 9
                    },
                    {
                        "Code": "322150",
                        "Name": "常熟市",
                        "sort": 10
                    },
                    {
                        "Code": "322150",
                        "Name": "张家港市",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "322210",
                "Name": "徐州市",
                "sort": 6,
                "level": [
                    {
                        "Code": "322210",
                        "Name": "鼓楼区",
                        "sort": 1
                    },
                    {
                        "Code": "322210",
                        "Name": "云龙区",
                        "sort": 2
                    },
                    {
                        "Code": "322210",
                        "Name": "泉山区",
                        "sort": 3
                    },
                    {
                        "Code": "322210",
                        "Name": "贾汪区",
                        "sort": 4
                    },
                    {
                        "Code": "322210",
                        "Name": "铜山县",
                        "sort": 5
                    },
                    {
                        "Code": "322210",
                        "Name": "九里区",
                        "sort": 6
                    },
                    {
                        "Code": "322210",
                        "Name": "睢宁县",
                        "sort": 7
                    },
                    {
                        "Code": "322210",
                        "Name": "邳州市",
                        "sort": 8
                    },
                    {
                        "Code": "322210",
                        "Name": "新沂市",
                        "sort": 9
                    },
                    {
                        "Code": "322210",
                        "Name": "沛县",
                        "sort": 10
                    },
                    {
                        "Code": "322210",
                        "Name": "丰县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "322220",
                "Name": "连云港市",
                "sort": 7,
                "level": [
                    {
                        "Code": "322220",
                        "Name": "新浦区",
                        "sort": 1
                    },
                    {
                        "Code": "322220",
                        "Name": "海州区",
                        "sort": 2
                    },
                    {
                        "Code": "322220",
                        "Name": "连云区",
                        "sort": 3
                    },
                    {
                        "Code": "322220",
                        "Name": "赣榆县",
                        "sort": 4
                    },
                    {
                        "Code": "322220",
                        "Name": "灌云县",
                        "sort": 5
                    },
                    {
                        "Code": "322220",
                        "Name": "东海县",
                        "sort": 6
                    },
                    {
                        "Code": "322220",
                        "Name": "灌南县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "322230",
                "Name": "淮安市",
                "sort": 8,
                "level": [
                    {
                        "Code": "322230",
                        "Name": "清河区",
                        "sort": 1
                    },
                    {
                        "Code": "322230",
                        "Name": "清浦区",
                        "sort": 2
                    },
                    {
                        "Code": "322230",
                        "Name": "楚州区",
                        "sort": 3
                    },
                    {
                        "Code": "322230",
                        "Name": "淮阴区",
                        "sort": 4
                    },
                    {
                        "Code": "322230",
                        "Name": "涟水县",
                        "sort": 5
                    },
                    {
                        "Code": "322238",
                        "Name": "沭阳县",
                        "sort": 6
                    },
                    {
                        "Code": "322238",
                        "Name": "泗阳县",
                        "sort": 7
                    },
                    {
                        "Code": "322238",
                        "Name": "宿豫区",
                        "sort": 8
                    },
                    {
                        "Code": "322238",
                        "Name": "宿城区",
                        "sort": 9
                    },
                    {
                        "Code": "322238",
                        "Name": "泗洪县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "322238",
                "Name": "宿迁市",
                "sort": 9,
                "level": [
                    {
                        "Code": "322230",
                        "Name": "清河区",
                        "sort": 1
                    },
                    {
                        "Code": "322230",
                        "Name": "清浦区",
                        "sort": 2
                    },
                    {
                        "Code": "322230",
                        "Name": "楚州区",
                        "sort": 3
                    },
                    {
                        "Code": "322230",
                        "Name": "淮阴区",
                        "sort": 4
                    },
                    {
                        "Code": "322230",
                        "Name": "涟水县",
                        "sort": 5
                    },
                    {
                        "Code": "322238",
                        "Name": "沭阳县",
                        "sort": 6
                    },
                    {
                        "Code": "322238",
                        "Name": "泗阳县",
                        "sort": 7
                    },
                    {
                        "Code": "322238",
                        "Name": "宿豫区",
                        "sort": 8
                    },
                    {
                        "Code": "322238",
                        "Name": "宿城区",
                        "sort": 9
                    },
                    {
                        "Code": "322238",
                        "Name": "泗洪县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "322240",
                "Name": "盐城市",
                "sort": 10,
                "level": [
                    {
                        "Code": "322240",
                        "Name": "亭湖区",
                        "sort": 1
                    },
                    {
                        "Code": "322240",
                        "Name": "盐都区",
                        "sort": 2
                    },
                    {
                        "Code": "322240",
                        "Name": "大丰市",
                        "sort": 3
                    },
                    {
                        "Code": "322240",
                        "Name": "东台市",
                        "sort": 4
                    },
                    {
                        "Code": "322240",
                        "Name": "射阳县",
                        "sort": 5
                    },
                    {
                        "Code": "322240",
                        "Name": "阜宁县",
                        "sort": 6
                    },
                    {
                        "Code": "322240",
                        "Name": "滨海县",
                        "sort": 7
                    },
                    {
                        "Code": "322240",
                        "Name": "响水县",
                        "sort": 8
                    },
                    {
                        "Code": "322240",
                        "Name": "建湖县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "322250",
                "Name": "扬州市",
                "sort": 11,
                "level": [
                    {
                        "Code": "322250",
                        "Name": "广陵区",
                        "sort": 1
                    },
                    {
                        "Code": "322250",
                        "Name": "维扬区",
                        "sort": 2
                    },
                    {
                        "Code": "322250",
                        "Name": "邗江区",
                        "sort": 3
                    },
                    {
                        "Code": "322250",
                        "Name": "江都市",
                        "sort": 4
                    },
                    {
                        "Code": "322253",
                        "Name": "海陵区",
                        "sort": 5
                    },
                    {
                        "Code": "322253",
                        "Name": "高港区",
                        "sort": 6
                    },
                    {
                        "Code": "322253",
                        "Name": "泰兴市",
                        "sort": 7
                    },
                    {
                        "Code": "322253",
                        "Name": "姜堰市",
                        "sort": 8
                    },
                    {
                        "Code": "322250",
                        "Name": "高邮市",
                        "sort": 9
                    },
                    {
                        "Code": "322253",
                        "Name": "兴化市",
                        "sort": 10
                    },
                    {
                        "Code": "322250",
                        "Name": "宝应县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "322253",
                "Name": "泰州市",
                "sort": 12,
                "level": [
                    {
                        "Code": "322250",
                        "Name": "广陵区",
                        "sort": 1
                    },
                    {
                        "Code": "322250",
                        "Name": "维扬区",
                        "sort": 2
                    },
                    {
                        "Code": "322250",
                        "Name": "邗江区",
                        "sort": 3
                    },
                    {
                        "Code": "322250",
                        "Name": "江都市",
                        "sort": 4
                    },
                    {
                        "Code": "322253",
                        "Name": "海陵区",
                        "sort": 5
                    },
                    {
                        "Code": "322253",
                        "Name": "高港区",
                        "sort": 6
                    },
                    {
                        "Code": "322253",
                        "Name": "泰兴市",
                        "sort": 7
                    },
                    {
                        "Code": "322253",
                        "Name": "姜堰市",
                        "sort": 8
                    },
                    {
                        "Code": "322250",
                        "Name": "高邮市",
                        "sort": 9
                    },
                    {
                        "Code": "322253",
                        "Name": "兴化市",
                        "sort": 10
                    },
                    {
                        "Code": "322250",
                        "Name": "宝应县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "322260",
                "Name": "南通市",
                "sort": 13,
                "level": [
                    {
                        "Code": "322260",
                        "Name": "崇川区",
                        "sort": 1
                    },
                    {
                        "Code": "322260",
                        "Name": "港闸区",
                        "sort": 2
                    },
                    {
                        "Code": "322260",
                        "Name": "海门市",
                        "sort": 3
                    },
                    {
                        "Code": "322260",
                        "Name": "启东市",
                        "sort": 4
                    },
                    {
                        "Code": "322260",
                        "Name": "通州市",
                        "sort": 5
                    },
                    {
                        "Code": "322260",
                        "Name": "如东县",
                        "sort": 6
                    },
                    {
                        "Code": "322260",
                        "Name": "如皋市",
                        "sort": 7
                    },
                    {
                        "Code": "322260",
                        "Name": "海安县",
                        "sort": 8
                    }
                ]
            }
        ]
    },
    {
        "Code": "340000",
        "Name": "安徽省",
        "level": [
            {
                "Code": "342300",
                "Name": "合肥市",
                "sort": 1,
                "level": [
                    {
                        "Code": "342300",
                        "Name": "庐阳区",
                        "sort": 1
                    },
                    {
                        "Code": "342300",
                        "Name": "包河区",
                        "sort": 2
                    },
                    {
                        "Code": "342300",
                        "Name": "蜀山区",
                        "sort": 3
                    },
                    {
                        "Code": "342300",
                        "Name": "肥西县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "342320",
                "Name": "淮南市",
                "sort": 2,
                "level": [
                    {
                        "Code": "342320",
                        "Name": "田家庵区",
                        "sort": 1
                    },
                    {
                        "Code": "342320",
                        "Name": "大通区",
                        "sort": 2
                    },
                    {
                        "Code": "342320",
                        "Name": "谢家集区",
                        "sort": 3
                    },
                    {
                        "Code": "342320",
                        "Name": "八公山区",
                        "sort": 4
                    },
                    {
                        "Code": "342320",
                        "Name": "潘集区",
                        "sort": 5
                    },
                    {
                        "Code": "342320",
                        "Name": "凤台县",
                        "sort": 6
                    },
                    {
                        "Code": "342370",
                        "Name": "寿县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "342330",
                "Name": "蚌埠市",
                "sort": 3,
                "level": [
                    {
                        "Code": "342330",
                        "Name": "龙子湖区",
                        "sort": 1
                    },
                    {
                        "Code": "342330",
                        "Name": "禹会区",
                        "sort": 2
                    },
                    {
                        "Code": "342330",
                        "Name": "淮上区",
                        "sort": 3
                    },
                    {
                        "Code": "342330",
                        "Name": "蚌山区",
                        "sort": 4
                    },
                    {
                        "Code": "342390",
                        "Name": "凤阳县",
                        "sort": 5
                    },
                    {
                        "Code": "342390",
                        "Name": "定远县",
                        "sort": 6
                    },
                    {
                        "Code": "342330",
                        "Name": "五河县",
                        "sort": 7
                    },
                    {
                        "Code": "342330",
                        "Name": "怀远县",
                        "sort": 8
                    },
                    {
                        "Code": "342368",
                        "Name": "蒙城县",
                        "sort": 9
                    },
                    {
                        "Code": "342368",
                        "Name": "涡阳县",
                        "sort": 10
                    },
                    {
                        "Code": "342330",
                        "Name": "固镇县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "342340",
                "Name": "宿州市",
                "sort": 4,
                "level": [
                    {
                        "Code": "342340",
                        "Name": "埇桥区",
                        "sort": 1
                    },
                    {
                        "Code": "342340",
                        "Name": "灵璧县",
                        "sort": 2
                    },
                    {
                        "Code": "342340",
                        "Name": "泗县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "342350",
                "Name": "淮北市",
                "sort": 5,
                "level": [
                    {
                        "Code": "342350",
                        "Name": "相山区",
                        "sort": 1
                    },
                    {
                        "Code": "342350",
                        "Name": "烈山区",
                        "sort": 2
                    },
                    {
                        "Code": "342350",
                        "Name": "杜集区",
                        "sort": 3
                    },
                    {
                        "Code": "342350",
                        "Name": "濉溪县",
                        "sort": 4
                    },
                    {
                        "Code": "342340",
                        "Name": "萧县",
                        "sort": 5
                    },
                    {
                        "Code": "342340",
                        "Name": "砀山县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "342360",
                "Name": "阜阳市",
                "sort": 6,
                "level": [
                    {
                        "Code": "342360",
                        "Name": "颍泉区",
                        "sort": 1
                    },
                    {
                        "Code": "342360",
                        "Name": "颍州区",
                        "sort": 2
                    },
                    {
                        "Code": "342360",
                        "Name": "颍东区",
                        "sort": 3
                    },
                    {
                        "Code": "342360",
                        "Name": "颍上县",
                        "sort": 4
                    },
                    {
                        "Code": "342360",
                        "Name": "阜南县",
                        "sort": 5
                    },
                    {
                        "Code": "342360",
                        "Name": "临泉县",
                        "sort": 6
                    },
                    {
                        "Code": "342360",
                        "Name": "界首市",
                        "sort": 7
                    },
                    {
                        "Code": "342360",
                        "Name": "太和县",
                        "sort": 8
                    },
                    {
                        "Code": "342368",
                        "Name": "利辛县",
                        "sort": 9
                    },
                    {
                        "Code": "342368",
                        "Name": "谯城区",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "342368",
                "Name": "亳州市",
                "sort": 7,
                "level": [
                    {
                        "Code": "342360",
                        "Name": "颍泉区",
                        "sort": 1
                    },
                    {
                        "Code": "342360",
                        "Name": "颍州区",
                        "sort": 2
                    },
                    {
                        "Code": "342360",
                        "Name": "颍东区",
                        "sort": 3
                    },
                    {
                        "Code": "342360",
                        "Name": "颍上县",
                        "sort": 4
                    },
                    {
                        "Code": "342360",
                        "Name": "阜南县",
                        "sort": 5
                    },
                    {
                        "Code": "342360",
                        "Name": "临泉县",
                        "sort": 6
                    },
                    {
                        "Code": "342360",
                        "Name": "界首市",
                        "sort": 7
                    },
                    {
                        "Code": "342360",
                        "Name": "太和县",
                        "sort": 8
                    },
                    {
                        "Code": "342368",
                        "Name": "利辛县",
                        "sort": 9
                    },
                    {
                        "Code": "342368",
                        "Name": "谯城区",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "342370",
                "Name": "六安市",
                "sort": 8,
                "level": [
                    {
                        "Code": "342370",
                        "Name": "裕安区",
                        "sort": 1
                    },
                    {
                        "Code": "342370",
                        "Name": "金安区",
                        "sort": 2
                    },
                    {
                        "Code": "342370",
                        "Name": "霍山县",
                        "sort": 3
                    },
                    {
                        "Code": "342370",
                        "Name": "金寨县",
                        "sort": 4
                    },
                    {
                        "Code": "342370",
                        "Name": "霍邱县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "342380",
                "Name": "巢湖市",
                "sort": 9,
                "level": [
                    {
                        "Code": "342380",
                        "Name": "居巢区",
                        "sort": 1
                    },
                    {
                        "Code": "342380",
                        "Name": "含山县",
                        "sort": 2
                    },
                    {
                        "Code": "342380",
                        "Name": "和县",
                        "sort": 3
                    },
                    {
                        "Code": "342380",
                        "Name": "无为县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "342390",
                "Name": "滁州市",
                "sort": 10,
                "level": [
                    {
                        "Code": "342390",
                        "Name": "琅琊区",
                        "sort": 1
                    },
                    {
                        "Code": "342390",
                        "Name": "南谯区",
                        "sort": 2
                    },
                    {
                        "Code": "342390",
                        "Name": "来安县",
                        "sort": 3
                    },
                    {
                        "Code": "342390",
                        "Name": "天长市",
                        "sort": 4
                    },
                    {
                        "Code": "342390",
                        "Name": "明光市",
                        "sort": 5
                    },
                    {
                        "Code": "342390",
                        "Name": "全椒县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "342410",
                "Name": "芜湖市",
                "sort": 11,
                "level": [
                    {
                        "Code": "342410",
                        "Name": "镜湖区",
                        "sort": 1
                    },
                    {
                        "Code": "342410",
                        "Name": "弋江区",
                        "sort": 2
                    },
                    {
                        "Code": "342410",
                        "Name": "鸠江区",
                        "sort": 3
                    },
                    {
                        "Code": "342410",
                        "Name": "三山区",
                        "sort": 4
                    },
                    {
                        "Code": "342410",
                        "Name": "芜湖县",
                        "sort": 5
                    },
                    {
                        "Code": "342410",
                        "Name": "繁昌县",
                        "sort": 6
                    },
                    {
                        "Code": "342410",
                        "Name": "南陵县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "342420",
                "Name": "宣城市",
                "sort": 12,
                "level": [
                    {
                        "Code": "342420",
                        "Name": "宣州区",
                        "sort": 1
                    },
                    {
                        "Code": "342420",
                        "Name": "郎溪县",
                        "sort": 2
                    },
                    {
                        "Code": "342420",
                        "Name": "广德县",
                        "sort": 3
                    },
                    {
                        "Code": "342420",
                        "Name": "宁国市",
                        "sort": 4
                    },
                    {
                        "Code": "342420",
                        "Name": "泾县",
                        "sort": 5
                    },
                    {
                        "Code": "342420",
                        "Name": "旌德县",
                        "sort": 6
                    },
                    {
                        "Code": "342471",
                        "Name": "青阳县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "342430",
                "Name": "马鞍山市",
                "sort": 13,
                "level": [
                    {
                        "Code": "342430",
                        "Name": "雨山区",
                        "sort": 1
                    },
                    {
                        "Code": "342430",
                        "Name": "花山区",
                        "sort": 2
                    },
                    {
                        "Code": "342430",
                        "Name": "金家庄区",
                        "sort": 3
                    },
                    {
                        "Code": "342430",
                        "Name": "当涂县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "342440",
                "Name": "铜陵市",
                "sort": 14,
                "level": [
                    {
                        "Code": "342440",
                        "Name": "铜官山区",
                        "sort": 1
                    },
                    {
                        "Code": "342440",
                        "Name": "郊区",
                        "sort": 2
                    },
                    {
                        "Code": "342440",
                        "Name": "狮子山区",
                        "sort": 3
                    },
                    {
                        "Code": "342440",
                        "Name": "铜陵县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "342450",
                "Name": "黄山市",
                "sort": 15,
                "level": [
                    {
                        "Code": "342450",
                        "Name": "屯溪区",
                        "sort": 1
                    },
                    {
                        "Code": "342471",
                        "Name": "石台县",
                        "sort": 2
                    },
                    {
                        "Code": "342450",
                        "Name": "歙县",
                        "sort": 3
                    },
                    {
                        "Code": "342420",
                        "Name": "绩溪县",
                        "sort": 4
                    },
                    {
                        "Code": "342450",
                        "Name": "休宁县",
                        "sort": 5
                    },
                    {
                        "Code": "342450",
                        "Name": "黟县",
                        "sort": 6
                    },
                    {
                        "Code": "342450",
                        "Name": "祁门县",
                        "sort": 7
                    },
                    {
                        "Code": "342450",
                        "Name": "黄山区",
                        "sort": 8
                    },
                    {
                        "Code": "342450",
                        "Name": "徽州区",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "342460",
                "Name": "安庆市",
                "sort": 16,
                "level": [
                    {
                        "Code": "342460",
                        "Name": "大观区",
                        "sort": 1
                    },
                    {
                        "Code": "342460",
                        "Name": "迎江区",
                        "sort": 2
                    },
                    {
                        "Code": "342460",
                        "Name": "怀宁县",
                        "sort": 3
                    },
                    {
                        "Code": "342460",
                        "Name": "望江县",
                        "sort": 4
                    },
                    {
                        "Code": "342460",
                        "Name": "潜山县",
                        "sort": 5
                    },
                    {
                        "Code": "342460",
                        "Name": "太湖县",
                        "sort": 6
                    },
                    {
                        "Code": "342460",
                        "Name": "宿松县",
                        "sort": 7
                    },
                    {
                        "Code": "342460",
                        "Name": "岳西县",
                        "sort": 8
                    },
                    {
                        "Code": "342460",
                        "Name": "枞阳县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "342471",
                "Name": "池州市",
                "sort": 17,
                "level": [
                    {
                        "Code": "342471",
                        "Name": "贵池区",
                        "sort": 1
                    },
                    {
                        "Code": "342471",
                        "Name": "东至县",
                        "sort": 2
                    }
                ]
            }
        ]
    },
    {
        "Code": "370000",
        "Name": "山东省",
        "level": [
            {
                "Code": "372500",
                "Name": "济南市",
                "sort": 1,
                "level": [
                    {
                        "Code": "372500",
                        "Name": "市中区",
                        "sort": 1
                    },
                    {
                        "Code": "372500",
                        "Name": "历下区",
                        "sort": 2
                    },
                    {
                        "Code": "372500",
                        "Name": "历城区",
                        "sort": 3
                    },
                    {
                        "Code": "372500",
                        "Name": "槐荫区",
                        "sort": 4
                    },
                    {
                        "Code": "372500",
                        "Name": "天桥区",
                        "sort": 5
                    },
                    {
                        "Code": "372500",
                        "Name": "章丘市",
                        "sort": 6
                    },
                    {
                        "Code": "372500",
                        "Name": "长清区",
                        "sort": 7
                    },
                    {
                        "Code": "372500",
                        "Name": "平阴县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "372520",
                "Name": "聊城市",
                "sort": 2,
                "level": [
                    {
                        "Code": "372520",
                        "Name": "东昌府区",
                        "sort": 1
                    },
                    {
                        "Code": "372520",
                        "Name": "茌平县",
                        "sort": 2
                    },
                    {
                        "Code": "372520",
                        "Name": "东阿县",
                        "sort": 3
                    },
                    {
                        "Code": "372520",
                        "Name": "阳谷县",
                        "sort": 4
                    },
                    {
                        "Code": "372520",
                        "Name": "莘县",
                        "sort": 5
                    },
                    {
                        "Code": "372520",
                        "Name": "冠县",
                        "sort": 6
                    },
                    {
                        "Code": "372520",
                        "Name": "临清市",
                        "sort": 7
                    },
                    {
                        "Code": "372520",
                        "Name": "高唐县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "372530",
                "Name": "德州市",
                "sort": 3,
                "level": [
                    {
                        "Code": "372530",
                        "Name": "德城区",
                        "sort": 1
                    },
                    {
                        "Code": "372530",
                        "Name": "平原县",
                        "sort": 2
                    },
                    {
                        "Code": "372530",
                        "Name": "夏津县",
                        "sort": 3
                    },
                    {
                        "Code": "372530",
                        "Name": "武城县",
                        "sort": 4
                    },
                    {
                        "Code": "372530",
                        "Name": "宁津县",
                        "sort": 5
                    },
                    {
                        "Code": "372530",
                        "Name": "陵县",
                        "sort": 6
                    },
                    {
                        "Code": "372530",
                        "Name": "乐陵市",
                        "sort": 7
                    },
                    {
                        "Code": "372530",
                        "Name": "庆云县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "372550",
                "Name": "淄博市",
                "sort": 4,
                "level": [
                    {
                        "Code": "372550",
                        "Name": "张店区",
                        "sort": 1
                    },
                    {
                        "Code": "372550",
                        "Name": "淄川区",
                        "sort": 2
                    },
                    {
                        "Code": "372550",
                        "Name": "博山区",
                        "sort": 3
                    },
                    {
                        "Code": "372550",
                        "Name": "周村区",
                        "sort": 4
                    },
                    {
                        "Code": "372550",
                        "Name": "临淄区",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "372566",
                "Name": "滨州市",
                "sort": 5,
                "level": [
                    {
                        "Code": "372550",
                        "Name": "沂源县",
                        "sort": 1
                    },
                    {
                        "Code": "372566",
                        "Name": "邹平县",
                        "sort": 2
                    },
                    {
                        "Code": "372550",
                        "Name": "高青县",
                        "sort": 3
                    },
                    {
                        "Code": "372550",
                        "Name": "桓台县",
                        "sort": 4
                    },
                    {
                        "Code": "372566",
                        "Name": "博兴县",
                        "sort": 5
                    },
                    {
                        "Code": "372566",
                        "Name": "滨城区",
                        "sort": 6
                    },
                    {
                        "Code": "372566",
                        "Name": "沾化县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "372570",
                "Name": "东营市",
                "sort": 6,
                "level": [
                    {
                        "Code": "372570",
                        "Name": "东营区",
                        "sort": 1
                    },
                    {
                        "Code": "372570",
                        "Name": "垦利县",
                        "sort": 2
                    },
                    {
                        "Code": "372570",
                        "Name": "河口区",
                        "sort": 3
                    },
                    {
                        "Code": "372570",
                        "Name": "广饶县",
                        "sort": 4
                    },
                    {
                        "Code": "372570",
                        "Name": "利津县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "372610",
                "Name": "潍坊市",
                "sort": 7,
                "level": [
                    {
                        "Code": "372610",
                        "Name": "潍城区",
                        "sort": 1
                    },
                    {
                        "Code": "372610",
                        "Name": "奎文区",
                        "sort": 2
                    },
                    {
                        "Code": "372610",
                        "Name": "寒亭区",
                        "sort": 3
                    },
                    {
                        "Code": "372610",
                        "Name": "坊子区",
                        "sort": 4
                    },
                    {
                        "Code": "372610",
                        "Name": "昌邑市",
                        "sort": 5
                    },
                    {
                        "Code": "372640",
                        "Name": "莱州市",
                        "sort": 6
                    },
                    {
                        "Code": "372610",
                        "Name": "高密市",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "372640",
                "Name": "烟台市",
                "sort": 8,
                "level": [
                    {
                        "Code": "372640",
                        "Name": "芝罘区",
                        "sort": 1
                    },
                    {
                        "Code": "372640",
                        "Name": "莱山区",
                        "sort": 2
                    },
                    {
                        "Code": "372640",
                        "Name": "龙口市",
                        "sort": 3
                    },
                    {
                        "Code": "372640",
                        "Name": "牟平区",
                        "sort": 4
                    },
                    {
                        "Code": "372642",
                        "Name": "环翠区",
                        "sort": 5
                    },
                    {
                        "Code": "372642",
                        "Name": "荣成市",
                        "sort": 6
                    },
                    {
                        "Code": "372642",
                        "Name": "文登市",
                        "sort": 7
                    },
                    {
                        "Code": "372642",
                        "Name": "乳山市",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "372642",
                "Name": "威海市",
                "sort": 9,
                "level": [
                    {
                        "Code": "372640",
                        "Name": "芝罘区",
                        "sort": 1
                    },
                    {
                        "Code": "372640",
                        "Name": "莱山区",
                        "sort": 2
                    },
                    {
                        "Code": "372640",
                        "Name": "龙口市",
                        "sort": 3
                    },
                    {
                        "Code": "372640",
                        "Name": "牟平区",
                        "sort": 4
                    },
                    {
                        "Code": "372642",
                        "Name": "环翠区",
                        "sort": 5
                    },
                    {
                        "Code": "372642",
                        "Name": "荣成市",
                        "sort": 6
                    },
                    {
                        "Code": "372642",
                        "Name": "文登市",
                        "sort": 7
                    },
                    {
                        "Code": "372642",
                        "Name": "乳山市",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "372660",
                "Name": "青岛市",
                "sort": 10,
                "level": [
                    {
                        "Code": "372660",
                        "Name": "市南区",
                        "sort": 1
                    },
                    {
                        "Code": "372660",
                        "Name": "市北区",
                        "sort": 2
                    },
                    {
                        "Code": "372660",
                        "Name": "四方区",
                        "sort": 3
                    },
                    {
                        "Code": "372660",
                        "Name": "李沧区",
                        "sort": 4
                    },
                    {
                        "Code": "372660",
                        "Name": "崂山区",
                        "sort": 5
                    },
                    {
                        "Code": "372660",
                        "Name": "城阳区",
                        "sort": 6
                    },
                    {
                        "Code": "372660",
                        "Name": "即墨市",
                        "sort": 7
                    },
                    {
                        "Code": "372660",
                        "Name": "胶州市",
                        "sort": 8
                    },
                    {
                        "Code": "372660",
                        "Name": "黄岛区",
                        "sort": 9
                    },
                    {
                        "Code": "372660",
                        "Name": "莱西市",
                        "sort": 10
                    },
                    {
                        "Code": "372660",
                        "Name": "平度市",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "372710",
                "Name": "泰安市",
                "sort": 11,
                "level": [
                    {
                        "Code": "372710",
                        "Name": "泰山区",
                        "sort": 1
                    },
                    {
                        "Code": "372710",
                        "Name": "岱岳区",
                        "sort": 2
                    },
                    {
                        "Code": "372711",
                        "Name": "钢城区",
                        "sort": 3
                    },
                    {
                        "Code": "372710",
                        "Name": "新泰市",
                        "sort": 4
                    },
                    {
                        "Code": "372710",
                        "Name": "宁阳县",
                        "sort": 5
                    },
                    {
                        "Code": "372710",
                        "Name": "东平县",
                        "sort": 6
                    },
                    {
                        "Code": "372710",
                        "Name": "肥城市",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "372711",
                "Name": "莱芜市",
                "sort": 12,
                "level": [
                    {
                        "Code": "372710",
                        "Name": "泰山区",
                        "sort": 1
                    },
                    {
                        "Code": "372710",
                        "Name": "岱岳区",
                        "sort": 2
                    },
                    {
                        "Code": "372711",
                        "Name": "钢城区",
                        "sort": 3
                    },
                    {
                        "Code": "372710",
                        "Name": "新泰市",
                        "sort": 4
                    },
                    {
                        "Code": "372710",
                        "Name": "宁阳县",
                        "sort": 5
                    },
                    {
                        "Code": "372710",
                        "Name": "东平县",
                        "sort": 6
                    },
                    {
                        "Code": "372710",
                        "Name": "肥城市",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "372720",
                "Name": "济宁市",
                "sort": 13,
                "level": [
                    {
                        "Code": "372720",
                        "Name": "市中区",
                        "sort": 1
                    },
                    {
                        "Code": "372720",
                        "Name": "任城区",
                        "sort": 2
                    },
                    {
                        "Code": "372720",
                        "Name": "兖州市",
                        "sort": 3
                    },
                    {
                        "Code": "372720",
                        "Name": "微山县",
                        "sort": 4
                    },
                    {
                        "Code": "372720",
                        "Name": "金乡县",
                        "sort": 5
                    },
                    {
                        "Code": "372720",
                        "Name": "鱼台县",
                        "sort": 6
                    },
                    {
                        "Code": "372720",
                        "Name": "嘉祥县",
                        "sort": 7
                    },
                    {
                        "Code": "372720",
                        "Name": "汶上县",
                        "sort": 8
                    },
                    {
                        "Code": "372720",
                        "Name": "梁山县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "372740",
                "Name": "菏泽市",
                "sort": 14,
                "level": [
                    {
                        "Code": "372740",
                        "Name": "牡丹区",
                        "sort": 1
                    },
                    {
                        "Code": "372740",
                        "Name": "定陶县",
                        "sort": 2
                    },
                    {
                        "Code": "372740",
                        "Name": "成武县",
                        "sort": 3
                    },
                    {
                        "Code": "372740",
                        "Name": "单县",
                        "sort": 4
                    },
                    {
                        "Code": "372740",
                        "Name": "曹县",
                        "sort": 5
                    },
                    {
                        "Code": "372740",
                        "Name": "东明县",
                        "sort": 6
                    },
                    {
                        "Code": "372740",
                        "Name": "鄄城县",
                        "sort": 7
                    },
                    {
                        "Code": "372740",
                        "Name": "郓城县",
                        "sort": 8
                    },
                    {
                        "Code": "372740",
                        "Name": "巨野县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "372760",
                "Name": "临沂市",
                "sort": 15,
                "level": [
                    {
                        "Code": "372760",
                        "Name": "兰山区",
                        "sort": 1
                    },
                    {
                        "Code": "372760",
                        "Name": "罗庄区",
                        "sort": 2
                    },
                    {
                        "Code": "372760",
                        "Name": "河东区",
                        "sort": 3
                    },
                    {
                        "Code": "372760",
                        "Name": "郯城县",
                        "sort": 4
                    },
                    {
                        "Code": "372760",
                        "Name": "蒙阴县",
                        "sort": 5
                    },
                    {
                        "Code": "372760",
                        "Name": "沂南县",
                        "sort": 6
                    },
                    {
                        "Code": "372760",
                        "Name": "沂水县",
                        "sort": 7
                    },
                    {
                        "Code": "372768",
                        "Name": "莒县",
                        "sort": 8
                    },
                    {
                        "Code": "372760",
                        "Name": "莒南县",
                        "sort": 9
                    },
                    {
                        "Code": "372760",
                        "Name": "临沭县",
                        "sort": 10
                    },
                    {
                        "Code": "372768",
                        "Name": "东港区",
                        "sort": 11
                    },
                    {
                        "Code": "372768",
                        "Name": "岚山区",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "372768",
                "Name": "日照市",
                "sort": 16,
                "level": [
                    {
                        "Code": "372760",
                        "Name": "兰山区",
                        "sort": 1
                    },
                    {
                        "Code": "372760",
                        "Name": "罗庄区",
                        "sort": 2
                    },
                    {
                        "Code": "372760",
                        "Name": "河东区",
                        "sort": 3
                    },
                    {
                        "Code": "372760",
                        "Name": "郯城县",
                        "sort": 4
                    },
                    {
                        "Code": "372760",
                        "Name": "蒙阴县",
                        "sort": 5
                    },
                    {
                        "Code": "372760",
                        "Name": "沂南县",
                        "sort": 6
                    },
                    {
                        "Code": "372760",
                        "Name": "沂水县",
                        "sort": 7
                    },
                    {
                        "Code": "372768",
                        "Name": "莒县",
                        "sort": 8
                    },
                    {
                        "Code": "372760",
                        "Name": "莒南县",
                        "sort": 9
                    },
                    {
                        "Code": "372760",
                        "Name": "临沭县",
                        "sort": 10
                    },
                    {
                        "Code": "372768",
                        "Name": "东港区",
                        "sort": 11
                    },
                    {
                        "Code": "372768",
                        "Name": "岚山区",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "372770",
                "Name": "枣庄市",
                "sort": 17,
                "level": [
                    {
                        "Code": "372770",
                        "Name": "薛城区",
                        "sort": 1
                    },
                    {
                        "Code": "372770",
                        "Name": "市中区",
                        "sort": 2
                    },
                    {
                        "Code": "372770",
                        "Name": "山亭区",
                        "sort": 3
                    },
                    {
                        "Code": "372770",
                        "Name": "峄城区",
                        "sort": 4
                    },
                    {
                        "Code": "372770",
                        "Name": "台儿庄区",
                        "sort": 5
                    },
                    {
                        "Code": "372770",
                        "Name": "滕州市",
                        "sort": 6
                    },
                    {
                        "Code": "372760",
                        "Name": "苍山县",
                        "sort": 7
                    }
                ]
            }
        ]
    },
    {
        "Code": "120000",
        "Name": "天津市",
        "level": [
            {
                "Code": "120000",
                "Name": "天津市",
                "sort": 1,
                "level": [
                    {
                        "Code": "123000",
                        "Name": "河北区",
                        "sort": 1
                    },
                    {
                        "Code": "123000",
                        "Name": "河东区",
                        "sort": 2
                    },
                    {
                        "Code": "123000",
                        "Name": "南开区",
                        "sort": 3
                    },
                    {
                        "Code": "123000",
                        "Name": "和平区",
                        "sort": 4
                    },
                    {
                        "Code": "123000",
                        "Name": "河西区",
                        "sort": 5
                    },
                    {
                        "Code": "123000",
                        "Name": "红桥区",
                        "sort": 6
                    },
                    {
                        "Code": "123000",
                        "Name": "北辰区",
                        "sort": 7
                    },
                    {
                        "Code": "123000",
                        "Name": "东丽区",
                        "sort": 8
                    },
                    {
                        "Code": "123000",
                        "Name": "大港区",
                        "sort": 9
                    },
                    {
                        "Code": "123000",
                        "Name": "津南区",
                        "sort": 10
                    },
                    {
                        "Code": "123000",
                        "Name": "西青区",
                        "sort": 11
                    },
                    {
                        "Code": "123000",
                        "Name": "塘沽区",
                        "sort": 12
                    },
                    {
                        "Code": "123000",
                        "Name": "汉沽区",
                        "sort": 13
                    },
                    {
                        "Code": "123000",
                        "Name": "宁河县",
                        "sort": 14
                    },
                    {
                        "Code": "123000",
                        "Name": "静海县",
                        "sort": 15
                    },
                    {
                        "Code": "123000",
                        "Name": "武清区",
                        "sort": 16
                    },
                    {
                        "Code": "123000",
                        "Name": "宝坻区",
                        "sort": 17
                    },
                    {
                        "Code": "123000",
                        "Name": "蓟县",
                        "sort": 18
                    }
                ]
            }
        ]
    },
    {
        "Code": "330000",
        "Name": "浙江省",
        "level": [
            {
                "Code": "333100",
                "Name": "杭州市",
                "sort": 1,
                "level": [
                    {
                        "Code": "333100",
                        "Name": "上城区",
                        "sort": 1
                    },
                    {
                        "Code": "333100",
                        "Name": "下城区",
                        "sort": 2
                    },
                    {
                        "Code": "333100",
                        "Name": "拱墅区",
                        "sort": 3
                    },
                    {
                        "Code": "333100",
                        "Name": "西湖区",
                        "sort": 4
                    },
                    {
                        "Code": "333100",
                        "Name": "江干区",
                        "sort": 5
                    },
                    {
                        "Code": "333100",
                        "Name": "滨江区",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "333120",
                "Name": "绍兴市",
                "sort": 2,
                "level": [
                    {
                        "Code": "333120",
                        "Name": "越城区",
                        "sort": 1
                    },
                    {
                        "Code": "333120",
                        "Name": "绍兴县",
                        "sort": 2
                    },
                    {
                        "Code": "333120",
                        "Name": "上虞市",
                        "sort": 3
                    },
                    {
                        "Code": "333120",
                        "Name": "嵊州市",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "333130",
                "Name": "湖州市",
                "sort": 3,
                "level": [
                    {
                        "Code": "333130",
                        "Name": "吴兴区",
                        "sort": 1
                    },
                    {
                        "Code": "333130",
                        "Name": "南浔区",
                        "sort": 2
                    },
                    {
                        "Code": "333130",
                        "Name": "长兴县",
                        "sort": 3
                    },
                    {
                        "Code": "333130",
                        "Name": "德清县",
                        "sort": 4
                    },
                    {
                        "Code": "333130",
                        "Name": "安吉县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "333140",
                "Name": "嘉兴市",
                "sort": 4,
                "level": [
                    {
                        "Code": "333140",
                        "Name": "秀城区",
                        "sort": 1
                    },
                    {
                        "Code": "333140",
                        "Name": "秀洲区",
                        "sort": 2
                    },
                    {
                        "Code": "333140",
                        "Name": "嘉善县",
                        "sort": 3
                    },
                    {
                        "Code": "333140",
                        "Name": "平湖市",
                        "sort": 4
                    },
                    {
                        "Code": "333140",
                        "Name": "海盐县",
                        "sort": 5
                    },
                    {
                        "Code": "333140",
                        "Name": "海宁市",
                        "sort": 6
                    },
                    {
                        "Code": "333140",
                        "Name": "桐乡市",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "333150",
                "Name": "宁波市",
                "sort": 5,
                "level": [
                    {
                        "Code": "333150",
                        "Name": "海曙区",
                        "sort": 1
                    },
                    {
                        "Code": "333150",
                        "Name": "江北区",
                        "sort": 2
                    },
                    {
                        "Code": "333150",
                        "Name": "江东区",
                        "sort": 3
                    },
                    {
                        "Code": "333150",
                        "Name": "鄞州区",
                        "sort": 4
                    },
                    {
                        "Code": "333150",
                        "Name": "镇海区",
                        "sort": 5
                    },
                    {
                        "Code": "333150",
                        "Name": "慈溪市",
                        "sort": 6
                    },
                    {
                        "Code": "333150",
                        "Name": "余姚市",
                        "sort": 7
                    },
                    {
                        "Code": "333150",
                        "Name": "奉化市",
                        "sort": 8
                    },
                    {
                        "Code": "333150",
                        "Name": "宁海县",
                        "sort": 9
                    },
                    {
                        "Code": "333150",
                        "Name": "象山县",
                        "sort": 10
                    },
                    {
                        "Code": "333150",
                        "Name": "北仑区",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "333160",
                "Name": "舟山市",
                "sort": 6,
                "level": [
                    {
                        "Code": "333160",
                        "Name": "定海区",
                        "sort": 1
                    },
                    {
                        "Code": "333160",
                        "Name": "普陀区",
                        "sort": 2
                    },
                    {
                        "Code": "333160",
                        "Name": "岱山县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "333180",
                "Name": "台州市",
                "sort": 7,
                "level": [
                    {
                        "Code": "333180",
                        "Name": "椒江区",
                        "sort": 1
                    },
                    {
                        "Code": "333180",
                        "Name": "黄岩区",
                        "sort": 2
                    },
                    {
                        "Code": "333180",
                        "Name": "路桥区",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "333210",
                "Name": "金华市",
                "sort": 8,
                "level": [
                    {
                        "Code": "333210",
                        "Name": "婺城区",
                        "sort": 1
                    },
                    {
                        "Code": "333210",
                        "Name": "金东区",
                        "sort": 2
                    },
                    {
                        "Code": "333210",
                        "Name": "兰溪市",
                        "sort": 3
                    },
                    {
                        "Code": "333210",
                        "Name": "武义县",
                        "sort": 4
                    },
                    {
                        "Code": "333210",
                        "Name": "永康市",
                        "sort": 5
                    },
                    {
                        "Code": "333230",
                        "Name": "缙云县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "333230",
                "Name": "丽水市",
                "sort": 9,
                "level": [
                    {
                        "Code": "333230",
                        "Name": "莲都区",
                        "sort": 1
                    },
                    {
                        "Code": "333230",
                        "Name": "遂昌县",
                        "sort": 2
                    },
                    {
                        "Code": "333230",
                        "Name": "松阳县",
                        "sort": 3
                    },
                    {
                        "Code": "333230",
                        "Name": "景宁畲族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "333230",
                        "Name": "云和县",
                        "sort": 5
                    },
                    {
                        "Code": "333230",
                        "Name": "龙泉市",
                        "sort": 6
                    },
                    {
                        "Code": "333230",
                        "Name": "庆元县",
                        "sort": 7
                    },
                    {
                        "Code": "333230",
                        "Name": "青田县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "333240",
                "Name": "衢州市",
                "sort": 10,
                "level": [
                    {
                        "Code": "333240",
                        "Name": "柯城区",
                        "sort": 1
                    },
                    {
                        "Code": "333240",
                        "Name": "衢江区",
                        "sort": 2
                    },
                    {
                        "Code": "333240",
                        "Name": "江山市",
                        "sort": 3
                    },
                    {
                        "Code": "333240",
                        "Name": "常山县",
                        "sort": 4
                    },
                    {
                        "Code": "333240",
                        "Name": "开化县",
                        "sort": 5
                    },
                    {
                        "Code": "333240",
                        "Name": "龙游县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "333250",
                "Name": "温州市",
                "sort": 11,
                "level": [
                    {
                        "Code": "333250",
                        "Name": "鹿城区",
                        "sort": 1
                    },
                    {
                        "Code": "333250",
                        "Name": "瓯海区",
                        "sort": 2
                    },
                    {
                        "Code": "333250",
                        "Name": "龙湾区",
                        "sort": 3
                    },
                    {
                        "Code": "333250",
                        "Name": "永嘉县",
                        "sort": 4
                    },
                    {
                        "Code": "333250",
                        "Name": "瑞安市",
                        "sort": 5
                    },
                    {
                        "Code": "333250",
                        "Name": "文成县",
                        "sort": 6
                    },
                    {
                        "Code": "333250",
                        "Name": "平阳县",
                        "sort": 7
                    },
                    {
                        "Code": "333250",
                        "Name": "泰顺县",
                        "sort": 8
                    },
                    {
                        "Code": "333250",
                        "Name": "乐清市",
                        "sort": 9
                    },
                    {
                        "Code": "333250",
                        "Name": "洞头县",
                        "sort": 10
                    },
                    {
                        "Code": "333250",
                        "Name": "苍南县",
                        "sort": 11
                    }
                ]
            }
        ]
    },
    {
        "Code": "360000",
        "Name": "江西省",
        "level": [
            {
                "Code": "363300",
                "Name": "南昌市",
                "sort": 1,
                "level": [
                    {
                        "Code": "363300",
                        "Name": "青云谱区",
                        "sort": 1
                    },
                    {
                        "Code": "363300",
                        "Name": "西湖区",
                        "sort": 2
                    },
                    {
                        "Code": "363300",
                        "Name": "湾里区",
                        "sort": 3
                    },
                    {
                        "Code": "363300",
                        "Name": "东湖区",
                        "sort": 4
                    },
                    {
                        "Code": "363300",
                        "Name": "青山湖区",
                        "sort": 5
                    },
                    {
                        "Code": "363300",
                        "Name": "南昌县",
                        "sort": 6
                    },
                    {
                        "Code": "363300",
                        "Name": "新建县",
                        "sort": 7
                    },
                    {
                        "Code": "363320",
                        "Name": "永修县",
                        "sort": 8
                    },
                    {
                        "Code": "363320",
                        "Name": "德安县",
                        "sort": 9
                    },
                    {
                        "Code": "363300",
                        "Name": "安义县",
                        "sort": 10
                    },
                    {
                        "Code": "363360",
                        "Name": "靖安县",
                        "sort": 11
                    },
                    {
                        "Code": "363360",
                        "Name": "奉新县",
                        "sort": 12
                    },
                    {
                        "Code": "363360",
                        "Name": "高安市",
                        "sort": 13
                    }
                ]
            },
            {
                "Code": "363320",
                "Name": "九江市",
                "sort": 2,
                "level": [
                    {
                        "Code": "363320",
                        "Name": "浔阳区",
                        "sort": 1
                    },
                    {
                        "Code": "363320",
                        "Name": "庐山区",
                        "sort": 2
                    },
                    {
                        "Code": "363320",
                        "Name": "九江县",
                        "sort": 3
                    },
                    {
                        "Code": "363320",
                        "Name": "瑞昌市",
                        "sort": 4
                    },
                    {
                        "Code": "363320",
                        "Name": "武宁县",
                        "sort": 5
                    },
                    {
                        "Code": "363320",
                        "Name": "修水县",
                        "sort": 6
                    },
                    {
                        "Code": "363320",
                        "Name": "湖口县",
                        "sort": 7
                    },
                    {
                        "Code": "363320",
                        "Name": "都昌县",
                        "sort": 8
                    },
                    {
                        "Code": "363320",
                        "Name": "彭泽县",
                        "sort": 9
                    },
                    {
                        "Code": "363320",
                        "Name": "星子县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "363330",
                "Name": "景德镇市",
                "sort": 3,
                "level": [
                    {
                        "Code": "363330",
                        "Name": "昌江区",
                        "sort": 1
                    },
                    {
                        "Code": "363330",
                        "Name": "珠山区",
                        "sort": 2
                    },
                    {
                        "Code": "363330",
                        "Name": "浮梁县",
                        "sort": 3
                    },
                    {
                        "Code": "363340",
                        "Name": "鄱阳县",
                        "sort": 4
                    },
                    {
                        "Code": "363340",
                        "Name": "婺源县",
                        "sort": 5
                    },
                    {
                        "Code": "363330",
                        "Name": "乐平市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "363340",
                "Name": "上饶市",
                "sort": 4,
                "level": [
                    {
                        "Code": "363340",
                        "Name": "信州区",
                        "sort": 1
                    },
                    {
                        "Code": "363340",
                        "Name": "上饶县",
                        "sort": 2
                    },
                    {
                        "Code": "363340",
                        "Name": "德兴市",
                        "sort": 3
                    },
                    {
                        "Code": "363340",
                        "Name": "横峰县",
                        "sort": 4
                    },
                    {
                        "Code": "363340",
                        "Name": "弋阳县",
                        "sort": 5
                    },
                    {
                        "Code": "363340",
                        "Name": "铅山县",
                        "sort": 6
                    },
                    {
                        "Code": "363340",
                        "Name": "广丰县",
                        "sort": 7
                    },
                    {
                        "Code": "363340",
                        "Name": "玉山县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "363350",
                "Name": "鹰潭市",
                "sort": 5,
                "level": [
                    {
                        "Code": "363350",
                        "Name": "月湖区",
                        "sort": 1
                    },
                    {
                        "Code": "363340",
                        "Name": "余干县",
                        "sort": 2
                    },
                    {
                        "Code": "363350",
                        "Name": "余江县",
                        "sort": 3
                    },
                    {
                        "Code": "363440",
                        "Name": "资溪县",
                        "sort": 4
                    },
                    {
                        "Code": "363350",
                        "Name": "贵溪市",
                        "sort": 5
                    },
                    {
                        "Code": "363340",
                        "Name": "万年县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "363360",
                "Name": "宜春市",
                "sort": 6,
                "level": [
                    {
                        "Code": "363360",
                        "Name": "袁州区",
                        "sort": 1
                    },
                    {
                        "Code": "363360",
                        "Name": "万载县",
                        "sort": 2
                    },
                    {
                        "Code": "363360",
                        "Name": "铜鼓县",
                        "sort": 3
                    },
                    {
                        "Code": "363360",
                        "Name": "宜丰县",
                        "sort": 4
                    },
                    {
                        "Code": "363360",
                        "Name": "上高县",
                        "sort": 5
                    },
                    {
                        "Code": "363380",
                        "Name": "分宜县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "363370",
                "Name": "萍乡市",
                "sort": 7,
                "level": [
                    {
                        "Code": "363370",
                        "Name": "安源区",
                        "sort": 1
                    },
                    {
                        "Code": "363370",
                        "Name": "上栗县",
                        "sort": 2
                    },
                    {
                        "Code": "363370",
                        "Name": "湘东区",
                        "sort": 3
                    },
                    {
                        "Code": "363370",
                        "Name": "莲花县",
                        "sort": 4
                    },
                    {
                        "Code": "363370",
                        "Name": "芦溪县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "363380",
                "Name": "新余市",
                "sort": 8,
                "level": [
                    {
                        "Code": "363380",
                        "Name": "渝水区",
                        "sort": 1
                    }
                ]
            },
            {
                "Code": "363410",
                "Name": "赣州市",
                "sort": 9,
                "level": [
                    {
                        "Code": "363410",
                        "Name": "章贡区",
                        "sort": 1
                    },
                    {
                        "Code": "363410",
                        "Name": "赣县",
                        "sort": 2
                    },
                    {
                        "Code": "363410",
                        "Name": "上犹县",
                        "sort": 3
                    },
                    {
                        "Code": "363410",
                        "Name": "崇义县",
                        "sort": 4
                    },
                    {
                        "Code": "363410",
                        "Name": "南康市",
                        "sort": 5
                    },
                    {
                        "Code": "363410",
                        "Name": "大余县",
                        "sort": 6
                    },
                    {
                        "Code": "363410",
                        "Name": "信丰县",
                        "sort": 7
                    },
                    {
                        "Code": "363410",
                        "Name": "龙南县",
                        "sort": 8
                    },
                    {
                        "Code": "363410",
                        "Name": "全南县",
                        "sort": 9
                    },
                    {
                        "Code": "363410",
                        "Name": "定南县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "363430",
                "Name": "吉安市",
                "sort": 10,
                "level": [
                    {
                        "Code": "363430",
                        "Name": "吉州区",
                        "sort": 1
                    },
                    {
                        "Code": "363430",
                        "Name": "青原区",
                        "sort": 2
                    },
                    {
                        "Code": "363430",
                        "Name": "吉安县",
                        "sort": 3
                    },
                    {
                        "Code": "363430",
                        "Name": "安福县",
                        "sort": 4
                    },
                    {
                        "Code": "363430",
                        "Name": "永新县",
                        "sort": 5
                    },
                    {
                        "Code": "363430",
                        "Name": "井冈山市",
                        "sort": 6
                    },
                    {
                        "Code": "363430",
                        "Name": "泰和县",
                        "sort": 7
                    },
                    {
                        "Code": "363430",
                        "Name": "万安县",
                        "sort": 8
                    },
                    {
                        "Code": "363430",
                        "Name": "遂川县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "363440",
                "Name": "抚州市",
                "sort": 11,
                "level": [
                    {
                        "Code": "363440",
                        "Name": "临川区",
                        "sort": 1
                    },
                    {
                        "Code": "363440",
                        "Name": "崇仁县",
                        "sort": 2
                    },
                    {
                        "Code": "363440",
                        "Name": "乐安县",
                        "sort": 3
                    },
                    {
                        "Code": "363440",
                        "Name": "宜黄县",
                        "sort": 4
                    },
                    {
                        "Code": "363440",
                        "Name": "南丰县",
                        "sort": 5
                    },
                    {
                        "Code": "363440",
                        "Name": "黎川县",
                        "sort": 6
                    },
                    {
                        "Code": "363440",
                        "Name": "南城县",
                        "sort": 7
                    },
                    {
                        "Code": "363440",
                        "Name": "金溪县",
                        "sort": 8
                    },
                    {
                        "Code": "363440",
                        "Name": "广昌县",
                        "sort": 9
                    }
                ]
            }
        ]
    },
    {
        "Code": "350000",
        "Name": "福建省",
        "level": [
            {
                "Code": "353500",
                "Name": "福州市",
                "sort": 1,
                "level": [
                    {
                        "Code": "353500",
                        "Name": "鼓楼区",
                        "sort": 1
                    },
                    {
                        "Code": "353500",
                        "Name": "台江区",
                        "sort": 2
                    },
                    {
                        "Code": "353500",
                        "Name": "仓山区",
                        "sort": 3
                    },
                    {
                        "Code": "353500",
                        "Name": "晋安区",
                        "sort": 4
                    },
                    {
                        "Code": "353500",
                        "Name": "马尾区",
                        "sort": 5
                    },
                    {
                        "Code": "353500",
                        "Name": "闽侯县",
                        "sort": 6
                    },
                    {
                        "Code": "353500",
                        "Name": "长乐市",
                        "sort": 7
                    },
                    {
                        "Code": "353500",
                        "Name": "福清市",
                        "sort": 8
                    },
                    {
                        "Code": "353500",
                        "Name": "平潭县",
                        "sort": 9
                    },
                    {
                        "Code": "353500",
                        "Name": "连江县",
                        "sort": 10
                    },
                    {
                        "Code": "353500",
                        "Name": "罗源县",
                        "sort": 11
                    },
                    {
                        "Code": "353500",
                        "Name": "永泰县",
                        "sort": 12
                    },
                    {
                        "Code": "353500",
                        "Name": "闽清县",
                        "sort": 13
                    }
                ]
            },
            {
                "Code": "353511",
                "Name": "莆田市",
                "sort": 2,
                "level": [
                    {
                        "Code": "353511",
                        "Name": "城厢区",
                        "sort": 1
                    },
                    {
                        "Code": "353511",
                        "Name": "涵江区",
                        "sort": 2
                    },
                    {
                        "Code": "353511",
                        "Name": "荔城区",
                        "sort": 3
                    },
                    {
                        "Code": "353511",
                        "Name": "秀屿区",
                        "sort": 4
                    },
                    {
                        "Code": "353511",
                        "Name": "仙游县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "353520",
                "Name": "宁德市",
                "sort": 3,
                "level": [
                    {
                        "Code": "353520",
                        "Name": "蕉城区",
                        "sort": 1
                    },
                    {
                        "Code": "353520",
                        "Name": "古田县",
                        "sort": 2
                    },
                    {
                        "Code": "353520",
                        "Name": "屏南县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "353530",
                "Name": "南平市",
                "sort": 4,
                "level": [
                    {
                        "Code": "353530",
                        "Name": "延平区",
                        "sort": 1
                    },
                    {
                        "Code": "353530",
                        "Name": "建瓯市",
                        "sort": 2
                    },
                    {
                        "Code": "353530",
                        "Name": "顺昌县",
                        "sort": 3
                    },
                    {
                        "Code": "353650",
                        "Name": "将乐县",
                        "sort": 4
                    },
                    {
                        "Code": "353530",
                        "Name": "浦城县",
                        "sort": 5
                    },
                    {
                        "Code": "353530",
                        "Name": "松溪县",
                        "sort": 6
                    },
                    {
                        "Code": "353530",
                        "Name": "政和县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "353610",
                "Name": "厦门市",
                "sort": 5,
                "level": [
                    {
                        "Code": "353610",
                        "Name": "思明区",
                        "sort": 1
                    },
                    {
                        "Code": "353610",
                        "Name": "湖里区",
                        "sort": 2
                    },
                    {
                        "Code": "353610",
                        "Name": "集美区",
                        "sort": 3
                    },
                    {
                        "Code": "353610",
                        "Name": "海沧区",
                        "sort": 4
                    },
                    {
                        "Code": "353610",
                        "Name": "同安区",
                        "sort": 5
                    },
                    {
                        "Code": "353610",
                        "Name": "翔安区",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "353620",
                "Name": "泉州市",
                "sort": 6,
                "level": [
                    {
                        "Code": "353620",
                        "Name": "鲤城区",
                        "sort": 1
                    },
                    {
                        "Code": "353620",
                        "Name": "丰泽区",
                        "sort": 2
                    },
                    {
                        "Code": "353620",
                        "Name": "洛江区",
                        "sort": 3
                    },
                    {
                        "Code": "353620",
                        "Name": "惠安县",
                        "sort": 4
                    },
                    {
                        "Code": "353620",
                        "Name": "晋江市",
                        "sort": 5
                    },
                    {
                        "Code": "353620",
                        "Name": "南安市",
                        "sort": 6
                    },
                    {
                        "Code": "353640",
                        "Name": "上杭县",
                        "sort": 7
                    },
                    {
                        "Code": "353620",
                        "Name": "安溪县",
                        "sort": 8
                    },
                    {
                        "Code": "353620",
                        "Name": "德化县",
                        "sort": 9
                    },
                    {
                        "Code": "353620",
                        "Name": "永春县",
                        "sort": 10
                    },
                    {
                        "Code": "353620",
                        "Name": "石狮市",
                        "sort": 11
                    },
                    {
                        "Code": "353620",
                        "Name": "泉港区",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "353630",
                "Name": "漳州市",
                "sort": 7,
                "level": [
                    {
                        "Code": "353630",
                        "Name": "芗城区",
                        "sort": 1
                    },
                    {
                        "Code": "353630",
                        "Name": "龙文区",
                        "sort": 2
                    },
                    {
                        "Code": "353630",
                        "Name": "龙海市",
                        "sort": 3
                    },
                    {
                        "Code": "353630",
                        "Name": "漳浦县",
                        "sort": 4
                    },
                    {
                        "Code": "353630",
                        "Name": "云霄县",
                        "sort": 5
                    },
                    {
                        "Code": "353630",
                        "Name": "东山县",
                        "sort": 6
                    },
                    {
                        "Code": "353630",
                        "Name": "诏安县",
                        "sort": 7
                    },
                    {
                        "Code": "353630",
                        "Name": "南靖县",
                        "sort": 8
                    },
                    {
                        "Code": "353630",
                        "Name": "平和县",
                        "sort": 9
                    },
                    {
                        "Code": "353630",
                        "Name": "华安县",
                        "sort": 10
                    },
                    {
                        "Code": "353630",
                        "Name": "长泰县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "353640",
                "Name": "龙岩市",
                "sort": 8,
                "level": [
                    {
                        "Code": "353640",
                        "Name": "新罗区",
                        "sort": 1
                    },
                    {
                        "Code": "353640",
                        "Name": "永定县",
                        "sort": 2
                    },
                    {
                        "Code": "353640",
                        "Name": "武平县",
                        "sort": 3
                    },
                    {
                        "Code": "353640",
                        "Name": "漳平市",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "353650",
                "Name": "三明市",
                "sort": 9,
                "level": [
                    {
                        "Code": "353650",
                        "Name": "梅列区",
                        "sort": 1
                    },
                    {
                        "Code": "353650",
                        "Name": "三元区",
                        "sort": 2
                    },
                    {
                        "Code": "353650",
                        "Name": "尤溪县",
                        "sort": 3
                    },
                    {
                        "Code": "353650",
                        "Name": "明溪县",
                        "sort": 4
                    },
                    {
                        "Code": "353650",
                        "Name": "清流县",
                        "sort": 5
                    },
                    {
                        "Code": "353650",
                        "Name": "宁化县",
                        "sort": 6
                    },
                    {
                        "Code": "353650",
                        "Name": "沙县",
                        "sort": 7
                    }
                ]
            }
        ]
    },
    {
        "Code": "500000",
        "Name": "重庆市",
        "level": [
            {
                "Code": "500000",
                "Name": "重庆市",
                "sort": 1,
                "level": [
                    {
                        "Code": "504000",
                        "Name": "渝中区",
                        "sort": 1
                    },
                    {
                        "Code": "504000",
                        "Name": "江北区",
                        "sort": 2
                    },
                    {
                        "Code": "504000",
                        "Name": "沙坪坝区",
                        "sort": 3
                    },
                    {
                        "Code": "504000",
                        "Name": "九龙坡区",
                        "sort": 4
                    },
                    {
                        "Code": "504000",
                        "Name": "巴南区",
                        "sort": 5
                    },
                    {
                        "Code": "504000",
                        "Name": "南岸区",
                        "sort": 6
                    },
                    {
                        "Code": "504000",
                        "Name": "大渡口区",
                        "sort": 7
                    },
                    {
                        "Code": "504000",
                        "Name": "北碚区",
                        "sort": 8
                    },
                    {
                        "Code": "504000",
                        "Name": "万盛区",
                        "sort": 9
                    },
                    {
                        "Code": "504000",
                        "Name": "双桥区",
                        "sort": 10
                    },
                    {
                        "Code": "504000",
                        "Name": "渝北区",
                        "sort": 11
                    },
                    {
                        "Code": "504000",
                        "Name": "长寿区",
                        "sort": 12
                    },
                    {
                        "Code": "504000",
                        "Name": "綦江县",
                        "sort": 13
                    },
                    {
                        "Code": "504000",
                        "Name": "合川市",
                        "sort": 14
                    },
                    {
                        "Code": "504000",
                        "Name": "永川市",
                        "sort": 15
                    },
                    {
                        "Code": "504000",
                        "Name": "江津市",
                        "sort": 16
                    },
                    {
                        "Code": "504000",
                        "Name": "大足县",
                        "sort": 17
                    },
                    {
                        "Code": "504000",
                        "Name": "荣昌县",
                        "sort": 18
                    },
                    {
                        "Code": "504000",
                        "Name": "铜梁县",
                        "sort": 19
                    },
                    {
                        "Code": "504000",
                        "Name": "潼南县",
                        "sort": 20
                    },
                    {
                        "Code": "504000",
                        "Name": "璧山县",
                        "sort": 21
                    },
                    {
                        "Code": "504000",
                        "Name": "万州区",
                        "sort": 22
                    },
                    {
                        "Code": "504000",
                        "Name": "忠县",
                        "sort": 23
                    },
                    {
                        "Code": "504000",
                        "Name": "云阳县",
                        "sort": 24
                    },
                    {
                        "Code": "504000",
                        "Name": "奉节县",
                        "sort": 25
                    },
                    {
                        "Code": "504000",
                        "Name": "巫山县",
                        "sort": 26
                    },
                    {
                        "Code": "504000",
                        "Name": "梁平县",
                        "sort": 27
                    },
                    {
                        "Code": "504000",
                        "Name": "开县",
                        "sort": 28
                    },
                    {
                        "Code": "504000",
                        "Name": "巫溪县",
                        "sort": 29
                    },
                    {
                        "Code": "504000",
                        "Name": "城口县",
                        "sort": 30
                    },
                    {
                        "Code": "504000",
                        "Name": "涪陵区",
                        "sort": 31
                    },
                    {
                        "Code": "504000",
                        "Name": "丰都县",
                        "sort": 32
                    },
                    {
                        "Code": "504000",
                        "Name": "垫江县",
                        "sort": 33
                    },
                    {
                        "Code": "504000",
                        "Name": "南川市",
                        "sort": 34
                    },
                    {
                        "Code": "504000",
                        "Name": "武隆县",
                        "sort": 35
                    },
                    {
                        "Code": "504000",
                        "Name": "黔江区",
                        "sort": 36
                    },
                    {
                        "Code": "504000",
                        "Name": "石柱土家族自治县",
                        "sort": 37
                    },
                    {
                        "Code": "504000",
                        "Name": "彭水苗族土家族自治县",
                        "sort": 38
                    },
                    {
                        "Code": "504000",
                        "Name": "酉阳土家族苗族自治县",
                        "sort": 39
                    },
                    {
                        "Code": "504000",
                        "Name": "秀山土家族苗族自治县",
                        "sort": 40
                    }
                ]
            }
        ]
    },
    {
        "Code": "430000",
        "Name": "湖南省",
        "level": [
            {
                "Code": "434100",
                "Name": "长沙市",
                "sort": 1,
                "level": [
                    {
                        "Code": "434100",
                        "Name": "芙蓉区",
                        "sort": 1
                    },
                    {
                        "Code": "434100",
                        "Name": "天心区",
                        "sort": 2
                    },
                    {
                        "Code": "434100",
                        "Name": "开福区",
                        "sort": 3
                    },
                    {
                        "Code": "434100",
                        "Name": "雨花区",
                        "sort": 4
                    },
                    {
                        "Code": "434100",
                        "Name": "岳麓区",
                        "sort": 5
                    },
                    {
                        "Code": "434100",
                        "Name": "长沙县",
                        "sort": 6
                    },
                    {
                        "Code": "434100",
                        "Name": "望城县",
                        "sort": 7
                    },
                    {
                        "Code": "434100",
                        "Name": "浏阳市",
                        "sort": 8
                    },
                    {
                        "Code": "434100",
                        "Name": "宁乡县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "434111",
                "Name": "湘潭市",
                "sort": 2,
                "level": [
                    {
                        "Code": "434111",
                        "Name": "雨湖区",
                        "sort": 1
                    },
                    {
                        "Code": "434111",
                        "Name": "岳塘区",
                        "sort": 2
                    },
                    {
                        "Code": "434111",
                        "Name": "湘潭县",
                        "sort": 3
                    },
                    {
                        "Code": "434111",
                        "Name": "韶山市",
                        "sort": 4
                    },
                    {
                        "Code": "434111",
                        "Name": "湘乡市",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "434120",
                "Name": "株洲市",
                "sort": 3,
                "level": [
                    {
                        "Code": "434120",
                        "Name": "石峰区",
                        "sort": 1
                    },
                    {
                        "Code": "434120",
                        "Name": "芦淞区",
                        "sort": 2
                    },
                    {
                        "Code": "434120",
                        "Name": "荷塘区",
                        "sort": 3
                    },
                    {
                        "Code": "434120",
                        "Name": "天元区",
                        "sort": 4
                    },
                    {
                        "Code": "434120",
                        "Name": "株洲县",
                        "sort": 5
                    },
                    {
                        "Code": "434120",
                        "Name": "醴陵市",
                        "sort": 6
                    },
                    {
                        "Code": "434120",
                        "Name": "攸县",
                        "sort": 7
                    },
                    {
                        "Code": "434120",
                        "Name": "茶陵县",
                        "sort": 8
                    },
                    {
                        "Code": "434120",
                        "Name": "炎陵县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "434130",
                "Name": "益阳市",
                "sort": 4,
                "level": [
                    {
                        "Code": "434130",
                        "Name": "赫山区",
                        "sort": 1
                    },
                    {
                        "Code": "434130",
                        "Name": "南县",
                        "sort": 2
                    },
                    {
                        "Code": "434130",
                        "Name": "资阳区",
                        "sort": 3
                    },
                    {
                        "Code": "434130",
                        "Name": "沅江市",
                        "sort": 4
                    },
                    {
                        "Code": "434130",
                        "Name": "桃江县",
                        "sort": 5
                    },
                    {
                        "Code": "434130",
                        "Name": "安化县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "434140",
                "Name": "岳阳市",
                "sort": 5,
                "level": [
                    {
                        "Code": "434140",
                        "Name": "岳阳楼区",
                        "sort": 1
                    },
                    {
                        "Code": "434140",
                        "Name": "君山区",
                        "sort": 2
                    },
                    {
                        "Code": "434140",
                        "Name": "云溪区",
                        "sort": 3
                    },
                    {
                        "Code": "434140",
                        "Name": "岳阳县",
                        "sort": 4
                    },
                    {
                        "Code": "434140",
                        "Name": "华容县",
                        "sort": 5
                    },
                    {
                        "Code": "434140",
                        "Name": "临湘市",
                        "sort": 6
                    },
                    {
                        "Code": "434140",
                        "Name": "汨罗市",
                        "sort": 7
                    },
                    {
                        "Code": "434140",
                        "Name": "平江县",
                        "sort": 8
                    },
                    {
                        "Code": "434140",
                        "Name": "湘阴县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "434150",
                "Name": "常德市",
                "sort": 6,
                "level": [
                    {
                        "Code": "434150",
                        "Name": "武陵区",
                        "sort": 1
                    },
                    {
                        "Code": "434150",
                        "Name": "鼎城区",
                        "sort": 2
                    },
                    {
                        "Code": "434150",
                        "Name": "临澧县",
                        "sort": 3
                    },
                    {
                        "Code": "434150",
                        "Name": "石门县",
                        "sort": 4
                    },
                    {
                        "Code": "434150",
                        "Name": "津市市",
                        "sort": 5
                    },
                    {
                        "Code": "434150",
                        "Name": "澧县",
                        "sort": 6
                    },
                    {
                        "Code": "434150",
                        "Name": "安乡县",
                        "sort": 7
                    },
                    {
                        "Code": "434150",
                        "Name": "桃源县",
                        "sort": 8
                    },
                    {
                        "Code": "434150",
                        "Name": "汉寿县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "434160",
                "Name": "湘西土家族苗族自治州",
                "sort": 7,
                "level": [
                    {
                        "Code": "434160",
                        "Name": "吉首市",
                        "sort": 1
                    },
                    {
                        "Code": "434160",
                        "Name": "泸溪县",
                        "sort": 2
                    },
                    {
                        "Code": "434160",
                        "Name": "凤凰县",
                        "sort": 3
                    },
                    {
                        "Code": "434160",
                        "Name": "古丈县",
                        "sort": 4
                    },
                    {
                        "Code": "434160",
                        "Name": "花垣县",
                        "sort": 5
                    },
                    {
                        "Code": "434160",
                        "Name": "保靖县",
                        "sort": 6
                    },
                    {
                        "Code": "434160",
                        "Name": "永顺县",
                        "sort": 7
                    },
                    {
                        "Code": "434160",
                        "Name": "龙山县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "434170",
                "Name": "娄底市",
                "sort": 8,
                "level": [
                    {
                        "Code": "434170",
                        "Name": "娄星区",
                        "sort": 1
                    },
                    {
                        "Code": "434170",
                        "Name": "涟源市",
                        "sort": 2
                    },
                    {
                        "Code": "434170",
                        "Name": "冷水江市",
                        "sort": 3
                    },
                    {
                        "Code": "434170",
                        "Name": "新化县",
                        "sort": 4
                    },
                    {
                        "Code": "434170",
                        "Name": "双峰县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "434180",
                "Name": "怀化市",
                "sort": 9,
                "level": [
                    {
                        "Code": "434180",
                        "Name": "鹤城区",
                        "sort": 1
                    },
                    {
                        "Code": "434180",
                        "Name": "中方县",
                        "sort": 2
                    },
                    {
                        "Code": "434180",
                        "Name": "洪江市",
                        "sort": 3
                    },
                    {
                        "Code": "434180",
                        "Name": "会同县",
                        "sort": 4
                    },
                    {
                        "Code": "434180",
                        "Name": "靖州苗族侗族自治县",
                        "sort": 5
                    },
                    {
                        "Code": "434180",
                        "Name": "通道侗族自治县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "434210",
                "Name": "衡阳市",
                "sort": 10,
                "level": [
                    {
                        "Code": "434210",
                        "Name": "蒸湘区",
                        "sort": 1
                    },
                    {
                        "Code": "434210",
                        "Name": "珠晖区",
                        "sort": 2
                    },
                    {
                        "Code": "434210",
                        "Name": "雁峰区",
                        "sort": 3
                    },
                    {
                        "Code": "434210",
                        "Name": "石鼓区",
                        "sort": 4
                    },
                    {
                        "Code": "434210",
                        "Name": "衡南县",
                        "sort": 5
                    },
                    {
                        "Code": "434210",
                        "Name": "衡阳县",
                        "sort": 6
                    },
                    {
                        "Code": "434210",
                        "Name": "衡山县",
                        "sort": 7
                    },
                    {
                        "Code": "434210",
                        "Name": "衡东县",
                        "sort": 8
                    },
                    {
                        "Code": "434210",
                        "Name": "常宁市",
                        "sort": 9
                    },
                    {
                        "Code": "434210",
                        "Name": "祁东县",
                        "sort": 10
                    },
                    {
                        "Code": "434210",
                        "Name": "耒阳市",
                        "sort": 11
                    },
                    {
                        "Code": "434210",
                        "Name": "南岳区",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "434220",
                "Name": "邵阳市",
                "sort": 11,
                "level": [
                    {
                        "Code": "434220",
                        "Name": "大祥区",
                        "sort": 1
                    },
                    {
                        "Code": "434220",
                        "Name": "双清区",
                        "sort": 2
                    },
                    {
                        "Code": "434220",
                        "Name": "北塔区",
                        "sort": 3
                    },
                    {
                        "Code": "434220",
                        "Name": "邵阳县",
                        "sort": 4
                    },
                    {
                        "Code": "434220",
                        "Name": "隆回县",
                        "sort": 5
                    },
                    {
                        "Code": "434220",
                        "Name": "洞口县",
                        "sort": 6
                    },
                    {
                        "Code": "434220",
                        "Name": "武冈市",
                        "sort": 7
                    },
                    {
                        "Code": "434220",
                        "Name": "城步苗族自治县",
                        "sort": 8
                    },
                    {
                        "Code": "434220",
                        "Name": "绥宁县",
                        "sort": 9
                    },
                    {
                        "Code": "434220",
                        "Name": "新宁县",
                        "sort": 10
                    },
                    {
                        "Code": "434220",
                        "Name": "邵东县",
                        "sort": 11
                    },
                    {
                        "Code": "434220",
                        "Name": "新邵县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "434230",
                "Name": "郴州市",
                "sort": 12,
                "level": [
                    {
                        "Code": "434230",
                        "Name": "北湖区",
                        "sort": 1
                    },
                    {
                        "Code": "434230",
                        "Name": "苏仙区",
                        "sort": 2
                    },
                    {
                        "Code": "434230",
                        "Name": "永兴县",
                        "sort": 3
                    },
                    {
                        "Code": "434230",
                        "Name": "资兴市",
                        "sort": 4
                    },
                    {
                        "Code": "434230",
                        "Name": "桂东县",
                        "sort": 5
                    },
                    {
                        "Code": "434230",
                        "Name": "安仁县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "434250",
                "Name": "永州市",
                "sort": 13,
                "level": [
                    {
                        "Code": "434250",
                        "Name": "冷水滩区",
                        "sort": 1
                    },
                    {
                        "Code": "434250",
                        "Name": "零陵区",
                        "sort": 2
                    },
                    {
                        "Code": "434250",
                        "Name": "双牌县",
                        "sort": 3
                    },
                    {
                        "Code": "434250",
                        "Name": "道县",
                        "sort": 4
                    },
                    {
                        "Code": "434250",
                        "Name": "江永县",
                        "sort": 5
                    },
                    {
                        "Code": "434250",
                        "Name": "江华瑶族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "434250",
                        "Name": "宁远县",
                        "sort": 7
                    },
                    {
                        "Code": "434250",
                        "Name": "新田县",
                        "sort": 8
                    },
                    {
                        "Code": "434250",
                        "Name": "蓝山县",
                        "sort": 9
                    },
                    {
                        "Code": "434250",
                        "Name": "东安县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "434270",
                "Name": "张家界市",
                "sort": 14,
                "level": [
                    {
                        "Code": "434270",
                        "Name": "永定区",
                        "sort": 1
                    },
                    {
                        "Code": "434270",
                        "Name": "桑植县",
                        "sort": 2
                    },
                    {
                        "Code": "434270",
                        "Name": "慈利县",
                        "sort": 3
                    },
                    {
                        "Code": "434270",
                        "Name": "武陵源区",
                        "sort": 4
                    }
                ]
            }
        ]
    },
    {
        "Code": "420000",
        "Name": "湖北省",
        "level": [
            {
                "Code": "424300",
                "Name": "武汉市",
                "sort": 1,
                "level": [
                    {
                        "Code": "424300",
                        "Name": "江岸区",
                        "sort": 1
                    },
                    {
                        "Code": "424300",
                        "Name": "江汉区",
                        "sort": 2
                    },
                    {
                        "Code": "424300",
                        "Name": "硚口区",
                        "sort": 3
                    },
                    {
                        "Code": "424300",
                        "Name": "东西湖区",
                        "sort": 4
                    },
                    {
                        "Code": "424300",
                        "Name": "汉阳区",
                        "sort": 5
                    },
                    {
                        "Code": "424300",
                        "Name": "武昌区",
                        "sort": 6
                    },
                    {
                        "Code": "424300",
                        "Name": "洪山区",
                        "sort": 7
                    },
                    {
                        "Code": "424300",
                        "Name": "青山区",
                        "sort": 8
                    },
                    {
                        "Code": "424300",
                        "Name": "汉南区",
                        "sort": 9
                    },
                    {
                        "Code": "424300",
                        "Name": "蔡甸区",
                        "sort": 10
                    },
                    {
                        "Code": "424300",
                        "Name": "江夏区",
                        "sort": 11
                    },
                    {
                        "Code": "424300",
                        "Name": "黄陂区",
                        "sort": 12
                    },
                    {
                        "Code": "424300",
                        "Name": "新洲区",
                        "sort": 13
                    }
                ]
            },
            {
                "Code": "424317",
                "Name": "天门市",
                "sort": 2,
                "level": [
                    {
                        "Code": "424320",
                        "Name": "汉川市",
                        "sort": 1
                    },
                    {
                        "Code": "424317",
                        "Name": "天门市",
                        "sort": 2
                    },
                    {
                        "Code": "424480",
                        "Name": "京山县",
                        "sort": 3
                    },
                    {
                        "Code": "424480",
                        "Name": "沙洋县",
                        "sort": 4
                    },
                    {
                        "Code": "424480",
                        "Name": "钟祥市",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "424320",
                "Name": "孝感市",
                "sort": 3,
                "level": [
                    {
                        "Code": "424320",
                        "Name": "云梦县",
                        "sort": 1
                    },
                    {
                        "Code": "424320",
                        "Name": "孝南区",
                        "sort": 2
                    },
                    {
                        "Code": "424320",
                        "Name": "应城市",
                        "sort": 3
                    },
                    {
                        "Code": "424320",
                        "Name": "安陆市",
                        "sort": 4
                    },
                    {
                        "Code": "424413",
                        "Name": "广水市",
                        "sort": 5
                    },
                    {
                        "Code": "424320",
                        "Name": "大悟县",
                        "sort": 6
                    },
                    {
                        "Code": "424320",
                        "Name": "孝昌县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "424330",
                "Name": "仙桃市",
                "sort": 4,
                "level": [
                    {
                        "Code": "424330",
                        "Name": "仙桃市",
                        "sort": 1
                    },
                    {
                        "Code": "424331",
                        "Name": "潜江市",
                        "sort": 2
                    },
                    {
                        "Code": "424340",
                        "Name": "洪湖市",
                        "sort": 3
                    },
                    {
                        "Code": "424340",
                        "Name": "监利县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "424331",
                "Name": "潜江市",
                "sort": 5,
                "level": [
                    {
                        "Code": "424330",
                        "Name": "仙桃市",
                        "sort": 1
                    },
                    {
                        "Code": "424331",
                        "Name": "潜江市",
                        "sort": 2
                    },
                    {
                        "Code": "424340",
                        "Name": "洪湖市",
                        "sort": 3
                    },
                    {
                        "Code": "424340",
                        "Name": "监利县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "424340",
                "Name": "荆州市",
                "sort": 6,
                "level": [
                    {
                        "Code": "424340",
                        "Name": "沙市区",
                        "sort": 1
                    },
                    {
                        "Code": "424340",
                        "Name": "荆州区",
                        "sort": 2
                    },
                    {
                        "Code": "424340",
                        "Name": "江陵县",
                        "sort": 3
                    },
                    {
                        "Code": "424340",
                        "Name": "松滋市",
                        "sort": 4
                    },
                    {
                        "Code": "424340",
                        "Name": "公安县",
                        "sort": 5
                    },
                    {
                        "Code": "424340",
                        "Name": "石首市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "424350",
                "Name": "黄石市",
                "sort": 7,
                "level": [
                    {
                        "Code": "424350",
                        "Name": "阳新县",
                        "sort": 1
                    },
                    {
                        "Code": "424350",
                        "Name": "西塞山区",
                        "sort": 2
                    },
                    {
                        "Code": "424350",
                        "Name": "黄石港区",
                        "sort": 3
                    },
                    {
                        "Code": "424350",
                        "Name": "下陆区",
                        "sort": 4
                    },
                    {
                        "Code": "424350",
                        "Name": "铁山区",
                        "sort": 5
                    },
                    {
                        "Code": "424350",
                        "Name": "大冶市",
                        "sort": 6
                    },
                    {
                        "Code": "424380",
                        "Name": "蕲春县",
                        "sort": 7
                    },
                    {
                        "Code": "424380",
                        "Name": "武穴市",
                        "sort": 8
                    },
                    {
                        "Code": "424380",
                        "Name": "黄梅县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "424360",
                "Name": "鄂州市",
                "sort": 8,
                "level": [
                    {
                        "Code": "424360",
                        "Name": "鄂城区",
                        "sort": 1
                    },
                    {
                        "Code": "424360",
                        "Name": "华容区",
                        "sort": 2
                    },
                    {
                        "Code": "424360",
                        "Name": "梁子湖区",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "424370",
                "Name": "咸宁市",
                "sort": 9,
                "level": [
                    {
                        "Code": "424370",
                        "Name": "咸安区",
                        "sort": 1
                    },
                    {
                        "Code": "424370",
                        "Name": "嘉鱼县",
                        "sort": 2
                    },
                    {
                        "Code": "424370",
                        "Name": "赤壁市",
                        "sort": 3
                    },
                    {
                        "Code": "424370",
                        "Name": "通城县",
                        "sort": 4
                    },
                    {
                        "Code": "424370",
                        "Name": "崇阳县",
                        "sort": 5
                    },
                    {
                        "Code": "424370",
                        "Name": "通山县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "424380",
                "Name": "黄冈市",
                "sort": 10,
                "level": [
                    {
                        "Code": "424380",
                        "Name": "黄州区",
                        "sort": 1
                    },
                    {
                        "Code": "424380",
                        "Name": "浠水县",
                        "sort": 2
                    },
                    {
                        "Code": "424380",
                        "Name": "麻城市",
                        "sort": 3
                    },
                    {
                        "Code": "424380",
                        "Name": "红安县",
                        "sort": 4
                    },
                    {
                        "Code": "424380",
                        "Name": "罗田县",
                        "sort": 5
                    },
                    {
                        "Code": "424380",
                        "Name": "英山县",
                        "sort": 6
                    },
                    {
                        "Code": "424380",
                        "Name": "团风县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "424410",
                "Name": "襄樊市",
                "sort": 11,
                "level": [
                    {
                        "Code": "424410",
                        "Name": "樊城区",
                        "sort": 1
                    },
                    {
                        "Code": "424410",
                        "Name": "襄城区",
                        "sort": 2
                    },
                    {
                        "Code": "424410",
                        "Name": "襄阳区",
                        "sort": 3
                    },
                    {
                        "Code": "424410",
                        "Name": "枣阳市",
                        "sort": 4
                    },
                    {
                        "Code": "424413",
                        "Name": "曾都区",
                        "sort": 5
                    },
                    {
                        "Code": "424410",
                        "Name": "宜城市",
                        "sort": 6
                    },
                    {
                        "Code": "424410",
                        "Name": "南漳县",
                        "sort": 7
                    },
                    {
                        "Code": "424410",
                        "Name": "保康县",
                        "sort": 8
                    },
                    {
                        "Code": "424410",
                        "Name": "谷城县",
                        "sort": 9
                    },
                    {
                        "Code": "424410",
                        "Name": "老河口市",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "424413",
                "Name": "随州市",
                "sort": 12,
                "level": [
                    {
                        "Code": "424410",
                        "Name": "樊城区",
                        "sort": 1
                    },
                    {
                        "Code": "424410",
                        "Name": "襄城区",
                        "sort": 2
                    },
                    {
                        "Code": "424410",
                        "Name": "襄阳区",
                        "sort": 3
                    },
                    {
                        "Code": "424410",
                        "Name": "枣阳市",
                        "sort": 4
                    },
                    {
                        "Code": "424413",
                        "Name": "曾都区",
                        "sort": 5
                    },
                    {
                        "Code": "424410",
                        "Name": "宜城市",
                        "sort": 6
                    },
                    {
                        "Code": "424410",
                        "Name": "南漳县",
                        "sort": 7
                    },
                    {
                        "Code": "424410",
                        "Name": "保康县",
                        "sort": 8
                    },
                    {
                        "Code": "424410",
                        "Name": "谷城县",
                        "sort": 9
                    },
                    {
                        "Code": "424410",
                        "Name": "老河口市",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "424420",
                "Name": "十堰市",
                "sort": 13,
                "level": [
                    {
                        "Code": "424420",
                        "Name": "茅箭区",
                        "sort": 1
                    },
                    {
                        "Code": "424420",
                        "Name": "张湾区",
                        "sort": 2
                    },
                    {
                        "Code": "424420",
                        "Name": "房县",
                        "sort": 3
                    },
                    {
                        "Code": "424420",
                        "Name": "竹山县",
                        "sort": 4
                    },
                    {
                        "Code": "424420",
                        "Name": "竹溪县",
                        "sort": 5
                    },
                    {
                        "Code": "424330",
                        "Name": "神农架林区",
                        "sort": 6
                    },
                    {
                        "Code": "424420",
                        "Name": "郧县",
                        "sort": 7
                    },
                    {
                        "Code": "424420",
                        "Name": "郧西县",
                        "sort": 8
                    },
                    {
                        "Code": "424420",
                        "Name": "丹江口市",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "424424",
                "Name": "神农架林区",
                "sort": 14,
                "level": [
                    {
                        "Code": "424420",
                        "Name": "茅箭区",
                        "sort": 1
                    },
                    {
                        "Code": "424420",
                        "Name": "张湾区",
                        "sort": 2
                    },
                    {
                        "Code": "424420",
                        "Name": "房县",
                        "sort": 3
                    },
                    {
                        "Code": "424420",
                        "Name": "竹山县",
                        "sort": 4
                    },
                    {
                        "Code": "424420",
                        "Name": "竹溪县",
                        "sort": 5
                    },
                    {
                        "Code": "424330",
                        "Name": "神农架林区",
                        "sort": 6
                    },
                    {
                        "Code": "424420",
                        "Name": "郧县",
                        "sort": 7
                    },
                    {
                        "Code": "424420",
                        "Name": "郧西县",
                        "sort": 8
                    },
                    {
                        "Code": "424420",
                        "Name": "丹江口市",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "424430",
                "Name": "宜昌市",
                "sort": 15,
                "level": [
                    {
                        "Code": "424430",
                        "Name": "西陵区",
                        "sort": 1
                    },
                    {
                        "Code": "424430",
                        "Name": "伍家岗区",
                        "sort": 2
                    },
                    {
                        "Code": "424430",
                        "Name": "点军区",
                        "sort": 3
                    },
                    {
                        "Code": "424430",
                        "Name": "猇亭区",
                        "sort": 4
                    },
                    {
                        "Code": "424430",
                        "Name": "夷陵区",
                        "sort": 5
                    },
                    {
                        "Code": "424430",
                        "Name": "枝江市",
                        "sort": 6
                    },
                    {
                        "Code": "424430",
                        "Name": "宜都市",
                        "sort": 7
                    },
                    {
                        "Code": "424430",
                        "Name": "五峰土家族自治县",
                        "sort": 8
                    },
                    {
                        "Code": "424430",
                        "Name": "长阳土家族自治县",
                        "sort": 9
                    },
                    {
                        "Code": "424430",
                        "Name": "秭归县",
                        "sort": 10
                    },
                    {
                        "Code": "424430",
                        "Name": "兴山县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "424450",
                "Name": "恩施土家族苗族自治州",
                "sort": 16,
                "level": [
                    {
                        "Code": "424450",
                        "Name": "恩施市",
                        "sort": 1
                    },
                    {
                        "Code": "424450",
                        "Name": "建始县",
                        "sort": 2
                    },
                    {
                        "Code": "424450",
                        "Name": "利川市",
                        "sort": 3
                    },
                    {
                        "Code": "424450",
                        "Name": "宣恩县",
                        "sort": 4
                    },
                    {
                        "Code": "424450",
                        "Name": "咸丰县",
                        "sort": 5
                    },
                    {
                        "Code": "424450",
                        "Name": "来凤县",
                        "sort": 6
                    },
                    {
                        "Code": "424450",
                        "Name": "鹤峰县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "424480",
                "Name": "荆门市",
                "sort": 17,
                "level": [
                    {
                        "Code": "424480",
                        "Name": "东宝区",
                        "sort": 1
                    },
                    {
                        "Code": "424480",
                        "Name": "掇刀区",
                        "sort": 2
                    }
                ]
            }
        ]
    },
    {
        "Code": "410000",
        "Name": "河南省",
        "level": [
            {
                "Code": "414500",
                "Name": "郑州市",
                "sort": 1,
                "level": [
                    {
                        "Code": "414500",
                        "Name": "二七区",
                        "sort": 1
                    },
                    {
                        "Code": "414500",
                        "Name": "中原区",
                        "sort": 2
                    },
                    {
                        "Code": "414500",
                        "Name": "金水区",
                        "sort": 3
                    },
                    {
                        "Code": "414500",
                        "Name": "管城回族区",
                        "sort": 4
                    },
                    {
                        "Code": "414500",
                        "Name": "上街区",
                        "sort": 5
                    },
                    {
                        "Code": "414500",
                        "Name": "惠济区",
                        "sort": 6
                    },
                    {
                        "Code": "414500",
                        "Name": "荥阳市",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "414530",
                "Name": "新乡市",
                "sort": 2,
                "level": [
                    {
                        "Code": "414530",
                        "Name": "卫滨区",
                        "sort": 1
                    },
                    {
                        "Code": "414530",
                        "Name": "牧野区",
                        "sort": 2
                    },
                    {
                        "Code": "414530",
                        "Name": "凤泉区",
                        "sort": 3
                    },
                    {
                        "Code": "414530",
                        "Name": "卫辉市",
                        "sort": 4
                    },
                    {
                        "Code": "414530",
                        "Name": "延津县",
                        "sort": 5
                    },
                    {
                        "Code": "414530",
                        "Name": "封丘县",
                        "sort": 6
                    },
                    {
                        "Code": "414530",
                        "Name": "长垣县",
                        "sort": 7
                    },
                    {
                        "Code": "414530",
                        "Name": "原阳县",
                        "sort": 8
                    },
                    {
                        "Code": "414530",
                        "Name": "辉县市",
                        "sort": 9
                    },
                    {
                        "Code": "414530",
                        "Name": "新乡县",
                        "sort": 10
                    },
                    {
                        "Code": "414530",
                        "Name": "获嘉县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "414541",
                "Name": "焦作市",
                "sort": 3,
                "level": [
                    {
                        "Code": "414541",
                        "Name": "解放区",
                        "sort": 1
                    },
                    {
                        "Code": "414541",
                        "Name": "山阳区",
                        "sort": 2
                    },
                    {
                        "Code": "414541",
                        "Name": "马村区",
                        "sort": 3
                    },
                    {
                        "Code": "414541",
                        "Name": "中站区",
                        "sort": 4
                    },
                    {
                        "Code": "414541",
                        "Name": "修武县",
                        "sort": 5
                    },
                    {
                        "Code": "414541",
                        "Name": "博爱县",
                        "sort": 6
                    },
                    {
                        "Code": "414730",
                        "Name": "西峡县",
                        "sort": 7
                    },
                    {
                        "Code": "414541",
                        "Name": "沁阳市",
                        "sort": 8
                    },
                    {
                        "Code": "414541",
                        "Name": "济源市",
                        "sort": 9
                    },
                    {
                        "Code": "414541",
                        "Name": "孟州市",
                        "sort": 10
                    },
                    {
                        "Code": "414541",
                        "Name": "温县",
                        "sort": 11
                    },
                    {
                        "Code": "414541",
                        "Name": "武陟县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "414546",
                "Name": "济源市",
                "sort": 4,
                "level": [
                    {
                        "Code": "414541",
                        "Name": "解放区",
                        "sort": 1
                    },
                    {
                        "Code": "414541",
                        "Name": "山阳区",
                        "sort": 2
                    },
                    {
                        "Code": "414541",
                        "Name": "马村区",
                        "sort": 3
                    },
                    {
                        "Code": "414541",
                        "Name": "中站区",
                        "sort": 4
                    },
                    {
                        "Code": "414541",
                        "Name": "修武县",
                        "sort": 5
                    },
                    {
                        "Code": "414541",
                        "Name": "博爱县",
                        "sort": 6
                    },
                    {
                        "Code": "414730",
                        "Name": "西峡县",
                        "sort": 7
                    },
                    {
                        "Code": "414541",
                        "Name": "沁阳市",
                        "sort": 8
                    },
                    {
                        "Code": "414541",
                        "Name": "济源市",
                        "sort": 9
                    },
                    {
                        "Code": "414541",
                        "Name": "孟州市",
                        "sort": 10
                    },
                    {
                        "Code": "414541",
                        "Name": "温县",
                        "sort": 11
                    },
                    {
                        "Code": "414541",
                        "Name": "武陟县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "414550",
                "Name": "安阳市",
                "sort": 5,
                "level": [
                    {
                        "Code": "414550",
                        "Name": "文峰区",
                        "sort": 1
                    },
                    {
                        "Code": "414550",
                        "Name": "北关区",
                        "sort": 2
                    },
                    {
                        "Code": "414550",
                        "Name": "龙安区",
                        "sort": 3
                    },
                    {
                        "Code": "414550",
                        "Name": "殷都区",
                        "sort": 4
                    },
                    {
                        "Code": "414550",
                        "Name": "安阳县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "414570",
                "Name": "濮阳市",
                "sort": 6,
                "level": [
                    {
                        "Code": "414570",
                        "Name": "华龙区",
                        "sort": 1
                    },
                    {
                        "Code": "414570",
                        "Name": "濮阳县",
                        "sort": 2
                    },
                    {
                        "Code": "414570",
                        "Name": "清丰县",
                        "sort": 3
                    },
                    {
                        "Code": "414570",
                        "Name": "南乐县",
                        "sort": 4
                    },
                    {
                        "Code": "414570",
                        "Name": "范县",
                        "sort": 5
                    },
                    {
                        "Code": "414570",
                        "Name": "台前县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "414580",
                "Name": "鹤壁市",
                "sort": 7,
                "level": [
                    {
                        "Code": "414580",
                        "Name": "山城区",
                        "sort": 1
                    },
                    {
                        "Code": "414580",
                        "Name": "淇滨区",
                        "sort": 2
                    },
                    {
                        "Code": "414580",
                        "Name": "鹤山区",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "414610",
                "Name": "许昌市",
                "sort": 8,
                "level": [
                    {
                        "Code": "414610",
                        "Name": "魏都区",
                        "sort": 1
                    },
                    {
                        "Code": "414610",
                        "Name": "许昌县",
                        "sort": 2
                    },
                    {
                        "Code": "414610",
                        "Name": "鄢陵县",
                        "sort": 3
                    },
                    {
                        "Code": "414660",
                        "Name": "太康县",
                        "sort": 4
                    },
                    {
                        "Code": "414610",
                        "Name": "长葛市",
                        "sort": 5
                    },
                    {
                        "Code": "414610",
                        "Name": "禹州市",
                        "sort": 6
                    },
                    {
                        "Code": "414610",
                        "Name": "襄城县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "414620",
                "Name": "漯河市",
                "sort": 9,
                "level": [
                    {
                        "Code": "414620",
                        "Name": "源汇区",
                        "sort": 1
                    },
                    {
                        "Code": "414620",
                        "Name": "郾城区",
                        "sort": 2
                    },
                    {
                        "Code": "414620",
                        "Name": "舞阳县",
                        "sort": 3
                    },
                    {
                        "Code": "414670",
                        "Name": "舞钢市",
                        "sort": 4
                    },
                    {
                        "Code": "414620",
                        "Name": "临颍县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "414640",
                "Name": "信阳市",
                "sort": 10,
                "level": [
                    {
                        "Code": "414640",
                        "Name": "浉河区",
                        "sort": 1
                    },
                    {
                        "Code": "414640",
                        "Name": "平桥区",
                        "sort": 2
                    },
                    {
                        "Code": "414640",
                        "Name": "罗山县",
                        "sort": 3
                    },
                    {
                        "Code": "414640",
                        "Name": "息县",
                        "sort": 4
                    },
                    {
                        "Code": "414640",
                        "Name": "淮滨县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "414660",
                "Name": "周口市",
                "sort": 11,
                "level": [
                    {
                        "Code": "414660",
                        "Name": "淮阳县",
                        "sort": 1
                    }
                ]
            },
            {
                "Code": "414670",
                "Name": "平顶山市",
                "sort": 12,
                "level": [
                    {
                        "Code": "414670",
                        "Name": "卫东区",
                        "sort": 1
                    },
                    {
                        "Code": "414670",
                        "Name": "湛河区",
                        "sort": 2
                    },
                    {
                        "Code": "414670",
                        "Name": "新华区",
                        "sort": 3
                    },
                    {
                        "Code": "414670",
                        "Name": "石龙区",
                        "sort": 4
                    },
                    {
                        "Code": "414670",
                        "Name": "郏县",
                        "sort": 5
                    },
                    {
                        "Code": "414670",
                        "Name": "叶县",
                        "sort": 6
                    },
                    {
                        "Code": "414670",
                        "Name": "鲁山县",
                        "sort": 7
                    },
                    {
                        "Code": "414670",
                        "Name": "宝丰县",
                        "sort": 8
                    },
                    {
                        "Code": "414670",
                        "Name": "汝州市",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "414710",
                "Name": "洛阳市",
                "sort": 13,
                "level": [
                    {
                        "Code": "414710",
                        "Name": "西工区",
                        "sort": 1
                    },
                    {
                        "Code": "414710",
                        "Name": "老城区",
                        "sort": 2
                    },
                    {
                        "Code": "414710",
                        "Name": "涧西区",
                        "sort": 3
                    },
                    {
                        "Code": "414710",
                        "Name": "洛龙区",
                        "sort": 4
                    },
                    {
                        "Code": "414710",
                        "Name": "吉利区",
                        "sort": 5
                    },
                    {
                        "Code": "414710",
                        "Name": "孟津县",
                        "sort": 6
                    },
                    {
                        "Code": "414710",
                        "Name": "汝阳县",
                        "sort": 7
                    },
                    {
                        "Code": "414710",
                        "Name": "伊川县",
                        "sort": 8
                    },
                    {
                        "Code": "414710",
                        "Name": "嵩县",
                        "sort": 9
                    },
                    {
                        "Code": "414710",
                        "Name": "栾川县",
                        "sort": 10
                    },
                    {
                        "Code": "414710",
                        "Name": "宜阳县",
                        "sort": 11
                    },
                    {
                        "Code": "414710",
                        "Name": "洛宁县",
                        "sort": 12
                    },
                    {
                        "Code": "414710",
                        "Name": "新安县",
                        "sort": 13
                    },
                    {
                        "Code": "414710",
                        "Name": "偃师市",
                        "sort": 14
                    }
                ]
            },
            {
                "Code": "414720",
                "Name": "三门峡市",
                "sort": 14,
                "level": [
                    {
                        "Code": "414720",
                        "Name": "湖滨区",
                        "sort": 1
                    },
                    {
                        "Code": "414720",
                        "Name": "陕县",
                        "sort": 2
                    },
                    {
                        "Code": "414720",
                        "Name": "卢氏县",
                        "sort": 3
                    },
                    {
                        "Code": "414720",
                        "Name": "义马市",
                        "sort": 4
                    },
                    {
                        "Code": "414720",
                        "Name": "渑池县",
                        "sort": 5
                    },
                    {
                        "Code": "414720",
                        "Name": "灵宝市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "414730",
                "Name": "南阳市",
                "sort": 15,
                "level": [
                    {
                        "Code": "414730",
                        "Name": "卧龙区",
                        "sort": 1
                    },
                    {
                        "Code": "414730",
                        "Name": "宛城区",
                        "sort": 2
                    },
                    {
                        "Code": "414730",
                        "Name": "方城县",
                        "sort": 3
                    },
                    {
                        "Code": "414730",
                        "Name": "社旗县",
                        "sort": 4
                    },
                    {
                        "Code": "414730",
                        "Name": "唐河县",
                        "sort": 5
                    },
                    {
                        "Code": "414730",
                        "Name": "新野县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "414750",
                "Name": "开封市",
                "sort": 16,
                "level": [
                    {
                        "Code": "414750",
                        "Name": "鼓楼区",
                        "sort": 1
                    },
                    {
                        "Code": "414750",
                        "Name": "顺河回族区",
                        "sort": 2
                    },
                    {
                        "Code": "414750",
                        "Name": "禹王台区",
                        "sort": 3
                    },
                    {
                        "Code": "414750",
                        "Name": "金明区",
                        "sort": 4
                    },
                    {
                        "Code": "414750",
                        "Name": "龙亭区",
                        "sort": 5
                    },
                    {
                        "Code": "414750",
                        "Name": "开封县",
                        "sort": 6
                    },
                    {
                        "Code": "414750",
                        "Name": "杞县",
                        "sort": 7
                    },
                    {
                        "Code": "414750",
                        "Name": "兰考县",
                        "sort": 8
                    },
                    {
                        "Code": "414750",
                        "Name": "通许县",
                        "sort": 9
                    },
                    {
                        "Code": "414750",
                        "Name": "尉氏县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "414760",
                "Name": "商丘市",
                "sort": 17,
                "level": [
                    {
                        "Code": "414760",
                        "Name": "梁园区",
                        "sort": 1
                    },
                    {
                        "Code": "414760",
                        "Name": "睢阳区",
                        "sort": 2
                    },
                    {
                        "Code": "414760",
                        "Name": "柘城县",
                        "sort": 3
                    },
                    {
                        "Code": "414760",
                        "Name": "虞城县",
                        "sort": 4
                    },
                    {
                        "Code": "414760",
                        "Name": "夏邑县",
                        "sort": 5
                    },
                    {
                        "Code": "414760",
                        "Name": "永城市",
                        "sort": 6
                    },
                    {
                        "Code": "414760",
                        "Name": "宁陵县",
                        "sort": 7
                    },
                    {
                        "Code": "414760",
                        "Name": "民权县",
                        "sort": 8
                    },
                    {
                        "Code": "414760",
                        "Name": "睢县",
                        "sort": 9
                    }
                ]
            }
        ]
    },
    {
        "Code": "440000",
        "Name": "广东省",
        "level": [
            {
                "Code": "445100",
                "Name": "广州市",
                "sort": 1,
                "level": [
                    {
                        "Code": "445100",
                        "Name": "越秀区",
                        "sort": 1
                    },
                    {
                        "Code": "445100",
                        "Name": "天河区",
                        "sort": 2
                    },
                    {
                        "Code": "445100",
                        "Name": "荔湾区",
                        "sort": 3
                    },
                    {
                        "Code": "445100",
                        "Name": "白云区",
                        "sort": 4
                    },
                    {
                        "Code": "445100",
                        "Name": "海珠区",
                        "sort": 5
                    },
                    {
                        "Code": "445100",
                        "Name": "黄埔区",
                        "sort": 6
                    },
                    {
                        "Code": "445100",
                        "Name": "萝岗区",
                        "sort": 7
                    },
                    {
                        "Code": "445100",
                        "Name": "花都区",
                        "sort": 8
                    },
                    {
                        "Code": "445100",
                        "Name": "从化市",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "445115",
                "Name": "清远市",
                "sort": 2,
                "level": [
                    {
                        "Code": "445100",
                        "Name": "增城市",
                        "sort": 1
                    },
                    {
                        "Code": "445120",
                        "Name": "新丰县",
                        "sort": 2
                    },
                    {
                        "Code": "445100",
                        "Name": "番禺区",
                        "sort": 3
                    },
                    {
                        "Code": "445100",
                        "Name": "南沙区",
                        "sort": 4
                    },
                    {
                        "Code": "445115",
                        "Name": "清城区",
                        "sort": 5
                    },
                    {
                        "Code": "445115",
                        "Name": "佛冈县",
                        "sort": 6
                    },
                    {
                        "Code": "445115",
                        "Name": "清新县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "445120",
                "Name": "韶关市",
                "sort": 3,
                "level": [
                    {
                        "Code": "445120",
                        "Name": "浈江区",
                        "sort": 1
                    },
                    {
                        "Code": "445120",
                        "Name": "武江区",
                        "sort": 2
                    },
                    {
                        "Code": "445120",
                        "Name": "曲江区",
                        "sort": 3
                    },
                    {
                        "Code": "445120",
                        "Name": "乐昌市",
                        "sort": 4
                    },
                    {
                        "Code": "445120",
                        "Name": "仁化县",
                        "sort": 5
                    },
                    {
                        "Code": "445120",
                        "Name": "南雄市",
                        "sort": 6
                    },
                    {
                        "Code": "445120",
                        "Name": "始兴县",
                        "sort": 7
                    },
                    {
                        "Code": "445120",
                        "Name": "翁源县",
                        "sort": 8
                    },
                    {
                        "Code": "445120",
                        "Name": "乳源瑶族自治县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "445140",
                "Name": "梅州市",
                "sort": 4,
                "level": [
                    {
                        "Code": "445140",
                        "Name": "梅江区",
                        "sort": 1
                    },
                    {
                        "Code": "445140",
                        "Name": "蕉岭县",
                        "sort": 2
                    },
                    {
                        "Code": "445140",
                        "Name": "大埔县",
                        "sort": 3
                    },
                    {
                        "Code": "445140",
                        "Name": "丰顺县",
                        "sort": 4
                    },
                    {
                        "Code": "445140",
                        "Name": "五华县",
                        "sort": 5
                    },
                    {
                        "Code": "445140",
                        "Name": "兴宁市",
                        "sort": 6
                    },
                    {
                        "Code": "445140",
                        "Name": "平远县",
                        "sort": 7
                    },
                    {
                        "Code": "445140",
                        "Name": "梅县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "445150",
                "Name": "汕头市",
                "sort": 5,
                "level": [
                    {
                        "Code": "445150",
                        "Name": "金平区",
                        "sort": 1
                    },
                    {
                        "Code": "445150",
                        "Name": "龙湖区",
                        "sort": 2
                    },
                    {
                        "Code": "445150",
                        "Name": "濠江区",
                        "sort": 3
                    },
                    {
                        "Code": "445150",
                        "Name": "潮阳区",
                        "sort": 4
                    },
                    {
                        "Code": "445150",
                        "Name": "潮南区",
                        "sort": 5
                    },
                    {
                        "Code": "445150",
                        "Name": "澄海区",
                        "sort": 6
                    },
                    {
                        "Code": "445150",
                        "Name": "南澳县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "445160",
                "Name": "惠州市",
                "sort": 6,
                "level": [
                    {
                        "Code": "445160",
                        "Name": "惠城区",
                        "sort": 1
                    },
                    {
                        "Code": "445160",
                        "Name": "博罗县",
                        "sort": 2
                    },
                    {
                        "Code": "445160",
                        "Name": "惠阳区",
                        "sort": 3
                    },
                    {
                        "Code": "445160",
                        "Name": "惠东县",
                        "sort": 4
                    },
                    {
                        "Code": "445166",
                        "Name": "海丰县",
                        "sort": 5
                    },
                    {
                        "Code": "445166",
                        "Name": "陆丰市",
                        "sort": 6
                    },
                    {
                        "Code": "445166",
                        "Name": "城区",
                        "sort": 7
                    },
                    {
                        "Code": "445166",
                        "Name": "陆河县",
                        "sort": 8
                    },
                    {
                        "Code": "445160",
                        "Name": "龙门县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "445166",
                "Name": "汕尾市",
                "sort": 7,
                "level": [
                    {
                        "Code": "445160",
                        "Name": "惠城区",
                        "sort": 1
                    },
                    {
                        "Code": "445160",
                        "Name": "博罗县",
                        "sort": 2
                    },
                    {
                        "Code": "445160",
                        "Name": "惠阳区",
                        "sort": 3
                    },
                    {
                        "Code": "445160",
                        "Name": "惠东县",
                        "sort": 4
                    },
                    {
                        "Code": "445166",
                        "Name": "海丰县",
                        "sort": 5
                    },
                    {
                        "Code": "445166",
                        "Name": "陆丰市",
                        "sort": 6
                    },
                    {
                        "Code": "445166",
                        "Name": "城区",
                        "sort": 7
                    },
                    {
                        "Code": "445166",
                        "Name": "陆河县",
                        "sort": 8
                    },
                    {
                        "Code": "445160",
                        "Name": "龙门县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "445170",
                "Name": "河源市",
                "sort": 8,
                "level": [
                    {
                        "Code": "445170",
                        "Name": "源城区",
                        "sort": 1
                    },
                    {
                        "Code": "445170",
                        "Name": "连平县",
                        "sort": 2
                    },
                    {
                        "Code": "445170",
                        "Name": "和平县",
                        "sort": 3
                    },
                    {
                        "Code": "445170",
                        "Name": "龙川县",
                        "sort": 4
                    },
                    {
                        "Code": "445170",
                        "Name": "紫金县",
                        "sort": 5
                    },
                    {
                        "Code": "445170",
                        "Name": "东源县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "445180",
                "Name": "深圳市",
                "sort": 9,
                "level": [
                    {
                        "Code": "445180",
                        "Name": "南山区",
                        "sort": 1
                    },
                    {
                        "Code": "445180",
                        "Name": "罗湖区",
                        "sort": 2
                    },
                    {
                        "Code": "445180",
                        "Name": "福田区",
                        "sort": 3
                    },
                    {
                        "Code": "445180",
                        "Name": "盐田区",
                        "sort": 4
                    },
                    {
                        "Code": "445180",
                        "Name": "宝安区",
                        "sort": 5
                    },
                    {
                        "Code": "445180",
                        "Name": "龙岗区",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "445190",
                "Name": "珠海市",
                "sort": 10,
                "level": [
                    {
                        "Code": "445190",
                        "Name": "香洲区",
                        "sort": 1
                    },
                    {
                        "Code": "445190",
                        "Name": "金湾区",
                        "sort": 2
                    },
                    {
                        "Code": "445190",
                        "Name": "斗门区",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "445230",
                "Name": "东莞市",
                "sort": 11,
                "level": [
                    {
                        "Code": "445230",
                        "Name": "东莞市",
                        "sort": 1
                    }
                ]
            },
            {
                "Code": "445240",
                "Name": "湛江市",
                "sort": 12,
                "level": [
                    {
                        "Code": "445240",
                        "Name": "霞山区",
                        "sort": 1
                    },
                    {
                        "Code": "445240",
                        "Name": "赤坎区",
                        "sort": 2
                    },
                    {
                        "Code": "445240",
                        "Name": "坡头区",
                        "sort": 3
                    },
                    {
                        "Code": "445240",
                        "Name": "麻章区",
                        "sort": 4
                    },
                    {
                        "Code": "445240",
                        "Name": "徐闻县",
                        "sort": 5
                    },
                    {
                        "Code": "445240",
                        "Name": "雷州市",
                        "sort": 6
                    },
                    {
                        "Code": "445250",
                        "Name": "高州市",
                        "sort": 7
                    },
                    {
                        "Code": "445240",
                        "Name": "遂溪县",
                        "sort": 8
                    },
                    {
                        "Code": "445240",
                        "Name": "廉江市",
                        "sort": 9
                    },
                    {
                        "Code": "445240",
                        "Name": "吴川市",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "445250",
                "Name": "茂名市",
                "sort": 13,
                "level": [
                    {
                        "Code": "445250",
                        "Name": "茂南区",
                        "sort": 1
                    },
                    {
                        "Code": "445250",
                        "Name": "茂港区",
                        "sort": 2
                    },
                    {
                        "Code": "445250",
                        "Name": "化州市",
                        "sort": 3
                    },
                    {
                        "Code": "445250",
                        "Name": "信宜市",
                        "sort": 4
                    },
                    {
                        "Code": "445250",
                        "Name": "电白县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "445260",
                "Name": "肇庆市",
                "sort": 14,
                "level": [
                    {
                        "Code": "445260",
                        "Name": "端州区",
                        "sort": 1
                    },
                    {
                        "Code": "445260",
                        "Name": "鼎湖区",
                        "sort": 2
                    },
                    {
                        "Code": "445260",
                        "Name": "高要市",
                        "sort": 3
                    },
                    {
                        "Code": "445260",
                        "Name": "四会市",
                        "sort": 4
                    },
                    {
                        "Code": "445260",
                        "Name": "广宁县",
                        "sort": 5
                    },
                    {
                        "Code": "445260",
                        "Name": "怀集县",
                        "sort": 6
                    },
                    {
                        "Code": "445260",
                        "Name": "封开县",
                        "sort": 7
                    },
                    {
                        "Code": "445260",
                        "Name": "德庆县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "445280",
                "Name": "佛山市",
                "sort": 15,
                "level": [
                    {
                        "Code": "445280",
                        "Name": "禅城区",
                        "sort": 1
                    },
                    {
                        "Code": "445280",
                        "Name": "三水区",
                        "sort": 2
                    },
                    {
                        "Code": "445280",
                        "Name": "南海区",
                        "sort": 3
                    },
                    {
                        "Code": "445280",
                        "Name": "顺德区",
                        "sort": 4
                    },
                    {
                        "Code": "445284",
                        "Name": "中山市",
                        "sort": 5
                    },
                    {
                        "Code": "445280",
                        "Name": "高明区",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "445284",
                "Name": "中山市",
                "sort": 16,
                "level": [
                    {
                        "Code": "445280",
                        "Name": "禅城区",
                        "sort": 1
                    },
                    {
                        "Code": "445280",
                        "Name": "三水区",
                        "sort": 2
                    },
                    {
                        "Code": "445280",
                        "Name": "南海区",
                        "sort": 3
                    },
                    {
                        "Code": "445280",
                        "Name": "顺德区",
                        "sort": 4
                    },
                    {
                        "Code": "445284",
                        "Name": "中山市",
                        "sort": 5
                    },
                    {
                        "Code": "445280",
                        "Name": "高明区",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "445290",
                "Name": "江门市",
                "sort": 17,
                "level": [
                    {
                        "Code": "445290",
                        "Name": "蓬江区",
                        "sort": 1
                    },
                    {
                        "Code": "445290",
                        "Name": "江海区",
                        "sort": 2
                    },
                    {
                        "Code": "445290",
                        "Name": "新会区",
                        "sort": 3
                    },
                    {
                        "Code": "445290",
                        "Name": "台山市",
                        "sort": 4
                    },
                    {
                        "Code": "445290",
                        "Name": "开平市",
                        "sort": 5
                    },
                    {
                        "Code": "445290",
                        "Name": "恩平市",
                        "sort": 6
                    },
                    {
                        "Code": "445295",
                        "Name": "江城区",
                        "sort": 7
                    },
                    {
                        "Code": "445295",
                        "Name": "阳春市",
                        "sort": 8
                    },
                    {
                        "Code": "445290",
                        "Name": "鹤山市",
                        "sort": 9
                    },
                    {
                        "Code": "445295",
                        "Name": "阳西县",
                        "sort": 10
                    },
                    {
                        "Code": "445295",
                        "Name": "阳东县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "445295",
                "Name": "阳江市",
                "sort": 18,
                "level": [
                    {
                        "Code": "445290",
                        "Name": "蓬江区",
                        "sort": 1
                    },
                    {
                        "Code": "445290",
                        "Name": "江海区",
                        "sort": 2
                    },
                    {
                        "Code": "445290",
                        "Name": "新会区",
                        "sort": 3
                    },
                    {
                        "Code": "445290",
                        "Name": "台山市",
                        "sort": 4
                    },
                    {
                        "Code": "445290",
                        "Name": "开平市",
                        "sort": 5
                    },
                    {
                        "Code": "445290",
                        "Name": "恩平市",
                        "sort": 6
                    },
                    {
                        "Code": "445295",
                        "Name": "江城区",
                        "sort": 7
                    },
                    {
                        "Code": "445295",
                        "Name": "阳春市",
                        "sort": 8
                    },
                    {
                        "Code": "445290",
                        "Name": "鹤山市",
                        "sort": 9
                    },
                    {
                        "Code": "445295",
                        "Name": "阳西县",
                        "sort": 10
                    },
                    {
                        "Code": "445295",
                        "Name": "阳东县",
                        "sort": 11
                    }
                ]
            }
        ]
    },
    {
        "Code": "450000",
        "Name": "广西壮族自治区",
        "level": [
            {
                "Code": "455300",
                "Name": "南宁市",
                "sort": 1,
                "level": [
                    {
                        "Code": "455300",
                        "Name": "西乡塘区",
                        "sort": 1
                    },
                    {
                        "Code": "455300",
                        "Name": "兴宁区",
                        "sort": 2
                    },
                    {
                        "Code": "455300",
                        "Name": "青秀区",
                        "sort": 3
                    },
                    {
                        "Code": "455300",
                        "Name": "江南区",
                        "sort": 4
                    },
                    {
                        "Code": "455300",
                        "Name": "武鸣县",
                        "sort": 5
                    },
                    {
                        "Code": "455300",
                        "Name": "邕宁区",
                        "sort": 6
                    },
                    {
                        "Code": "455300",
                        "Name": "良庆区",
                        "sort": 7
                    },
                    {
                        "Code": "455300",
                        "Name": "横县",
                        "sort": 8
                    },
                    {
                        "Code": "455300",
                        "Name": "宾阳县",
                        "sort": 9
                    },
                    {
                        "Code": "455300",
                        "Name": "上林县",
                        "sort": 10
                    },
                    {
                        "Code": "455300",
                        "Name": "马山县",
                        "sort": 11
                    },
                    {
                        "Code": "455470",
                        "Name": "大化瑶族自治县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "455322",
                "Name": "崇左市",
                "sort": 2,
                "level": [
                    {
                        "Code": "455322",
                        "Name": "扶绥县",
                        "sort": 1
                    },
                    {
                        "Code": "455322",
                        "Name": "江洲区",
                        "sort": 2
                    },
                    {
                        "Code": "455322",
                        "Name": "大新县",
                        "sort": 3
                    },
                    {
                        "Code": "455322",
                        "Name": "龙州县",
                        "sort": 4
                    },
                    {
                        "Code": "455322",
                        "Name": "宁明县",
                        "sort": 5
                    },
                    {
                        "Code": "455322",
                        "Name": "凭祥市",
                        "sort": 6
                    },
                    {
                        "Code": "455300",
                        "Name": "隆安县",
                        "sort": 7
                    },
                    {
                        "Code": "455322",
                        "Name": "天等县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "455330",
                "Name": "百色市",
                "sort": 3,
                "level": [
                    {
                        "Code": "455330",
                        "Name": "右江区",
                        "sort": 1
                    },
                    {
                        "Code": "455330",
                        "Name": "凌云县",
                        "sort": 2
                    },
                    {
                        "Code": "455330",
                        "Name": "乐业县",
                        "sort": 3
                    },
                    {
                        "Code": "455330",
                        "Name": "田林县",
                        "sort": 4
                    },
                    {
                        "Code": "455330",
                        "Name": "隆林各族自治县",
                        "sort": 5
                    },
                    {
                        "Code": "455330",
                        "Name": "西林县",
                        "sort": 6
                    },
                    {
                        "Code": "455330",
                        "Name": "田阳县",
                        "sort": 7
                    },
                    {
                        "Code": "455330",
                        "Name": "德保县",
                        "sort": 8
                    },
                    {
                        "Code": "455330",
                        "Name": "靖西县",
                        "sort": 9
                    },
                    {
                        "Code": "455330",
                        "Name": "那坡县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "455350",
                "Name": "钦州市",
                "sort": 4,
                "level": [
                    {
                        "Code": "455350",
                        "Name": "钦南区",
                        "sort": 1
                    },
                    {
                        "Code": "455350",
                        "Name": "钦北区",
                        "sort": 2
                    },
                    {
                        "Code": "455350",
                        "Name": "浦北县",
                        "sort": 3
                    },
                    {
                        "Code": "455350",
                        "Name": "灵山县",
                        "sort": 4
                    },
                    {
                        "Code": "455380",
                        "Name": "防城区",
                        "sort": 5
                    },
                    {
                        "Code": "455380",
                        "Name": "上思县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "455360",
                "Name": "北海市",
                "sort": 5,
                "level": [
                    {
                        "Code": "455360",
                        "Name": "海城区",
                        "sort": 1
                    },
                    {
                        "Code": "455360",
                        "Name": "银海区",
                        "sort": 2
                    },
                    {
                        "Code": "455360",
                        "Name": "铁山港区",
                        "sort": 3
                    },
                    {
                        "Code": "455360",
                        "Name": "合浦县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "455370",
                "Name": "玉林市",
                "sort": 6,
                "level": [
                    {
                        "Code": "455370",
                        "Name": "玉州区",
                        "sort": 1
                    },
                    {
                        "Code": "455370",
                        "Name": "兴业县",
                        "sort": 2
                    },
                    {
                        "Code": "455371",
                        "Name": "港北区",
                        "sort": 3
                    },
                    {
                        "Code": "455371",
                        "Name": "港南区",
                        "sort": 4
                    },
                    {
                        "Code": "455371",
                        "Name": "覃塘区",
                        "sort": 5
                    },
                    {
                        "Code": "455371",
                        "Name": "桂平市",
                        "sort": 6
                    },
                    {
                        "Code": "455371",
                        "Name": "平南县",
                        "sort": 7
                    },
                    {
                        "Code": "455370",
                        "Name": "北流市",
                        "sort": 8
                    },
                    {
                        "Code": "455370",
                        "Name": "容县",
                        "sort": 9
                    },
                    {
                        "Code": "455370",
                        "Name": "博白县",
                        "sort": 10
                    },
                    {
                        "Code": "455370",
                        "Name": "陆川县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "455371",
                "Name": "贵港市",
                "sort": 7,
                "level": [
                    {
                        "Code": "455370",
                        "Name": "玉州区",
                        "sort": 1
                    },
                    {
                        "Code": "455370",
                        "Name": "兴业县",
                        "sort": 2
                    },
                    {
                        "Code": "455371",
                        "Name": "港北区",
                        "sort": 3
                    },
                    {
                        "Code": "455371",
                        "Name": "港南区",
                        "sort": 4
                    },
                    {
                        "Code": "455371",
                        "Name": "覃塘区",
                        "sort": 5
                    },
                    {
                        "Code": "455371",
                        "Name": "桂平市",
                        "sort": 6
                    },
                    {
                        "Code": "455371",
                        "Name": "平南县",
                        "sort": 7
                    },
                    {
                        "Code": "455370",
                        "Name": "北流市",
                        "sort": 8
                    },
                    {
                        "Code": "455370",
                        "Name": "容县",
                        "sort": 9
                    },
                    {
                        "Code": "455370",
                        "Name": "博白县",
                        "sort": 10
                    },
                    {
                        "Code": "455370",
                        "Name": "陆川县",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "455380",
                "Name": "防城港市",
                "sort": 8,
                "level": [
                    {
                        "Code": "455380",
                        "Name": "港口区",
                        "sort": 1
                    },
                    {
                        "Code": "455380",
                        "Name": "东兴市",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "455410",
                "Name": "桂林市",
                "sort": 9,
                "level": [
                    {
                        "Code": "455410",
                        "Name": "秀峰区",
                        "sort": 1
                    },
                    {
                        "Code": "455410",
                        "Name": "象山区",
                        "sort": 2
                    },
                    {
                        "Code": "455410",
                        "Name": "七星区",
                        "sort": 3
                    },
                    {
                        "Code": "455410",
                        "Name": "雁山区",
                        "sort": 4
                    },
                    {
                        "Code": "455410",
                        "Name": "临桂县",
                        "sort": 5
                    },
                    {
                        "Code": "455410",
                        "Name": "灵川县",
                        "sort": 6
                    },
                    {
                        "Code": "455410",
                        "Name": "兴安县",
                        "sort": 7
                    },
                    {
                        "Code": "455410",
                        "Name": "资源县",
                        "sort": 8
                    },
                    {
                        "Code": "455410",
                        "Name": "全州县",
                        "sort": 9
                    },
                    {
                        "Code": "455410",
                        "Name": "灌阳县",
                        "sort": 10
                    },
                    {
                        "Code": "455410",
                        "Name": "龙胜各族自治县",
                        "sort": 11
                    },
                    {
                        "Code": "455410",
                        "Name": "永福县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "455428",
                "Name": "贺州市",
                "sort": 10,
                "level": [
                    {
                        "Code": "455410",
                        "Name": "平乐县",
                        "sort": 1
                    },
                    {
                        "Code": "455410",
                        "Name": "恭城瑶族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "455428",
                        "Name": "钟山县",
                        "sort": 3
                    },
                    {
                        "Code": "455428",
                        "Name": "富川瑶族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "455428",
                        "Name": "八步区",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "455430",
                "Name": "梧州市",
                "sort": 11,
                "level": [
                    {
                        "Code": "455430",
                        "Name": "万秀区",
                        "sort": 1
                    },
                    {
                        "Code": "455430",
                        "Name": "蝶山区",
                        "sort": 2
                    },
                    {
                        "Code": "455430",
                        "Name": "长洲区",
                        "sort": 3
                    },
                    {
                        "Code": "455430",
                        "Name": "苍梧县",
                        "sort": 4
                    },
                    {
                        "Code": "455430",
                        "Name": "岑溪市",
                        "sort": 5
                    },
                    {
                        "Code": "455430",
                        "Name": "藤县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "455450",
                "Name": "柳州市",
                "sort": 12,
                "level": [
                    {
                        "Code": "455450",
                        "Name": "城中区",
                        "sort": 1
                    },
                    {
                        "Code": "455450",
                        "Name": "柳北区",
                        "sort": 2
                    },
                    {
                        "Code": "455450",
                        "Name": "鱼峰区",
                        "sort": 3
                    },
                    {
                        "Code": "455450",
                        "Name": "柳南区",
                        "sort": 4
                    },
                    {
                        "Code": "455450",
                        "Name": "柳江县",
                        "sort": 5
                    },
                    {
                        "Code": "455450",
                        "Name": "柳城县",
                        "sort": 6
                    },
                    {
                        "Code": "455450",
                        "Name": "融水苗族自治县",
                        "sort": 7
                    },
                    {
                        "Code": "455450",
                        "Name": "融安县",
                        "sort": 8
                    },
                    {
                        "Code": "455450",
                        "Name": "三江侗族自治县",
                        "sort": 9
                    },
                    {
                        "Code": "455450",
                        "Name": "鹿寨县",
                        "sort": 10
                    },
                    {
                        "Code": "455461",
                        "Name": "金秀瑶族自治县",
                        "sort": 11
                    },
                    {
                        "Code": "455461",
                        "Name": "象州县",
                        "sort": 12
                    },
                    {
                        "Code": "455461",
                        "Name": "武宣县",
                        "sort": 13
                    }
                ]
            },
            {
                "Code": "455461",
                "Name": "来宾市",
                "sort": 13,
                "level": [
                    {
                        "Code": "455461",
                        "Name": "兴宾区",
                        "sort": 1
                    },
                    {
                        "Code": "455461",
                        "Name": "忻城县",
                        "sort": 2
                    },
                    {
                        "Code": "455470",
                        "Name": "宜州市",
                        "sort": 3
                    },
                    {
                        "Code": "455470",
                        "Name": "罗城仫佬族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "455461",
                        "Name": "合山市",
                        "sort": 5
                    },
                    {
                        "Code": "455410",
                        "Name": "荔蒲县",
                        "sort": 6
                    },
                    {
                        "Code": "455430",
                        "Name": "蒙山县",
                        "sort": 7
                    },
                    {
                        "Code": "455428",
                        "Name": "昭平县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "455470",
                "Name": "河池市",
                "sort": 14,
                "level": [
                    {
                        "Code": "455470",
                        "Name": "金城江区",
                        "sort": 1
                    },
                    {
                        "Code": "455470",
                        "Name": "环江毛南族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "455470",
                        "Name": "南丹县",
                        "sort": 3
                    },
                    {
                        "Code": "455470",
                        "Name": "天峨县",
                        "sort": 4
                    },
                    {
                        "Code": "455470",
                        "Name": "东兰县",
                        "sort": 5
                    },
                    {
                        "Code": "455470",
                        "Name": "巴马瑶族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "455470",
                        "Name": "凤山县",
                        "sort": 7
                    }
                ]
            }
        ]
    },
    {
        "Code": "520000",
        "Name": "贵州省",
        "level": [
            {
                "Code": "525500",
                "Name": "贵阳市",
                "sort": 1,
                "level": [
                    {
                        "Code": "525500",
                        "Name": "云岩区",
                        "sort": 1
                    },
                    {
                        "Code": "525500",
                        "Name": "南明区",
                        "sort": 2
                    },
                    {
                        "Code": "525500",
                        "Name": "小河区",
                        "sort": 3
                    },
                    {
                        "Code": "525500",
                        "Name": "白云区",
                        "sort": 4
                    },
                    {
                        "Code": "525500",
                        "Name": "乌当区",
                        "sort": 5
                    },
                    {
                        "Code": "525500",
                        "Name": "花溪区",
                        "sort": 6
                    },
                    {
                        "Code": "525580",
                        "Name": "罗甸县",
                        "sort": 7
                    },
                    {
                        "Code": "525500",
                        "Name": "修文县",
                        "sort": 8
                    },
                    {
                        "Code": "525500",
                        "Name": "开阳县",
                        "sort": 9
                    },
                    {
                        "Code": "525580",
                        "Name": "瓮安县",
                        "sort": 10
                    },
                    {
                        "Code": "525580",
                        "Name": "福泉市",
                        "sort": 11
                    },
                    {
                        "Code": "525580",
                        "Name": "惠水县",
                        "sort": 12
                    },
                    {
                        "Code": "525580",
                        "Name": "长顺县",
                        "sort": 13
                    },
                    {
                        "Code": "525610",
                        "Name": "紫云苗族布依族自治县",
                        "sort": 14
                    }
                ]
            },
            {
                "Code": "525517",
                "Name": "毕节地区",
                "sort": 2,
                "level": [
                    {
                        "Code": "525500",
                        "Name": "息烽县",
                        "sort": 1
                    },
                    {
                        "Code": "525580",
                        "Name": "龙里县",
                        "sort": 2
                    },
                    {
                        "Code": "525580",
                        "Name": "贵定县",
                        "sort": 3
                    },
                    {
                        "Code": "525500",
                        "Name": "清镇市",
                        "sort": 4
                    },
                    {
                        "Code": "525517",
                        "Name": "黔西县",
                        "sort": 5
                    },
                    {
                        "Code": "525517",
                        "Name": "大方县",
                        "sort": 6
                    },
                    {
                        "Code": "525517",
                        "Name": "毕节市",
                        "sort": 7
                    },
                    {
                        "Code": "525517",
                        "Name": "金沙县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "525530",
                "Name": "六盘水市",
                "sort": 3,
                "level": [
                    {
                        "Code": "525530",
                        "Name": "钟山区",
                        "sort": 1
                    },
                    {
                        "Code": "525530",
                        "Name": "水城县",
                        "sort": 2
                    },
                    {
                        "Code": "525517",
                        "Name": "威宁彝族回族苗族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "525517",
                        "Name": "赫章县",
                        "sort": 4
                    },
                    {
                        "Code": "525517",
                        "Name": "纳雍县",
                        "sort": 5
                    },
                    {
                        "Code": "525530",
                        "Name": "六枝特区",
                        "sort": 6
                    },
                    {
                        "Code": "525530",
                        "Name": "盘县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "525543",
                "Name": "铜仁地区",
                "sort": 4,
                "level": [
                    {
                        "Code": "525543",
                        "Name": "玉屏侗族自治县",
                        "sort": 1
                    },
                    {
                        "Code": "525543",
                        "Name": "松桃苗族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "525543",
                        "Name": "万山特区",
                        "sort": 3
                    },
                    {
                        "Code": "525543",
                        "Name": "铜仁市",
                        "sort": 4
                    },
                    {
                        "Code": "525543",
                        "Name": "江口县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "525560",
                "Name": "黔东南苗族侗族自治州",
                "sort": 5,
                "level": [
                    {
                        "Code": "525560",
                        "Name": "凯里市",
                        "sort": 1
                    },
                    {
                        "Code": "525560",
                        "Name": "黄平县",
                        "sort": 2
                    },
                    {
                        "Code": "525560",
                        "Name": "施秉县",
                        "sort": 3
                    },
                    {
                        "Code": "525560",
                        "Name": "台江县",
                        "sort": 4
                    },
                    {
                        "Code": "525560",
                        "Name": "剑河县",
                        "sort": 5
                    },
                    {
                        "Code": "525560",
                        "Name": "三穗县",
                        "sort": 6
                    },
                    {
                        "Code": "525560",
                        "Name": "天柱县",
                        "sort": 7
                    },
                    {
                        "Code": "525560",
                        "Name": "锦屏县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "525580",
                "Name": "黔南布依族苗族自治州",
                "sort": 6,
                "level": [
                    {
                        "Code": "525580",
                        "Name": "都匀市",
                        "sort": 1
                    },
                    {
                        "Code": "525580",
                        "Name": "三都水族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "525580",
                        "Name": "独山县",
                        "sort": 3
                    },
                    {
                        "Code": "525580",
                        "Name": "平塘县",
                        "sort": 4
                    },
                    {
                        "Code": "525580",
                        "Name": "荔波县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "525610",
                "Name": "安顺市",
                "sort": 7,
                "level": [
                    {
                        "Code": "525610",
                        "Name": "西秀区",
                        "sort": 1
                    },
                    {
                        "Code": "525610",
                        "Name": "平坝县",
                        "sort": 2
                    },
                    {
                        "Code": "525610",
                        "Name": "镇宁布依族苗族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "525610",
                        "Name": "关岭布依族苗族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "525624",
                        "Name": "晴隆县",
                        "sort": 5
                    },
                    {
                        "Code": "525624",
                        "Name": "普安县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "525624",
                "Name": "黔西南布依族苗族自治州",
                "sort": 8,
                "level": [
                    {
                        "Code": "525610",
                        "Name": "普定县",
                        "sort": 1
                    },
                    {
                        "Code": "525624",
                        "Name": "贞丰县",
                        "sort": 2
                    },
                    {
                        "Code": "525624",
                        "Name": "兴仁县",
                        "sort": 3
                    },
                    {
                        "Code": "525624",
                        "Name": "兴义市",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "525630",
                "Name": "遵义市",
                "sort": 9,
                "level": [
                    {
                        "Code": "525630",
                        "Name": "红花岗区",
                        "sort": 1
                    },
                    {
                        "Code": "525630",
                        "Name": "汇川区",
                        "sort": 2
                    },
                    {
                        "Code": "525630",
                        "Name": "桐梓县",
                        "sort": 3
                    },
                    {
                        "Code": "525630",
                        "Name": "绥阳县",
                        "sort": 4
                    },
                    {
                        "Code": "525630",
                        "Name": "正安县",
                        "sort": 5
                    },
                    {
                        "Code": "525630",
                        "Name": "道真仡佬族苗族自治县",
                        "sort": 6
                    }
                ]
            }
        ]
    },
    {
        "Code": "460000",
        "Name": "海南省",
        "level": [
            {
                "Code": "465701",
                "Name": "海口市",
                "sort": 1,
                "level": [
                    {
                        "Code": "465701",
                        "Name": "秀英区",
                        "sort": 1
                    },
                    {
                        "Code": "465701",
                        "Name": "龙华区",
                        "sort": 2
                    },
                    {
                        "Code": "465701",
                        "Name": "美兰区",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "465720",
                "Name": "三亚市",
                "sort": 2,
                "level": [
                    {
                        "Code": "465720",
                        "Name": "三亚市",
                        "sort": 1
                    }
                ]
            }
        ]
    },
    {
        "Code": "510000",
        "Name": "四川省",
        "level": [
            {
                "Code": "516100",
                "Name": "成都市",
                "sort": 1,
                "level": [
                    {
                        "Code": "516100",
                        "Name": "青羊区",
                        "sort": 1
                    },
                    {
                        "Code": "516100",
                        "Name": "锦江区",
                        "sort": 2
                    },
                    {
                        "Code": "516100",
                        "Name": "成华区",
                        "sort": 3
                    },
                    {
                        "Code": "516100",
                        "Name": "武侯区",
                        "sort": 4
                    },
                    {
                        "Code": "516100",
                        "Name": "金牛区",
                        "sort": 5
                    },
                    {
                        "Code": "516100",
                        "Name": "郫县",
                        "sort": 6
                    },
                    {
                        "Code": "516100",
                        "Name": "龙泉驿区",
                        "sort": 7
                    },
                    {
                        "Code": "516100",
                        "Name": "双流县",
                        "sort": 8
                    },
                    {
                        "Code": "516100",
                        "Name": "青白江区",
                        "sort": 9
                    },
                    {
                        "Code": "516100",
                        "Name": "金堂县",
                        "sort": 10
                    },
                    {
                        "Code": "516100",
                        "Name": "新都区",
                        "sort": 11
                    }
                ]
            },
            {
                "Code": "516140",
                "Name": "乐山市",
                "sort": 2,
                "level": [
                    {
                        "Code": "516140",
                        "Name": "市中区",
                        "sort": 1
                    },
                    {
                        "Code": "516140",
                        "Name": "夹江县",
                        "sort": 2
                    },
                    {
                        "Code": "516140",
                        "Name": "峨眉山市",
                        "sort": 3
                    },
                    {
                        "Code": "516140",
                        "Name": "峨边彝族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "516140",
                        "Name": "犍为县",
                        "sort": 5
                    },
                    {
                        "Code": "516140",
                        "Name": "沐川县",
                        "sort": 6
                    },
                    {
                        "Code": "516140",
                        "Name": "马边彝族自治县",
                        "sort": 7
                    },
                    {
                        "Code": "516140",
                        "Name": "金口河区",
                        "sort": 8
                    },
                    {
                        "Code": "516140",
                        "Name": "五通桥区",
                        "sort": 9
                    },
                    {
                        "Code": "516140",
                        "Name": "沙湾区",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "516150",
                "Name": "凉山彝族自治州",
                "sort": 3,
                "level": [
                    {
                        "Code": "516150",
                        "Name": "西昌市",
                        "sort": 1
                    },
                    {
                        "Code": "516150",
                        "Name": "会理县",
                        "sort": 2
                    },
                    {
                        "Code": "516150",
                        "Name": "会东县",
                        "sort": 3
                    },
                    {
                        "Code": "516150",
                        "Name": "普格县",
                        "sort": 4
                    },
                    {
                        "Code": "516150",
                        "Name": "宁南县",
                        "sort": 5
                    },
                    {
                        "Code": "516150",
                        "Name": "德昌县",
                        "sort": 6
                    },
                    {
                        "Code": "516150",
                        "Name": "冕宁县",
                        "sort": 7
                    },
                    {
                        "Code": "516150",
                        "Name": "盐源县",
                        "sort": 8
                    },
                    {
                        "Code": "516150",
                        "Name": "木里藏族自治县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "516170",
                "Name": "攀枝花市",
                "sort": 4,
                "level": [
                    {
                        "Code": "516170",
                        "Name": "东区",
                        "sort": 1
                    },
                    {
                        "Code": "516170",
                        "Name": "仁和区",
                        "sort": 2
                    },
                    {
                        "Code": "516170",
                        "Name": "西区",
                        "sort": 3
                    },
                    {
                        "Code": "516170",
                        "Name": "盐边县",
                        "sort": 4
                    },
                    {
                        "Code": "516170",
                        "Name": "米易县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "516180",
                "Name": "德阳市",
                "sort": 5,
                "level": [
                    {
                        "Code": "516180",
                        "Name": "旌阳区",
                        "sort": 1
                    },
                    {
                        "Code": "516180",
                        "Name": "中江县",
                        "sort": 2
                    },
                    {
                        "Code": "516180",
                        "Name": "绵竹市",
                        "sort": 3
                    },
                    {
                        "Code": "516180",
                        "Name": "广汉市",
                        "sort": 4
                    },
                    {
                        "Code": "516180",
                        "Name": "什邡市",
                        "sort": 5
                    },
                    {
                        "Code": "516180",
                        "Name": "罗江县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "516200",
                "Name": "眉山市",
                "sort": 6,
                "level": [
                    {
                        "Code": "516200",
                        "Name": "东坡区",
                        "sort": 1
                    },
                    {
                        "Code": "516200",
                        "Name": "丹棱县",
                        "sort": 2
                    },
                    {
                        "Code": "516200",
                        "Name": "洪雅县",
                        "sort": 3
                    },
                    {
                        "Code": "516200",
                        "Name": "青神县",
                        "sort": 4
                    },
                    {
                        "Code": "516200",
                        "Name": "仁寿县",
                        "sort": 5
                    },
                    {
                        "Code": "516200",
                        "Name": "彭山县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "516210",
                "Name": "绵阳市",
                "sort": 7,
                "level": [
                    {
                        "Code": "516210",
                        "Name": "安县",
                        "sort": 1
                    },
                    {
                        "Code": "516210",
                        "Name": "游仙区",
                        "sort": 2
                    },
                    {
                        "Code": "516210",
                        "Name": "平武县",
                        "sort": 3
                    },
                    {
                        "Code": "516210",
                        "Name": "梓潼县",
                        "sort": 4
                    },
                    {
                        "Code": "516210",
                        "Name": "盐亭县",
                        "sort": 5
                    },
                    {
                        "Code": "516210",
                        "Name": "涪城区",
                        "sort": 6
                    },
                    {
                        "Code": "516210",
                        "Name": "三台县",
                        "sort": 7
                    },
                    {
                        "Code": "516210",
                        "Name": "北川羌族自治县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "516240",
                "Name": "阿坝藏族羌族自治州",
                "sort": 8,
                "level": [
                    {
                        "Code": "516240",
                        "Name": "马尔康县",
                        "sort": 1
                    },
                    {
                        "Code": "516240",
                        "Name": "金川县",
                        "sort": 2
                    },
                    {
                        "Code": "516240",
                        "Name": "小金县",
                        "sort": 3
                    },
                    {
                        "Code": "516240",
                        "Name": "红原县",
                        "sort": 4
                    },
                    {
                        "Code": "516240",
                        "Name": "若尔盖县",
                        "sort": 5
                    },
                    {
                        "Code": "516240",
                        "Name": "阿坝县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "516250",
                "Name": "雅安市",
                "sort": 9,
                "level": [
                    {
                        "Code": "516250",
                        "Name": "雨城区",
                        "sort": 1
                    },
                    {
                        "Code": "516250",
                        "Name": "名山县",
                        "sort": 2
                    },
                    {
                        "Code": "516250",
                        "Name": "荥经县",
                        "sort": 3
                    },
                    {
                        "Code": "516250",
                        "Name": "汉源县",
                        "sort": 4
                    },
                    {
                        "Code": "516250",
                        "Name": "石棉县",
                        "sort": 5
                    },
                    {
                        "Code": "516250",
                        "Name": "天全县",
                        "sort": 6
                    },
                    {
                        "Code": "516250",
                        "Name": "芦山县",
                        "sort": 7
                    },
                    {
                        "Code": "516250",
                        "Name": "宝兴县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "516260",
                "Name": "甘孜藏族自治州",
                "sort": 10,
                "level": [
                    {
                        "Code": "516260",
                        "Name": "康定县",
                        "sort": 1
                    },
                    {
                        "Code": "516260",
                        "Name": "泸定县",
                        "sort": 2
                    },
                    {
                        "Code": "516260",
                        "Name": "九龙县",
                        "sort": 3
                    },
                    {
                        "Code": "516260",
                        "Name": "丹巴县",
                        "sort": 4
                    },
                    {
                        "Code": "516260",
                        "Name": "道孚县",
                        "sort": 5
                    },
                    {
                        "Code": "516260",
                        "Name": "炉霍县",
                        "sort": 6
                    },
                    {
                        "Code": "516260",
                        "Name": "色达县",
                        "sort": 7
                    },
                    {
                        "Code": "516260",
                        "Name": "甘孜县",
                        "sort": 8
                    },
                    {
                        "Code": "516260",
                        "Name": "新龙县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "516280",
                "Name": "广元市",
                "sort": 11,
                "level": [
                    {
                        "Code": "516280",
                        "Name": "市中区",
                        "sort": 1
                    },
                    {
                        "Code": "516280",
                        "Name": "元坝区",
                        "sort": 2
                    },
                    {
                        "Code": "516280",
                        "Name": "朝天区",
                        "sort": 3
                    },
                    {
                        "Code": "516280",
                        "Name": "青川县",
                        "sort": 4
                    },
                    {
                        "Code": "516280",
                        "Name": "旺苍县",
                        "sort": 5
                    },
                    {
                        "Code": "516280",
                        "Name": "剑阁县",
                        "sort": 6
                    },
                    {
                        "Code": "516280",
                        "Name": "苍溪县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "516290",
                "Name": "遂宁市",
                "sort": 12,
                "level": [
                    {
                        "Code": "516290",
                        "Name": "船山区",
                        "sort": 1
                    },
                    {
                        "Code": "516290",
                        "Name": "安居区",
                        "sort": 2
                    },
                    {
                        "Code": "516290",
                        "Name": "蓬溪县",
                        "sort": 3
                    },
                    {
                        "Code": "516290",
                        "Name": "射洪县",
                        "sort": 4
                    },
                    {
                        "Code": "516290",
                        "Name": "大英县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "516350",
                "Name": "达州市",
                "sort": 13,
                "level": [
                    {
                        "Code": "516350",
                        "Name": "通川区",
                        "sort": 1
                    },
                    {
                        "Code": "516350",
                        "Name": "达县",
                        "sort": 2
                    },
                    {
                        "Code": "516350",
                        "Name": "大竹县",
                        "sort": 3
                    },
                    {
                        "Code": "516350",
                        "Name": "渠县",
                        "sort": 4
                    },
                    {
                        "Code": "516350",
                        "Name": "开江县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "516366",
                "Name": "巴中市",
                "sort": 14,
                "level": [
                    {
                        "Code": "516366",
                        "Name": "巴州区",
                        "sort": 1
                    },
                    {
                        "Code": "516350",
                        "Name": "宣汉县",
                        "sort": 2
                    },
                    {
                        "Code": "516350",
                        "Name": "万源市",
                        "sort": 3
                    },
                    {
                        "Code": "516366",
                        "Name": "平昌县",
                        "sort": 4
                    },
                    {
                        "Code": "516366",
                        "Name": "南江县",
                        "sort": 5
                    },
                    {
                        "Code": "516366",
                        "Name": "通江县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "516370",
                "Name": "南充市",
                "sort": 15,
                "level": [
                    {
                        "Code": "516370",
                        "Name": "顺庆区",
                        "sort": 1
                    },
                    {
                        "Code": "516370",
                        "Name": "高坪区",
                        "sort": 2
                    },
                    {
                        "Code": "516370",
                        "Name": "西充县",
                        "sort": 3
                    },
                    {
                        "Code": "516370",
                        "Name": "南部县",
                        "sort": 4
                    },
                    {
                        "Code": "516370",
                        "Name": "阆中市",
                        "sort": 5
                    },
                    {
                        "Code": "516370",
                        "Name": "仪陇县",
                        "sort": 6
                    },
                    {
                        "Code": "516370",
                        "Name": "营山县",
                        "sort": 7
                    },
                    {
                        "Code": "516370",
                        "Name": "蓬安县",
                        "sort": 8
                    },
                    {
                        "Code": "516370",
                        "Name": "嘉陵区",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "516385",
                "Name": "广安市",
                "sort": 16,
                "level": [
                    {
                        "Code": "516385",
                        "Name": "广安区",
                        "sort": 1
                    },
                    {
                        "Code": "516385",
                        "Name": "岳池县",
                        "sort": 2
                    },
                    {
                        "Code": "516385",
                        "Name": "武胜县",
                        "sort": 3
                    },
                    {
                        "Code": "516385",
                        "Name": "邻水县",
                        "sort": 4
                    },
                    {
                        "Code": "516385",
                        "Name": "华蓥市",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "516410",
                "Name": "内江市",
                "sort": 17,
                "level": [
                    {
                        "Code": "516410",
                        "Name": "市中区",
                        "sort": 1
                    },
                    {
                        "Code": "516410",
                        "Name": "东兴区",
                        "sort": 2
                    },
                    {
                        "Code": "516410",
                        "Name": "资中县",
                        "sort": 3
                    },
                    {
                        "Code": "516413",
                        "Name": "雁江区",
                        "sort": 4
                    },
                    {
                        "Code": "516413",
                        "Name": "简阳市",
                        "sort": 5
                    },
                    {
                        "Code": "516413",
                        "Name": "乐至县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "516413",
                "Name": "资阳市",
                "sort": 18,
                "level": [
                    {
                        "Code": "516410",
                        "Name": "市中区",
                        "sort": 1
                    },
                    {
                        "Code": "516410",
                        "Name": "东兴区",
                        "sort": 2
                    },
                    {
                        "Code": "516410",
                        "Name": "资中县",
                        "sort": 3
                    },
                    {
                        "Code": "516413",
                        "Name": "雁江区",
                        "sort": 4
                    },
                    {
                        "Code": "516413",
                        "Name": "简阳市",
                        "sort": 5
                    },
                    {
                        "Code": "516413",
                        "Name": "乐至县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "516430",
                "Name": "自贡市",
                "sort": 19,
                "level": [
                    {
                        "Code": "516430",
                        "Name": "大安区",
                        "sort": 1
                    },
                    {
                        "Code": "516430",
                        "Name": "自流井区",
                        "sort": 2
                    },
                    {
                        "Code": "516430",
                        "Name": "贡井区",
                        "sort": 3
                    },
                    {
                        "Code": "516430",
                        "Name": "沿滩区",
                        "sort": 4
                    },
                    {
                        "Code": "516430",
                        "Name": "荣县",
                        "sort": 5
                    },
                    {
                        "Code": "516430",
                        "Name": "富顺县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "516440",
                "Name": "宜宾市",
                "sort": 20,
                "level": [
                    {
                        "Code": "516440",
                        "Name": "翠屏区",
                        "sort": 1
                    },
                    {
                        "Code": "516440",
                        "Name": "南溪县",
                        "sort": 2
                    },
                    {
                        "Code": "516440",
                        "Name": "江安县",
                        "sort": 3
                    },
                    {
                        "Code": "516440",
                        "Name": "长宁县",
                        "sort": 4
                    },
                    {
                        "Code": "516440",
                        "Name": "兴文县",
                        "sort": 5
                    },
                    {
                        "Code": "516440",
                        "Name": "珙县",
                        "sort": 6
                    },
                    {
                        "Code": "516440",
                        "Name": "宜宾县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "516460",
                "Name": "泸州市",
                "sort": 21,
                "level": [
                    {
                        "Code": "516460",
                        "Name": "江阳区",
                        "sort": 1
                    },
                    {
                        "Code": "516460",
                        "Name": "泸县",
                        "sort": 2
                    },
                    {
                        "Code": "516460",
                        "Name": "合江县",
                        "sort": 3
                    },
                    {
                        "Code": "516460",
                        "Name": "纳溪区",
                        "sort": 4
                    },
                    {
                        "Code": "516460",
                        "Name": "叙永县",
                        "sort": 5
                    },
                    {
                        "Code": "516460",
                        "Name": "古蔺县",
                        "sort": 6
                    },
                    {
                        "Code": "516460",
                        "Name": "龙马潭区",
                        "sort": 7
                    }
                ]
            }
        ]
    },
    {
        "Code": "530000",
        "Name": "云南省",
        "level": [
            {
                "Code": "536500",
                "Name": "昆明市",
                "sort": 1,
                "level": [
                    {
                        "Code": "536500",
                        "Name": "官渡区",
                        "sort": 1
                    },
                    {
                        "Code": "536500",
                        "Name": "五华区",
                        "sort": 2
                    },
                    {
                        "Code": "536500",
                        "Name": "西山区",
                        "sort": 3
                    },
                    {
                        "Code": "536500",
                        "Name": "盘龙区",
                        "sort": 4
                    },
                    {
                        "Code": "536500",
                        "Name": "富民县",
                        "sort": 5
                    },
                    {
                        "Code": "536500",
                        "Name": "呈贡县",
                        "sort": 6
                    },
                    {
                        "Code": "536500",
                        "Name": "晋宁县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "536531",
                "Name": "玉溪市",
                "sort": 2,
                "level": [
                    {
                        "Code": "536531",
                        "Name": "红塔区",
                        "sort": 1
                    },
                    {
                        "Code": "536531",
                        "Name": "峨山彝族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "536531",
                        "Name": "元江哈尼族彝族傣族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "536531",
                        "Name": "新平彝族傣族自治县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "536550",
                "Name": "曲靖市",
                "sort": 3,
                "level": [
                    {
                        "Code": "536550",
                        "Name": "麒麟区",
                        "sort": 1
                    },
                    {
                        "Code": "536550",
                        "Name": "沾益县",
                        "sort": 2
                    },
                    {
                        "Code": "536550",
                        "Name": "富源县",
                        "sort": 3
                    },
                    {
                        "Code": "536550",
                        "Name": "陆良县",
                        "sort": 4
                    },
                    {
                        "Code": "536550",
                        "Name": "师宗县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "536570",
                "Name": "昭通市",
                "sort": 4,
                "level": [
                    {
                        "Code": "536570",
                        "Name": "昭阳区",
                        "sort": 1
                    },
                    {
                        "Code": "536570",
                        "Name": "鲁甸县",
                        "sort": 2
                    },
                    {
                        "Code": "536570",
                        "Name": "镇雄县",
                        "sort": 3
                    },
                    {
                        "Code": "536570",
                        "Name": "永善县",
                        "sort": 4
                    },
                    {
                        "Code": "536570",
                        "Name": "大关县",
                        "sort": 5
                    },
                    {
                        "Code": "536570",
                        "Name": "盐津县",
                        "sort": 6
                    },
                    {
                        "Code": "536570",
                        "Name": "彝良县",
                        "sort": 7
                    },
                    {
                        "Code": "536570",
                        "Name": "绥江县",
                        "sort": 8
                    },
                    {
                        "Code": "536570",
                        "Name": "水富县",
                        "sort": 9
                    },
                    {
                        "Code": "536570",
                        "Name": "威信县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "536614",
                "Name": "红河哈尼族彝族自治州",
                "sort": 5,
                "level": [
                    {
                        "Code": "536614",
                        "Name": "个旧市",
                        "sort": 1
                    },
                    {
                        "Code": "536614",
                        "Name": "蒙自县",
                        "sort": 2
                    },
                    {
                        "Code": "536614",
                        "Name": "屏边苗族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "536614",
                        "Name": "河口瑶族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "536614",
                        "Name": "开远市",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "536630",
                "Name": "文山壮族苗族自治州",
                "sort": 6,
                "level": [
                    {
                        "Code": "536630",
                        "Name": "文山县",
                        "sort": 1
                    },
                    {
                        "Code": "536630",
                        "Name": "砚山县",
                        "sort": 2
                    },
                    {
                        "Code": "536630",
                        "Name": "丘北县",
                        "sort": 3
                    },
                    {
                        "Code": "536630",
                        "Name": "广南县",
                        "sort": 4
                    },
                    {
                        "Code": "536630",
                        "Name": "富宁县",
                        "sort": 5
                    },
                    {
                        "Code": "536630",
                        "Name": "西畴县",
                        "sort": 6
                    },
                    {
                        "Code": "536630",
                        "Name": "麻栗坡县",
                        "sort": 7
                    },
                    {
                        "Code": "536630",
                        "Name": "马关县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "536650",
                "Name": "普洱市",
                "sort": 7,
                "level": [
                    {
                        "Code": "536650",
                        "Name": "翠云区",
                        "sort": 1
                    },
                    {
                        "Code": "536650",
                        "Name": "普洱哈尼族彝族自治县",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "536661",
                "Name": "西双版纳傣族自治州",
                "sort": 8,
                "level": [
                    {
                        "Code": "536661",
                        "Name": "景洪市",
                        "sort": 1
                    },
                    {
                        "Code": "536661",
                        "Name": "勐海县",
                        "sort": 2
                    },
                    {
                        "Code": "536661",
                        "Name": "勐腊县",
                        "sort": 3
                    },
                    {
                        "Code": "536650",
                        "Name": "景谷傣族彝族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "536650",
                        "Name": "镇沅彝族哈尼族拉祜族自治县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "536710",
                "Name": "大理白族自治州",
                "sort": 9,
                "level": [
                    {
                        "Code": "536710",
                        "Name": "大理市",
                        "sort": 1
                    },
                    {
                        "Code": "536731",
                        "Name": "兰坪白族普米族自治县",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "536731",
                "Name": "怒江傈僳族自治州",
                "sort": 10,
                "level": [
                    {
                        "Code": "536731",
                        "Name": "福贡县",
                        "sort": 1
                    },
                    {
                        "Code": "536731",
                        "Name": "贡山独龙族怒族自治县",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "536741",
                "Name": "丽江市",
                "sort": 11,
                "level": [
                    {
                        "Code": "536741",
                        "Name": "玉龙纳西族自治县",
                        "sort": 1
                    },
                    {
                        "Code": "536741",
                        "Name": "永胜县",
                        "sort": 2
                    },
                    {
                        "Code": "536741",
                        "Name": "宁蒗彝族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "536744",
                        "Name": "香格里拉县",
                        "sort": 4
                    },
                    {
                        "Code": "536744",
                        "Name": "德钦县",
                        "sort": 5
                    },
                    {
                        "Code": "536744",
                        "Name": "维西傈僳族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "536741",
                        "Name": "华坪县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "536744",
                "Name": "迪庆藏族自治州",
                "sort": 12,
                "level": [
                    {
                        "Code": "536741",
                        "Name": "玉龙纳西族自治县",
                        "sort": 1
                    },
                    {
                        "Code": "536741",
                        "Name": "永胜县",
                        "sort": 2
                    },
                    {
                        "Code": "536741",
                        "Name": "宁蒗彝族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "536744",
                        "Name": "香格里拉县",
                        "sort": 4
                    },
                    {
                        "Code": "536744",
                        "Name": "德钦县",
                        "sort": 5
                    },
                    {
                        "Code": "536744",
                        "Name": "维西傈僳族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "536741",
                        "Name": "华坪县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "536750",
                "Name": "楚雄彝族自治州",
                "sort": 13,
                "level": [
                    {
                        "Code": "536750",
                        "Name": "楚雄市",
                        "sort": 1
                    },
                    {
                        "Code": "536770",
                        "Name": "云县",
                        "sort": 2
                    },
                    {
                        "Code": "536770",
                        "Name": "凤庆县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "536770",
                "Name": "临沧市",
                "sort": 14,
                "level": [
                    {
                        "Code": "536770",
                        "Name": "临翔区",
                        "sort": 1
                    },
                    {
                        "Code": "536770",
                        "Name": "双江拉祜族佤族布朗族傣族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "536770",
                        "Name": "沧源佤族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "536770",
                        "Name": "耿马傣族佤族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "536770",
                        "Name": "永德县",
                        "sort": 5
                    },
                    {
                        "Code": "536770",
                        "Name": "镇康县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "536780",
                "Name": "保山市",
                "sort": 15,
                "level": [
                    {
                        "Code": "536780",
                        "Name": "隆阳区",
                        "sort": 1
                    },
                    {
                        "Code": "536780",
                        "Name": "昌宁县",
                        "sort": 2
                    },
                    {
                        "Code": "536780",
                        "Name": "施甸县",
                        "sort": 3
                    },
                    {
                        "Code": "536780",
                        "Name": "龙陵县",
                        "sort": 4
                    },
                    {
                        "Code": "536784",
                        "Name": "潞西市",
                        "sort": 5
                    },
                    {
                        "Code": "536784",
                        "Name": "瑞丽市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "536784",
                "Name": "德宏傣族景颇族自治州",
                "sort": 16,
                "level": [
                    {
                        "Code": "536780",
                        "Name": "隆阳区",
                        "sort": 1
                    },
                    {
                        "Code": "536780",
                        "Name": "昌宁县",
                        "sort": 2
                    },
                    {
                        "Code": "536780",
                        "Name": "施甸县",
                        "sort": 3
                    },
                    {
                        "Code": "536780",
                        "Name": "龙陵县",
                        "sort": 4
                    },
                    {
                        "Code": "536784",
                        "Name": "潞西市",
                        "sort": 5
                    },
                    {
                        "Code": "536784",
                        "Name": "瑞丽市",
                        "sort": 6
                    }
                ]
            }
        ]
    },
    {
        "Code": "610000",
        "Name": "陕西省",
        "level": [
            {
                "Code": "617100",
                "Name": "西安市",
                "sort": 1,
                "level": [
                    {
                        "Code": "617100",
                        "Name": "碑林区",
                        "sort": 1
                    },
                    {
                        "Code": "617100",
                        "Name": "莲湖区",
                        "sort": 2
                    },
                    {
                        "Code": "617100",
                        "Name": "新城区",
                        "sort": 3
                    },
                    {
                        "Code": "617100",
                        "Name": "未央区",
                        "sort": 4
                    },
                    {
                        "Code": "617100",
                        "Name": "灞桥区",
                        "sort": 5
                    },
                    {
                        "Code": "617100",
                        "Name": "雁塔区",
                        "sort": 6
                    },
                    {
                        "Code": "617100",
                        "Name": "阎良区",
                        "sort": 7
                    },
                    {
                        "Code": "617100",
                        "Name": "户县",
                        "sort": 8
                    },
                    {
                        "Code": "617100",
                        "Name": "长安区",
                        "sort": 9
                    },
                    {
                        "Code": "617100",
                        "Name": "高陵县",
                        "sort": 10
                    },
                    {
                        "Code": "617100",
                        "Name": "周至县",
                        "sort": 11
                    },
                    {
                        "Code": "617100",
                        "Name": "蓝田县",
                        "sort": 12
                    },
                    {
                        "Code": "617100",
                        "Name": "临潼区",
                        "sort": 13
                    }
                ]
            },
            {
                "Code": "617120",
                "Name": "咸阳市",
                "sort": 2,
                "level": [
                    {
                        "Code": "617120",
                        "Name": "渭城区",
                        "sort": 1
                    },
                    {
                        "Code": "617120",
                        "Name": "秦都区",
                        "sort": 2
                    },
                    {
                        "Code": "617120",
                        "Name": "武功县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "617140",
                "Name": "渭南市",
                "sort": 3,
                "level": [
                    {
                        "Code": "617140",
                        "Name": "临渭区",
                        "sort": 1
                    },
                    {
                        "Code": "617140",
                        "Name": "华县",
                        "sort": 2
                    },
                    {
                        "Code": "617140",
                        "Name": "华阴市",
                        "sort": 3
                    },
                    {
                        "Code": "617140",
                        "Name": "潼关县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "617160",
                "Name": "延安市",
                "sort": 4,
                "level": [
                    {
                        "Code": "617160",
                        "Name": "宝塔区",
                        "sort": 1
                    },
                    {
                        "Code": "617160",
                        "Name": "甘泉县",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "617190",
                "Name": "榆林市",
                "sort": 5,
                "level": [
                    {
                        "Code": "617190",
                        "Name": "榆阳区",
                        "sort": 1
                    },
                    {
                        "Code": "617190",
                        "Name": "横山县",
                        "sort": 2
                    },
                    {
                        "Code": "617190",
                        "Name": "佳县",
                        "sort": 3
                    },
                    {
                        "Code": "617190",
                        "Name": "神木县",
                        "sort": 4
                    },
                    {
                        "Code": "617190",
                        "Name": "府谷县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "617210",
                "Name": "宝鸡市",
                "sort": 6,
                "level": [
                    {
                        "Code": "617210",
                        "Name": "金台区",
                        "sort": 1
                    },
                    {
                        "Code": "617210",
                        "Name": "渭滨区",
                        "sort": 2
                    },
                    {
                        "Code": "617210",
                        "Name": "千阳县",
                        "sort": 3
                    },
                    {
                        "Code": "617210",
                        "Name": "陇县",
                        "sort": 4
                    },
                    {
                        "Code": "617210",
                        "Name": "陈仓区",
                        "sort": 5
                    },
                    {
                        "Code": "617210",
                        "Name": "凤翔县",
                        "sort": 6
                    },
                    {
                        "Code": "617210",
                        "Name": "麟游县",
                        "sort": 7
                    },
                    {
                        "Code": "617210",
                        "Name": "太白县",
                        "sort": 8
                    },
                    {
                        "Code": "617210",
                        "Name": "凤县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "617230",
                "Name": "汉中市",
                "sort": 7,
                "level": [
                    {
                        "Code": "617230",
                        "Name": "汉台区",
                        "sort": 1
                    },
                    {
                        "Code": "617230",
                        "Name": "南郑县",
                        "sort": 2
                    },
                    {
                        "Code": "617230",
                        "Name": "城固县",
                        "sort": 3
                    },
                    {
                        "Code": "617230",
                        "Name": "洋县",
                        "sort": 4
                    },
                    {
                        "Code": "617230",
                        "Name": "佛坪县",
                        "sort": 5
                    },
                    {
                        "Code": "617230",
                        "Name": "西乡县",
                        "sort": 6
                    },
                    {
                        "Code": "617230",
                        "Name": "镇巴县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "617250",
                "Name": "安康市",
                "sort": 8,
                "level": [
                    {
                        "Code": "617250",
                        "Name": "汉滨区",
                        "sort": 1
                    },
                    {
                        "Code": "617250",
                        "Name": "汉阴县",
                        "sort": 2
                    },
                    {
                        "Code": "617250",
                        "Name": "石泉县",
                        "sort": 3
                    },
                    {
                        "Code": "617250",
                        "Name": "紫阳县",
                        "sort": 4
                    },
                    {
                        "Code": "617250",
                        "Name": "岚皋县",
                        "sort": 5
                    },
                    {
                        "Code": "617250",
                        "Name": "平利县",
                        "sort": 6
                    },
                    {
                        "Code": "617250",
                        "Name": "镇坪县",
                        "sort": 7
                    },
                    {
                        "Code": "617250",
                        "Name": "旬阳县",
                        "sort": 8
                    },
                    {
                        "Code": "617250",
                        "Name": "白河县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "617260",
                "Name": "商洛市",
                "sort": 9,
                "level": [
                    {
                        "Code": "617260",
                        "Name": "商州区",
                        "sort": 1
                    },
                    {
                        "Code": "617260",
                        "Name": "洛南县",
                        "sort": 2
                    },
                    {
                        "Code": "617260",
                        "Name": "丹凤县",
                        "sort": 3
                    },
                    {
                        "Code": "617260",
                        "Name": "商南县",
                        "sort": 4
                    },
                    {
                        "Code": "617260",
                        "Name": "山阳县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "617270",
                "Name": "铜川市",
                "sort": 10,
                "level": [
                    {
                        "Code": "617270",
                        "Name": "王益区",
                        "sort": 1
                    },
                    {
                        "Code": "617270",
                        "Name": "印台区",
                        "sort": 2
                    },
                    {
                        "Code": "617270",
                        "Name": "耀州区",
                        "sort": 3
                    },
                    {
                        "Code": "617270",
                        "Name": "宜君县",
                        "sort": 4
                    },
                    {
                        "Code": "617160",
                        "Name": "洛川县",
                        "sort": 5
                    },
                    {
                        "Code": "617160",
                        "Name": "富县",
                        "sort": 6
                    }
                ]
            }
        ]
    },
    {
        "Code": "620000",
        "Name": "甘肃省",
        "level": [
            {
                "Code": "627300",
                "Name": "兰州市",
                "sort": 1,
                "level": [
                    {
                        "Code": "627300",
                        "Name": "城关区",
                        "sort": 1
                    },
                    {
                        "Code": "627300",
                        "Name": "七里河区",
                        "sort": 2
                    },
                    {
                        "Code": "627300",
                        "Name": "西固区",
                        "sort": 3
                    },
                    {
                        "Code": "627300",
                        "Name": "安宁区",
                        "sort": 4
                    },
                    {
                        "Code": "627300",
                        "Name": "红古区",
                        "sort": 5
                    },
                    {
                        "Code": "627300",
                        "Name": "榆中县",
                        "sort": 6
                    },
                    {
                        "Code": "627300",
                        "Name": "皋兰县",
                        "sort": 7
                    },
                    {
                        "Code": "627300",
                        "Name": "永登县",
                        "sort": 8
                    },
                    {
                        "Code": "627309",
                        "Name": "景泰县",
                        "sort": 9
                    },
                    {
                        "Code": "627430",
                        "Name": "临洮县",
                        "sort": 10
                    },
                    {
                        "Code": "627309",
                        "Name": "靖远县",
                        "sort": 11
                    },
                    {
                        "Code": "627309",
                        "Name": "会宁县",
                        "sort": 12
                    },
                    {
                        "Code": "627309",
                        "Name": "白银区",
                        "sort": 13
                    },
                    {
                        "Code": "627309",
                        "Name": "平川区",
                        "sort": 14
                    }
                ]
            },
            {
                "Code": "627309",
                "Name": "白银市",
                "sort": 2,
                "level": [
                    {
                        "Code": "627300",
                        "Name": "城关区",
                        "sort": 1
                    },
                    {
                        "Code": "627300",
                        "Name": "七里河区",
                        "sort": 2
                    },
                    {
                        "Code": "627300",
                        "Name": "西固区",
                        "sort": 3
                    },
                    {
                        "Code": "627300",
                        "Name": "安宁区",
                        "sort": 4
                    },
                    {
                        "Code": "627300",
                        "Name": "红古区",
                        "sort": 5
                    },
                    {
                        "Code": "627300",
                        "Name": "榆中县",
                        "sort": 6
                    },
                    {
                        "Code": "627300",
                        "Name": "皋兰县",
                        "sort": 7
                    },
                    {
                        "Code": "627300",
                        "Name": "永登县",
                        "sort": 8
                    },
                    {
                        "Code": "627309",
                        "Name": "景泰县",
                        "sort": 9
                    },
                    {
                        "Code": "627430",
                        "Name": "临洮县",
                        "sort": 10
                    },
                    {
                        "Code": "627309",
                        "Name": "靖远县",
                        "sort": 11
                    },
                    {
                        "Code": "627309",
                        "Name": "会宁县",
                        "sort": 12
                    },
                    {
                        "Code": "627309",
                        "Name": "白银区",
                        "sort": 13
                    },
                    {
                        "Code": "627309",
                        "Name": "平川区",
                        "sort": 14
                    }
                ]
            },
            {
                "Code": "627311",
                "Name": "临夏回族自治州",
                "sort": 3,
                "level": [
                    {
                        "Code": "627311",
                        "Name": "临夏市",
                        "sort": 1
                    },
                    {
                        "Code": "627311",
                        "Name": "和政县",
                        "sort": 2
                    },
                    {
                        "Code": "627311",
                        "Name": "广河县",
                        "sort": 3
                    },
                    {
                        "Code": "627311",
                        "Name": "康乐县",
                        "sort": 4
                    },
                    {
                        "Code": "627311",
                        "Name": "永靖县",
                        "sort": 5
                    },
                    {
                        "Code": "627311",
                        "Name": "积石山保安族东乡族撒拉族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "627311",
                        "Name": "临夏县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "627330",
                "Name": "武威市",
                "sort": 4,
                "level": [
                    {
                        "Code": "627330",
                        "Name": "凉州区",
                        "sort": 1
                    },
                    {
                        "Code": "627330",
                        "Name": "天祝藏族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "627340",
                        "Name": "肃南裕固族自治县",
                        "sort": 3
                    },
                    {
                        "Code": "627330",
                        "Name": "古浪县",
                        "sort": 4
                    },
                    {
                        "Code": "627330",
                        "Name": "民勤县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "627340",
                "Name": "张掖市",
                "sort": 5,
                "level": [
                    {
                        "Code": "627340",
                        "Name": "甘州区",
                        "sort": 1
                    },
                    {
                        "Code": "627340",
                        "Name": "山丹县",
                        "sort": 2
                    },
                    {
                        "Code": "627340",
                        "Name": "临泽县",
                        "sort": 3
                    },
                    {
                        "Code": "627340",
                        "Name": "高台县",
                        "sort": 4
                    },
                    {
                        "Code": "627340",
                        "Name": "民乐县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "627350",
                "Name": "酒泉市",
                "sort": 6,
                "level": [
                    {
                        "Code": "627350",
                        "Name": "肃州区",
                        "sort": 1
                    },
                    {
                        "Code": "627351",
                        "Name": "嘉峪关市",
                        "sort": 2
                    },
                    {
                        "Code": "627350",
                        "Name": "玉门市",
                        "sort": 3
                    },
                    {
                        "Code": "627350",
                        "Name": "肃北蒙古族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "627350",
                        "Name": "金塔县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "627351",
                "Name": "嘉峪关市",
                "sort": 7,
                "level": [
                    {
                        "Code": "627350",
                        "Name": "肃州区",
                        "sort": 1
                    },
                    {
                        "Code": "627351",
                        "Name": "嘉峪关市",
                        "sort": 2
                    },
                    {
                        "Code": "627350",
                        "Name": "玉门市",
                        "sort": 3
                    },
                    {
                        "Code": "627350",
                        "Name": "肃北蒙古族自治县",
                        "sort": 4
                    },
                    {
                        "Code": "627350",
                        "Name": "金塔县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "627371",
                "Name": "金昌市",
                "sort": 8,
                "level": [
                    {
                        "Code": "627371",
                        "Name": "永昌县",
                        "sort": 1
                    },
                    {
                        "Code": "627371",
                        "Name": "金川区",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "627410",
                "Name": "天水市",
                "sort": 9,
                "level": [
                    {
                        "Code": "627410",
                        "Name": "秦城区",
                        "sort": 1
                    },
                    {
                        "Code": "627410",
                        "Name": "北道区",
                        "sort": 2
                    },
                    {
                        "Code": "627410",
                        "Name": "甘谷县",
                        "sort": 3
                    },
                    {
                        "Code": "627410",
                        "Name": "武山县",
                        "sort": 4
                    },
                    {
                        "Code": "627410",
                        "Name": "清水县",
                        "sort": 5
                    },
                    {
                        "Code": "627410",
                        "Name": "张家川回族自治县",
                        "sort": 6
                    },
                    {
                        "Code": "627410",
                        "Name": "秦安县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "627425",
                "Name": "陇南市",
                "sort": 10,
                "level": [
                    {
                        "Code": "627425",
                        "Name": "西和县",
                        "sort": 1
                    },
                    {
                        "Code": "627425",
                        "Name": "礼县",
                        "sort": 2
                    },
                    {
                        "Code": "627425",
                        "Name": "徽县",
                        "sort": 3
                    },
                    {
                        "Code": "627425",
                        "Name": "两当县",
                        "sort": 4
                    },
                    {
                        "Code": "627425",
                        "Name": "成县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "627430",
                "Name": "定西市",
                "sort": 11,
                "level": [
                    {
                        "Code": "627430",
                        "Name": "安定区",
                        "sort": 1
                    },
                    {
                        "Code": "627430",
                        "Name": "通渭县",
                        "sort": 2
                    },
                    {
                        "Code": "627440",
                        "Name": "静宁县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "627440",
                "Name": "平凉市",
                "sort": 12,
                "level": [
                    {
                        "Code": "627440",
                        "Name": "崆峒区",
                        "sort": 1
                    },
                    {
                        "Code": "627440",
                        "Name": "华亭县",
                        "sort": 2
                    },
                    {
                        "Code": "627440",
                        "Name": "崇信县",
                        "sort": 3
                    },
                    {
                        "Code": "627440",
                        "Name": "泾川县",
                        "sort": 4
                    },
                    {
                        "Code": "627440",
                        "Name": "灵台县",
                        "sort": 5
                    },
                    {
                        "Code": "627450",
                        "Name": "镇原县",
                        "sort": 6
                    },
                    {
                        "Code": "627440",
                        "Name": "庄浪县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "627450",
                "Name": "庆阳市",
                "sort": 13,
                "level": [
                    {
                        "Code": "627450",
                        "Name": "西峰区",
                        "sort": 1
                    },
                    {
                        "Code": "627450",
                        "Name": "庆城县",
                        "sort": 2
                    },
                    {
                        "Code": "627450",
                        "Name": "宁县",
                        "sort": 3
                    },
                    {
                        "Code": "627450",
                        "Name": "正宁县",
                        "sort": 4
                    },
                    {
                        "Code": "627450",
                        "Name": "合水县",
                        "sort": 5
                    },
                    {
                        "Code": "627450",
                        "Name": "华池县",
                        "sort": 6
                    },
                    {
                        "Code": "627450",
                        "Name": "环县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "627470",
                "Name": "甘南藏族自治州",
                "sort": 14,
                "level": [
                    {
                        "Code": "627470",
                        "Name": "合作市",
                        "sort": 1
                    },
                    {
                        "Code": "627470",
                        "Name": "夏河县",
                        "sort": 2
                    },
                    {
                        "Code": "627470",
                        "Name": "碌曲县",
                        "sort": 3
                    },
                    {
                        "Code": "627470",
                        "Name": "玛曲县",
                        "sort": 4
                    },
                    {
                        "Code": "627470",
                        "Name": "迭部县",
                        "sort": 5
                    },
                    {
                        "Code": "627470",
                        "Name": "临潭县",
                        "sort": 6
                    },
                    {
                        "Code": "627470",
                        "Name": "卓尼县",
                        "sort": 7
                    }
                ]
            }
        ]
    },
    {
        "Code": "640000",
        "Name": "宁夏回族自治区",
        "level": [
            {
                "Code": "647500",
                "Name": "银川市",
                "sort": 1,
                "level": [
                    {
                        "Code": "647500",
                        "Name": "兴庆区",
                        "sort": 1
                    },
                    {
                        "Code": "647500",
                        "Name": "金凤区",
                        "sort": 2
                    },
                    {
                        "Code": "647500",
                        "Name": "西夏区",
                        "sort": 3
                    },
                    {
                        "Code": "647500",
                        "Name": "永宁县",
                        "sort": 4
                    },
                    {
                        "Code": "647500",
                        "Name": "贺兰县",
                        "sort": 5
                    },
                    {
                        "Code": "647500",
                        "Name": "灵武市",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "647511",
                "Name": "吴忠市",
                "sort": 2,
                "level": [
                    {
                        "Code": "647511",
                        "Name": "利通区",
                        "sort": 1
                    },
                    {
                        "Code": "647511",
                        "Name": "同心县",
                        "sort": 2
                    },
                    {
                        "Code": "647511",
                        "Name": "盐池县",
                        "sort": 3
                    },
                    {
                        "Code": "647511",
                        "Name": "青铜峡市",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "647530",
                "Name": "石嘴山市",
                "sort": 3,
                "level": [
                    {
                        "Code": "647530",
                        "Name": "大武口区",
                        "sort": 1
                    },
                    {
                        "Code": "647530",
                        "Name": "惠农区",
                        "sort": 2
                    },
                    {
                        "Code": "647530",
                        "Name": "平罗县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "647550",
                "Name": "中卫市",
                "sort": 4,
                "level": [
                    {
                        "Code": "647550",
                        "Name": "沙坡头区",
                        "sort": 1
                    },
                    {
                        "Code": "647550",
                        "Name": "中宁县",
                        "sort": 2
                    },
                    {
                        "Code": "647550",
                        "Name": "海原县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "647560",
                "Name": "固原市",
                "sort": 5,
                "level": [
                    {
                        "Code": "647560",
                        "Name": "原州区",
                        "sort": 1
                    },
                    {
                        "Code": "647560",
                        "Name": "西吉县",
                        "sort": 2
                    },
                    {
                        "Code": "647560",
                        "Name": "隆德县",
                        "sort": 3
                    },
                    {
                        "Code": "647560",
                        "Name": "泾源县",
                        "sort": 4
                    },
                    {
                        "Code": "647560",
                        "Name": "彭阳县",
                        "sort": 5
                    }
                ]
            }
        ]
    },
    {
        "Code": "630000",
        "Name": "青海省",
        "level": [
            {
                "Code": "638100",
                "Name": "西宁市",
                "sort": 1,
                "level": [
                    {
                        "Code": "638100",
                        "Name": "城中区",
                        "sort": 1
                    },
                    {
                        "Code": "638100",
                        "Name": "城西区",
                        "sort": 2
                    },
                    {
                        "Code": "638100",
                        "Name": "城北区",
                        "sort": 3
                    },
                    {
                        "Code": "638100",
                        "Name": "城东区",
                        "sort": 4
                    },
                    {
                        "Code": "638100",
                        "Name": "大通回族土族自治县",
                        "sort": 5
                    },
                    {
                        "Code": "638122",
                        "Name": "刚察县",
                        "sort": 6
                    },
                    {
                        "Code": "638122",
                        "Name": "门源回族自治县",
                        "sort": 7
                    },
                    {
                        "Code": "638106",
                        "Name": "互助土族自治县",
                        "sort": 8
                    },
                    {
                        "Code": "638106",
                        "Name": "平安县",
                        "sort": 9
                    },
                    {
                        "Code": "638106",
                        "Name": "乐都县",
                        "sort": 10
                    },
                    {
                        "Code": "638106",
                        "Name": "民和回族土族自治县",
                        "sort": 11
                    },
                    {
                        "Code": "638106",
                        "Name": "化隆回族自治县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "638106",
                "Name": "海东地区",
                "sort": 2,
                "level": [
                    {
                        "Code": "638100",
                        "Name": "城中区",
                        "sort": 1
                    },
                    {
                        "Code": "638100",
                        "Name": "城西区",
                        "sort": 2
                    },
                    {
                        "Code": "638100",
                        "Name": "城北区",
                        "sort": 3
                    },
                    {
                        "Code": "638100",
                        "Name": "城东区",
                        "sort": 4
                    },
                    {
                        "Code": "638100",
                        "Name": "大通回族土族自治县",
                        "sort": 5
                    },
                    {
                        "Code": "638122",
                        "Name": "刚察县",
                        "sort": 6
                    },
                    {
                        "Code": "638122",
                        "Name": "门源回族自治县",
                        "sort": 7
                    },
                    {
                        "Code": "638106",
                        "Name": "互助土族自治县",
                        "sort": 8
                    },
                    {
                        "Code": "638106",
                        "Name": "平安县",
                        "sort": 9
                    },
                    {
                        "Code": "638106",
                        "Name": "乐都县",
                        "sort": 10
                    },
                    {
                        "Code": "638106",
                        "Name": "民和回族土族自治县",
                        "sort": 11
                    },
                    {
                        "Code": "638106",
                        "Name": "化隆回族自治县",
                        "sort": 12
                    }
                ]
            },
            {
                "Code": "638113",
                "Name": "黄南藏族自治州",
                "sort": 3,
                "level": [
                    {
                        "Code": "638106",
                        "Name": "循化撒拉族自治县",
                        "sort": 1
                    },
                    {
                        "Code": "638113",
                        "Name": "尖扎县",
                        "sort": 2
                    },
                    {
                        "Code": "638113",
                        "Name": "同仁县",
                        "sort": 3
                    },
                    {
                        "Code": "638113",
                        "Name": "泽库县",
                        "sort": 4
                    },
                    {
                        "Code": "638113",
                        "Name": "河南蒙古族自治县",
                        "sort": 5
                    },
                    {
                        "Code": "638100",
                        "Name": "湟中县",
                        "sort": 6
                    },
                    {
                        "Code": "638130",
                        "Name": "共和县",
                        "sort": 7
                    },
                    {
                        "Code": "638130",
                        "Name": "贵德县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "638122",
                "Name": "海北藏族自治州",
                "sort": 4,
                "level": [
                    {
                        "Code": "638100",
                        "Name": "湟源县",
                        "sort": 1
                    },
                    {
                        "Code": "638122",
                        "Name": "海晏县",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "638130",
                "Name": "海南藏族自治州",
                "sort": 5,
                "level": [
                    {
                        "Code": "638130",
                        "Name": "贵南县",
                        "sort": 1
                    },
                    {
                        "Code": "638130",
                        "Name": "同德县",
                        "sort": 2
                    },
                    {
                        "Code": "638130",
                        "Name": "兴海县",
                        "sort": 3
                    },
                    {
                        "Code": "638140",
                        "Name": "玛多县",
                        "sort": 4
                    }
                ]
            },
            {
                "Code": "638140",
                "Name": "果洛藏族自治州",
                "sort": 6,
                "level": [
                    {
                        "Code": "638140",
                        "Name": "玛沁县",
                        "sort": 1
                    },
                    {
                        "Code": "638140",
                        "Name": "甘德县",
                        "sort": 2
                    },
                    {
                        "Code": "638140",
                        "Name": "达日县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "638170",
                "Name": "海西蒙古族藏族自治州",
                "sort": 7,
                "level": [
                    {
                        "Code": "638170",
                        "Name": "德令哈市",
                        "sort": 1
                    },
                    {
                        "Code": "638170",
                        "Name": "乌兰县",
                        "sort": 2
                    },
                    {
                        "Code": "638170",
                        "Name": "天峻县",
                        "sort": 3
                    }
                ]
            }
        ]
    },
    {
        "Code": "650000",
        "Name": "新疆维吾尔自治区",
        "level": [
            {
                "Code": "658300",
                "Name": "乌鲁木齐市",
                "sort": 1,
                "level": [
                    {
                        "Code": "658300",
                        "Name": "新市区",
                        "sort": 1
                    },
                    {
                        "Code": "658300",
                        "Name": "头屯河区",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "658311",
                "Name": "昌吉回族自治州",
                "sort": 2,
                "level": [
                    {
                        "Code": "658311",
                        "Name": "昌吉市",
                        "sort": 1
                    },
                    {
                        "Code": "658311",
                        "Name": "呼图壁县",
                        "sort": 2
                    },
                    {
                        "Code": "658311",
                        "Name": "米泉市",
                        "sort": 3
                    },
                    {
                        "Code": "658311",
                        "Name": "阜康市",
                        "sort": 4
                    },
                    {
                        "Code": "658311",
                        "Name": "吉木萨尔县",
                        "sort": 5
                    },
                    {
                        "Code": "658311",
                        "Name": "奇台县",
                        "sort": 6
                    },
                    {
                        "Code": "658311",
                        "Name": "木垒哈萨克自治县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "658313",
                "Name": "五家渠市",
                "sort": 3,
                "level": [
                    {
                        "Code": "658311",
                        "Name": "昌吉市",
                        "sort": 1
                    },
                    {
                        "Code": "658311",
                        "Name": "呼图壁县",
                        "sort": 2
                    },
                    {
                        "Code": "658311",
                        "Name": "米泉市",
                        "sort": 3
                    },
                    {
                        "Code": "658311",
                        "Name": "阜康市",
                        "sort": 4
                    },
                    {
                        "Code": "658311",
                        "Name": "吉木萨尔县",
                        "sort": 5
                    },
                    {
                        "Code": "658311",
                        "Name": "奇台县",
                        "sort": 6
                    },
                    {
                        "Code": "658311",
                        "Name": "木垒哈萨克自治县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "658320",
                "Name": "石河子市",
                "sort": 4,
                "level": [
                    {
                        "Code": "658347",
                        "Name": "沙湾县",
                        "sort": 1
                    },
                    {
                        "Code": "658311",
                        "Name": "玛纳斯县",
                        "sort": 2
                    }
                ]
            },
            {
                "Code": "658334",
                "Name": "博尔塔拉蒙古自治州",
                "sort": 5,
                "level": [
                    {
                        "Code": "658347",
                        "Name": "乌苏市",
                        "sort": 1
                    },
                    {
                        "Code": "658350",
                        "Name": "奎屯市",
                        "sort": 2
                    },
                    {
                        "Code": "658334",
                        "Name": "精河县",
                        "sort": 3
                    },
                    {
                        "Code": "658334",
                        "Name": "博乐市",
                        "sort": 4
                    },
                    {
                        "Code": "658334",
                        "Name": "温泉县",
                        "sort": 5
                    },
                    {
                        "Code": "658340",
                        "Name": "独山子区",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "658340",
                "Name": "克拉玛依市",
                "sort": 6,
                "level": [
                    {
                        "Code": "658340",
                        "Name": "克拉玛依区",
                        "sort": 1
                    },
                    {
                        "Code": "658340",
                        "Name": "白碱滩区",
                        "sort": 2
                    },
                    {
                        "Code": "658340",
                        "Name": "乌尔禾区",
                        "sort": 3
                    },
                    {
                        "Code": "658347",
                        "Name": "和布克赛尔蒙古自治县",
                        "sort": 4
                    },
                    {
                        "Code": "658347",
                        "Name": "托里县",
                        "sort": 5
                    },
                    {
                        "Code": "658347",
                        "Name": "额敏县",
                        "sort": 6
                    },
                    {
                        "Code": "658347",
                        "Name": "塔城市",
                        "sort": 7
                    },
                    {
                        "Code": "658347",
                        "Name": "裕民县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "658347",
                "Name": "塔城地区",
                "sort": 7,
                "level": [
                    {
                        "Code": "658340",
                        "Name": "克拉玛依区",
                        "sort": 1
                    },
                    {
                        "Code": "658340",
                        "Name": "白碱滩区",
                        "sort": 2
                    },
                    {
                        "Code": "658340",
                        "Name": "乌尔禾区",
                        "sort": 3
                    },
                    {
                        "Code": "658347",
                        "Name": "和布克赛尔蒙古自治县",
                        "sort": 4
                    },
                    {
                        "Code": "658347",
                        "Name": "托里县",
                        "sort": 5
                    },
                    {
                        "Code": "658347",
                        "Name": "额敏县",
                        "sort": 6
                    },
                    {
                        "Code": "658347",
                        "Name": "塔城市",
                        "sort": 7
                    },
                    {
                        "Code": "658347",
                        "Name": "裕民县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "658350",
                "Name": "伊犁哈萨克自治州",
                "sort": 8,
                "level": [
                    {
                        "Code": "658350",
                        "Name": "伊宁市",
                        "sort": 1
                    },
                    {
                        "Code": "658350",
                        "Name": "伊宁县",
                        "sort": 2
                    },
                    {
                        "Code": "658350",
                        "Name": "霍城县",
                        "sort": 3
                    },
                    {
                        "Code": "658350",
                        "Name": "察布查尔锡伯自治县",
                        "sort": 4
                    },
                    {
                        "Code": "658350",
                        "Name": "巩留县",
                        "sort": 5
                    },
                    {
                        "Code": "658350",
                        "Name": "特克斯县",
                        "sort": 6
                    },
                    {
                        "Code": "658350",
                        "Name": "昭苏县",
                        "sort": 7
                    },
                    {
                        "Code": "658350",
                        "Name": "尼勒克县",
                        "sort": 8
                    },
                    {
                        "Code": "658350",
                        "Name": "新源县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "658365",
                "Name": "阿勒泰地区",
                "sort": 9,
                "level": [
                    {
                        "Code": "658365",
                        "Name": "富蕴县",
                        "sort": 1
                    },
                    {
                        "Code": "658365",
                        "Name": "福海县",
                        "sort": 2
                    },
                    {
                        "Code": "658365",
                        "Name": "阿勒泰市",
                        "sort": 3
                    },
                    {
                        "Code": "658365",
                        "Name": "布尔津县",
                        "sort": 4
                    },
                    {
                        "Code": "658365",
                        "Name": "哈巴河县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "658380",
                "Name": "吐鲁番地区",
                "sort": 10,
                "level": [
                    {
                        "Code": "658380",
                        "Name": "吐鲁番市",
                        "sort": 1
                    },
                    {
                        "Code": "658380",
                        "Name": "托克逊县",
                        "sort": 2
                    },
                    {
                        "Code": "658380",
                        "Name": "鄯善县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "658390",
                "Name": "哈密地区",
                "sort": 11,
                "level": [
                    {
                        "Code": "658390",
                        "Name": "哈密市",
                        "sort": 1
                    },
                    {
                        "Code": "658390",
                        "Name": "巴里坤哈萨克自治县",
                        "sort": 2
                    },
                    {
                        "Code": "658390",
                        "Name": "伊吾县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "658410",
                "Name": "巴音郭楞蒙古自治州",
                "sort": 12,
                "level": [
                    {
                        "Code": "658410",
                        "Name": "库尔勒市",
                        "sort": 1
                    },
                    {
                        "Code": "658410",
                        "Name": "焉耆回族自治县",
                        "sort": 2
                    },
                    {
                        "Code": "658410",
                        "Name": "和硕县",
                        "sort": 3
                    },
                    {
                        "Code": "658410",
                        "Name": "和静县",
                        "sort": 4
                    },
                    {
                        "Code": "658410",
                        "Name": "博湖县",
                        "sort": 5
                    },
                    {
                        "Code": "658410",
                        "Name": "尉犁县",
                        "sort": 6
                    },
                    {
                        "Code": "658410",
                        "Name": "轮台县",
                        "sort": 7
                    },
                    {
                        "Code": "658410",
                        "Name": "若羌县",
                        "sort": 8
                    },
                    {
                        "Code": "658410",
                        "Name": "且末县",
                        "sort": 9
                    }
                ]
            },
            {
                "Code": "658430",
                "Name": "阿克苏地区",
                "sort": 13,
                "level": [
                    {
                        "Code": "658430",
                        "Name": "阿克苏市",
                        "sort": 1
                    },
                    {
                        "Code": "658430",
                        "Name": "温宿县",
                        "sort": 2
                    },
                    {
                        "Code": "658430",
                        "Name": "阿瓦提县",
                        "sort": 3
                    },
                    {
                        "Code": "658430",
                        "Name": "乌什县",
                        "sort": 4
                    },
                    {
                        "Code": "658453",
                        "Name": "阿合奇县",
                        "sort": 5
                    },
                    {
                        "Code": "658430",
                        "Name": "柯坪县",
                        "sort": 6
                    },
                    {
                        "Code": "658440",
                        "Name": "巴楚县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "658433",
                "Name": "阿拉尔市",
                "sort": 14,
                "level": [
                    {
                        "Code": "658430",
                        "Name": "阿克苏市",
                        "sort": 1
                    },
                    {
                        "Code": "658430",
                        "Name": "温宿县",
                        "sort": 2
                    },
                    {
                        "Code": "658430",
                        "Name": "阿瓦提县",
                        "sort": 3
                    },
                    {
                        "Code": "658430",
                        "Name": "乌什县",
                        "sort": 4
                    },
                    {
                        "Code": "658453",
                        "Name": "阿合奇县",
                        "sort": 5
                    },
                    {
                        "Code": "658430",
                        "Name": "柯坪县",
                        "sort": 6
                    },
                    {
                        "Code": "658440",
                        "Name": "巴楚县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "658439",
                "Name": "图木舒克市",
                "sort": 15,
                "level": [
                    {
                        "Code": "658430",
                        "Name": "阿克苏市",
                        "sort": 1
                    },
                    {
                        "Code": "658430",
                        "Name": "温宿县",
                        "sort": 2
                    },
                    {
                        "Code": "658430",
                        "Name": "阿瓦提县",
                        "sort": 3
                    },
                    {
                        "Code": "658430",
                        "Name": "乌什县",
                        "sort": 4
                    },
                    {
                        "Code": "658453",
                        "Name": "阿合奇县",
                        "sort": 5
                    },
                    {
                        "Code": "658430",
                        "Name": "柯坪县",
                        "sort": 6
                    },
                    {
                        "Code": "658440",
                        "Name": "巴楚县",
                        "sort": 7
                    }
                ]
            },
            {
                "Code": "658440",
                "Name": "喀什地区",
                "sort": 16,
                "level": [
                    {
                        "Code": "658440",
                        "Name": "喀什市",
                        "sort": 1
                    },
                    {
                        "Code": "658440",
                        "Name": "疏附县",
                        "sort": 2
                    },
                    {
                        "Code": "658440",
                        "Name": "疏勒县",
                        "sort": 3
                    },
                    {
                        "Code": "658440",
                        "Name": "伽师县",
                        "sort": 4
                    },
                    {
                        "Code": "658440",
                        "Name": "岳普湖县",
                        "sort": 5
                    },
                    {
                        "Code": "658440",
                        "Name": "英吉沙县",
                        "sort": 6
                    },
                    {
                        "Code": "658440",
                        "Name": "麦盖提县",
                        "sort": 7
                    },
                    {
                        "Code": "658440",
                        "Name": "莎车县",
                        "sort": 8
                    },
                    {
                        "Code": "658440",
                        "Name": "泽普县",
                        "sort": 9
                    },
                    {
                        "Code": "658440",
                        "Name": "叶城县",
                        "sort": 10
                    }
                ]
            },
            {
                "Code": "658453",
                "Name": "克孜勒苏柯尔克孜自治州",
                "sort": 17,
                "level": [
                    {
                        "Code": "658480",
                        "Name": "皮山县",
                        "sort": 1
                    },
                    {
                        "Code": "658440",
                        "Name": "塔什库尔干塔吉克自治县",
                        "sort": 2
                    },
                    {
                        "Code": "658453",
                        "Name": "阿图什市",
                        "sort": 3
                    },
                    {
                        "Code": "658453",
                        "Name": "乌恰县",
                        "sort": 4
                    },
                    {
                        "Code": "658453",
                        "Name": "阿克陶县",
                        "sort": 5
                    }
                ]
            },
            {
                "Code": "658480",
                "Name": "和田地区",
                "sort": 18,
                "level": [
                    {
                        "Code": "658480",
                        "Name": "和田市",
                        "sort": 1
                    },
                    {
                        "Code": "658480",
                        "Name": "和田县",
                        "sort": 2
                    },
                    {
                        "Code": "658480",
                        "Name": "墨玉县",
                        "sort": 3
                    },
                    {
                        "Code": "658480",
                        "Name": "洛浦县",
                        "sort": 4
                    },
                    {
                        "Code": "658480",
                        "Name": "策勒县",
                        "sort": 5
                    },
                    {
                        "Code": "658480",
                        "Name": "于田县",
                        "sort": 6
                    },
                    {
                        "Code": "658480",
                        "Name": "民丰县",
                        "sort": 7
                    }
                ]
            }
        ]
    },
    {
        "Code": "540000",
        "Name": "西藏自治区",
        "level": [
            {
                "Code": "548500",
                "Name": "拉萨市",
                "sort": 1,
                "level": [
                    {
                        "Code": "548500",
                        "Name": "城关区",
                        "sort": 1
                    },
                    {
                        "Code": "548500",
                        "Name": "达孜县",
                        "sort": 2
                    },
                    {
                        "Code": "548500",
                        "Name": "墨竹工卡县",
                        "sort": 3
                    },
                    {
                        "Code": "548500",
                        "Name": "曲水县",
                        "sort": 4
                    },
                    {
                        "Code": "548560",
                        "Name": "贡嘎县",
                        "sort": 5
                    },
                    {
                        "Code": "548560",
                        "Name": "扎囊县",
                        "sort": 6
                    }
                ]
            },
            {
                "Code": "548520",
                "Name": "那曲地区",
                "sort": 2,
                "level": [
                    {
                        "Code": "548520",
                        "Name": "那曲县",
                        "sort": 1
                    }
                ]
            },
            {
                "Code": "548540",
                "Name": "昌都地区",
                "sort": 3,
                "level": [
                    {
                        "Code": "548540",
                        "Name": "昌都县",
                        "sort": 1
                    }
                ]
            },
            {
                "Code": "548560",
                "Name": "山南地区",
                "sort": 4,
                "level": [
                    {
                        "Code": "548560",
                        "Name": "乃东县",
                        "sort": 1
                    },
                    {
                        "Code": "548560",
                        "Name": "桑日县",
                        "sort": 2
                    },
                    {
                        "Code": "548560",
                        "Name": "曲松县",
                        "sort": 3
                    },
                    {
                        "Code": "548560",
                        "Name": "加查县",
                        "sort": 4
                    },
                    {
                        "Code": "548560",
                        "Name": "隆子县",
                        "sort": 5
                    },
                    {
                        "Code": "548560",
                        "Name": "错那县",
                        "sort": 6
                    },
                    {
                        "Code": "548560",
                        "Name": "琼结县",
                        "sort": 7
                    },
                    {
                        "Code": "548560",
                        "Name": "措美县",
                        "sort": 8
                    }
                ]
            },
            {
                "Code": "548570",
                "Name": "日喀则地区",
                "sort": 5,
                "level": [
                    {
                        "Code": "548570",
                        "Name": "日喀则市",
                        "sort": 1
                    },
                    {
                        "Code": "548570",
                        "Name": "南木林县",
                        "sort": 2
                    },
                    {
                        "Code": "548570",
                        "Name": "亚东县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "548590",
                "Name": "阿里地区",
                "sort": 6,
                "level": [
                    {
                        "Code": "548590",
                        "Name": "革吉县",
                        "sort": 1
                    },
                    {
                        "Code": "548590",
                        "Name": "改则县",
                        "sort": 2
                    },
                    {
                        "Code": "548590",
                        "Name": "措勤县",
                        "sort": 3
                    }
                ]
            },
            {
                "Code": "548600",
                "Name": "林芝地区",
                "sort": 7,
                "level": [
                    {
                        "Code": "548600",
                        "Name": "林芝县",
                        "sort": 1
                    },
                    {
                        "Code": "548600",
                        "Name": "工布江达县",
                        "sort": 2
                    },
                    {
                        "Code": "548600",
                        "Name": "波密县",
                        "sort": 3
                    },
                    {
                        "Code": "548600",
                        "Name": "朗县",
                        "sort": 4
                    },
                    {
                        "Code": "548600",
                        "Name": "米林县",
                        "sort": 5
                    },
                    {
                        "Code": "548600",
                        "Name": "察隅县",
                        "sort": 6
                    },
                    {
                        "Code": "548600",
                        "Name": "墨脱县",
                        "sort": 7
                    }
                ]
            }
        ]
    },
    {
        "Code": "910000",
        "Name": "香港特别行政区",
        "level": [
            {
                "Code": "910000",
                "Name": "香港特别行政区",
                "sort": 1,
                "level": [
                    {
                        "Code": "910000",
                        "Name": "香港特别行政区",
                        "sort": 1
                    }
                ]
            }
        ]
    },
    {
        "Code": "920000",
        "Name": "台湾省",
        "level": [
            {
                "Code": "920000",
                "Name": "台湾省",
                "sort": 1,
                "level": [
                    {
                        "Code": "920000",
                        "Name": "台湾省",
                        "sort": 1
                    }
                ]
            }
        ]
    }
];

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = cityData;
    } else {
        window.cityData = cityData;
    }

})(window, document, Math);