#!/bin/bash

if [ $# -eq 0 ]; then
    echo "usage: ./release-to-git.sh repo tag" 1>&2
    exit 1
fi

repo=$1
tag=$2
short_rev=`git rev-parse --short HEAD`
long_rev=`git rev-parse HEAD`
dir=release/dojo-bundle-${short_rev}.git

rm -rf $dir
git clone --branch master --single-branch $repo $dir

rm -rf $dir/*
cp -r dist/* $dir/

cd $dir
git add .
git commit -m "build commit $long_rev"
git push
git tag $tag
git push --tags
