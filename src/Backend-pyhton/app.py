from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

def search_products(query):
    url = f'https://api.mercadolibre.com/sites/MLA/search?q={query}'
    response = requests.get(url)
    response.raise_for_status()
    return response.json()

def get_product_details(product_id):
    url = f'https://api.mercadolibre.com/items/{product_id}'
    response = requests.get(url)
    response.raise_for_status()
    return response.json()

def calculate_shipping_cost(weight, dimensions):
    base_cost = 10.0
    cost_per_kg = 2.0
    cost_per_cm3 = 0.01

    length = dimensions.get('length', 1)
    width = dimensions.get('width', 1)
    height = dimensions.get('height', 1)

    weight_cost = weight * cost_per_kg
    volume_cost = length * width * height * cost_per_cm3

    total_cost = base_cost + weight_cost + volume_cost
    return total_cost

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify({'error': 'Query parameter is required'}), 400
    search_results = search_products(query)
    return jsonify(search_results)

@app.route('/details/<product_id>', methods=['GET'])
def details(product_id):
    product_details = get_product_details(product_id)
    return jsonify(product_details)

@app.route('/calculate_shipping', methods=['POST'])
def calculate_shipping():
    data = request.json
    weight = data.get('weight', 0)
    dimensions = data.get('dimensions', {})
    shipping_cost = calculate_shipping_cost(weight, dimensions)
    return jsonify({'shipping_cost': shipping_cost})

if __name__ == '__main__':
    app.run(debug=True)
