<template>
  <div class="about">
    <h1>This is an graph rendered by CPU</h1>
    <Graph :config="graphConfig" />
  </div>
</template>

<style lang="stylus" scoped></style>

<script>
import graphData from '../mock/graph.json';
import Graph from '../components/Graph.vue';
export default {
  name: 'CPUGraph',
  components: {
    Graph,
  },
  props: [],
  data: function () {
    return {
      graphConfig: {
        container: 'graph-container',
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
          gpuEnabled: false,
          workerEnabled: false,
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
      },
    };
  },
  mounted: function () {},
  methods: {},
  computed: {},
};
</script>
