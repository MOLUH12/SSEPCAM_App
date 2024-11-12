<template>
    <div id="sankeyDiagram" class="w-full h-96"></div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import * as d3 from 'd3';
  import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
  
  export default {
    props: ['data'],
    setup(props) {
      onMounted(() => {
        const width = 700;
        const height = 400;
  
        const svg = d3
          .select('#sankeyDiagram')
          .append('svg')
          .attr('width', width)
          .attr('height', height);
  
        const { nodes, links } = sankey({
          nodes: [
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
            { name: 'D' },
          ],
          links: [
            { source: 0, target: 1, value: 10 },
            { source: 1, target: 2, value: 20 },
            { source: 2, target: 3, value: 30 },
          ],
        });
  
        svg
          .append('g')
          .selectAll('.link')
          .data(links)
          .enter()
          .append('path')
          .attr('class', 'link')
          .attr('d', sankeyLinkHorizontal())
          .style('stroke-width', (d) => Math.max(1, d.width));
  
        svg
          .append('g')
          .selectAll('.node')
          .data(nodes)
          .enter()
          .append('rect')
          .attr('class', 'node')
          .attr('x', (d) => d.x0)
          .attr('y', (d) => d.y0)
          .attr('height', (d) => d.y1 - d.y0)
          .attr('width', (d) => d.x1 - d.x0)
          .style('fill', (d) => d.color);
      });
    },
  };
  </script>
  
  <style>
  .node {
    fill: #69b3a2;
  }
  
  .link {
    fill: none;
    stroke-opacity: 0.5;
    stroke: #b3b3b3;
  }
  </style>
  