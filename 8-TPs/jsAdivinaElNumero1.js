/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var ingresado;
contadorIntentos=0
contadorIntentos=parseInt(contadorIntentos);



function comenzar()
{
	numeroSecreto=Math.floor(Math.random() * 100) + 1;
	numeroSecreto=parseInt(numeroSecreto);
	
	console.log(numeroSecreto);

}

function verificar()
{
	ingresado=document.getElementById('numero').value;
	
	console.log(contadorIntentos);
	contadorIntentos=contadorIntentos+1;
	
	if(numeroSecreto==ingresado)
	{
		
		alert("Usted es un ganador!!! y en solo "+ contadorIntentos + " intetos " );
	}
	else
	{
		if(numeroSecreto>ingresado)
		{
			alert(" Falta ");
		}
			
		else
		{
			alert( " Se Paso ");		
		}
	}
	document.getElementById('intentos').value=contadorIntentos;
}
