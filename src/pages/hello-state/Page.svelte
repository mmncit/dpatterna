<script>
  import {Gate, getState } from './state-provider'
  let gate= new Gate()
  const refImg = `./images/gate-state/gate_state.png`;
  let selectedAction = "enter";
  let action = ["enter", "payOk", "payFailed"];

  $: gate = getState (selectedAction, gate)
  $: state = gate.getState();
  $: src = `./images/gate-state/${state}.png`;

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

</style>

<h1>Gate State</h1>

<h2>State diagram</h2>

<table>
  <tr>
    <th>State vs Action</th>
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

<div class="portrait"><img src={refImg} alt={refImg} /></div>

<h2>Actions</h2>

<select bind:value={selectedAction}>
  {#each action as message}
    <option value={message}>{message}</option>
  {/each}
</select>

<p>Current action: {selectedAction}. Resulted status: {state}</p>

<div class="portrait"><img {src} alt={state} /></div>
