function putCom(value){
	    
	if(typeof value!=="string") value = value.toString();	    
	if(value.length < 1) return;

    var point = null;

	if(value.split(".").length>1){
	    point = value.split(".")[1];
	    if(point.length < 2) point += "0";
	    value = value.split(".")[0];
	}

	var rv = '', b = '', a = 1, pv = value.trim(), i=pv.length-1;

	while(i>-1){

	b = pv[i]+b;

	if(a%3==0){

		rv = ','+b+rv;
		b = '';
	}

	if(i==0 && b.length>0) rv = b+rv;

	a++, i--;
	}

	if(rv[0]==',') rv = rv.substring(1, rv.length);

	if(point!==undefined) rv += "." + point;

	return rv;
}

console.log(putCom(152435486.10));