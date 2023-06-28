---
title: Three.js
categories:
 - 可视化
tags:
 - three.js
 - 学习笔记
date: 2023/06/19
---

一、什么是Three.js

1. Three.js是一个基于WebGL的JavaScript 3D库，可以用于创建各种3D场景和动画。

2. Three.js提供了丰富的3D对象和材质，可以轻松创建3D场景。

3. Three.js可以在所有支持WebGL的浏览器中运行，包括Chrome、Firefox、Safari、Edge等。

二、Three.js的基本概念

1. 场景（Scene）：Three.js中的场景是所有3D对象的容器，可以添加、删除和管理3D对象。

2. 相机（Camera）：相机定义了场景中的视角和投影方式，可以设置相机的位置、方向、视角等属性。

3. 渲染器（Renderer）：渲染器将场景中的3D对象渲染到屏幕上，可以设置渲染器的大小、背景色、阴影等属性。

4. 光源（Light）：光源用于照亮场景中的3D对象，可以设置光源的类型、颜色、强度等属性。

5. 材质（Material）：材质定义了3D对象的外观和质感，可以设置材质的颜色、纹理、透明度等属性。

6. 几何体（Geometry）：几何体定义了3D对象的形状和大小，可以创建各种基本几何体，如立方体、球体、圆柱体等。

7. 网格（Mesh）：网格是由几何体和材质组成的3D对象，可以设置网格的位置、旋转、缩放等属性。

三、Three.js的基本用法

1. 创建场景、相机和渲染器：

```javascript
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

2. 创建光源和材质：

```javascript
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);

var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
```

3. 创建几何体和网格：

```javascript
var geometry = new THREE.BoxGeometry(1, 1, 1);
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

4. 渲染场景：

```javascript
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```

四、Three.js的高级用法

1. 加载模型：可以使用Three.js提供的Loader加载各种3D模型，如OBJ、FBX、GLTF等。

2. 创建动画：可以使用Three.js提供的AnimationMixer创建动画，并使用AnimationClip定义动画关键帧。

3. 创建粒子系统：可以使用Three.js提供的ParticleSystem创建各种粒子效果，如雨、雪、火等。

4. 创建后期处理效果：可以使用Three.js提供的EffectComposer创建各种后期处理效果，如模糊、辉光、色调映射等。

五、总结

Three.js是一个功能强大的JavaScript 3D库，可以用于创建各种3D场景和动画。通过学习Three.js的基本概念和用法，可以轻松创建简单的3D场景和动画。同时，Three.js还提供了丰富的高级功能，可以创建更加复杂和精美的3D效果。