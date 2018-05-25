function ipInfoMe() {
    var rightput = document.getElementById("ip");

    rightput.innerHTML = "IP Address: " + geoplugin_request() +
     "<br>City: " + geoplugin_city() +
     "<br>State: " + geoplugin_regionName() +
     "<br>Country: " + geoplugin_countryName() +
     "<br>Zone: " + geoplugin_timezone();

  }