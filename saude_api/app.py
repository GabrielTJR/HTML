from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import *

from routes.estado_routes import estado_bp
from routes.cidade_routes import cidade_bp
from routes.paciente_routes import paciente_bp

app.register_blueprint(estado_bp, url_prefix='/estado')
app.register_blueprint(cidade_bp, url_prefix='/cidade')
app.register_blueprint(paciente_bp, url_prefix='/paciente')

if __name__ == '__main__':
    app.run(debug=True)
