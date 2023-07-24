function scroll_trigger(){

    let scrollevent_queue_native=[];
   
    return {
        'scroll_stickycontainer':   async function scroll_stickycontainer(){
            let nowscrollY=window.scrollY;
            let screenWidth=window.innerWidth;
           // console.log("======>scroll_stickycontainer===============================");
            //console.log("nowscrollY:",nowscrollY,scrollevent_queue_native);
    
            //main executinssons start
            let javascript_scrolls_sticky=document.getElementsByClassName(`javascript_scrolls_sticky`);
        
            for(let s=0; s<javascript_scrolls_sticky.length; s++){
                let scroll_item=javascript_scrolls_sticky[s];
        
                let targetdata=JSON.parse(scroll_item.getAttribute("javascript_scrolls_sticky"));
                let resolution_range=targetdata['resolution_range'];
                let resolution_start=parseInt(resolution_range.split('~')[0]);
                let resolution_end=parseInt(resolution_range.split('~')[1]);
    
                scroll_item.style=null;
                
                if(screenWidth >= resolution_start && screenWidth <= resolution_end){
                    let sticky_container_target=document.querySelector(`[targetindex='${targetdata['sticky_container_target']}']`);
    
                    let container_offsetStart=element_offsetTop_finds(sticky_container_target);
                    let container_offsetEnd=container_offsetStart + sticky_container_target.offsetHeight;
                   // console.log(`해당 지정범위내에서만 반응:`,screenWidth,resolution_start,resolution_end);
                    //console.log("mother container및 mother containber offset start~end and scrollY:",sticky_container_target,container_offsetStart,nowscrollY,container_offsetEnd);
    
                    if(nowscrollY < container_offsetStart){
                        scroll_item.style.position='absolute';
                        scroll_item.style.bottom='auto';
                        scroll_item.style.top='0%';
                        //scroll_item.style.setProperty('position','absolute','important');
                        //scroll_item.style.setProperty('bottom','auto');
                        //scroll_item.style.setProperty('top','0%','important');
    
                    }else if(nowscrollY >= container_offsetStart && nowscrollY <= (container_offsetEnd-700)){
                        scroll_item.style.position='fixed';
                        scroll_item.style.bottom='auto';
                        scroll_item.style.top='2%';
    
                        //scroll_item.style.setProperty('position','fixed','important');
                       
                    }else if(nowscrollY > (container_offsetEnd-700)){
                        scroll_item.style.position='absolute';
                        scroll_item.style.bottom='0%';
                        scroll_item.style.top='auto';
    
                        //scroll_item.style.setProperty('position','absolute','important');
    
                    }
                }
              
            }
            //main executeion ends... 
        },
        "scroll_normal_response":  function scroll_normal_response(){
            let javascript_scrollContainer=document.getElementById("javascript_scrollContainer");

            let nowscrollY= window.scrollY;
            let htmlElement= document.documentElement;
            
            let screenwidth=window.innerWidth;

            let viewportscreen_bottompos=nowscrollY + htmlElement.offsetHeight;
            console.log("==========================scroell normal repsonse start==========================",htmlElement,htmlElement.scrollTop);
           
            //console.log("now screenWidth:",screenwidth);
            //console.log("scroll status tracking normalize...  nowscrollY:",nowscrollY,viewportscreen_bottompos);
            
             //스크롤관련처리 부분(반응)
            let javascript_scroll_response_elements=document.getElementsByClassName("javascript_scroll_response");
            for(let e=0; e<javascript_scroll_response_elements.length; e++){
                let item_target=javascript_scroll_response_elements[e];
                //console.log("========스크롤반응 요소들html offsetTop상태:======start=====",item_target.offsetTop);
                //let target_offsetTop=item_target.offsetTop;
                let target_offsetTop=$(`[originid=${item_target.getAttribute("originid")}]`).offset().top();
                console.log("관련 타깃요소의 offsetTop값 jquery이용자로 relative여부 부모종속관계상관없이 문서에서의 페이지좌표출력가능:",target_offsetTop);

                let trigger_data=JSON.parse(item_target.getAttribute("scrollresponse_data"));
                if(trigger_data){
                    let matching_resolution;
                    for(let res in trigger_data){
                        let resolution=res;
                        let res_start=parseInt(resolution.split('~')[0]);
                        let res_end=parseInt(resolution.split('~')[1]);

                        if(screenwidth >= res_start && screenwidth <= res_end){
                            matching_resolution=res;
                        }
                    }

                    console.log("triggerdata:scrollnormalresponse",trigger_data,matching_resolution,trigger_data[matching_resolution]);

                    //해상도별 처리.
                    let forward_effect_styles=trigger_data[matching_resolution]['forward']['style_datas'];//forward이펙트가 적용될 style타깃들 및 스타일정의
                    let reset_effect_styles=trigger_data[matching_resolution]['reset']['style_datas'];
                    let target_responsePos=parseInt(trigger_data[matching_resolution]['responsepos']);
                    
                    //console.log("matching resolutionss and target responsepos",matching_resolution,target_responsePos);

                    if(viewportscreen_bottompos >= (target_offsetTop+target_responsePos)){
                        //console.log("viewport화면에 대상 보이기 시작 forward_effect_styles adaptss",item_target)
                    
                        for(let s=0; s<forward_effect_styles.length; s++){
                            let target_local=forward_effect_styles[s];//target option objecdtss 프로퍼티명(targetindex),프로퍼티값(객체)
                    
                            let style_optionItem=target_local['styleoption'];
                            let targetindexes=target_local['target'];
                            //mathcing find targetsss only one item
                            let related_htmlelements=$(`[targetindex*='${targetindexes}']`);
                            let matching_target;
                        // console.log("related_htmlelements:",related_htmlelements);
                            for(let t=0; t<related_htmlelements.length; t++){
                                let item_local=related_htmlelements[t];
                                //console.log('targetindexss',item_local.getAttribute("targetindex"));
                                let item_local_parts=item_local.getAttribute("targetindex").split(",");//복수개인것도 포함. 
                                if(item_local_parts.indexOf(targetindexes)!=-1 && item_local_parts.includes(targetindexes)){
                                    matching_target=item_local;
                                }
                            }
                            //enessss

                            //console.log("scroll response targets and satus((forward animatess))",targetindexes,matching_target);
                            let matching_target_indexes=matching_target.getAttribute("targetindex").split(',').join('\\,');               

                            if(matching_target.getAttribute("scroll_normal_response")=="false" || !(matching_target.getAttribute("scroll_normal_response"))){
                                console.log("scroll response targets and satus((forward animatess)) 실제반응===>>",targetindexes,matching_target);
                                if(typeof(style_optionItem)=='object'){
                                    let duration=style_optionItem['duration'];
                        
                                    let style_object=style_optionItem['animstyle'];
                                    let style_object_instant=style_optionItem['instantstyle'];
                                    let transform_animobject=style_optionItem['transformanimstyle'];
                                    let color_animobject=style_optionItem['coloranimstyle'];
                                    //console.log("target_local and local effectss",style_object,style_object_instant,duration);
                                    /*$(`[targetindex='${target_local}']`).animate({
                                        style_property : style_optionvalue['to']
                                    },style_optionvalue['duration']);*/
                                    //cssrespoinsive units추가!!================================================
                                    let responsevalue_rate=parseFloat(style_optionItem['responsevalue_rate']);
                                // let responsevalue_rate=1;
                                    let inlineresponsive_allow=style_optionItem['inlineresponsive_allow'];
                                    console.log("scroll response targets and satus((forward animatess)) >>>실제반응",targetindexes,responsevalue_rate);

                                    let matching_target_htmlElement=document.querySelector(`[targetindex=${matching_target_indexes}`);
                                    //"animstyle":{"width":"css_responsive",'height':"css_responsive",'padding-left':"css_responsive",'opacity':'100%'}
                                    for(styles in style_object){
                                        let values=style_object[styles];
                                        if(values==='css_responsive'){
                                            let find_property_value=find_nowscreen_matching_CSSproperty_responvalue(matching_target_htmlElement,styles,responsevalue_rate);
                                            console.log("styleEffect animate adapt css responsive valuess(devicdes상황별): ScrollingNormalresponse",find_property_value);
                                            style_object[styles]=find_property_value;
                                        }      
                                    }
                                    for(styles in style_object_instant){
                                        let values=style_object_instant[styles];
                                        if(values==='css_responsive'){
                                            let find_property_value=find_nowscreen_matching_CSSproperty_responvalue(matching_target_htmlElement,styles,responsevalue_rate);
                                            console.log("styleEffect animate adapt css responsive valuess(devicdes상황별): ScrollingNormalresponse",find_property_value);
                                            style_object_instant[styles]=find_property_value;
                                        }
                                    }
                                
                                    if(responsevalue_rate || !isNaN(responsevalue_rate)){
                                        $(`[targetindex='${matching_target_indexes}']`).attr('responsevalue_rate',responsevalue_rate);
                                    }
                                    if(inlineresponsive_allow){
                                        $(`[targetindex='${matching_target_indexes}']`).attr('inlineresponsive_allow',inlineresponsive_allow);
                                    }
                                    console.log("adapt responsive반영처리 style objectsss:scrollnormalResponse",style_object,style_object_instant);
                                    //cssrespoinsive units추가!! ends=s============================================
                                    if(style_object_instant){
                                        //$(`[targetindex*='${targetindexes}']`).css(style_object_instant);
                                        $(`[targetindex=${matching_target_indexes}]`).css(style_object_instant);
                                    }
                                    $(`[targetindex=${matching_target_indexes}]`).stop();//basic process (animstyles인자가 없어도 실행)
                                    if(style_object){
                                        //$(`[targetindex*='${targetindexes}']`).stop();
                                        //$(`[targetindex*='${targetindexes}']`).animate(style_object,duration)
                                        $(`[targetindex=${matching_target_indexes}]`).stop();
                                        $(`[targetindex=${matching_target_indexes}]`).animate(style_object,duration);
                                    }  
                                    if(transform_animobject){
                                        let transform_duration=transform_animobject['duration'];
                                        let property=transform_animobject['property'];
                                        //let originvalue=transform_animobject['originvalue'];
                                        let limitvalue=transform_animobject['limitvalue'];
                                        let units=transform_animobject['units'];
                        
                                        transform_duration = !transform_duration ? 500 :transform_duration;
                                        let transform_array=[];
                                        if(property==='transform_inlinescript'){
                                            let csstransform_prevnowvalue=JSON.parse(matching_target_htmlElement.getAttribute("csstransform_prevnowvalue"));
                                            console.log("===>>transform_inlinescript finding 기존 prevtransform_prevnowvalue:",csstransform_prevnowvalue);
                        
                                            for(let anim=0; anim<limitvalue.length; anim++){
                                                //let transform_originvalue=originvalue[anim];//roateatym,scaelx,translatex
                                                let transform_limitvalue=limitvalue[anim];
                                                let transform_units=units[anim];
                        
                                                for(let ori in transform_limitvalue){
                                                    //let object_purevalue=transform_originvalue[ori];
                                                    let object_limitvalue=transform_limitvalue[ori];
                        
                                                    if(transform_units.indexOf("responh")!=-1){//translateXYZ에해당(반응형단위일때)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                        //let screen_by_originvalue_ratevalue=100*(object_purevalue / screen_basis_height);
                                                        //console.log("transform_units responh인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,screen_basis_height,screen_by_originvalue_ratevalue);
                                                    
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / screen_basis_height);
                                                        console.log("unbits가 responh인경우로 transform_limitvalue적용값과 상대비레값들:",object_limitvalue,screen_basis_height,screen_by_limitvalue_ratevalue);
                        
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vh'
                                                        });
                                                    }else if(transform_units.indexOf("response")!=-1){//translatexyz해당(반응형단위일떄)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                    // let screen_by_originvalue_ratevalue=100*( object_purevalue / screen_basis_width);
                                                        //console.log("units가 response인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,screen_basis_width,screen_by_originvalue_ratevalue);
                                                    
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / screen_basis_width);
                                                        console.log("unbits가 response인경우로 transform_limitvalue적용값과 상대비레값들:",object_limitvalue,screen_basis_width,screen_by_limitvalue_ratevalue);
                        
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vw'
                                                        });
                                                    }else if(transform_units.indexOf("responmin")!=-1){//translatexyz해당(반응형단위일떄)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                        let morethanSize=Math.max(screen_basis_width,screen_basis_height);
                                                        let lessthanSize=Math.min(screen_basis_width,screen_basis_height);
                        
                                                    // let screen_by_originvalue_ratevalue=100*(object_purevalue / lessthanSize);
                                                        //console.log("units가 responmin인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,lessthanSize,screen_by_originvalue_ratevalue);
                                                    
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / lessthanSize);
                                                        console.log("unbits가 responmin인경우로 transform_limitvalue적용값과 상대비레값들:",object_limitvalue,lessthanSize,screen_by_limitvalue_ratevalue);
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vmin'
                                                        });
                                                    }else if(transform_units.indexOf("responmax")!=-1){//translatexyz해당(반응형단위일떄)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                        let morethanSize=Math.max(screen_basis_width,screen_basis_height);
                                                        let lessthanSize=Math.min(screen_basis_width,screen_basis_height);
                        
                                                        //let screen_by_originvalue_ratevalue=100*(object_purevalue / morethanSize);
                                                        //console.log("units가 responmax인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,morethanSize,screen_by_originvalue_ratevalue);
                                                        
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / morethanSize);
                                                        console.log("unbits가 responmax인경우로 object_limitvalue적용값과 상대비레값들:",object_limitvalue,morethanSize,screen_by_limitvalue_ratevalue);
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vmax'
                                                        });
                                                    }else{
                                                        //%,px,deg,""등등
                                                        //%,px,deg,""등등,vw,vh,vmin,vmax등도 지원됨  
                                                        //translateXYZ:%,px,fixed,vw,vh,vmin,vmax rotate,skew(deg),scale(""정수숫자단위)
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':object_limitvalue,'units':transform_units
                                                        });
                                                    }
                                                }
                                            }
                                            console.log("적용할 타깃 및 transformvalue:(((transformAnimStyless ::scrollnoramlresponse))",matching_target_indexes,transform_array);
                                            $(`[targetindex='${matching_target_indexes}']`).animateTransform(transform_array,transform_duration);
                                        }else if(property==='css_responsive'){
                                            let transform_array_cssInorigin=find_nowscreen_matching_CSSproperty_responvalue_transformver(matching_target_htmlElement,responsevalue_rate);
                                            console.log("적용할 타깃 및 transformvalue:(((transformAnimStyless ::scrollnoramlresponse))",matching_target_indexes,transform_array_cssInorigin);
                                            $(`[targetindex='${matching_target_indexes}']`).animateTransform(transform_array_cssInorigin,transform_duration);
                                        }
                                        
                                    }   
                                    if(color_animobject){
                                        //let originvalue=color_animobject['originvalue'];
                                        let units=color_animobject['units'];
                                        let limitvalue=color_animobject['limitvalue'];
                                        let color_duration=color_animobject['duration'];
                                        let property=color_animobject['property'];//background-color,color중 하나씩만(한 element당) 지원하는것으로 현재는 제한 두 color관련 프로퍼티를 동시에 anminate적용 불가능(한 element당)
                        
                                        let csscolor_prevnowvalue=JSON.parse(matching_target_htmlElement.getAttribute("csscolor_prevnowvalue"));
                                        console.log("===>>color_animobject finding 기존 csscolor_prevnowvalue:",csscolor_prevnowvalue);
                                        if(csscolor_prevnowvalue){
                                            console.log("===>>color_animobject finding 기존 csscolor_prevnowvalue:",csscolor_prevnowvalue,property,csscolor_prevnowvalue[property]);
                                        }
                        
                                        let colordata={
                                            'property':property,
                                            "rgbarray":[]
                                        }
                        
                                        csscolor_prevnowvalue=csscolor_prevnowvalue&&csscolor_prevnowvalue[property]?csscolor_prevnowvalue[property]:null;
                                        for(let ori=0; ori<limitvalue.length; ori++){
                                        // let rgb_originvalue=originvalue[ori];
                                            let rgb_limitvalue=limitvalue[ori];
                        
                                            if(csscolor_prevnowvalue){
                                                console.log("적용할 타깃 및 csscolor_prevnowvalue:(((csscolor_prevnowvalue ::scrollnoramlresponse))",csscolor_prevnowvalue,csscolor_prevnowvalue[ori],csscolor_prevnowvalue[ori]['value']);
                                            }
                        
                                            colordata['rgbarray'].push({
                                                'start':csscolor_prevnowvalue&&csscolor_prevnowvalue[ori]&&csscolor_prevnowvalue[ori]['value']?csscolor_prevnowvalue[ori]['value']:0,'end':rgb_limitvalue
                                            });
                        
                                        }
                                        console.log("적용할 타깃 및 rgbvalue:scrollnoramlresponse",matching_target_indexes,colordata);
                                        $(`[targetindex='${matching_target_indexes}']`).animateColor(colordata,color_duration);
                                    }   
                                    matching_target.setAttribute("scroll_normal_response","true");    
                                }
                            }
                        }
                    }else{
                    // console.log("viewport화면에 대상이 아직 안들어옴,뷰포트화면pos가 더 낮음.reset_effect_styles adapts",item_target)
                        for(let s=0; s<reset_effect_styles.length; s++){
                            let target_local=reset_effect_styles[s];//target option objecdtss 프로퍼티명(targetindex),프로퍼티값(객체)
                    
                            let style_optionItem=target_local['styleoption'];
                            let targetindexes=target_local['target'];
                            //mathcing find one item only 
                            let related_htmlelements=$(`[targetindex*='${targetindexes}']`);
                            let matching_target;
                            //console.log("related_htmlelements:",related_htmlelements);
                            for(let t=0; t<related_htmlelements.length; t++){
                                let item_local=related_htmlelements[t];
                                //console.log('targetindexss',item_local.getAttribute("targetindex"));
                                let item_local_parts=item_local.getAttribute("targetindex").split(",");//복수개인것도 포함. 
                                if(item_local_parts.indexOf(targetindexes)!=-1 && item_local_parts.includes(targetindexes)){
                                    matching_target=item_local;
                                }
                            }
                            //endsss

                            //console.log("scroll response targets and satus((reset animatess))",targetindexes,matching_target);
                            let matching_target_indexes=matching_target.getAttribute("targetindex").split(',').join('\\,');                        
                            if(matching_target.getAttribute("scroll_normal_response")=="true"){
                                //이미 true로 적용되어있는 상태에서만 reset시키며,이미 false상태라면 냅둔다.
                                console.log("scroll response targets and satus((reset animatess)) >>>실제반응",targetindexes,matching_target);

                                if(typeof(style_optionItem)=='object'){
                                    let duration=style_optionItem['duration'];
                        
                                    let style_object=style_optionItem['animstyle'];
                                    let style_object_instant=style_optionItem['instantstyle'];
                                    let transform_animobject=style_optionItem['transformanimstyle'];
                                    let color_animobject=style_optionItem['coloranimstyle'];
                                    //console.log("target_local and local effectss",style_object,style_object_instant,duration);
                                    /*$(`[targetindex='${target_local}']`).animate({
                                        style_property : style_optionvalue['to']
                                    },style_optionvalue['duration']);*/
                                    //cssrespoinsive units추가!!================================================
                                    let responsevalue_rate=parseFloat(style_optionItem['responsevalue_rate']);
                                    console.log("scroll response targets and satus((reset animatess)) >>>실제반응",targetindexes,responsevalue_rate);

                                    //let responsevalue_rate=1;
                                    let inlineresponsive_allow=style_optionItem['inlineresponsive_allow'];

                                    let matching_target_htmlElement=document.querySelector(`[targetindex=${matching_target_indexes}`);
                                    //"animstyle":{"width":"css_responsive",'height':"css_responsive",'padding-left':"css_responsive",'opacity':'100%'}
                                    for(styles in style_object){
                                        let values=style_object[styles];
                                        if(values==='css_responsive'){
                                            let find_property_value=find_nowscreen_matching_CSSproperty_responvalue(matching_target_htmlElement,styles,responsevalue_rate);
                                            console.log("styleEffect animate adapt css responsive valuess(devicdes상황별): ScrollingNormalresponse",find_property_value);
                                            style_object[styles]=find_property_value;
                                        }
                                    }
                                    for(styles in style_object_instant){
                                        let values=style_object_instant[styles];
                                        if(values==='css_responsive'){
                                            let find_property_value=find_nowscreen_matching_CSSproperty_responvalue(matching_target_htmlElement,styles,responsevalue_rate);
                                            console.log("styleEffect animate adapt css responsive valuess(devicdes상황별): ScrollingNormalresponse",find_property_value);
                                            style_object_instant[styles]=find_property_value;
                                        }
                                    }
                                    if(responsevalue_rate || !isNaN(responsevalue_rate)){
                                        $(`[targetindex='${matching_target_indexes}']`).attr('responsevalue_rate',responsevalue_rate);
                                    }
                                    if(inlineresponsive_allow){
                                        $(`[targetindex='${matching_target_indexes}']`).attr('inlineresponsive_allow',inlineresponsive_allow);
                                    }
                                    console.log("adapt responsive반영처리 style objectsss: scrollnormalResponse",style_object,style_object_instant);
                                    //cssrespoinsive units추가!! ends=s============================================
                                    if(style_object_instant){
                                        $(`[targetindex=${matching_target_indexes}]`).css(style_object_instant);
                                    }
                                    $(`[targetindex=${matching_target_indexes}]`).stop();
                                    if(style_object){
                                        $(`[targetindex=${matching_target_indexes}]`).stop();
                                        $(`[targetindex=${matching_target_indexes}]`).animate(style_object,duration,function(){
                                            //$(`[targetindex=${matching_target_indexes}]`).removeAttr("style");  
                                        })
                                    }  
                                    if(transform_animobject){
                                        let transform_duration=transform_animobject['duration'];
                                        let property=transform_animobject['property'];
                                        //let originvalue=transform_animobject['originvalue'];
                                        let limitvalue=transform_animobject['limitvalue'];
                                        let units=transform_animobject['units'];
                        
                                        transform_duration = !transform_duration ? 500 :transform_duration;
                                        let transform_array=[];
                                        if(property==='transform_inlinescript'){
                                            let csstransform_prevnowvalue=JSON.parse(matching_target_htmlElement.getAttribute("csstransform_prevnowvalue"));
                                            console.log("===>>transform_inlinescript finding 기존 prevtransform_prevnowvalue:",csstransform_prevnowvalue);
                        
                                            for(let anim=0; anim<limitvalue.length; anim++){
                                                //let transform_originvalue=originvalue[anim];//roateatym,scaelx,translatex
                                                let transform_limitvalue=limitvalue[anim];
                                                let transform_units=units[anim];
                        
                                                for(let ori in transform_limitvalue){
                                                    //let object_purevalue=transform_originvalue[ori];
                                                    let object_limitvalue=transform_limitvalue[ori];
                        
                                                    if(transform_units.indexOf("responh")!=-1){//translateXYZ에해당(반응형단위일때)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                        //let screen_by_originvalue_ratevalue=100*(object_purevalue / screen_basis_height);
                                                        //console.log("transform_units responh인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,screen_basis_height,screen_by_originvalue_ratevalue);
                                                    
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / screen_basis_height);
                                                        console.log("unbits가 responh인경우로 transform_limitvalue적용값과 상대비레값들:",object_limitvalue,screen_basis_height,screen_by_limitvalue_ratevalue);
                        
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vh'
                                                        });
                                                    }else if(transform_units.indexOf("response")!=-1){//translatexyz해당(반응형단위일떄)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                    // let screen_by_originvalue_ratevalue=100*( object_purevalue / screen_basis_width);
                                                        //console.log("units가 response인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,screen_basis_width,screen_by_originvalue_ratevalue);
                                                    
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / screen_basis_width);
                                                        console.log("unbits가 response인경우로 transform_limitvalue적용값과 상대비레값들:",object_limitvalue,screen_basis_width,screen_by_limitvalue_ratevalue);
                        
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vw'
                                                        });
                                                    }else if(transform_units.indexOf("responmin")!=-1){//translatexyz해당(반응형단위일떄)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                        let morethanSize=Math.max(screen_basis_width,screen_basis_height);
                                                        let lessthanSize=Math.min(screen_basis_width,screen_basis_height);
                        
                                                    // let screen_by_originvalue_ratevalue=100*(object_purevalue / lessthanSize);
                                                        //console.log("units가 responmin인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,lessthanSize,screen_by_originvalue_ratevalue);
                                                    
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / lessthanSize);
                                                        console.log("unbits가 responmin인경우로 transform_limitvalue적용값과 상대비레값들:",object_limitvalue,lessthanSize,screen_by_limitvalue_ratevalue);
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vmin'
                                                        });
                                                    }else if(transform_units.indexOf("responmax")!=-1){//translatexyz해당(반응형단위일떄)
                                                        let screen_basis_width=transform_units.split("|")[1].split("*")[0];
                                                        let screen_basis_height=transform_units.split("|")[1].split("*")[1];
                                                        let morethanSize=Math.max(screen_basis_width,screen_basis_height);
                                                        let lessthanSize=Math.min(screen_basis_width,screen_basis_height);
                        
                                                        //let screen_by_originvalue_ratevalue=100*(object_purevalue / morethanSize);
                                                        //console.log("units가 responmax인경우로 transform_originvalue적용값과 상대비례값들:",object_purevalue,morethanSize,screen_by_originvalue_ratevalue);
                                                        
                                                        let screen_by_limitvalue_ratevalue=100*(object_limitvalue / morethanSize);
                                                        console.log("unbits가 responmax인경우로 object_limitvalue적용값과 상대비레값들:",object_limitvalue,morethanSize,screen_by_limitvalue_ratevalue);
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':screen_by_limitvalue_ratevalue,'units':'vmax'
                                                        });
                                                    }else{
                                                        //%,px,deg,""등등
                                                        //%,px,deg,""등등,vw,vh,vmin,vmax등도 지원됨  
                                                        //translateXYZ:%,px,fixed,vw,vh,vmin,vmax rotate,skew(deg),scale(""정수숫자단위)
                                                        if(csstransform_prevnowvalue){
                                                            console.log("transform_inlinescript matching property findsss",ori,csstransform_prevnowvalue, csstransform_prevnowvalue[ori],csstransform_prevnowvalue[ori]['value']);
                                                        }
                                                        //targetitem.style[property]=`${ori}(${adapt_value}vh)`;
                                                        transform_array.push({
                                                            'property':ori,'start':csstransform_prevnowvalue&&csstransform_prevnowvalue[ori]&&csstransform_prevnowvalue[ori]['value']?csstransform_prevnowvalue[ori]['value']:0,'end':object_limitvalue,'units':transform_units
                                                        });
                                                    }
                                                }
                                            }
                                            console.log("적용할 타깃 및 transformvalue:(((transformAnimStyless ::scrollnoramlresponse))",matching_target_indexes,transform_array);
                                            $(`[targetindex='${matching_target_indexes}']`).animateTransform(transform_array,transform_duration);
                                        }else if(property==='css_responsive'){
                                            let transform_array_cssInorigin=find_nowscreen_matching_CSSproperty_responvalue_transformver(matching_target_htmlElement,responsevalue_rate);
                                            console.log("적용할 타깃 및 transformvalue:(((transformAnimStyless ::scrollnoramlresponse))",matching_target_indexes,transform_array_cssInorigin);
                                            $(`[targetindex='${matching_target_indexes}']`).animateTransform(transform_array_cssInorigin,transform_duration);
                                        }
                                        
                                    }   
                                    if(color_animobject){
                                        //let originvalue=color_animobject['originvalue'];
                                        let units=color_animobject['units'];
                                        let limitvalue=color_animobject['limitvalue'];
                                        let color_duration=color_animobject['duration'];
                                        let property=color_animobject['property'];//background-color,color중 하나씩만(한 element당) 지원하는것으로 현재는 제한 두 color관련 프로퍼티를 동시에 anminate적용 불가능(한 element당)
                        
                                        let csscolor_prevnowvalue=JSON.parse(matching_target_htmlElement.getAttribute("csscolor_prevnowvalue"));
                                        console.log("===>>color_animobject finding 기존 csscolor_prevnowvalue:",csscolor_prevnowvalue);
                                        if(csscolor_prevnowvalue){
                                            console.log("===>>color_animobject finding 기존 csscolor_prevnowvalue:",csscolor_prevnowvalue,property,csscolor_prevnowvalue[property]);
                                        }
                        
                                        let colordata={
                                            'property':property,
                                            "rgbarray":[]
                                        }
                        
                                        csscolor_prevnowvalue=csscolor_prevnowvalue&&csscolor_prevnowvalue[property]?csscolor_prevnowvalue[property]:null;
                                        for(let ori=0; ori<limitvalue.length; ori++){
                                        // let rgb_originvalue=originvalue[ori];
                                            let rgb_limitvalue=limitvalue[ori];
                        
                                            if(csscolor_prevnowvalue){
                                                console.log("적용할 타깃 및 csscolor_prevnowvalue:(((csscolor_prevnowvalue ::scrollnoramlresponse))",csscolor_prevnowvalue,csscolor_prevnowvalue[ori],csscolor_prevnowvalue[ori]['value']);
                                            }
                        
                                            colordata['rgbarray'].push({
                                                'start':csscolor_prevnowvalue&&csscolor_prevnowvalue[ori]&&csscolor_prevnowvalue[ori]['value']?csscolor_prevnowvalue[ori]['value']:0,'end':rgb_limitvalue
                                            });
                        
                                        }
                                        console.log("적용할 타깃 및 rgbvalue:scrollnoramlresponse",matching_target_indexes,colordata);
                                        $(`[targetindex='${matching_target_indexes}']`).animateColor(colordata,color_duration);
                                    }    

                                }
                            }
                            matching_target.setAttribute("scroll_normal_response","false");                                   
                        }
                    }
                    //console.log("========스크롤반응 요소들html offsetTop상태:======endss=====");
                }
                
            }
            htmlElement.setAttribute("isScroll","true")
            console.log("===============================scroell normal repsonse end================================")
        }   
    }
}
//let javascript_scrollContainer=document.getElementById("javascript_scrollContainer");
let javascript_scrollContainer=document.documentElement;

//let scroll_action_local=scroll_trigger()['scroll_stickycontainer'];
//window.addEventListener('scroll',scroll_action_local,false);
//window.addEventListener("resize",scroll_action_local,false);
//scroll_action_local();


let scroll_normal_response=scroll_trigger()['scroll_normal_response'];
if(javascript_scrollContainer){
    window.addEventListener('scroll',scroll_normal_response,false);
    window.addEventListener("resize",scroll_normal_response,false);
    //javascript_scrollContainer.scrollTop=0;
}else{
    window.addEventListener('scroll',scroll_normal_response,false);
    window.addEventListener('resize',scroll_normal_response,false);

}