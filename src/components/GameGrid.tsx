import apiClient from "../services/api-client";
import { useState, useEffect } from "react";
import { HStack, Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      <HStack>
        {error && <Text>{error}</Text>}
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      </HStack>
    </>
  );
}

export default GameGrid;
