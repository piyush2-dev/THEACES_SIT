import pandas as pd

def prepare_harvest_features(weather_data: dict, crop_data: dict):
    return pd.DataFrame([{
        "temperature": weather_data["temperature"],
        "humidity": weather_data["humidity"],
        "rainfall": weather_data["rainfall"],
        "crop_age_days": crop_data["crop_age_days"]
    }])


def prepare_price_features(market_data: dict):
    return pd.DataFrame([{
        "last_week_avg_price": market_data["last_week_avg_price"],
        "arrival_quantity": market_data["arrival_quantity"],
        "demand_index": market_data["demand_index"]
    }])


def prepare_spoilage_features(storage_data: dict):
    return pd.DataFrame([{
        "humidity": storage_data["humidity"],
        "temperature": storage_data["temperature"],
        "transit_time": storage_data["transit_time"],
        "storage_type": storage_data["storage_type_encoded"]
    }])