var services = document.getElementById("Services");
var Original_content = `    <div>
<div class="icon"><i class="fi fi-rr-envelope"></i></div>
<h4 class="title"><a href="">Title</a></h4>
<p class="description">DESCRIPTION</p>
</div>`;

fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {
    json.Services.forEach(element => {
        var content = Original_content;
        content = content.replace('Title',element.A);
        content = content.replace('DESCRIPTION',element.B);
        var service = document.createElement("div");
        service.innerHTML = content;
        service.className = 'col-lg-4 col-md-6 icon-box'
        services.appendChild(service);
        
    });
 
  })

//for (let i = 0; i < 9; i++) {
//  var service = document.createElement("div");
//  service.innerHTML = content;
//  service.className = 'col-lg-4 col-md-6 icon-box'
//  services.appendChild(service);
//}
