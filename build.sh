#!/usr/bin/env bash
# npm version --no-git-tag-version patch
# ng build --watch
ng build --prod
docker build -t anthonyrawlinsuom/insite-dss:latest .
docker push anthonyrawlinsuom/insite-dss
