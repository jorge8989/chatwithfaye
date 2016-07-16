function renderMessages() {
  var $messagesWindow = $('.messages');
  var $messageForm = $('.messages-form');
  var $messageInput = $('.message-input');
  var $messagesList = $('.messages-list');

  $messagesWindow.scrollTop(400);
  $messageForm.bind("ajax:success", function() {
  	$messagesList.append('<li>' + $messageInput.val() + '</li>');
    $messageInput.val('');
    $messageInput.blur();
    $messageInput.focus();
    $messagesWindow.scrollTop(400);
   });
}
$(function() {
  if (typeof $('.chat') !== undefined) {
    renderMessages();
  }
});