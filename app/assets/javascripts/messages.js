function processChat() {
  var $messagesWindow = $('.messages');
  var $messageForm = $('.messages-form');
  var $messageInput = $('.message-input');
  var $messagesList = $('.messages-list');

  $messagesWindow.scrollTop($messagesWindow.prop("scrollHeight"));
  $messageForm.bind("ajax:success", function() {
    $messageInput.val('');
    $messageInput.blur();
    $messageInput.focus();
   });
  var faye = new Faye.Client('http://localhost:9292/faye');
  var subscription = faye.subscribe("/foo", function(data) {
    $messagesList.append('<li>' + data + '</li>');
    $messagesWindow.scrollTop($messagesWindow.prop("scrollHeight"));
  });
}
$(function() {
  if (typeof $('.chat') !== undefined) {
    processChat();
  }
});