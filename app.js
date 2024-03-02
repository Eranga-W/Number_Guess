
let n = Math.round(Math.random() * 10);
console.log(n);

function refresh(){
    let n = Math.round(Math.random() * 10);
    console.log(n);
}

let count = 0;
function guess() {
    if (count<3) {
        count++;
        if (document.getElementById("txt").value == n) {
            console.log("Won");
        } else if (document.getElementById("txt").value > n) {
            console.log("Lower");
            console.log((3-count)+" Chances Left...");
        } else {
            console.log("Higher");
            console.log((3-count)+" Chances Left...");
        }
    }else{
        console.log("No any Chances Left...");
    }
}