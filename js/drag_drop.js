<<<<<<< HEAD
$(function () {
    
});


=======
>>>>>>> d697c4d1979d9f28053da0baf59a792b4f9ec89f
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

<<<<<<< HEAD
function drop(ev) {
    ev.preventDefault();
    
    var targetId = ev.target.id;
    var objectId = ev.dataTransfer.getData("text");
    
    var objectVocal = $("#" + objectId).attr("vocal");
    var targetVocal = $("#" + targetId).attr("vocal");

    console.log(targetId);
    console.log(objectId);
    console.log(objectVocal);
    console.log(targetVocal);
    
    if(objectVocal == targetVocal){
        ev.target.appendChild(document.getElementById(objectId));
    } 
    else{
        $("#" + targetId).css({border: ' 2px solid red'});
        setTimeout(function(){
            $("#" + targetId).css({border: ' 1px solid red'});
        }, 400);
        setTimeout(function(){
            $("#" + targetId).css({border: ' 1px solid black'});
        }, 500);
=======

function drop(ev) {
    ev.preventDefault();

    var targetId = ev.target.id;
    var objectId = ev.dataTransfer.getData("text");

    var objectVocal = $("#" + objectId).attr("vocal");
    var targetVocal = $("#" + targetId).attr("vocal");

    var targetClass = $("#" + targetId).attr("class");

    console.log("#" + objectId);
    console.log("#" + targetId);
    console.log(objectVocal);
    console.log(targetVocal);

    console.log(targetClass);

    if (targetClass == "dropDiv") {
        if (objectVocal == targetVocal) {
            ev.target.appendChild(document.getElementById(objectId));
        } else {
            $("#" + targetId).css({border: ' 2px solid red'});
            setTimeout(function () {
                $("#" + targetId).css({border: ' 1px solid red'});
            }, 400);
            setTimeout(function () {
                $("#" + targetId).css({border: ' 1px solid black'});
            }, 500);
        }
>>>>>>> d697c4d1979d9f28053da0baf59a792b4f9ec89f
    }
}