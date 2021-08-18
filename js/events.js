function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue-button');

// just set the name of the function 
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


const greenButton = document.getElementById('make-green-button');

// anonymous function because this function has no name xD 
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


//  5th and most suitable way in this button using eventlistener

const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);


function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//hotpink 

const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor= 'hotpink';
} )

//direct shortcut way 


document.getElementById('light-blue').addEventListener('click', function(){
    document.body.style.backgroundColor= 'lightblue';
})
