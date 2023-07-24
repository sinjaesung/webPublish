let javascript_scroll_response_transformAnimateTarget1_=document.getElementsByClassName("javascript_scroll_response_transformAnimateTarget1_");
for(let e=0; e<javascript_scroll_response_transformAnimateTarget1_.length; e++){
    let item_target=javascript_scroll_response_transformAnimateTarget1_[e];

    let addpos_flag=0;
    if((e % 3)==0){
        addpos_flag=80;
    }else if((e %3)==1){
        addpos_flag=20;
    }else if((e % 3)==2){
        addpos_flag=40;
    }   

    let scrollTargets_adaptdata={
        '0~9999':{
            'forward':{
                'style_datas':[
                    {
                        "target":`transformAnimateTarget1_`,
                        "styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[150,90,220,0.9],"duration":800},
                        "transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080',"","deg","deg"],"limitvalue":[{"rotateZ":90},{"translateX":200},{"scale":2},{"rotateY":50},{"rotateX":30}],"duration":1200}}
                    }
                ]
            },
            "reset":{
                'style_datas':[
                    {
                        "target":`transformAnimateTarget1_`,
                        "styleoption":{"coloranimstyle":{"property":"background-color","units":"rgba","limitvalue":[0,0,0,0],"duration":800},
                        "transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080',"","deg","deg"],"limitvalue":[{"rotateZ":0},{"translateX":-1080},{"scale":1},{"rotateY":0},{"rotateX":0}],"duration":1200}}
                    }
                ]
            },
            'responsepos':200+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}
let javascript_scroll_response_transformAnimateTarget3_=document.getElementsByClassName("javascript_scroll_response_transformAnimateTarget3_");
for(let e=0; e<javascript_scroll_response_transformAnimateTarget3_.length; e++){
    let item_target=javascript_scroll_response_transformAnimateTarget3_[e];

    let addpos_flag=0;
    if((e % 3)==0){
        addpos_flag=80;
    }else if((e %3)==1){
        addpos_flag=20;
    }else if((e % 3)==2){
        addpos_flag=40;
    }   

    let scrollTargets_adaptdata={
        '0~9999':{
            'forward':{
                'style_datas':[
                    {
                        "target":`transformAnimateTarget3_`,
                        "styleoption":{
                            "animstyle":{"opacity":0.96},"duration":1200,"complete":{},
                            "transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":0}
                    }                    
                ]
            },
            "reset":{
                'style_datas':[    
                    {
                        "target":`transformAnimateTarget3_`,
                        "styleoption":{
                            "animstyle":{"opacity":0},"duration":1200,"complete":{},
                            "transformanimstyle":{"property":"css_responsive","duration":1200},"inlineresponsive_allow":"true","responsevalue_rate":1}
                    }
                ]
            },
            'responsepos':200+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}


let coloreffectTarget_scrollresponse08=document.getElementsByClassName("coloreffectTarget_scrollresponse08");
for(let e=0; e<coloreffectTarget_scrollresponse08.length; e++){
    let item_target=coloreffectTarget_scrollresponse08[e];
    //console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,item_target.offsetTop);

    let addpos_flag=0;
    if((e % 3)==0){
        addpos_flag=80;
    }else if((e %3)==1){
        addpos_flag=20;
    }else if((e % 3)==2){
        addpos_flag=40;
    }   

    let scrollTargets_adaptdata={
        '0~9999':{
            'forward':{
                'style_datas':[
                    {
                        "target":`coloreffectTarget_scrollresponse08`,
                        "styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[240,60,50,0.9],"duration":1000}}
                    },
                  
                ]
            },
            "reset":{
                'style_datas':[
                    {
                        "target":`coloreffectTarget_scrollresponse08`,"styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[20,50,250,0.8],"duration":1000}}
                    }
                ]
            },
            'responsepos':200+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}
let javascript_scroll_response_section01=document.getElementsByClassName("javascript_scroll_response_section01");
for(let e=0; e<javascript_scroll_response_section01.length; e++){
    let item_target=javascript_scroll_response_section01[e];
    //console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,item_target.offsetTop);

    let addpos_flag=0;
    if((e % 3)==0){
        addpos_flag=80;
    }else if((e %3)==1){
        addpos_flag=20;
    }else if((e % 3)==2){
        addpos_flag=40;
    }   

    let scrollTargets_adaptdata={
        '0~9999':{
            'forward':{
                'style_datas':[
                    {
                        "target":`javascript_scroll_response_section01`,
                        "styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[255,255,50,0.9],"duration":1500}}
                    }
                ]
            },
            "reset":{
                'style_datas':[
                    {
                        "target":`javascript_scroll_response_section01`,"styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[60,200,100,0.8],"duration":1500}}
                    }    
                ]
            },
            'responsepos':120+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}
let javascript_scroll_response_section07=document.getElementsByClassName("javascript_scroll_response_section07");
for(let e=0; e<javascript_scroll_response_section07.length; e++){
    let item_target=javascript_scroll_response_section07[e];
<<<<<<< HEAD
    console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,$(`[originid=${item_target.getAttribute("originid")}`));
    let originId=item_target.getAttribute("originid").split('~').join('\\~');
    console.log("targetoriginid:",originId);
=======
    //console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,item_target.offsetTop);
>>>>>>> 5788cd64b8fcdea04143945068eea84ba0be1978

    let addpos_flag=0;
    if((e % 3)==0){
        addpos_flag=80;
    }else if((e %3)==1){
        addpos_flag=20;
    }else if((e % 3)==2){
        addpos_flag=40;
    }   

    let scrollTargets_adaptdata={
        '0~9999':{
            'forward':{
                'style_datas':[
                    {
                        "target":`javascript_scroll_response_section07`,
                        "styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[55,250,250,0.9],"duration":1500}}
                    }
                ]
            },
            "reset":{
                'style_datas':[
                    {
                        "target":`javascript_scroll_response_section07`,"styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[250,250,250,0.8],"duration":1500}}
                    }    
                ]
            },
            'responsepos':240+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}
