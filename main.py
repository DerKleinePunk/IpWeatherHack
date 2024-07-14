from flask import Flask, jsonify
import requests

app = Flask(__name__)

def get_coordinates_from_ip(ip):
    url = f"http://ip-api.com/json/{ip}"
    response = requests.get(url)
    data = response.json()
    if data['status'] == 'success':
        return {'latitude': data['lat'], 'longitude': data['lon']}
    else:
        return None

def get_weather_data(latitude, longitude):
    url = f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m,is_day,rain,cloud_cover&forecast_days=1"
    response = requests.get(url)
    return response.json()

@app.route('/weather/<ip>', methods=['GET'])
def weather(ip):
    coordinates = get_coordinates_from_ip(ip)
    if coordinates:
        latitude = coordinates['latitude']
        longitude = coordinates['longitude']
        weather_data = get_weather_data(latitude, longitude)
        return jsonify(weather_data)
    else:
        return jsonify({'error': 'Invalid IP address'}), 400

if __name__ == '__main__':
    app.run(debug=True)
