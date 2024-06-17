<?php
include 'db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $stmt = $pdo->prepare("SELECT * FROM paciente WHERE id = ?");
            $stmt->execute([$_GET['id']]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($result);
        } else {
            $stmt = $pdo->query("SELECT * FROM paciente");
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare("INSERT INTO paciente (cpf, nome, id_endereco) VALUES (?, ?, ?)");
        $stmt->execute([$data['cpf'], $data['nome'], $data['id_endereco']]);
        echo json_encode(['id' => $pdo->lastInsertId()]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare("UPDATE paciente SET cpf = ?, nome = ?, id_endereco = ? WHERE id = ?");
        $stmt->execute([$data['cpf'], $data['nome'], $data['id_endereco'], $data['id']]);
        echo json_encode(['status' => 'success']);
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare("DELETE FROM paciente WHERE id = ?");
        $stmt->execute([$data['id']]);
        echo json_encode(['status' => 'success']);
        break;
}
?>
