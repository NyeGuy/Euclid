import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  Seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'bigguy1991',
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Carl', last: 'Winslow' }
      },
      roles: [ 'admin' ]
    },{
      username: 'beetsfan123',
      email: 'doug@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Doug', last: 'Funnie' }
      },
      roles: [ 'admin' ]
    },{
      username: 'Euclid',
      email: 'euclid@gamebot.com',
      password: 'secretkey',
      profile: {
        name: { first: 'Doug', last: 'Funnie' }
      },
      roles: [ 'bot' ]
    },{
      username: 'TestUser',
      email: 'euclid@gamebot2.com',
      password: 'secretkey2',
      profile: {
        name: { first: 'Doug', last: 'Funnie' },
        level: 1,
        lives: 5,
        xp: 1000,
        bits: 2000
      },
      roles: [ 'admin' ]
    }
    ]
  });
};

let _seedChannels = () => {
  Seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [
      // { name: 'general' },
      { name: 'gamebots'}
    ]
  })
};

let _seedBlocks = () => {
  Seed( 'blocks', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ 
      { 
        blockNum: 1,
        image:"http://placehold.it/300x100",
        description: "Welcome to GameBots. Are you ready to start. Type 'yes'.",
        button1: "Yes",
        button1Next: 2,
        // button2: "No",
        // button2Next:
      },
      { 
        blockNum: 2,
        image:"http://placehold.it/300x100",
        description: 'Awesome. First question: yes or no. Blah blah',
        button1: "True",
        button1Next: 3,
        button2: "False",
        button2Next: 4,
      },
      { 
        blockNum: 3,
        image:"http://placehold.it/300x100",
        description: 'Correct answer! Onto the next question',
        button1: "True",
        button1Next: 5,
        button2: "False",
        button2Next: 5,
        modifier: {
          type: "bits",
          value: 25
        }
      },
      { 
        blockNum: 4,
        image:"http://placehold.it/300x100",
        description: 'Wrong answer.',
        button1: "True",
        button1Next: 5,
        button2: "False",
        button2Next: 5,
        modifier: {
          type: "lives",
          value: -1
        }
      },{ 
        blockNum: 5,
        image:"http://placehold.it/300x100",
        description: 'Question 2. The right answer is No.',
        button1: "True",
        button1Next: 6,
        button2: "False",
        button2Next: 7,
      },{ 
        blockNum: 6,
        image:"",
        description: 'Wrong answer. You lost a life.',
        button1: "True",
        button1Next: 8,
        button2: "False",
        button2Next: 8,
        modifier: {
          type: "lives",
          value: -1
        }
      }, { 
        blockNum: 7,
        image:"",
        description: 'Right answer! You gained 100 bits.',
        button1: "True",
        button1Next: 8,
        button2: "False",
        button1Next: 8,
        modifier: {
          type: "bits",
          value: 100
        }        
      }, { 
        blockNum: 8,
        image:"",
        description: 'Question 3. The right answer is Yes',
        button1: "True",
        button1Next: 9,
        button2: "False",
        button2Next: 10,
      }, { 
        blockNum: 9,
        image:"",
        description: 'Correct! You gained 100 bits.',
        button1: "True",
        button1Next: 11,
        button2: "False",
        button2Next: 11,
        modifier: {
          type: "bits",
          value: 100
        }               
      },{ 
        blockNum: 10,
        image:"",
        description: 'Incorrect.',
        button1: "True",
        button1Next: 11,
        button2: "False",
        button2Next: 11,
        modifier: {
          type: "lives",
          value: -1
        }               
      },
      {
        blockNum: 11,
        image:"",
        description: 'Question 4.',
        button1: "True",
        button1Next: 12,
        button2: "False",
        button2Next: 13,
      },{
        blockNum: 12,
        image:"",
        description: 'You got it right! Points added.',
        button1: "True",
        button1Next: 14,
        button2: "False",
        button2Next: 14,
      },{
        blockNum: 13,
        image:"",
        description: 'Wrong answer.',
        button1: "True",
        button1Next: 14,
        button2: "False",
        button2Next: 14,
      },{
        blockNum: 14,
        image:"",
        description: "Question 5.",
        button1: "True",
        button1Next: 15,
        button2: "False",
        button2Next: 16,
      },{
        blockNum: 15,
        image:"",
        description: "Correct!.",
        button1: "True",
        button1Next: 17,
        button2: "False",
        button2Next: 17,
      },{
        blockNum: 16,
        image:"",
        description: "Incorrect. ",
        button1: "True",
        button1Next: 17,
        button2: "False",
        button2Next: 17,
      },
      {
        blockNum: 17,
        image:"",
        description: "And that's the end of the trial run. Feel free to reset to block 1 with the 'begin' text command.",
        button1: "True",
        button1Next: 1,
        button2: "False",
        button2Next: 1,
      }
    ]
  });
}

export default function() {
  _seedUsers();
  _seedChannels();
  _seedBlocks();
}
