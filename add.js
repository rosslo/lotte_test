function add(a,b){
	var sum,carry;
	sum = a^b; //二進位相加，回傳不進位相加結果
	carry = a&b; //二進位AND，回傳相同的位元
	carry = carry << 1; //位元左移，進位
	while(carry!==0){ //持續做到沒得進位，表示位元運算子^的計算即為結果
		a = sum^carry;
		carry = sum & carry;
		carry = carry <<1;
		sum = a;
	}
	return sum;
}
module.exports = add;