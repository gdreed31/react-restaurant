
import {foods} from "./food";

export default function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold">React Restaurant</h1>
      <div className="flex flex-wrap">
      {foods.map((food) => {
        return (
          <div className="p3 shadow-lg border max-w-sm m-2 rounded ">
            <h2 className="text-lg font-bold">{food.name}</h2>
            <img
              className="h-52"
              src={"/images/" + food.image}
              alt={food.name}
            />
            <p>{food.description}</p>
            
            <p className="text-slate-400">${food.price}</p>
          </div>
        );
      })}
  );
</div>
</main>)}
