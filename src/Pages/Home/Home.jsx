import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import Success from "./Success/Success";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Success />
      <h2>footer</h2>
    </div>
  );
};

export default Home;
