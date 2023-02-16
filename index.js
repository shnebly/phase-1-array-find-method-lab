// code your solution here

function superbowlWin(array){
    let winYear = array.find(element => element.result === "W");
    if (winYear){
        return winYear.year;
    } else {
        console.log("undefined")
    }
};