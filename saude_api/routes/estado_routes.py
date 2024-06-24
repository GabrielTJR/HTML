from flask import Blueprint, request, jsonify
from app import db
from models import Estado

estado_bp = Blueprint('estado', __name__)

@estado_bp.route('/', methods=['POST'])
def create_estado():
    data = request.get_json()
    new_estado = Estado(nome=data['nome'], uf=data['uf'])
    db.session.add(new_estado)
    db.session.commit()
    return jsonify({"message": "Estado created"}), 201

@estado_bp.route('/', methods=['GET'])
def get_estados():
    estados = Estado.query.all()
    return jsonify([estado.to_dict() for estado in estados]), 200

@estado_bp.route('/<int:id>', methods=['GET'])
def get_estado(id):
    estado = Estado.query.get_or_404(id)
    return jsonify(estado.to_dict()), 200

@estado_bp.route('/<int:id>', methods=['PUT'])
def update_estado(id):
    data = request.get_json()
    estado = Estado.query.get_or_404(id)
    estado.nome = data['nome']
    estado.uf = data['uf']
    db.session.commit()
    return jsonify({"message": "Estado updated"}), 200

@estado_bp.route('/<int:id>', methods=['DELETE'])
def delete_estado(id):
    estado = Estado.query.get_or_404(id)
    db.session.delete(estado)
    db.session.commit()
    return jsonify({"message": "Estado deleted"}), 200