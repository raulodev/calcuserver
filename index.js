function mbToGb(mb) {
  return mb / 1024;
}

function restar_ram() {
    let ram = Number(document.getElementById("ram").innerText) - 512;
    if (ram == 0) {
        document.getElementById("ram").textContent = 512;
    } else {
        document.getElementById("ram").textContent = ram;
    }
    calcular_costo();
}

function sumar_ram() {
    let ram = Number(document.getElementById("ram").innerText) + 512;

    if (ram <= 16384) {
        document.getElementById("ram").textContent = ram;
        calcular_costo();
    } 
}

function restar_cpu() {
    let cpu = Number(document.getElementById("cpu").innerText) - 1;
    if (cpu == 0) {
        document.getElementById("cpu").textContent = 1;
    } else {
        document.getElementById("cpu").textContent = cpu;
    }
    calcular_costo();
}

function sumar_cpu() {
    let cpu = Number(document.getElementById("cpu").innerText) + 1;
    if (cpu <= 8) {
        document.getElementById("cpu").textContent = cpu;
        calcular_costo();
    }
}

function restar_ssd() {
    let ssd = Number(document.getElementById("ssd").innerText) - 1;
    if (ssd == 19) {
        document.getElementById("ssd").textContent = 20;
    } else {
        document.getElementById("ssd").textContent = ssd;
    }
    calcular_costo();
}

function sumar_ssd() {
    let ssd = Number(document.getElementById("ssd").innerText) + 1;
    document.getElementById("ssd").textContent = ssd;
    calcular_costo();
}

function restar_dias() {
    let dias = Number(document.getElementById("dias").innerText) - 1;
    if (dias == 0) {
        document.getElementById("dias").textContent = 1;
    } else {
        document.getElementById("dias").textContent = dias;
    }
    calcular_costo();
}

function sumar_dias() {
    let dias = Number(document.getElementById("dias").innerText) + 1;
    document.getElementById("dias").textContent = dias;
    calcular_costo();
}



function desabilitar_y_activar_botones({
    ram , cpu ,
}) {
    document.getElementById("sumar_ram").disabled = ram === 16384;
    document.getElementById("restar_ram").disabled = ram === 512;
    document.getElementById("sumar_cpu").disabled = cpu === 8;
    document.getElementById("restar_cpu").disabled = cpu === 1;
}


function calcular_costo() {
    let ram = Number(document.getElementById("ram").innerText);
    let cpu = Number(document.getElementById("cpu").innerText);
    let ssd = Number(document.getElementById("ssd").innerText);
    let dias = Number(document.getElementById("dias").innerText);

    desabilitar_y_activar_botones({ram , cpu});

    let costo = (((cpu * 0.04) + (mbToGb(ram) * 0.05) + (ssd * 0.01)) * 24) * dias;

    document.getElementById("costo").textContent = costo.toFixed(2);

}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service_worker.js").then(registration => {
        console.log("SW Registered!");
    }).catch(error => {
        console.log("SW Registration Failed");
    });
}

calcular_costo();
