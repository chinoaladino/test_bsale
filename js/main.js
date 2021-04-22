$(document).ready(function() {
    $.get("https://192.168.1.89:3000/product",function (data, textStatus, jqXHR) {
            console.log(data)
            console.log(textStatus)
            console.log(jqXHR)
        },
        "dataType"
    );
   
})