function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
    $(".dropDiv").css({border: ' 2px dashed black'});
}


function drop(ev) {
    ev.preventDefault();

    var targetId = ev.target.id;
    var objectId = ev.dataTransfer.getData("text");

    var objectVocal = $("#" + objectId).attr("vocal");
    var targetVocal = $("#" + targetId).attr("vocal");

    var targetClass = $("#" + targetId).attr("class");
    
    console.log("targetClass" + targetClass);
    if (targetClass == "dropDiv") {
        if (objectVocal == targetVocal) {
            ev.target.appendChild(document.getElementById(objectId));
            $("#" + targetId).attr("class","dropDiv_");
            
            $(".dropDiv_").css({border: 'none'});
            $(".dropDiv").css({border: 'none'});
            
        } else {
            $("#" + targetId).css({border: ' 2px dashed red'});
            setTimeout(function () {
                $(".dropDiv").css({border: 'none'});
            }, 1000);
            setTimeout(function () {
                $("#" + targetId).css({border: ' none'});
            }, 1500);
            
            
        }
    }
}