import {
  MeshBuilder,
  Texture,
  StandardMaterial,
  Color3,
  Engine,
  SceneLoader,
  TouchCamera,
  SpotLight,
  Mesh,
  DirectionalLight,
  KeyboardEventTypes,
  Material,
  FreeCamera,
} from "@babylonjs/core";
import{FigureOne }from "./FigureOne";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import "@babylonjs/loaders";
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { FigureTwo } from "./FigureTwo";
import { FigureThree } from "./FigureThree";
import { FigureFour } from "./FigureFour";
import { Border } from "./Types";
import { Figure } from "./Figure";

export class BabylonScene {
  engine: Engine;
  scene: Scene| undefined;
  background: Mesh | null;
  cam: TouchCamera | undefined | null;
  containerArray: Boolean[][]; 
 
  constructor(readonly canvasElement: HTMLCanvasElement) {
    this.engine = new Engine(canvasElement, true, { deterministicLockstep: true, lockstepMaxSteps: 4 });
    // this.scene = null;
    this.background = null;
    this.cam = null;
    this.containerArray = [[],[],[],[],[],[],[],[],[],[]];
    window.addEventListener("resize", () => {
      this.engine.resize();
    });
  }

  async run() {
    // entry point
    await this.setupScene();
    this.engine.runRenderLoop(() => {
      if (!this.scene) {
        // scene is not yet set up
        console.log('error, scene is not set up')
        return;
      }
      this.scene.render();
    });
  }

  setupScene = async () => { 
  
    this.engine.adaptToDeviceRatio = true;
    this.scene = new Scene(this.engine);
     this.setupEnvironment(); // setup bacground and chair in the scene
     this.setupLights(); // set up light positioning and corresponding propperties
    this.setupCamera();
    this.setupContainer();
    this.setupFigure();
    this.setupWindow();
   
     
       
  };

  setupCamera = () => {
    if (!this.scene) {
      // console.log('error, scene is not set up')
      return;
    }
    const camera = new FreeCamera("camera1", new Vector3(4,8,-24), this.scene);
    camera.rotation = new Vector3(0, 0, 0);
    camera.detachControl();
  };

  setupEnvironment =  () => {
    if (!this.scene) {
      // console.log('error, scene is not set up')
      return;
    }

  };

  setupLights =  () => {
    if (!this.scene) {
      // console.log('Scene is not setup')
      return;
    }

    const light = new DirectionalLight("SunLight", new Vector3(0, 1, 1), this.scene);
    light.diffuse = new Color3(1, 1, 1);
    light.intensity = 1;

  };

  setupContainer= ()=> {
    const container = MeshBuilder.CreatePlane("container",{ width:10, height: 15 });
    container.position = new Vector3(4.5,7,0);

    const grid = new StandardMaterial("grid",this.scene,);
    grid.diffuseColor = Color3.Blue();
    container.material = grid;

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 15; y++) {
        const container2 = MeshBuilder.CreatePlane("container2",{ width:0.9, height: 0.9 });
        container2.position = new Vector3(x,y,-1);
        this.containerArray[x][y] = true;
      }
    }
    
    console.log(this.containerArray)
  }

  setupFigure= ()=>{

      let figure = callRandom();
          let cnt = 1;
    this.scene?.onKeyboardObservable.add((info) => {  // helper ui for 3d scene
      if (info.type === KeyboardEventTypes.KEYDOWN){
        switch (info.event.key) {
          case "x":
            this.scene!.debugLayer.show();
          break;

          case "r": 
          if(this.canRorate(figure!)){
            figure?.rotation(cnt);
                cnt++; 
            if(cnt > 4 ){
              cnt = 1;
            }
          }
          break;

          case "z":
             if(this.canMoveDown(figure)){
               figure?.moveDownFigure();
            }
            else{
              this.collideMesh(figure);
               figure = callRandom();
               cnt = 1;
            }
          break;

          case "a":
            if(this.canMoveRigth(figure)){
              figure?.moveRightFigure();
            }
            else{
              this.collideMesh(figure);
               figure = callRandom();
               cnt = 1;
            }
          break;
          case "d":
            if(this.canMoveLeft(figure)){
                figure?.moveLeftFigure();
            }
            else{
              this.collideMesh(figure);
               figure = callRandom();
               cnt = 1;
            }
          break;
        }}
      })
      
   

     function callRandom():Figure | undefined{
        
        switch (Math.floor(Math.random() * 4 + 1)) {
          case 1:
            return new FigureOne();
          break;
          case 2:
            return new FigureTwo();
          break;
          case 3:
            return new FigureThree();
          break;
          case 4:
            return new FigureFour();
          break;
      } 
    }
  }
  setupWindow= async()=>{
     console.log(this.containerArray);
    if((this.containerArray[0][0])){
      console.log(1);
      window.alert("Game Start")
  }
    }


  collideMesh(figure:Figure | undefined){
    this.containerArray[figure!.box1.position.x][figure!.box1.position.y] = false;
    this.containerArray[figure!.box2.position.x][figure!.box2.position.y] = false;
    this.containerArray[figure!.box3.position.x][figure!.box3.position.y] = false;
    this.containerArray[figure!.box4.position.x][figure!.box4.position.y] = false;
  }

   canMoveDown(figure:Figure | undefined):boolean {

      if(this.containerArray[figure!.box1.position.x][figure!.box1.position.y- 1]
      &&this.containerArray[figure!.box2.position.x][figure!.box2.position.y- 1]
      &&this.containerArray[figure!.box3.position.x][figure!.box3.position.y- 1]
      &&this.containerArray[figure!.box4.position.x][figure!.box4.position.y- 1]){
         return true;
    }
        return false;
    }
    canMoveRigth(figure:Figure | undefined):boolean {

  
      if(this.containerArray[figure!.box1.position.x - 1][figure!.box1.position.y- 1]
      &&this.containerArray[figure!.box2.position.x- 1][figure!.box1.position.y- 1]
      &&this.containerArray[figure!.box3.position.x- 1][figure!.box1.position.y- 1]
      &&this.containerArray[figure!.box4.position.x- 1][figure!.box1.position.y- 1]){
         return true;
    }
        return false;
    }
    canMoveLeft(figure:Figure | undefined):boolean {

      if(this.containerArray[figure!.box1.position.x + 1][figure!.box1.position.y+ 1]
      &&this.containerArray[figure!.box2.position.x + 1][figure!.box2.position.y+ 1]
      &&this.containerArray[figure!.box3.position.x + 1][figure!.box3.position.y+ 1]
      &&this.containerArray[figure!.box4.position.x + 1][figure!.box4.position.y+ 1]){ return true; }
        return false;
    }

    canRorate(figure:Figure){
      if(this.canMoveDown(figure) && this.canMoveLeft(figure) && this.canMoveRigth(figure)){
        return true;
      }
      return false;
    }


// isWin():Boolean{
//   let flag = false;

//   for (let x = 0; x < 10; x++) {
//     for (let y = 0; y < 15; y++) {

//       if(this.containerArray[x][y]){
//         flag = true;
// } }}
//   return flag;
// }


}

  
    

  



    




