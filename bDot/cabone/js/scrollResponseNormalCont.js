let javascript_scroll_response_group1=document.getElementsByClassName("javascript_scroll_response_group1");
let scrollTargets_adaptdata;
for(let e=0; e<javascript_scroll_response_group1.length; e++){
    let item_target=javascript_scroll_response_group1[e];
    console.log("타깃 스크롤포스관련 로드시점관련 추적:",item_target,item_target.offsetTop);

    let addpos_flag=0;
    if(e % 3 == 0) addpos_flag=120;
    else{
        if(e % 3 == 1){ 
            addpos_flag = 80
        }
        else if (e %3 == 2) {
            addpos_flag=100
        }
    }

    scrollTargets_adaptdata={
        '0~9999':{
            'forward':{
                'style_datas':[{
                    'target':"scrollresponse_motioncircleShape1",
                    'styleoption':{
                        'coloranimstyle':{
                            'property':'background-color',
                            'units':"rgba",
                            'limitvalue':[240,240,240,0.9],
                            'duration':400
                        },
                    }
                }]
            },
            "reset":{
                'style_datas':[{
                    'target':"scrollresponse_motioncircleShape1",
                    "styleoption":{
                        "coloranimstyle":{
                            'property':'background-color',
                            'units':'rgba',
                            'limitvalue':[80,120,200,0.9],
                            'duration':400
                        }
                    }
                }]
            },
            'responsepos':120+addpos_flag
        }
    }
    item_target.setAttribute("scrollresponse_data",JSON.stringify(scrollTargets_adaptdata));
}
