import { Mesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import { Figure } from "./Figure";

export class FigureFour extends Figure{
    
  

      constructor(){
        super();
    
        this.box1.position = new Vector3(4, 12, -1.01);
        this.box2.position = new Vector3(5,  12, -1.01);
        this.box3.position = new Vector3(4, 13, -1.01);
        this.box4.position = new Vector3(5, 13, -1.01);
      
      }

      
      rotation(num:Number): void {

  this.box1.position = new Vector3(this.box1.position.x, this.box1.position.y, -1.01);
  this.box2.position = new Vector3(this.box2.position.x, this.box2.position.y, -1.01);
  this.box3.position = new Vector3(this.box3.position.x, this.box3.position.y, -1.01);
  this.box4.position = new Vector3(this.box4.position.x, this.box4.position.y, -1.01);
  

      }
    

  }
   