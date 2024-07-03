const pancheria1 = () => {

    alert("bienvenido a la pancheria")
   let pancho = 1000;
    let agregado = prompt("puedes agregar papas o un refresco a tu pancho, que prefieres ?");
    let aderezos = prompt("que aderezos eliges ? ketchup, mayonesa, o ambos");
    // si elige papas le sumamos 500, si elige el refresco le sumamos 700
    if (agregado === "papas"||agregado === "refresco") {
       agregado === "papas" ? (pancho += 500) : (pancho += 700);
    } else{
       alert("eleccion no valida");
    }
 
 
    switch(aderezos) {
      case "ketchup":
       case "mayonesa":
        pancho += 100;
         break;
       case "ambos":
          pancho += 150;
          break;
       default:alert("agregado no valido");
 
    }
    alert("el precio final es de $" + pancho);
   }
   pancheria1();
 
    function venderPanchos() {
       const panchosDisponibles = 20;
       let panchoVendido = 0;
   
       for (let i = 1; i <= panchosDisponibles; i++) {
           let cantidad = Number(prompt(`Cantidad de panchos disponibles: ${panchosDisponibles - panchoVendido} ¿Cuántos panchos desea comprar?`));
           
   
           while (cantidad > (panchosDisponibles - panchoVendido)) {
               alert(`No hay suficientes panchos disponibles. Actualmente quedan ${panchosDisponibles - panchoVendido} panchos.`);
               cantidad = Number(prompt(`Cantidad de panchos disponibles: ${panchosDisponibles - panchoVendido} ¿Cuántos panchos desea comprar?`));
               
           }
   
           panchoVendido += cantidad;
           alert(`Ha comprado ${cantidad} panchos. Panchos restantes: ${panchosDisponibles - panchoVendido}`);
   
           if (panchoVendido >= panchosDisponibles) {
               alert(`Se han vendido todos los panchos disponibles. ¡Gracias por su compra!`);
               break;
           }
       }
   }
   
   // Llamamos a la función para comenzar a vender panchos
   venderPanchos();