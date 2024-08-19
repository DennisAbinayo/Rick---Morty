import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="details-container p-4 flex justify-center">
      {data ? (
        <div>
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <img
            src={data.image}
            alt={data.name}
            className="pl-0 pr-0 rounded-t cursor-pointer"
          />
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
          <p>Gender: {data.gender}</p>
          <p>Origin: {data.origin.name}</p>
          <p>Location: {data.location.name}</p>
        </div>
      ) : (
        <div>No details available</div>
      )}
    </div>
  );
}

export default Details;
