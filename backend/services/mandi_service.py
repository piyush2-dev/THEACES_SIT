import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
DATA_PATH = os.path.join(BASE_DIR, "data", "mandi_prices.csv")


def get_mandi_data(district: str, crop: str):

    if not os.path.exists(DATA_PATH):
        raise FileNotFoundError("mandi_prices.csv not found")

    df = pd.read_csv(DATA_PATH)

    df_filtered = df[
        (df["district"].str.lower() == district.lower()) &
        (df["crop"].str.lower() == crop.lower())
    ]

    if df_filtered.empty:
        raise ValueError("No mandi data found for this district and crop")

    latest_data = df_filtered.sort_values("date", ascending=False).iloc[0]

    return {
        "market_name": latest_data["market"],
        "last_week_avg_price": latest_data["avg_price"],
        "arrival_quantity": latest_data["arrival_quantity"],
        "demand_index": latest_data["demand_index"]
    }