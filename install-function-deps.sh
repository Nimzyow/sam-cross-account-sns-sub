#!/bin/bash
echo "Started installing function dependencies"
for directory in ./src/functions/* ; do (cd "$directory" && yarn install && echo "insalled packages for $directory"); done
echo "All function packages have been successfully installed"