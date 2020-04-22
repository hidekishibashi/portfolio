<script>
import {Radar} from 'vue-chartjs';
import {mapGetters} from 'vuex';

// TODO:こいつ外だししたい
const colorList = [
  {
    category: 'front-end',
    color: 'rgba(255, 206, 86, 1)',
  },
  {
    category: 'back-end',
    color: 'rgba(87, 16, 131, 0.25)',
  },
  {
    category: 'devops',
    color: 'rgba(181, 26, 26, 0.25)',
  },
];

export default {
  name: 'Chart',
  extends: Radar,
  props: {
    category: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
        legend: {
          display: false,
        },
      },
    };
  },

  computed: {
    ...mapGetters({
      getCategoryInfo: 'getSkills',
    }),
  },

  watch: {
    category() {
      this.rendarSkillChart();
    },
  },

  mounted() {
    this.rendarSkillChart();
  },

  methods: {
    rendarSkillChart() {
      this.setChartInfo();
      this.renderChart(this.data, this.options);
    },

    setChartInfo() {
      const chartInfo = this.getCategoryInfo(this.category);
      // labels
      this.data.labels = chartInfo.skills.map((skill) => skill.name);
      // datasets[0].data
      this.data.datasets[0].data = chartInfo.skills.map((skill) => skill.score);
      // color
      const color = colorList.find((chartColor) => {
        return chartColor.category === this.category;
      }).color;
      this.data.datasets[0].backgroundColor = [color];
      this.data.datasets[0].borderColor = [color];
    },

    getChartInfo() {
      this.getCategoryInfo(this.category);
    },
  },
};
</script>
