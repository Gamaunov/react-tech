import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.length("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    <h1>There was an error, Sorry </h1>;
  }

  if (isLoading) {
    <h1>loading...</h1>;
  }
  return (
    <>
      <div>Home {data?.fact}</div>
      <button onClick={refetch}>Update Data</button>
    </>
  );
};

export default Home;
