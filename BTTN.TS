

export class AppComponent  {
  ReadMore:boolean = true

  visible:boolean = false

  onclick()
  {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible
  }
}
