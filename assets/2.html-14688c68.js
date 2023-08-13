import{_ as n,o as s,c as a,e}from"./app-add35868.js";const t={},i=e(`<p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png" alt="img"></p><h2 id="名词介绍" tabindex="-1"><a class="header-anchor" href="#名词介绍" aria-hidden="true">#</a> 名词介绍</h2><ul><li>Workspace 工作区</li><li>index 暂存区</li><li>repository [本地]仓库区</li><li>remote 远程仓库</li></ul><h2 id="新建代码库" tabindex="-1"><a class="header-anchor" href="#新建代码库" aria-hidden="true">#</a> 新建代码库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init <span class="token comment"># 创建一个git代码库</span>
<span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span> <span class="token comment"># 下载一个项目和它的整个代码历史</span>
<span class="token comment"># url git@github.com:kobelhn/uni-app-demo.git</span>
<span class="token comment"># ssh 需要在服务器添加本机公钥 每次操作时需要输入公钥密码</span>
<span class="token comment"># url https://github.com/kobelhn/uni-app-demo.git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> <span class="token parameter variable">--list</span> <span class="token comment"># 查看配置</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;example&quot;</span> <span class="token comment"># 设置提交用户的name</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;example@email.com&quot;</span> <span class="token comment"># 设置提交用户的email</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加-删除文件" tabindex="-1"><a class="header-anchor" href="#增加-删除文件" aria-hidden="true">#</a> 增加/删除文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment"># 添加所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span><span class="token punctuation">[</span>file2<span class="token punctuation">]</span><span class="token punctuation">[</span>dir<span class="token punctuation">]</span> <span class="token comment"># 添加文件/文件夹到暂存区</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span> <span class="token comment"># 停止追踪指定文件 该文件会保留在工作区 用到这个命令一般是要更新gitignore的时候</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交" aria-hidden="true">#</a> 代码提交</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span> <span class="token comment"># 提交暂存区到仓库区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token comment"># 列举本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span> <span class="token comment"># 列举远端分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span> <span class="token comment"># 列举本地分支加远端分支</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>new branch name<span class="token punctuation">]</span> <span class="token comment"># 创建一个新分支，但停留在当前分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>new branch name<span class="token punctuation">]</span> <span class="token comment"># 创建一个新分支并切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>new branch name<span class="token punctuation">]</span> origin/remote-branch <span class="token comment"># 创建一个新分支且切换到该分支，同时把该分支和远端origin/remote-branch建立连接</span>
<span class="token comment"># set-upstream</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/remote_branch  your_branch
<span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token comment"># 合并指定分支到当前分支</span>
<span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span> <span class="token comment"># 合并指定提交到当前分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>local branch-name<span class="token punctuation">]</span> <span class="token comment"># 删除本地分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>remote branch name<span class="token punctuation">]</span> <span class="token comment"># 删除远端分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息" aria-hidden="true">#</a> 查看信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token comment"># 查看状态</span>
<span class="token function">git</span> log <span class="token comment"># 查看提交记录</span>
<span class="token function">git</span> log <span class="token parameter variable">--stat</span> <span class="token comment"># 查看提交记录 包含每次commit发生变更的文件</span>
<span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span> <span class="token comment"># 查看最近五次提交</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--all</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--color</span> <span class="token parameter variable">--graph</span>
<span class="token comment"># git log grep ...</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token comment"># 查看指定文件的修改记录</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token comment"># 暂存区和工作区的差异</span>
<span class="token function">git</span> reflog <span class="token comment"># 显示当前分支的最近几次提交</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步" aria-hidden="true">#</a> 远程同步</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token comment"># 获取远程仓库的变动</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 查看远程仓库</span>
<span class="token function">git</span> remote set-url origin xxx <span class="token comment"># 设置远程仓库</span>
<span class="token function">git</span> pull <span class="token comment"># 取回远程仓库的变化与本地分支合并</span>
<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> <span class="token comment"># 用于提交时，取回远程仓库的变化并把自己的提交加到远程提交树的最后</span>
<span class="token function">git</span> push <span class="token comment"># 推送本地分支到远程仓库</span>
<span class="token function">git</span> push <span class="token parameter variable">--force</span> <span class="token comment"># 强制推送</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token builtin class-name">.</span> <span class="token comment"># 撤销所有暂存区修改到工作区</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token comment"># 重置暂存区和工作区</span>
<span class="token function">git</span> reset HEAD~ <span class="token comment"># ...</span>
<span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token comment"># 新建一个commit撤销指定的commit</span>
<span class="token function">git</span> stash <span class="token comment"># 暂时将所有未提交的变化移除</span>
<span class="token function">git</span> stash pop <span class="token comment"># 移入存储的未提交变化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决冲突" tabindex="-1"><a class="header-anchor" href="#解决冲突" aria-hidden="true">#</a> 解决冲突</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推送本地分支到远程仓库时，git比对文件发现远程仓库和本地分支都修改了同一个文件</span>
<span class="token comment"># 方式一</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m<span class="token string">&quot;&quot;</span>
<span class="token function">git</span> push
<span class="token comment"># git 提示你当前分支落后了远程分支几个提交，请先取回远程分支的变化</span>
<span class="token function">git</span> pull
<span class="token comment"># 发现冲突 解决冲突</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m<span class="token string">&quot;merge: conflicts .....&quot;</span>
<span class="token function">git</span> push
<span class="token comment"># 没有冲突</span>
<span class="token function">git</span> commit -m<span class="token string">&quot;merge branch master of .....&quot;</span>
<span class="token function">git</span> push


<span class="token comment"># 方式二</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m<span class="token string">&quot;&quot;</span>
<span class="token function">git</span> push
<span class="token comment"># git 提示你当前分支落后了远程分支几个提交，请先取回远程分支的变化</span>
<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span>
<span class="token comment"># 发现冲突 解决冲突</span>
<span class="token comment"># merge conflicts:</span>
<span class="token comment">#  src/ss/ss ......</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>
<span class="token comment"># 如果有冲突会自动新建一个merge conflicts提交，自动填写了此次冲突包含的文件列表</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git 更新远程分支列表</span>
<span class="token function">git</span> remote update origin <span class="token parameter variable">--prune</span>
<span class="token comment"># git设置和取消设置代理</span>
<span class="token comment"># 全局设置代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy https://127.0.0.1:1080
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy http://127.0.0.1:1080
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy socks5://127.0.0.1:1080
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy socks5://127.0.0.1:1080
<span class="token comment"># 取消全局代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[i];function l(p,o){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","2.html.vue"]]);export{d as default};
