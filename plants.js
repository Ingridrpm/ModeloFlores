function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var planta = urlParams.get('plant')
    planta = parseInt(planta)
    if (planta === 1) {
        articulo("Dientes de león","https://es.wikipedia.org/wiki/Taraxacum_officinale");
    }
    else if (planta === 2) {
        articulo("Margaritas","https://es.wikipedia.org/wiki/Bellis_perennis");
    }
    else if (planta === 3) {
        articulo("Tulipanes","https://es.wikipedia.org/wiki/Tulipa")
    }
    else if (planta === 4) {
        articulo("Girasoles","https://es.wikipedia.org/wiki/Helianthus_annuus")
    }
    else if (planta === 5) {
        articulo("Rosas","https://es.wikipedia.org/wiki/Rosa")
    }
    else {
        document.getElementById("article").innerHTML= "<h1>¡Lo sentimos! Aún no tenemos esta planta en nuestra base de datos. </h1>";
    }
}

function articulo(nombre, url) {
    document.getElementById("article").innerHTML = `<h4>Planta identificada: <strong>${nombre}</strong></h4><embed type="text/html" src="${url}"  width="1000" height="600"></embed>`;
}

