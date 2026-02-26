def generate_explanation(harvest, price, spoilage):

    explanation = (
        f"Based on current weather conditions, harvest is recommended "
        f"in {harvest['recommended_days']} days. "
        f"Predicted mandi price is ₹{price['expected_price']}. "
        f"Spoilage risk level is {spoilage['risk_level']}."
    )

    return explanation