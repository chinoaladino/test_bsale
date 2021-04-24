const url = 'https://bsale-test-alponce.herokuapp.com/product/byName/';
const buscador = document.getElementById('buscador');
const container = document.getElementById('container-card');
const resultado = document.getElementById('resultado-busqueda');

$(document).ready(function () {
    var validacion = false;
    $('#buscador').keyup(function (e) {
        if (buscador.value === '') {
            $('#buscador').addClass('is-invalid');
            $('#buscador').removeClass('is-valid');
            validacion = false;
        } else {
            $('#buscador').removeClass('is-invalid')
            $('#buscador').addClass('is-valid')
            validacion = true;
            //aqui se ejecutara el buscar
        }
    })

    $('#formulario').submit(function (e) {
        e.preventDefault();
        if (validacion) {
            $.ajax({
                type: "GET",
                url: url + buscador.value,
                data: "data",
                dataType: "json",
                beforeSend: () => {
                    container.innerHTML = `<img src="./img/loading.gif" style="height: 200px; width: 200px; margin-top: 10%;"/>`
                },
                success: function (response) {
                    container.innerHTML = ``
                    console.log(response)
                    if (response.error) {
                        container.innerHTML = `<h3 class="text-center" style="margin-top: 10%;" >${response.error}</h3>`
                    } else {
                        container.innerHTML = ``
                        resultado.innerHTML = `<h5 class="text-center">Resultado para: "${buscador.value}"</h5>`
                        response.forEach(data => {
                            container.innerHTML += `
                            <div class="card col-xl-4" style="height: 500px; width: 400px">
                            <img class="card-img-top" style="height: 350px; width: 380px" src=${data.url_image} />
                            <div class="card-body">
                                <h5 class="card-title text-center mt-1">${data.name}</h5>
                                <hr />
                                <div class="row">
                                    <div class="col justify-content-center">
                                        <a class="btn btn-outline-success">${formatterPrecio(data.price)}</a>
                                        <a class="btn btn-danger">${data.discount}%</a>
                                    </div>
                                    <div class="col justify-content-center">
                                            <button class="btn btn-outline-primary">
                                                <i class="bi bi-bag-plus-fill">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                                    </svg>
                                                </i>
                                                Agregar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
                        })
                    }
                    
                }
            });
        } else {
            swal({
                title: "Error;",
                text: "Por favor ingrese un nombre para buscar",
                icon: "error",
                button: "Ok",
                dangerMode: true,
            });
        }
    });

});