// This object houses all the message Messages._data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  //stores messages here
  // copy paste with escaping to prevent XSS

  //key: roomname
  // value: {rest of the message obj}
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  addMessage: function(messageObj) {
    var message = {
      'username': messageObj['username'],
      'text': messageObj['text'],
      'roomname': messageObj['roomname'],
      'message_id': messageObj['message_id']
    };
    //check if room exists; update if it does or make new one
    if (Messages._data[messageObj['roomname']]) {
      Messages._data[messageObj['roomname']].push(messageObj);
    } else {
      Messages._data[messageObj['roomname']] = [messageObj];
    }
  },

  addMessages: function (data) {

    //loop through each message from data and add it
    data.forEach((dataObj) => Messages.addMessage(dataObj));
  },



  retrieve: function(roomname) {
    // input: roomname
    // output: list of all messages in that room

    // check if roomname exists
    // if roomname exists return array containing only messages of that room
    if (Messages._data[roomname]) {
      return Messages._data[roomname];
    } else {
      // return a concatenated list of all messages as one list
      return Object.keys(Messages._data).reduce((memo, key) => {
        return memo.concat(Messages._data[key]);
      }, []);

    }
  }

};