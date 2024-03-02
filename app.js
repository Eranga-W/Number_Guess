
let n = Math.round(Math.random() * 10);
console.log(n);

function refresh(){
    let n = Math.round(Math.random() * 10);
    console.log(n);
    document.getElementById("txt").value ="";
    document.getElementById("display").value ="";

}

let count = 0;
function guess() {
    if (count<3) {
        count++;
        if (document.getElementById("txt").value == n) {
            document.getElementById("display").value="Won";
            alert("Won");
        } else if (document.getElementById("txt").value > n) {
            document.getElementById("display").value="Lower... "+(3-count)+" Chances Left...";
        } else {
            document.getElementById("display").value="Higher... "+(3-count)+" Chances Left...";
        }
    }else{
        refresh();
        document.getElementById("txt").value ="";
        document.getElementById("display").value ="No any Chances Left...";
    }
}