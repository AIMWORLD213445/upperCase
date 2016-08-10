$(document).ready(function(){
    $("#blanks form").submit(function(event){
      var userTextInput = $("input#userText").val();
      $(".userText").text(userTextInput);
      $("#caps").show();
      event.preventDefault();
    })
})
