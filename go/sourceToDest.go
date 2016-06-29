package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"strings"
)

var destFolder string
var Sourcedirname string

// readLines reads a whole file into memory
// and returns a slice of its lines.
func readLines(path string) ([]string, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var lines []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	return lines, scanner.Err()
}

// writeLines writes the lines to the given file.
func writeLines(lines []string, path string) error {
	file, err := os.Create(path)
	if err != nil {
		return err
	}
	defer file.Close()

	w := bufio.NewWriter(file)
	for _, line := range lines {
		fmt.Fprintln(w, line)
	}
	return w.Flush()
}

//MakeDirSource creates new directory in the destination directory
func MakeDirSource(fp string) {
	str := destFolder
	cp := fp
	storesub := strings.Split(cp, string(os.PathSeparator))
	fmt.Println(storesub)
	var newpath []string
	i := 0
	for {
		if strings.Compare(storesub[i], Sourcedirname) == 0 {
			i = i + 1
			break
		} else {
			i = i + 1
		}
	}

	var j int
	for j = i; j < len(storesub); j = j + 1 {
		newpath = append(newpath, storesub[j])
	}

	for _, x := range newpath {
		str = filepath.Join(str, x)
	}
	// fmt.Println("---------------------------------------")
	// fmt.Println("Inside Assests :  ",str)
	os.Mkdir(str, 0711)
}

// CopyfileSource copies the file to the destination
func CopyfileSource(fp string) {
	str := destFolder
	cp := fp
	dir, file := filepath.Split(cp)
	// fmt.Println(dir)
	// fmt.Println(file)
	storesub := strings.Split(dir, string(os.PathSeparator))
	var newpath []string
	i := 0
	for {
		if strings.Compare(storesub[i], Sourcedirname) == 0 {
			i = i + 1
			break
		} else {
			i = i + 1
		}
	}

	var j int
	for j = i; j < len(storesub); j = j + 1 {
		newpath = append(newpath, storesub[j])
	}

	for _, x := range newpath {
		str = filepath.Join(str, x)
	}

	str = filepath.Join(str, file)
	// fmt.Println(str)
	lines, err := readLines(fp)
	if err != nil {
		log.Fatalf("readLines h : %s", err)
	}
	if err := writeLines(lines, str); err != nil {
		log.Fatalf("writeLines h : %s", err)
	}
	// fmt.Println("Crap ", str)
}

//WriteSourceToDestination function
func WriteSourceToDestination(fp string, fi os.FileInfo, err error) error {
	if fi.IsDir() {
		MakeDirSource(fp)
		// fmt.Println("Src Assests Dir : ", fp)
		// fmt.Println("Dest Dir : ", str)
	} else {
		CopyfileSource(fp)
		// fmt.Println("Src Assests File : ", fp)
		// fmt.Println("Dest File : ", str)
	}
	return nil
}

// ConfigStructure has source, dest etc
type ConfigStructure struct {
	SourceDir          string   `json:"sourceDir"`
	DestDir            string   `json:"destDir"`
	HeaderTmpl         string   `json:"headerTmpl"`
	FooterTmpl         string   `json:"footerTmpl"`
	TmplExtInput       string   `json:"tmplExtInput"`
	TmplExtOutput      string   `json:"tmplExtOutput"`
	OtherFoldersToCopy []string `json:"otherfolderstocopy"`
}

func main() {

	if len(os.Args) != 2 {
		fmt.Println("Use as follows : ")
		fmt.Println("$ go run [filename.go] [Config_file.json]")
		os.Exit(1)
	}

	configloc, err := filepath.Abs(filepath.Dir(os.Args[1])) //getting file path from run time
	if err != nil {
		log.Fatal(err)
	}
	// fmt.Println(os.Args[1])
	// fmt.Println(configloc)
	configAbsLoc := filepath.Join(configloc, os.Args[1])
	// fmt.Println(configAbsLoc)

	// try to load contents of config.json
	confile, e := ioutil.ReadFile(configAbsLoc)
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}
	// fmt.Printf("%s\n", string(confile))
	// struct of config file
	var jsonconfig ConfigStructure
	erraa := json.Unmarshal(confile, &jsonconfig)
	if erraa != nil {
		fmt.Println(erraa)
		os.Exit(1)
	}
	// fmt.Printf("Results: %v\n", jsonconfig)
	SourceDIR := jsonconfig.SourceDir
	DestDIR := jsonconfig.DestDir
	HeaderTMPL := jsonconfig.HeaderTmpl
	FooterTMPL := jsonconfig.FooterTmpl
	tmplExtINPUT := jsonconfig.TmplExtInput
	tmplExtOUTPUT := jsonconfig.TmplExtOutput
	OTHERFOLDER := jsonconfig.OtherFoldersToCopy
	// fmt.Println(OTHERFOLDER, len(OTHERFOLDER))

	// fmt.Println(SourceDIR)
	getsourcefolder := strings.Split(SourceDIR, string(os.PathSeparator))
	// fmt.Println(getsourcefolder[len(getsourcefolder)-1])
	x := getsourcefolder[len(getsourcefolder)-1]
	Sourcedirname = x
	fmt.Println(x)

	getdestname := strings.Split(DestDIR, string(os.PathSeparator))
	destname := getdestname[len(getdestname)-1]
	// fmt.Println(Sourcedirname)
	// pwd := configloc
	checkdocument := DestDIR

	if _, err := os.Stat(checkdocument); os.IsNotExist(err) {
		fmt.Print("Creating directory ", destname)
		fmt.Println("..............")
		os.Mkdir(checkdocument, 0711)
	} else {
		fmt.Print("Deleting ", destname)
		fmt.Println("..............")
		os.RemoveAll(checkdocument)
		fmt.Print("Creating directory ", destname)
		fmt.Println(" again..............")
		os.Mkdir(checkdocument, 0711)
	}

	/*code for copying otherfolders*/
	for _, folder := range OTHERFOLDER {
		str := strings.Split(configloc, string(os.PathSeparator))
		x1 := str[len(str)-1]
		Sourcedirname = x1
		// fmt.Println(x, folder)
		destFolder = DestDIR
		copied := strings.Split(folder, string(os.PathSeparator))
		copiedfolder := copied[len(copied)-1]
		filepath.Walk(folder, WriteSourceToDestination)
		fmt.Print("Directory copied to ", destname)
		fmt.Println(" is : ", copiedfolder)
	}

	checkdoc := SourceDIR
	checkdocuments := checkdocument
	header := HeaderTMPL
	footer := FooterTMPL
	Sourcedirname = x
	// checkassests := filepath.Join(checkdoc, "assests")
	// fmt.Println(header, footer, checkassests)
	files, _ := ioutil.ReadDir(checkdoc)

	for _, file := range files {

		str := filepath.Join(checkdoc, file.Name())
		if file.IsDir() {
			strx := filepath.Join(checkdoc, file.Name())
			srcFolder := strx
			destFolder = checkdocuments

			filepath.Walk(srcFolder, WriteSourceToDestination)
			fmt.Println("Directory copied to document is : ", file.Name())
		} else if strings.Compare(header, str) != 0 && strings.Compare(footer, str) != 0 {

			_, sepr := filepath.Split(str)
			middlefile := sepr
			// fmt.Printf("%q\n", sepr)
			filename := strings.Split(sepr, ".")
			// fmt.Println(filename[1])
			if strings.Compare(filename[1], tmplExtINPUT) == 0 {

				destfilename := filename[0] + "." + tmplExtOUTPUT
				destpath := filepath.Join(checkdocuments, destfilename)

				lines, err := readLines(header)
				if err != nil {
					log.Fatalf("readLines h : %s", err)
				}
				if err := writeLines(lines, destpath); err != nil {
					log.Fatalf("writeLines h : %s", err)
				}

				middle := filepath.Join(checkdoc, middlefile)
				linesmiddle, errm := readLines(middle)
				if errm != nil {
					log.Fatalf("readLines m : %s", err)
				}

				f, err1 := os.OpenFile(destpath, os.O_APPEND|os.O_WRONLY, 0600)
				if err1 != nil {
					panic(err1)
				}
				defer f.Close()

				for _, linem := range linesmiddle {
					if _, err1 = f.WriteString(linem + "\n"); err1 != nil {
						panic(err1)
					}
				}

				linesfooter, errf := readLines(footer)
				if errf != nil {
					log.Fatalf("readLines f : %s", err)
				}
				for _, linefooter := range linesfooter {
					if _, errf = f.WriteString(linefooter + "\n"); errf != nil {
						panic(errf)
					}
				}

				fmt.Println("Created file : ", destfilename)

			} else {
				_, fileExtra := filepath.Split(str)
				destination := filepath.Join(checkdocuments, fileExtra)
				lines, err := readLines(str)
				if err != nil {
					log.Fatalf("readLines h : %s", err)
				}
				if err := writeLines(lines, destination); err != nil {
					log.Fatalf("writeLines h : %s", err)
				}
			}
		}
	}
}
