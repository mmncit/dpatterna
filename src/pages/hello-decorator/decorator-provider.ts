import {
  BoldStyle,
  HtmlString,
  ItalicStyle,
  StrikeStyle,
} from "patterns/decorator/decorator-styles";

export const htmlString = new HtmlString();

export const italicHtmlString = new ItalicStyle(htmlString);

export const boldItalicHtmlString = new BoldStyle(italicHtmlString);

export const strikeBoldItalicHtmlString = new StrikeStyle(boldItalicHtmlString);
