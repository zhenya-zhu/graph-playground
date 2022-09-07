<template>
    <div class="about">
      <h1>This is a graph rendered by CPU with worker threads</h1>
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
          layout: {
            gpuEnabled: false,
            workerEnabled: true,
          },
        },
      };
    },
    mounted: function () {},
    methods: {},
    computed: {},
  };
  </script>
  