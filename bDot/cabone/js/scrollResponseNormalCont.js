let javascript_scroll_response_group1=document.getElementsByClassName("javascript_scroll_response_group1");
for(let e=0; e<javascript_scroll_response_group1.length; e++){
    let item_target=javascript_scroll_response_group1[e];
    console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,item_target.offsetTop);

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
                        "target":`coloreffectTarget_scrollresponse1`,
                        "styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[250,250,240,0.9],"duration":4500}}
                    }
                ]
            },
            "reset":{
                'style_datas':[
                    {
                        "target":`coloreffectTarget_scrollresponse1`,"styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[60,200,100,0.8],"duration":4500}}
                    }    
                ]
            },
            'responsepos':120+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}
let javascript_scroll_response_section01=document.getElementsByClassName("javascript_scroll_response_section01");
for(let e=0; e<javascript_scroll_response_section01.length; e++){
    let item_target=javascript_scroll_response_section01[e];
    console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,item_target.offsetTop);

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
                        "target":`coloreffectTarget_scrollresponse_section01`,
                        "styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[50,50,250,0.9],"duration":1500}}
                    }
                ]
            },
            "reset":{
                'style_datas':[
                    {
                        "target":`coloreffectTarget_scrollresponse_section01`,"styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[60,200,100,0.8],"duration":1500}}
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
    console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,$(`[originid=${item_target.getAttribute("originid")}`));
    let originId=item_target.getAttribute("originid").split('~').join('\\~');
    console.log("targetoriginid:",originId);

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
                        "target":`coloreffectTarget_scrollresponse_section07`,
                        "styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[55,250,250,0.9],"duration":1500}}
                    }
                ]
            },
            "reset":{
                'style_datas':[
                    {
                        "target":`coloreffectTarget_scrollresponse_section07`,"styleoption":{"coloranimstyle":{"property":"background","units":"rgba","limitvalue":[60,150,200,0.8],"duration":1500}}
                    }    
                ]
            },
            'responsepos':120+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}
