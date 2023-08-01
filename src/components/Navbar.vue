<template>
    <div>
        <nav class="bg-gray-200 dark:bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="vite.svg" alt="Dev Community">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link class="dark:text-white rounded-md px-3 py-2 text-sm font-medium" to='/' >Home </router-link>
            <router-link class="dark:text-white rounded-md px-3 py-2 text-sm font-medium"  to='/about' >About </router-link>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-900 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button @click="changemode" class="focus:outline-none">
          <span class="sr-only">Mode</span>
          <!-- Use Font Awesome icons for the on/off states -->
          <transition name="icon-fade">
            <Icon  v-if="isDarkMode" icon="mi:sun" class="bg-gray-800 text-yellow-400" height="30px" />
            <Icon v-else icon="ci:moon" class="bg-gray-200 text-dark" height="30px"/>
          </transition>  
        </button>
      </div>
    </div>
  </div>
</nav>

    </div>
</template>

<script setup>
  import { ref, onMounted ,watch} from "vue";
  import { Icon } from '@iconify/vue';

  const isDarkMode = ref(false);

  const changemode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      isDarkMode.value = true;
    }
  });

  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    });

</script>