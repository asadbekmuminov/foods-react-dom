import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Food() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: food, isPending, error } = useFetch(url);
  if (isPending) {
    return (
      <span className="loading loading-lg text-accent  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    );
  }
  return (
    <div>
      {food && (
        <div className="card w-full bg-base-100 shadow-xl image-full mb-24 max-h-[600px] ">
          <figure>
            <img className="w-full object-cover" src={food.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-4xl font-black text-white">
              {food.title}
            </h2>
            <h1 className="text-3xl font-bold">🗒️Ingredients:</h1>
            <ul className="mb-8">
              {food.ingredients.map((e) => {
                return (
                  <li className="font-bold" key={e}>
                    📌
                    {e}
                  </li>
                );
              })}
            </ul>
            <h1 className=" text-3xl  mx-auto font-extrabold">Method:</h1>
            <p className="text-center text-2xl font-semibold"> {food.method}</p>

            <div className="card-actions justify-end">
              <Link to="/" className="btn btn-accent mx-auto">
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Food;
