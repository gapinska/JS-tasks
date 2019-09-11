function myFunction(){
    var myId = 0;
    var counter = 0;
    var myDiv = document.getElementById("test")
    for(var i = 0; i < 5; i++){
        var textNode = document.createTextNode("sup! My current id is "+myId+" !")
        var t = document.createElement("div");
        t.setAttribute("id", counter++)
        t.setAttribute("class", "cool_"+myId++)
        t.appendChild(textNode)
        myDiv.appendChild(t);
    }
}