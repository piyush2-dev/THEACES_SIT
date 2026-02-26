from .model_loader import load_model
from .feature_eng import prepare_price_features

def predict_price(market_data: dict):

    model = load_model("price_model.pkl")
    features = prepare_price_features(market_data)

    predicted_price = model.predict(features)[0]

    return {
        "expected_price": float(predicted_price),
        "market": market_data["market_name"]
    }