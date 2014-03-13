App = Ember.Application.create();



App.Router.map(function() {
  // put your routes here
  this.route("about");
  this.route("contact");
});

App.IndexRoute = Ember.Route.extend({
  
	enter : function() {
		$('.active').removeClass('active');
		$('.home').addClass('active');
	}
});

App.AboutRoute = Ember.Route.extend({
  
	enter : function() {
		$('.active').removeClass('active');
		$('.about').addClass('active');
	}
});

App.ContactRoute = Ember.Route.extend({
  
	enter : function() {
		$('.active').removeClass('active');
		$('.contact').addClass('active');
	}
});
