
function marketData(maize){
    console.log(maize)
    const row = document.getElementById('card')
    const div = document.createElement('div')
    div.classList.add('col-3', 'row-cards', 'Button')
    div.innerHTML = 
    `<div class="card">
   <img src="${maize.image}" class="card-img-top" alt="image">
  <div class="card-body bg-success">
    <p class="text-light">${maize.crop}</p>
    <p class="text-dark">${maize.prices}</p>
     <p class="text-infor">${maize.description}</p>
    <a href="https://www.pexels.com/search/maize/" class="btn btn-primary text-dark">Explore more</a>
  </div>
</div>`
row.appendChild(div)
}

function getMaizes(maizes){
    fetch('http://localhost:3000/maizes')
    .then(res => res.json())
    .then(maizes=>{
        maizes.forEach(marketData)
    })
}
function marketRice(rice){
  console.log(rice)
  const row = document.getElementById('rice')
  const div = document.createElement('div')
  div.classList.add('col-3', 'row-cards', 'Button')
  div.innerHTML = 
  `<div class="card">
 <img src="${rice.image}" class="card-img-top" alt="image">
<div class="card-body bg-success">
  <p class="text-light">${rice.crop}</p>
  <p class="text-dark">${rice.prices}</p>
   <p class="text-infor">${rice.description}</p>
  <a href="https://www.pexels.com/search/rices/" class="btn btn-primary text-dark">Explore more</a>
</div>
</div>`
row.appendChild(div)
}

function getRices(rice){
  fetch('http://localhost:3000/rices')
  .then(res => res.json())
  .then(rices=>{
    rices.forEach(marketRice)
  })
}



document.addEventListener('DOMContentLoaded', function(){
getMaizes()
getRices()
})