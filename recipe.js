let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
  console.log("search has been clicked")
  sendApiRequest()
})


async function sendApiRequest(){
  let foodSearch = document.getElementById("search").value;
  let API_ID = "45f6a725"
  let API_KEY = "4dad2a20194ab4f1b5f1f8cbb4796a96"
  
  
  let response = await fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${foodSearch}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
  
}

function useApiData(data){
  document.querySelector("#content").innerHTML = `
  
  <div class="card" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Calories: ${data.hits[0].recipe.calories} Source: ${data.hits[0].recipe.source} </p>
    <a href="${data.hits[0].recipe.url}" target="_blank" class="btn btn-primary">Link Here!</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
  <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[1].recipe.label}</h5>
    <p class="card-text">Calories: ${data.hits[1].recipe.calories} Source: ${data.hits[1].recipe.source} </p>
    <a href="${data.hits[1].recipe.url}" target="_blank" class="btn btn-primary">Link Here!</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
  <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[2].recipe.label}</h5>
    <p class="card-text">Calories: ${data.hits[2].recipe.calories} Source: ${data.hits[2].recipe.source} </p>
    <a href="${data.hits[2].recipe.url}"  target="_blank" class="btn btn-primary">Link Here!</a>
    </div>
    </div>
  <div class="card" style="width: 18rem;">
  <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
    <p class="card-text">Calories: ${data.hits[3].recipe.calories} Source: ${data.hits[3].recipe.source} </p>
    <a href="${data.hits[3].recipe.url}"  target="_blank" class="btn btn-primary">Link Here!</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
  <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[4].recipe.label}</h5>
    <p class="card-text">Calories: ${data.hits[4].recipe.calories} Source: ${data.hits[4].recipe.source} </p>
    <a href="${data.hits[4].recipe.url}" target="_blank" class="btn btn-primary">Link Here!</a>
    </div>
    </div>
  
  `
}
