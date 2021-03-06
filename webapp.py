# Jeffrey Wang

from flask import Flask, request, jsonify, render_template, redirect, session


app = Flask(__name__)
app.secret_key="asdts1233123"



@app.route("/")
def homepage():
    return render_template("home.html")
    
@app.route("/aboutme")
def aboutpage():
    return render_template("about.html")

@app.route("/education")
def education():
    return render_template("education.html")

@app.route("/hobbies")
def hobbies():
    return render_template("hobbies.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

if __name__ == "__main__":
    app.run(debug=True)