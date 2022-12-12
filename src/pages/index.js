import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home ({ products }) { 
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>

    </div>
  );
}


export const getServerSideProps= async (context) => {
  // this function tells the next.js to calculate first on the server and then deliver It to user.
  const products = await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json());

  return {
    //then we return and next.js passes this prop to our this component which Is Home.
    props: {
      products,
    }
  }

} 
