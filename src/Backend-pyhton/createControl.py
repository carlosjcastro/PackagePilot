from flask import Flask, request, jsonify, render_template
import json
import os

app = Flask(__name__)

# Ruta del archivo JSON
DATABASE = 'database.json'

# Función para cargar datos del archivo JSON
def load_data():
    if os.path.exists(DATABASE):
        with open(DATABASE, 'r') as file:
            return json.load(file)
    return []

# Función para guardar datos en el archivo JSON
def save_data(data):
    with open(DATABASE, 'w') as file:
        json.dump(data, file, indent=4)

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    try:
        # Validar que se reciban todos los campos necesarios
        if not request.form['name'] or not request.form['email']:
            return jsonify({'error': 'Missing data'}), 400
        
        name = request.form['name']
        email = request.form['email']
        
        # Validar el formato del correo electrónico
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400

        # Cargar los datos existentes y añadir los nuevos datos
        data = load_data()
        data.append({'name': name, 'email': email})
        save_data(data)
        
        return jsonify({'message': 'Data saved successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

