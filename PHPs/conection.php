<?PHP

session_start();

header("Access-Control-Allow-Origin: http://localhost:4200");

header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, UPDATE,OPTIONS");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, X-HTTP-Method-Override,Content-Type");

header("Access-Control-Allow-Credentials: true");

$_POST = json_decode(file_get_contents('php://input'), true);

$conexion=mysqli_connect("35.7","root","comescaca")
or die("No se puede conectar con el servidor");

mysqli_select_db($conexion, "wisckodb")
or die("No se puede conectar a la base de datos.");


?>