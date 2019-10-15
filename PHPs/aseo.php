<?PHP
$conexion=mysqli_connect("localhost","root","","bakerio")
or die("No se conecto al servidor correctamente");
mysqli_select_db ($conexion,"bakerio");
$consulta=mysqli_query($conexion,"select *from producto where FK_Categoria='ap'")
or die ("Consulta erronea");
$nfilas = mysqli_num_rows($consulta);
$fila = mysqli_fetch_array ($consulta);

if ($nfilas > 0)
{
	print '{"results":';
	print '[';
for ($i=1; $i<=$nfilas; $i++)
{
$codigo=$fila["Codigo"];
$nombre=$fila["Nombre"];
$fk_categoria=$fila["FK_Categoria"];
$existencias=$fila["Existencias"];
$precio=$fila["Precio"];
$unidad=$fila["Unidad"];
$caducidad=$fila["Caducidad"];
$url=$fila["Url"];
print '{"NOMBRE":"'.$nombre.'","CATEGORIA":"'.$fk_categoria.'","EXISTENCIAS":"'.$existencias.'","PRECIO":"'.$precio.'",
"UNIDAD":"'.$unidad.'","CADUCIDAD":"'.$caducidad.'","URL":"'.$url.'","CODIGO":"'.$codigo.'"}';
if($i!=$nfilas)
	print ',';
$fila = mysqli_fetch_array ($consulta);
}
print ']';
	print '}';
}
mysqli_close ($conexion);
?>