export default class Templater {
  constructor(inputJSON) {
    this.JSON = Object.freeze(inputJSON);
    this.HTML = this.jsonToHtml();
  }

  jsonToHtml() {
    return this.handleThisNode(this.JSON);
  }

  handleThisNode(node) {
    return `<div class=${node.block}>${
      this.contentHandler(node.content)
    }</div>`;
  }

  contentHandler(content) {
    if (Array.isArray(content)) {
      return content
        .map(element => this.handleThisNode(element))
        .reduce((accumulator, currentValue) => accumulator + currentValue);
    } else if (typeof content === 'object') {
      return this.handleThisNode(content);
    } else if (typeof content === 'string') {
      return content;
    } else {
      return '';
    }
  }
}