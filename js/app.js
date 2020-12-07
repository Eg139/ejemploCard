console.log("Funciona js");
const getRandomInt = (min,max) => {
    return Math.floor(Math.random()*(max -min))+min;
}

console.log(getRandomInt(252,387));
document.addEventListener('DOMContentLoaded', ()=> {
    fetchData()
})

const fetchData = async ()=>{
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/257')
        const data = await res.json()
        console.log(data)

    }catch(error){
        console.log(error);
    }
}
