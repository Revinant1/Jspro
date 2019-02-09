var $scrollFeedbackM = $("#scroll_feedback_moder");
var $scrollFeedbackU = $("#scroll_feedback_user");

(function ($) {

    $('#send').click(function(){

        var dataId = $("#inp").val();
        var text = $("#feed").val();
        var dataInp = $("#data").val();
        $(".input_text").addClass('empty_field');
        if($(".input_text").val() != ''){
            // Если поле не пустое удаляем класс-указание
            $(".input_text").removeClass('empty_field');
        } else {
            // Если поле пустое добавляем класс-указание
            $(".empty_field").effect( "bounce", "slow" );
            return false;

        }



        $.ajax({
            url: 'http://localhost:4000/feedback',
            method:"POST",
            dataType: "json",
            data:{name: dataId,
                date:dataInp,
                feedback: text},
            success:function (data){
                var $feedbackBloc = $("<li/>",{
                    class: "feed-" + data.id
                });
                var $nameUser = $("<span/>").text(data.name);
                var $dateUser = $("<span/>").text(data.date);
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
                $feedbackBloc.append($nameUser,$dateUser, $feedbackWrap);
                $feedbackWrap.append($feedback, $removFeedback,$approvedFeedback);
                $scrollFeedbackM.append($feedbackBloc);
            }
        })
    });


    function bildList() {
        $.ajax({
            url: 'http://localhost:4000/feedback',
            dataType: "json",
            success: function (feedback) {
                feedback.forEach(function (item) {
                    var $feedbackBloc = $("<li/>",{
                        class: "feed-" + item.id
                    });
                    var $nameUser = $("<span/>").text(item.name);
                    var $dateUser = $("<span/>").text(data.date);
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
                    $feedbackBloc.append($nameUser,$dateUser,$feedbackWrap);
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
            url: 'http://localhost:4000/feedback/' + feed.id,
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
            url: 'http://localhost:4000/feedbackapp',
            method:"POST",
            dataType: "json",
            data:{name:feed.name,
                feedbackapp:feed.feedback,},
            success:function (data) {
                var $feedbackBloc = $("<li/>", {
                    class: "feed-" + data.id
                });
                var $nameUser = $("<span/>").text(data.name);
                var $dateUser = $("<span/>").text(data.date);
                var $feedbackWrap = $("<div/>");
                var $feedback = $("<p/>").text(data.feedbackapp);
                $feedbackBloc.append($nameUser,$dateUser,$feedbackWrap);
                $feedbackWrap.append($feedback);
                $scrollFeedbackU.append($feedbackBloc);
                alert("Ваше сообщение одобрено");

            }
        })
        var feed1 = $(this).data();
        $.ajax({
            url: 'http://localhost:4000/feedback/' + feed1.id,
            type: 'DELETE',
            success:function (){
                $("#scroll_feedback_moder").empty();
                bildList();
            }
        });

    });

})(jQuery);