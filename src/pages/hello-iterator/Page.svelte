<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { produceData } from "./weather-provider";
  /*
  var data = [
    { cityName: "dhaka", temperature: 20.3 },
    { cityName: "chittagong", temperature: 24.3 },
    { cityName: "rajshahi", temperature: 28.3 },
    { cityName: "khulna", temperature: 25.3 },
  ];
  */

  let el;

  onMount(async () => {
    const data = await produceData();
    console.log({ data });

    d3.select(el)
      .selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .style("width", function (d) {
        return d.temperature + window.innerWidth / 4 + "px";
      })
      .text(function (d) {
        return `${d.cityName} ${d.temperature.toFixed(2)} C`;
      });
  });

</script>

<style>
  .chart :global(div) {
    font: 10px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
  }

</style>

<h1>Weather today</h1>

<div bind:this={el} class="chart" />
