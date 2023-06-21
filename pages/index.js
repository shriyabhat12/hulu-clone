/** @format */

import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export default function Home({ categories, categoryData }) {
  return (
    <div
      style={{ fontFamily: "Ubuntu" }}
      className="flex flex-col bg-backgroundColor">
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar categories={categories} />
      <Results result={categoryData} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const key = process.env.TMDB_API_KEY;
  const categories = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
  ).then((res) => res.json());
  const categoryData =
    context.resolvedUrl === "/"
      ? await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
        ).then((res) => res.json())
      : await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&with_genres=${context.query.id}`
        ).then((res) => res.json());
  return {
    props: {
      categories: categories,
      categoryData: categoryData,
    },
  };
}
