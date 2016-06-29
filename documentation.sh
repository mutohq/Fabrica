env GOOS=windows GOARCH=amd64 go build -v -o build-documentation.exe sourceToDest.go &
env GOOS=linux GOARCH=amd64 go build -v -o build-documentation sourceToDest.go 