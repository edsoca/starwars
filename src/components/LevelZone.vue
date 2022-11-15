<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    level: {
      type: Number,
      required: true
    }
})

const baseColor = ref(parseInt('0x00FF00',16))

const changeColor = function () {
  const divies = document.querySelectorAll('.content div');
  
  for(let i=0; i<divies.length; i++){
    divies[i].style.backgroundColor = '#'+(baseColor.value + divies[i].getAttribute('id') * 0x190000 - divies[i].getAttribute('id') * 0x001900).toString(16);
  };
}

onMounted(function () {
  changeColor()
  window.setInterval(BlinkIt, 500);
    var opacity = 1;
    let actual = document.getElementById(props.level);

    let divies = document.querySelectorAll('.content div');

    for (let i=0; i<divies.length; i++){
      divies[i].style.opacity = 0.3;
    }

    while (actual.previousElementSibling) {
        actual.previousElementSibling.style.opacity = opacity;
        actual = actual.previousElementSibling;
    }

    function BlinkIt() {
        var blink = document.getElementById(props.level);
        opacity = (opacity == 1) ? 0.3 : 1;
        blink.style.opacity = opacity;
    }
})

</script>

<template>
  <div class="content">
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
    <div id="5"></div>
    <div id="6"></div>
    <div id="7"></div>
    <div id="8"></div>
    <div id="9"></div>
    <div id="10"></div>
  </div>
</template>

<style scoped>
.content {
  grid-area: 3 / 1 / 4 / 4;
  display: flex;
  gap: 0.5vw;

}

.content div {
  display: inline;
  width: 8vw;
  height: 25px;
}

@media (min-width: 1024px) {}
</style>
