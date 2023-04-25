document.getElementById("tempratureConverter").onclick = function(){
    let temp = document.getElementById("inputTemprature").value;
    if(document.getElementById("toFahrenite").checked){
        document.getElementById("message").innerHTML = `Temprature in Fahrenite is :: ${temp*9/5 + 32}`;
    }
    else if(document.getElementById("toCelsius")){
        document.getElementById("message").innerHTML = `Temprature in Celsius is :: ${(temp-32)*5/9}`;
    }
    else{{
        document.getElementById("message").innerHTML = "Choose a valid Option";
    }}
}