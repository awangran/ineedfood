$.get("https://ipinfo.io", function(response) {
  if (!response) {
    console.log("Fetch Failed")
  }
  var ip = document.getElementById("ip");
  var greet = document.getElementById("greeting");
  var weather = document.getElementById("question");
  ip.innerHTML = response.ip
  weather.innerHTML = "Peek a Boo! I see you in " + response.city + ", " + response.region
  $.get(`https://fourtonfish.com/hellosalut/?ip=${response.ip}`, function(response) {
    greet.innerHTML = response.hello
  }, "json")
}, "json")