#!/usr/bin/env bash
npm run prebuild
# git add -A
# git commit -t
# ng build --watch
ng build
docker build -t anthonyrawlinsuom/insite-dss:latest .
docker push anthonyrawlinsuom/insite-dss
