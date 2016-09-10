let _insertMessage = ( message ) => {
  return Messages.insert( message );
};

let _escapeUnwantedMarkdown = ( message ) => {
  // Escape h1-h6 tags and inline images ![]() in Markdown.
  return message
  .replace( /#/g, '&#35;' )
  .replace( /(!\[.*?\]\()(.*?)(\))+/g, '&#33;&#91;&#93;&#40;&#41;' );
};

let _cleanUpMessageBeforeInsert = ( message ) => {
  delete message.destination;
  delete message.isDirect;
  message.message = _escapeUnwantedMarkdown( message.message );
};

let _getChannelId = ( channelName ) => {
  let channel = Channels.findOne( { name: channelName } );
  if ( channel ) {
    return channel._id;
  }
};

let _getUserId = ( username ) => {
  let user = Meteor.users.findOne( { username: username } );
  if ( user ) {
    return user._id;
  }
};

let _assignDestination = ( message ) => {
  if ( message.isDirect ) {
    message.to = _getUserId( message.destination );
  } else {
    let channelId = _getChannelId( message.destination );
    message.channel = channelId;
  }
};

let _checkIfSelf = ( { destination, owner } ) => {
  return destination === owner;
};

let _assignOwnerAndTimestamp = ( message ) => {
  message.owner     = Meteor.userId();
  message.timestamp = new Date();
};

let _startBlock = (message) => {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        currentBlock: 1
      }
    });
    let firstBlock = Blocks.find({blockNum: 1}).fetch()[0];
    _insertMessage(_botMessageBuilder(firstBlock, message));
}

let _botMessageBuilder = (block, message) => {
    message.owner = "GameBots"
    message.message = "![](http://placehold.it/300x100)" + "\n\n"
    message.message = message.message + block.description;
    return message;
}

let _botResponse = (message) => {

  message.owner = "GameBots";

  // if (Meteor.users.findOne(Meteor.userId()).lives === 0){
  //   message.message = "You've run out of lives! Restart the game";
  //   _insertMessage(message);
  // }

  if (message.message === "begin"){
    _startBlock(message);
  }

  console.log(message);

  // console.log(Users.find({}).fetch());

  //debug mode, skipping to a block. Ignored if the user doesn't use 'goto'
  var checkGoTo = message.message.split(" ");
  console.log('checkGoTo', checkGoTo);
  if (checkGoTo[0] === "goto"){
    var currentBlock = Number(checkGoTo[1]);
    var toLoad = Blocks.find({blockNum: currentBlock}).fetch();
    // Meteor.user
    console.log('toLoad', toLoad)
    console.log('ding', toLoad);

    Meteor.users.update(Meteor.userId(), {
      $set: {
        currentBlock: 1
      }
    });

    message.message = "![](http://placehold.it/300x100)" + "\n\n"
    message.message = message.message + toLoad[0].description;

    // // message.message = "Crap!"
    console.log(message);
    _insertMessage(message);
  }

  //grading the answer to a question/block
  if (message.message.toLowerCase() === 'yes' || message.message.toLowerCase() === 'no'){
    var whereToNext;


    console.log(Meteor.users.find({_id: Meteor.userId()}).fetch());
    var currentBlockNum = Number(Meteor.users.find({_id: Meteor.userId()}).fetch()[0].currentBlock)

    console.log(currentBlockNum);
    var currentBlock = Blocks.find({blockNum: currentBlockNum}).fetch()[0];
    // var 
    // var currentQ = Blocks.find({blockNum: }).fetch()[0];

    console.log('curBlock', currentBlock);

    //set this property on the user object
    if (message.message.toLowerCase() === 'yes') whereToNext = currentBlock.button1Next;
    if (message.message.toLowerCase() === 'no') whereToNext = currentBlock.button2Next;
    
    console.log('next', whereToNext);
    Meteor.users.update(Meteor.userId(), {
      $set: {
        currentBlock: whereToNext
      }
    });

    var newRender = Blocks.find({"blockNum": whereToNext}).fetch()[0];
    message.message = "![](" + newRender.image+ ")" + "\n\n" + newRender.description;
    // message.message = message.message + newRender.description;
    message.owner = "GameBot"
    _insertMessage(message);
  }

  //add a 'continue' command to advance from intermediate to next

  // if () {
  //   //data lookup
  //   //construct message.message response

  //   _insertMessage(message);
  // }


  if (message.message === 'reset') {
    //cause reset operation
    message.message = "All your values have been reset.";
    // console.log(Meteor.users.find(Meteor.userId()));

    Meteor.users.update(Meteor.userId(), {
      $set: {
        profile: {
          level: 0,
          xp: 0,
          bits: 0
        }
      }
    });

    _insertMessage(message);
  }

  if (message.message === 'levelup') {
    // message = levelUpHandler()
    message.message = "Congratulations! You've leveled up!";

    // Meteor.users.update(Meteor.userId(), {
    //   // // $set: {
    //   //   {$inc: {level: 1}}
    //   // // }
    // });

    _insertMessage(message);
  }

  //catchall response for un-parse-able input.

}

export default function( message ) {
  _assignOwnerAndTimestamp( message );



  if ( !_checkIfSelf( message ) ) {
    _assignDestination( message );
    _cleanUpMessageBeforeInsert( message );
    _insertMessage( message );
    if (Channels.find({_id: message.channel}).fetch()[0].name === "gamebots"){
      _botResponse(message);
    }

  } else {
    throw new Meteor.Error( '500', 'Can\'t send messages to yourself.' );
  }
}
