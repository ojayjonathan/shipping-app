from flask import Flask, request, jsonify
from flask_cors import CORS
import easypost

app = Flask(__name__)
CORS(app)

# Replace with your actual EasyPost API key
EASYPOST_API_KEY = "EZTK31be6728991f4a4da565b563a294093eGFY9qTBALa8Pl19Ye7gNUQ"


client = easypost.EasyPostClient(EASYPOST_API_KEY)


# Endpoint to get shipment price estimates
@app.route("/shipment_price", methods =["POST"])
def get_shipment_price():
    if request.method == "POST":
        try:
            # Parse request data
            data = request.json
            to_address = data.get("toAddress")
            from_address = data.get("fromAddress")
            parcel = data.get("parcel")

            # Check if required data is present
            if not all([to_address, from_address, parcel]):
                return jsonify({"error": "Missing required data"}), 400

            # Create shipment using the addresses and parcel
            shipment = client.shipment.create(
                to_address=to_address,
                from_address=from_address,
                parcel=parcel,
            )

            # Get the shipment price estimates
            print(shipment)
            rates = shipment.get("rates")

            # Extract the relevant data from the rates
            estimates = []
            for rate in rates:
                estimates.append(
                    {
                        "carrier": rate.carrier,
                        "service": rate.service,
                        "rate": rate.rate,
                        "currency": rate.currency,
                    }
                )

            return jsonify(estimates), 200
        except Exception as e:
            print(e)
            return jsonify({"error": str(e), "detail":e.__dict__}), 500
    return jsonify({})


if __name__ == "__main__":
    app.run(debug=True)
