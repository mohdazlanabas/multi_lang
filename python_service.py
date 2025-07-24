from flask import Flask
app = Flask(__name__)
@app.route("/python")
def msg():
    response = app.make_response("Package Being Served From Python")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
app.run(host='0.0.0.0', port=9001)