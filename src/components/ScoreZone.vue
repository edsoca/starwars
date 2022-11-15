<script setup>

import { getAuth, signOut } from 'firebase/auth'

const logout = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log('Log out successful');
  }).catch((error) => {
    console.log(error);
  });
}

defineProps({
  vides: {
    type: Number,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="user-info">
    <img src="../assets/img/profile.png">
    <div class="info">
      <div class="avatar" :style="`background-image: url(${avatar});`"></div>
      <div class="vides">{{ vides }}</div>
    </div>
    <div class="button ice" v-on:click='logout' style="--my-text: 'exit';">exit</div>
  </div>
</template>

<style scoped>
.user-info {
  /* position:absolute; */
  grid-area: 1 / 3 / 2 / 4;
  display: inline-flex;
  flex-direction: column;
  place-items: center;
  margin-top: 47px;
  /* background-color: rgba(255,255,255,0.2); */
}

.user-info img {
  width: 17rem;
}

.info {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1.5em;
  position: absolute;
  top: 43px;
}

.vides {
  background-image: url('../assets/img/lifes.png');
  background-size: cover;
  text-align: center;
  font-size: 1.7em;
  color: white;
  padding-top: 0.4em;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  width: 2.2em;
  height: 100%;
}

.avatar {
  background-size: cover;
  background-color: #ddd;
  height: 3.7em;
  width: 3.7em;
  border: 6px solid #eee;
  border-radius: 100%;
}

.ice {
  bottom: 47px;
}
</style>
