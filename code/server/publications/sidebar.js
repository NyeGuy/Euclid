Meteor.publish( 'sidebar', function() {
  return [
    Channels.find(),
    Meteor.users.find( { _id: { $ne: this.userId } }, { fields: { 
    	username: 1,
    	'profile.name': 1,
    	lives: 1,
    	xp: 1,
    	bits: 1
    }})
  ];
});


