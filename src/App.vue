<template>
  <ReloadPWA />
   <!-- NAVBAR -->
   <Navbar />
  <!-- CONTENT -->
  <div class="dark:bg-gray-700">
    <router-view></router-view>
  </div>

  <footer class="bg-primary text-light footer-center">
    <div>
      By <a href="https://github.com/jean-chr" target="_blank" title="BODJONA Jean-Christ">@Jean-Christ</a>. {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<script lang="js" >

import ReloadPWA from "@/components/ReloadPWA.vue"
import Navbar from "@/components/Navbar.vue"

export default {
  name: 'App',
  components: {
    ReloadPWA,
    Navbar
  },
  methods: {
    
  }

}
</script>

<style>
/* Add styles to push the footer to the bottom */
html, body {
  height: 100%;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

/* Add styles to push footer to the bottom */
footer {
  margin-top: auto;
}

.footer-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px; /* You can adjust the height as needed */
}
</style>

