Meteor.publish( 'profilecard', function() {
  return [
    Meteor.users.find( { _id: this.userId }, { fields: { 
    	username: 1,
    	lives: 1,
    	xp: 1,
    	bits: 1
    }})
  ];
});
