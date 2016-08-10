<<<<<<< HEAD
# Angular seed project

`Angular 1.x` `webpack` `es6` 

A complete, yet simple, starter for Angular 1.x using Webpack.


### Quick start

```
# install the dependencies with npm
$ npm install

# start the server
$ npm start

```

go to [http://localhost:8080](http://localhost:8080) in your browser.

### About code

[代码规范文档](http://wiki.ele.to:8090/pages/viewpage.action?pageId=16807568)


### eless 接入


[发布系统接入文档](http://wiki.ele.to:8090/pages/viewpage.action?pageId=16552328)

1. 添加webhook: `http://ci-api.tools.elenet.me/api/v1/webhook/gitlab/{appid}`, `appid`换成自己的`appid`（bind push event）
2. 修改文件名`appid_build.yml` ，用你的_appid_替换文件名中的`appid`
3. 修改`appspec.yml` 文件里的`$appid`为你的*appid*
=======
# jenkins-ci-demo
>>>>>>> d465a1c54b5d02580ac3ac1a7c5234ca597f9c40
