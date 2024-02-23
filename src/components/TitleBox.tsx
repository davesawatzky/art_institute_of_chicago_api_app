function TitleBox(props: any) {
  return (
    <div className="headingbox">
      <h2 className="heading">Browse Images from the</h2>
      <h1 className="title">Art Institute of Chicago</h1>
      {props.children}
    </div>
  );
}

export default TitleBox;