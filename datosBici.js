
function importarBicicletas() {
  const fs = require('fs');
  path = ('./bicicletas.json');
  const bicicleta = fs.readFileSync(path, 'utf-8');
  bicis = JSON.parse(bicicleta);
 return bicis;
}

 importarBicicletas();


 
 
module.exports = importarBicicletas;