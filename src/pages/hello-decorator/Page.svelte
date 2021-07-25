<script>
  import {
    htmlString,
    italicHtmlString,
    boldItalicHtmlString,
    strikeBoldItalicHtmlString,
  } from "./decorator-provider";

</script>

<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }

</style>

<p>{htmlString.getHTMLString()}</p>
<p>
  {@html italicHtmlString.getHTMLString()}
</p>
<p>
  {@html boldItalicHtmlString.getHTMLString()}
</p>
<p>
  {@html strikeBoldItalicHtmlString.getHTMLString()}
</p>
