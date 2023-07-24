let javascript_StyleEffectTrigger2_imgframeMouseHover=document.getElementsByClassName("javascript_StyleEffectTrigger2_imgframeMouseHover");

for(let s=0; s<javascript_StyleEffectTrigger2_imgframeMouseHover.length; s++){
    let item=javascript_StyleEffectTrigger2_imgframeMouseHover[s];

    let triggerdatas_custom={
        'mouseenter':{
            "0~9999":{
                "style_datas":[
                    {
                        "target":"styleEffect_imgframeMouseHover_typo"+(s+1),
                        "styleoption":{
                            "transformanimstyle":{"property":"transform_inlinescript","units":['deg',"responmin|1920*1080","","deg","deg"],"limitvalue":[{"rotateZ":40},{"translateZ":900},{"scale":1.2},{"rotateY":20},{"rotateX":30}],"duration":600}
                        }
                     }
                ]
            }
        },
        "mouseleave":{
            "0~9999":{
                "style_datas":[
                    {
                        "target":"styleEffect_imgframeMouseHover_typo"+(s+1),
                        "styleoption":{
                            "transformanimstyle":{"property":"transform_inlinescript","units":['deg','responmin|1920*1080',"",'deg','deg'],'limitvalue':[{"rotateZ":0},{"translateZ":0},{"scale":1},{"rotateY":0},{"rotateX":0}],"duration":600}
                        }
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