<script setup>
defineProps({
   instructions: {
     type: String,
     required: true
   },
   fons: {
    type: String,
    required: true
   }
})
</script>

<template>
  <div class="content" :style="{ backgroundImage : 'url(' + fons + ')'}">
    <p id="textual">{{ instructions }}</p>
  </div>
</template>

<style scoped>
.content {
  font-family: 'Montserrat', sans-serif;
  font-size:1.4rem;
  grid-area: 2 / 1 / 3 / 3;
  width:100%;
  height: 100%;
  background-size: cover;
  padding: 10px;
}

#textual {
  background-color:rgba(255,255,255,0.2);
  color: black;
  font-weight: bolder;
}

@media (min-width: 1300px) {
}
</style>
