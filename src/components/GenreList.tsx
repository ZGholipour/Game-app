import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import { Genre } from "../hooks/useGenre";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, error } = useGenres();

  return (
    <>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={item.image_background}
              ></Image>
              <Button
                fontWeight={item.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(item)}
                fontSize="lg"
                variant="link"
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
