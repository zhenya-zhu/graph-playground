<template>
  <div class="graph-root">
    <div id="graph-container" ref="graphContainer"></div>
    <div class="controller-container">
      <button @click="addNewNode('data()')">Add by data()</button>
      <button @click="addNewNode('changeData_with_varible')">
        Add by changeData() with normal varible
      </button>
      <button @click="addNewNode('changeData_with_this.data')">
        changeData() with this.data
      </button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.graph-root{
  display flex
  flex-direction: row

  #graph-container{
    box-sizing border-box
    box-shadow: 0px 7px 20px 1px #3a403a;
    border-radius 8px
  }

  .controller-container{

  }
}
</style>

<script>
const data = {
  nodes: [
    {
      id: '0',
      label: '0',
    },
    {
      id: '1',
      label: '1',
    },
    {
      id: '2',
      label: '2',
    },
    {
      id: '3',
      label: '3',
    },
    {
      id: '4',
      label: '4',
    },
    {
      id: '5',
      label: '5',
    },
    {
      id: '6',
      label: '6',
    },
    {
      id: '7',
      label: '7',
    },
    {
      id: '8',
      label: '8',
    },
    {
      id: '9',
      label: '9',
    },
    {
      id: '10',
      label: '10',
    },
    {
      id: '11',
      label: '11',
    },
    {
      id: '12',
      label: '12',
    },
    {
      id: '13',
      label: '13',
    },
    {
      id: '14',
      label: '14',
    },
    {
      id: '15',
      label: '15',
    },
    {
      id: '16',
      label: '16',
    },
    {
      id: '17',
      label: '17',
    },
    {
      id: '18',
      label: '18',
    },
    {
      id: '19',
      label: '19',
    },
    {
      id: '20',
      label: '20',
    },
    {
      id: '21',
      label: '21',
    },
    {
      id: '22',
      label: '22',
    },
    {
      id: '23',
      label: '23',
    },
    {
      id: '24',
      label: '24',
    },
    {
      id: '25',
      label: '25',
    },
    {
      id: '26',
      label: '26',
    },
    {
      id: '27',
      label: '27',
    },
    {
      id: '28',
      label: '28',
    },
    {
      id: '29',
      label: '29',
    },
    {
      id: '30',
      label: '30',
    },
    {
      id: '31',
      label: '31',
    },
    {
      id: '32',
      label: '32',
    },
    {
      id: '33',
      label: '33',
    },
  ],
  edges: [
    {
      source: '0',
      target: '1',
    },
    {
      source: '0',
      target: '2',
    },
    {
      source: '0',
      target: '3',
    },
    {
      source: '0',
      target: '4',
    },
    {
      source: '0',
      target: '5',
    },
    {
      source: '0',
      target: '7',
    },
    {
      source: '0',
      target: '8',
    },
    {
      source: '0',
      target: '9',
    },
    {
      source: '0',
      target: '10',
    },
    {
      source: '0',
      target: '11',
    },
    {
      source: '0',
      target: '13',
    },
    {
      source: '0',
      target: '14',
    },
    {
      source: '0',
      target: '15',
    },
    {
      source: '0',
      target: '16',
    },
    {
      source: '2',
      target: '3',
    },
    {
      source: '4',
      target: '5',
    },
    {
      source: '4',
      target: '6',
    },
    {
      source: '5',
      target: '6',
    },
    {
      source: '7',
      target: '13',
    },
    {
      source: '8',
      target: '14',
    },
    {
      source: '9',
      target: '10',
    },
    {
      source: '10',
      target: '22',
    },
    {
      source: '10',
      target: '14',
    },
    {
      source: '10',
      target: '12',
    },
    {
      source: '10',
      target: '24',
    },
    {
      source: '10',
      target: '21',
    },
    {
      source: '10',
      target: '20',
    },
    {
      source: '11',
      target: '24',
    },
    {
      source: '11',
      target: '22',
    },
    {
      source: '11',
      target: '14',
    },
    {
      source: '12',
      target: '13',
    },
    {
      source: '16',
      target: '17',
    },
    {
      source: '16',
      target: '18',
    },
    {
      source: '16',
      target: '21',
    },
    {
      source: '16',
      target: '22',
    },
    {
      source: '17',
      target: '18',
    },
    {
      source: '17',
      target: '20',
    },
    {
      source: '18',
      target: '19',
    },
    {
      source: '19',
      target: '20',
    },
    {
      source: '19',
      target: '33',
    },
    {
      source: '19',
      target: '22',
    },
    {
      source: '19',
      target: '23',
    },
    {
      source: '20',
      target: '21',
    },
    {
      source: '21',
      target: '22',
    },
    {
      source: '22',
      target: '24',
    },
    {
      source: '22',
      target: '25',
    },
    {
      source: '22',
      target: '26',
    },
    {
      source: '22',
      target: '23',
    },
    {
      source: '22',
      target: '28',
    },
    {
      source: '22',
      target: '30',
    },
    {
      source: '22',
      target: '31',
    },
    {
      source: '22',
      target: '32',
    },
    {
      source: '22',
      target: '33',
    },
    {
      source: '23',
      target: '28',
    },
    {
      source: '23',
      target: '27',
    },
    {
      source: '23',
      target: '29',
    },
    {
      source: '23',
      target: '30',
    },
    {
      source: '23',
      target: '31',
    },
    {
      source: '23',
      target: '33',
    },
    {
      source: '32',
      target: '33',
    },
  ],
};

const data2 = {
  nodes: [
    {
      id: 'b0',
      label: '0',
    },
    {
      id: 'b1',
      label: '1',
    },
    {
      id: 'b2',
      label: '2',
    },
    {
      id: 'b3',
      label: '3',
    },
    {
      id: 'b4',
      label: '4',
    },
    {
      id: 'b5',
      label: '5',
    },
  ],
  edges: [
    {
      id: 'be1',
      source: 'b0',
      target: 'b1',
    },
    {
      id: 'be2',
      source: 'b0',
      target: 'b2',
    },
    {
      id: 'be3',
      source: 'b0',
      target: 'b3',
    },
    {
      id: 'be4',
      source: 'b0',
      target: 'b4',
    },
    {
      id: 'be5',
      source: 'b0',
      target: 'b5',
    },
  ],
};
import graphData from '../mock/graph.json';
import G6 from '../../node_modules/@antv/g6/es/index.js';
import * as _ from 'lodash';
let graphInstance = null;
const baseConfig = {
  container: 'graph-container',
  width: 2000,
  height: 1000,
  // node layout method
  // animate: true,
  layout: {
    type: 'gForce',
    // edge distance,
    // linkDistance: (e) => {
    //   return (1 - e.weight.toFixed(2)) * 100;
    //   // return 50;
    //   // return e.value * +_this.linkDistance
    // },
    // // edge strength is greater, the edge is shorter, affect one edge
    // // 20 ～ 200
    // edgeStrength: (e) => {
    //   // e.value in range [0,1], we want when value = 0, edgeStrength = 0
    //   return 200 + (e.weight.toFixed(2) - 0.5) * 400;
    // },
    // collideStrength: (e) => e.value * +_this.collideStrength,
    nodeSize: 3,
  },
  // graph behaviors
  modes: {
    default: ['drag-canvas', 'zoom-canvas', 'activate-relations', 'drag-node'],
  },
};

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
      graphData: null,
    };
  },
  mounted: function () {
    this.buildGraph();
  },
  methods: {
    // 怎么把graph分成两个？？
    buildGraph() {
      console.log(`buildGraph:`);
      console.log(this.config);
      if (this.graph) {
        this.graph.destroy();
        this.graph = null;
      }
      const _this = this;
      const { width, height } = _this.getGraphSize();
      const config = _.merge(baseConfig, this.config);

      const graph = new G6.Graph(config);
      graphInstance = graph;
      console.log(graph);
      console.log(graphData);
      graph.edge((edge) => {
        return {
          label: '' + edge.weight.toFixed(2),
        };
      });
      this.graphData = _.cloneDeep(graphData);
      // this.graphData = _.cloneDeep(data);
      graph.data(this.graphData);
      graph.render();
    },
    getGraphSize() {
      console.log(this.graphContainerDom);
      return {
        width: parseInt(getComputedStyle(this.graphContainerDom).width),
        height: parseInt(getComputedStyle(this.graphContainerDom).height),
      };
    },
    addNewNode(way) {
      function randomId() {
        return parseInt(Math.random() * 100000000);
      }
      function genDeltaGraph(sourceNode) {
        const diffGraph = {
          nodes: [],
          edges: [],
        };
        const nodes = [];
        for (let i = 0; i < 10; i++) {
          const node = {
            id: '' + randomId(),
            level: 2,
          };
          const edge = {
            source: sourceNode.id,
            target: node.id,
            weight: Math.random(),
          };
          diffGraph.nodes.push(node);
          diffGraph.edges.push(edge);
        }
        return diffGraph;
      }

      function verifyGraph(graph) {
        const { edges, nodes } = graph;
        const nodeIdSet = new Set(nodes.map((node) => node.id));
        if (nodeIdSet.size !== nodes.length) {
          throw new Error(
            `Graph has duplicated nodes, nodes.length is ${nodes.length} but nodeIdSet.length is ${nodeIdSet.size}`
          );
        }
        const nodeIdInEdge = [];
        for (let edge of edges) {
          if (!nodeIdSet.has(edge.source)) {
            throw new Error(`Missing edge.source in node ${edge.source}`);
          }
          if (!nodeIdSet.has(edge.target)) {
            throw new Error(`Missing edge.target in node ${edge.target}`);
          }
        }
      }

      const parentNode = this.graphData.nodes[this.graphData.nodes.length - 1];
      const deltaGraph = genDeltaGraph(parentNode);

      graphData.nodes = [].concat(graphData.nodes, deltaGraph.nodes);
      graphData.edges = [].concat(graphData.edges, deltaGraph.edges);
      console.log(`changed the graphData`);
      console.log(graphData);
      const clonedGraph = _.cloneDeep(graphData);
      verifyGraph(clonedGraph);
      if (way === 'changeData_with_this.data') {
        this.graph.changeData(graphData);
      } else if (way === 'changeData_with_varible') {
        console.log(`graphInstance`);
        console.log(graphInstance.save());
        const oldGraphData = graphInstance.save();
        const _graphData = {};
        _graphData.nodes = [].concat(oldGraphData.nodes, deltaGraph.nodes);
        _graphData.edges = [].concat(oldGraphData.edges, deltaGraph.edges);

        graphInstance.changeData(_graphData);
      } else if (way === 'data()') {
        this.graph.data(clonedGraph);
        this.graph.render();
      }
    },
  },
  computed: {
    graphContainerDom() {
      return this.$refs.graphContainer;
    },
  },
};
</script>
