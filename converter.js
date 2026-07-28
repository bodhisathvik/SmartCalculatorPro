// Smart Calculator Pro
// Professional Unit Converter


function convertUnit(){


let value =
Number(
document.getElementById("convertValue").value
);



let from =
document.getElementById("fromUnit").value;



let to =
document.getElementById("toUnit").value;



let resultBox =
document.getElementById("convertResult");




if(isNaN(value)){


resultBox.innerHTML =
"Please enter a valid value";


return;


}






// Conversion tables


const units = {



// Length

meter:{

type:"length",
value:1

},

kilometer:{

type:"length",
value:1000

},

centimeter:{

type:"length",
value:0.01

},

millimeter:{

type:"length",
value:0.001

},

mile:{

type:"length",
value:1609.344

},

yard:{

type:"length",
value:0.9144

},

foot:{

type:"length",
value:0.3048

},

inch:{

type:"length",
value:0.0254

},




// Weight


gram:{

type:"weight",
value:1

},


kilogram:{

type:"weight",
value:1000

},


milligram:{

type:"weight",
value:0.001

},


pound:{

type:"weight",
value:453.592

},


ounce:{

type:"weight",
value:28.3495

},





// Volume


liter:{

type:"volume",
value:1

},


milliliter:{

type:"volume",
value:0.001

},


gallon:{

type:"volume",
value:3.78541

},


cubicmeter:{

type:"volume",
value:1000

},




// Area


sqm:{

type:"area",
value:1

},


sqkm:{

type:"area",
value:1000000

},


sqcm:{

type:"area",
value:0.0001

},


acre:{

type:"area",
value:4046.86

},


hectare:{

type:"area",
value:10000

},




// Speed


mps:{

type:"speed",
value:1

},


kmph:{

type:"speed",
value:0.277778

},


mph:{

type:"speed",
value:0.44704

},




// Time


second:{

type:"time",
value:1

},


minute:{

type:"time",
value:60

},


hour:{

type:"time",
value:3600

},


day:{

type:"time",
value:86400

},




// Data


byte:{

type:"data",
value:1

},


kb:{

type:"data",
value:1024

},


mb:{

type:"data",
value:1048576

},


gb:{

type:"data",
value:1073741824

},





// Energy


joule:{

type:"energy",
value:1

},


kilojoule:{

type:"energy",
value:1000

},


calorie:{

type:"energy",
value:4.184

},


kwh:{

type:"energy",
value:3600000

},





// Pressure


pascal:{

type:"pressure",
value:1

},


bar:{

type:"pressure",
value:100000

},


atm:{

type:"pressure",
value:101325

}



};







// Temperature Conversion


if(

from==="celsius" ||

from==="fahrenheit" ||

from==="kelvin"

){



let celsius;



if(from==="celsius"){

celsius=value;

}


else if(from==="fahrenheit"){

celsius=(value-32)*5/9;

}


else{

celsius=value-273.15;

}





if(to==="celsius"){

result=celsius;

}


else if(to==="fahrenheit"){

result=(celsius*9/5)+32;

}


else if(to==="kelvin"){

result=celsius+273.15;

}


else{


resultBox.innerHTML=
"Invalid temperature conversion";


return;


}





}







else{



let first =
units[from];

let second =
units[to];




if(

!first ||

!second ||

first.type !== second.type

){


resultBox.innerHTML =
"Conversion not available";


return;


}





let baseValue =
value * first.value;



result =
baseValue / second.value;



}







resultBox.innerHTML =

value+" "+from+

" = <b>"+

result.toFixed(6)

+"</b> "+to;



}