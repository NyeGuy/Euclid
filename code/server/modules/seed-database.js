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
        name: { first: 'Doug', last: 'Funnie' }
      },
      roles: [ 'bot' ],
      lives: 5,
      xp: 1000,
      bits: 2000
    }




    ]
  });
};

let _seedChannels = () => {
  Seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ { name: 'general' } ]
  });
};

let _seedBlocks = () => {
  Seed( 'blocks', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ 
      { 
        blockNum: 1,
        image:"",
        description: 'Welcome to GameBots',
        button1: "True",
        button1Next: 2,
        button2: "False",
        button1Next: 3,
        button3: "Skip",
        button1Next: 4
      },
      { 
        blockNum: 2,
        image:"",
        description: 'Question 1',
        button1: "True",
        button1Next: 2,
        button2: "False",
        button1Next: 3,
        button3: "Skip",
        button1Next: 4
      },
      { 
        blockNum: 3,
        image:"",
        description: 'Question 2',
        button1: "True",
        button1Next: 2,
        button2: "False",
        button1Next: 3,
        button3: "Skip",
        button1Next: 4
      },
      { 
        blockNum: 4,
        image:"",
        description: 'Question 3',
        button1: "True",
        button1Next: 2,
        button2: "False",
        button1Next: 3,
        button3: "Skip",
        button1Next: 4
      }
    ]
  });
}

export default function() {
  _seedUsers();
  _seedChannels();
  _seedBlocks();
}
