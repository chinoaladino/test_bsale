$(document).ready(function () {
    const menu = document.getElementById('menu');
    const filtro = document.getElementById('filtro');
    $.ajax({
        type: "GET",
        url: "https://bsale-test-alponce.herokuapp.com/",
        data: "data",
        dataType: "json",
        beforeSend: () => {
            filtro.innerHTML = `
            <img src="./img/loading.gif" style="height: 20px; margin-bottom: 4px;" />
            `
            filtro.disabled = true
        },
        success: function (response) {
            response.forEach(categoria => {
                menu.innerHTML += `<option value=${categoria.id}>${categoria.name.toUpperCase()}</option>`
            })
            filtro.innerHTML = `Filtrar`
            filtro.disabled = false
        },
        fail: (err) => {
            console.error(err);
        }
    });
});





