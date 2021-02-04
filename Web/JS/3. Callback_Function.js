a = [3, 1, 2];
console.log(a);
a.sort();
console.log(a);
function b(v1, v2) {
	console.log('c', v1, v2);
	return 0						//return = -,0,+
};

a.sort(b); console.log(a);
a.sort(b); console.log(a);
a.sort(b); console.log(a);