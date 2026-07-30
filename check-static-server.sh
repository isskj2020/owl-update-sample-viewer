#!/bin/bash

rm -rf dist
npm run build

mv out owl-update-sample-viewer
mkdir -p dist

mv owl-update-sample-viewer dist/

npx serve dist
