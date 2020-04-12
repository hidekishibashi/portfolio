<template lang='pug'>
  #app
    img(alt='Vue logo', src='./assets/logo.png')
    HelloWorld(msg='Welcome to Your Vue.js App')
</template>

<script>
import HelloWorld from './components/HelloWorld';
import admin from 'firebase-admin';
// import axios from 'axios';
import {functions} from './plugins/firebase';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },

  data() {
    return {
      info: null,
    };
  },

  created() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://seattle-academy-demo.firebaseio.com',
    });

    let info;
    // this.$axios
    //     .get('http://localhost:5000/seattle-academy-demo/us-central1/app')
    //     .then((response) => (info = response));

    const sections = functions.httpsCallable('app');
    sections().then((response) => {
      info = response;
    });
    console.log(info);
    debugger;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
