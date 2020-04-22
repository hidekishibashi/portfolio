<template lang='pug'>
  #app
    img(alt='Vue logo', src='./assets/logo.png')
    HelloWorld(msg='This is develop branch')
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },

  data: function() {
    return {
      category: 'front-end',
    };
  },

  computed: {
    ...mapGetters({
      get: 'getSkills',
    }),
  },

  created() {
    this.updateSkillCategories();
  },

  methods: {
    ...mapActions(['updateSkillCategories']),

    getSkill() {
      this.get(this.category);
    },
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
