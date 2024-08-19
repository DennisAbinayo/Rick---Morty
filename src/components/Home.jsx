import { useState, useEffect } from "react";

import Cards from "./Cards";
import Pagination from "./Pagination";
import Search from "./Search";

function Home() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [name, setName] = useState("");

  console.log(data);
  const { info, results } = data;

  const apiURL = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}`;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not okay");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Couldn't fetch data", err);
      });
  }, [apiURL]);

  function handleDelete(id) {
    const filterResults = results.filter((result) => result.id !== id);
    setData({ ...data, results: filterResults });
  }

  return (
    <>
      <div className="App  ">
        <Search
          setName={setName}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />

        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="row flex justify-center mx-0">
                <Cards results={results} deleteCharacter={handleDelete} />
              </div>
            </div>
          </div>
        </div>

        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}

export default Home;
