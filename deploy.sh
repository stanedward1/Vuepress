# 确保脚本抛出遇到的错误
set -e

echo "----------------------开始发版操作------------------------"

# to solve permission problem
sudo rm -rf docs/.vuepress/dist/

# add toc
sudo doctoc .

# use vuepress-theme-reco
npm install vuepress-theme-reco --save-dev
npm install

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
# shellcheck disable=SC2164
cd docs/.vuepress/dist/

# push to stanedward1.github.io
echo "------------------------------- push to stanedward1.github.io"
sudo rm -rf .git/
sudo git config --global init.defaultBranch master
sudo git init
sudo chmod 777 .git/
sudo chmod -R 777 .git
sudo git add -A
sudo git config --global user.email "longbiu@foxmail.com"
sudo git config --global user.name "longbiu"
sudo git commit -m 'deploy'
sudo git remote add origin git@github.com:stanedward1/stanedward1.github.io.git
echo "----------------------开始上传------------------------"
# sudo git push -f git@github.com:stanedward1/stanedward1.github.io.git master:gh-pages
git push origin master:gh-pages -f
echo "----------------------上传完毕------------------------"

cd -

echo "----------------------开始同步------------------------"
sudo rm -rf .git/
sudo git init
sudo chmod 777 .git/
sudo git add .
sudo git commit -m "push my post"
sudo git remote add origin git@github.com:stanedward1/vuepress.git
git push origin master -f
echo "----------------------同步完毕------------------------"
echo "----------------------访问longbiu的技术知识学习文档集：https://stanedward1.github.io/"
