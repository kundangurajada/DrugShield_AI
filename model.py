import random

levels = ["Low", "Moderate", "High"]

def predict_risk(d1, d2):
    return random.choice(levels)