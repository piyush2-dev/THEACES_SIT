def prepare_storage_data(storage_type: str, humidity: float, temperature: float, transit_time: int):

    storage_encoding = {
        "open": 0,
        "warehouse": 1,
        "cold storage": 2
    }

    encoded_storage = storage_encoding.get(storage_type.lower(), -1)

    if encoded_storage == -1:
        raise ValueError("Invalid storage type")

    return {
        "humidity": humidity,
        "temperature": temperature,
        "transit_time": transit_time,
        "storage_type_encoded": encoded_storage
    }