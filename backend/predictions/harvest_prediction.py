from .model_loader import load_model
from feature_eng import prepare_harvest_features

def predict_harvest(weather_data: dict, crop_data: dict):

    model = load_model("harvest_model.pkl")
    features = prepare_harvest_features(weather_data, crop_data)

    prediction = model.predict(features)[0]

    return {
        "recommended_days": int(prediction),
        "confidence": float(max(model.predict_proba(features)[0]))
    }