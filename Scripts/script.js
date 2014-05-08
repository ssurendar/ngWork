/*
function ctrl1($scope){
	$scope.userType='guest'
}

*/
function ctrl2($scope){
	$scope.list=[];
	$scope.text="Suren";
	$scope.Submit(){
		if(this.text){
			this.list.push(this.text);
			this.text=" ";
		}
	}
}
