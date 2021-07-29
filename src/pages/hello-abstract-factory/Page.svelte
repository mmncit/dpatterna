<script>
  import { getIcecream } from "./prouct-provider";

  let selectedMenu = "Choco Blast";
  let selectedContainer = "Stick";
  let container = ["Stick", "Cup", "Cone"];
  let menu = ["Choco Blast", "Sweety Strawberry", "Buttery Butterscotch"];

  $: icecream = getIcecream(selectedMenu, selectedContainer);

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

<h1>Icecream Abstract Factory</h1>

<h2>Flavours</h2>

<select bind:value={selectedMenu}>
  {#each menu as flavour}
    <option value={flavour}>{flavour}</option>
  {/each}
</select>

<h2>How you wanna hold your icecream?</h2>
<select bind:value={selectedContainer}>
  {#each container as holder}
    <option value={holder}>{holder}</option>
  {/each}
</select>

<p>You ordered {selectedMenu} icecream on {selectedContainer}</p>

<div class="portrait"><img {src} alt={selectedMenu} /></div>
