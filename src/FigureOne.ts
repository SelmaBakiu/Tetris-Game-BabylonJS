import { Mesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import { Figure } from "./Figure";

export class FigureOne extends Figure{
  

      constructor(){
        super();
    
        this.box1.position = new Vector3(4, 14, -1.01);
 
        this.box2.position = new Vector3(4, 13, -1.01);

        this.box3.position = new Vector3(4, 12, -1.01);

        this.box4.position = new Vector3(4, 11, -1.01);
       
      }

rotation(num:Number){
  switch (num) {

    case 1:
 
   if(this.box1.position.x == 7){
  this.box1.position = new Vector3(this.box1.position.x - 1, this.box1.position.y, -1.01);        
  }
  if(this.box1.position.x == 8){
    this.box1.position = new Vector3(this.box1.position.x - 2, this.box1.position.y, -1.01);      
    }
    if(this.box1.position.x == 9){
      this.box1.position = new Vector3(this.box1.position.x - 3, this.box1.position.y, -1.01);      
      }
  this.box2.position = new Vector3(this.box1.position.x + 1, this.box1.position.y, -1.01);
  this.box3.position = new Vector3(this.box1.position.x + 2, this.box1.position.y, -1.01);
  this.box4.position = new Vector3(this.box1.position.x + 3, this.box1.position.y, -1.01);
  
    break;


    case 2:    
    
      if((this.box1.position.y <= 2)){
        break;
  }
  this.box1.position = new Vector3(this.box1.position.x, this.box1.position.y , -1.01); 
  this.box2.position = new Vector3(this.box1.position.x, this.box1.position.y - 1, -1.01);
  this.box3.position = new Vector3(this.box1.position.x, this.box1.position.y - 2, -1.01);
  this.box4.position = new Vector3(this.box1.position.x, this.box1.position.y - 3, -1.01);
    break;


    case 3:  
    
 if(this.box1.position.x == 7){
this.box1.position = new Vector3(this.box1.position.x - 1, this.box1.position.y, -1.01);        
}
if(this.box1.position.x == 8){
  this.box1.position = new Vector3(this.box1.position.x - 2, this.box1.position.y, -1.01);      
  }
  if(this.box1.position.x == 9){
    this.box1.position = new Vector3(this.box1.position.x - 3, this.box1.position.y, -1.01);      
    }
this.box2.position = new Vector3(this.box1.position.x + 1, this.box1.position.y, -1.01);
this.box3.position = new Vector3(this.box1.position.x + 2, this.box1.position.y, -1.01);
this.box4.position = new Vector3(this.box1.position.x + 3, this.box1.position.y, -1.01);

  break;
  
      case 4:

          if((this.box1.position.y <= 2)){  break; }

  this.box1.position = new Vector3(this.box1.position.x, this.box1.position.y , -1.01);     
  this.box2.position = new Vector3(this.box1.position.x, this.box1.position.y - 1, -1.01);
  this.box3.position = new Vector3(this.box1.position.x, this.box1.position.y - 2, -1.01);
  this.box4.position = new Vector3(this.box1.position.x, this.box1.position.y - 3, -1.01);
       
      break;

}



}
}
   