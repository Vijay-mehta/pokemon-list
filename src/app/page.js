
import PokemonList from "./component/PokemonList";

export default async function Home() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const pokemonres = await pokemon.json();

  return (
    <>
      <div className="p-6 max-w-5xl mx-auto ">
        <h1 className="text-3xl font-bold text-center mb-6">pokemon List</h1>
        <PokemonList pokemonres={pokemonres} />
      </div>
    </>
  );
}
