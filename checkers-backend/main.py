import random
from dataclasses import dataclass

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def random_username() -> str:
    names = ["Bohdan", "Karina", "Sviatoslav", "Dima Makogon", "Serhii", "Andrii", "Victor", "Susan"]
    num = random.randint(10000, 99999)

    return f"{random.choice(names)}-{num}"


@dataclass(frozen=True)
class LeaderboardItem:
    username: str
    rating: int

    @staticmethod
    def random():
        return LeaderboardItem(username=random_username(), rating=random.randint(20, 1000))


leaderboards = sorted([LeaderboardItem.random() for _ in range(20)], key=lambda x: x.rating, reverse=True)


@app.get("/leaderboards")
def get_leaderboards() -> list[LeaderboardItem]:

    return leaderboards
