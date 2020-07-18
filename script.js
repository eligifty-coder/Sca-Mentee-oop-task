let shape = {
   type: '3 sided shape',
   getType(){
      console.log('Triangle')
      // console.log(this)
   }
}
function Triangle(side1,side2,side3){
   this.firstLength= side1,
   this.secondLength = side2,
   this.thirdlength = side3
}
let myTriangle = new Triangle(1,2,3)
Object.setPrototypeOf(Triangle.prototype,shape);
Triangle.prototype.type ='triangle'

Triangle.prototype.getperimeter = function(){
   console.log(this.firstLength + this.secondLength + this.thirdlength)
}
// testing code
console.log(myTriangle.constructor===Triangle);
console.log(shape.isPrototypeOf(myTriangle));
myTriangle.getType()
myTriangle.getperimeter()
for(props in myTriangle){
   if(myTriangle.hasOwnProperty(props)){
      console.log(props)
   }
}