function dwarfRollCall(dwarves) {

 let enanos = [];
  for(let i = 0; i < dwarves.length;i++){
     enanos.push((i + 1) + ". "+ dwarves[i] + " ");        
  }
   return enanos.join('');
 }



function summonCaptainPlanet(planeteerCalls){
  let capitan =[] ;
  for( let i = 0; i < planeteerCalls.length;i++){
    capitan.push(planeteerCalls[i].toUpperCase() + "!");
  }return capitan;
}

function longPlaneteerCalls(words) {
  let lista = true;
  if (words.length > 4) {
    return lista;
} else {
    return false;
  }
}

function findTheCheese (foods) {
  let quesos =['cheddar','gouda','camembert'];
  for(var i = 0; i < foods.length; i++){
    for(var j = 0; j < quesos.length; j++){
      if(quesos[j] === foods[i]){
        return foods[i];
        
      }
    }
  }
  return 'no cheese!';

}

function wordsWithB (words){
  return words.
}
