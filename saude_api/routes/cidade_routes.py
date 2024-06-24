from flask import Blueprint, request, jsonify
from app import db
from models import Cidade

cidade_bp = Blueprint('cidade', __name__)

@cidade_bp.route('/', methods=['POST'])
def create_cidade():
    data = request.get_json()
    new_cidade = Cidade(nome=data['nome'], id_estado=data['id_estado'])
    db.session.add(new_cidade)
    db.session.commit()
    return jsonify({"message": "Cidade created"}), 201

@cidade_bp.route('/', methods=['GET'])
def get_cidades():
    cidades = Cidade.query.all()
    return jsonify([cidade.to_dict() for cidade in cidades]), 200

@cidade_bp.route('/<int:id>', methods=['GET'])
def get_cidade(id):
    cidade = Cidade.query.get_or_404(id)
    return jsonify(cidade.to_dict()), 200

@cidade_bp.route('/<int:id>', methods=['PUT'])
def update_cidade(id):
    data = request.get_json()
    cidade = Cidade.query.get_or_404(id)
    cidade.nome = data['nome']
    cidade.id_estado = data['id_estado']
    db.session.commit()
    return jsonify({"message": "Cidade updated"}), 200

@cidade_bp.route('/<int:id>', methods=['DELETE'])
def delete_cidade(id):
    cidade = Cidade.query.get_or_404(id)
    db.session.delete(cidade)
    db.session.commit()
    return jsonify({"message": "Cidade deleted"}), 200