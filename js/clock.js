$(document).ready(function(){

	setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();
		

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);


		//create a conditional to check if the following function is true.
		//the minute will determine the color change. if even or if odd.
		if(isEven(min)){
			$('#min').css('color', 'lime');
		} else {
			$('#min').css('color', 'white');
		}
		
		//every five minutes the background color will change. 
		if(pastFive(min)){
			$('#clock').css("background", 'red');
		}else{
			$('#clock').css("background", 'blue');	
		}

		
    	
	}, 2);
	//the variable 'color' of the body will be determined the variable 'x'. math.random will allow for the 
	//color change. math.floor returns the largest number less than or equal to a given number.
	setInterval(function(){
		var color = ['green', 'pink', 'purple']
		var x = Math.floor(Math.random() * (3) + 0);
		$('body').css("background", color[x]);
	}, 30000)


	//create function to test if a number is even.
	function isEven(n) {
	  return n%2 === 0;
	};
    //clock background color change
	function pastFive(n){
		return n%5 === 0
	};
	//"What time is it?" hourly color change
	function everyHour(n){

		return n == 0
	}



});

