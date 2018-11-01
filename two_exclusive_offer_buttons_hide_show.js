fpbtn -> form display block
fcbtn -> form display hidden
<->



<!-- JS -->
$(document).ready(function(){
	$('.fpbtn').click(function(){
		$('.embdbtns').attr('style', 'display:none;');
		$('.frm1').appendTo('.dblockhere');
	});
	$('.fcbtn').click(function(){
		$('.embdbtns').attr('style', 'display:none;');
		$('.frm2').appendTo('.dblockhere');
	});
});


<!-- buttons -->
<div class="btnwraps">
	<div class="fpbtnwrap">
		<input class="btn submit fpbtn" name="submit" type="submit" value="For Patients">
		<span class="mobdhide" style="margin:0 10px;"></span>
		<input class="btn submit fcbtn" name="submit" type="submit" value="For Chiros">
	</div>
</div>


<!-- CSS -->
.dhidden{
	display:none;
}
.dblockhere{
	display:block;
}
.btnwraps{
	margin:0 auto;
	width:100%;
}
.fpbtnwrap{
    text-align:center;
}
.fpbtn, .fcbtn{
	display:inline-block!important;
}
@media(max-width:565px){
	.mobdhide{
		diplay:none;
	}
}