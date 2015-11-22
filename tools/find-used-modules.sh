#!/bin/bash

if [ $# -lt 2 ]; then
    echo "usage: ./find-used-modules.sh folder package1 package2..."
    exit 1
fi

FOLDER=$1
shift
PACKAGES=$*

function extract() {
    grep -roh -P '(?<=['\''"])'$1'/.+?(?=['\''"])' $2
}

function merge() {
    sed -e 's/!.*//g' \
        -e "s/^/'/g" \
        -e "s/$/',/g" | \
    sort -u
}

for i in $PACKAGES; do
    extract $i $FOLDER | merge
done
