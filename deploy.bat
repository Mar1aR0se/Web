yarn build
cd dist
git init
git add .
git commit -m "deploy"
git remote add origin https://github.com/agus24/kpm_publish.git
git push -u -f origin master
cd ..
pause