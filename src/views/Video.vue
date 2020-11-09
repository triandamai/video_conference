<template>
  <div>
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Cexup
        </h2>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
      <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
        <!-- Heroicon name: location-marker -->
        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        Jakarta,Indonesia
      </div>
    </div>
  </div>

    <div id="video-list" ref="video-list"></div>
      <audio id="audio" ref="audio"></audio>
      <router-view/>
</div>
    </div>

</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name:'Video',
    setup(){

    }
})

</script>

<style>

</style>