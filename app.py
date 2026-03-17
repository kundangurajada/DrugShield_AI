from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from model import predict_risk

app = Flask(__name__)
CORS(app)

# load drug interaction dataset
with open("drug_interactions.json") as f:
    interactions = json.load(f)

@app.route("/check", methods=["POST"])
def check_drugs():

    data = request.json
    drugs = data["drugs"]

    results = []
    
    for i in range(len(drugs)):
        for j in range(i+1, len(drugs)):

            d1 = drugs[i].lower()
            d2 = drugs[j].lower()

            key = f"{d1}-{d2}"
            key2 = f"{d2}-{d1}"

            if key in interactions:
                info = interactions[key]
            elif key2 in interactions:
                info = interactions[key2]
            else:
                info = {
                    "severity": predict_risk(d1, d2),
                    "effect": "Unknown interaction",
                    "advice": "Consult doctor"
                }

            results.append({
                "drug1": d1,
                "drug2": d2,
                "severity": info["severity"],
                "effect": info["effect"],
                "advice": info["advice"]
            })

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)