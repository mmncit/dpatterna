<script>
  import { setLightCommands } from "./commands";

  let commands = {
    on: "on",
    off: "off",
    red0: "red/0",
    red1: "red/1",
    red2: "red/2",
    red3:"red/3",
  };

//light is off before clicking any button
//CommandButton=light scenerio after executing command
  let commandButton = "off";
  let src = `./images/light-receiver/${commands[commandButton]}.png`;

  function executeCommand(command) {
    commandButton = setLightCommands(command);
    src = `./images/light-receiver/${commands[commandButton]}.png`;
  }

</script>
<style>
  .btn-group button {
    padding: 10px 24px;
    cursor: pointer;
    width: 20%;
    display: block;
  }
  .btn-group button:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
  }
  /* Add a background color on hover */
  .btn-group button:hover {
    filter: brightness(85%);
  }
  .decrease-lum {
    background-color: #a9c1c9;
  }
  .red-light {
    background-color: #f44336;
  }
  .increase-lum {
    background-color: #8bb19b;
  }
  .on {
    background-color: #e7e7e7;
    color: black;
  }
  .off {
    background-color: #555555;
    color: white;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .portrait {
    height: 300px;
    width: 500px;
  }
</style>

<h1>Command buttons</h1>

<div class="btn-group">
  <button class="on" on:click={() => executeCommand('on')}>On</button>
  <button class="off"on:click={() => executeCommand('off')}>Off</button>

  <button class="increase-lum"on:click={() => executeCommand('increase')}>+</button>
  <button class="decrease-lum"on:click={() => executeCommand('decrease')}>-</button>

  <button class="red-light"on:click={() => executeCommand('redLight')}>Red</button>
</div>

<div class="portrait"><img {src} alt={src} /></div>
