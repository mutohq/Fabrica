#!/bin/bash
echo "*********************************************************"
echo "**                 Building For Linux                  **"
echo "*********************************************************"
env GOOS=linux GOARCH=amd64 go build -v -o fabrica-ci fabrica-ci.go