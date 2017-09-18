<?php

class bd{

	//host
	private $host = 'localhost';

	//usuario
	private $usuario = 'siaf';

	//senha
	private $senha = '123456';

	//banco de dados
	private $bd = 'siaf';

	private $conn=NULL;
	

	public function conecta_mysql(){

		//cria conexao
		$this->conn = mysqli_connect($this->host, $this->usuario, $this->senha, $this->bd);

		//ajusta charset de comunicação entre aplicação e bd
		mysqli_set_charset($this->conn, 'utf8');

		//verificar se houve erro de conexão
		if(mysqli_connect_errno()){
			echo 'Erro ao tentar se conectar com o BD MySQL: ' .mysqli_connect_error();
		}

		return $this->conn; 
	}
	
	function __construct()
	{
		$this->conecta_mysql();
	}

	public function exec($query,$type,$param){
		$stmt=$this->conn->prepare($query);
		$stmt->bind_param($type,...$param);
		$stmt->execute();
		return $stmt->get_result();
	}

	public function __destruct(){
		mysqli_close($this->conn);
	}

}

?>