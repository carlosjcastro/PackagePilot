from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

ACCESS_TOKEN = 'TU_ACCESS_TOKEN'  # Reemplaza con tu access token

@app.route('/api/product/<product_id>', methods=['GET'])
def get_product_shipping_info(product_id):
    product_url = f'https://api.mercadolibre.com/items/{product_id}?access_token={ACCESS_TOKEN}'
    
    response = requests.get(product_url)
    
    if response.status_code == 200:
        product_data = response.json()
        shipping_data = product_data.get('shipping', {})
        dimensions = product_data.get('dimensions', {})

        result = {
            "mode": shipping_data.get('mode', 'N/A'),
            "local_pick_up": shipping_data.get('local_pick_up', 'N/A'),
            "free_shipping": shipping_data.get('free_shipping', 'N/A'),
            "logistic_type": shipping_data.get('logistic_type', 'N/A'),
            "store_pick_up": shipping_data.get('store_pick_up', 'N/A'),
            "dimensions": {
                "weight": dimensions.get('weight', 'N/A'),
                "width": dimensions.get('width', 'N/A'),
                "height": dimensions.get('height', 'N/A'),
                "length": dimensions.get('length', 'N/A')
            }
        }
        
        return jsonify(result)
    else:
        return jsonify({"error": f"Error al obtener los datos del producto: {response.status_code}"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
