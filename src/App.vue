<template lang='pug'>
  #app
    button(@click="setChartCategory('front-end')")
      | front
    button(@click="setChartCategory('back-end')")
      | back
    button(@click="setChartCategory('devops')")
      | devops
    Chart(
      v-if="loaded"
      :category="this.chartCategory"
    )
</template>

<script>
import Chart from './components/Chart.vue';
import {mapState, mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    Chart,
  },

  data: function() {
    return {
      chartCategory: 'front-end',
    };
  },

  computed: {
    ...mapState(['loaded']),
  },

  created() {
    this.updateSkillCategories();
  },

  methods: {
    ...mapActions(['updateSkillCategories']),

    setChartCategory(category) {
      this.chartCategory = category;
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
