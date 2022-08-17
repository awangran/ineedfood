$.get("https://ipinfo.io", function(response) {
  if (!response) {
    console.log("Fetch Failed")
  }
  var ip = document.getElementById("ip");
  var greet = document.getElementById("greeting");
  var weather = document.getElementById("question");
  ip.innerHTML = response.ip
  weather.innerHTML = response.country + ", " + response.city + ", " + response.region
  if (response.country == "US") {
    maybe()
  }else{
    nearby.innerHTML = "No";
  }
  function maybe() {
    if ((response.region == "Mississippi") || (response.region == "D.C.") || (response.region == "Nevada")|| (response.region == "Louisiana") || (response.region == "New York") || (response.region == "New Mexico") || (response.region == "Florida") || (response.region == "Tennessee") || (response.region == "North Carolina") || (response.region == "Alabama") || (response.region == "Georgia") || (response.region == "Michigan") || (response.region == "Illinois") || (response.region == "California") || (response.region == "Washington") || (response.region == "New Jersey") || (response.region == "New Mexico") || (response.region == "Texas")) {
      nearby.innerHTML = "Yes"
    } else{
      nearby.innerHTML = "No"
    }
  }
  
  

  
  $.get(`https://fourtonfish.com/hellosalut/?ip=${response.ip}`, function(response) {
    greet.innerHTML = response.hello
  }, "json")

}, "json")

