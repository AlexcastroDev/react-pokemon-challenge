import PokeCard from "components/PokeCard";
import { $api } from "plugins/axios";

let pokemons = [];
const reqPokemon = async () => {
    let response = await $api.get("/pokemon", {
        params: {
            limit: 20,
        },
    });
    pokemons = (response.data.results || []).map((item) => ({
        name: item.name,
    }));
};

reqPokemon();

function Home() {
    return (
        <div className="App">
            {(pokemons || []).map((pokemon, key) => {
                return <PokeCard key={key.toString()} pokemon={pokemon} />;
            })}
        </div>
    );
}

export default Home;
