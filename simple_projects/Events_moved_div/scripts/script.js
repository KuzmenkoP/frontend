let mainDiv = document.createElement("div");
mainDiv.style.backgroundColor = "grey";
mainDiv.style.position = "absolute";
mainDiv.style.width = "5rem";
mainDiv.style.height = "5rem";
mainDiv.style.top = "0px";
mainDiv.style.left = "0px";

document.body.append(mainDiv);

let offsetX, offsetY;
mainDiv.addEventListener("click", function(evnt){
    
    offsetX = evnt.offsetX;
    offsetY = evnt.offsetY;
    console.log(evnt.offsetX);
    console.log(evnt.offsetY);

    document.body.addEventListener("mousemove", function(mEvnt){
        mainDiv.style.top = (mEvnt.clientY - offsetY) + "px";
        mainDiv.style.left = (mEvnt.clientX - offsetX) + "px";
    });

});