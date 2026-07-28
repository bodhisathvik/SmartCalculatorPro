// Smart Calculator Pro
// Live Currency Converter


async function convertCurrency(){


    let amount =
    Number(
    document.getElementById("amount").value
    );


    let from =
    document.getElementById("currencyFrom").value;


    let to =
    document.getElementById("currencyTo").value;


    let resultBox =
    document.getElementById("currencyResult");



    if(isNaN(amount) || amount<=0){


        resultBox.innerHTML =
        "Please enter a valid amount";


        return;

    }



    resultBox.innerHTML =
    "Loading exchange rate...";



    try{


        // Exchange rate API

        let response =
        await fetch(
        `https://api.exchangerate-api.com/v4/latest/${from}`
        );



        let data =
        await response.json();



        let rate =
        data.rates[to];



        if(!rate){


            resultBox.innerHTML =
            "Currency not available";


            return;


        }




        let converted =
        amount * rate;



        resultBox.innerHTML =

        amount+" "+from+

        " = <b>"+

        converted.toFixed(2)

        +"</b> "+to;



    }



    catch(error){


        resultBox.innerHTML =
        "Unable to fetch live exchange rates";


        console.log(error);


    }



}