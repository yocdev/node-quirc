#!/bin/sh

if cd quirc; then
  git pull
else
  git clone https://github.com/yocdev/quirc.git
  cd quirc
fi

make inspect
cd ..
if [ ! -d "bin" ]; then
mkdir bin
fi
mv quirc/inspect bin/
