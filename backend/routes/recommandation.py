from fastapi import APIRouter
from pydantic import BaseModel

from predictions.harvest_prediction import predict_harvest
from predictions.price_prediction import predict_price
from predictions.spoilage_prediction import predict_spoilage
from predictions.explanation_generator import generate_explanation

router = APIRouter()

# Input schema
class FarmerInput(BaseModel):
    crop: str
    district: str
    storage: str


@router.post("/recommendation")
def get_recommendation(data: FarmerInput):

    # Call prediction modules
    harvest = predict_harvest(data.crop)
    price = predict_price(data.district)
    spoilage = predict_spoilage(data.storage)

    explanation = generate_explanation(harvest, price, spoilage)

    return {
        "harvest_advice": harvest,
        "best_market": price,
        "spoilage_risk": spoilage,
        "reason": explanation
    }