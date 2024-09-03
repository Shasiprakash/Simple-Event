from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        # Here you would typically store data in a database
        print(f"Registration received: {data}")
        return jsonify({'message': 'Registration successful'}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'message': 'Registration failed'}), 500

if __name__ == '__main__':
    app.run(debug=True)
