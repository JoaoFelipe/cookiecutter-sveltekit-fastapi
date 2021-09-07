from fastapi import FastAPI

from .config import get_settings

app = FastAPI()

@app.get("/api/start_counter")
async def read_start_counter():
    return {"counter": get_settings().start_number}
