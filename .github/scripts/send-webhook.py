import hashlib
import hmac
import json
import os
import time

import requests
from dotenv import load_dotenv

load_dotenv()


def send_webhook(url, payload, secret):
    timestamp = str(int(time.time()))

    json_body = json.dumps(payload, separators=(",", ":"))

    signature = f"{timestamp}.{json_body}".encode("utf-8")

    encoded_bytes = secret.encode("utf-8")

    computed_signature = hmac.new(encoded_bytes, signature, hashlib.sha256).hexdigest()

    headers = {
        "Content-Type": "application/json",
        "X-Webhook-Timestamp": timestamp,
        "X-Webhook-Signature": computed_signature,
    }

    try:
        response = requests.post(url, data=json_body, headers=headers)
        print("Webhook successfully sent. Ping!")
        return response
    except requests.exceptions.RequestException as e:
        print(f"Webhook failed to send: {e}")
        return None


if __name__ == "__main__":
    WEBHOOK_URL = os.getenv("WEBHOOK_URL")
    WEBHOOK_SECRET = os.getenv("WEBHOOK_SECRET")

    if not WEBHOOK_SECRET or not WEBHOOK_URL:
        raise ValueError("Missing .env file")

    data = {
        "event": "Build Uploaded",
    }

    send_webhook(WEBHOOK_URL, data, WEBHOOK_SECRET)
