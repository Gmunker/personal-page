$(function() {

//eval(all.join('')

	var $calBtn = $(".cal_btn");
	var $display = $("#display");
	
	var curNum = [];
	var calculation = [];
	var cLen = calculation.length

	var op = "";
	var eq = false;


	function setOp(o) {
		op = o;

		if (curNum.length !== 0) {
			calculation.push(parseInt(curNum.join(""), 10));
			curNum = [];
		}
		
		 if (calculation.length === 2) {
			if (o === "add") {
				calculation[0] = calculation[0] + calculation[1];
				calculation.pop();
			} else if (o === "minus") {
				calculation[0] = calculation[0] - calculation[1];
				calculation.pop();
			} else if (o === "divide") {
				calculation[0] = calculation[0] / calculation[1];
				calculation.pop();
			} else if (o === "multiple") {
				calculation[0] = calculation[0] * calculation[1];
				calculation.pop();
			}
		}
		$display.text(calculation[0]);
	}

	function createCurNum(num) {
		if (eq === true) {
			$display.text("");
			eq = false;
		}
		if (num === "decimal" && curNum.indexOf(".") === -1) {
			curNum.push(".");
			$display.text(curNum.join(""));
		} else if (num === "decimal" && curNum.indexOf(".") > 0){

		} else if (num !== NaN) {
			curNum.push(num);
			$display.text(curNum.join(""));
		}
	}

	function clearEverything() {
		curNum = [];
		calculation = [];
		$display.text("");
	}

	function clear() {
		calculation.pop();
		$display.text("");
	}

	function equals() {
		if (eq === false) {
		calculation.push(parseInt(curNum.join(""), 10));

		if (calculation.length === 2) {
			if (op === "add") {
				calculation[0] = calculation[0] + calculation[1];
				calculation.pop();
			} else if (op === "minus") {
				calculation[0] = calculation[1] - calculation[0];
				calculation.pop();
			} else if (op === "divide") {
				calculation[0] = calculation[0] / calculation[1];
				calculation.pop();
			} else if (op === "multiple") {
				calculation[0] = calculation[0] * calculation[1];
				calculation.pop();
			}
			$display.text(calculation[0]);
		} else if (calculation.length === 1) {
			$display.text(calculation[0]);

		}
		}
		
		op = "";
		eq = true;
		curNum = [];
	}


	$calBtn.on("click", function() {
		var btnP = $(this).attr("id");
		var cal = [];

		switch(btnP) {
			case "one":
				createCurNum(1);
				break;
			case "two":
				createCurNum(2);
				break;
			case "three":
				createCurNum(3);
				break;
			case "four":
				createCurNum(4);
				break;
			case "five":
				createCurNum(5);
				break;
			case "six":
				createCurNum(6);
				break;
			case "seven":
				createCurNum(7);
				break;
			case "eight":
				createCurNum(8);
				break;
			case "nine":
				createCurNum(9);
				break;
			case "zero":
				createCurNum(0);
				break;
			case "divide":
				setOp("divide");
				break;
			case "multiple":
				setOp("multiple");
				break;
			case "minus":
				setOp("minus");
				break;
			case "add":
				setOp("add");
				break;
			case "equals":
				equals();
				break;
			case "decimal":
				createCurNum("decimal");
				break;
			case "clear_everything":
				clearEverything();
				break;
			case "clear":
				clear();
				break;
		}

		console.log(op + " -- curent Op")
		console.log(calculation.length + " --- cal len");
		console.log(eq + " -- Equals status");
		console.log(curNum + " -- curNum");
		console.log(calculation + " -- calculation");
	});
});