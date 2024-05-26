import { Color3, Mesh, MeshBuilder, StandardMaterial, Vector3 } from "@babylonjs/core";

export abstract class Figure{
     box1 = MeshBuilder.CreatePlane("box1",{ width:0.9, height: 0.9 });
     box2 = MeshBuilder.CreatePlane("box2",{ width:0.9, height: 0.9 });
      box3 = MeshBuilder.CreatePlane("box3",{ width:0.9, height: 0.9 }); 
      box4 = MeshBuilder.CreatePlane("box4",{ width:0.9, height: 0.9 }); 

      constructor(){
        const grid = new StandardMaterial("grid");
        grid.diffuseColor = Color3.Blue();
        this.box1.material = grid;
        this.box2.material = grid;
        this.box3.material = grid;
        this.box4.material = grid;
   
      }
    
      moveDownFigure(){

        if(this.box1.position.y > 0 
          && this.box2.position.y > 0 
          && this.box3.position.y > 0 
          && this.box4.position.y > 0 ){
      
          this.box1.position.y -= 1;
          this.box2.position.y -= 1;
          this. box3.position.y -= 1;
          this.box4.position.y -= 1; 

          }
 
    }
      moveLeftFigure(){
      
        if(this.box1.position.x >= 0 && this.box1.position.x < 9
        && this.box2.position.x >= 0 && this.box2.position.x < 9
        && this.box3.position.x >= 0 && this.box3.position.x < 9
        && this.box4.position.x >= 0 && this.box4.position.x < 9
        &&  this.box1.position.y >= 1 
          && this.box2.position.y >= 1 
          && this.box3.position.y >= 1 
          && this.box4.position.y >= 1){

          this.box1.position.x += 1;
          this.box2.position.x += 1;
          this.box3.position.x += 1;
          this.box4.position.x += 1; 
          
         }  

  }
      moveRightFigure(){

         
        if(this.box1.position.x > 0 && this.box1.position.x <= 9
          && this.box2.position.x > 0 && this.box2.position.x <= 9
          && this.box3.position.x > 0 && this.box3.position.x <= 9
          && this.box4.position.x > 0 && this.box4.position.x <= 9
          &&  this.box1.position.y >= 1 
          && this.box2.position.y >= 1 
          && this.box3.position.y >= 1 
          && this.box4.position.y >= 1){

          this.box1.position.x -= 1;
          this.box2.position.x -= 1;
          this.box3.position.x -= 1;
          this.box4.position.x -= 1; 
          }
          
}

          abstract rotation(num:Number):void;
}