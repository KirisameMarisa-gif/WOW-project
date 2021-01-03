$("#addEvent").disabled = true;
$('td').hover(function() {
    var t = parseInt($(this).index()) + 1;
    if ($(this).children("div.name").text() != "") {
        let detailsthis = $(this).children("div.details").text();
        if (detailsthis == "") {
            detailsthis = "-";
        }
        $("#details").text("Details: " + detailsthis);
        console.log(detailsthis);
    }
    $('td:nth-child(' + t + ')').addClass('highlighted');
},
function() {
    $("#details").text("");
    var t = parseInt($(this).index()) + 1;
    $('td:nth-child(' + t + ')').removeClass('highlighted');
});
$('td').click(function() {
    if ($(this).parent().parent().children().index($(this).parent()) > 0 && $(this).parent().children().index($(this)) > 0) {
        document.getElementById("addEvent").style.opacity = 1.0;
        document.getElementById("addEvent").style.cursor = "default";
        document.getElementById("addEvent").disabled = false;
        if($(this).hasClass('selected') == true) {
            $(this).removeClass('activated');
            $(this).removeClass('selected'); 
            $(this).addClass('wasRemoved')
        }       
        if($(this).hasClass('wasRemoved') == false) {
            $(this).addClass('activated');
            $(this).addClass('selected');
        }
        $('td').removeClass('wasRemoved');
    }
});
function buttonClicked() {
    document.getElementById("timetable").style.visibility = "visible";
}
function openForm() {
    document.getElementById("newEventForm").style.visibility = "visible";
    document.getElementById("submission").style.visibility = "visible";
}
$("#submission").click(function() {
    var formData = $("#newEventForm").serializeArray();
    let name = formData[0].value;
    let details = formData[1].value;
    let colour = formData[2].value;
    $(".activated").children("div.name").text(name);
    $(".activated").children("div.details").text(details);
    $(".activated").css("background-color", colour);
    if (colour == "black") {
        $(".activated").css("color", "white");
    }
    document.getElementById("newEventForm").style.visibility
    $("#inputName").val("");
    $("#inputDetails").val("");
    $(".activated").removeClass("activated");
    document.getElementById("newEventForm").style.visibility = "hidden";
    document.getElementById("submission").style.visibility = "hidden";
});
