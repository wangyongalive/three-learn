<!--suppress ALL -->
<template>
  <div id="container">
  </div>
</template>
<script>
  import * as THREE from "three";
  import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';

  const OrbitControls = require('three-orbit-controls')(THREE);


  export default {
    name: "threeMap",
    data() {
      return {
        fov: 60
      }
    },
    mounted() {
      this.init();
      this.addObj();
      this.animate();
    },
    beforeDestroy() {
      this.scene = null;
      this.scene.dispose();
      this.light = null;
      this.camera = null;
      this.control = null;
      this.renderer = null;
      cancelAnimationFrame(this.req);
      console.log("实例已经被销毁");
    },
    methods: {
      init() {
        this.scene = null;
        this.light = null;
        this.camera = null;
        this.control = null;
        this.renderer = null;
        this.req = null;
        this.gui = new GUI();


        this.scene = new THREE.Scene();

        this.light = new THREE.AmbientLight(0xcccccc, 0.4);
        this.light.position.set(50, 200, 100);
        // this.light.position.multiplyScalar(0.3);
        this.scene.add(this.light);

        //初始化相机
        let pointLight = new THREE.PointLight(0xffffff, 0.8);
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(10, 90, 65);
        this.camera.lookAt(this.scene.position);
        this.camera.add(pointLight);
        this.scene.add(this.camera);


        //渲染
        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
        });//会在body里面生成一个canvas标签,
        this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
        this.renderer.setClearColor(new THREE.Color(0x303030));//为了兼容高清屏幕
        this.renderer.setSize(window.innerWidth, window.innerHeight);


        //初始化控制器
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.minDistance = 80;
        this.controls.maxDistance = 400;
        this.controls.maxPolarAngle = Math.PI;
        this.controls.update();



        const container = document.getElementById('container');
        container.appendChild(this.renderer.domElement);


        this.guiInt(); // 初始化GUI
        window.addEventListener('resize', this.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      animate() {
        this.req = requestAnimationFrame(this.animate);
        this.render();
      },
      render() {
        this.renderer.render(this.scene, this.camera);
      },
      addObj() {
        new OBJLoader().setMaterials(materials).setPath('/static/model/Car/').load('CK.obj', obj => {
          obj.scale.set(0.8, 0.8, 0.8);
          obj.position.set(-40, -50, 10);
          this.scene.add(obj);
        });

        // new MTLLoader().setPath('/static/model/Head/').load('WaltHead.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/Head/').load('WaltHead.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj);
        //   });
        // });


        //包含材质
        // new MTLLoader().setPath('/static/model/modelFirst/').load('modelFirst.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/modelFirst/').load('modelFirst.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj);
        //   });
        // });

        // 加载材质
        // new MTLLoader().setPath('/static/model/VANS/').load('VANS.mtl', materials => {
        //   materials.preload();
        //   // 加载模型
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/VANS/').load('VANS.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });

        //
        // new MTLLoader().setPath('/static/model/LEVIS/').load('LEVIS.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/LEVIS/').load('LEVIS.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/sanxing/').load('sanxing.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/sanxing/').load('sanxing.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/CA/').load('CA.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/CA/').load('CA.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/SHOES/').load('SHOES.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/SHOES/').load('SHOES.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/square/').load('zhengfangxing.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/square/').load('zhengfangxing.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/LOHO/').load('LOHO.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/LOHO/').load('LOHO.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/TWICE/').load('TWICE.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/TWICE/').load('TWICE.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/manji/').load('manji.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/manji/').load('manji.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/REPUBLIC/').load('REPUBLIC.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/REPUBLIC/').load('REPUBLIC.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/JUSTCAVALLI/').load('JUSTCAVALLI.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/JUSTCAVALLI/').load('JUSTCAVALLI.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });
        // new MTLLoader().setPath('/static/model/taizhuolong/').load('taizhuolong.mtl', materials => {
        //   materials.preload();
        //   new OBJLoader().setMaterials(materials).setPath('/static/model/taizhuolong/').load('taizhuolong.obj', obj => {
        //     obj.scale.set(0.8, 0.8, 0.8);
        //     obj.position.set(-40, -50, 10);
        //     this.scene.add(obj)
        //   })
        // });


      },
      guiInt() {
        // let self = this;
        // this.gui.add(this.params, 'bloomThreshold', 0.0, 1.0).onChange((value) => {
        //   self.bloomPass.threshold = Number(value);
        // });
        // this.gui.add(this.params, 'bloomStrength', 0.0, 3.0).onChange((value) => {
        //   self.bloomPass.strength = Number(value);
        // });
        // this.gui.add(this.params, 'bloomRadius', 0.0, 1.0).step(0.01).onChange((value) => {
        //   self.bloomPass.radius = Number(value);
        // });
      }
    }
  }
</script>

<style scoped>
  #container >>> canvas {
    /*要修改元素的display，否则右侧会出现滚动条*/
    display: block;
  }
</style>
