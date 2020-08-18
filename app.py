import flask
from flask import Flask, jsonify, Response, render_template
from flask import redirect
import pymongo
from pymongo import MongoClient
from bson import ObjectId, json_util
import json

cluster = pymongo.MongoClient("mongodb+srv://group2:group2@cluster0.mpjcg.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = cluster["simply_recipe"]
collection = db["recipes_collection"]

app = Flask(__name__)

# This route returns the team's index page
@app.route("/")
def home():
    return render_template('index.html')

# This route returns heesung's plot page of the team's website
@app.route("/heesung/")
def heesung():
    return redirect("https://heesung80.github.io/recipe/")

# This route returns caitlin's plot page of the team's website
@app.route("/caitlin")
def caitlin_plots():
    return render_template('inner-page_caitlin.html')

# This route returns all the recipe_collection data in JSON.
@app.route("/recipes", methods=["GET"])
def get_recipes():
    all_recipes = list(collection.find({}))
    return json.dumps(all_recipes, default=json_util.default)

if __name__ == "__main__":
    app.run()
