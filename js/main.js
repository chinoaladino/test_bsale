const container = document.getElementById('container-card');

const obtenerProductos = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/product');
        const data = await res.json();
        console.log(data)
        data.forEach(data => {
            container.innerHTML += `
            <div class="card col-md-6 col-sm-12 col-lg-4 mt-2" style="height: 10%; width="200px;">
                <img class="card-img-top" src=${data.url_image} />
                <h5 class="card-title text-center">${data.name}</h5>
                <div class="card-footer">
                   <div class="row">
                        <div class="col col-md-6">
                            <div class="btn btn-danger">
                                precio
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            `
        });
    } catch (error) {
        console.error(error)
    }
}

obtenerProductos();