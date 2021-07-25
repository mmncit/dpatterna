export const HTML_STRING = "Hello, Decorator!";
export interface HtmlStyle {
  getHTMLString(): string;
}

// concrete component
export class HtmlString implements HtmlStyle {
  public getHTMLString() {
    return HTML_STRING;
  }
}

// decorator
export abstract class StyleDecorator implements HtmlStyle {
  private decoratorStyle: HtmlStyle;
  constructor(decoratorStyle: HtmlStyle) {
    this.decoratorStyle = decoratorStyle;
  }
  getHTMLString(): string {
    return this.decoratorStyle.getHTMLString();
  }
}

// concrete decorators
export class BoldStyle extends StyleDecorator {
  constructor(decoratorStyle: HtmlStyle) {
    super(decoratorStyle);
  }
  getHTMLString(): string {
    return `<b>${super.getHTMLString()}</b>`;
  }
}
export class StrikeStyle extends StyleDecorator {
  constructor(decoratorStyle: HtmlStyle) {
    super(decoratorStyle);
  }
  getHTMLString(): string {
    return `<strike>${super.getHTMLString()}</strike>`;
  }
}
export class ItalicStyle extends StyleDecorator {
  constructor(decoratorStyle: HtmlStyle) {
    super(decoratorStyle);
  }
  getHTMLString(): string {
    return `<i>${super.getHTMLString()}</i>`;
  }
}
