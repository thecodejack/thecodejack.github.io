$(document).ready(function(){
	$( ".content" ).hide();
	$('.item').click(function(e){
		var options = {};
		$('.item').find('a').removeClass('active');
		var item=$(this).find('a');
		adi.clickedEle = item.html();
		if(adi.clickedEle !== 'Home') {
			item.addClass('active');
		}
		if(adi.load) {
			adi.load = false;
			callback();
			return;
		}
		$( ".content" ).effect( 'explode', options, 300, callback );
		//$( '.content' ).hide();//.effect("bounce", "slow" );
	});
});

function callback() {
        var options = {};
        $( ".content" ).html('');
        if(adi.clickedEle === 'Home') {
			return;
        } else if(adi.clickedEle === 'About Me') {
			$( ".content" ).append(adi.aboutMe);
        } else if(adi.clickedEle === 'Works') {
			$( ".content" ).append(adi.works);
        } else if(adi.clickedEle === 'Contact Me') {
			$( ".content" ).append(adi.contact);
        }
		$( ".content" ).effect( 'slide', options, 300, null );
		$('.container').scrollTop(160);
}
//globals
this.adi={};
this.adi.clickedEle='Home';
this.adi.aboutMe = $('<div>I am a Software Programming Enthusiast, have been programming for more than 5 years. Started building softwares using Java Swings and since then have worked in various technologies like C#, ASP.NET, JSP, Struts, JavaScript. Currently am working in UI Development using HTML5 technologies.</div>');
this.adi.works = $('<div><p style="line-height:50px;vertical-align:center;">You can find few of my repos here-<a target="_blank" href="https://github.com/thecodejack"><img alt="GITHUB ACCOUNT" src="img/github.png" style=""></a></p><p>I am a FootBall(soccer) follower, a Manchester United fan.I do write some related articles in <a href="http://www.sportskeeda.com/author/tanveer433/">SPORTSKEEDA</a> whenever i get time</p></div>');
this.adi.contact = $('<div class="subcontent"><h3>You can contact me through following</h3><p><a style="margin-right:30px;" target="_blank" href="http://stackoverflow.com/users/1184902/codejack"><img src="img/stackoverflow.png"></a><a style="margin-right:30px;" target="_blank" href="https://www.facebook.com/adisrikanth"><img src="img/facebook.png"></a><a target="_blank" href="https://www.linkedin.com/profile/view?id=47591058"><img src="img/linkedin.jpeg"></a></p></div>');
this.adi.load = true;