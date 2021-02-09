/*
* Excercise 1
*
*/

const color_block = document.getElementById('color-block');
color_block.addEventListener('click', changeColor)

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    const color_name = document.getElementById('color-name');
    //Write a condition determine what color it should be changed to
    if(color_name.innerHTML == '#F08080'){
        //change the background color using JS
        this.style.backgroundColor = '#eeeeee';
        //Change the text of the color using the span id color-name
        color_name.innerHTML = '#eeeeee';
    }
    else{
        //change the background color using JS
        this.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
        color_name.innerHTML = '#F08080';
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const btn = document.getElementById('convertbtn')
btn.addEventListener('click', convertTemp)

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    input = document.getElementById('f-input')
    c = (input.value-32)*5/9;
    //Send the calculated temperature to HTML
    document.getElementById('c-output').innerHTML = c.toFixed(2)
}


