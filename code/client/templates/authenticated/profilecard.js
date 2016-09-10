Template.profilecard.helpers({
	
	user(){

		const whoAmI = Meteor.subscribe('users.public');
		console.log(whoAmI);
		return whoAmI;
		// return Players.find({_id: user._id});
	  //let user = Meteor.users.findOne( { username: username } );
	  // console.log(Meteor.users.findOne({_id: Meteor.userId() }));
	  // console.log(Meteor.users.find({_id: Meteor.userId() }).fetch()[0]);
	  // return Meteor.users.find({_id: Meteor.userId() });
	  // return Meteor.users.find({email: "euclid@gamebot2.com" });
	},

});

Template.profilecard.events({
	"mouseover #user-stats"(){
		// console.log(Meteor.users.findOne({_id: Meteor.userId() }))

	}

});
