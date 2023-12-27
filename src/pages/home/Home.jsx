import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import styles from "./Home.module.css";
import { fetchGenres } from "../../Api/Api";

function Home() {
  const { data } = useOutletContext();
  console.log(data);
  return (
    <div>
      <Hero />
      <Section type="Top Albums" data={data.topAlbums} />
      <Section type="New Albums" data={data.newAlbums} />
      <Section type="Songs" data={data.songs} filterSource={fetchGenres} />
    </div>
  );
}
export default Home;
