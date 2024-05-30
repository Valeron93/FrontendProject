import { useEffect, useState } from "react";

function LeaderboardsTable({ players }) {
  if (players === "loading") {
    return <span>Loading...</span>;
  }

  if (players === "error") {
    return <span>Failed to load leaderboards, please try again later</span>;
  }

  return (
    <table className="leader-table">
      <thead>
        <tr>
          <td>Player</td>
          <td>Rating</td>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.username}</td>
            <td>{player.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Leaderboards() {
  const [players, setPlayers] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch("http://localhost:8000/leaderboards");
        const leaderboards = await request.json();
        setPlayers(leaderboards);
      } catch {
        setPlayers("error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="leaderboards">
      <LeaderboardsTable players={players} />
    </div>
  );
}
