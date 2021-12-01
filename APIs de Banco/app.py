from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS,cross_origin


app = Flask(__name__)
cors = CORS(app, resources={"": {"origins": ""}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/bancopichincha'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombres = db.Column(db.String(70))
    cedula = db.Column(db.String(10), unique=True)
    cantidad = db.Column(db.Integer)

    def __init__(self, title, description):
        self.title = title
        self.description = description

db.create_all()

class ClientSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombres', 'cedula', 'cantidad')


client_schema = ClientSchema()
clients_schema = ClientSchema(many=True)

@app.route('/deposito/<cedulaa>/<cantidadDeposito>', methods=['PUT'])
@cross_origin()
def deposito(cedulaa,cantidadDeposito):
  client = Cliente.query.filter_by(cedula=cedulaa).first()
  aux=client.cantidad
  client.cantidad = aux + int(cantidadDeposito)
  db.session.commit()
  return client_schema.jsonify(client)

@app.route('/consulta/<cedulaa>', methods=['GET'])
@cross_origin()
def consulta(cedulaa):
  cliente = Cliente.query.filter_by(cedula=cedulaa).first()
  result = cliente.cantidad
  return jsonify(result)

@app.route('/retiro/<cedulaa>/<cantidadRetiro>', methods=['PUT'])
@cross_origin()
def retiro(cedulaa,cantidadRetiro):
  client = Cliente.query.filter_by(cedula=cedulaa).first()
  aux=client.cantidad
  resta= aux - int(cantidadRetiro)
  client.cantidad = resta
  if (resta>0):
    db.session.commit()
    return client_schema.jsonify(client)
  else:
    return jsonify("fondos insuficientes")

if __name__ == "__main__":
    app.run(host='localhost', port=600, debug=True)