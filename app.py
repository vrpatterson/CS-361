from flask import Flask, render_template, json, redirect
from flask import request
import os

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.j2')

@app.route("/find-peak")
def findPeak():
    return render_template('find-peak.j2')

@app.route("/faq")
def faq():
    return render_template('faq.j2')

@app.route("/search")
def search():
    return render_template('search.j2')