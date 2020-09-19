#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:amber-tian/panda-booking-react-web.git &&
#git remote add origin git@gitee.com:amber888/panda-booking-react-web.git &&
git push -u origin master -f
cd -