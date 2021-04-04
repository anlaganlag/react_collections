function myCreateArray(n){
	let arr = [];
	for(let i = 0; i < n; i++){
		arr[i] = i + 1;
	}
	return arr;
}
function foo (n){
    let arr = []
    let idx =0
    for ( i of Array(n)){
        idx++
        arr.push(idx)
    }
    return arr
}
// console.log(myCreateArray(54));
console.log(foo(54));