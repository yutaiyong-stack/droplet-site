#!/bin/bash
curl -sS --fail --max-time 30 -o img/logo.png "https://cmsimg01.71360.com/data/11u1169/public/201901/20190129/2019012914220527744.png" && echo "logo下载成功" || echo "下载失败"
