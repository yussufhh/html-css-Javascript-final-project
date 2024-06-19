
document.querySelector('form').addEventListener('submit', addCrops);

function addCrops(e){
  e.preventDefault();
  let crop = document.getElementById('crop');
  let prices = document.getElementById('prices');
  let description = document.getElementById('description');
  let source = document.getElementById('source');
  
  const cropObject = {
    crop: crop.value,
    prices: prices.value,
    description: description.value,
    image: image.value
  };

  // Assuming 'maize' is a type of crop
  if (crop.value.toLowerCase() === 'maize') {
    fetch('http://localhost:3000/maizes', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cropObject)
    })
    .then(response => response.json())
    .then(data => {
      addMaizeCrops(data);
    })
    .catch(error => console.error('Error:', error));
  }

  // Assuming 'rice' is another type of crop
  if (crop.value.toLowerCase() === 'rice') {
    fetch('http://localhost:3000/rices', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cropObject)
    })
    .then(response => response.json())
    .then(data => {
      addRiceCrops(data);
    })
    .catch(error => console.error('Error:', error));
  }

// Assuming 'sorghum' is another type of crop
if (crop.value.toLowerCase() === 'sorghum') {
  fetch('http://localhost:3000/sorghums', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cropObject)
  })
  .then(response => response.json())
  .then(data => {
    addSorghumCrops(data);
  })
  .catch(error => console.error('Error:', error));
}
}

function addMaizeCrops(maize){
  const raw = document.getElementById('card');
  const div = document.createElement('div');
  div.classList.add('col-3');
  div.innerHTML = `
    <div class="card">
      <img src="${maize.image}" class="card-img-top" height="200px" width="200px" alt="image">
      <div class="card-body bg-dark">
        <h5 class="card-title hind-bold text-primary">${maize.crop}</h5>
        <p class="card-text hind-light text-light">${maize.description}</p>
        <button class="btn btn-danger heading">
          <i class="bi bi-trash3"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 heading" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </button>
        <button class="btn btn-primary heading">
          <i class="bi bi-download"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
          </svg>
        </button>
      </div>
    </div>`;
  raw.appendChild(div);
}

function addRiceCrops(rice){
  const raw = document.getElementById('card');
  const div = document.createElement('div');
  div.classList.add('col-3');
  div.innerHTML = `
    <div class="card">
      <img src="${rice.image}" class="card-img-top" height="200px" width="200px" alt="image">
      <div class="card-body bg-dark">
        <h5 class="card-title hind-bold text-primary">${rice.crop}</h5>
        <p class="card-text hind-light text-light">${rice.description}</p>
        <button class="btn btn-danger heading">
          <i class="bi bi-trash3"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 heading" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </button>
        <button class="btn btn-primary heading">
          <i class="bi bi-download"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
          </svg>
        </button>
      </div>
    </div>`;
  raw.appendChild(div);
}
function addSorghumCrops(sorghum){
  const raw = document.getElementById('card');
  const div = document.createElement('div');
  div.classList.add('col-3');
  div.innerHTML = `
    <div class="card">
      <img src="${sorghum.image}" class="card-img-top" height="200px" width="200px" alt="image">
      <div class="card-body bg-dark">
        <h5 class="card-title hind-bold text-primary">${sorghum.crop}</h5>
        <p class="card-text hind-light text-light">${sorghum.description}</p>
        <button class="btn btn-danger heading">
          <i class="bi bi-trash3"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 heading" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </button>
        <button class="btn btn-primary heading">
          <i class="bi bi-download"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
          </svg>
        </button>
      </div>
    </div>`;
  raw.appendChild(div);
}
