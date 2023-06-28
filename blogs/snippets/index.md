---
title: 代码片段记录
categories:
 - 记录
tags:
 - 代码记录
date: 2023/06/19
---
## 正则表达式收集

### 校验链接

```javascript
/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
```

### 校验字符串大小写、字母

```javascript
/^[a-z]+$/; // 全小写字母
/^[A-Z]+$/; // 全大写字母
/^[A-Za-z]+$/; // 全为字母
```

### 校验邮箱

```javascript
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

### 校验手机号

```javascript
/^[1][0-9][0-9]{9}$/
```

### 校验金额格式

```javascript
/^(([1-9]\d*)|\d)(\.\d{1,2})?$/
```

## 防抖函数

```javascript
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 * @tips 使用的时候注意不要用箭头函数，会丢失this的绑定
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
```

## el-form校验失败滚动到对应位置

```javascript
// el-form校验失败滚动到对应的错误位置
export function elFormErrorScrollIntoView() {
  const element = document.querySelectorAll('.el-form-item__error')[0]
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}

// 使用
this.$nextTick(() => {
  elFormErrorScrollIntoView()
})
```

## 封装localstorage、sessionstorage

```javascript
export const LocalStorage = {
  set(key, val, expiration = 604800000) {
    if (!val) {
      this.remove(key)
      return
    }
    // 离线缓存默认存储有效期为7天
    expiration = expiration > 0 ? Date.now() + expiration : 0
    const obj = {
      key,
      value: val,
      expiration
    }
    localStorage.setItem(key, JSON.stringify(obj))
  },
  get(key) {
    const obj = JSON.parse(localStorage.getItem(key))
    if (!obj) {
      return null
    }
    if (!obj.expiration) {
      return obj.value
    }
    return Date.now() <= obj.expiration ? obj.value : null
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}

export const SessionStorage = {
  set(key, val) {
    if (!val) {
      this.remove(key)
      return
    }
    const obj = {
      key,
      value: val
    }
    sessionStorage.setItem(key, JSON.stringify(obj))
  },
  get(key) {
    const obj = JSON.parse(sessionStorage.getItem(key))
    if (!obj) {
      return null
    }
    return obj.value
  },
  remove(key) {
    sessionStorage.removeItem(key)
  },
  clear() {
    sessionStorage.clear()
  }
}
```

## 原生JS实现滚动条滚动到某个指定位置

```javascript
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }
})()

/**
 * Because it's so fucking difficult to detect the scrolling element, just move them all
 * @param {number} amount
 */
function move(amount) {
  document.documentElement.scrollTop = amount
  document.body.parentNode.scrollTop = amount
  document.body.scrollTop = amount
}

function position() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
}

/**
 * @param {number} to
 * @param {number} duration
 * @param {Function} callback
 */
export function scrollTo(to, duration, callback) {
  const start = position()
  const change = to - start
  const increment = 20
  let currentTime = 0
  duration = (typeof (duration) === 'undefined') ? 500 : duration
  var animateScroll = function() {
    // increment the time
    currentTime += increment
    // find the value with the quadratic in-out easing function
    var val = Math.easeInOutQuad(currentTime, start, change, duration)
    // move the document.body
    move(val)
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll)
    } else {
      if (callback && typeof (callback) === 'function') {
        // the animation is done so lets callback
        callback()
      }
    }
  }
  animateScroll()
}
```

## 封装axios

```javascript
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
```

## 时间转换为字符串

```javascript
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}
```

## 时间间隔字符串显示

```javascript
/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
```

## 获取url里的参数

```javascript
/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
```

## 原生JavaScript操作元素class

```javascript
/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
```

## 深克隆

```javascript
/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
```

## 随机字符串

```javascript
/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}
```
## 自适应移动端不同设备宽度
```javascript
(function (doc, win) {
  let docEl = doc.documentElement;
  const isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1;
  dpr = window.top === window.self ? dpr : 1; //被iframe引用时，禁止缩放
  scale = 1;
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  docEl.dataset.dpr = dpr;
  let metaEl = doc.createElement('meta');
  metaEl.name = 'viewport';
  metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + (scale * dpr) + ', minimum-scale=' + Math.ceil((scale / dpr));
  docEl.firstElementChild.appendChild(metaEl);
  let recalc = function () {
    let width = docEl.clientWidth;
    if (width / dpr > 375) {
      width = 375 * dpr;
    }
    let winWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 乘以10，px : rem = 10 : 1
    if (winWidth >= 768) {
      // 处理pad及以上设备，成比例放大
      // docEl.style.fontSize = winWidth * 10 / 375 + 'px';
      // pad及以上设备，不成比例放大
      docEl.style.fontSize = '10px';
    } else {
      docEl.style.fontSize = 10 * (width / 375) + 'px';
    }


  };
  recalc()
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
})(document, window)
```

## 颜色rgb转16进制
```javascript
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    
rgbToHex(0, 51, 255); 
```


## vue-cli 发布静态资源到阿里云oss存储，静态资源全走cdn
- oss.config.js


```javascript
module.exports = {
    accessKeyId: 'xxxxx',
    accessKeySecret: 'xxxxxx',
    region: 'oss-cn-xxxxx',
    bucket: 'xxxxx'
}
```

- vue.config.js

```javascript
// https://www.npmjs.com/package/aliyun-oss-webpack-plugin
const AliyunOSSPlugin = require("aliyun-oss-webpack-plugin")
const ossConfig = require('./oss.config.js')

chainWebpack(config) {
  config
    .when(process.env.NODE_ENV !== 'development',
      config => {
        config
          .plugin('deployStaticToOss')
          .use(AliyunOSSPlugin)
          .tap(() => [
            {
              ...ossConfig,
              headers: {
                'Cache-Control': 'max-age=36000'
              }
            }
          ])
      }
    )
}
    
```

## vue-cli 设置图片小于某一大小，编译为base64编码，减少页面图片请求

```javascript
chainWebpack(config) {
  config
    .when(process.env.NODE_ENV !== 'development',
      config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 20000 }))
    )
}

```

## React Native 上传组件
```javascript
import { Button, Icon, Image, Text } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { getAliyunAuthorization } from '../api';
import { createUniqueString } from '../utils';
import theme from '../utils/theme';
import ImageCropPicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import AliyunOSS from 'aliyun-oss-react-native-abu';
import Toast from 'react-native-root-toast';

AliyunOSS.enableDevMode();

const configuration = {
  maxRetryCount: 3,
  timeoutIntervalForRequest: 30,
  timeoutIntervalForResource: 24 * 60 * 60,
};
const endPoint = 'oss-cn-shanghai.aliyuncs.com';
const bucketName = 'sanzhiyang-index';
export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileType: props.fileType || 'image',
      fileList: [], // 文件列表
      moduleName: props.moduleName || 'zxr-app', // 文件存放的文件夹名称 按模块存放文件文件，建议传
      limit: props.limit || 1, // 最多上传数量
      multiple: props.multiple || false, // 是否可以多选文件
      openType: props.openType || 'picker', // 选择文件方式 picker = 通过相册, camera = 通过相机
      disabled: props.disabled || false, // 禁用上传
      securityToken: null, // 阿里云初始化参数
      accessKeyId: null, // 阿里云初始化参数
      accessKeySecret: null, // 阿里云初始化参数
      expiration: null, // 阿里云初始化参数
      uploading: false, // 是否处在上传中
      value: props.value || '', // 需要回显的文件，字符串：多张文件用逗号分隔
      errorMessage: props.errorMessage || '' // 表单验证的错误提示语
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      let arr = [];
      if (this.props.value && typeof this.props.value === 'string') {
        arr = this.props.value.split(',').map(uri => ({ uri }));
      }
      this.setState({
        fileList: arr,
        value: this.props.value,
      });
    }
    if (this.props.limit !== prevProps.limit) {
      this.setState({
        limit: this.props.limit
      })
    }
    if (this.props.fileType !== prevProps.fileType) {
      this.setState({
        fileList: [],
        fileType: this.props.fileType,
        uploading: false,
        disabled: false
      }, () => this.uploadSuccess());
    }

    if (this.props.errorMessage !== prevProps.errorMessage) {
      this.setState({
        errorMessage: this.props.errorMessage
      });
    }
  }

  // 文件数组变化传到父组件
  uploadSuccess() {
    if (this.props.onChange) {
      // 在外面传入一个onChange函数进来在父组件获取当前上传成功的文件
      // 直接转换为多张文件用逗号连接的字符串给父组件，可以直接赋值
      const str = this.state.fileList.map(file => file.uri).join(',');
      this.props.onChange(str || null);
    }
  }

  // 上传阿里云
  async upload(files) {
    await this.initAliyunOSS();
    return Promise.all(files.map(f => this.singleUpload(f)));
  }

  // 初始化阿里云上传控件
  async initAliyunOSS() {
    const { securityToken, accessKeyId, accessKeySecret, expiration } =
      this.state;
    if (!securityToken || new Date(expiration).getTime() <= Date.now()) {
      const r = await getAliyunAuthorization();
      const response = r.data;
      AliyunOSS.initWithSecurityToken(
        response.securityToken,
        response.accessKeyId,
        response.accessKeySecret,
        endPoint,
        configuration,
      );
      this.setState({
        securityToken: response.securityToken,
        accessKeyId: response.accessKeyId,
        accessKeySecret: response.accessKeySecret,
        expiration: response.expiration,
      });
    } else {
      AliyunOSS.initWithSecurityToken(
        securityToken,
        accessKeyId,
        accessKeySecret,
        endPoint,
        configuration,
      );
    }
  }

  // 单张文件上传
  singleUpload(file) {
    const { moduleName, fileType } = this.state;
    let name = null;
    let fileUrl = null;
    if (fileType === 'image') {
      name = file.path;
    } else {
      name = file.name;
      if (Platform.OS === 'android' && !file.name && (file.type === 'application/pdf' || file.type === null)) {
        name = [createUniqueString(), file.type ? 'pdf' : 'ofd'].join('.');
      }
    }
    const fileExtention = name.substring(name.lastIndexOf('.') + 1);
    const fileName = [createUniqueString(), fileExtention].join('.');
    if (fileType === 'image') {
      fileUrl = file.path;
    } else {
      fileUrl = file.fileCopyUri;
      if (Platform.OS === 'android') {
        fileUrl = fileUrl.replace('file:/', 'file:///');
      }
    }
    return AliyunOSS.asyncUpload(
      bucketName,
      `${moduleName}/${fileName}`,
      decodeURIComponent(fileUrl),
    )
      .then(r => {
        const uri = `https://${bucketName}.${endPoint}/${moduleName}/${fileName}`;
        return Promise.resolve({ uri, name: fileName });
      })
      .catch(e => {
        return Promise.reject('fail');
      });
  }

  // 删除文件
  onDeleteFile(file) {
    const { fileList } = this.state;
    const idx = fileList.findIndex(f => f.uri === file.uri);
    fileList.splice(idx, 1);
    this.setState({
      fileList,
    });
    Toast.show('删除成功');
    this.uploadSuccess();
  }

  handleButtonPress() {
    const { openType, multiple, disabled, uploading, limit, fileList, fileType } =
      this.state;
    // 禁用或上传中的状态点击按钮不操作
    if (disabled || uploading) {
      return false;
    }
    if (fileType === 'image') {
      // TODO：选择相册方式支持多种，目前只用这一种，代码为后续预留
      if (openType === 'picker') {
        ImageCropPicker.openPicker({
          multiple,
        }).then(images => {
          const imgs = multiple ? images : [images];
          const length = imgs.length + fileList.length;
          if (length > limit) {
            Toast.show(`最多上传${limit}张文件`);
            return Promise.resolve();
          }
          this.setState({
            uploading: true,
          });
          this.upload(imgs).then(r => {
            Toast.show('图片上传成功');
            this.setState({
              uploading: false,
              fileList: this.state.fileList.concat(r),
            });
            this.uploadSuccess();
          });
        });
      }
    } else {
      DocumentPicker.pick({
        multiple,
        type: [DocumentPicker.types.allFiles],
        copyTo: "cachesDirectory" || "documentDirectory",
      }).then(res => {
        const types = ['pdf', 'ofd', 'PDF', 'OFD', 'application/pdf'];
        const extentions = res.map(r => {
          if (r.name) {
            return r.name.substring(r.name.lastIndexOf('.') + 1)
          } else {
            return r.type || 'ofd'
          }
        });
        if (extentions.some(ext => !types.includes(ext))) {
          Toast.show('电子发票文件上传只支持PDF或OFD格式');
          return Promise.resolve();
        }
        if (res.length + fileList.length > limit) {
          Toast.show(`最多上传${limit}个文件`);
          return Promise.resolve();
        }
        this.setState({
          uploading: true
        });
        this.upload(res).then(r => {
          Toast.show('文件上传成功');
          this.setState({
            uploading: false,
            fileList: this.state.fileList.concat(r),
          });
          this.uploadSuccess();
        });
      });
    }
  }

  render() {
    const { fileList, limit, disabled, errorMessage, fileType } = this.state;
    return (
      <View>
        <View style={fileType === 'image' ? styles.uploadContainer : styles.uploadContainer2}>
          {fileType === 'image' ? fileList.map(file => (
            <View style={styles.uploadedWrap} key={file.uri}>
              <Image
                source={file}
                resizeMode="cover"
                style={styles.uploadedImage}
              />
              {disabled ? null : (
                <Icon
                  onPress={() => this.onDeleteFile(file)}
                  containerStyle={styles.uploadedIcon}
                  color={theme.colors.white}
                  name="closecircleo"
                  type="antdesign"
                  size={20}
                />
              )}
            </View>
          )) : fileList.map(file => (
            <View style={styles.fileWrap} key={file.uri}>
              <Text numberOfLines={1} style={{color: theme.colors.grey1, fontSize: 13}}>{file.name}</Text>
              {disabled ? null : (
                <Icon
                  onPress={() => this.onDeleteFile(file)}
                  name="closecircleo"
                  type="antdesign"
                  size={14}
                  color={theme.colors.error}
                />
              )}
            </View>
          ))}
          {fileList.length < limit ? (fileType === 'image' ? (
            <Button
              onPress={() => this.handleButtonPress()}
              disabled={disabled}
              type="outline"
              title="上传图片"
              buttonStyle={styles.uploadBtn}
              titleStyle={styles.uploadBtnTitle}
              iconPosition="top"
              icon={() => (
                <Icon
                  name="clouduploado"
                  type="antdesign"
                  color={theme.colors.primary}
                />
              )}
            />
          ) : <Button
                icon={() => (
                  <Icon
                    name="clouduploado"
                    type="antdesign"
                    color={theme.colors.white}
                    size={14}
                  />
                )}
                onPress={() => this.handleButtonPress()}
                disabled={disabled}
                titleStyle={{ fontSize: 14 }}
                title="上传文件"
              />
            ) : null}
        </View>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  uploadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  uploadContainer2: {
    flexDirection: 'column'
  },
  uploadBtn: {
    width: 100,
    height: 100,
    borderStyle: 'dotted',
    backgroundColor: 'rgba(255, 149, 0, 0.06)',
  },
  uploadBtnTitle: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  uploadedWrap: {
    width: 100,
    height: 100,
    borderRadius: 8,
    position: 'relative',
    marginRight: 10,
    marginBottom: 10,
  },
  uploadedIcon: {
    position: 'absolute',
    right: 5,
    top: 2,
    zIndex: 3,
  },
  errorText: {
    fontSize: 10,
    color: theme.colors.error,
    marginTop: 10,
    paddingLeft: 5
  },
  fileWrap: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: theme.colors.grey4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150
  }
});
```

## NPM & YARN设置下载源

```shell
npm config get registry
npm config set registry https://registry.npm.taobao.org
yarn config get registry
yarn config set registry https://registry.npm.taobao.org
```

## 展开树形结构

```javascript
function expandTree = (expandedKeys) => {
  const result: TreeNode[] = [];
  const stack: TreeNode[] = [];
  for (let i = tree.value.length - 1; i >= 0; i--) {
    stack.push(tree.value[i]);
  }
  while (stack.length) {
    const topNode: TreeNode | undefined = stack.pop();
    if (!topNode) continue;
    result.push(topNode);
    if (expandedKeys.value.has(topNode.key)) {
      for (let i = topNode.children.length - 1; i >= 0; i--) {
        stack.push(topNode.children[i]);
      }
    }
  }
  return result;
}
```

## Vue3 封装通用列表hook

- utils/hooks.js
```javascript
import { reactive, toRefs, watch } from 'vue'

/**
 * @param apiCall Function 必传 请求数据的api方法
 * @param extraParams Object 非必传 默认为 {} 页面筛选的参数或请求数据的额外参数
 * @param options Object 非必传 默认为 { autoSearch: true }
		* @param pagination Object 非必传 默认为 {} 页面分页需要定制的内容 常见为pageSizes
		* @param dataFilter Function 非必传 处理表格数据的函数 函数的返回值是处理好的表格数据
		* @param autoSearch Boolean 非必传 默认为true 是否需要在初始化时默认执行获取表格数据的方法
		* @param formHandle Function 非必传 处理除分页数据外的请求数据 返回值为处理好的数据
		* @param callBack Function 非必传 回调函数 目前已知待报价页面特殊场景需要
 */
export function elTableHook(apiCall, extraParams = {}, options = {}) {
	const opts = Object.assign({
		autoSearch: true
	}, options)

	const state = reactive({
		tableData: [],  // 表格数据
		pagination: {
			currentPage: 1,
			nextPage: 1,
			offset: 0,
			pageSize: 10,
			prePage: 1,
			totalCount: 0,
			totalPage: 0,
			pageSizes: [10, 20, 30, 40, 100]
		}, // 分页常用数据及后台分页数据返回拼接
		tableLoading: false, // 表格loading状态
	})

	state.pagination = Object.assign(state.pagination, opts.pagination || {})

	watch(() => extraParams, _ => {
		state.pagination.currentPage = 1
	}, { deep: true })

	// 获取表格数据
	function search() {
		const extra = (opts.formHandle && typeof opts.formHandle === 'function') ? opts.formHandle(extraParams) : extraParams
		// 拼接请求参数
		const params = Object.assign({
			page: {
				pageNo: state.pagination.currentPage,
				pageSize: state.pagination.pageSize
			}
		}, extra)
		state.tableLoading = true
		apiCall(params).then(r => {
			const response = r.data
			state.tableData = (opts.dataFilter && typeof opts.dataFilter === 'function') ? opts.dataFilter(response.dataList) : response.dataList
			state.pagination = Object.assign(state.pagination, response.page)
		}).finally(_ => {
			state.tableLoading = false
			opts.callBack && opts.callBack(state.tableData)
		})
	}

	// 分页切换操作
	function handleSizeChange(val) {
		state.pagination.pageSize = val
		search()
	}

	function handleCurrentChange(val) {
		state.pagination.currentPage = val
		search()
	}

	opts.autoSearch && search()


	return {
		...toRefs(state),
		search,
		handleSizeChange,
		handleCurrentChange,

	}
}
```
- example.vue
```vue
<template>
  <div>
    <el-table :data="tableData" :loading="tableLoading">
      <!-- ...some codes -->
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :pager-count="5" :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize" small layout="total, prev, pager, next,sizes ,jumper" :total="pagination.totalCount">
  </div>
</template>
<script>
import { apiHandle } from '@/api/example.js'
import { elTableHook } from '@/utils/hooks.js'
export default {
  setup(props, ctx) {

    const searchParams = ref({})
    const {
      tableData,
      tableLoading,
      pagination,
      search,
      handleSizeChange,
      handleCurrentChange
    } = elTableHook(apiHandle, searchParams, {
      dataFilter: data => {
        return data
      }
    })

    // ... other codes

    return {
      tableData,
      tableLoading,
      pagination,
      search,
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>
```
