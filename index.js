// solution 1
let sym = "#"
for (let number = 0; number < 7; number++) {
	console.log(sym)
    sym = sym + "#"
}


// solution 2 
for (let sym = "#"; sym.length <= 7; sym += "#") {
	console.log(sym)
}
