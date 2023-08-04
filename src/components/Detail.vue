<template>
    <div class="dark:bg-blue-100 shadow-md rounded-lg container mx-auto">
        <h1 class="text-4xl text-center font-bold">username</h1>
        <div class="col-span-8">
        <div class="p-4 max-w-md mx-auto">
          <div class="flex flex-col items-center justify-center space-y-4">
            <img class="h-12 w-12 rounded-full object-cover" src="/vite.svg" alt="Votre Nom">
            <div>
              <div class="font-bold text-xl ">Name</div>
              <div class="text-gray-500  ">Votre Métier</div>
            </div>
          </div>
          <p class="mt-4 ">Description de vous-même et de votre expérience.</p>
          <div class="mt-4 flex items-center space-x-4">
            <a href="mailto:votre@email.com" class="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.48 6.23l-.002-.004a2 2 0 00-2.117 3.08l-1.456.894a4 4 0 005.464 5.464l.892-1.456a2 2 0 00.029-2.46l-.003-.003-.71-.703.708.702zM19.72 7.72a2 2 0 00-2.117-3.08l-.003.002-.71.702.703.71.002-.003a2 2 0 002.46-.029z" />
              </svg>
            </a>
            <a href="tel:+123456789" class="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </a>
            <!-- Ajoutez des liens vers vos réseaux sociaux avec des icônes ici -->
          </div>
        </div>
      </div>
      
    </div>
  </template>
<script>
export default {
  props: {
  },
    name: 'Detail',
    data() {
        return {
            pokemon: {}
        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
        getPokemon() {
          fetch('https://pokeapi.co/api/v2/pokemon/1')
                .then(response => {
                    this.pokemon = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>
  