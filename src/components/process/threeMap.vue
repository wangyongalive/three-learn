<!--suppress ALL -->
<template>
  <div class="outer">
    <!--<div class="nav-top">-->
    <!--<span class="nav-top-title">智慧城市</span>-->
    <!--<div class="nav-top-time">-->
    <!--<span id="date">2020年7月31日</span>-->
    <!--<span id="time">星期五  13:43:49</span>-->
    <!--</div>-->
    <!--</div>-->
    <div id="container"></div>
    <img id="warnIcon" alt="warn" class="icon twinkle" src="/static/warn.svg">
    <div id="name-box"></div>

    <!--运维区域-->
    <!--<div class="legend-container" style="position: fixed; top: 90px; left: 296px; width: 1331px;">-->
    <!--<div class="legend-content"><span><img src="../../../static/icon/legend.png">xxx</span></div>-->
    <!--<div class="legend-content"><span><span class="red-legend"></span><span style="font-size: 14px;">xxx</span></span><span><span-->
    <!--class="green-legend"></span><span style="font-size: 14px;">xxx</span><span><span-->
    <!--style="margin-right: -10px;"><img src="../../../static/icon/高亮图标小.png"></span><span style="font-size: 14px;">xxxx</span></span></span>-->
    <!--</div>-->
    <!--</div>-->


    <!--总指标-->
    <!--<div id="zongzhibiao" class="tip-container" style="width: 270px; position: fixed; top: 90px; left: 16px;">-->
    <!--<div class="tip-title">-->
    <!--<span><img src="../../../static/icon/总指标.png"></span>-->
    <!--<span>xxx</span>-->
    <!--<span class="tip-dropDown"><img src="../../../static/icon/收起.png"></span>-->
    <!--</div>-->
    <!--<div class="tip-content" style="width: 270px;">-->
    <!--<ul>-->
    <!--<li>-->
    <!--<span class="zhzb-li-name">xxx<span class="typeStyle">（x）</span></span>-->
    <!--<span class="zhzb-li-num">xxxx</span>-->
    <!--</li>-->
    <!--<li>-->
    <!--<span class="zhzb-li-name">xxxx<span class="typeStyle">（x）</span></span>-->
    <!--<span class="zhzb-li-num">xxxx</span>-->
    <!--</li>-->
    <!--<li>-->
    <!--<span class="zhzb-li-name">xxxx<span class="typeStyle">（x）</span></span>-->
    <!--<span class="zhzb-li-num">xxxx</span>-->
    <!--</li>-->
    <!--<li>-->
    <!--<span class="zhzb-li-name">xxxx<span class="typeStyle">（x）</span></span>-->
    <!--<span class="zhzb-li-num">xxxx</span>-->
    <!--</li>-->
    <!--<li><span class="zhzb-li-name">xxxx<span class="typeStyle">（x）</span></span>-->
    <!--<span class="zhzb-li-num">xxxx</span>-->
    <!--</li>-->
    <!--<li><span class="zhzb-li-name">xxxx<span class="typeStyle">（x）</span></span>-->
    <!--<span class="zhzb-li-num">xxxx</span>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->

    <!--预警-->
    <!--<div id="yujing" class="tip-container" style="width: 270px; position: fixed; top: 354px; left: 16px;">-->
    <!--<div class="tip-title">-->
    <!--<span><img src="../../../static/icon/预警.png"></span>-->
    <!--<span>xxx</span>-->
    <!--<span class="tip-dropDown"><img src="../../../static/icon/收起.png"></span>-->
    <!--</div>-->
    <!--<div class="tip-content" style="width: 270px;">-->
    <!--<ul>-->
    <!--<li>-->
    <!--<span class="zhzb-li-name">xxxx</span>-->
    <!--<span class="zhzb-li-num"><span></span><span class="font-w yj-span">xxx</span></span>-->
    <!--</li>-->
    <!--<li>-->
    <!--<span class="zhzb-li-name">xxxx</span>-->
    <!--<span class="zhzb-li-num"><span><img src="../../../static/icon/上升趋势.png"></span>-->
    <!--<span class="font-w yj-span">xxxx</span></span>-->
    <!--</li>-->
    <!--<li>-->
    <!--<span class="zhzb-li-name">xxxx</span>-->
    <!--<span class="zhzb-li-num"><span><img src="../../../static/icon/下降趋势.png"></span>-->
    <!--<span class="font-w yj-span">xxxx</span></span></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->

    <!--考勤-->
    <!--<div id="kaoqin" class="tip-container" style="width: 270px; position: fixed; top: 530px; left: 16px;">-->
    <!--<div class="tip-title">-->
    <!--<span><img src="../../../static/icon/考勤.png"></span><span>xxxx</span><span class="tip-dropDown">-->
    <!--<img src="../../../static/icon/收起.png"></span>-->
    <!--</div>-->
    <!--<div class="tip-content" style="width: 270px;">-->
    <!--<ul>-->
    <!--<li><span class="zhzb-li-name">xxxx</span><span class="zhzb-li-num">xxx</span></li>-->
    <!--<li><span class="zhzb-li-name">xxxx</span><span class="zhzb-li-num">xxx</span></li>-->
    <!--<li><span class="zhzb-li-name">xxxx</span><span class="zhzb-li-num">xxx</span></li>-->
    <!--<li><span class="zhzb-li-name">xxxx</span><span class="zhzb-li-num">xxx</span></li>-->
    <!--<li><span class="zhzb-li-name">xxxx</span><span class="zhzb-li-num">xxx</span></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->

    <!--详细指标-->
    <!--<div id="xxzb" class="tip-container" style="width: 270px; position: fixed; top: 90px; right: 16px;">-->
    <!--<div class="tip-title"><span><img src="../../../static/icon/详细指标.png"></span><span>详细指标</span><span-->
    <!--class="tip-dropDown"><img-->
    <!--src="../../../static/icon/收起.png"></span>-->
    <!--</div>-->
    <!--<div class="tip-content" style="width: 270px;">-->
    <!--<div class="speed-container">-->
    <!--<div class="speed-title">-->
    <!--<span><img src="../../../static/icon/区域报修数排名.png"></span>-->
    <!--<span>xxxx</span>-->
    <!--<span><img src="../../../static/icon/xjt.png"></span>-->
    <!--</div>-->
    <!--<div class="speed-content">-->
    <!--<ul>-->
    <!--<li><span>xx</span><span class="speed-line"><span id="qybxspm0" class="speed-num"-->
    <!--style="background-color: rgb(85, 218, 237); width: 86.4%;"></span><span-->
    <!--class="numText">xxx</span></span></li>-->
    <!--<li><span>xx</span><span class="speed-line"><span id="qybxspm1" class="speed-num"-->
    <!--style="background-color: rgb(85, 182, 237); width: 69.5%;"></span><span-->
    <!--class="numText">xxx</span></span></li>-->
    <!--<li><span>xxx</span><span class="speed-line"><span id="qybxspm2" class="speed-num"-->
    <!--style="background-color: rgb(63, 128, 210); width: 65%;"></span><span-->
    <!--class="numText">xxx</span></span></li>-->
    <!--<li><span>xxx</span><span class="speed-line"><span id="qybxspm3" class="speed-num"-->
    <!--style="background-color: rgb(43, 93, 184); width: 58.2%;"></span><span-->
    <!--class="numText">xxx</span></span></li>-->
    <!--<li><span>xxx</span><span class="speed-line"><span id="qybxspm4" class="speed-num"-->
    <!--style="background-color: rgb(24, 100, 227); width: 52.6%;"></span><span-->
    <!--class="numText">xxx</span></span></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="speed-container">-->
    <!--<div class="speed-title">-->
    <!--<span><img src="../../../static/icon/区域完成数排名.png"></span>-->
    <!--<span>xxx</span>-->
    <!--<span><img src="../../../static/icon/xjt.png"></span>-->
    <!--</div>-->
    <!--<div class="speed-content">-->
    <!--<ul>-->
    <!--<li>-->
    <!--<span>xxxx</span>-->
    <!--<span class="speed-line">-->
    <!--<span id="qywcspm0" class="speed-num" style="background-color: rgb(85, 218, 237); width: 84.8%;"></span>-->
    <!--<span class="numText">xxxx</span>-->
    <!--</span>-->
    <!--</li>-->
    <!--<li><span>xxx</span><span class="speed-line"><span id="qywcspm1" class="speed-num"-->
    <!--style="background-color: rgb(85, 182, 237); width: 66.5%;"></span><span-->
    <!--class="numText">xxx</span></span></li>-->
    <!--<li><span>xxxx</span><span class="speed-line"><span id="qywcspm2" class="speed-num"-->
    <!--style="background-color: rgb(63, 128, 210); width: 66.2%;"></span><span-->
    <!--class="numText">xxx</span></span></li>-->
    <!--<li><span>xxxx</span><span class="speed-line"><span id="qywcspm3" class="speed-num"-->
    <!--style="background-color: rgb(43, 93, 184); width: 47.5%;"></span><span-->
    <!--class="numText">xxxx</span></span></li>-->
    <!--<li><span>xxxxx</span><span class="speed-line"><span id="qywcspm4" class="speed-num"-->
    <!--style="background-color: rgb(24, 100, 227); width: 45.8%;"></span><span-->
    <!--class="numText">xxxx</span></span></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="speed-container">-->
    <!--<div class="speed-title">-->
    <!--<span><img src="../../../static/icon/区域完成率.png"></span>-->
    <!--<span>xxxx</span>-->
    <!--<span><img src="../../../static/icon/xjt.png"></span>-->
    <!--</div>-->
    <!--<div class="speed-content">-->
    <!--<ul>-->
    <!--<li><span>xxx</span><span class="speed-line"><span id="qywclpm0" class="speed-num"-->
    <!--style="background-color: rgb(85, 218, 237); width: 99.4%;"></span><span-->
    <!--class="numText">xxxx</span></span></li>-->
    <!--<li><span>xxx</span><span class="speed-line"><span id="qywclpm1" class="speed-num"-->
    <!--style="background-color: rgb(85, 182, 237); width: 98%;"></span><span-->
    <!--class="numText">xxxx</span></span></li>-->
    <!--<li><span>xxxx</span><span class="speed-line"><span id="qywclpm2" class="speed-num"-->
    <!--style="background-color: rgb(63, 128, 210); width: 88%;"></span><span-->
    <!--class="numText">xxxx</span></span></li>-->
    <!--<li><span>xxxx</span><span class="speed-line"><span id="qywclpm3" class="speed-num"-->
    <!--style="background-color: rgb(43, 93, 184); width: 86%;"></span><span-->
    <!--class="numText">xxxx</span></span></li>-->
    <!--<li><span>xxx</span><span class="speed-line"><span id="qywclpm4" class="speed-num"-->
    <!--style="background-color: rgb(24, 100, 227); width: 70%;"></span><span-->
    <!--class="numText">xxxx</span></span></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->


  </div>
</template>
<script>
  import * as THREE from "three";
  // import Status from 'three/examples/jsm/libs/stats.module.js'
  // import {GUI} from 'three/examples/jsm/libs/dat.gui.module.js'
  // 要加{}才可以正常引入库
  import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
  import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
  import {interpolateHsl} from "d3-interpolate"; // 颜色插值
  import TWEEN from "@tweenjs/tween.js"; // 动画
  import {Loading} from 'element-ui';

  // bloom
  // EffectComposer 效果合成器
  // 1. 导入相关的后期处理库
  import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer.js";
  // 4.  配置后期处理过程链 一般RenderPass都是过程链的开始
  import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass.js";
  // 模拟生活中的泛光或说眩光效果
  import {UnrealBloomPass} from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

  const OrbitControls = require('three-orbit-controls')(THREE);


  export default {
    name: "threeMap",
    data() {
      return {
        fov: 75
      }
    },
    mounted() {
      this.init();
      this.addObj();
      // this.animate();
    },
    beforeDestroy() {
      // this.scene.dispose();
      this.scene = null;
      // this.pointLigtht.dispose();
      // this.pointLigtht = null;
      // this.ambientLight.dispose();
      // this.ambientLight = null;
      // this.camera.dispose();
      this.light = null;
      this.camera = null;
      // this.control.dispose();
      this.control = null;
      // this.renderer.dispose();
      this.renderer = null;
      // this.req.dispose();
      this.req = null;
      // this.mixer.dispose();
      this.mixer = null;
      // this.clock.dispose();
      this.clock = null;
      cancelAnimationFrame(this.req);
      this.renderScene = null;
      this.bloomPass = null;
      this.bloomComposer = null;
      this.box3 = null;
      this.animateList = null;
      this.itemList = null;
      this.raycaster = null;
      this.mouse = null;
      this.mousePosition = null;
      this.clock = null;
      this.basicMat = null;

      // this.stats = null;
      // this.gui = null;
      console.log("实例已经被销毁");
    },
    methods: {
      init() {
        let self = this;
        this.scene = null;
        // this.pointLigtht = null; /*点光源*/
        // this.ambientLight = null; /*环境光源*/
        this.light = null;
        this.camera = null;
        this.control = null;
        this.renderer = null;
        this.req = null;
        this.mixer = null;
        this.renderScene = null;
        this.bloomPass = null;
        this.bloomComposer = null;
        // this.stats = new Status();
        // this.gui = new GUI();
        // this.params = {
        //   exposure: 1,
        //   bloomStrength: 2,
        //   bloomThreshold: 0.3,
        //   bloomRadius: 0.3
        // };
        this.box3 = new THREE.Box3();
        this.animateList = [];
        this.itemList = []; // 存放raycaster检测对象

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(1, 1);
        this.mousePosition = {
          x: 0,
          y: 0
        };



        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();



        // 基础材质 透明偏蓝
        this.basicMat = new THREE.MeshBasicMaterial({
          opacity: 0.25,
          color: 0x1f56b9,
          side: THREE.BackSide,
          transparent: true,
        });


        /*添加光源*/
        // this.pointLight = new THREE.PointLight(0xffffff);
        // this.pointLight.position.set(100, 100, 100);
        // this.scene.add(this.pointLight);
        /*环境光源*/
        // this.ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
        // this.ambientLight.position.set(1.61,2.05,2.47);
        // this.light.position.multiplyScalar(0.3);
        // this.scene.add(this.ambientLight);

        this.light = new THREE.HemisphereLight(0xffffff, 0xcccccc, 1);
        this.scene.add(this.light);

        //初始化相机
        // let pointLight = new THREE.PointLight(0xffffff);
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(1.61, 2.05, 2.47);
        // this.camera.lookAt(this.scene.position);
        // this.camera.add(pointLight); /*将点光源添加到场景中*/ /*跟着相机移动的光源效果*/

        // this.helperCamera = new THREE.CameraHelper(this.camera);
        // this.scene.add(this.helperCamera);
        // this.scene.add(this.camera);


        //渲染
        this.renderer = new THREE.WebGLRenderer({
          alpha: true
        });//会在body里面生成一个canvas标签,
        this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
        this.renderer.setClearColor(new THREE.Color(0x303030));
        // this.renderer.toneMapping = THREE.ReinhardToneMapping;  // 这个加了效果不太好
        this.renderer.setSize(window.innerWidth, window.innerHeight);


        // 初始化控制器
        this.controls = new OrbitControls(this.camera, this.renderer.domElement); // 轨道控制器
        this.controls.target.set(0, 0, 0);
        // this.controls.minDistance = 80;  // 加了建筑物就非常小
        // this.controls.maxDistance = 600;
        this.controls.maxPolarAngle = Math.PI;
        this.controls.update();


        const container = document.getElementById('container');
        container.appendChild(this.renderer.domElement);
        // container.appendChild(this.stats.dom)

        // bloom效果
        this.renderScene = new RenderPass(this.scene, this.camera);
        this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        // this.bloomPass.threshold = this.params.bloomThreshold;
        // this.bloomPass.strength = this.params.bloomStrength;
        // this.bloomPass.radius = this.params.bloomRadius;
        this.bloomPass.threshold = 0.3;
        this.bloomPass.strength = 2;
        this.bloomPass.radius = 0.3;
        this.bloomComposer = new EffectComposer(this.renderer); // 2.创建合成器
        this.bloomComposer.addPass(this.renderScene);
        this.bloomComposer.addPass(this.bloomPass);
        // this.guiInt(); // 初始化GUI

        window.addEventListener('resize', this.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
        document.addEventListener("mousemove", this.onMouseMove, false);
      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // this.bloomComposer.setSize(window.width, window.height);  // 加了就无法显示建筑物
      },
      onMouseMove(event) {
        event.preventDefault();
        this.mousePosition.x = event.clientX;
        this.mousePosition.y = event.clientY;
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      },
      animate() {
        let detal = this.clock.getDelta();
        TWEEN.update();
        this.controls.update(detal); // 更新控制器
        if (this.mixer) {
          this.mixer.update(detal)
        }
        // this.stats.update();


        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersection = this.raycaster.intersectObjects(this.itemList);
        const nameBox = document.getElementById("name-box");
        if (intersection.length > 0) {
          // 名称提示
          nameBox.innerHTML = intersection[0].object.name.replace("Object_", "零件");
          nameBox.style.display = "block";
          nameBox.style.top = this.mousePosition.y + 'px'; // 跟随鼠标的位置
          nameBox.style.left = this.mousePosition.x + 30 + 'px';
          // console.log(intersection[0]);
        } else {
          // outlinePass.selectedObjects = [];
          nameBox.style.display = "none";
        }

        // 更新图标坐标
        const road = this.scene.getObjectByName("road003");
        if (road) {
          const position = this.getPosition(road);
          const iconElement = document.getElementById("warnIcon");
          iconElement.style.top = position.y + 'px'; // 要单位，否则没有效果
          iconElement.style.left = position.x + 'px';
        }

        this.animateList.forEach(mixer => {
          mixer.update(detal);
        });

        // this.render();
        this.bloomComposer.render(detal); // 3. 不在使用WebGLRenderer的render方法
        this.req = requestAnimationFrame(this.animate);
      },
      render() {
        this.renderer.render(this.scene, this.camera);
      },
      addObj() {
        let self = this;

        // 加载glb/glbf模型
        // 加载动画glbf
        // new GLTFLoader().setPath("/static/model/").load(
        //   'Stork.glb',
        //   (gltf) => {
        //     let model = gltf.scene;
        //     self.scene.add(model);
        //
        //     let axesHelper = new THREE.AxesHelper(5);
        //     self.scene.add(axesHelper);
        //
        //     self.mixer = new THREE.AnimationMixer(model);
        //     self.mixer.clipAction(gltf.animations[0]).play();
        //
        //     self.animate();
        //   },
        //   (xhr) => {
        //     console.log('loading');
        //     // called while loading is progressing
        //     console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
        //   },
        //   (error) => {
        //     // console.log(error);
        //     console.log('error');
        //     // called when loading has errors
        //     console.error('An error happened', error);
        //   }
        // );

        // 加载楼房 压缩之后的gltf 要使用了DRACOLoader才可以加载
        // const dracoLoader = new DRACOLoader();
        // dracoLoader.setDecoderPath("../../../static/draco/"); // 最后要加/
        // dracoLoader.preload();
        //
        // new GLTFLoader().setDRACOLoader(dracoLoader).load(
        //   '/static/building.gltf',
        //   (gltf) => {
        //     let model = gltf.scene;
        //     model.scale.set(0.05, 0.05, 0.05);
        //     model.position.set(0, 0, 0);
        //     self.scene.add(model);
        //   },
        //   (xhr) => {
        //     console.log('loading');
        //     // called while loading is progressing
        //     console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
        //   },
        //   (error) => {
        //     // console.log(error);
        //     console.log('error');
        //     // called when loading has errors
        //     console.error('An error happened', error);
        //   }
        // );


        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("../../../static/draco/"); // 最后要加/
        dracoLoader.preload();

        new GLTFLoader().setDRACOLoader(dracoLoader).load(
          '/static/model/City/b-city.glb',
          (gltf) => {
            // document.getElementById("loadingText").style.display = "none";
            self.loadingInstance.close();

            let model = gltf.scene;
            // model.scale.set(20, 20, 20);
            self.scene.add(model);


            // 改变模型的材质，偏暗蓝且带透明
            const list = [...self.scene.children[1].children];
            list.forEach(item => {
              self.change2BasicMat(item);
            });


            // 添加线路 光轨效果
            const roadNum = 4;
            for (let i = 1; i <= roadNum; i++) {
              const name = `road${i ? "00" + i : ""}`;
              const road = self.scene.getObjectByName(name); // 通过name属性获取到道路
              self.change2LightTrail(road);
            }

            // 电梯
            const elevatorList = ["Elevator", "Elevator001"];
            elevatorList.forEach((item, index) => {
              const elevator = self.scene.getObjectByName(item);
              const mesh = self.change2LightBox(elevator);
              // 创建Animation
              const mixer = new THREE.AnimationMixer(mesh);
              const clipAction = mixer.clipAction(gltf.animations[index]);
              clipAction.play();
              self.animateList.push(mixer);
            });

            self.scene.traverse(item => {
              self.itemList.push(item);
            });

            self.animate();


          },
          (progressEvent) => {
            // console.log("handleProgress", progressEvent.loaded, progressEvent.total);
            // document.getElementById("loadingText").innerText = `加载模型中:${(progressEvent.loaded / progressEvent.total * 100).toFixed(0)}%`;
            self.loadingInstance = Loading.service({
              fullscreen: true,
              text: '加载模型中....',
              background: "rgba(31,86,185,0.25)"
            });

          },
          (error) => {
            // called when loading has errors
            console.error('An error happened', error);
          }
        );
      },
      change2BasicMat(object3d) {
        let self = this;
        object3d.traverse(item => {
          if (item.material) {
            item.material = self.basicMat;
          }
        });
      },
      change2LightTrail(object3d) {
        let self = this;
        // 使用顶点颜色 VertexColors
        const material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors, side: THREE.BackSide});
        const geometry = object3d.geometry.clone();
        // 生成渐变色的color数组
        const count = geometry.attributes.position.count;
        const rgbInterpolate = interpolateHsl("#00ffff", "#000000");
        const colorArray = new Array(count);
        for (let index = 0; index < count; index++) {
          const t = index / count;
          const rgb = rgbInterpolate(t);
          const rgbValue = rgb.match(/\d+/g);
          // 从 "rgb(1,2,3)" 字符串里 提取出 1,2,3 并 归一化（ 0.0 ~ 1.0）
          const r = Number(rgbValue[0]) / 255;
          const g = Number(rgbValue[1]) / 255;
          const b = Number(rgbValue[2]) / 255;

          colorArray[3 * index] = r;
          colorArray[3 * index + 1] = g;
          colorArray[3 * index + 2] = b;
        }
        const anchor = Number((Math.random() * count).toFixed(0));
        const b = colorArray.slice(anchor * 3);
        const f = colorArray.slice(0, anchor * 3);
        const newColorArray = [].concat(b, f);


        geometry.setAttribute("color", new THREE.Float32BufferAttribute(newColorArray, 3));
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(object3d.position.x, object3d.position.y, object3d.position.z);
        mesh.rotation.set(object3d.rotation.x, object3d.rotation.y, object3d.rotation.z);
        mesh.scale.set(object3d.scale.x, object3d.scale.y, object3d.scale.z);
        object3d.parent.add(mesh);

        setInterval(() => {
          self.lightMove(mesh, newColorArray);
        }, 2000);
      },
      lightMove(mesh, colorArray) {
        const len = colorArray.length / 3;
        new TWEEN.Tween({value: 0})
          .to({value: 1}, 2000)
          .onUpdate(function (val) {
            // 实现环状数组变化
            const anchor = Number((val.value * len).toFixed(0));
            const b = colorArray.slice(anchor * 3);
            const f = colorArray.slice(0, anchor * 3);
            const newColorArray = [].concat(b, f);
            mesh.geometry.setAttribute("color", new THREE.Float32BufferAttribute(newColorArray, 3));
          })
          .start();
      },
      getPosition(object3d) {
        const result = {};
        const widthHalf = window.innerWidth / 2;
        const heightHalf = window.innerHeight / 2;

        // 获取在3D空间里的坐标
        const vector = new THREE.Vector3();
        this.box3.setFromObject(object3d);
        this.box3.getCenter(vector);
        vector.project(this.camera);
        // 转换成平面坐标
        result.x = vector.x * widthHalf + widthHalf;
        result.y = -(vector.y * heightHalf) + heightHalf;

        return result;
      },
      change2LightBox(object3d) {
        const group = new THREE.Group();
        const lineMaterial = new THREE.LineBasicMaterial({color: 0x00FFFF});
        const boxMaterial = new THREE.MeshBasicMaterial({
          opacity: 0.1,
          color: 0x00cccc,
          side: THREE.BackSide,
          transparent: true,
        });
        const geo = new THREE.EdgesGeometry(object3d.geometry);
        const line = new THREE.LineSegments(geo, lineMaterial);
        const box = new THREE.Mesh(object3d.geometry, boxMaterial);

        group
          .add(line)
          .add(box);

        group.position.set(object3d.position.x, object3d.position.y, object3d.position.z);
        group.rotation.set(object3d.rotation.x, object3d.rotation.y, object3d.rotation.z);
        group.scale.set(object3d.scale.x, object3d.scale.y, object3d.scale.z);

        object3d.parent.add(group);
        object3d.visible = false;
        return group;

      },
      // guiInt() {
      //   let self = this;
      //   this.gui.add(this.params, 'bloomThreshold', 0.0, 1.0).onChange((value) => {
      //     self.bloomPass.threshold = Number(value);
      //   });
      //   this.gui.add(this.params, 'bloomStrength', 0.0, 3.0).onChange((value) => {
      //     self.bloomPass.strength = Number(value);
      //   });
      //   this.gui.add(this.params, 'bloomRadius', 0.0, 1.0).step(0.01).onChange((value) => {
      //     self.bloomPass.radius = Number(value);
      //   });
      // }
    }
  }
</script>

<style scoped lang="less">
  .outer {
    position: relative;

    .nav-top {
      position: fixed;
      top: 0;
      left: 0;
      height: 80px;
      width: 100%;
      background-color: rgba(3, 21, 24, 0.7);
      text-align: center;

      .nav-top-title {
        line-height: 80px;
        color: #ffffff;
        font-size: 24px;
        font-weight: 600;
      }

      .nav-top-time {
        position: absolute;
        top: 0;
        right: 10px;
        padding: 10px;

        span {
          display: block;
          color: #ffffff;
          line-height: 20px;
          font-size: 14px;
        }
      }

    }

    #container /deep/ canvas {
      /*要修改元素的display，否则右侧会出现滚动条*/
      display: block;
    }


    .icon {
      width: 34px;
      height: 34px;
      position: absolute;
      cursor: pointer;
    }

    .twinkle {
      animation-name: twinkle-key;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }

    @keyframes twinkle-key {
      50% {
        opacity: 0.5;
      }
    }

    #name-box {
      position: absolute;
      font-size: 20px;
      pointer-events: none;
      padding: 15px;
      border-radius: 10px;

      border-style: solid;
      white-space: nowrap;
      z-index: 9999999;
      transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
      background-color: rgba(50, 50, 50, 0.5);
      border-width: 0px;
      border-color: rgb(51, 51, 51);
      color: rgb(255, 255, 255);
      font: 14px / 21px "Microsoft YaHei";
    }

    .tip-container {
      background-color: rgba(22, 31, 38, 0.87);

      .tip-title {
        width: 100%;
        height: 48px;
        color: #ffffff;
        overflow: hidden;
        box-sizing: border-box;
        border-bottom: 1px solid #052025;
        font-family: 微软雅黑;
        font-size: 16px;

        span {
          line-height: 48px;
          vertical-align: middle;
          font-size: 16px;
          font-weight: 600;

          > img {
            width: 16px;
            height: 16px;
          }
        }

        span:nth-child(1) {
          float: left;
          margin-left: 12px;
        }

        span:nth-child(2) {
          float: left;
          margin-left: 10px;
        }

        span:nth-child(3) {
          float: right;
          margin-right: 10px;
        }

      }

      .tip-content {
        padding: 16px;

        .speed-container {
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid #052025;
          padding-bottom: 10px;

          .speed-title {
            overflow: hidden;
            line-height: 30px;

            span {
              display: block;
              float: left;
              color: #ffffff;
              padding-right: 10px;
            }

          }

          .speed-content {
            margin-top: 10px;
            width: 100%;

            ul {
              width: 100%;

              li {
                width: 100%;
                list-style: none;
                overflow: hidden;
                margin: 0;

                span:nth-child(1) {
                  display: block;
                  float: left;
                  padding: 0;
                  margin: 0;
                }

                span:nth-child(2) {
                  display: block;
                  float: right;
                  padding: 0;
                  margin: 0;
                }

                .speed-line {
                  width: 200px;
                  background-color: #043037;
                  height: 13px;
                  margin-top: 8px !important;
                  border-radius: 5px;
                  position: relative;

                  .speed-num {
                    /* width: 90%; */
                    display: block;
                    height: 100%;
                    border-radius: 5px;
                  }

                  .numText {
                    position: absolute;
                    top: -9px;
                    right: 4px;
                    color: #ffffff;
                    font-size: 12px;
                  }
                }


              }
            }
          }

        }


        ul {
          li {
            color: #ffffff;
            list-style: none;
            overflow: hidden;
            line-height: 30px;
            font-size: 14px;

            > .zhzb-li-name {
              float: left;

              > .typeStyle {
                color: #1079A6;
                font-weight: 600;
              }
            }

            > .zhzb-li-num {
              float: right;
              color: #00CEFA;

              > .yj-span {
                display: block;
                width: 30px;
                float: right;
                text-align: right;
              }
            }

          }
        }
      }
    }


    /*中间部分*/

    .legend-container {
      height: 48px;
      background-color: rgba(22, 31, 38, 0.87);
      overflow: hidden;

      > .legend-content {
        height: 100%;

        &:nth-child(1) {
          float: left;
        }

        &:nth-child(2) {
          float: right;

          span {
            float: left;
            display: block;
            margin-right: 10px;
          }
        }

        span {
          line-height: 48px;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 16px;

          img {
            vertical-align: middle;
            margin-top: -4px;
            margin-left: 10px;
            margin-right: 10px;
          }
        }

        .red-legend {
          height: 8px;
          width: 30px;
          background-color: #FF3774;
          border-radius: 5px;
          margin-top: 20px;
        }

        .green-legend {
          height: 8px;
          width: 30px;
          background-color: #6AE89C;
          border-radius: 5px;
          margin-top: 20px;
        }
      }
    }

  }


</style>
