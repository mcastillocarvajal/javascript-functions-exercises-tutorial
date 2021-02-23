var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

newEuroValue = dollarToEuro(137)

var dollarToYen =  euroToYen(newEuroValue)

console.log(dollarToYen);