var fs = require('fs');
var folder = "src"
var htmlFiles = fs.readdirSync(folder).filter(i => i.endsWith('.html'))

fs.rmSync("output", { recursive: true, force: true })
fs.mkdirSync("output")
fs.copyFileSync("src/303 Graphics.mp4", "output/303 Graphics.mp4")
fs.copyFileSync("src/StyleSheet.css", "output/StyleSheet.css")


var footerContents = fs.readFileSync("src/partials/footer.html", 'utf8')
var headerContents = fs.readFileSync("src/partials/header.html", 'utf8')

for (let i = 0; i < htmlFiles.length; i++) {
    var htmlFile = htmlFiles[i]
    var htmlFilePath = "src/" + htmlFile
    var htmlContents = fs.readFileSync(htmlFilePath, 'utf8')
    var result = headerContents + htmlContents + footerContents
    fs.writeFileSync("output/" + htmlFile, result)
}

console.log("Success")