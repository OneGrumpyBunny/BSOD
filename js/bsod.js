$(document).ready(function() {		
		$("#BSOD-break-btn").click(function() {  
			$("BSOD-break-btn").addClass('buttonDepress');
			$("#screen").addClass("screenblur");
			   
			setTimeout( function() {  
				$("#bluescreen").css('display','block');
				
			},3000);
			setTimeout(function() {
				$("#BSOD-fix-btn").css('display','block');
			},5000);
		});
		$("#BSOD-fix-btn").click(function() {
			$("#screen").removeClass("screenblur");
			$("#BSOD-fix-btn").css('display','none');

			$("#bluescreen").css('display','none');
		});
	});