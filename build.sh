#!/usr/bin/env bash
npm run prebuild
# ng build --watch
ng build --prod
docker build -t anthonyrawlinsuom/insite-dss:latest .
docker push anthonyrawlinsuom/insite-dss
