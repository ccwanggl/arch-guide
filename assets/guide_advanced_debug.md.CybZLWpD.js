import{_ as a,c as s,o as i,a4 as e}from"./chunks/framework.DhooLXd5.js";const b=JSON.parse('{"title":"常见问题排除与解决","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/debug.md","filePath":"guide/advanced/debug.md","lastUpdated":1690161453000}'),n={name:"guide/advanced/debug.md"},l=e(`<h1 id="常见问题排除与解决" tabindex="-1">常见问题排除与解决 <a class="header-anchor" href="#常见问题排除与解决" aria-label="Permalink to &quot;常见问题排除与解决&quot;">​</a></h1><blockquote><h3 id="🏔️-山重水复疑无路-柳暗花明又一村" tabindex="-1">🏔️ 山重水复疑无路，柳暗花明又一村 <a class="header-anchor" href="#🏔️-山重水复疑无路-柳暗花明又一村" aria-label="Permalink to &quot;🏔️ 山重水复疑无路，柳暗花明又一村&quot;">​</a></h3><p>本节介绍日常使用 archlinux 时可能会遇到的问题以及解决方法 更多问题请前往<a href="https://wiki.archlinux.org/title/Table_of_contents_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noreferrer">Arch wiki</a></p></blockquote><h2 id="硬件相关" tabindex="-1">硬件相关 <a class="header-anchor" href="#硬件相关" aria-label="Permalink to &quot;硬件相关&quot;">​</a></h2><h3 id="系统没有声音" tabindex="-1">系统没有声音 <a class="header-anchor" href="#系统没有声音" aria-label="Permalink to &quot;系统没有声音&quot;">​</a></h3><p>可以尝试安装 pipewire-pulse pipewire-alsa pipewire-jack</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipewire-pulse</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipewire-alsa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipewire-jack</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者尝试安装 alsa-utils pulseaudio pavucontrol</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alsa-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pulseaudio</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pavucontrol</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启系统即可</p><p>另外，部分装有Nvidia显卡的笔记本（如dell g3-3590）可能会出现<code>aplay -l</code>只有Nvidia HDMI，无法识别内置音频的现象，这是soh驱动程序的问题<s>从19年到现在还没修好</s><u>我们可以通过在内核启动时添加参数</u>解决这个问题：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">snd_hda_intel.dmic_detect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>各个boot-loader有自己的配置文件，如<code>grub</code>的配置文件在<code>/etc/default/grub</code>，修改内核启动参数在<code>GRUB_CMDLINE_LINUX_DEFAULT</code>，更改完成后需要运行<code>grub-mkconfig -o /boot/grub/grub.cfg</code>，请查阅您的boot-loader的配置说明。</p></div><h3 id="键盘没有反应" tabindex="-1">键盘没有反应 <a class="header-anchor" href="#键盘没有反应" aria-label="Permalink to &quot;键盘没有反应&quot;">​</a></h3><p>若为联想小新 Pro14 / YOGA 14s 2021 或相似机型，可能发现笔记本内建键盘没有反应。</p><p>请参阅 <a href="./../rookie/basic-install-detail.html#🥙-杂七杂八">🥙 杂七杂八</a> 解决。</p><h2 id="服务相关" tabindex="-1">服务相关 <a class="header-anchor" href="#服务相关" aria-label="Permalink to &quot;服务相关&quot;">​</a></h2><h3 id="无法连接蓝牙设备-错误提示-br-connection-profile-unavailable-详见arch-社区" tabindex="-1">无法连接蓝牙设备（错误提示：br-connection-profile-unavailable,详见<a href="https://bbs.archlinux.org/viewtopic.php?id=270465" target="_blank" rel="noreferrer">Arch 社区</a>） <a class="header-anchor" href="#无法连接蓝牙设备-错误提示-br-connection-profile-unavailable-详见arch-社区" aria-label="Permalink to &quot;无法连接蓝牙设备（错误提示：br-connection-profile-unavailable,详见[Arch 社区](https://bbs.archlinux.org/viewtopic.php?id=270465)）&quot;">​</a></h3><p>首先确保<a href="./../rookie/desktop-env-and-app.html#_12-启动蓝牙-若有">系统已开启蓝牙服务</a></p><p>安装 bluez,bluez-utils 和 pulseaudio-bluetooth</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bluez</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bluez-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pulseaudio-bluetooth</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后重启系统即可</p><blockquote><p>更多蓝牙相关问题见<a href="https://wiki.archlinux.org/title/Bluetooth_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E7%96%91%E9%9A%BE%E8%A7%A3%E7%AD%94" target="_blank" rel="noreferrer">Arch wiki</a></p></blockquote><h3 id="关闭出错服务-错误启动项" tabindex="-1">关闭出错服务（错误启动项） <a class="header-anchor" href="#关闭出错服务-错误启动项" aria-label="Permalink to &quot;关闭出错服务（错误启动项）&quot;">​</a></h3><h3 id="关机时卡住很久才能关机" tabindex="-1">关机时卡住很久才能关机 <a class="header-anchor" href="#关机时卡住很久才能关机" aria-label="Permalink to &quot;关机时卡住很久才能关机&quot;">​</a></h3><p>一般屏幕会出现形如 <code>A stop job is running for...(1m30s)</code> 的信息，这是经常会遇到的关机卡住 1 分 30 秒的问题，一般来说这种情况是出现了某个进程在关机时不愿停止，需要等到超时时间到达强行停止。</p><p>通用的解决办法是调整缩短这个等待时间，建议从 1 分 30 秒调整至 30 秒，30 秒已经足够几乎所有进程正常结束。</p><ol><li><p>编辑 <code>/etc/systemd/system.conf</code>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>找到其中 <code>DefaultTimeoutStopSec</code> 一项，将其前方的井号去掉，并赋值为 30s 即可</p></li><li><p>最后执行 daemon-reload 使其生效。</p></li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上述解决方案其实只是将这个等待时间缩小了，并没有解决实际问题。如果你想排查问题真正的原因所在，耐心等待其结束关机，然后重新启动电脑，执行以下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">journalctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>按/(斜杠键)搜索<code>Killing</code>关键字，找到你关机的时间附近所在的匹配行，你可以在附近看到到底是哪一个进程导致了 timeout,然后再去排查这个进程有什么问题即可。</p><h2 id="软件包相关" tabindex="-1">软件包相关 <a class="header-anchor" href="#软件包相关" aria-label="Permalink to &quot;软件包相关&quot;">​</a></h2><h3 id="软件包降级" tabindex="-1">软件包降级 <a class="header-anchor" href="#软件包降级" aria-label="Permalink to &quot;软件包降级&quot;">​</a></h3><p>在 archlinux 上偶尔会出现某一个包的最新版本有各种问题的情况，此时需要降级该包以正常使用，包可以是普通软件，也可以是内核。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downgrade</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装此包即可，使用方法也很简单，downgrade 后加上需要降级的包名即可，随后会提示你选择需要降级到的版本，点选即可。</p><h3 id="升级系统时" tabindex="-1">升级系统时 <a class="header-anchor" href="#升级系统时" aria-label="Permalink to &quot;升级系统时&quot;">​</a></h3><p>可能存在升级系统时异常关机或程序异常退出的情况，移除 pacman 的 db 锁即可</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/pacman/db.lck</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="kde-桌面环境相关" tabindex="-1">KDE 桌面环境相关 <a class="header-anchor" href="#kde-桌面环境相关" aria-label="Permalink to &quot;KDE 桌面环境相关&quot;">​</a></h2><h3 id="手动开关显示特效混合器-混成器" tabindex="-1">手动开关显示特效混合器（混成器） <a class="header-anchor" href="#手动开关显示特效混合器-混成器" aria-label="Permalink to &quot;手动开关显示特效混合器（混成器）&quot;">​</a></h3><p>有时显示特效混合器会因为某些原因需要手动开启或关闭，但是目前在 KDE 下显示特效混合器在设置里无法在不关机的情况下直接关闭，下面命令提供手动开关混成器的效果：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qdbus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> org.kde.KWin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Compositor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> suspend</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 禁用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qdbus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> org.kde.KWin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Compositor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> resume</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 开启</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="deepin-wine5-相关" tabindex="-1">deepin-wine5 相关 <a class="header-anchor" href="#deepin-wine5-相关" aria-label="Permalink to &quot;deepin-wine5 相关&quot;">​</a></h2><h2 id="滚挂了怎么办" tabindex="-1">滚挂了怎么办 <a class="header-anchor" href="#滚挂了怎么办" aria-label="Permalink to &quot;滚挂了怎么办&quot;">​</a></h2><h3 id="为什么会滚挂" tabindex="-1">为什么会滚挂 <a class="header-anchor" href="#为什么会滚挂" aria-label="Permalink to &quot;为什么会滚挂&quot;">​</a></h3><p>较长时间段内没有升级可能会造成各种问题（俗称<code>滚挂了</code>），这是因为 archlinux 的软件包更新速度很快，如果你的系统没有及时升级，可能会出现各种问题，比如软件包依赖问题，软件包冲突问题等等。</p><h3 id="怎么解决" tabindex="-1">怎么解决 <a class="header-anchor" href="#怎么解决" aria-label="Permalink to &quot;怎么解决&quot;">​</a></h3><p>多看官网公告，勤滚，一般就不会挂。</p><p>To be continued...</p>`,50),t=[l];function p(h,r,d,o,c,k){return i(),s("div",null,t)}const g=a(n,[["render",p]]);export{b as __pageData,g as default};