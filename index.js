function restar_ram() {
    let ram = Number(document.getElementById("ram").innerText) - 1;
    if (ram==0){
        document.getElementById("ram").textContent=1;
    } else {
        document.getElementById("ram").textContent=ram;
    } 
    calcular_costo();
}
function sumar_ram() {
    let ram = Number(document.getElementById("ram").innerText) + 1;
    document.getElementById("ram").textContent=ram;
    calcular_costo();
}
function restar_cpu() {
    let cpu = Number(document.getElementById("cpu").innerText) - 1;
    if (cpu==0){
        document.getElementById("cpu").textContent=1;
    } else {
        document.getElementById("cpu").textContent=cpu;
    }
    calcular_costo();   
}
function sumar_cpu() {
    let cpu = Number(document.getElementById("cpu").innerText) + 1;
    document.getElementById("cpu").textContent=cpu;
    calcular_costo();
}
function restar_ssd() {
    let ssd = Number(document.getElementById("ssd").innerText) - 1;
    if (ssd==19){
        document.getElementById("ssd").textContent=20;
    } else {
        document.getElementById("ssd").textContent=ssd;
    }
    calcular_costo();
}
function sumar_ssd() {
    let ssd = Number(document.getElementById("ssd").innerText) + 1;
    document.getElementById("ssd").textContent=ssd;
    calcular_costo();
}
function restar_dias() {
    let dias = Number(document.getElementById("dias").innerText) - 1;
    if (dias==0){
        document.getElementById("dias").textContent=1;
    } else {
        document.getElementById("dias").textContent=dias;
    }
    calcular_costo();
}
function sumar_dias() {
    let dias = Number(document.getElementById("dias").innerText) + 1;
    document.getElementById("dias").textContent=dias;
    calcular_costo();
}
function calcular_costo(){
    let ram = Number(document.getElementById("ram").innerText);
    let cpu = Number(document.getElementById("cpu").innerText);
    let ssd = Number(document.getElementById("ssd").innerText);
    let dias = Number(document.getElementById("dias").innerText);
    
    let costo = (((cpu*0.04) + (ram*0.05) + (ssd*0.01))*24)*dias;

    document.getElementById("costo").textContent=costo.toFixed(2);

}
calcular_costo();
