import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
// import video from "../../Assets"
// faiaz testing
//test
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1480719116/photo/scenic-view-of-sea-against-romantic-sky-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=kI4r3QjhCb3kdUDaiQnMmK44D_k7-1DymzwgfjkJuUc="
        title="To travel is to live"
        text="Choose your destination"
        buttonText="Travel plans"
        url="/"
        btnClass="show" 
      />
    </>
  );
}

export default Home;
