const autosImportados = require ("./autos")
const concesionaria = {

   autos: autosImportados,
   buscarAuto: function (patente){
      let encontrado = this.autos.find(function (auto){
         return patente === auto.patente
      })
      if (encontrado){
         return encontrado
      } else return null
   },
   venderAuto: function (patente){
      autoVendido = this.buscarAuto (patente)
      if (autoVendido){
         autoVendido.vendido = true
      } else return null
   },
   autosParaLaVenta: function (){
      let listaParaLaVenta = this.autos.filter(function(autos)
      {return autos.vendido == false
      })
      return listaParaLaVenta
      
   },
   autosNuevos: function (){
      let autosParaVenta = this.autosParaLaVenta ()
      let listaNuevos = autosParaVenta.filter(function
      (autoventa){ 
         return autoventa.km < 100 
      })
      return listaNuevos
   },
   listaDeVentas: function () {
      let autosVendidos = this.autos.filter(
         auto => auto.vendido === true)

      let autosPrecio = autosVendidos.map (
       auto => auto.precio)
      return autosPrecio
   },
   totalDeVentas: function (){
      let initialValue = 0
      let totalVentas = this.listaDeVentas().reduce
      ((estado, numero)=>estado + numero, initialValue)

      return totalVentas
   },
   puedeComprar: function (auto, persona){
     if (persona.capacidadDePagoTotal >= auto.precio && 
     persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas){
        return true
    } else {
      return false
   }
   },
   autosQuePuedeComprar: function(persona){
      let listaDeCompra = this.autosParaLaVenta().filter(auto => 
      this.puedeComprar(auto, persona)) 
      return listaDeCompra
   }
}
const personaEjemplo= {
   nombre: "Alan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 150000,
}


const autosDisponiblesAlan= concesionaria.autosQuePuedeComprar(personaEjemplo);
console.log("Alan puede comprar: ", autosDisponiblesAlan);