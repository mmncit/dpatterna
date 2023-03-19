<script>
  import { getState } from "./state-provider";

  let selectedAction = "enter";
  let action = ["enter", "payOk", "payFailed"];

  $: state = getState(selectedAction);

  $: src = `${process.env.PUBLIC_URL}/images/gate-state/${state}.png`;

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
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
  }
  .diagonalCross {
  background: linear-gradient(to top right, #fff calc(50% - 1px), black , #fff calc(50% + 1px) )
}

</style>

<h1>Gate State</h1>

<h2>State diagram</h2>

<table>
  <tr>
    <th class="diagonalCross">State Action</th>
    <th>enter</th>
    <th>payOk</th>
    <th>payFailed</th>
  </tr>
  <tr>
    <td>closed</td>
    <td>closed</td>
    <td>open</td>
    <td>closed</td>
  </tr>
  <tr>
    <td>open</td>
    <td>closed</td>
    <td>open</td>
    <td>open</td>
  </tr>
</table>

<h2>Actions</h2>

<select bind:value={selectedAction}>
  {#each action as message}
    <option value={message}>{message}</option>
  {/each}
</select>

<p>Current action: {selectedAction}. Resulted status: {state}</p>

<div class="portrait"><img {src} alt={state} /></div>
