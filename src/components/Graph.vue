<template>
  <div class="about">
    <div id="graph-container" ref="graphContainer"></div>
  </div>
</template>

<style lang="stylus" scoped></style>

<script>
import graphData from '../mock/graph.json';
import G6 from '../../node_modules/@antv/g6/es/index.js';
import * as _ from 'lodash'
const baseConfig = {
        container: 'graph-container',
        width: 2000,
        height: 1000,
        // node layout method
        layout: {
          type: 'gForce',
          // edge distance,
          linkDistance: (e) => {
            return (1 - e.weight.toFixed(2)) * 100;
            // return 50;
            // return e.value * +_this.linkDistance
          },
          // edge strength is greater, the edge is shorter, affect one edge
          // 20 ～ 200
          edgeStrength: (e) => {
            // e.value in range [0,1], we want when value = 0, edgeStrength = 0
            return 200 + (e.weight.toFixed(2) - 0.5) * 400;
          },
          // collideStrength: (e) => e.value * +_this.collideStrength,
          nodeSize: 3,
        },
        // graph behaviors
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            'activate-relations',
            'drag-node',
          ],
        },
      }

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
      const config = _.merge(baseConfig, this.config)

      const graph = new G6.Graph(config);
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
