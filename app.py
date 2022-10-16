from flask import Flask, render_template, json, redirect
from flask import request
import os

app = Flask(__name__)

@app.route("/")
def index():
    return redirect("/home")
