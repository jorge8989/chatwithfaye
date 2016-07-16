$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  var subscription = faye.subscribe("/foo", function(data) {
    alert(data);
  });
});