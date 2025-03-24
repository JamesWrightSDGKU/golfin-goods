import pymongo
import certifi # pip install certifi

connection_string = "mongodb+srv://james:password55@fsdi-107.qouqv.mongodb.net/?retryWrites=true&w=majority&appName=fsdi-107"

client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())
db = client.get_database("organika")