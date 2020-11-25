/* Обращения к полям 
==============================================*/

const insertCalc = document.querySelector('.input'),
      resultCalc = document.querySelector('.result');

/* Исключение ошибок 
==============================================*/

function insert(num){
	insertCalc.value = insertCalc.value + num;
}

function result(){
	if(eval(insertCalc.value) == undefined){
		resultCalc.value = "0";
		insertCalc.value = "0";
	}
	if(eval(insertCalc.value) == Infinity){
		resultCalc.value = "0";
		insertCalc.value = "Делить на ноль нельзя";
	}

	resultCalc.value = eval(insertCalc.value);
    insertCalc.value = eval(insertCalc.value);
}


/*Удаления символов по одному из поля INPUT
==================================================*/

function back (){
	insertCalc.value = insertCalc.value.substring(0, insertCalc.value.length - 1);
}


/*Очистка всех символов из поля INPUT
=================================================*/

function reset (){
	resultCalc.value = "";
    insertCalc.value = "";
}