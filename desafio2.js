
function classificaHeroi(quantVitoria,quantDerrota){
  
     saldo = quantVitoria - quantDerrota
     return saldo

  }
  
 let valor = classificaHeroi(100,10)
 let nivel 
 
 switch(valor) {
 
  case(valor<10):
   nivel="Ferro"
  break;
  
  case(valor>=11 || valor<=20):
   nivel="Bronze"
  break;
 
  case(valor>=21 || valor<=50):
   nivel="Prata"
  break;
  
  case(valor>=51 || valor<=80):
   nivel="Ouro"
  break;
  
  case(valor>=81 || valor<=90):
   nivel="Diamante"
  break; 
  
  case(valor>=91 || valor<=100):
   nivel="Lendário"
  break; 
  
  case(valor>=101):
   nivel="Imortal"
  break;
  
  
}
 
 console.log("O herói tem de saldo "+saldo + " está no nível de " +nivel)
