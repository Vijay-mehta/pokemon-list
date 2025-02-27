import BackButton from "@/app/component/BackButton";
import Image from "next/image";
import React from "react";

const PokemonDetails = async ({ params }) => {
  const { slug } =await params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
  const pokemon = await response.json();
  console.log(pokemon)

  return (
    <div className="max-w-lg mx-auto mt-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-2xl rounded-lg p-6">
      <BackButton/>
     <h1 className="text-3xl font-extrabold text-center uppercase mb-4">{pokemon.name}</h1>
      <div className="flex justify-center">
        { pokemon?.forms?.map((item, index) => (
                  <div key={index}> <Image
                  src={`${"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"}${item.url.slice(-2,-1)}.png`}
                  width={200}
                  height={200}
                  alt="Picture of the mpomon"
                  className="rounded-full border-4 border-white"
                />
              </div>
                    
                 ))}
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white text-black p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center">Abilities</h2>
          <ul className="list-disc list-inside mt-2">
            {pokemon.abilities.map((item, index) => (
              <li key={index} className="capitalize font-medium">{item.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white text-black p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center">Types</h2>
          <ul className="flex justify-center gap-2 mt-2">
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium capitalize"
              >
                {item.type.name}
              </span>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-white text-black p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center">Stats</h2>
        <ul className="mt-2">
          {pokemon.stats.map((item, index) => (
            <li key={index} className="flex justify-between font-medium">
              <span className="capitalize">{item.stat.name}</span>
              <span className="text-indigo-600 font-bold">{item.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6 bg-white text-black p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center">Moves</h2>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {pokemon.moves.map((item, index) => (
            <span key={index} className="bg-gray-800 text-white px-2 py-1 rounded-lg text-sm capitalize text-center">
              {item.move.name}
            </span>
          ))}
        </div>
    </div>
    </div>
  );
};

export default PokemonDetails;
