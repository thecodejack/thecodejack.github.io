(function() {

	$.ajax({
   		url: "http://graph.facebook.com/adisrikanth/picture?type=large&redirect=false",
  		success: function(data1){
  			console.log(data1);
  		}

 	});

	// $.ajax({
 //  		url: "http://graph.facebook.com/adisrikanth/picture?type=large&redirect=false",
 //  		context: document.body
	// }).done(function(data) { 
 //  			//$(this).addClass("done");
 //  			$('#mainPic').attr('src',data.url);
	// 	});

	$("nav a").click(function(e){
		console.log($(this).attr('href'));
		$('.content').hide();
		$('#'+$(this).attr('href').substring(1)).show();
	});

	$('#headTheme').click(function(e) {
    var $marginLefty = $('#themes');
    $('arrow').toggle(function(){$(this).html('>')},function(){$(this).html('<')});
    $marginLefty.animate({
      marginLeft: parseInt($marginLefty.css('marginLeft'),8) == 0 ?
        $marginLefty.outerWidth()-8 : 0
    });
  });

	$('.content').hide();
	$('#indexDiv').show();

	$('.preset').click(function(e){
		$('#sideDiv').removeClass('blackGlossGrad brownGlossGrad blueGlossGrad redGlossGrad adi1GlossGrad');
		$('#sideDiv').addClass($(this).attr('id'));
	});

})()
