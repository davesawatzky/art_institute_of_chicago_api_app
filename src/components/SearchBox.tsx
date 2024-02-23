import React, {useState} from "react";

type URLResult = {
  onUrlResult: Function
}

function SearchBox(props: URLResult) {
  const [searchTerm, setSearchTerm] = useState("");

  function changeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function SubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const baseurl = "https://api.artic.edu/api/v1/artworks/";
    const limit = "limit=10";
    const fields =
      "fields=id,title,thumbnail,artist_display,image_id,date_display,place_of_origin";
    const newSearch = "search?q=" + searchTerm;
    const url = baseurl + newSearch + "&" + limit + "&" + fields;

    props.onUrlResult(url);
    setSearchTerm("");
  }
  return (
    <>
      <form onSubmit={SubmitHandler}>
        <label>Search Term</label>
        <input value={searchTerm} onChange={changeSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBox;