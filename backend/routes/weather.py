from fastapi import APIRouter
from services.weather_service import get_weather

router = APIRouter()

@router.get("/weather/{district}")
def weather(district: str):
    weather_data = get_weather(district)
    return weather_data