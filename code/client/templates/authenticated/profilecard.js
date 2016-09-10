Template.profilecard.helpers({
	
	user(){
		// return Players.find({_id: user._id});
	  //let user = Meteor.users.findOne( { username: username } );
	  console.log(Meteor.users.findOne({_id: Meteor.userId() }));

	  return Meteor.users.findOne({_id: Meteor.userId() });
	},

});

Template.profilecard.events({
	"mouseover #user-stats"(){
		// console.log(Meteor.users.findOne({_id: Meteor.userId() }))

	}

});
