$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var person1 = $("input#person1").val();
    var state = $("input#state").val();

    $(".person").text(person1);
    $(".state").text(state);
  });
  $("#form-control").submit(function(event) {
    event.preventDefault();
    var beverage = ("#beverage").val();
  });
  $("#form-control").submit(function(event) {
    event.preventDefault();
    var breakfast = ("#breakfast").val();
  });
  $(".radio").submit(function(event) {
    event.preventDefault();
    var flavor = $("input:radio[name=flavor]:checked").val();
  });
  $("#form-group").submit(function(event) {
    event.preventDefault();
    var dob = $("#born").val();
  });
  $("#form-group").submit(function(event) {
    event.preventDefault();
  var favoriteColor = $("#color").val();
  });
});
