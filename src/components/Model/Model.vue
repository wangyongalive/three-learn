<!--suppress ALL -->
<template>
  <div id="model">
    <div id="container"></div>
    <div class="nav-top">
      <span class="nav-top-title">港口可视化平台</span>
    </div>

    <!--总指标-->
    <div id="zongzhibiao" class="tip-container" style="width: 270px; position: fixed; top: 90px; left: 16px;">
      <div class="tip-title">
        <span><img src="../../../static/icon/总指标.png"></span>
        <span>当前设备</span>
        <span class="tip-dropDown"><img src="../../../static/icon/收起.png" @click="show = !show"></span>
      </div>
      <div class="tip-content" style="width: 270px;" v-if="show">
        <ul>
          <li>
            <span class="zhzb-li-name">当前设备<span class="typeStyle">（台）</span></span>
            <span class="zhzb-li-num">{{selectedName}}</span>
          </li>
          <li>
            <span class="zhzb-li-name">运行时长<span class="typeStyle">（小时）</span></span>
            <span class="zhzb-li-num">xxxx</span>
          </li>
          <li>
            <span class="zhzb-li-name">维修及时率<span class="typeStyle">（%）</span></span>
            <span class="zhzb-li-num">xxxx</span>
          </li>
          <li><span class="zhzb-li-name">维修完成率<span class="typeStyle">（%）</span></span>
            <span class="zhzb-li-num">xxxx</span>
          </li>
        </ul>
      </div>
    </div>

    <!--预警-->
    <div id="yujing" class="tip-container" style="width: 270px; position: fixed; top: 290px; left: 16px;">
      <div class="tip-title">
        <span><img src="../../../static/icon/预警.png"></span>
        <span>设备总体情况</span>
        <span class="tip-dropDown"><img src="../../../static/icon/收起.png" @click="show2 = !show2"></span>
      </div>
      <div class="tip-content" style="width: 270px;" v-if="show2">
        <ul>
          <li>
            <span class="zhzb-li-name">总设备数<span class="typeStyle">（台）</span></span>
            <span class="zhzb-li-num"><span></span><span class="font-w yj-span">{{options.length}}</span></span>
          </li>
          <li>
            <span class="zhzb-li-name">xxxx</span>
            <span class="zhzb-li-num"><span><img src="../../../static/icon/上升趋势.png"></span>
    <span class="font-w yj-span">xxxx</span></span>
          </li>
          <li>
            <span class="zhzb-li-name">xxxx</span>
            <span class="zhzb-li-num"><span><img src="../../../static/icon/下降趋势.png"></span>
    <span class="font-w yj-span">xxxx</span></span></li>
        </ul>
      </div>
    </div>

    <!--考勤-->
    <div id="kaoqin" class="tip-container" style="width: 270px; position: fixed; top: 460px; left: 16px;">
      <div class="tip-title">
        <span><img src="../../../static/icon/考勤.png"></span><span>工具</span><span
        class="tip-dropDown">
    <img src="../../../static/icon/收起.png" @click="show3 = !show3"></span>
      </div>
      <div class="tip-content" style="width: 270px;" v-if="show3">
        <ul>
          <li><span class="zhzb-li-name">浏览</span><span class="zhzb-li-num"></span></li>
          <li>
            <el-select v-model="value" placeholder="请选择" @change="change" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li><span class="zhzb-li-name">旋转</span><span class="zhzb-li-num"></span></li>
          <li>
            <el-switch
              v-model="flag"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="开"
              inactive-text="关"
            >
            </el-switch>
          </li>
        </ul>
      </div>
    </div>
    <div id="name-box"></div>
  </div>
</template>
<script>
  import * as THREE from "three";
  import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
  import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
  import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
  import TWEEN from "@tweenjs/tween.js"; // 动画
  import {Loading} from 'element-ui';
  // import {Loading} from 'd3-scale';
  import * as d3Scale from 'd3-scale'

  const OrbitControls = require('three-orbit-controls')(THREE);

  export default {
    name: "threeMap",
    data() {
      return {
        fov: 60,
        angle: 1,
        flag: false,
        options: [
          {value: "CK", label: "卡车", x: "100", y: "100", z: "0"},
          {value: "YGC", label: "油罐车", x: "200", y: "200", z: "0"},
          {value: "DGJ", label: "登高机", x: "300", y: "300", z: "30"},
          {value: "DuiGJ", label: "堆高机", x: "0", y: "-500", z: "10"},
          {value: "YXTZQ", label: "箱门调转区", x: "-600", y: "-600", z: "150"},
          {value: "ZMD", label: "正面吊", x: "400", y: "400", z: "10"},
          {value: "ZDHGDD", label: "自动化轨道吊", x: "-100", y: "100", z: "10"},
          {value: "DQ", label: "吊桥", x: "-200", y: "200", z: "0"},
          {value: "QYC1", label: "牵引车1", x: "-300", y: "300", z: "30"},
          {value: "QYC2", label: "牵引车2", x: "-400", y: "400", z: "30"},
          {value: "QYC3", label: "牵引车3", x: "-500", y: "500", z: "30"},
          {value: "MJ", label: "门机", x: "200", y: "-200", z: "10"},
          {value: "MJ10T", label: "门机10T", x: "300", y: "-300", z: "10"},
          {value: "MJ16T", label: "门机16T", x: "400", y: "-400", z: "10"},
          {value: "LD", label: "龙吊", x: "-100", y: "-100", z: "10"},
          {value: "DC", label: "吊车", x: "-200", y: "-200", z: "10"},
          {value: "XZCL", label: "行政车辆", x: "-300", y: "-300", z: "10"},
          {value: "AVG", label: "AVG", x: "-400", y: "-400", z: "10"},
          {value: "ZDHDC", label: "自动化桥吊", x: "0", y: "0", z: "10"}
        ],
        value: '',
        inputX: '',
        inputY: '',
        selectOpacity: 1.0,
        selected: true,
        selectedName: '未知',
        show: true,
        show2: true,
        show3: true,
        swithSize: {
          'CK': "0.02",
          "YGC": "0.02",
          "DGJ": "0.015",
          "DuiGJ": "0.02",
          "YXTZQ": "0.02",
          "ZMD": "0.02",
          "ZDHGDD": "0.013",
          "DQ": "0.03",
          "QYC1": "0.015",
          "QYC2": "0.015",
          "QYC3": "0.015",
          "MJ": "4",
          "MJ10T": "0.008",
          "MJ16T": "0.05",
          "LD": "0.08",
          "DC": "15",
          "XZCL": "0.3",
          "AVG": "0.025",
          "ZDHDC": "0.03"
        },
        FPS: 30, // 设置渲染频率为30FBS，也就是每秒调用渲染器render方法大约30次
        renderT: 1 / 30, //单位秒  间隔多长时间渲染渲染一次
        timeS: 0
      }
    },
    mounted() {
      this.init();

      /*一个一个加入obj 开始*/
      // for (let i = 0; i < this.options.length; i++) {
      //   this.addObj(this.options[i]['value'], this.options[i]['label'],
      //     this.options[i]['x'], this.options[i]['y']);
      // }
      /*一个一个加入obj 结束*/

      /*用promise方式加载模型 开始*/
      let pro = [];
      for (let i = 0; i < this.options.length; i++) {
        let p = this.addObjPromisePic(this.options[i]['value'], this.options[i]['label'],
          this.options[i]['x'], this.options[i]['y'], this.options[i]['z']);
        pro.push(p);
      }
      this.loadingInstance = Loading.service({
        fullscreen: true,
        text: '加载模型中....',
        background: "rgba(31,86,185,0.25)"
      });
      Promise.all(pro).then((ok) => {
        // console.log(ok);
        this.loadingInstance.close(); // 关闭loading
        this.animate();
      });
      pro = null; /*手动置空*/
      /*用promise方式加载模型 结束*/


      // {value: "DGJ", label: "堆高机", x: "300", y: "300"},
      // this.addObjPic("DGJ", "堆高机", "300", "300");
      // this.render();

    },
    beforeDestroy() {
      this.scene = null;
      this.scene.dispose();
      this.light = null;
      this.camera = null;
      this.control = null;
      this.renderer = null;
      this.params = null;
      this.box3 = null;
      this.lastSelect = null;
      this.nowSelect = null;
      this.labelRenderer = null;
      this.loadingInstance = null;
      this.dracoLoader = null; // dracoLoader实例
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

        this.lastSelect = null;
        this.nowSelect = null;

        this.labelRenderer = null;
        this.box3 = new THREE.Box3();

        this.loadingInstance = null; // 加载实例
        /*dracoLoader实例初始化 开始*/
        this.dracoLoader = null; // dracoLoader实例
        this.dracoLoader = new DRACOLoader();
        this.dracoLoader.setDecoderPath("../../../static/draco/"); // 最后要加/
        this.dracoLoader.preload();
        /*dracoLoader实例初始化 结束*/
        this.itemList = []; // 存放raycaster检测对象

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(1, 1);
        this.mousePosition = {
          x: 0,
          y: 0
        };
        this.clock = new THREE.Clock();

        this.scene = new THREE.Scene();

        this.light = new THREE.AmbientLight(0xcccccc, 0.4);
        this.light.position.set(50, 200, 100);

        let groundGeo = new THREE.PlaneBufferGeometry(2000, 2000);
        // let texture = THREE.ImageUtils.loadTexture("../../../static/icon/ground.png");//加载纹理贴图
        let groundMat = new THREE.MeshLambertMaterial({
          opacity: 0.8,
          color: 0x303030,
          // map: texture,
          // transparent: false,
          side: THREE.DoubleSide
        });


        let ground = new THREE.Mesh(groundGeo, groundMat);
        ground.position.y = 0;
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // 基础材质 透明偏蓝
        this.basicMat = new THREE.MeshBasicMaterial({
          opacity: 0.6,
          color: 0x575757,
          side: THREE.BackSide,
          transparent: true,
        });

        // this.light.position.multiplyScalar(0.3);
        this.scene.add(this.light);

        //初始化相机
        let pointLight = new THREE.PointLight(0xffffff, 0.8);
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, 10000);
        // this.camera.position.set(300, 300, 150);
        this.camera.position.set(-500, 1040, 1050);
        this.camera.up.set(0, 1, 0);
        // this.camera.up.set(1, 0, 0);
        // this.camera.up.set(0, 0, 1);
        // this.camera.up.set(0, -1, 0);
        this.camera.lookAt(0, 0, 0);
        this.camera.add(pointLight);
        this.scene.add(this.camera);

        //渲染
        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
        });//会在body里面生成一个canvas标签,
        this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
        this.renderer.setClearColor(new THREE.Color(0x303030));
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        //初始化控制器
        let self = this;
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.target.set(0, 0, 0);
        this.controls.minDistance = 10;
        this.controls.maxDistance = 5000;
        // this.controls.maxPolarAngle = Math.PI * (79 / 180);
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.update();
        // this.controls.addEventListener("change",self.render);


        // 参数设置坐标轴大小,150，编写程序的时候，可以根据相机参数调整为合适的值，如果太小可以无法显示出来
        // const axesHelper = new THREE.AxesHelper(200);
        // this.scene.add(axesHelper);

        const container = document.getElementById('container');
        container.appendChild(this.renderer.domElement);
        container.addEventListener('click', this.onMouseClick, false);

        window.addEventListener('resize', this.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
        // container.addEventListener("mousemove", this.onMouseMove, false); // 只在容器中监听事件
        document.addEventListener("mousemove", this.onMouseMove, false);
      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      onMouseMove(event) {
        event.preventDefault();
        if (event.toElement.tagName == 'CANVAS') {
          this.mousePosition.x = event.clientX;
          this.mousePosition.y = event.clientY;
          this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        } else {
          document.getElementById("name-box").style.display = "none";
        }
      },
      onMouseClick(event) {
        let self = this;
        event.preventDefault();

        self.mouse.x = (event.offsetX / window.innerWidth) * 2 - 1; // 坐标变换
        self.mouse.y = -(event.offsetY / window.innerHeight) * 2 + 1;
        self.raycaster.setFromCamera(self.mouse, self.camera);
        let intersects = self.raycaster.intersectObjects(self.itemList);
        if (intersects.length > 0) {

          if (self.nowSelect) {
            self.nowSelect.check = false;
          }

          self.nowSelect = intersects[0].object.parent; // 当前选中的对象
          self.selectedName = self.nowSelect.name;
          self.nowSelect.check = true;

          self.flag = false;
          for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].label == self.nowSelect.name) {
              self.change(this.options[i].value)
            }
          }
        }

      },
      animate() {
        let detal = this.clock.getDelta();
        this.timeS = this.timeS + detal;
        if (this.timeS > this.renderT) {
          // console.log("执行");
          this.raycaster.setFromCamera(this.mouse, this.camera);
          const intersection = this.raycaster.intersectObjects(this.itemList);
          const nameBox = document.getElementById("name-box");
          if (intersection.length > 0) {
            // 名称提示
            // console.log(intersection[0]);
            let str = `<div style="font-size: 18px;">名称 :${intersection[0].object.parent.name}</div>
                     <div style="font-size: 16px">x坐标 :${intersection[0].object.parent.position.x}</div>
                     <div style="font-size: 16px">y坐标 :${intersection[0].object.parent.position.y}</div>
                     <div style="font-size: 16px">z坐标 :${intersection[0].object.parent.position.z}</div>
                     <div style="font-size: 16px">当前状态 :${intersection[0].object.parent.check ? '选中' : '未选中'}</div>
        `
            // console.log(intersection[0].object.parent);
            nameBox.innerHTML = str;
            nameBox.style.display = "block";
            nameBox.style.top = this.mousePosition.y + 'px'; // 跟随鼠标的位置
            nameBox.style.left = this.mousePosition.x + 30 + 'px';
          } else {
            nameBox.style.display = "none";
          }

          this.controls.update(detal); // 更新控制器
          TWEEN.update(); // 补间动画


          this.render(); //  静态动画  可以将render写在chang里面

          if (this.flag) {
            this.camera.position.x = 800 * Math.cos(this.angle * Math.PI / 180);
            this.camera.position.z = 800 * Math.sin(this.angle * Math.PI / 180);
            this.camera.position.y = 1000;
            this.angle += 0.05;
            if (this.angle > 360) {
              this.angle = 0;
            }
          }
          // console.log(`调用.render时间间隔`,this.timeS*1000+'毫秒');
          this.timeS = 0;
        }
        // this.raycaster.setFromCamera(this.mouse, this.camera);
        // const intersection = this.raycaster.intersectObjects(this.itemList);
        // const nameBox = document.getElementById("name-box");
        // if (intersection.length > 0) {
        //   // 名称提示
        //   // console.log(intersection[0]);
        //   let str = `<div style="font-size: 18px;">名称 :${intersection[0].object.parent.name}</div>
        //              <div style="font-size: 16px">x坐标 :${intersection[0].object.parent.position.x}</div>
        //              <div style="font-size: 16px">y坐标 :${intersection[0].object.parent.position.y}</div>
        //              <div style="font-size: 16px">z坐标 :${intersection[0].object.parent.position.z}</div>
        //              <div style="font-size: 16px">当前状态 :${intersection[0].object.parent.check ? '选中' : '未选中'}</div>
        // `
        //   // console.log(intersection[0].object.parent);
        //   nameBox.innerHTML = str;
        //   nameBox.style.display = "block";
        //   nameBox.style.top = this.mousePosition.y + 'px'; // 跟随鼠标的位置
        //   nameBox.style.left = this.mousePosition.x + 30 + 'px';
        // } else {
        //   nameBox.style.display = "none";
        // }
        //
        // this.controls.update(detal); // 更新控制器
        // TWEEN.update(); // 补间动画
        //
        //
        // this.render(); //  静态动画  可以将render写在chang里面
        //
        // if (this.flag) {
        //   this.camera.position.x = 800 * Math.cos(this.angle * Math.PI / 180);
        //   this.camera.position.z = 800 * Math.sin(this.angle * Math.PI / 180);
        //   this.camera.position.y = 1000;
        //   this.angle += 0.05;
        //   if (this.angle > 360) {
        //     this.angle = 0;
        //   }
        // }

        this.req = requestAnimationFrame(this.animate);
      },
      render() {
        this.renderer.render(this.scene, this.camera);
      },
      addObjPic(val, name, x, y) {
        let self = this;
        self.flag = false;
        return new Promise(function (resolve, reject) {
          new GLTFLoader().setDRACOLoader(self.dracoLoader).load(
            `/static/model/${val}/${val}.glb`,
            (gltf) => {
              self.loadingInstance.close();

              let model = gltf.scene;

              // 获取组别的名字
              model.name = name;
              let scale = 0.02;
              model.scale.set(scale, scale, scale);
              // model.rotateX(-Math.PI / 2);//绕x轴旋转π/4
              model.position.set(x, "10", y);

              self.scene.add(model);

              self.itemList.push(...model.children);
              resolve(val);
            },
            (xhr) => {

              self.loadingInstance = Loading.service({
                fullscreen: true,
                text: '加载贴图模型中....',
                background: "rgba(31,86,185,0.25)"
              });
            },
            (error) => {
              // console.log(error);
              console.log('error');
              // called when loading has errors
              console.error('An error happened', error);
              reject('error')
            }
          );
        })

      },
      addObj(val, name, x, y) {
        let self = this;
        self.flag = false;
        self.animateList = [];
        // 加载楼房 压缩之后的gltf 要使用了DRACOLoader才可以加载
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("../../../static/draco/"); // 最后要加/
        dracoLoader.preload();

        new GLTFLoader().setDRACOLoader(dracoLoader).load(
          `/static/model/${val}/${val}.gltf`,
          (gltf) => {
            self.loadingInstance.close();

            let model = gltf.scene;

            // 获取组别的名字
            model.name = name;
            let scale = 0.2;
            model.scale.set(scale, scale, scale);
            model.rotateX(-Math.PI / 2);//绕x轴旋转π/4
            model.position.set(x, "10", y);

            self.scene.add(model);

            // 改变模型的材质，偏暗蓝且带透明
            const list = [...model.children];
            list.forEach(item => {
              self.change2BasicMat(item);
            });

            self.itemList.push(...model.children);
          },
          (xhr) => {

            self.loadingInstance = Loading.service({
              fullscreen: true,
              text: '加载模型中....',
              background: "rgba(31,86,185,0.25)"
            });
          },
          (error) => {
            // console.log(error);
            console.log('error');
            // called when loading has errors
            console.error('An error happened', error);
          }
        );

      },
      addObjPromisePic(val, name, x, y, z) {
        let self = this;
        return new Promise(function (resolve, reject) {
          new GLTFLoader().setDRACOLoader(self.dracoLoader).load(
            `/static/model/${val}/${val}.glb`,
            (gltf) => {
              let model = gltf.scene;
              // 获取组别的名字
              model.name = name;
              let scale = self.swithSize[val];
              // let scale = 0.03;
              model.scale.set(scale, scale, scale);
              // model.rotateX(-Math.PI / 2);//绕x轴旋转π/4
              model.position.set(x, z, y);
              self.scene.add(model);

              self.itemList.push(...model.children);

              resolve(val);
            },
            (xhr) => {
              // self.loadingInstance = Loading.service({
              //   fullscreen: true,
              //   text: '加载模型中....',
              //   background: "rgba(31,86,185,0.25)"
              // });
            },
            (error) => {
              reject('error');
            }
          );
        })
      },
      addObjPromise(val, name, x, y) {
        let self = this;
        return new Promise(function (resolve, reject) {
          new GLTFLoader().setDRACOLoader(self.dracoLoader).load(
            // `/static/model/${val}/${val}.gltf`,
            `/static/model/${val}/${val}.glb`,
            (gltf) => {
              let model = gltf.scene;
              // 获取组别的名字
              model.name = name;
              let scale = 0.2;
              model.scale.set(scale, scale, scale);
              model.rotateX(-Math.PI / 2);//绕x轴旋转π/4
              model.position.set(x, "10", y);
              self.scene.add(model);

              // 改变模型的材质，偏暗蓝且带透明
              const list = [...model.children];
              list.forEach(item => {
                self.change2BasicMat(item);
              });


              self.itemList.push(...model.children);

              resolve(val);
            },
            (xhr) => {
              // self.loadingInstance = Loading.service({
              //   fullscreen: true,
              //   text: '加载模型中....',
              //   background: "rgba(31,86,185,0.25)"
              // });
            },
            (error) => {
              reject('error');
            }
          );
        })
      },
      change2BasicMat(object3d) {
        let self = this;
        object3d.traverse(item => {
          if (item.material) {
            item.material = new THREE.MeshBasicMaterial({
              opacity: 0.6,
              color: 0x1f56b9,
              side: THREE.BackSide,
              transparent: true,
            });
          }
        });
      },
      animateCamera(p1, p2) {
        let self = this;
        self.controls.enabled = false;   //关闭控制器
        let tween = new TWEEN.Tween(p1).to(p2, 1000).easing(TWEEN.Easing.Cubic.InOut);
        tween.onUpdate(function () {
          self.camera.position.set(p1.x, p1.y, p1.z);
        });
        tween.onComplete(function () {
          self.controls.enabled = true;   ///开启控制器
        });
        tween.start();
      },
      animateMove(p1, p2, obj) {
        let self = this;
        self.controls.enabled = false;   //关闭控制器
        let tween = new TWEEN.Tween(p1).to(p2, 1000).easing(TWEEN.Easing.Cubic.InOut);
        tween.onUpdate(function () {
          obj.position.set(p1.x, p1.y, p1.z);
        });
        tween.onComplete(function () {
          self.controls.enabled = true;   ///开启控制器
        });
        tween.start();
      },
      change(val) {
        let self = this;
        for (let i = 0; i < this.options.length; i++) {
          if (this.options[i].value == val) {
            let obj = this.scene.getObjectByName(this.options[i].label);
            let res = this.getBound(obj);
            // console.log('-1');
            // console.log(obj);
            if (obj.position.x >= 0 && obj.position.z >= 0) {
              self.animateCamera(self.camera.position, {
                x: res.max.x + 50,
                y: res.max.y + 50,
                z: res.max.z + 50
              });
              // console.log("0");
            } else if (obj.position.x <= 0 && obj.position.z <= 0) {
              self.animateCamera(self.camera.position, {
                x: res.min.x - 50,
                y: res.max.y + 50,
                z: res.min.z - 50
              });
              // console.log("1");
            } else if (obj.position.x <= 0 && obj.position.z >= 0) {
              self.animateCamera(self.camera.position, {
                x: res.min.x - 50,
                y: res.max.y + 50,
                z: res.max.z + 50
              });
              // console.log("2");
            } else if (obj.position.x >= 0 && obj.position.z <= 0) {
              self.animateCamera(self.camera.position, {
                x: res.max.x + 50,
                y: res.max.y + 50,
                z: res.min.z - 50
              });
              // console.log("3");
            }
            break;
          }
        }
      },
      getBound(model) {
        let box = new THREE.Box3();
        let {max, min} = box.expandByObject(model);
        return {
          max,
          min
        }
      },
      hide() {
        this.show = false;
      }
    }
  }
</script>

<style scoped lang="less">
  #model /deep/ canvas {
    /*要修改元素的display，否则右侧会出现滚动条*/
    display: block;
  }

  #model {


    .fade-enter-active, .fade-leave-active { //指就是html中fade名称
      transition: opacity .1s; // 0.1s动画过渡的时间
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

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

    }

    .el-select {
      width: 100%;

    }

    .el-switch {
      display: flex;
      justify-content: center;

      /deep/ span {
        color: #303030;
        margin-left: 10px;
        margin-right: 10px;
      }

      /deep/ .is-active span {
        color: white;
      }
    }


    button {
      position: fixed;
      left: 200px;
      top: 10px;
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

  }
</style>
