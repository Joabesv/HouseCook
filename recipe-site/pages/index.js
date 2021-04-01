import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import RecipeCard from '../components/RecipeCard/RecipeCard.js';

export default function Index() {
  return (
    <div>
      <Header title="HouseCook - Receitas" />

      <main>
        <RecipeCard
          name="Bolo de Cenoura"
          category="Cakes"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400"
          link="/recipes/cakes/carrot-cake"
        />

        <RecipeCard
          name="Brigadeiro"
          category="Candy"
          picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
          link="/recipes/candy/brigadeiro"
        />

        <RecipeCard
          name="Bolinho de Chuva"
          category="Snacks"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/014/950/329096/329096_original.jpg?mode=crop&width=710&height=400"
          link="/recipes/snacks/fritter"
        />

        <RecipeCard
          name="Molho Branco"
          category="Sauces"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/044/199/332851/332851_original.jpg?mode=crop&width=710&height=400"
          link="/recipes/sauces/white-sauce"
        />
      </main>

      <Footer />
    </div>
  );
}
