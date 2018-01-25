# 介绍

基于react-native的脚手架，在官方初始化项目的基础上，加上我们自定义的一些包和文件，来组成新的项目。

# 开发依赖

依赖`taskr`工具来进行开发，依赖node的`--inspect`进行调试

# 命令

```bash
# 监控
yarn run start
# 本目录测试
yarn run test
# 打包
yarn run build
# 全局测试
npm link
create-ax-rn-app init demoProject
```
# 项目目录
.
├── README.md
├── build
│   ├── bin
│   │   ├── index.js
│   │   └── index.js.map
│   └── pkgs.json
├── package.json
├── src
│   ├── bin
│   │   └── index.js
│   └── pkgs.json
├── taskfile.js
└── template
    ├── App.js
    └── src
        ├── assets
        ├── components
        ├── page
        ├── reducers
        ├── router
        └── store