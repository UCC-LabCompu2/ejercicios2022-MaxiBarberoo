/**
 * Conversion de unidades de metros pies yardas y pulgadas
 * @method conversionUnidades
 * @param {string} id - Id de los inputs del formulario
 * @param {number} valor - El valor de los inputs del formulario
 */

function conversionUnidades(id, valor){
    if(isNan(valor)){
        alert("Se ingreso un valor incorrecto en " + id);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id == "metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.09361*valor;
    }
}

/**
 * Conversion de unidades de Grados hexadecimales a Radianes
 * @method ConvertirGR
 * @param {string} id - Id de los inputs del formulario
 */

function convertirGR(id){
    let grad, rad;

    if(id == "grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI) / 180;
    }else if(id == "radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180) / Math.PI;
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

/**
 * Conversion de unidades de Grados hexadecimales a Radianes
 * @method mostrar_ocultar
 * @param {string} valorMO - Id de los inputs del formulario
 */

function mostrar_ocultar(valorMO){
    if(valorMO == "val_mostrar"){
        document.getElementById("unDiv").style.display = 'block';
    }else if(valorMO == "val_ocultar"){
        document.getElementById("unDiv").style.display = 'none';
    }
}

function operacionesMatematicas(operacion){

    num1 = number(document.getElementById("nums1").value);
    document.getElementById("nums2").value;


    if(operacion == "totalS"){
        document.getElementById("nums1").value;
    }
}

function dibujar_circulo_cuadrado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let yMax = canvas.height;
    let xMax = canvas.width;
    let margen = 10;
    let tamCuadrado = 50;

    ctx.fillRect(0+margen, yMax-50-margen, tamCuadrado, tamCuadrado);

    ctx.arc(xMax/2, yMax/2,100, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#00ff00";
    ctx.fill();

}

function borrarCanvas(){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function cargarListener(){
    document.getElementById("lienzoDibujo").addEventListener("mousemove", function(event){
        let canvas = document.getElementById("lienzoDibujo");
        let ctx = canvas.getContext("2d");

        let mouseX = event.clientX;
        let mouseY = event.clientY;

        console.log(mouseX, mouseY);

        canvas.onmousedown = function(){bandera = true};
        canvas.onmouseup = function(){bandera = false};
        if(bandera){
            ctx.fillRect(mouseX-10, mouseY-10, 5, 5);
        }

    });
}

function dibujarCuadriculado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    //Dibujar lineas horozontales
   for(let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.stroke();
        ctx.closePath();
    }

    //Dibujar lineas verticales
    for(let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
        ctx.closePath();
    }
}

function dibujarAuto(inp_x, inp_y){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, inp_x, inp_y);
    }


}