function marketSorghum(sorghum){
    console.log(sorghum)
    const row = document.getElementById('sorghum')
    const div = document.createElement('div')
    div.classList.add('col-3', 'row-cards', 'Button')
    div.innerHTML = 
    `<div class="card">
   <img src="${sorghum.image}" class="card-img-top" alt="image">
  <div class="card-body bg-success">
    <p class="text-light">${sorghum.crop}</p>
    <p class="text-dark">${sorghum.prices}</p>
     <p class="text-infor">${sorghum.description}</p>
    <a href="https://www.pexels.com/search/sorghum/" class="btn btn-primary text-dark">Explore more</a>
  </div>
  </div>`
  row.appendChild(div)
  }
  
  function getSorghum(sorghum){
    fetch('http://localhost:3000/sorghums')
    .then(res => res.json())
    .then(sorghums=>{
      sorghums.forEach(marketSorghum)
    })
  }
  function marketMillet(millet){
    console.log(millet)
    const row = document.getElementById('millet')
    const div = document.createElement('div')
    div.classList.add('col-3', 'row-cards', 'Button')
    div.innerHTML = 
    `<div class="card">
   <img src="${millet.image}" class="card-img-top" alt="image">
  <div class="card-body bg-success">
    <p class="text-light">${millet.crop}</p>
    <p class="text-dark">${millet.prices}</p>
     <p class="text-infor">${millet.description}</p>
    <a href="https://www.pexels.com/search/MILLETS/" class="btn btn-primary text-dark">Explore more</a>
  </div>
  </div>`
  row.appendChild(div)
  }
  
  function getMillet(millet){
    fetch('http://localhost:3000/millets')
    .then(res => res.json())
    .then(millets=>{
    millets.forEach(marketMillet)
    })
  }
  

  
  
  document.addEventListener('DOMContentLoaded', function(){
  getSorghum()
  getMillet()
  })

