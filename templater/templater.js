export default class Templater {
  constructor(inputJSON) {
    this.JSON = inputJSON;
    this.HTML = this.jsonToHtml();
  }

  jsonToHtml() {
    return JSON.stringify(this.JSON);
  }
}