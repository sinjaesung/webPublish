/*공통 JS START*/

//페이지 이동
function go_url(url){
	location.href = url;
}


//게시판 파일 다운로드
function board_file_download(idx, board_code, file_cnt){
	if(idx=="" || board_code=="" || file_cnt==""){
		alert("잘못된 접근입니다.");
		return false;
	}else{
		location.href='/module/lib/board_file_download.php?idx='+idx+'&board_code='+board_code+'&file_cnt='+file_cnt;
	}
}

//스팸체크
function spam_check(){

	$.ajax({
		url:"/module/ajax/board.php",
		type:'POST',
		data: {"ajax_code" : "ajax_board_spam_check"},
		async: false,
		success:function(data){
			//console.log(data);
			$("#spam_check").val(data);
		},
		error:function(jqXHR, textStatus, errorThrown){
		}
	});	
}

//이메일 select 변경시 자동 입력
function change_email(id,mail){
	$("#"+id).val(mail);
}

//게시판 파일 다운로드
function board_file_download(idx, board_code, file_cnt){
	if(idx=="" || board_code=="" || file_cnt==""){
		alert("잘못된 접근입니다.");
		return false;
	}else{
		location.href='/module/lib/board_file_download.php?idx='+idx+'&board_code='+board_code+'&file_cnt='+file_cnt;
	}
}

//게시판 파일 업로드 버튼 
function board_file_upload(file_cnt){
	var board_file_id = "#board_file"+file_cnt;
	var board_file_conv_id = "#board_file_conv"+file_cnt;
	//var board_file_img = "#image_thum"+file_cnt;

	$(board_file_id).click();

	var fileTarget = $('.board_file');
	
	fileTarget.on('change', function(){
		if(window.FileReader){ // modern browser 
			var filename = $(this)[0].files[0].name; 
		} else { // old IE 
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
		} // 추출한 파일명 삽입 
		
		$(this).siblings('.board_file_name').val(filename); 

		var file = document.querySelector(board_file_id);
		var fileList = file.files;

		// 읽기
		var reader = new FileReader();
		reader.readAsDataURL(fileList [0]);

		//로드 한 후
		reader.onload = function  () {
			//document.querySelector(board_file_img).src = reader.result ;
		};
	});
}



// 쿠키 가져오기  
function getCookie( name ) {  
	var nameOfCookie = name + "=";  
	var x = 0;  
	while ( x <= document.cookie.length )  
	{
		var y = (x+nameOfCookie.length);  
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {  
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )  
				endOfCookie = document.cookie.length;  
			return unescape( document.cookie.substring( y, endOfCookie ) );  
		}
		x = document.cookie.indexOf( " ", x ) + 1;  
		if ( x == 0 )  
			break;  
	}
	return "";
}  
  
  
// 쿠키 설정
function setCookie( name, value ) {   
	var expiredays;
	var todayDate = new Date();   
	todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);  
	
	if ( todayDate > new Date() ){  
		expiredays = expiredays - 1;  
	}  
	todayDate.setDate( todayDate.getDate() + expiredays );   
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"

	window.close();
}  


/*공통 JS END*/










/*제보하기*/

//약관동의
function report02_chk(url){
	if($("input:checkbox[id='agree_terms']").is(":checked")){
		location.href = url;
	}else{
		alert('개인정보 제공에 동의해주세요');
		
	}
}

//게시판 폼 체크
function board_form_check(board_code){

	if(board_code=="report"){
		var gubun = $(':radio[name="gubun"]:checked').val();
		var board_name = $("#board_name").val();
		var board_title = $("#board_title").val();
		var board_content = $("#board_content").val();
		var board_email1 = $("#board_email1").val();
		var board_email2 = $("#board_email2").val();
		var board_tel1 = $("#board_tel1").val();
		var board_tel2 = $("#board_tel2").val();
		var board_tel3 = $("#board_tel3").val();
		var board_addinfo1 = $("#board_addinfo1").val();
		var board_file1 = $("#board_file1").val();
		
		if(gubun=="A"){
			if(board_name==""){
				alert("이름을 입력해주세요");
				$("#board_name").focus();
				return false;
			}

			if(board_email1==""){
				alert("이메일을 입력해주세요");
				$("#board_email1").focus();
				return false;
			}

			if(board_email2==""){
				alert("이메일을 입력해주세요");
				$("#board_email2").focus();
				return false;
			}

			if(board_tel1==""){
				alert("전화번호를 입력해주세요");
				$("#board_tel1").focus();
				return false;
			}

			if(board_tel2==""){
				alert("전화번호를 입력해주세요");
				$("#board_tel2").focus();
				return false;
			}

			if(board_tel3==""){
				alert("전화번호를 입력해주세요");
				$("#board_tel3").focus();
				return false;
			}
		}

		if(board_addinfo1==""){
			alert("부조리 유형을 선택해주세요");
			$("#board_addinfo1").focus();
			return false;
		}

		if(board_title==""){
			alert("제목을 입력해주세요");
			$("#board_title").focus();
			return false;
		}

		if(board_content==""){
			alert("내용을 입력해주세요");
			$("#board_content").focus();
			return false;
		}
		
		if(board_file1==""){
			alert("첨부파일을 등록해주세요.");
			$("#board_file1").focus();
			return false;
		}

		if (grecaptcha.getResponse() == ""){
			alert("자동등록 방지를 체크해주세요.");
			return false;
		}

		//스펨 체크
		spam_check();
	}
}

/*제보하기*/