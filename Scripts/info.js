let apiKey = "4adc418b7b02bc0151a27ef87a972c91";
let difKelvin = 273.15;
let urlBase = "https://api.openweathermap.org/data/2.5/weather";


document.getElementById("boton").addEventListener("click", ()=> {
    const ciudad = document.getElementById("buscador").value;
    if(ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch (`${urlBase}?q=${ciudad}&appid=${apiKey}`)
.then(response => response.json())
.then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    const datosClima = document.getElementById("datos-clima");
    datosClima.innerHTML = "";

    const ciudadNombre = response.name;
    const temperatura = response.main.temp;
    const descripcion = response.weather[0].description;
    const humedad = response.main.humidity;
    const pais = response.sys.country;
    const icono = response.weather[0].icon;
    

    const ciudadTitulo = document.createElement("h1");
    ciudadTitulo.textContent =  `${ciudadNombre},${pais}`;

    const temperaturaInfo = document.createElement("p");
    temperaturaInfo.textContent = `La temperatura es: ${Math.round(temperatura-difKelvin)}°C`;

    const humedadInfo = document.createElement("p");
    humedadInfo.textContent =  `La humedad es de ${humedad}%`;

    const iconoInfo = document.createElement("img");
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const descripcionInfo = document.createElement("p");
    descripcionInfo.textContent = (`La descripcion del clima es ${descripcion}`);

    datosClima.appendChild(ciudadTitulo);
    datosClima.appendChild(temperaturaInfo);
    datosClima.appendChild(humedadInfo);
    datosClima.appendChild(iconoInfo);
    datosClima.appendChild(descripcionInfo);
}