import Photo from "./Photo";
import type {ArtWorks} from "../App";

function ArtCard(props: {artWork: ArtWorks, iiif: string, key: number}) {
  const {
    title,
    artist_display,
    date_display,
    place_of_origin,
    image_id
  } = props.artWork;
  const {alt_text} = props.artWork.thumbnail;
  const {iiif} = props;
  const imageUrl = iiif + "/" + image_id + "/full/400,/0/default.jpg";

  return (
    <>
      <div className="card">
        <div className="cardtext">
          <h1 className="cardtitle">Title: {title}</h1>
          <h2 className="cardheading">Artist: {artist_display}</h2>
          <p className="carddetails">Date: {date_display}</p>
          <p className="carddetails">Origin: {place_of_origin}</p>
        </div>
        <Photo image_url={imageUrl} alt_text={alt_text} />
      </div>
    </>
  );
}

export default ArtCard;
