
class Signal{
  
    constructor(x, y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

    //make the Circles appear on canvas
    appear()
    {
      fill(this.color);
      circle(this.x, this.y, 100);
    }
}