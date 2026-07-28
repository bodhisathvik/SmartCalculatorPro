// Smart Calculator Pro
// Calculator + History + AI Assistant + Voice + Memory + Theme


let display = document.getElementById("display");

let historyBox = document.getElementById("history");

let memory = 0;



// Sound

const clickSound = new Audio(
"sounds/click.mp3"
);



function playSound(){

    clickSound.currentTime = 0;

    clickSound.play()
    .catch(()=>{});

}




// Calculator Input

function append(value){

    display.value += value;

}




// Clear Display

function clearDisplay(){

    display.value = "";

}




// Delete Character

function deleteChar(){

    display.value =
    display.value.slice(0,-1);

}





// Calculate

function calculate(){


    try{


        let expression =
        display.value;


        let result =
        eval(expression);



        if(result === Infinity){

            display.value="Error";

            return;

        }



        display.value =
        Number(result.toFixed(10));



        addHistory(
        expression+" = "+result
        );



    }


    catch{


        display.value="Error";

    }


}






// History

function addHistory(text){


    let li =
    document.createElement("li");


    li.innerText=text;


    historyBox.prepend(li);



    saveHistory();


    updateCounter();


}





function saveHistory(){


    localStorage.setItem(

    "calculatorHistory",

    historyBox.innerHTML

    );


}






function loadHistory(){


    let data =
    localStorage.getItem(
    "calculatorHistory"
    );



    if(data){

        historyBox.innerHTML=data;

    }


}





function clearHistory(){


    historyBox.innerHTML="";


    localStorage.removeItem(
    "calculatorHistory"
    );


    updateCounter();


}







// History Counter

function updateCounter(){


    let counter =
    document.getElementById(
    "totalCalculations"
    );


    if(counter){

        counter.innerHTML =
        historyBox.children.length;

    }


}







// Keyboard Support


document.addEventListener(
"keydown",
function(event){


let key=event.key;



if(

(key>="0" && key<="9")

||

["+","-","*","/","."].includes(key)

){


append(key);


}



else if(key==="Enter"){


calculate();


}



else if(key==="Backspace"){


deleteChar();


}



else if(key==="Escape"){


clearDisplay();


}



});









// Memory Functions


function memoryAdd(){

memory += Number(display.value);

}



function memorySubtract(){

memory -= Number(display.value);

}



function memoryRecall(){

display.value=memory;

}



function memoryClear(){

memory=0;

}









// Dark Light Theme


function toggleMode(){


document.body.classList.toggle(
"dark"
);



let mode =
document.body.classList.contains("dark")
?
"dark"
:
"light";



localStorage.setItem(
"theme",
mode
);



}






function loadTheme(){


let theme =
localStorage.getItem("theme");



if(theme==="dark"){


document.body.classList.add(
"dark"
);


}


}









// Voice Calculator


function startVoice(){


if(!("webkitSpeechRecognition" in window)){


alert(
"Voice input is not supported"
);


return;


}




let recognition =
new webkitSpeechRecognition();



recognition.lang="en-IN";

recognition.start();



recognition.onresult=function(event){


let speech =
event.results[0][0].transcript;



speech =
speech.replace(
/plus/g,
"+"
);



speech =
speech.replace(
/minus/g,
"-"
);



speech =
speech.replace(
/times/g,
"*"
);



speech =
speech.replace(
/divided by/g,
"/"
);



display.value=speech;



};




}









// AI Calculator Assistant


function askAI(){


let question =
document.getElementById(
"aiQuestion"
).value;



let result =
document.getElementById(
"aiResult"
);



try{


// Percentage calculation

if(question.includes("% of")){


let parts =
question.split("% of");



let percentage =
Number(parts[0]);



let number =
Number(parts[1]);



result.innerHTML =

"Answer: "

+

((percentage/100)*number);



return;


}





let answer =
eval(question);



result.innerHTML =
"Answer: "+answer;



}



catch{


result.innerHTML =
"Sorry, I cannot understand";


}



}








// Start App


loadHistory();

loadTheme();

updateCounter();