import { Link } from "react-router-dom";
function FoodsList({ foods }) {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-20">
      {foods.map((food) => {
        const { id, title, cookingTime, img } = food;
        return (
          <li
            key={id}
            className="card card-compact max-w-96 md:max-w-full  bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={img}
                className="object-cover w-full h-[300px]"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl">{title}</h2>
              <p className="text-3xl mb-10 font-semibold"> ⏳ {cookingTime}</p>
              <div className="card-actions justify-end">
                <Link to={`/food/${id}`} className="btn btn-active btn-accent">
                  Read More
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FoodsList;
