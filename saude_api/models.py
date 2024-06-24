from app import db

class Estado(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    uf = db.Column(db.String(2))

class Cidade(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    id_estado = db.Column(db.Integer, db.ForeignKey('estado.id'))

class PacienteEndereco(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_cidade = db.Column(db.Integer, db.ForeignKey('cidade.id'))
    rua = db.Column(db.String(100))
    cep = db.Column(db.Integer)
    numero = db.Column(db.Integer)
    complemento = db.Column(db.String(50))

class Paciente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cpf = db.Column(db.Integer, unique=True)
    nome = db.Column(db.String(100))
    id_endereco = db.Column(db.Integer, db.ForeignKey('paciente_endereco.id'))
