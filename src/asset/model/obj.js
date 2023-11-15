export default class obj {
    constructor(src, title) {
        this.src = src;
        this.title = title;
      }
      getCardContent() {
        return { src: this.src, title: this.title };
      }
}