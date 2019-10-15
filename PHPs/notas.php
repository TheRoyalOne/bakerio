<?PHP
$conexion=mysqli_connect("localhost","root","","baker_io")
or die("No se conecto al servidor correctamente");
mysqli_select_db ($conexion,"baker_io");
$consulta=mysqli_query($conexion,"select notas.Id,notas.Contenido,notas.Fecha,usuario.Nombre,usuario.Apellido 
from notas inner join usuario on notas.FK_Usuario=usuario.ID Order by notas.Id")
or die ("Consulta erronea");
$nfilas = mysqli_num_rows($consulta);
$fila = mysqli_fetch_array ($consulta);

if ($nfilas > 0)
{
	print '{"results":';
	print '[';
for ($i=1; $i<=$nfilas; $i++)
{
$id=$fila["Id"];
$cont=$fila["Contenido"];
$fecha=$fila["Fecha"];
$nom=$fila["Nombre"];
$ap=$fila["Apellido"];
print '{"ID":"'.$id.'","CONTENIDO":"'.$cont.'","FECHA":"'.$fecha.'","NOMBRE":"'.$nom.'","APELLIDO":"'.$ap.'"}';
if($i!=$nfilas)
	print ',';
$fila = mysqli_fetch_array ($consulta);
}
print ']';
	print '}';
}
mysqli_close ($conexion);
?>