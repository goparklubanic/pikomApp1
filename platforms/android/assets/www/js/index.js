$(document).ready(function(){

	$("#background").change(function(){
		/* ambil value dari #background */
		var bg = $("#background").val();
		
		/* jadikan bg sebagai background-color #sample */
		$("#sample").css("background-color",bg);
	});
	
	$("#warnahuruf").change(function(){
		/* ambil value dari #warna huruf */
		var wh = $("#warnahuruf").val();
		
		/* jadikan bg sebagai background-color #sample p*/
		$("#sample p").css("color",wh);
	});

});
