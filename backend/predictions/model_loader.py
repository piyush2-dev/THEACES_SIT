import joblib
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

def load_model(model_name: str):
    model_path = os.path.join(BASE_DIR, "models", "saved_models", model_name)
    
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"{model_name} not found. Train model first.")
    
    return joblib.load(model_path)