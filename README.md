
### Quick start

```
# install the dependencies with npm
$ npm install

# start the server
$ npm start

```

go to [http://localhost:8080](http://localhost:8080) in your browser.

### aws ec2 jenkins配置步骤

1. [安装jenkins参考](http://sanketdangi.com/post/62715793234/install-configure-jenkins-on-amazon-linux)

1. 启动jenkins: `service jenkins start`

1. 在浏览器打开 `http://<Elastic-IP>:8080`
   第一次启动jenkins会需要根据审查的password解锁jenkins
   
1. [webhook配置参考](https://segmentfault.com/a/1190000004640060)




