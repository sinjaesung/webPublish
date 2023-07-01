//페이지 이동
function go_url(url){
	location.href = url;
}


//search_key 값 변경
function change_search_key(sel_data){
	$("#searchKey").val(sel_data);
}


//파일 다운로드
function front_file_download(folderName, fileName, originalFileName){
	
	originalFileName = originalFileName.replace("#","＃");
	originalFileName = originalFileName.replace("&","＆");
	
	var url = "/common/fileDownload.do?folderName="+folderName+"&fileName="+fileName+"&originalFileName="+originalFileName;		
	location.href = encodeURI(url);
}



//이메일 정규식 체크
function email_check(email) {

	var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return reg.test(email);

}



//faq 메일 폼 체크
function faq_form_check(){
	var name = $("#name").val();
	var title = $("#title").val();
	var content = $("#content").val();
	var mail = $("#mail").val();
	
	if(name == ""){
		alert("이름을 입력해주세요.");
		$("#name").focus();
		return false;
	}
	
	if(title == ""){
		alert("제목을 입력해주세요.");
		$("#title").focus();
		return false;
	}
	
	if(mail == ""){
		alert("이메일을 입력해주세요.");
		$("#mail").focus();
		return false;
	}else{
		
		if(!email_check(mail))	{
			alert("이메일 형식이 잘못되었습니다");
			$("#mail").focus();
			return false;
		}  		
		
	}
	
	if(content == ""){
		alert("문의내용을 입력해주세요.");
		$("#content").focus();
		return false;
	}
	
	
	if(!$('#agree').is(':checked')){
		alert("개인정보 수집 및 이용에 동의해주세요.");
		$("#agree").focus();
		return false;		
	}
	
    $("#faq_submit").hide();
    $("#faq_button").show();	
}




//쿠키 저장하기
var set_cookie = function(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};



//쿠키 가져오기
var get_cookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};


//게시글 조회수 증가
function board_count_up(idx){
	
	if(idx!=""){
		
		var cookie_board_count_up = get_cookie("board_count_up");
				
		if(cookie_board_count_up==null || cookie_board_count_up==""){			
			
			var input_cookie_value = "||"+idx+"||";
			
			$.ajax({
				url:"/board/boardCountUp.do",			
				type:'GET',
				async: false,
				data: {"idx" : idx},		
				success:function(data){
					set_cookie("board_count_up", input_cookie_value, 1);
				},
				error:function(jqXHR, textStatus, errorThrown){
				}
			});			
		}else{
			
			//쿠키 에 존재할 경우
			if (cookie_board_count_up.indexOf("||"+idx+"||") != -1) {
				
			}else{
								
				//존재하지 않을경우 기존 쿠키값 + 신규 쿠키값
				var input_cookie_value = cookie_board_count_up;
				input_cookie_value += "||"+idx+"||";
				
				$.ajax({
					url:"/board/boardCountUp.do",			
					type:'GET',
					async: false,
					data: {"idx" : idx},		
					success:function(data){
						set_cookie("board_count_up", input_cookie_value, 1);
					},
					error:function(jqXHR, textStatus, errorThrown){
					}
				});	
			}
		}
				
	}
	
}









