from flask import Flask, request
import json
# from config import db

# __name__ calls root folder (two underscores on each side)
app = Flask(__name__) 

# ENDPOINTS
@app.get("/") # / is the root (index/homepage)
def home():
    return "Hello from Flask." 

@app.get("/about")
def about():
    return "Hello from the about page"

@app.get("/info")
def info():
    name = {"name": "James W"}
    return json.dumps(name)

# def fix_id(obj):
#     obj["_id"] = str(obj["_id"])
#     return obj

products = []

@app.get("/api/products")
def get_products():
    # products_db = []
    # cursor = db.products.find({})
    # for product in cursor:
    #     print("product", product)
    #     products_db.append(fix_id(product))
    # return json.dumps(products_db)
    return json.dumps(products)


@app.post("/api/products")
def post_product():
    product = request.get_json()
    products.append(product)
    # db.products.insert_one(product)
    print(product)
    return "Product saved."


@app.put("/api/products/<int:index>")
def put_product(index):
    updatedProduct = request.get_json()
    if 0 <= index < len(products):
        products[index] = updatedProduct
        return json.dumps(updatedProduct)
    else:
        return "That index does not exist."

@app.get("/api/products/count")
def count_products():
    return json.dumps(len(products))

@app.get("/api/products/<category>")
def get_category(category):
    category_products = []
    for product in products:
        if product["category"] == category:
            category_products.append(product)
    return json.dumps(category_products)

@app.get("/api/reports/total")
def get_catalog_value():
    total = 0
    for product in products:
        total += product["price"]
    return json.dumps(total)

@app.get("/api/categories")
def get_categories():
    categories = []
    for product in products:
        if product["category"] not in categories:
            categories.append(product["category"])
    return json.dumps(categories)

# Use pop() to delete an element from a list
@app.delete("/api/products/<int:index>")
def delete_product(index):
    deletedProduct = request.get_json()
    if 0 <= index < len(products):
        deletedProduct = products.pop(index)
        return json.dumps(deletedProduct)
    else:
        return "That index does not exist."
    
    
# try this - but use list(index).update(object)
@app.patch("/api/products/<int:index>")
def patch_product(index):
    patchedProduct = request.get_json()
    if 0 <= index < len(products):
        products[index].update(patchedProduct)
        return json.dumps(patchedProduct)
    else:
        return "That index does not exist."
    

# Pass the changes to the server when file is saved:
app.run(debug=True)