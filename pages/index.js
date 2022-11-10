import Head from "next/head";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import FeaturedBlogs from "../components/home/FeaturedBlogs";
import { getFeaturedPosts } from "../services";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>CMarghin | Home</title>
        <meta name="description" content="CMarghin's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      {/* <FeaturedBlogs posts={posts} /> */}
    </>
  );
};

export async function getStaticProps() {
  const posts = (await getFeaturedPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
export default Home;
