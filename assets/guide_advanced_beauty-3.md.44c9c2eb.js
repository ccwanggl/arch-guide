import{_ as s,c as a,o as e,a as l}from"./app.c9b5fec3.js";const n="/assets/lolcat.4be8f9f1.png",p="/assets/cowsay.dd8a1bd0.png",o="/assets/figlet.3b704869.png",i="/assets/boxes.7099e150.png",r="/assets/cmatrix.c5ba83d1.png",t="/assets/asciiquarium.20be8031.png",c="/assets/sl.78f4db16.png",x=JSON.parse('{"title":"archlinux 系统美化（终端篇）","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 设置 Konsole 样式","slug":"_1-设置-konsole-样式","link":"#_1-设置-konsole-样式","children":[]},{"level":2,"title":"2. zsh 美化","slug":"_2-zsh-美化","link":"#_2-zsh-美化","children":[{"level":3,"title":"2-1. powerlevel10k","slug":"_2-1-powerlevel10k","link":"#_2-1-powerlevel10k","children":[]}]},{"level":2,"title":"3. vim 美化","slug":"_3-vim-美化","link":"#_3-vim-美化","children":[]},{"level":2,"title":"4. ASCII 艺术与终端玩具","slug":"_4-ascii-艺术与终端玩具","link":"#_4-ascii-艺术与终端玩具","children":[{"level":3,"title":"lolcat","slug":"lolcat","link":"#lolcat","children":[]},{"level":3,"title":"cowsay","slug":"cowsay","link":"#cowsay","children":[]},{"level":3,"title":"figlet","slug":"figlet","link":"#figlet","children":[]},{"level":3,"title":"boxes","slug":"boxes","link":"#boxes","children":[]},{"level":3,"title":"cmatrix","slug":"cmatrix","link":"#cmatrix","children":[]},{"level":3,"title":"asciiquarium","slug":"asciiquarium","link":"#asciiquarium","children":[]},{"level":3,"title":"sl","slug":"sl","link":"#sl","children":[]}]},{"level":2,"title":"5. Linux 彩蛋","slug":"_5-linux-彩蛋","link":"#_5-linux-彩蛋","children":[]}],"relativePath":"guide/advanced/beauty-3.md","lastUpdated":1687091283000}'),d={name:"guide/advanced/beauty-3.md"},h=l(`<h1 id="archlinux-系统美化-终端篇" tabindex="-1">archlinux 系统美化（终端篇） <a class="header-anchor" href="#archlinux-系统美化-终端篇" aria-hidden="true">#</a></h1><blockquote><h3 id="🌺-爱美之心-人皆有之" tabindex="-1">🌺 爱美之心，人皆有之 <a class="header-anchor" href="#🌺-爱美之心-人皆有之" aria-hidden="true">#</a></h3><p>美化这个话题是永恒的。有些人用 Linux 的原因就是一开始被美化后桌面的截图惊艳到了</p><p>这一小节将会介绍如何对 KDE 桌面环境进行美化。受限于篇幅，本小节分为上下篇</p></blockquote><h2 id="_1-设置-konsole-样式" tabindex="-1">1. 设置 Konsole 样式 <a class="header-anchor" href="#_1-设置-konsole-样式" aria-hidden="true">#</a></h2><p>打开 Konsole， <em>设置</em> &gt; <em>编辑当前方案</em> &gt; <em>外观</em>，选择 <code>Red-Black</code> （或你喜欢的颜色主题），应用确认即可。</p><h2 id="_2-zsh-美化" tabindex="-1">2. zsh 美化 <a class="header-anchor" href="#_2-zsh-美化" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>确保你安装过 zsh ，安装方法及相关配置可在 <a href="/guide/advanced/optional-cfg-1.html">可选配置（基础）</a> 一章中查看。</p><p><a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">oh-my-zsh</a> 实际上并没有那么好用，反而拖慢了 Zsh 的速度，本指南不会介绍。</p><p>若有需要请自行查阅相关资料。</p></div><h3 id="_2-1-powerlevel10k" tabindex="-1">2-1. powerlevel10k <a class="header-anchor" href="#_2-1-powerlevel10k" aria-hidden="true">#</a></h3><p>由于本指南不使用 <code>oh-my-zsh</code> ,因此使用另一个 Zsh 框架 <code>zim</code> 安装 powerlevel10k。</p><ol><li>安装 <code>zim</code> 。</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-fsSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/zimfw/install/master/install.zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">zsh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>编辑 Zsh 配置文件 <code>~/.zimrc</code> ：</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zimrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>在文件最后加入下面的一行文字，以添加 <code>powerlevel10k</code> 模块，然后退出。</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">zmodule romkatv/powerlevel10k</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>安装 <code>powerlevel10k</code> 模块，在终端输入如下命令即可。</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">zimfw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装之后，<code>powerlevel10k</code>会让你进行配置。</p><p>在此时配置时，很多图标符号看不到，因为 <code>powerlevel10k</code> 中包含许多特殊图标符号，需要与之兼容的字体。</p><ol start="5"><li>安装 Nerd Font 字体</li></ol><p>Nerd Fonts 是一系列打过补丁的字体，支持 <code>powerlevel10k</code> 中的图标。</p><p>AUR 和 ArchLinuxCN 源中都有很多 Nerd Font，在终端使用 yay 搜索安装即可。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Ss</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nerd-font</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>个人推荐使用 <a href="https://archlinux.org/packages/extra/any/ttf-jetbrains-mono-nerd/" target="_blank" rel="noreferrer">ttf-jetbrains-mono-nerd</a> 字体，可在 aur 中安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-jetbrains-mono-nerd</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装完任意一个 Nerd Font 字体后，打开 Konsole 的 <em>设置</em> &gt; <em>编辑当前方案</em> &gt; <em>外观</em>，把 <em>字体</em> 改为刚刚安装的 Nerd Font 即可。</p><p>现在再打开 <code>powerlevel10k</code> 配置（<code>p10k configure</code>），就可以看到图标符号，正常配置了。</p><h2 id="_3-vim-美化" tabindex="-1">3. vim 美化 <a class="header-anchor" href="#_3-vim-美化" aria-hidden="true">#</a></h2><h2 id="_4-ascii-艺术与终端玩具" tabindex="-1">4. ASCII 艺术与终端玩具 <a class="header-anchor" href="#_4-ascii-艺术与终端玩具" aria-hidden="true">#</a></h2><h3 id="lolcat" tabindex="-1">lolcat <a class="header-anchor" href="#lolcat" aria-hidden="true">#</a></h3><p>用渐变为终端输出着色，看起来就像彩虹一样！</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/lolcat/" target="_blank" rel="noreferrer">lolcat</a>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lolcat</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>通过管道符（<code>|</code>）将其它命令（如 <code>neofetch</code>）的输出传递给 <code>lolcat</code>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">neofetch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lolcat</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+n+`" alt="lolcat"></p></li></ol><h3 id="cowsay" tabindex="-1">cowsay <a class="header-anchor" href="#cowsay" aria-hidden="true">#</a></h3><p>将文本作为 ASCII 艺术牛的讲话文本输出。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/cowsay/" target="_blank" rel="noreferrer">cowsay</a>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cowsay</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>通过管道符（<code>|</code>）将简短的其它命令输出传递给 <code>cowsay</code>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">archlinux 简明指南</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cowsay</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+p+`" alt="cowsay"></p></li></ol><h3 id="figlet" tabindex="-1">figlet <a class="header-anchor" href="#figlet" aria-hidden="true">#</a></h3><p>显示由不同风格的 ASCII 艺术字符组成的文本。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/figlet/" target="_blank" rel="noreferrer">figlet</a>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">figlet</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>通过管道符（<code>|</code>）将简短的其它命令输出传递给 <code>figlet</code>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Love Live Linux</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">figlet</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+o+`" alt="figlet"></p><p>更多样式请参阅 <a href="http://www.figlet.org/" target="_blank" rel="noreferrer">figlet 官网</a>。</p></li></ol><h3 id="boxes" tabindex="-1">boxes <a class="header-anchor" href="#boxes" aria-hidden="true">#</a></h3><p>使用 ASCII 艺术风格的字符形状框来包围文本。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/cowsay/" target="_blank" rel="noreferrer">boxes</a><sup>aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Qv6Hf" id="tab-gq2oMBb" checked="checked"><label for="tab-gq2oMBb">aur</label><input type="radio" name="group-Qv6Hf" id="tab-6Qavs9N"><label for="tab-6Qavs9N">aur (git)</label></div><div class="blocks"><div class="language-bash active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boxes</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boxes-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>通过管道符（<code>|</code>）将简短的其它命令输出传递给 <code>boxes</code>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">archlinux 简明指南</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boxes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diamonds</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+i+`" alt="boxes"></p><p>更多样式请参阅 <a href="https://boxes.thomasjensen.com/" target="_blank" rel="noreferrer">boxes 官网</a> 以及 <a href="https://github.com/ascii-boxes/boxes" target="_blank" rel="noreferrer">boxes repo</a>。</p></li></ol><h3 id="cmatrix" tabindex="-1">cmatrix <a class="header-anchor" href="#cmatrix" aria-hidden="true">#</a></h3><p>向下滚动的代码流如同黑客帝国一样！</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/cmatrix/" target="_blank" rel="noreferrer">cmatrix</a>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-7COV7" id="tab-TgQlZfM" checked="checked"><label for="tab-TgQlZfM">extra</label><input type="radio" name="group-7COV7" id="tab-7z2dddp"><label for="tab-7z2dddp">bash</label></div><div class="blocks"><div class="language-bash active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cmatrix</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/cmatrix-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>输入以下命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cmatrix</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+r+`" alt="cmatrix"></p></li><li><p>按下 <code>q</code> 即可退出</p></li></ol><h3 id="asciiquarium" tabindex="-1">asciiquarium <a class="header-anchor" href="#asciiquarium" aria-hidden="true">#</a></h3><p>将终端化身海洋馆！</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/asciiquarium/" target="_blank" rel="noreferrer">asciiquarium</a><sup>extra / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-zbStG" id="tab-Fh9Nh8S" checked="checked"><label for="tab-Fh9Nh8S">extra</label><input type="radio" name="group-zbStG" id="tab-DlvWAka"><label for="tab-DlvWAka">aur (git)</label></div><div class="blocks"><div class="language-bash active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">asciiquarium</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/asciiquarium-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>输入以下命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">asciiquarium</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+t+`" alt="asciiquarium"></p></li><li><p>按下 <code>q</code> 即可退出</p></li></ol><h3 id="sl" tabindex="-1">sl <a class="header-anchor" href="#sl" aria-hidden="true">#</a></h3><p>终端里的小火车。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/sl/" target="_blank" rel="noreferrer">sl</a>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sl</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>输入以下命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sl</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+c+'" alt="sl"></p></li></ol><h2 id="_5-linux-彩蛋" tabindex="-1">5. Linux 彩蛋 <a class="header-anchor" href="#_5-linux-彩蛋" aria-hidden="true">#</a></h2>',50),u=[h];function b(m,C,y,g,v,A){return e(),a("div",null,u)}const k=s(d,[["render",b]]);export{x as __pageData,k as default};