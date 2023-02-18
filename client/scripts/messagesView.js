// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    // TODO: Render _all_ the messages.
    // get room name
    // call retrieve message (roomname) from messages
    var roomMessages = Messages.retrieve(); // returns a list
    roomMessages.forEach((msg) => MessagesView.renderMessage(msg));
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    MessagesView.$chats.append(MessageView.createHTML(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};