import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

class DBHandler:
    def __init__(self):

        self.db_connection = mysql.connector.connect(
            host=os.getenv('DB_HOST'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            database=os.getenv('DB_DATABASE')
        )
        self.db_cursor = self.db_connection.cursor()

        # wenn keiner existet
        self.db_cursor.execute("""
            CREATE TABLE IF NOT EXISTS weather_data (
                id INT AUTO_INCREMENT PRIMARY KEY,
                ip VARCHAR(50) NOT NULL,
                latitude DECIMAL(10, 8) NOT NULL,
                longitude DECIMAL(11, 8) NOT NULL,
                temperature FLOAT,
                precipitation FLOAT,
                cloud_cover FLOAT,
                wind_speed FLOAT,
                is_day BOOLEAN,
                sunshine_duration FLOAT
            )
        """)
        self.db_connection.commit()

    def save_weather_data(self, ip, latitude, longitude, weather_data):
        sql = """
            INSERT INTO weather_data (ip, latitude, longitude, temperature, precipitation, cloud_cover, wind_speed, is_day, sunshine_duration)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
    
        values = (
            ip,
            latitude,
            longitude,
            weather_data['hourly']['temperature_2m'][0],
            weather_data['hourly']['precipitation'][0],
            weather_data['hourly']['cloud_cover'][0],
            weather_data['hourly']['wind_speed_10m'][0],
            weather_data['hourly']['is_day'][0],
            weather_data['hourly']['sunshine_duration'][0]
        )
        self.db_cursor.execute(sql, values)
        self.db_connection.commit()

    def get_all_weather_data(self):
        self.db_cursor.execute("SELECT * FROM weather_data")
        rows = self.db_cursor.fetchall()

        weather_data_list = []
        for row in rows:
            weather_data = {
                'ip': row[1],
                'latitude': float(row[2]),
                'longitude': float(row[3]),
                'temperature': float(row[4]),
                'precipitation': float(row[5]),
                'cloud_cover': float(row[6]),
                'wind_speed': float(row[7]),
                'is_day': bool(row[8]),
                'sunshine_duration': float(row[9])
            }
            weather_data_list.append(weather_data)

        return weather_data_list
