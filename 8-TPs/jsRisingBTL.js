/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var bruto;
	var legajo;
	var nacionalidad;
	



	do
	{
		edad=prompt("ingrese edad: entre 18 y 90 años inclusive.");
	}
	while(edad>90 || edad<17 || isNaN(edad));
	
	sexo=prompt("ingrese sexo  “M” para masculino y “F” para femenino");
	
	while(sexo!="M" && sexo!="F" || !isNaN(sexo))
	{
		sexo=prompt("ingrese sexo  “M” para masculino y “F” para femenino");
	}

	estadoCivil=prompt("ingrese estado civil:1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivil=parseInt(estadoCivil);

	while(isNaN(estadoCivil)||(estadoCivil!= "1" && estadoCivil!= "2" && estadoCivil!= "3" && estadoCivil!= "4") )
	{
		estadoCivil=prompt("ingrese estado civil:1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}
	
	bruto=prompt("ingrese sueldo bruto no menor a 8000.");
	bruto=parseInt(bruto);

	while(bruto<8001 || isNaN(bruto))
	{
		bruto=prompt("ingrese sueldo bruto no menor a 8000.");
	}

	legajo=prompt("ingrese numero de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	legajo=parseInt(legajo);

	while(legajo>9999 || legajo<1000 || isNaN(legajo))
	{
		legajo=promptlegajo=prompt("ingrese numero de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	}
	
	nacionalidad=prompt("ingrese nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while(nacionalidad!="A"&& nacionalidad!="E" && nacionalidad!="N" || !isNaN(nacionalidad))
	{
		nacionalidad=prompt("ingrese nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");	
	}
	
	document.getElementById('Edad').value=edad; 
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=bruto;
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;

}
