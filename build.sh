#!/usr/bin/env bash
npm run prebuild
# git add -A
# git commit -t
# ng build --watch
spd-say "Building with Angular."
ng build
spd-say "Building Docker Image."
docker build -t anthonyrawlinsuom/insite-dss:latest .
spd-say "Pushing Docker Image."
docker push anthonyrawlinsuom/insite-dss
spd-say "Build complete."
