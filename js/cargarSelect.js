const menu = document.getElementById('menu');

const obtenerCategorias = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000');
        const data = await res.json();
        data.forEach(categoria => {
            menu.innerHTML += `
                <option value=${categoria.id}>${categoria.name}</option>
            `
        });
    } catch (error) {
        console.error(error);
    }
}

obtenerCategorias();

