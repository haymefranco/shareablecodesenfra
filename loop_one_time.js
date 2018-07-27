setInterval(function(){
    baryabol = $('.unik').attr('class');
    if(baryabol !== 'unik'){
        $('.form-input-custom83 .formatted_text p').append('<span class="unik"> Telehealth services are not intended to serve as a medical diagnosis or treatment of any kind.</span>');
    }
},500);