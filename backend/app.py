from fastapi import FastAPI
from sqlalchemy import create_engine, text
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware



# Create FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create SQLite database file (auto-created if not exists)
engine = create_engine("sqlite:///agrichain.db", echo=True)


# ----------------------------
# CREATE TABLE + SAMPLE DATA
# ----------------------------
with engine.connect() as conn:

    # Create table if not exists
    conn.execute(text("""
        CREATE TABLE IF NOT EXISTS mandi_prices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            state TEXT,
            district TEXT,
            mandi_name TEXT,
            commodity TEXT,
            modal_price INTEGER,
            min_price INTEGER,
            max_price INTEGER,
            arrival_qty REAL,
            price_date TEXT
        );
    """))

    # Check if table empty
    result = conn.execute(text("SELECT COUNT(*) FROM mandi_prices"))
    count = result.scalar()

    # Insert sample data only if empty
    if count == 0:
        conn.execute(text("""
            INSERT INTO mandi_prices
            (state, district, mandi_name, commodity, modal_price, min_price, max_price, arrival_qty, price_date)
            VALUES
            ('Maharashtra','Solapur','Solapur Mandi','Wheat',2450,2300,2600,120.5,'2024-02-20'),
            ('Maharashtra','Pune','Pune Mandi','Wheat',2380,2200,2500,95.3,'2024-02-20'),
            ('Maharashtra','Nashik','Nashik Mandi','Wheat',2520,2400,2700,140.2,'2024-02-20'),
            ('Maharashtra','Nagpur','Nagpur Mandi','Wheat',2480,2350,2650,110.0,'2024-02-20');
        """))
        conn.commit()


# ----------------------------
# API ENDPOINT
# ----------------------------
@app.get("/")
def home():
    return {"message": "AgriChain Mandi API Running"}


@app.get("/api/mandi")
def get_mandi(state: str = None, commodity: str = None):

    query = "SELECT * FROM mandi_prices WHERE 1=1"

    if state:
        query += f" AND state='{state}'"

    if commodity:
        query += f" AND commodity='{commodity}'"

    query += " ORDER BY modal_price DESC"

    df = pd.read_sql(query, engine)

    return df.to_dict(orient="records")
@app.get("/api/mandi-trend")
def mandi_trend(mandi_name: str = "Nashik Mandi"):

    query = f"""
        SELECT price_date, modal_price 
        FROM mandi_prices
        WHERE mandi_name='{mandi_name}'
        ORDER BY price_date ASC
    """

    df = pd.read_sql(query, engine)

    return df.to_dict(orient="records")


@app.get("/api/mandi-trend")
def mandi_trend(mandi_name: str):
    query = f"""
        SELECT price_date, modal_price
        FROM mandi_prices
        WHERE mandi_name = '{mandi_name}'
        ORDER BY price_date DESC
        LIMIT 7
    """
    df = pd.read_sql(query, engine)
    df = df.sort_values("price_date")
    return df.to_dict(orient="records")
WEATHER_API_KEY = "c6463f12cb68d0f60144269e67e7b65e"
@app.get("/api/weather")
def weather(lat: float, lon: float):
    import requests
    API_KEY = "c6463f12cb68d0f60144269e67e7b65e"
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
    return requests.get(url).json()