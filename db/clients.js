var clients = [
    {
      id: '1',
      name: 'Helia Alexa Skill',
      clientId: 'dceb6e87c7fc3931',
      clientSecret: 'n65ShSPMe/2lNLxCq8PW2lfg7C93CqhCYYh4iI8sA/M='
    }
];


exports.find = function(id, done) {
  for (var i = 0, len = clients.length; i < len; i++) {
    var client = clients[i];
    if (client.id === id) {
      return done(null, client);
    }
  }
  return done(null, null);
};

exports.findByClientId = function(clientId, done) {
  for (var i = 0, len = clients.length; i < len; i++) {
    var client = clients[i];
    if (client.clientId === clientId) {
      return done(null, client);
    }
  }
  return done(null, null);
};
