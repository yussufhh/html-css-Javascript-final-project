
function marketData(maize){
    console.log(maize)
    const row = document.getElementById('card')
    const div = document.createElement('div')
    div.classList.add('col-3', 'row-cards')
    div.innerHTML = 
    `<div class="card">
   <img src="${maize.image}" class="card-img-top" alt="image">
  <div class="card-body bg-success">
    <p class="text-light">${maize.crop}</p>
    <p class="text-dark">${maize.prices}</p>
     <p class="text-infor">${maize.description}</p>
    <a href="#" class="btn btn-light text-dark">Go somewhere</a>
  </div>
</div>`
row.appendChild(div)
}

function getData(maizes){
    fetch('http://localhost:3000/maizes')
    .then(res => res.json())
    .then(maizes=>{
        maizes.forEach(marketData)
    })
}



document.addEventListener('DOMContentLoaded', function(){
getData()
})