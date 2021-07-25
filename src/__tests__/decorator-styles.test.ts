import {
  BoldStyle,
  HtmlString,
  HTML_STRING,
  ItalicStyle,
  StrikeStyle,
} from "patterns/decorator/decorator-styles";

describe("style decorator", () => {
  test("bold decorator should set bold style to html string", () => {
    let htmlString = new HtmlString();
    htmlString = new BoldStyle(htmlString);
    expect(htmlString.getHTMLString()).toEqual(`<b>${HTML_STRING}</b>`);
  });
  test("italic decorator should set italic style to html string", () => {
    let htmlString = new HtmlString();
    htmlString = new ItalicStyle(htmlString);
    expect(htmlString.getHTMLString()).toEqual(`<i>${HTML_STRING}</i>`);
  });
  test("italic decorator followed by bold and strike should update nested styles to html string", () => {
    let htmlString = new HtmlString();
    htmlString = new StrikeStyle(htmlString);
    htmlString = new BoldStyle(htmlString);
    htmlString = new ItalicStyle(htmlString);
    expect(htmlString.getHTMLString()).toEqual(
      `<i><b><strike>${HTML_STRING}</strike></b></i>`
    );
  });
});
