// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function addClasses() {
  let ul = document.querySelector(".selected").parentNode.parentNode;
  let lista = ul.getElementsByTagName("li");
  for (var i = 0; i < lista.length; i++) {
    if (i % 2 == 0) {
      var aux = "element-" + (i + 1);
      lista[i].firstChild.classList.add(aux);
    } else {
      lista[i].style.display = "none";
    }
  }
  return lista;
}

function secondList() {
  let ul = document.getElementById("list2");

  for (var i = 0; i < 5; i++) {
    let auxLi = document.createElement("li");
    let auxButton = document.createElement("button");
    auxButton.appendChild(document.createTextNode("texto ejemplo " + (i + 1)));
    auxButton.setAttribute("class", "element-" + (i + 1));
    if (!(i % 2 == 0)) {
      auxLi.style.display = "none";
    }
    if (i == 4) {
      auxButton.disabled = true;
    }
    auxLi.appendChild(auxButton);
    ul.appendChild(auxLi);
  }

  return ul;
}

/*
function liPair() {
  let lista = document.getElementById("list1").getElementsByTagName("li");
  for(var i = 0; i < lista.length; i++) {
    lista[i].remove()
  }
}*/

function onLoad() {
  console.log(addClasses());
  console.log(secondList());
  console.log("hi");
}
