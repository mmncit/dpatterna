<script>
  const fileReader = new FileReader();
  const image = new Image();

  let canvas;

  function onChange({ target }) {
    const fileName = target.files[0];
    fileReader.readAsDataURL(fileName);
  }
  fileReader.addEventListener("load", ({ target }) => {
    const base64 = target.result;
    image.src = base64;
  });
  image.addEventListener("load", (_e) => {
    document.getElementById("preview").appendChild(image);
  });

</script>

<style>
  #input {
    width: 0px;
    height: 0px;
    overflow: hidden;
  }

  #input + label {
    display: inline-block;
    background-color: #777;
    font-family: sans-serif;
    padding: 5px;
    font-size: 2em;
    color: #f3f3f3;
  }
  #input:focus + label {
    outline: 5px solid teal;
  }

</style>

<head>
  <title>webworker</title>
</head>
<body>
  <input
    type="file"
    accept="image/*"
    name="input"
    id="input"
    on:change={onChange} />
  <label for="input">Choose file</label>
  <div id="preview"><canvas width="10" height="10" bind:this={canvas} /></div>
</body>
