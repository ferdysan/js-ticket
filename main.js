var età = prompt ('Dimmi la tua età');
var km = prompt ('Quanti Chilometri dovrai fare?');
var biglietto;

if (età <= 18){
  var biglietto = (0.21 * km);
  biglietto = ( biglietto - (biglietto/100 *20));
  document.writeln('costo del biglietto è'+biglietto);
}
else if {
 (età >= 65){
  var biglietto = (0.21 * km);
  biglietto = ( biglietto - (biglietto/100 *40));
  document.writeln('costo del biglietto è'+biglietto);
}
else
{
  var biglietto = (0.21 * km);
  document.writeln('costo del biglietto è'+biglietto);
}
