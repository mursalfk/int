function stairCounter(stairs){
	var count = 0;
	var start = 0;
	function find(start){
		if(start === stairs){
			count += 1
		}
		else if(start > stairs)
			return null
		else{
			return find(start + 2) || find(start + 1)
		}
	}
	find(start);
	return count;
}
console.log(stairCounter(6));