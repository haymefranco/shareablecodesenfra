
$('.print_page').click(function(){
    $('.wrap__header, .tab-container, .wrap__footer, .print_page, #home-offer, #featuredblocks, .page__title').attr('style', 'display:none;');
    $('.editable__container--inner').prepend('<div style="display:block;"><p style="font-size:12px;"><strong>Taylor Family Wellness Chiropractic</strong><br><p>8501 OLD TROY PIKE, ST. 190,<br>HUBER HEIGHTS OH, USA 45424<br>Phone: 937-233-4055<br>Fax: 937-233-4077<br><br><strong>CONTACT</strong>: Dr. LEIGH TAYLOR</p></p><hr></div>');
    $('.editable__container--inner').append('<hr><p style="font-size:12px;"><strong>https://taylorwellnesschiropractic.com </strong>© Copyright 2018 Taylor Family Wellness Chiropractic, All Rights Reserved</p>');

    window.print();
    location.reload();
});
console.log(x);



