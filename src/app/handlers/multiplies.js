console.log("comienza código");
let arr = [2, 4];
let i = 1 ;
let mult = false;

while (!mult && i <10) {
	
	for (let index = 0 ; index < arr.length ; index++){
		if (i % arr [index] != 0){
			console.log (" i = ", i, "no es divisible por ", arr[index]);
			break;
		}	
		if ( index == 1 ){
			console.log (i," es divisible por todos");
			mult = true;
		}
	}
	if (!mult) {
		i++;
	} else {
		console.log("mínimo número divisible por ",arr," es ", i);
	}
}
console.log("termina codigo");
