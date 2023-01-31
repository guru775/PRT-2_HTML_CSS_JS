let buttons = document.querySelectorAll("button");
let st = "color:slateblue;background-color:white";
let st2 = "color:white;background-color:slateblue";

for(let ele of buttons){
    ele.addEventListener("click", () => {
        let displayArea = document.querySelector("input");

        if(ele.innerText !== "="){
        displayArea.value += ele.innerText;
        }else{
            if(displayArea.value === ""){
                displayArea.value = "Enter values"
            }
            try{
                displayArea.value = eval(displayArea.value) 
            }catch(err){
                displayArea.value = "invalid input"
            }
        }

        if(ele.innerText === "C"){
            displayArea.value = ""
        }

        if(ele.id === "oper"){
            ele.setAttribute("style", st)
            setTimeout(() => {
              ele.removeAttribute('style')
            }, 100)
        }

        if(ele.id === "digit"){
            ele.setAttribute("style", st2);
            setTimeout(() => {
                ele.removeAttribute('style')
            }, 100)
        }
    })
}

console.log(buttons)