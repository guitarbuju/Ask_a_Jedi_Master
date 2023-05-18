
console.log('joder')
const quote=document.getElementById('quote')
quote.style.display='none'

const traelo= async()=>{
    const respuesta=await fetch('https://dummyjson.com/comments')
    const datos= await respuesta.json()
    const randIndex=Math.floor(Math.random() * 30) + 1;
    const show=datos.comments[randIndex].body
    const display=`
    <h1>${show}</h1>
    `
    quote.style.display='block'
    quote.innerHTML=display 
    
    const fire=new Audio('./sounds/tie-fighter-fires.mp3')
    fire.play()
}


const ActiveButton=document.getElementById('active').addEventListener('click',()=> traelo())