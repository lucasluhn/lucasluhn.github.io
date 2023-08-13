import{_ as e,o as l,c as i,e as n}from"./app-add35868.js";const s={},a=n(`<p>一、什么是Rollup</p><p>Rollup是一个JavaScript模块打包器，它采用ES6模块语法，可以将多个模块打包成一个文件，以减少HTTP请求的数量，提高页面加载速度。与Webpack和Browserify等打包工具不同，Rollup专注于打包JavaScript库和组件，而不是应用程序。</p><p>二、Rollup的优点</p><ol><li><p>Tree shaking：Rollup可以通过静态分析代码，删除未使用的代码，从而减少打包后的文件大小。</p></li><li><p>ES6模块支持：Rollup支持ES6模块语法，可以更好地管理模块之间的依赖关系。</p></li><li><p>代码分割：Rollup可以将代码分割成多个文件，以便在需要时按需加载。</p></li><li><p>性能优化：Rollup的打包速度比Webpack和Browserify等打包工具更快。</p></li></ol><p>三、Rollup的安装和使用</p><ol><li>安装Rollup：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install rollup -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建一个JavaScript文件，例如index.js，然后编写代码：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { sum } from &#39;./math.js&#39;;

console.log(sum(1, 2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建一个math.js文件，然后编写代码：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function sum(a, b) {
  return a + b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>执行以下命令打包代码：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rollup index.js --file bundle.js --format iife
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，index.js是入口文件，bundle.js是打包后的文件名，iife是输出格式。</p><ol start="5"><li>在HTML文件中引入打包后的文件：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;bundle.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>四、Rollup的配置文件</p><p>Rollup支持使用配置文件来配置打包选项。创建一个名为rollup.config.js的文件，然后编写以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  input: &#39;index.js&#39;,
  output: {
    file: &#39;bundle.js&#39;,
    format: &#39;iife&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，input是入口文件，output是输出选项。</p><p>然后执行以下命令打包代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rollup -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-c选项表示使用配置文件。</p><p>五、Rollup插件</p><p>Rollup支持使用插件来扩展其功能。以下是一些常用的插件：</p><ol><li><p>rollup-plugin-babel：将ES6代码转换为ES5代码。</p></li><li><p>rollup-plugin-commonjs：将CommonJS模块转换为ES6模块。</p></li><li><p>rollup-plugin-node-resolve：解析模块路径，以便正确地处理依赖关系。</p></li><li><p>rollup-plugin-uglify：压缩打包后的代码。</p></li></ol><p>六、总结</p><p>Rollup是一个优秀的JavaScript模块打包器，它支持ES6模块语法、Tree shaking、代码分割等功能，可以帮助我们更好地管理JavaScript库和组件。同时，Rollup还支持使用配置文件和插件来扩展其功能。</p>`,28),d=[a];function t(p,r){return l(),i("div",null,d)}const o=e(s,[["render",t],["__file","rollup.html.vue"]]);export{o as default};
