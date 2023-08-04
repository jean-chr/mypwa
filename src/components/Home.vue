<template>
  <div class="dark:bg-gray-700  bg-white  container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div class="col-span-8">
        <!-- ... Left column content ... -->
        <Detail :pokemon="pokemonSelected" />
      </div>
      
      <div class="col-span-4">
        <div class="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 max-w-md mx-auto">
          <div class="flex mb-4">
            <input
              type="text"
              class="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              v-model="searchPokemonField"
              placeholder="Rechercher un Pokémon..."
            >
          </div>
          <div class="user-list grid grid-cols-2 gap-4">
           <!-- Skeleton loading -->
           <template v-if="loading">
              <div v-for="index in 6" :key="index" class="bg-blue-100 p-4 rounded-lg">
                <div class="animate-pulse">
                  <div class="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
                  <div class="h-4 bg-gray-300 rounded mt-2"></div>
                </div>
              </div>
            </template>
            <!-- Actual data -->
            <template v-else>
              <div
                v-for="pokemon in pokemonsFiltered"
                :key="pokemon.name"
                class="bg-blue-100 p-4 rounded-lg animate__animated animate__rotateIn cursor-pointer"
                @click="selectPokemon(pokemon)"
              >
                <img
                  :src="getPokemonImageURL(pokemon.url)"
                  class="w-16 h-16 rounded-full mx-auto"
                  :alt="pokemon.name"
                >
                <div class="text-center font-bold mt-2">{{ pokemon.name }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>  
import { onMounted, reactive, ref, computed } from "vue";
import Detail from "@/components/Detail.vue";

let urlBaseSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/");
let pokemons = reactive(ref());
let searchPokemonField = ref("");
let pokemonSelected = reactive(ref());
let loading = ref(false);

onMounted(() => {
  fetchPokemons();
  //setInterval(fetchPokemons, 1000);
});

const fetchPokemons = () => {
  loading.value = true;
  fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
    .then((res) => res.json())
    .then((res) => (pokemons.value = res.results));
    setTimeout(() => {
      loading.value = false;
    }, 1500);
};

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemonField.value) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchPokemonField.value.toLowerCase())
    );
  }
  return pokemons.value;
});

const selectPokemon = async (pokemon) => {
  loading.value = true;
  await fetch(pokemon.url)
    .then((res) => res.json())
    .then((res) => (pokemonSelected.value = res))
    .catch((err) => alert(err))
    .finally(() => (loading.value = false));
};

const getPokemonImageURL = (pokemonURL) => {
  const pokemonNumber = pokemonURL.split("/").slice(-2, -1)[0];
  return `${urlBaseSvg.value}${pokemonNumber}.svg`;
};
</script>
