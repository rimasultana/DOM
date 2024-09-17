// console.log("counter");
 const counted = document.getElementById('count');
function increaseButton(){
    let currentCount = Number(counted.innerText);
     currentCount++;
     counted.innerText =currentCount;

}
function decreaseButton(){
    let currentCount = Number(counted.innerText);
    currentCount--;
    counted.innerText =currentCount;
}