import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fetchTopAlbum, fetchNewAlbum } from "./Api/Api";
function App() {
  let [Data, setData] = useState({});
  const fetchData = (type, source) => {
    console.log("'.....");
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [type]: data };
      });
    });
  };
  useEffect(() => {
    fetchData("topAlbums", fetchTopAlbum);
    fetchData("newAlbums", fetchNewAlbum);
  }, []);
  const { topAlbums = [], newAlbums = [] } = Data;
  return (
    <div>
      <Navbar />
      <Outlet context={{ data: { topAlbums, newAlbums } }} />
    </div>
  );
}
export default App;
