<script>
import { signInWithPopup, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { writeUserData } from '../firebase'

export default {
  methods: {
    login: () => {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          signInWithPopup(auth, provider)
            .then((result) => {
              console.log(result.user)

              writeUserData(result.user.uid, result.user.displayName, result.user.email, result.user.photoURL, true)
 

            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;

              // ...
            });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });

    }
  }
}

</script>


<template>
  <div class="home">
    <h1>Star Wars quest</h1>
    <h3> Main title here...</h3>
    <div class="button ice" @click="login" style="--my-text:'enter';">enter</div>
  </div>
</template>

<style>
.home {
  min-height: 100%;
  width: 100%;
  place-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5em;
}

h1 {
  font-weight: 500;
  font-size: 5rem;
  font-family: "Star Jedi", arial;
  -webkit-text-stroke: 2px yellow;
  line-height: 5rem;
}

h3 {
  font-size: 2rem;
  font-family: "Star Jedi", arial;
  color: white;
  -webkit-text-stroke: 1px black;
}
</style>
