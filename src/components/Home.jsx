// src/components/Home.jsx
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzaNapolitana from "../assets/img/pizza-napolitana.png";
import pizzaEspanola from "../assets/img/pizza-espanola.png";
import pizzaPepperoni from "../assets/img/pizza-pepperoni.png";

const Home = () => {
  return (
    <>
      <Header />

      <main className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["Mozzarella", "Tomates", "Jamón", "Orégano"]}
              img={pizzaNapolitana}
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["Mozzarella", "Gorgonzola", "Parmesano", "Provolone"]}
              img={pizzaEspanola}
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["Mozzarella", "Pepperoni", "Orégano"]}
              img={pizzaPepperoni}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;