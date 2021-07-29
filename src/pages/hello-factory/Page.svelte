<script>
  import { getIcecream } from "./prouct-provider";

  let selected = "Choco Blast";
  let menu = ["Choco Blast", "Sweety Strawberry", "Buttery Butterscotch"];

  $: icecream = getIcecream(selected);

  $: src = `./images/icecream-factory/${icecream}.png`;

</script>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .portrait {
    height: 300px;
    width: 500px;
  }

</style>

<h1>Icecream Factories</h1>

<h2>Flavours</h2>

<select bind:value={selected}>
  {#each menu as flavour}
    <option value={flavour}>{flavour}</option>
  {/each}
</select>
<p>You ordered {selected} icecream</p>

<div class="portrait"><img {src} alt={selected} /></div>
