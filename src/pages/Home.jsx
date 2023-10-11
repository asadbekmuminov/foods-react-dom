import { useFetch } from "../hooks/useFetch";
import FoodsList from "../components/FoodsList";

function Home() {
  const {
    data: foods,
    isPending,
    error,
  } = useFetch(" https://neon-recondite-turn.glitch.me/recipes");
  if (isPending) {
    return (
      <span className="loading loading-lg text-accent  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    );
  }
  return <div>{foods && <FoodsList foods={foods} />}</div>;
}

export default Home;
