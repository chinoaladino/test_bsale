$(document).ready(function () {
    $('#filtro').click(() => { 
        var val = $('#menu').val();
        const cnt = document.getElementById('container');
        $.ajax({
            type: "GET",
            url: `http://127.0.0.1:3000/product/category/${val}`,
            data: "data",
            dataType: "json",
            beforeSend: () => {
                console.log('cargando')
            },
            success: function (response) {
                console.log('enviado')
                container.innerHTML = ``
                console.log(response);
            }
        });
    });
});