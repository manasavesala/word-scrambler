$(document).ready(function() {
  $("button").click(function(){
    var countToNumber = parseInt($("#countToNumber").val());
    var countByNumber = parseInt($("#countByNumber").val());

    for (i = countByNumber; i <= countToNumber; i = i + countByNumber) {

      $("#output").append("count = " + i + "<br>");
      }
    });

});
