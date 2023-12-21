import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
function Home() {
  const { data } = useOutletContext();
  return (
    <div>
      <Hero />
      <Section type="Top Albums" data={data.topAlbums} />
      <Section type="New Albums" data={data.newAlbums} />
    </div>
  );
}
export default Home;
