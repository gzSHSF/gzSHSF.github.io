@@ -5，15 +5，14 @@ if （fs.existsSync（'../hexo/package.json'））{
如果 （版本。split（'.'）[0] === '5'） {
const oldConfigPath = '../../_config.old.yml'
const configPath = '../../_config.nexmoe.yml'
如果 （！fs.existsSync（configPath） && ！fs.existsSync（oldConfigPath）） {
fs.writeFileSync（configPath， fs.readFileSync（'./_config.yml'））
控制台。日志（"安装成功！）;
控制台。log（'请修改根目录中的文件 '_config.nexmoe.yml'））;
如果 （fs.existsSync（configPath）） {
fs.writeFileSync（ '../../_config.new.yml'， fs.readFileSync（'./source/_config.yml'））
} else if（！fs.existsSync（oldConfigPath）） {
fs.writeFileSync（configPath， fs.readFileSync（'./source/_config.yml'））
控制台。日志（"安装成功！）
控制台。log（'请修改根目录中的文件 '_config.nexmoe.yml'）
    }
如果 （fs.existsSync（configPath））{
fs.writeFileSync（ '../../_config.new.yml'， fs.readFileSync（'./_config.yml'））
    }
fs.unlinkSync（'./_config.yml'）
fs.unlinkSync（'./source/_config.yml'）
  }
}
