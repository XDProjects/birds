
addEventListener("resize", checkSize);

function checkSize() {
    var img = document.getElementById("image");
    var start = document.getElementById("start");
    img.width = this.window.innerWidth;
    img.height = this.window.innerHeight;
    start.style.width = this.window.innerWidth + "px";
    start.style.height = this.window.innerHeight + "px";
}

function downloadFile() {
    var downloadBut = document.createElement("a");
    
    document.body.append(downloadBut);
    var number = Math.floor(Math.random() * 25);
    downloadBut.style = "display: none;"
    downloadBut.href = "./birds/" + number + ".jpg";
    downloadBut.download = "bird" + number + ".jpg";
    
    downloadBut.click();
    setTimeout(function() {downloadFile()}, 500);
}

function start() {
    document.getElementById("pipe").play();
    document.getElementById("start").style.display = "none";
    document.getElementById("image").style.display = "";
    document.getElementById("text").style.display = "none";
    downloadFile();
}

checkSize();




