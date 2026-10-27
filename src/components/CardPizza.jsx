const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />

      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
      </div>

      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item card-pizza-ingredients">
          <p className="text-muted mb-1">Ingredientes:</p>
          <p className="mb-0">🍕 {ingredients.join(", ")}</p>
        </li>
        <li className="list-group-item">
          <h5 className="mb-0">Precio: ${price.toLocaleString("es-CL")}</h5>
        </li>
      </ul>

      <div className="card-body d-flex justify-content-between align-items-center flex-grow-0 mt-auto">
        <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
        <button className="btn btn-dark btn-sm">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;