const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const messageBox = document.querySelector("#message-box");
const hiddenClass = document.querySelector(".hidden")

input.addEventListener("keydown" , (e)=>{
    if (e.key == 'Enter') {
        e.preventDefault()
        if(input.value == ''){
            hiddenClass.style.display = 'block'
        }
        else {
            hiddenClass.style.display = 'none'
        }
    }
})