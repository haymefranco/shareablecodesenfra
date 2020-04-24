setInterval(function(){
    var x = $('.classinit').attr('class');
    if (x === undefined){
    	//$( append script here).addClass('classinit');
    	console.log(x);
    }
    else {
        return;
    }
},500);








//==============INTERVALSTOPPER VALUE is ZERO================
var x = 0;
setInterval(function(){
    if (x === 0){
    (CODE HERE)
    x++;
    }
    else{
        return;
    }
},500);
