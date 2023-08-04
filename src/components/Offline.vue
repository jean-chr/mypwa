<template>
    <!-- Le message d'alerte n'est affiché que lorsque l'application est hors ligne -->
    <div v-if="isOffline" class="offline-alert">
      <span class="offline-icon">⚠️</span>
      <span class="offline-message">Vous êtes hors ligne. Veuillez vous connecter à Internet.</span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from "vue";
  
  export default defineComponent({
    name: "OfflineAlert",
    setup() {
      const isOffline = ref(!window.navigator.onLine);
  
      // Fonction pour mettre à jour la valeur de "isOffline" lorsqu'il y a un changement d'état de connexion
      const handleOfflineStatusChange = () => {
        isOffline.value = !window.navigator.onLine;
      };
  
      // Ajouter un gestionnaire d'événement pour surveiller les changements d'état de connexion
      onMounted(() => {
        window.addEventListener("offline", handleOfflineStatusChange);
        window.addEventListener("online", handleOfflineStatusChange);
      });
  
      // Supprimer les gestionnaires d'événement lorsqu'on détruit le composant
      onUnmounted(() => {
        window.removeEventListener("offline", handleOfflineStatusChange);
        window.removeEventListener("online", handleOfflineStatusChange);
      });
  
      return { isOffline };
    },
  });
  </script>
  
  <style>
  /* Style du message d'alerte */
  .offline-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f44336;
    color: white;
    padding: 10px;
    text-align: center;
  }
  
  /* Style de l'icône */
  .offline-icon {
    margin-right: 5px;
  }
  
  /* Style du message */
  .offline-message {
    font-weight: bold;
  }
  
  </style>
  