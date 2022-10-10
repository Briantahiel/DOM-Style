const meses = [
    {
        nombre: "Enero",
        dias: 31
    },
    {
        nombre: "Febrero",
        dias: 28
    },
    {
        nombre: "Marzo",
        dias: 30
    },
    {
        nombre: "Abril",
        dias: 30
    },
    {
        nombre: "Mayo",
        dias: 31
    },
    {
        nombre: "Junio",
        dias: 30
    },
    {
        nombre: "Julio",
        dias: 31
    },
    {
        nombre: "Agosto",
        dias: 31
    },
    {
        nombre: "Septiembre",
        dias: 31
    },
    {
        nombre: "Noviembre",
        dias: 30
    },
    {
        nombre: "Diciembre",
        dias: 31
    },
    {
        nombre: "Enero",
        dias: 31
    },
]

function crearTabla(modo){

    const trsOnHtml = document.querySelectorAll("tbody tr");
    const tbody = document.querySelector("tbody");

        trsOnHtml.forEach((trItem) => {
            tbody.removeChild(trItem);
        });

    meses.forEach((mes, indice) => {
        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        const tdNombreTxt = document.createTextNode(mes.nombre);
        tdNombre.appendChild(tdNombreTxt);
        tr.appendChild(tdNombre);

        const tdDias = document.createElement("td");
        const tdDiasTxt = document.createTextNode(mes.dias);
        tdDias.append(tdDiasTxt);
        tr.appendChild(tdDias);


        if(indice % 2 == 0){
            if(modo == "base"){
                tr.className = "trBase";
            }
            if(modo == "diurno"){
                tr.className = "trDiurnoClaro";
            }
            if(modo == "nocturno"){
                tr.className = "trNocturnoClaro";
            }
        }
        else{
            if(modo == "base"){
                tr.className = "trBase";
            }
            if(modo == "diurno"){
                tr.className = "trDiurnoOscuro";
            }
            if(modo == "nocturno"){
                tr.className = "trNocturnoOscuro";
            }
        }
        tbody.appendChild(tr);
    });
}
/*crearTabla();*/

function modoDiurno(){
    const body = document.querySelector("body");
    body.className = "backgroundDiurno";
    crearTabla("diurno");
}

function modoNocturno(){
    const body = document.querySelector("body");
    body.className = "backgroundNocturno";
    crearTabla("nocturno");
}

function modoBase(){
    const body = document.querySelector("body");
    body.className = "backgroundBase";
    crearTabla("base");
}

