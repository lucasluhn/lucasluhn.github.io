import{_ as i,r as c,o as p,c as o,a as s,d as n,b as e,e as t}from"./app-add35868.js";const l={},d={href:"https://github.com/fex-team/styleguide/blob/master/css.md",target:"_blank",rel:"noopener noreferrer"},r=s("br",null,null,-1),u=t(`<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1 前言</h2><p>CSS作为网页样式的描述语言，在百度一直有着广泛的应用。本文档的目标是使CSS代码风格保持一致，容易被理解和被维护。</p><p>虽然本文档是针对CSS设计的，但是在使用各种CSS的预编译器(如less、sass、stylus等)时，适用的部分也应尽量遵循本文档的约定。</p><h2 id="_2-代码风格" tabindex="-1"><a class="header-anchor" href="#_2-代码风格" aria-hidden="true">#</a> 2 代码风格</h2><h3 id="_2-1-文件" tabindex="-1"><a class="header-anchor" href="#_2-1-文件" aria-hidden="true">#</a> 2.1 文件</h3><h4 id="建议-css-文件使用无-bom-的-utf-8-编码。" tabindex="-1"><a class="header-anchor" href="#建议-css-文件使用无-bom-的-utf-8-编码。" aria-hidden="true">#</a> [建议] <code>CSS</code> 文件使用无 <code>BOM</code> 的 <code>UTF-8</code> 编码。</h4><p>解释：</p><p>UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。</p><h3 id="_2-2-缩进" tabindex="-1"><a class="header-anchor" href="#_2-2-缩进" aria-hidden="true">#</a> 2.2 缩进</h3><h4 id="强制-使用-4-个空格做为一个缩进层级-不允许使用-2-个空格-或-tab-字符。" tabindex="-1"><a class="header-anchor" href="#强制-使用-4-个空格做为一个缩进层级-不允许使用-2-个空格-或-tab-字符。" aria-hidden="true">#</a> [强制] 使用 <code>4</code> 个空格做为一个缩进层级，不允许使用 <code>2</code> 个空格 或 <code>tab</code> 字符。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.selector</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-空格" tabindex="-1"><a class="header-anchor" href="#_2-3-空格" aria-hidden="true">#</a> 2.3 空格</h3><h4 id="强制-选择器-与-之间必须包含空格。" tabindex="-1"><a class="header-anchor" href="#强制-选择器-与-之间必须包含空格。" aria-hidden="true">#</a> [强制] <code>选择器</code> 与 <code>{</code> 之间必须包含空格。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.selector</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-属性名-与之后的-之间不允许包含空格-与-属性值-之间必须包含空格。" tabindex="-1"><a class="header-anchor" href="#强制-属性名-与之后的-之间不允许包含空格-与-属性值-之间必须包含空格。" aria-hidden="true">#</a> [强制] <code>属性名</code> 与之后的 <code>:</code> 之间不允许包含空格， <code>:</code> 与 <code>属性值</code> 之间必须包含空格。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="强制-列表型属性值-书写在单行时-后必须跟一个空格。" tabindex="-1"><a class="header-anchor" href="#强制-列表型属性值-书写在单行时-后必须跟一个空格。" aria-hidden="true">#</a> [强制] <code>列表型属性值</code> 书写在单行时，<code>,</code> 后必须跟一个空格。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-行长度" tabindex="-1"><a class="header-anchor" href="#_2-4-行长度" aria-hidden="true">#</a> 2.4 行长度</h3><h4 id="强制-每行不得超过-120-个字符-除非单行不可分割。" tabindex="-1"><a class="header-anchor" href="#强制-每行不得超过-120-个字符-除非单行不可分割。" aria-hidden="true">#</a> [强制] 每行不得超过 <code>120</code> 个字符，除非单行不可分割。</h4><p>解释：</p><p>常见不可分割的场景为URL超长。</p><h4 id="建议-对于超长的样式-在样式值的-空格-处或-后换行-建议按逻辑分组。" tabindex="-1"><a class="header-anchor" href="#建议-对于超长的样式-在样式值的-空格-处或-后换行-建议按逻辑分组。" aria-hidden="true">#</a> [建议] 对于超长的样式，在样式值的 <code>空格</code> 处或 <code>,</code> 后换行，建议按逻辑分组。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 不同属性值按逻辑分组 */</span>
<span class="token property">background</span><span class="token punctuation">:</span>
    transparent <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>aVeryVeryVeryLongUrlIsPlacedHere<span class="token punctuation">)</span></span>
    no-repeat 0 0<span class="token punctuation">;</span>

<span class="token comment">/* 可重复多次的属性，每次重复一行 */</span>
<span class="token property">background-image</span><span class="token punctuation">:</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>aVeryVeryVeryLongUrlIsPlacedHere<span class="token punctuation">)</span></span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>anotherVeryVeryVeryLongUrlIsPlacedHere<span class="token punctuation">)</span></span><span class="token punctuation">;</span>

<span class="token comment">/* 类似函数的属性值可以根据函数调用的缩进进行 */</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>
    linear<span class="token punctuation">,</span>
    left bottom<span class="token punctuation">,</span>
    left top<span class="token punctuation">,</span>
    <span class="token function">color-stop</span><span class="token punctuation">(</span>0.04<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>88<span class="token punctuation">,</span>94<span class="token punctuation">,</span>124<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">color-stop</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>115<span class="token punctuation">,</span>123<span class="token punctuation">,</span>162<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-选择器" tabindex="-1"><a class="header-anchor" href="#_2-5-选择器" aria-hidden="true">#</a> 2.5 选择器</h3><h4 id="强制-当一个-rule-包含多个-selector-时-每个选择器声明必须独占一行。" tabindex="-1"><a class="header-anchor" href="#强制-当一个-rule-包含多个-selector-时-每个选择器声明必须独占一行。" aria-hidden="true">#</a> [强制] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.post,
.page,
.comment</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.post, .page, .comment</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-、-、-选择器的两边各保留一个空格。" tabindex="-1"><a class="header-anchor" href="#强制-、-、-选择器的两边各保留一个空格。" aria-hidden="true">#</a> [强制] <code>&gt;</code>、<code>+</code>、<code>~</code> 选择器的两边各保留一个空格。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">main &gt; nav</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">label + input</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input:checked ~ button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #69C<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">main&gt;nav</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">label+input</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input:checked~button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #69C<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-属性选择器中的值必须用双引号包围。" tabindex="-1"><a class="header-anchor" href="#强制-属性选择器中的值必须用双引号包围。" aria-hidden="true">#</a> [强制] 属性选择器中的值必须用双引号包围。</h4><p>解释：</p><p>不允许使用单引号，不允许不使用引号。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">article[character=&quot;juliet&quot;]</span> <span class="token punctuation">{</span>
    <span class="token property">voice-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Vivien Leigh&quot;</span><span class="token punctuation">,</span> victoria<span class="token punctuation">,</span> female
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">article[character=&#39;juliet&#39;]</span> <span class="token punctuation">{</span>
    <span class="token property">voice-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Vivien Leigh&quot;</span><span class="token punctuation">,</span> victoria<span class="token punctuation">,</span> female
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-属性" tabindex="-1"><a class="header-anchor" href="#_2-6-属性" aria-hidden="true">#</a> 2.6 属性</h3><h4 id="强制-属性定义必须另起一行。" tabindex="-1"><a class="header-anchor" href="#强制-属性定义必须另起一行。" aria-hidden="true">#</a> [强制] 属性定义必须另起一行。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-属性定义后必须以分号结尾。" tabindex="-1"><a class="header-anchor" href="#强制-属性定义后必须以分号结尾。" aria-hidden="true">#</a> [强制] 属性定义后必须以分号结尾。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-通用" tabindex="-1"><a class="header-anchor" href="#_3-通用" aria-hidden="true">#</a> 3 通用</h2><h3 id="_3-1-选择器" tabindex="-1"><a class="header-anchor" href="#_3-1-选择器" aria-hidden="true">#</a> 3.1 选择器</h3><h4 id="强制-如无必要-不得为-id、class-选择器添加类型选择器进行限定。" tabindex="-1"><a class="header-anchor" href="#强制-如无必要-不得为-id、class-选择器添加类型选择器进行限定。" aria-hidden="true">#</a> [强制] 如无必要，不得为 <code>id</code>、<code>class</code> 选择器添加类型选择器进行限定。</h4><p>解释：</p><p>在性能和维护性上，都有一定的影响。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">#error,
.danger-message</span> <span class="token punctuation">{</span>
    <span class="token property">font-color</span><span class="token punctuation">:</span> #c00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">dialog#error,
p.danger-message</span> <span class="token punctuation">{</span>
    <span class="token property">font-color</span><span class="token punctuation">:</span> #c00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建议-选择器的嵌套层级应不大于-3-级-位置靠后的限定条件应尽可能精确。" tabindex="-1"><a class="header-anchor" href="#建议-选择器的嵌套层级应不大于-3-级-位置靠后的限定条件应尽可能精确。" aria-hidden="true">#</a> [建议] 选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">#username input</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.comment .avatar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.page .header .login #username input</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.comment div *</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-属性缩写" tabindex="-1"><a class="header-anchor" href="#_3-2-属性缩写" aria-hidden="true">#</a> 3.2 属性缩写</h3><h4 id="建议-在可以使用缩写的情况下-尽量使用属性缩写。" tabindex="-1"><a class="header-anchor" href="#建议-在可以使用缩写的情况下-尽量使用属性缩写。" aria-hidden="true">#</a> [建议] 在可以使用缩写的情况下，尽量使用属性缩写。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.post</span> <span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> 12px/1.5 arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.post</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建议-使用-border-margin-padding-等缩写时-应注意隐含值对实际数值的影响-确实需要设置多个方向的值时才使用缩写。" tabindex="-1"><a class="header-anchor" href="#建议-使用-border-margin-padding-等缩写时-应注意隐含值对实际数值的影响-确实需要设置多个方向的值时才使用缩写。" aria-hidden="true">#</a> [建议] 使用 <code>border</code> / <code>margin</code> / <code>padding</code> 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。</h4><p>解释：</p><p>border / margin / padding 等缩写会同时设置多个属性的值，容易覆盖不需要覆盖的设定。如某些方向需要继承其他声明的值，则应该分开设置。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* centering &lt;article class=&quot;page&quot;&gt; horizontally and highlight featured ones */</span>
<span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.page</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.featured</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #69c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.page</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px auto<span class="token punctuation">;</span> <span class="token comment">/* introducing redundancy */</span>
<span class="token punctuation">}</span>

<span class="token selector">.featured</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #69c<span class="token punctuation">;</span> <span class="token comment">/* introducing redundancy */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-属性书写顺序" tabindex="-1"><a class="header-anchor" href="#_3-3-属性书写顺序" aria-hidden="true">#</a> 3.3 属性书写顺序</h3><h4 id="建议-同一-rule-set-下的属性在书写时-应按功能进行分组-并以-formatting-model-布局方式、位置-box-model-尺寸-typographic-文本相关-visual-视觉效果-的顺序书写-以提高代码的可读性。" tabindex="-1"><a class="header-anchor" href="#建议-同一-rule-set-下的属性在书写时-应按功能进行分组-并以-formatting-model-布局方式、位置-box-model-尺寸-typographic-文本相关-visual-视觉效果-的顺序书写-以提高代码的可读性。" aria-hidden="true">#</a> [建议] 同一 rule set 下的属性在书写时，应按功能进行分组，并以 <strong>Formatting Model（布局方式、位置） &gt; Box Model（尺寸） &gt; Typographic（文本相关） &gt; Visual（视觉效果）</strong> 的顺序书写，以提高代码的可读性。</h4><p>解释：</p><ul><li>Formatting Model 相关属性包括：<code>position</code> / <code>top</code> / <code>right</code> / <code>bottom</code> / <code>left</code> / <code>float</code> / <code>display</code> / <code>overflow</code> 等</li><li>Box Model 相关属性包括：<code>border</code> / <code>margin</code> / <code>padding</code> / <code>width</code> / <code>height</code> 等</li><li>Typographic 相关属性包括：<code>font</code> / <code>line-height</code> / <code>text-align</code> / <code>word-wrap</code> 等</li><li>Visual 相关属性包括：<code>background</code> / <code>color</code> / <code>transition</code> / <code>list-style</code> 等</li></ul><p>另外，如果包含 <code>content</code> 属性，应放在最前面。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
    <span class="token comment">/* formatting model: positioning schemes / offsets / z-indexes / display / ...  */</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

    <span class="token comment">/* box model: sizes / margins / paddings / borders / ...  */</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>

    <span class="token comment">/* typographic: font / aligns / text styles / ... */</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>

    <span class="token comment">/* visual: colors / shadows / gradients / ... */</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> color 1s<span class="token punctuation">;</span>
       <span class="token property">-moz-transition</span><span class="token punctuation">:</span> color 1s<span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> color 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-清除浮动" tabindex="-1"><a class="header-anchor" href="#_3-4-清除浮动" aria-hidden="true">#</a> 3.4 清除浮动</h3><h4 id="建议-当元素需要撑起高度以包含内部的浮动元素时-通过对伪类设置-clear-或触发-bfc-的方式进行-clearfix。尽量不使用增加空标签的方式。" tabindex="-1"><a class="header-anchor" href="#建议-当元素需要撑起高度以包含内部的浮动元素时-通过对伪类设置-clear-或触发-bfc-的方式进行-clearfix。尽量不使用增加空标签的方式。" aria-hidden="true">#</a> [建议] 当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 <code>clear</code> 或触发 <code>BFC</code> 的方式进行 <code>clearfix</code>。尽量不使用增加空标签的方式。</h4><p>解释：</p><p>触发 BFC 的方式很多，常见的有：</p><ul><li>float 非 none</li><li>position 非 static</li><li>overflow 非 visible</li></ul>`,79),v={href:"http://nicolasgallagher.com/micro-clearfix-hack/",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>另需注意，对已经触发 BFC 的元素不需要再进行 clearfix。</p><h3 id="_3-5-important" tabindex="-1"><a class="header-anchor" href="#_3-5-important" aria-hidden="true">#</a> 3.5 !important</h3><h4 id="建议-尽量不使用-important-声明。" tabindex="-1"><a class="header-anchor" href="#建议-尽量不使用-important-声明。" aria-hidden="true">#</a> [建议] 尽量不使用 <code>!important</code> 声明。</h4><h4 id="建议-当需要强制指定样式且不允许任何场景覆盖时-通过标签内联和-important-定义样式。" tabindex="-1"><a class="header-anchor" href="#建议-当需要强制指定样式且不允许任何场景覆盖时-通过标签内联和-important-定义样式。" aria-hidden="true">#</a> [建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 <code>!important</code> 定义样式。</h4><p>解释：</p><p>必须注意的是，仅在设计上 <code>确实不允许任何其它场景覆盖样式</code> 时，才使用内联的 <code>!important</code> 样式。通常在第三方环境的应用中使用这种方案。下面的 z-index 章节是其中一个特殊场景的典型样例。</p><h3 id="_3-6-z-index" tabindex="-1"><a class="header-anchor" href="#_3-6-z-index" aria-hidden="true">#</a> 3.6 z-index</h3><h4 id="建议-将-z-index-进行分层-对文档流外绝对定位元素的视觉层级关系进行管理。" tabindex="-1"><a class="header-anchor" href="#建议-将-z-index-进行分层-对文档流外绝对定位元素的视觉层级关系进行管理。" aria-hidden="true">#</a> [建议] 将 <code>z-index</code> 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。</h4><p>解释：</p><p>同层的多个元素，如多个由用户输入触发的 Dialog，在该层级内使用相同的 <code>z-index</code> 或递增 <code>z-index</code>。</p><p>建议每层包含100个 <code>z-index</code> 来容纳足够的元素，如果每层元素较多，可以调整这个数值。</p><h4 id="建议-在可控环境下-期望显示在最上层的元素-z-index-指定为-999999。" tabindex="-1"><a class="header-anchor" href="#建议-在可控环境下-期望显示在最上层的元素-z-index-指定为-999999。" aria-hidden="true">#</a> [建议] 在可控环境下，期望显示在最上层的元素，<code>z-index</code> 指定为 <code>999999</code>。</h4><p>解释：</p><p>可控环境分成两种，一种是自身产品线环境；还有一种是可能会被其他产品线引用，但是不会被外部第三方的产品引用。</p><p>不建议取值为 <code>2147483647</code>。以便于自身产品线被其他产品线引用时，当遇到层级覆盖冲突的情况，留出向上调整的空间。</p><h4 id="建议-在第三方环境下-期望显示在最上层的元素-通过标签内联和-important-将-z-index-指定为-2147483647。" tabindex="-1"><a class="header-anchor" href="#建议-在第三方环境下-期望显示在最上层的元素-通过标签内联和-important-将-z-index-指定为-2147483647。" aria-hidden="true">#</a> [建议] 在第三方环境下，期望显示在最上层的元素，通过标签内联和 <code>!important</code>，将 <code>z-index</code> 指定为 <code>2147483647</code>。</h4><p>解释：</p><p>第三方环境对于开发者来说完全不可控。在第三方环境下的元素，为了保证元素不被其页面其他样式定义覆盖，需要采用此做法。</p><h2 id="_4-值与单位" tabindex="-1"><a class="header-anchor" href="#_4-值与单位" aria-hidden="true">#</a> 4 值与单位</h2><h3 id="_4-1-文本" tabindex="-1"><a class="header-anchor" href="#_4-1-文本" aria-hidden="true">#</a> 4.1 文本</h3><h4 id="强制-文本内容必须用双引号包围。" tabindex="-1"><a class="header-anchor" href="#强制-文本内容必须用双引号包围。" aria-hidden="true">#</a> [强制] 文本内容必须用双引号包围。</h4><p>解释：</p><p>文本类型的内容可能在选择器、属性值等内容中。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">html[lang|=&quot;zh&quot;] q:before</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;“&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html[lang|=&quot;zh&quot;] q:after</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;”&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">html[lang|=zh] q:before</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Microsoft YaHei&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;“&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html[lang|=zh] q:after</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;”&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-数值" tabindex="-1"><a class="header-anchor" href="#_4-2-数值" aria-hidden="true">#</a> 4.2 数值</h3><h4 id="强制-当数值为-0-1-之间的小数时-省略整数部分的-0。" tabindex="-1"><a class="header-anchor" href="#强制-当数值为-0-1-之间的小数时-省略整数部分的-0。" aria-hidden="true">#</a> [强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 <code>0</code>。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">panel</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> .8
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">panel</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.8
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-url" tabindex="-1"><a class="header-anchor" href="#_4-3-url" aria-hidden="true">#</a> 4.3 url()</h3><h4 id="强制-url-函数中的路径不加引号。" tabindex="-1"><a class="header-anchor" href="#强制-url-函数中的路径不加引号。" aria-hidden="true">#</a> [强制] <code>url()</code> 函数中的路径不加引号。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建议-url-函数中的绝对路径可省去协议名。" tabindex="-1"><a class="header-anchor" href="#建议-url-函数中的绝对路径可省去协议名。" aria-hidden="true">#</a> [建议] <code>url()</code> 函数中的绝对路径可省去协议名。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>//baidu.com/img/bg.png<span class="token punctuation">)</span></span> no-repeat 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-长度" tabindex="-1"><a class="header-anchor" href="#_4-4-长度" aria-hidden="true">#</a> 4.4 长度</h3><h4 id="强制-长度为-0-时须省略单位。-也只有长度单位可省" tabindex="-1"><a class="header-anchor" href="#强制-长度为-0-时须省略单位。-也只有长度单位可省" aria-hidden="true">#</a> [强制] 长度为 <code>0</code> 时须省略单位。 (也只有长度单位可省)</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0px 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-颜色" tabindex="-1"><a class="header-anchor" href="#_4-5-颜色" aria-hidden="true">#</a> 4.5 颜色</h3><h4 id="强制-rgb颜色值必须使用十六进制记号形式-rrggbb。不允许使用-rgb-。" tabindex="-1"><a class="header-anchor" href="#强制-rgb颜色值必须使用十六进制记号形式-rrggbb。不允许使用-rgb-。" aria-hidden="true">#</a> [强制] RGB颜色值必须使用十六进制记号形式 <code>#rrggbb</code>。不允许使用 <code>rgb()</code>。</h4><p>解释：</p><p>带有alpha的颜色信息可以使用 <code>rgba()</code>。使用 <code>rgba()</code> 时每个逗号后必须保留一个空格。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 128<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>128<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 128<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-颜色值可以缩写时-必须使用缩写形式。" tabindex="-1"><a class="header-anchor" href="#强制-颜色值可以缩写时-必须使用缩写形式。" aria-hidden="true">#</a> [强制] 颜色值可以缩写时，必须使用缩写形式。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #aca<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #aaccaa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-颜色值不允许使用命名色值。" tabindex="-1"><a class="header-anchor" href="#强制-颜色值不允许使用命名色值。" aria-hidden="true">#</a> [强制] 颜色值不允许使用命名色值。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #90ee90<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建议-颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。" tabindex="-1"><a class="header-anchor" href="#建议-颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。" aria-hidden="true">#</a> [建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #aca<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #90ee90<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ACA<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #90EE90<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.success</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ACA<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #90ee90<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-2d-位置" tabindex="-1"><a class="header-anchor" href="#_4-6-2d-位置" aria-hidden="true">#</a> 4.6 2D 位置</h3><h4 id="强制-必须同时给出水平和垂直方向的位置。" tabindex="-1"><a class="header-anchor" href="#强制-必须同时给出水平和垂直方向的位置。" aria-hidden="true">#</a> [强制] 必须同时给出水平和垂直方向的位置。</h4><p>解释：</p>`,58),k=s("code",null,"0% 0%",-1),h={href:"http://www.w3.org/TR/CSS21/colors.html#propdef-background-position",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> center top<span class="token punctuation">;</span> <span class="token comment">/* 50% 0% */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span> <span class="token comment">/* 50% 0% */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-文本编排" tabindex="-1"><a class="header-anchor" href="#_5-文本编排" aria-hidden="true">#</a> 5 文本编排</h2><h3 id="_5-1-字体族" tabindex="-1"><a class="header-anchor" href="#_5-1-字体族" aria-hidden="true">#</a> 5.1 字体族</h3><h4 id="强制-font-family-属性中的字体族名称应使用字体的英文-family-name-其中如有空格-须放置在引号中。" tabindex="-1"><a class="header-anchor" href="#强制-font-family-属性中的字体族名称应使用字体的英文-family-name-其中如有空格-须放置在引号中。" aria-hidden="true">#</a> [强制] <code>font-family</code> 属性中的字体族名称应使用字体的英文 <code>Family Name</code>，其中如有空格，须放置在引号中。</h4><p>解释：</p><p>所谓英文 Family Name，为字体文件的一个元数据，常见名称如下：</p><table><thead><tr><th>字体</th><th>操作系统</th><th>Family Name</th></tr></thead><tbody><tr><td>宋体 (中易宋体)</td><td>Windows</td><td>SimSun</td></tr><tr><td>黑体 (中易黑体)</td><td>Windows</td><td>SimHei</td></tr><tr><td>微软雅黑</td><td>Windows</td><td>Microsoft YaHei</td></tr><tr><td>微软正黑</td><td>Windows</td><td>Microsoft JhengHei</td></tr><tr><td>华文黑体</td><td>Mac/iOS</td><td>STHeiti</td></tr><tr><td>冬青黑体</td><td>Mac/iOS</td><td>Hiragino Sans GB</td></tr><tr><td>文泉驿正黑</td><td>Linux</td><td>WenQuanYi Zen Hei</td></tr><tr><td>文泉驿微米黑</td><td>Linux</td><td>WenQuanYi Micro Hei</td></tr></tbody></table><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-font-family-按「西文字体在前、中文字体在后」、「效果佳-质量高-更能满足需求-的字体在前、效果一般的字体在后」的顺序编写-最后必须指定一个通用字体族-serif-sans-serif-。" tabindex="-1"><a class="header-anchor" href="#强制-font-family-按「西文字体在前、中文字体在后」、「效果佳-质量高-更能满足需求-的字体在前、效果一般的字体在后」的顺序编写-最后必须指定一个通用字体族-serif-sans-serif-。" aria-hidden="true">#</a> [强制] <code>font-family</code> 按「西文字体在前、中文字体在后」、「效果佳 (质量高/更能满足需求) 的字体在前、效果一般的字体在后」的顺序编写，最后必须指定一个通用字体族( <code>serif</code> / <code>sans-serif</code> )。</h4><p>解释：</p>`,12),g={href:"http://www.zhihu.com/question/19911793/answer/13329819",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Display according to platform */</span>
<span class="token selector">.article</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Specific for most platforms */</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> <span class="token string">&quot;Hiragino Sans GB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;WenQuanYi Micro Hei&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-font-family-不区分大小写-但在同一个项目中-同样的-family-name-大小写必须统一。" tabindex="-1"><a class="header-anchor" href="#强制-font-family-不区分大小写-但在同一个项目中-同样的-family-name-大小写必须统一。" aria-hidden="true">#</a> [强制] <code>font-family</code> 不区分大小写，但在同一个项目中，同样的 <code>Family Name</code> 大小写必须统一。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-字号" tabindex="-1"><a class="header-anchor" href="#_5-2-字号" aria-hidden="true">#</a> 5.2 字号</h3><h4 id="强制-需要在-windows-平台显示的中文内容-其字号应不小于-12px。" tabindex="-1"><a class="header-anchor" href="#强制-需要在-windows-平台显示的中文内容-其字号应不小于-12px。" aria-hidden="true">#</a> [强制] 需要在 Windows 平台显示的中文内容，其字号应不小于 <code>12px</code>。</h4><p>解释：</p><p>由于 Windows 的字体渲染机制，小于 12px 的文字显示效果极差、难以辨认。</p><h3 id="_5-3-字体风格" tabindex="-1"><a class="header-anchor" href="#_5-3-字体风格" aria-hidden="true">#</a> 5.3 字体风格</h3><h4 id="建议-需要在-windows-平台显示的中文内容-不要使用除-normal-外的-font-style。其他平台也应慎用。" tabindex="-1"><a class="header-anchor" href="#建议-需要在-windows-平台显示的中文内容-不要使用除-normal-外的-font-style。其他平台也应慎用。" aria-hidden="true">#</a> [建议] 需要在 Windows 平台显示的中文内容，不要使用除 <code>normal</code> 外的 <code>font-style</code>。其他平台也应慎用。</h4><p>解释：</p><p>由于中文字体没有 italic 风格的实现，所有浏览器下都会 fallback 到 obilique 实现 (自动拟合为斜体)，小字号下 (特别是 Windows 下会在小字号下使用点阵字体的情况下) 显示效果差，造成阅读困难。</p><h3 id="_5-4-字重" tabindex="-1"><a class="header-anchor" href="#_5-4-字重" aria-hidden="true">#</a> 5.4 字重</h3><h4 id="强制-font-weight-属性必须使用数值方式描述。" tabindex="-1"><a class="header-anchor" href="#强制-font-weight-属性必须使用数值方式描述。" aria-hidden="true">#</a> [强制] <code>font-weight</code> 属性必须使用数值方式描述。</h4><p>解释：</p><p>CSS 的字重分 100 – 900 共九档，但目前受字体本身质量和浏览器的限制，实际上支持 400 和 700 两档，分别等价于关键词 normal 和 bold。</p>`,17),x={href:"http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight",target:"_blank",rel:"noopener noreferrer"},y={href:"http://justineo.github.io/slideshows/font/#/3/15",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-行高" tabindex="-1"><a class="header-anchor" href="#_5-5-行高" aria-hidden="true">#</a> 5.5 行高</h3><h4 id="建议-line-height-在定义文本段落时-应使用数值。" tabindex="-1"><a class="header-anchor" href="#建议-line-height-在定义文本段落时-应使用数值。" aria-hidden="true">#</a> [建议] <code>line-height</code> 在定义文本段落时，应使用数值。</h4><p>解释：</p><p>将 line-height 设置为数值，浏览器会基于当前元素设置的 font-size 进行再次计算。在不同字号的文本段落组合中，能达到较为舒适的行间间隔效果，避免在每个设置了 font-size 都需要设置 line-height。</p><p>当 line-height 用于控制垂直居中时，还是应该设置成与容器高度一致。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-变换与动画" tabindex="-1"><a class="header-anchor" href="#_6-变换与动画" aria-hidden="true">#</a> 6 变换与动画</h2><h4 id="强制-使用-transition-时应指定-transition-property。" tabindex="-1"><a class="header-anchor" href="#强制-使用-transition-时应指定-transition-property。" aria-hidden="true">#</a> [强制] 使用 <code>transition</code> 时应指定 <code>transition-property</code>。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> color 1s<span class="token punctuation">,</span> border-color 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建议-尽可能在浏览器能高效实现的属性上添加过渡和动画。" tabindex="-1"><a class="header-anchor" href="#建议-尽可能在浏览器能高效实现的属性上添加过渡和动画。" aria-hidden="true">#</a> [建议] 尽可能在浏览器能高效实现的属性上添加过渡和动画。</h4><p>解释：</p>`,15),w={href:"http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/",target:"_blank",rel:"noopener noreferrer"},q=t(`<ul><li><code>transform: translate(npx, npx);</code></li><li><code>transform: scale(n);</code></li><li><code>transform: rotate(ndeg);</code></li><li><code>opacity: 0..1;</code></li></ul><p>典型的，可以使用 translate 来代替 left 作为动画属性。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> transform 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box:hover</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* move right for 20px */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> left 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box:hover</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* move right for 20px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-响应式" tabindex="-1"><a class="header-anchor" href="#_7-响应式" aria-hidden="true">#</a> 7 响应式</h2><h4 id="强制-media-query-不得单独编排-必须与相关的规则一起定义。" tabindex="-1"><a class="header-anchor" href="#强制-media-query-不得单独编排-必须与相关的规则一起定义。" aria-hidden="true">#</a> [强制] <code>Media Query</code> 不得单独编排，必须与相关的规则一起定义。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Good */</span>
<span class="token comment">/* header styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>...<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* header styles */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* main styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>...<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* main styles */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* footer styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>...<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* footer styles */</span>
<span class="token punctuation">}</span>


<span class="token comment">/* Bad */</span>
<span class="token comment">/* header styles */</span>
<span class="token comment">/* main styles */</span>
<span class="token comment">/* footer styles */</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>...<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* header styles */</span>
    <span class="token comment">/* main styles */</span>
    <span class="token comment">/* footer styles */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制-media-query-如果有多个逗号分隔的条件时-应将每个条件放在单独一行中。" tabindex="-1"><a class="header-anchor" href="#强制-media-query-如果有多个逗号分隔的条件时-应将每个条件放在单独一行中。" aria-hidden="true">#</a> [强制] <code>Media Query</code> 如果有多个逗号分隔的条件时，应将每个条件放在单独一行中。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>@media
<span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* Webkit-based browsers */</span>
<span class="token punctuation">(</span><span class="token property">min--moz-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">/* Older Firefox browsers (prior to Firefox 16) */</span>
<span class="token punctuation">(</span><span class="token property">min-resolution</span><span class="token punctuation">:</span> 2dppx<span class="token punctuation">)</span><span class="token punctuation">,</span>             <span class="token comment">/* The standard way */</span>
<span class="token selector">(min-resolution: 192dpi)</span> <span class="token punctuation">{</span>           <span class="token comment">/* dppx fallback */</span>
    <span class="token comment">/* Retina-specific stuff here */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建议-尽可能给出在高分辨率设备-retina-下效果更佳的样式。" tabindex="-1"><a class="header-anchor" href="#建议-尽可能给出在高分辨率设备-retina-下效果更佳的样式。" aria-hidden="true">#</a> [建议] 尽可能给出在高分辨率设备 (Retina) 下效果更佳的样式。</h4><h2 id="_8-兼容性" tabindex="-1"><a class="header-anchor" href="#_8-兼容性" aria-hidden="true">#</a> 8 兼容性</h2><h3 id="_8-1-属性前缀" tabindex="-1"><a class="header-anchor" href="#_8-1-属性前缀" aria-hidden="true">#</a> 8.1 属性前缀</h3><h4 id="强制-带私有前缀的属性由长到短排列-按冒号位置对齐。" tabindex="-1"><a class="header-anchor" href="#强制-带私有前缀的属性由长到短排列-按冒号位置对齐。" aria-hidden="true">#</a> [强制] 带私有前缀的属性由长到短排列，按冒号位置对齐。</h4><p>解释：</p><p>标准属性放在最后，按冒号对齐方便阅读，也便于在编辑器内进行多行编辑。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
       <span class="token property">-moz-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-hack" tabindex="-1"><a class="header-anchor" href="#_8-2-hack" aria-hidden="true">#</a> 8.2 Hack</h3><h4 id="建议-需要添加-hack-时应尽可能考虑是否可以采用其他方式解决。" tabindex="-1"><a class="header-anchor" href="#建议-需要添加-hack-时应尽可能考虑是否可以采用其他方式解决。" aria-hidden="true">#</a> [建议] 需要添加 <code>hack</code> 时应尽可能考虑是否可以采用其他方式解决。</h4><p>解释：</p><p>如果能通过合理的 HTML 结构或使用其他的 CSS 定义达到理想的样式，则不应该使用 hack 手段解决问题。通常 hack 会导致维护成本的增加。</p><h4 id="建议-尽量使用-选择器-hack-处理兼容性-而非-属性-hack。" tabindex="-1"><a class="header-anchor" href="#建议-尽量使用-选择器-hack-处理兼容性-而非-属性-hack。" aria-hidden="true">#</a> [建议] 尽量使用 <code>选择器 hack</code> 处理兼容性，而非 <code>属性 hack</code>。</h4><p>解释：</p><p>尽量使用符合 CSS 语法的 selector hack，可以避免一些第三方库无法识别 hack 语法的问题。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* IE 7 */</span>
<span class="token selector">*:first-child + html #header</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* IE 6 */</span>
<span class="token selector">* html #header</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建议-尽量使用简单的-属性-hack。" tabindex="-1"><a class="header-anchor" href="#建议-尽量使用简单的-属性-hack。" aria-hidden="true">#</a> [建议] 尽量使用简单的 <code>属性 hack</code>。</h4><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">_display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span> <span class="token comment">/* fix double margin */</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* triggering hasLayout */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-expression" tabindex="-1"><a class="header-anchor" href="#_8-3-expression" aria-hidden="true">#</a> 8.3 Expression</h3><h4 id="强制-禁止使用-expression。" tabindex="-1"><a class="header-anchor" href="#强制-禁止使用-expression。" aria-hidden="true">#</a> [强制] 禁止使用 <code>Expression</code>。</h4>`,33);function z(S,H){const a=c("ExternalLinkIcon");return p(),o("div",null,[s("blockquote",null,[s("p",null,[n("原文地址: "),s("a",d,[n("https://github.com/fex-team/styleguide/blob/master/css.md"),e(a)]),r,n(" 酌情参考，根据实际情况完善团队规范")])]),u,s("p",null,[n("如希望使用更小副作用的清除浮动方法，参见 "),s("a",v,[n("A new micro clearfix hack"),e(a)]),n(" 一文。")]),m,s("p",null,[n("2D 位置初始值为 "),k,n("，但在只有一个方向的值时，另一个方向的值会被解析为 center。为避免理解上的困扰，应同时给出两个方向的值。"),s("a",h,[n("background-position属性值的定义"),e(a)])]),b,s("p",null,[n("更详细说明可参考"),s("a",g,[n("本文"),e(a)]),n("。")]),f,s("p",null,[n("浏览器本身使用一系列"),s("a",x,[n("启发式规则"),e(a)]),n("来进行匹配，在 <700 时一般匹配字体的 Regular 字重，>=700 时匹配 Bold 字重。")]),s("p",null,[n("但已有浏览器开始支持 =600 时匹配 Semibold 字重 (见"),s("a",y,[n("此表"),e(a)]),n(")，故使用数值描述增加了灵活性，也更简短。")]),_,s("p",null,[n("见"),s("a",w,[n("本文"),e(a)]),n("，在可能的情况下应选择这样四种变换：")]),q])}const C=i(l,[["render",z],["__file","css.html.vue"]]);export{C as default};
