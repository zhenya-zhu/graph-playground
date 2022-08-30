<template>
  <div class="about">
    <div id="graph-container" ref="graphContainer"></div>
  </div>
</template>

<style lang="stylus" scoped></style>

<script>
import graphData from '../mock/graph.json';
import G6 from '../../node_modules/@antv/g6/es/index.js';
export default {
  name: 'CPUGraph',
  components: {},
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      graph: null,
    };
  },
  mounted: function () {
    this.buildGraph();
  },
  methods: {
    buildGraph() {
      console.log(`buildGraph:`);
      console.log(this.config);
      if (this.graph) {
        this.graph.destroy();
        this.graph = null;
      }
      const _this = this;
      const { width, height } = _this.getGraphSize();

      const graph = new G6.Graph({
        ...this.config,
        width: 2000,
        height: 1000,
      });
      this.graph = graph;
      console.log(graph);
      console.log(graphData);
      graph.edge((edge) => {
        return {
          label: '' + edge.weight.toFixed(2),
        };
      });
      graph.data(graphData);
      graph.render();
    },
    getGraphSize() {
      console.log(this.graphContainerDom);
      return {
        width: parseInt(getComputedStyle(this.graphContainerDom).width),
        height: parseInt(getComputedStyle(this.graphContainerDom).height),
      };
    },
  },
  computed: {
    graphContainerDom() {
      return this.$refs.graphContainer;
    },
  },
};
</script>
