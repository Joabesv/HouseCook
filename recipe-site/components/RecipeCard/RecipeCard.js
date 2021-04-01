import Link from 'next/link';

/*
  Before React:

  <figure className="recipe-card">
          <Link href="/recipes/candy/brigadeiro">
            <a>
              <img
                className="recipe-picture"
                src="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
                alt="Brigadeiro"
              />
            </a>
          </Link>
          <div className="recipe-category">Doces</div>
          <figcaption className="recipe-name">Brigadeiro</figcaption>
        </figure>
*/

// After React

export default function RecipeCard(props) {
  return (
    <div>
      <figure className="recipe-card">
        <Link href={props.link}>
          <a>
            <img
              className="recipe-picture"
              src={props.picture}
              alt="Brigadeiro"
            />
          </a>
        </Link>
        <div className="recipe-category">{props.category}</div>
        <figcaption className="recipe-name">{props.name}</figcaption>
      </figure>
    </div>
  );
}
