

const text=document.getElementById("inputbox")
text.style.paddingLeft="3px"

const clear=document.getElementById("clear")


const equal=document.getElementById("equal")


const modulo=document.getElementById("modulo")
const divide=document.getElementById("divide")
const multiply=document.getElementById("multiply")
const seven=document.getElementById("seven")
const eight=document.getElementById("eight")
const nine=document.getElementById("nine")
const add=document.getElementById("add")
const four=document.getElementById("four")
const five=document.getElementById("five")
const six=document.getElementById("six")
const subtract=document.getElementById("subtract")
const one=document.getElementById("one")
const two=document.getElementById("two")
const three=document.getElementById("three")
const dot=document.getElementById("dot")

const zero=document.getElementById("zero")


modulo.addEventListener("click",(()=>{
    text.value+='%'
}))
divide.addEventListener("click",(()=>{
    text.value+='/'
}))
multiply.addEventListener("click",(()=>{
    text.value+='*'
}))
seven.addEventListener("click",(()=>{
    text.value+='7'
}))
eight.addEventListener("click",(()=>{
    text.value+='8'
}))
nine.addEventListener("click",(()=>{
    text.value+='9'
}))
add.addEventListener("click",(()=>{
    text.value+='+'
}))
four.addEventListener("click",(()=>{
    text.value+='4'
}))
five.addEventListener("click",(()=>{
    text.value+='5'
}))
six.addEventListener("click",(()=>{
    text.value+='6'
}))
subtract.addEventListener("click",(()=>{
    text.value+='-'
}))
one.addEventListener("click",(()=>{
    text.value+='1'
}))
two.addEventListener("click",(()=>{
    text.value+='2'
}))
three.addEventListener("click",(()=>{
    text.value+='3'
}))
dot.addEventListener("click",(()=>{
    text.value+='.'
}))
zero.addEventListener("click",(()=>{
    text.value+='0'
}))


clear.addEventListener("click",(()=>{
    text.value=' '
}))


equal.addEventListener("click",(()=>{
    try{
        text.value=eval(text.value)
    }
    catch(error){
        text.value="Please Enter Numbers"
    }
    
}))



const del=document.getElementById("del")

del.addEventListener("click",(()=>{
    let value=text.value;
    let newval=value.slice(0,-1)
    text.value=newval
}))

