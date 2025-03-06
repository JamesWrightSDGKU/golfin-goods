from flask import Flask
import json

app = Flask(__name__) # __name__ uses the name of the root folder (two underscores on each side)

# This is an endpoint
@app.get("/") # / is the root (index/homepage)
def home():
    return "Hello from Flask" # when the user requests (get) the homepage, code sends "Hello from Flask" to user

@app.get("/about")
def about():
    return "Hello from the about page"

@app.get("/info")
def info():
    name = {"name": "James W"}
    return json.dumps(name)

app.run(debug=True) # This passes the changes to the server when file is saved