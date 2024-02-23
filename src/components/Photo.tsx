type PhotoType = {
  image_url: string,
  alt_text: string
}

function Photo(props: PhotoType) {
  const {image_url, alt_text} = props;
  return (
    <div className="photo">
      <img src={image_url} alt={alt_text} />
    </div>
  );
}

export default Photo;