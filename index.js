const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn")
const result1 = document.getElementById("result-1")
const result2 = document.getElementById("result-2")
let password1 = ""
let password2 = ""

function randomize(password){
    for (let i = 0; i < 15; i++){
        let randomNum = Math.floor(Math.random() * characters.length)
        password += characters[randomNum]
    }
    return password
}

generateBtn.addEventListener("click", function() {
    password1 = ""
    password2 = ""
    password1 = randomize(password1)
    password2 = randomize(password2)
    result1.textContent = password1
    result2.textContent = password2
})


result1.addEventListener("click", function(){
    navigator.clipboard.writeText(result1.textContent)
    alert("Copied to clipboard")
})

result2.addEventListener("click", function(){
    navigator.clipboard.writeText(result2.textContent)
    alert("Copied to clipboard")
})