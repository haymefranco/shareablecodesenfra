

$('.print_page').click(function(){
    $('.wrap__header, .tab-container, .wrap__footer, .print_page').attr('style', 'display:none;');
    $('.editable__container--inner').prepend('<br><br><br><br><div style="display:block;"><strong>Speedwell Family Chiropractic</strong><br><p>520 SPEEDWELL AVE SUITE 111,<br>MORRIS PLAINS NJ, USA 07950<br>Phone: 973-359-3055<br>Fax: 973-359-3056<br><strong>CONTACT</strong>: Dr. GLEN KATZ</p><hr></div>');
    $('.editable__container--inner').append('<hr><p style="font-size:12px;"><strong>https://speedwellchiro.com/</strong>© Copyright 2018 Speedwell Family Chiropractic, All Rights Reserved</p>');
    x = 1;
    window.print();
    location.reload();
});
console.log(x);


