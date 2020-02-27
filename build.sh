#!/usr/bin/env bash
npm version patch
# ng build --watch
ng build
docker build -t anthonyrawlinsuom/insite-dss:latest .
docker push anthonyrawlinsuom/insite-dss
