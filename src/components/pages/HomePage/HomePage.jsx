import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../../api/api";
import Hero from "../../Hero/Hero";
import Section from "../../Section/Section";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const context = useOutletContext();
  const { newAlbums = [], topAlbums = [], songs = [], genres = [] } = context?.data || {};

  console.log("genres", genres);

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
      </div>
    </>
  );
}
