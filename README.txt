半点科技新站（.xyz 实验站）文件包
================================

文件清单：
  index.html            首页门户（产品/案例/文章/关于/联系）
  style.css             全站样式（含手机端适配）
  product-item-*.html   14 个产品详情页
  case-item-*.html      14 个案例详情页
  article-item-*.html   15 篇文章页
  download-images.sh    图片下载脚本（需先运行！）

部署步骤：
1. 把整个文件夹上传到 GitHub 的 droplet-site 仓库（Upload files，全选拖入）
2. 在 Fedora 终端进入该文件夹，运行： bash download-images.sh
   把生成的 img/ 文件夹也上传到仓库
3. 等 2 分钟，访问 https://yutaiyong-stack.github.io/droplet-site/

注意：
- img/ 文件夹必须上传，否则页面无图
- 页脚预留了 ICP 备案号位置，迁移 dropletech.net 时启用
