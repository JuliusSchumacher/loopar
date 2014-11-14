var j = 1;
var text = "";

for (var i = 1;i <= 10; i++){
    while(j <= i){

        text = text + i * j + " ";

        j++;
    }
    text = text + "<br>"
    j=1;
}
function start(){
    document.body.innerHTML = text;
}