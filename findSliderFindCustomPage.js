//==============FIND SLIDER================

setTimeout(function(){
$('ul li .slider__image--wrap').each(function(){
var frvnco = $(this).find('.slider__image--new').attr('style');
console.log(frvnco);
    if(frvnco === 'style="background-image: url("https://cdcssl.ibsrv.net/ibimg/smb/1280x1920_80/webmgr/0a/c/7/5a987133d87bd_finl.png");"'){
    }
});
},2500);
    


//=====FOR SELECT CUSTOM PAGE=====
$(document).ready(function(){
    if(window.location.pathname !== "/") {
        $('.slideshow').attr('style', 'display:none;');
    }
});
//=====FOR SELECT CUSTOM PAGE=====
setTimeout(function(){
    if(window.location.pathname.slice(-14) === "salon-products"){
        $('.gallgadot').prependTo('.wrap__section.gradient');
    }
},500);
//=====FOR SELECT CUSTOM PAGE=====
$(document).ready(function(){
    if(window.location.href.indexOf("special-offers") > -1) {
        $('.wrap__page-content').css('background-color', 'rgb(26, 38, 55)');
    }
});