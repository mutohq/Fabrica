package main

import (
	"fmt"
	"log"
	"os/exec"
	"os"
	// "strings"
	"path/filepath"
	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	
	current_dir, _ := os.Getwd()
	shell_script := filepath.Join(current_dir, "fabrica.sh")

	r.POST("/update", func(c *gin.Context) {
		c.JSON(200, "OK")
		out, err := exec.Command(shell_script).Output()
		if err != nil {
			log.Fatalln("%s", err)
		}
		fmt.Printf("\nShell script output --> %s\n\n", out)
	})

	fmt.Println("Live on :7000")
	r.Run(":7000")
}
