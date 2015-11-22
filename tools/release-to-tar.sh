#!/bin/bash

rev=`git rev-parse --short HEAD`
dir=release
name=$dir/dojo-bundle-$rev.tar.gz

mkdir -p $dir
cd dist/
tar -czvf ../$name . > /dev/null
echo Created: $name
