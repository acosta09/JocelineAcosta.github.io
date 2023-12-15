const points = [
    "Tis behind you",
    "Tis is as lost as thee",
    "And thy name belongs to whom",
    "Thou am here with thee ",
    "Thou art thyself",
    "Juliet?",
    "Shall I hear more, or shall I speak at this?",
    "Thee shall seek no more",
    "Whom seeks for me",
    "Capulet?"

];

document.getElementById("response").innerHTML=points;

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="18px";
}