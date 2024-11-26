
const importarBicicletas = require('./datosBici.js');


const dhBici = {

  bicicletas: importarBicicletas(),

  buscarBici: function (ident) {
    if (ident > this.bicicletas.length || ident == 0) {
      return null;
    } else {
      let encontrada = this.bicicletas.filter(bici => bici.id === ident)

      return encontrada;
    }
  },

  venderBici: function (ident) {
    const encontrada = this.buscarBici(ident);
    if (!encontrada.vendida) {
      return encontradas;
    }
    else {
      return "Bicicleta no encontrada."
    }
  },

  biciParaLaVenta: function () {
    const noVendidas = this.bicicletas.filter((bici) => bici.vendida == false)
    return noVendidas;
  },

  totalDeVentas: function () {
    return this.bicicletas.filter(bici => bici.vendida).reduce((total, bici) => total + bici.precio, 0);
  },
  aumentoBici: function (aumento) {
    let porcentajeAumento = this.bicicletas.map((bici) => bici.precio = ((bici.precio * aumento) / 100) + bici.precio)
    return this.bicicletas;
  },

  biciPorRodado: function (rodado) {

    const rodadoBici = this.bicicletas.filter((bici) => bici.rodado == rodado);
    return rodadoBici;
  },

  listarTodasLasBici:function(){
    for(let bici of this.bicicletas){
      console.log(bici);
    } 
  }




}





// console.log('----Buscar Bici-------')
// console.log(dhBici.buscarBici(3));
// console.log('----Vender Bici-------')
// console.log(dhBici.venderBici(3));
// console.log('-Bici para la venta---')
// console.log(dhBici.biciParaLaVenta());
// console.log('--Total de ventas-----')
// console.log(dhBici.totalDeVentas());

// console.log(dhBici.aumentoBici(15))
// console.log(dhBici.biciPorRodado(16))

dhBici.listarTodasLasBici()
