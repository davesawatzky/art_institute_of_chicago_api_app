import "./index.css";
import {useState, useEffect} from "react";
import SearchBox from "./components/SearchBox.js";
import ArtCard from "./components/ArtCard";
import TitleBox from "./components/TitleBox";

export type ArtWorks = {
  artist_display: string,
  date_display: string,
  id: number,
  image_id: string,
  place_of_origin: string,
  title: string,
  thumbnail: {
    alt_text: string
  }
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [artWorks, setArtWorks] = useState<ArtWorks[]>([]);
  const [iiifUrl, setIiifUrl] = useState("");

  function fetchResult(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArtWorks(result.data);
          setIiifUrl(result.config.iiif_url);
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        }
      );
  }

  useEffect(() => fetchResult(""), []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <TitleBox>
          <SearchBox onUrlResult={fetchResult} />
        </TitleBox>
        {artWorks.map((element) => (
          <ArtCard artWork={element} iiif={iiifUrl} key={element.id} />
        ))}
      </div>
    );
  }
}
