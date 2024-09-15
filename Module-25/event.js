console.log('Dom Js Function');

// option-2
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option-3

const makeBlueButton = document.getElementById('make-blue');
console.log(makeBlueButton);
makeBlueButton.onclick =makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// option-4
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
   document.body.style.backgroundColor = 'purple';
}

// option - 5
const pinkButton =document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
  document.body.style.backgroundColor = 'pink'
}

// option- 6
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
  document.body.style.backgroundColor = 'green';
})

// mostly use korbo option-4
// important

document.getElementById('make-goldenrod') .addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})