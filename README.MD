# JSON-ENV-FILE

读取指定配置文件中的环境变量并设置到当前应用程序中，并运行指定的脚本。

# 解决了什么问题？

很多时候，在开发机上的配置我们不需要同步到```git```上，以前设置环境变量是设置到```package.json```，但这个文件不会加入到```.gitignore```，有一些机密设置会一不小心就同步到网上。

该项目将变量设置项存储于指定的配置文件中，你可以将该文件加入到```.gitignore```中，避免被同步到网上。

# 怎么使用？

在```package.json```的```scripts```中添加配置项，如：
```
{
  "name": "demo",
  "version": "0.0.1",
  "description": "",
  "main": "lib/index.js",
  "scripts": {
    "dev": "json-env-file node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

# 参数

只有一个参数```--file```，通过该参数可以设置环境变量配置所在的位置。如：```json-env-file --file ./.env node index.js```，默认情况下，变量存储于```./env.json```文件中。

# 怎么配置变量

参考文件[env.json](./env.json)