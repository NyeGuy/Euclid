import handleMessageInsert from '../../modules/handle-message-insert';


Template.message.helpers({
  name( userId ) {
    if ( userId && userId != "GameBots") {
      let user = Meteor.users.findOne( userId, { fields: { 'profile.name': 1 } } );
      return user ? `${ user.profile.name.first } ${ user.profile.name.last }` : '';
    }
    return "GameBot";
  },

  // block(blockId) {
  //   return 
  // }
  
  getBlock() {
    // console.log(Blocks.find({}, { sort: { createdAt: -1 }} ));
    // return Blocks.find({}, { sort: { createdAt: -1 } });
  },

  messageFromGameBot(message){
    if (message.owner === "GameBot"){
      return true;
    } else {
      return false;
    }
  }

});

Template.message.events({
  'click a' ( event ) {
    event.preventDefault();
    window.open( event.target.href, '_blank' );
  },

  //convert this to select the next appropriate block in conversation.
  'click button' (event, template) {
    handleMessageInsert( event, template );
  }

});
