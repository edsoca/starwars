<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title">
    <h1>Star Wars quest</h1>
    <h3 class="green">{{ msg }}</h3>
  </div>
</template>

<style scoped>

.title {
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 3.8rem;
  font-family:"Star Jedi";
  -webkit-text-stroke: 2px yellow;
  line-height: 3.8rem;
}

h3 {
  font-size: 2rem;
  font-family:"Star Jedi";
  color: white;
  -webkit-text-stroke: 1px black;
}

@media (min-width: 1024px) {
}
</style>
