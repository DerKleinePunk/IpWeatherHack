from flask import Flask, jsonify
from flask_cors import CORS
import requests
from db import DBHandler
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)
db_handler = DBHandler()
load_dotenv()

def get_coordinates_from_ip(ip):
    url = f"http://ip-api.com/json/{ip}"
    response = requests.get(url)
    data = response.json()
    if data['status'] == 'success':
        return {'latitude': data['lat'], 'longitude': data['lon']}
    else:
        return None

def get_weather_data(latitude, longitude):
    url = f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation,cloud_cover,wind_speed_10m,is_day,sunshine_duration&forecast_days=1&forecast_hours=1"
    response = requests.get(url)
    return response.json()

@app.route('/api/weather/<ip>', methods=['GET'])
def weather(ip):
    coordinates = get_coordinates_from_ip(ip)
    if coordinates:
        latitude = coordinates['latitude']
        longitude = coordinates['longitude']
        weather_data = get_weather_data(latitude, longitude)
        
        db_handler.save_weather_data(ip, latitude, longitude, weather_data)
        
        return jsonify(weather_data)
    else:
        return jsonify({'error': 'Invalid IP address'}), 400

@app.route('/api/weather_data', methods=['GET'])
def weather_data():
    all_weather_data = db_handler.get_all_weather_data()
    return jsonify(all_weather_data)

if __name__ == '__main__':
    app.run(host=os.getenv('HOST'), port=os.getenv('PORT'), debug=True)
