## 练手项目
```
+-- vue // 双向数据绑定demo
```

## git 入门
1. 起步  
分布式版本控制  
已提交(committed)、已修改(modified)和已暂存(staged)  
git config [--global] --list  查看配置  
git config [--global] user.name "cheng" 设置配置   
git config --global  merge.tool 'tortoisemerge'  设置合并工具  
git help \<verb\>  
git \<verb\> --help

2. 基础  
.gitignore  忽略项  
git init  初始化  
git add  文件跟踪
git commit -m  提交  
git clone [url]  克隆  
git status -s 检查状态  
` A 新增暂存区文件 M 已修改未暂存 MM 已修改已暂存再修改 `  
git rm 移除文件  
git mv file_from file_to 重命名
git log 查看提交历史  
git remote -v 查看远程仓库 `git remote add <shortname> <url> 添加`  
git fetch [remote-name] 拉取  
git pull 抓取
git push [remote-name] [branch-name] 推送  
git remote rename [remote-name] [remote-name] 重命名  
git remote rm [remote-name] 移除  
git tag [tag-name] 打标签  
git tag -d [tag-name] 删除标签

3. 分支  
git branch [branch-name] 创建分支  
git checkout [branch-name] 切换分支  
git merge [branch-name]  合并分支  
git branch -d [branch-name] 删除
git branch -a 查看  
git mergetool 解决冲突

4. dev