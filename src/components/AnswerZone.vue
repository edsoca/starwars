<script setup>
defineProps({
  //  instructions: {
  //    type: String,
  //    required: true
  //  }
})
</script>

<template>
  <div class="form">
    <input type="text">
    <div class="button ice" style="--my-text:'send';">send</div>
  </div>
</template>

<style scoped>
.form {
  grid-area: 2 / 3 / 3 / 4;
  display:flex;
  justify-content: center;
  flex-direction: column;
  place-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size:1.5em;
  background-color:rgba(255,255,255,0.5);
  text-align: center;
}

.form .ice{
  bottom:-30px;
  margin: 0 auto;
}

.form input{
  border-right: none;
  border-top: none;
  border-left: none;
  background-color:transparent;
  outline: none;
  color: black;
  caret-color: green;
  font-size: 1rem;
  font-family: 'Montserrat', arial;
  text-align: center;
  height: 2.5em;
  margin-bottom:-39px;
}



@media (min-width: 1300px) {
  
}
</style>
