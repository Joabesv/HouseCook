import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

export default function Recipe(props) {
  return (
    <div>
      <Header title={`HouseCook - ${props.name}`} />

      <main>
        <article className="recipe-body">
          <h1 className="recipe-body-name">{props.name}</h1>

          <img
            className="recipe-body-picture"
            src={props.picture}
            alt={props.name}
          />

          <div>
            <i className="fas fa-stopwatch fa-fw"></i> Preparo: {props.time}
            <br />
            <i className="fas fa-utensils fa-fw"></i> Rendimento:
            {props.servings}
          </div>

          {props.children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
