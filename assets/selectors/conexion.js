
export const obtenerPropietarioYBar = (data) => {
    fetch(`http://localhost:8888/${data}`)
  .then(response => response.json())
  .then(data => console.log(data));
}

obtenerPropietarioYBar("propietario");
obtenerPropietarioYBar("bar");