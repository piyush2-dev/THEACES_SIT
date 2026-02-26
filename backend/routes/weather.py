from fastapi import APIRouter

router = APIRouter()

@router.get("/weather/{district}")
def weather(district: str):
    weather_data = (district)
    return weather_data