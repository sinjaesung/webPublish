//태그 전부 제거(웹 에디터)
function fRemoveHtmlTag(string){
	var objReplace = new RegExp();
	objReplace = /[<][^>]*[>]/gi;
	string = string.replace(/\r\n/ig, "");
	string = string.replace(/&nbsp;/ig, "");
	return string.replace(objReplace, "");
}
//공백,줄바꿈 전부 제거(Textarea)
function fRemoveBlankEnter(string){
	string = string.replace(/\n/ig, "");
	string = string.replace(/\r\n/ig, "");
	string = string.replace(/&nbsp;/ig, "");
	return trim(string);
}

// 공백제거
function trim(txt) {
	while (txt.indexOf(' ') >= 0) {
		txt = txt.replace(' ','');
	}
	return txt;
}

// 숫자만 입력(ie 8 이하에만 적용됨)
function onlyNumber(){
	if (event.keyCode >= 48 && event.keyCode <= 57){
		event.returnValue = true;
	}else{
		event.returnValue = false;
	}
}
// 숫자만 입력
function onlyNumber2(obj){
	val=obj.value;
	obj.value=val.replace(/[^0-9]/gi, "");
}

// 핸드폰 형식으로 입력했는지 체크
function isCorrectHp(s_val) {
	var inHp = false;

	var hp_check = /^\d{3}-\d{3,4}-\d{4}$/;
	if(hp_check.test(s_val)){
		inHp = true;
	}

	return inHp;
}

// 이메일 형식으로 입력했는지 체크
function isCorrectEmail(s_val) {
	var inEmail = false;

	var email_check = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	if(email_check.test(s_val)){
		inEmail = true;
	}

	return inEmail;
}

// 비밀번호 규칙 체크
function Action_CheckPw(s_pw) {
	var inNum = false;
	var inEng = false;
	var inSChar = false;
	var inRange = false;

	// 6자리 이상 20자 이하 확인
	if((s_pw.length >= 6) && (s_pw.length <= 20)) {
		inRange = true;
	}

	// 숫자 포함 여부 확인
	for(i=0; i<s_pw.length; i++) {
		if((s_pw.charCodeAt(i) >= 48) && (s_pw.charCodeAt(i)<=57)) {
			inNum = true;
			break;
		}
	}

	// 영문자 포함 여부 확인
	for(i=0; i<s_pw.length; i++) {
		if(((s_pw.charCodeAt(i) >= 65) && (s_pw.charCodeAt(i)<=90)) || ((s_pw.charCodeAt(i) >= 97) && (s_pw.charCodeAt(i)<=122))) {
			inEng = true;
			break;
		}
	}
/*
	// 특수문자 포함 여부 확인
	for(i=0; i<s_pw.length; i++) {
		if(((s_pw.charCodeAt(i) >= 33) && (s_pw.charCodeAt(i)<=47)) || ((s_pw.charCodeAt(i) >= 58) && (s_pw.charCodeAt(i)<=64)) || ((s_pw.charCodeAt(i) >= 91) && (s_pw.charCodeAt(i)<=96))) {
			inSChar = true;
			break;
		}
	}
*/
//	return (inRange&&inNum&&inEng&&inSChar);
	return (inRange&&inNum&&inEng);
}


function Action_Sel_Gugun_Ajax(sel_id, selVal, selVal2){
	$.ajax({
		type: "POST",
		url: "../inc/sel_gugun.php",
		data: "val="+selVal,
		//contentType: "application/json; charset=utf-8",
		//dataType: "xml",
		success: function (data) {
			if(data && data != "No Data"){
				var arrData = data.split('|');
				for(i=0; i<arrData.length;i++){
					var arrDataVal = arrData[i].split('::');
					$(sel_id).append('<option value="'+arrDataVal[0]+'">'+arrDataVal[1]+'</option>');
					if(arrDataVal[0] == selVal2){ $(sel_id+" option:eq("+(i+1)+")").attr("selected", "selected"); }
				}
			}
		},
		failure: function (data) {
			alert("데이터가 없습니다.");
		}
	});
}