<script setup>
import ChapterName from '../components/ChapterName.vue'
import ScoreZone from '../components/ScoreZone.vue'
import TextZone from '../components/TextZone.vue'
import AnswerZone from '../components/AnswerZone.vue'
import LevelZone from '../components/LevelZone.vue'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { writeUserData, readUserData } from '../firebase'

const auth = getAuth();
let currentUser
const photoUser = ref("")
const vides = ref(10)
let instructions = ref("")
const currentLevel = ref(1)

async function getData(userID){
  await readUserData(userID).then((result) => console.log(result.level))
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    getData(user.uid)
    currentUser = user;
    photoUser.value = currentUser.photoURL
    Swal.fire('Hi ' + currentUser.displayName + '! Welcome to the Star Wars Quest.')
  } else {
    window.location.href = '/';
  }
});

onMounted(() => {

})

</script>

<template>
  <main>
    <header>
      <div class="wrapper">
        <ChapterName msg="Ep.1: The search begins..." />
      </div>
    </header>

    <ScoreZone :vides="vides" :avatar="photoUser" />
    <TextZone :instructions="instructions"
      fons="https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg" />
    <AnswerZone />
    <LevelZone :level="currentLevel"/>
  </main>
</template>

<style scoped>
main {

  display: grid;
  grid-template-columns: auto 10rem 15rem;
  grid-template-rows: 150px auto 90px;
  padding: 0 2rem;
  height: 100%;
  width: 100%;
  place-items: center;

}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  place-items: center;
}

.logo {
  display: block;
  /* margin: 0 auto 2rem; */
}

header {
  display: flex;
  grid-area: 1 / 1 / 2 / 3;
  background-image: url("https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-6837786-55847789-au5s9o3uthaez-or.jpg");
  width: 100%;
  justify-content: center;
}


header .wrapper {
  place-items: center;
  flex-wrap: wrap;
}
</style>
