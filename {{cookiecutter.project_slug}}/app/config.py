from functools import lru_cache

from pydantic import BaseSettings

class Settings(BaseSettings):
    start_number: int = 5

@lru_cache()
def get_settings():
    return Settings()
