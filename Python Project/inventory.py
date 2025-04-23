from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='admin123',
        database='inventory'
    )
    return connection

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_survey():
    data = request.get_json()
    print("Received data:", data)

   
    location = data['location']
    sku = data['sku']
    case = data['case']
    qty= data['qty']

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        sql = "INSERT INTO inventory_tbl (location,sku,`case`,qty) VALUES (%s, %s, %s, %s)"
        val = (location,sku,case,qty)
        cursor.execute(sql, val)

        conn.commit()

        return jsonify({"message": "Inventory data saved successfully!"}), 200

    except mysql.connector.Error as err:
        print("MySQL Error: ", err)
        return jsonify({"error": "Database error"}), 500

    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=5500)
