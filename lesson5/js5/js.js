var $scrollFeedbackM = $("#scroll_feedback_moder");
var $scrollFeedbackU = $("#scroll_feedback_user");

(function ($) {

    $('#send').click(function(){

        var dataId = $("#inp").val();
        var text = $("#feed").val();


        $.ajax({
            url: 'http://localhost:3000/feedback',
            method:"POST",
            dataType: "json",
            data:{name: dataId,
                feedback: text},
            success:function (data){
                  var $feedbackBloc = $("<li/>",{
                      class: "feed-" + data.id
                  });
                  var $nameUser = $("<span/>").text(data.name);
                  var $feedbackWrap = $("<div/>");
                  var $feedback = $("<p/>").text(data.feedback);
                  var $removFeedback = $("<button/>", {
                    text: "Удалить",
                    class: "del",
                    id: "del_" + data.id,
                  }).data(data);
                  var $approvedFeedback= $("<button/>", {
                  text: "Одобренно",
                  class: "app",
                  id: "app_" + data.id,
                  }).data(data);
                  $feedbackBloc.append($nameUser, $feedbackWrap);
                  $feedbackWrap.append($feedback, $removFeedback,$approvedFeedback);
                  $scrollFeedbackM.append($feedbackBloc);
                }
            })
        });


function bildList() {
    $.ajax({
        url: 'http://localhost:3000/feedback',
        dataType: "json",
        success: function (feedback) {
            feedback.forEach(function (item) {
                var $feedbackBloc = $("<li/>",{
                    class: "feed-" + item.id
                });
                var $nameUser = $("<span/>").text(item.name);
                var $feedbackWrap = $("<div/>");
                var $feedback = $("<p/>").text(item.feedback);
                var $removFeedback = $("<button/>", {
                    text: "Удалить",
                    class: "del",
                    id: "del_" + item.id,
                }).data(item);
                var $approvedFeedback= $("<button/>", {
                    text: "Одобренно",
                    class: "app",
                    id: "app_" + item.id,
                }).data(item);
                $feedbackBloc.append($nameUser, $feedbackWrap);
                $feedbackWrap.append($feedback, $removFeedback,$approvedFeedback);
                $scrollFeedbackM.append($feedbackBloc);

            })
        }

    })

}
bildList();

    $("#scroll_feedback_moder").on("click",".del",function () {
        var feed = $(this).data();
        $.ajax({
            url: 'http://localhost:3000/feedback/' + feed.id,
            type: 'DELETE',
            success:function (){
                $("#scroll_feedback_moder").empty();
                bildList();
            }
        });
    });
    $("#scroll_feedback_moder").on("click",".app",function () {
      var feed = $(this).data();
      $.ajax({
          url: 'http://localhost:3000/feedbackapp',
          method:"POST",
          dataType: "json",
          data:{name:feed.name,
              feedbackapp:feed.feedback,},
          success:function (data) {
              var $feedbackBloc = $("<li/>", {
                  class: "feed-" + data.id
              });
              var $nameUser = $("<span/>").text(data.name);
              var $feedbackWrap = $("<div/>");
              var $feedback = $("<p/>").text(data.feedbackapp);
              $feedbackBloc.append($nameUser, $feedbackWrap);
              $feedbackWrap.append($feedback);
              $scrollFeedbackU.append($feedbackBloc);
              alert("Ваше сообщение одобрено");

          }
      })
        var feed1 = $(this).data();
        $.ajax({
            url: 'http://localhost:3000/feedback/' + feed1.id,
            type: 'DELETE',
            success:function (){
                $("#scroll_feedback_moder").empty();
                bildList();
            }
        });

    })



})(jQuery);