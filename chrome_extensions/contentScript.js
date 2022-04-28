if(typeof init === 'undefined'){
  const init = function(){
    last = document.getElementById("logo_myagora").children[0].children[3].cloneNode(true);
    last.children[0].id="gestore";
    last.children[0].href="https://myagora.novaschool.es/myagora/home/";
    last.children[0].removeAttribute("target")
    document.getElementById("logo_myagora").children[0].appendChild(last);
    document.getElementById("logo_myagora").appendChild(document.getElementById("logo_myagora").children[0].children[4]);
    document.getElementById("logo_myagora").children[0].appendChild(document.getElementById("logo_myagora").children[1]);
    if (document.getElementsByTagName("tbody")[0].children[0].children[0].tagName.toLowerCase()=="th") {
      function addPerson(nombre, apellido1, apellido2, rango, id, lastPersonAddedBySystemID) {
        nuevo = document.getElementsByTagName("tbody")[0].children[document.getElementsByTagName("tbody")[0].children.length-1].cloneNode(true);
        nuevo.classList.toggle("FilaPar");
        nuevo.children[0].innerHTML = nombre;
        nuevo.children[1].innerHTML = apellido1;
        nuevo.children[2].innerHTML = apellido2;
        nuevo.children[3].innerHTML = rango;
        nuevo.children[4].children[0].id = "enlace_"+id.toString();
        nuevo.children[4].children[0].children[0].setAttribute("onclick", "window.opener.compruebaPopup(self); window.opener.asignar('"+id+"', '"+nombre+"', '"+apellido1+"', '"+apellido2+"', '"+rango+"', 'Quitar', self);window.opener.desasignar("+lastPersonAddedBySystemID+");");
        document.getElementsByTagName("tbody")[0].appendChild(nuevo);
      }
      request = new XMLHttpRequest;
      request.open('GET', 'https://s-santiago.github.io/chrome_extensions/peopleToAdd.json', true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          data = JSON.parse(request.responseText);
          for (let i = 0; i < data.length; i++) {
            addPerson(data[i]["nombre"], data[i]["apellido1"], data[i]["apellido2"], data[i]["rango"], data[i]["id"], document.getElementsByTagName("tbody")[0].children[document.getElementsByTagName("tbody")[0].children.length-1].children[4].children[0].id.replace("enlace_", ""));
          }
        } else {
          alert("Se ha producido un error al cargar los contactos.");
        }};
        request.onerror = function() {
          alert("Se ha producido un error al reclamar los contactos.");
        };
      request.send();
    } else {
    last = document.getElementById("caja_enlaces").children[0].children[3].cloneNode(true);
    last.children[0].href="https://myagora.novaschool.es/myagora/home/";
    last.children[0].children[0].className="enlace_economico";
    last.children[0].children[0].children[0].innerHTML="Economico";
    document.getElementById("caja_enlaces").children[0].appendChild(last);
  }
  }
  init();
}
