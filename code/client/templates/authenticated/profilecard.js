Template.sidebar.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'profilecard' );
});

Template.profilecard.helpers({
	
	user(){
	  return (Meteor.users.find({_id: Meteor.userId() }).fetch()[0])
	}

});

Template.profilecard.events({
	"mouseover #user-stats"(){
	}
});
