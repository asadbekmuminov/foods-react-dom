import { Link } from "react-router-dom";
function FoodsList({ foods }) {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-20">
      {foods.map((food) => {
        const { id, title, cookingTime } = food;
        return (
          <li
            key={id}
            className="card card-compact max-w-96 md:max-w-full  bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
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
