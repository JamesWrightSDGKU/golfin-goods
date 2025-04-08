from flask import Flask, request
import json
from config import db
from flask_cors import CORS


# __name__ calls root folder (two underscores on each side)
app = Flask(__name__)
CORS(app) # warning - this disables CORS policy

# || ENDPOINTS


@app.get("/")
def home():
    return "Hello from Flask." 


@app.get("/about")
def about():
    return "Hello from the about page"


@app.get("/info")
def info():
    name = {"name": "James W"}
    return json.dumps(name)


def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj


@app.get("/api/products")
def get_products():
    results = []
    cursor = db.products.find({})
    for product in cursor:
        results.append(fix_id(product))
        print("product", product)
    return json.dumps(results)


@app.post("/api/products")
def post_product():
    product = request.get_json()
    cursor = db.products.find({})
    cursor.insert_one(product)
    print(product)
    return "Product saved."


@app.put("/api/products/<int:index>")
def put_product(index):
    updatedProduct = request.get_json()
    cursor = db.products.find({})
    if 0 <= index < len(cursor):
        db.products[index] = updatedProduct
        return json.dumps(updatedProduct)
    else:
        return "That index does not exist."
    

@app.get("/api/products/count")
def count_products():
    cursor = db.products.find({})
    return json.dumps(len(cursor))


@app.get("/api/products/category/<category>")
def get_category(category):
    results = []
    cursor = db.products.find({})
    for product in cursor:
        if product["category"] == category:
            results.append(product)
            return json.dumps(results)
        else:
            return "No products match that category."


@app.get("/api/products/categories")
def get_categories():
    results = []
    cursor = db.products.find({})
    for product in cursor:
        cat = product["category"]
        if cat not in results:
            results.append(cat)
    return json.dumps(results)


"""
create an endpoint that will return the total sum of all product prices
"""


# Use pop() to delete an element from a list
@app.delete("/api/products/<int:index>")
def delete_product(index):
    cursor = db.products.find({})
    deletedProduct = request.get_json()
    if 0 <= index < len(cursor):
        deletedProduct = cursor.pop(index)
        return json.dumps(deletedProduct)
    else:
        return "That index does not exist."
    
    
# try this - but use list(index).update(object)
@app.patch("/api/products/<int:index>")
def patch_product(index):
    cursor = db.products.find({})
    patchedProduct = request.get_json()
    if 0 <= index < len(cursor):
        cursor[index].update(patchedProduct)
        return json.dumps(patchedProduct)
    else:
        return "That index does not exist."
    

# || REPORTS


@app.get("/api/reports/catalog_value")
def get_catalog_value():
    total = 0
    cursor = db.products.find({})
    for product in cursor:
        total += product["price"]
    return json.dumps(total)


# Pass the changes to the server when file is saved:
app.run(debug=True)