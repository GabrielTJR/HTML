from flask import Blueprint, request, jsonify
from app import db
from models import Paciente

paciente_bp = Blueprint('paciente', __name__)

@paciente_bp.route('/', methods=['POST'])
def create_paciente():
    data = request.get_json()
    new_paciente = Paciente(cpf=data['cpf'], nome=data['nome'], id_endereco=data['id_endereco'])
    db.session.add(new_paciente)
    db.session.commit()
    return jsonify({"message": "Paciente created"}), 201

@paciente_bp.route('/', methods=['GET'])
def get_pacientes():
    pacientes = Paciente.query.all()
    return jsonify([paciente.to_dict() for paciente in pacientes]), 200

@paciente_bp.route('/<int:id>', methods=['GET'])
def get_paciente(id):
    paciente = Paciente.query.get_or_404(id)
    return jsonify(paciente.to_dict()), 200

@paciente_bp.route('/<int:id>', methods=['PUT'])
def update_paciente(id):
    data = request.get_json()
    paciente = Paciente.query.get_or_404(id)
    paciente.cpf = data['cpf']
    paciente.nome = data['nome']
    paciente.id_endereco = data['id_endereco']
    db.session.commit()
    return jsonify({"message": "Paciente updated"}), 200

@paciente_bp.route('/<int:id>', methods=['DELETE'])
def delete_paciente(id):
    paciente = Paciente.query.get_or_404(id)
    db.session.delete(paciente)
    db.session.commit()
    return jsonify({"message": "Paciente deleted"}), 200