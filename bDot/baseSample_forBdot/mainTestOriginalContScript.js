let javascript_StyleEffectTrigger2_imgswapgroup0=document.getElementsByClassName("javascript_StyleEffectTrigger2_imgswapgroup0");
for(let s=0; s<javascript_StyleEffectTrigger2_imgswapgroup0.length; s++){
    let item=javascript_StyleEffectTrigger2_imgswapgroup0[s];

    let triggerdatas_custom={
        "mouseenter":{
            "0~1024":{
                "style_datas":[
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"instantstyle":{"z-index":2}}},
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"animstyle":{"opacity":"100%"},"duration":400}},
                    {
                        "target":`coloreffectTarget1`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[240,240,240,0.9],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"false","responsevalue_rate":5}
                    },
                    {
                        "target":`coloreffectTarget2`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[150,90,220,0.9],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|1400*1100',"","%","%"],"limitvalue":[{"rotateZ":90},{"translateZ":-900},{"scale":0.5},{"translateX":-50},{"translateY":-50}],"duration":1200}}
                    }
                ]
            },
            "1025~9999":{
                "style_datas":[
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"instantstyle":{"z-index":2}}},
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"animstyle":{"opacity":"100%"},"duration":400}},
                    {
                        "target":`coloreffectTarget1`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[200,120,90,0.9],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"false","responsevalue_rate":4}
                    },
                    {
                        "target":`coloreffectTarget2`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[50,160,100,0.9],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080',"","%","%"],"limitvalue":[{"rotateZ":140},{"translateZ":-500},{"scale":0.7},{"translateX":-30},{"translateY":-30}],"duration":1200}}
                    }
                ]
            }
        },
        "mouseleave":{
            "0~1024":{
                "style_datas":[
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"instantstyle":{"z-index":2}}},
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"animstyle":{"opacity":"0%"},"duration":400}
                    },
                    {
                        "target":`coloreffectTarget1`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":1}
                    },
                    {
                        "target":`coloreffectTarget2`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[20,20,20,0.8],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1400*1100',"","%","%"],"limitvalue":[{"rotateZ":0},{"translateZ":0},{"scale":1},{"translateX":0},{"translateY":0}],"duration":1200}}
                    }
                ]
            },
            '1025~9999':{
                "style_datas":[
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"instantstyle":{"z-index":2}}},
                    {"target":`styleEffect_imgswapgroup0_zindexShow${s+1}`,"styleoption":{"animstyle":{"opacity":"0%"},"duration":400}
                    },
                    {
                        "target":`coloreffectTarget1`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":1}
                    },
                    {
                        "target":`coloreffectTarget2`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[20,20,20,0.8],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080',"","%","%"],"limitvalue":[{"rotateZ":0},{"translateZ":0},{"scale":1},{"translateX":0},{"translateY":0}],"duration":1200}}
                    }
                ]
            }
        }
    }
    item.setAttribute("triggerdata",JSON.stringify(triggerdatas_custom));

    for(let events in triggerdatas_custom){
        item.addEventListener(events,styleEffect_adapt_trigger2,false);
    }
}
let javascript_scroll_response_group1=document.getElementsByClassName("javascript_scroll_response_group1");
for(let e=0; e<javascript_scroll_response_group1.length; e++){
    let item_target=javascript_scroll_response_group1[e];
    console.log("스크롤반응 요소들html offsetTop상태:",item_target,item_target.offsetTop);

    let addpos_flag=0;
    if((e % 3)==0){
        addpos_flag=80;
    }else if((e %3)==1){
        addpos_flag=20;
    }else if((e % 3)==2){
        addpos_flag=40;
    }   

    let scrollTargets_adaptdata={
        "0~1024":{
            "forward":{
                "style_datas":[
                    {"target":`coloreffectTarget_scrollresponse${e+1}`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[240,200,50,0.9],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":5}},
                    {
                        "target":`coloreffectTarget_scrollresponse${e+1}-1`,"styleoption":{"animstyle":{"top":"10%","opacity":"100%"},"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[128,50,240,0.9],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|1400*1100',"responmax|1400*1100","deg"],"limitvalue":[{"rotateX":40},{"translateZ":400},{"translateY":-100},{"rotateZ":70}],"duration":1200}}
                    }
                ]
            },
            "reset":{
                "style_datas":[
                    {"target":`coloreffectTarget_scrollresponse${e+1}`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":1}},
                    {
                        "target":`coloreffectTarget_scrollresponse${e+1}-1`,"styleoption":{"animstyle":{"top":"200%","opacity":"0%"},"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|1400*1100',"responmax|1400*1100","deg"],"limitvalue":[{"rotateX":0},{"translateZ":0},{"translateY":0},{"rotateZ":0}],"duration":1200}}
                    }
                ]
            },
            "responsepos":150+(addpos_flag)//정수값 px단위.
        },
        "1025~9999":{
            "forward":{
                "style_datas":[
                    {"target":`coloreffectTarget_scrollresponse${e+1}`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[160,50,200,0.9],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":4}},
                    {
                        "target":`coloreffectTarget_scrollresponse${e+1}-1`,"styleoption":{"animstyle":{"top":"10%","opacity":"100%"},"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[128,50,240,0.9],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responh|1920*1080',"responh|1920*1080","deg"],"limitvalue":[{"rotateX":32},{"translateZ":500},{"translateY":-180},{"rotateZ":80}],"duration":1200}}
                    }
                ]
            },
            "reset":{
                "style_datas":[
                    {"target":`coloreffectTarget_scrollresponse${e+1}`,"styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":1}},
                    {
                        "target":`coloreffectTarget_scrollresponse${e+1}-1`,"styleoption":{"animstyle":{"top":"200%","opacity":"0%"},"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responh|1920*1080',"responh|1920*1080","deg"],"limitvalue":[{"rotateX":0},{"translateZ":0},{"translateY":0},{"rotateZ":0}],"duration":1200}}
                    }
                ]
            },
            "responsepos":120+addpos_flag//정수값 px단위.
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}



let javascript_mouseAndTouchArea_group1=document.getElementsByClassName("javascript_mouseAndTouchArea_group1");
let targetdata={
    'calc_method':'basic',//'basic:rate_delay', realtime:즉시적 이동되고있는 있는량만큼 실시간적으로 처음량비례하여 이동(touchup or mouseup발생시까지)
    //basic에선 dynamic,autoheight,autowidth,goalPercent등은 별로 의미가 없고, scrollRateCond 가 의미있다.
    '0~960':{
        'speedamount':1,
        'styledata':[
            {
                'targetid':'generalScrollTarget1-1','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":400,"effectspeed":340,"units":"responmax|960*1100",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[13,95,205,0],"units":"rgba","calculate":["add","add","add","add"],"limitvalue":[255,255,255,1]}]
            },
            {
                'targetid':'generalScrollTarget1-2','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":540,"effectspeed":480,"units":"responmax|960*1100",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[13,95,205,0],"units":"rgba","calculate":["add","add","add","add"],"limitvalue":[255,255,255,1]}]
            },
            {
                'targetid' : 'movescrollTarget1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.3,"styleoption":{
                    "adapt":{"animstyle":{"top":"50%"},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|960*1200'],"limitvalue":[{"rotateZ":90},{"translateZ":900}],"duration":1200},"duration":400,"complete":{}},
                    "reset":{"animstyle":{"top":"0%"},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|960*1200'],"limitvalue":[{"rotateZ":0},{"translateZ":0}],"duration":1200},"duration":400,"complete":{}}
                }
            },
            {
                'targetid': 'movescrollTarget2', 'effectStyle':"scrollRateCond_instantAdapt","condValue":0.6,"styleoption":{
                    "adapt":{"transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":1},
                    "reset":{"transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"false","responsevalue_rate":0.5}
                }
            }
        ]
    },
    '961~1400':{
        'speedamount':1, 
        'styledata':[
            {
                'targetid':'generalScrollTarget1-1','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":400,"effectspeed":340,"units":"responmin|1400*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[162,95,205,0],"units":"rgba","calculate":["subtract","add","add","add"],"limitvalue":[80,255,255,1]}]
            },
            {
                'targetid':'generalScrollTarget1-2','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":540,"effectspeed":480,"units":"responmin|1400*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[162,95,205,0],"units":"rgba","calculate":["subtract","add","add","add"],"limitvalue":[80,255,255,1]}]
            },
            {
                'targetid' : 'movescrollTarget1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.3,"styleoption":{
                    "adapt":{"animstyle":{"top":"50%"},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|1400*1100'],"limitvalue":[{"rotateZ":100},{"translateZ":600}],"duration":1200},"duration":400,"complete":{}},
                    "reset":{"animstyle":{"top":"0%"},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|1400*1100'],"limitvalue":[{"rotateZ":0},{"translateZ":0}],"duration":1200},"duration":400,"complete":{}}
                }
            },
            {
                'targetid': 'movescrollTarget2', 'effectStyle':"scrollRateCond_instantAdapt","condValue":0.6,"styleoption":{
                    "adapt":{"transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":2},
                    "reset":{"transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"false","responsevalue_rate":0.6}
                }
            }
        ]
    },
    '1401~9999':{
        'speedamount':1,
        'styledata':[
            {
                'targetid':'generalScrollTarget1-1','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":400,"effectspeed":340,"units":"responmin|1920*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[192,85,50,0],"units":"rgba","calculate":["subtract","add","add","add"],"limitvalue":[50,245,100,1]}]
            },
            {
                'targetid':'generalScrollTarget1-2','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":540,"effectspeed":480,"units":"responmin|1920*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[192,85,50,0],"units":"rgba","calculate":["subtract","add","add","add"],"limitvalue":[50,245,100,1]}]
            },
            {
                'targetid' : 'movescrollTarget1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.3,"styleoption":{
                    "adapt":{"animstyle":{"top":"50%"},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080'],"limitvalue":[{"rotateZ":120},{"translateZ":1000}],"duration":1200},"duration":400,"complete":{}},
                    "reset":{"animstyle":{"top":"0%"},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080'],"limitvalue":[{"rotateZ":0},{"translateZ":0}],"duration":1200},"duration":400,"complete":{}}
                }
            },
            {
                'targetid': 'movescrollTarget2', 'effectStyle':"scrollRateCond_instantAdapt","condValue":0.6,"styleoption":{
                    "adapt":{"transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":3},
                    "reset":{"transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"false","responsevalue_rate":0.7}
                }
            }
        ]
    },
}
for(let g1=0; g1<javascript_mouseAndTouchArea_group1.length; g1++){
    let item=javascript_mouseAndTouchArea_group1[g1];
    item.setAttribute("targetdata",JSON.stringify(targetdata));
}

let javascript_mouseAndTouchArea_group2=document.getElementsByClassName("javascript_mouseAndTouchArea_group2");
let targetdata2={
    'calc_method':'realtime',//'basic:rate_delay', realtime:즉시적 이동되고있는 있는량만큼 실시간적으로 처음량비례하여 이동(touchup or mouseup발생시까지)

    '0~960':{
        'speedamount':1,
        'styledata':[
            {
                'targetid':'generalScrollTarget2-1','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":400,"effectspeed":340,"units":"responmax|960*1100",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[242,120,195,0],"units":"rgba","calculate":["subtract","subtract","add","add"],"limitvalue":[0,40,245,1]}]
            },
            {
                'targetid':'generalScrollTarget2-2','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":540,"effectspeed":480,"units":"responmax|960*1100",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[242,120,195,0],"units":"rgba","calculate":["subtract","subtract","add","add"],"limitvalue":[0,40,245,1]}]
            },
            {
                'targetid':"generalScrollTarget2-1-1","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                'targetid':"generalScrollTarget2-2-1","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                'targetid':"generalScrollTarget2-2-2","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                "targetid":"javascript_touchmoveTrigger_layoutVerBghorizontal","effectStyle":"dynamic","styleoption":[{"property":"left","originvalue":0,"effectspeed":450,"units":"%","direction":"forward","calculate":"subtract","limitvalue":-400}]
            },
            {
                'targetid':"javascript_touchmoveTrigger_autoheightTarget1","effectStyle":"autoheight"
            },
            {
                'targetid':"javascript_touchmoveTrigger_autowidthTarget1","effectStyle":"autowidth"
            },
            {
                'targetid' : 'movescrollTarget1-1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.3,"styleoption":{"adapt":{"animstyle":{"top":"-100%"},"duration":400,"complete":{}},"reset":{"animstyle":{"top":"0%"},"duration":400,"complete":{}}}
            },
            {
                'targetid': 'movescrollTarget2-1', 'effectStyle':"scrollRateCond_instantAdapt","condValue":0.6,"styleoption":{"adapt":{"animstyle":{"width":"css_responsive"},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":1},"reset":{"animstyle":{"width":"0%"},"duration":400,"complete":{},"inlineresponsive_allow":"false","responsevalue_rate":1}}
            },
            {
                'targetid':'transformAnimateTarget1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.5,"styleoption":{
                    "adapt":{
                        "coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[150,90,220,0.9],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|960*1200',"","deg"],"limitvalue":[{"rotateZ":90},{"translateZ":900},{"scale":2},{"rotateX":50}],"duration":1200}
                    },
                    "reset":{
                        "coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|960*1200',"","deg"],"limitvalue":[{"rotateZ":0},{"translateZ":0},{"scale":1},{"rotateX":0}],"duration":1200}
                    }
                }
            },
            {
                'targetid':'transformAnimateTarget3','effectStyle':"scrollRateCond_instantAdapt","condValue":0.5,"styleoption":{
                    "adapt":{
                        "transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":1
                    },
                    "reset":{
                        "transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":0
                    }
                }
            },
            {
                'targetid':'transformAnimateTarget2','effectStyle':"transformdynamic","styleoption":{"property":"transform","originvalue":[{'rotateY':0},{"scale":1},{"translateX":80}],"effectspeed":[120,2,200],"units":["deg","","responmin|960*1100"],"calculate":["add","add","add"],"limitvalue":[{"rotateY":100},{"scale":3},{"translateX":280}]}
            }
        ]
    },
    '961~1400':{
        'speedamount':1, 
        'styledata':[
            {
                'targetid':'generalScrollTarget2-1','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":400,"effectspeed":340,"units":"responmax|1400*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[192,95,190,0],"units":"rgba","calculate":["subtract","add","add","add"],"limitvalue":[50,255,240,1]}]
            },
            {
                'targetid':'generalScrollTarget2-2','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":540,"effectspeed":480,"units":"responmax|1400*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[192,95,190,0],"units":"rgba","calculate":["subtract","add","add","add"],"limitvalue":[50,255,240,1]}]
            },
            {
                'targetid':"generalScrollTarget2-1-1","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                'targetid':"generalScrollTarget2-2-1","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                'targetid':"generalScrollTarget2-2-2","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                "targetid":"javascript_touchmoveTrigger_layoutVerBghorizontal","effectStyle":"dynamic","styleoption":[{"property":"left","originvalue":0,"effectspeed":450,"units":"%","direction":"forward","calculate":"subtract","limitvalue":-400}]
            },
            {
                'targetid':"javascript_touchmoveTrigger_autoheightTarget1","effectStyle":"autoheight"
            },
            {
                'targetid':"javascript_touchmoveTrigger_autowidthTarget1","effectStyle":"autowidth"
            },
            {
                'targetid' : 'movescrollTarget1-1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.3,"styleoption":{"adapt":{"animstyle":{"top":"-100%"},"duration":400,"complete":{}},"reset":{"animstyle":{"top":"0%"},"duration":400,"complete":{}}}
            },
            {
                'targetid': 'movescrollTarget2-1', 'effectStyle':"scrollRateCond_instantAdapt","condValue":0.6,"styleoption":{"adapt":{"animstyle":{"width":"css_responsive"},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":1},"reset":{"animstyle":{"width":"0%"},"duration":400,"complete":{},"inlineresponsive_allow":"false","responsevalue_rate":1}}
            },
            {
                'targetid':'transformAnimateTarget1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.5,"styleoption":{
                    "adapt":{
                        "coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[60,190,220,0.9],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|1400*1080',"","deg"],"limitvalue":[{"rotateZ":100},{"translateZ":900},{"scale":2},{"rotateX":40}],"duration":1200}
                    },
                    "reset":{
                        "coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmax|1400*1080',"","deg"],"limitvalue":[{"rotateZ":0},{"translateZ":0},{"scale":1},{"rotateX":0}],"duration":1200}
                    }
                }
            },
            {
                'targetid':'transformAnimateTarget3','effectStyle':"scrollRateCond_instantAdapt","condValue":0.5,"styleoption":{
                    "adapt":{
                        "transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":1.2
                    },
                    "reset":{
                        "transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":0
                    }
                }
            },
            {
                'targetid':'transformAnimateTarget2','effectStyle':"transformdynamic","styleoption":{"property":"transform","originvalue":[{'rotateY':0},{"scale":1},{"translateX":80}],"effectspeed":[120,2,320],"units":["deg","","responmin|1400*1080"],"calculate":["add","add","add"],"limitvalue":[{"rotateY":100},{"scale":3},{"translateX":380}]}
            }
        ]
    },
    '1401~9999':{
        'speedamount':1,
        'styledata':[
            {
                'targetid':'generalScrollTarget2-1','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":400,"effectspeed":340,"units":"responmin|1920*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[13,95,210,0],"units":"rgba","calculate":["add","add","add","add"],"limitvalue":[255,255,255,1]}]
            },
            {
                'targetid':'generalScrollTarget2-2','effectStyle':"dynamic","styleoption":[{"property":"top","originvalue":540,"effectspeed":480,"units":"responmin|1920*1080",'direction':"forward","calculate":'subtract',"limitvalue":80},{"property":"color","originvalue":[242,160,50,1],"effectspeed":[13,95,210,0],"units":"rgba","calculate":["add","add","add","add"],"limitvalue":[255,255,255,1]}]
            },
            {
                'targetid':"generalScrollTarget2-1-1","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                'targetid':"generalScrollTarget2-2-1","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                'targetid':"generalScrollTarget2-2-2","effectStyle":"dynamic","styleoption":[{"property":"opacity","originvalue":100,"effectspeed":100,"units":"%","direction":"forward","calculate":"subtract","limitvalue":0}]
            },
            {
                "targetid":"javascript_touchmoveTrigger_layoutVerBghorizontal","effectStyle":"dynamic","styleoption":[{"property":"left","originvalue":0,"effectspeed":450,"units":"%","direction":"forward","calculate":"subtract","limitvalue":-400}]
            },
            {
                'targetid':"javascript_touchmoveTrigger_autoheightTarget1","effectStyle":"autoheight"
            },
            {
                'targetid':"javascript_touchmoveTrigger_autowidthTarget1","effectStyle":"autowidth"
            },
            {
                'targetid' : 'movescrollTarget1-1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.3,"styleoption":{"adapt":{"animstyle":{"top":"-100%"},"duration":400,"complete":{}},"reset":{"animstyle":{"top":"0%"},"duration":400,"complete":{}}}
            },
            {
                'targetid': 'movescrollTarget2-1', 'effectStyle':"scrollRateCond_instantAdapt","condValue":0.6,"styleoption":{"adapt":{"animstyle":{"width":"css_responsive"},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":1},"reset":{"animstyle":{"width":"0%"},"duration":400,"complete":{},"inlineresponsive_allow":"false","responsevalue_rate":1}}
            },
            {
                'targetid':'transformAnimateTarget1','effectStyle':"scrollRateCond_instantAdapt","condValue":0.5,"styleoption":{
                    "adapt":{
                        "coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[20,220,60,0.9],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080',"","deg"],"limitvalue":[{"rotateZ":110},{"translateZ":700},{"scale":2},{"rotateX":50}],"duration":1200}
                    },
                    "reset":{
                        "coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0.8],"duration":800},"transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080',"","deg"],"limitvalue":[{"rotateZ":0},{"translateZ":0},{"scale":1},{"rotateX":0}],"duration":1200}
                    }
                }
            },
            {
                'targetid':'transformAnimateTarget3','effectStyle':"scrollRateCond_instantAdapt","condValue":0.5,"styleoption":{
                    "adapt":{
                        "transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":1.5
                    },
                    "reset":{
                        "transformanimstyle":{"property":"css_responsive","duration":1200},"duration":400,"complete":{},"inlineresponsive_allow":"true","responsevalue_rate":0
                    }
                }
            },
            {
                'targetid':'transformAnimateTarget2','effectStyle':"transformdynamic","styleoption":{"property":"transform","originvalue":[{'rotateY':0},{"scale":1},{"translateX":80}],"effectspeed":[120,3,400],"units":["deg","","responmin|1920*1080"],"calculate":["add","add","add"],"limitvalue":[{"rotateY":100},{"scale":4},{"translateX":400}]}
            }
        ]
    },
}
for(let g2=0; g2<javascript_mouseAndTouchArea_group2.length; g2++){
    let item=javascript_mouseAndTouchArea_group2[g2];
    item.setAttribute("targetdata",JSON.stringify(targetdata2));
}
mouseTouchMoveControlModule();