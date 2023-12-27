import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fetchTopAlbum, fetchNewAlbum, fetchAllSongs } from "./Api/Api";
function App() {
  let [Data, setData] = useState({});
  const fetchData = (type, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [type]: data };
      });
    });
  };
  useEffect(() => {
    fetchData("topAlbums", fetchTopAlbum);
    fetchData("newAlbums", fetchNewAlbum);
    fetchData("songs", fetchAllSongs);
  }, []);
  const { topAlbums = [], newAlbums = [], songs = [] } = Data;
  return (
    <div>
      <Navbar />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </div>
  );
}
export default App;
