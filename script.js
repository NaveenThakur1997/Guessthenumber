document.querySelector("form").onsubmit =(e)=>{
    e.preventDefault(); 
    const inputValue = document.getElementById("value").value
    if(!inputValue){
        return
    }
    const randmNumber = randomNumberGenerator();
    if(Number(inputValue)===randmNumber){
        document.getElementById("result").innerHTML = "You Guessed the number right"
    }else{
        document.getElementById("result").innerHTML = "You Guessed the number wrong and the actual number is "+randmNumber;

        // if(Number(inputValue)+3>=randmNumber){
        //     document.getElementById("message").innerHTML = "You were near but a little higher"
        // } else if(Number(inputValue)-3 <= randmNumber){
        //     document.getElementById("message").innerHTML = "You were near but a little lower"
        // }
    }
};

const randomNumberGenerator= ()=>{
    const number = parseInt(Math.random()*10)
    return number; 
}