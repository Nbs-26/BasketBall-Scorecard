let homePoints=document.getElementById("homePoints");
let guestPoints=document.getElementById("guestPoints");

let home=0
let guest=0
function plus(player,increment){
    // console.log(player)
    if(player==='Home'){
        home+=increment;
        homePoints.innerText=home
    }else if(player==='Guest'){
        guest+=increment;
        guestPoints.innerText=guest
    }
}