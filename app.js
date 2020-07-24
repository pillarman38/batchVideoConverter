var fs = require('fs')
var dirArray = []
var dataArr = []
const { execSync } = require('child_process');
path = "D:/HV/"

var files = fs.readdirSync(path)

for(var i = 0; i < files.length; i++) {
    var str = path + files[i] + "/"
    dataArr.push(str)
}

for(var i = 0; i < dataArr.length; i++) {
    getFullPath(dataArr[i])
}

function getFullPath(pathObj) {
    var ugh = fs.readdirSync(pathObj)
    for(var k = 0; k < ugh.length; k++) {
        dirArray.push({path: pathObj, video: ugh[k]})
    }
}
// console.log(dirArray)
for(var o = 0; o < dirArray.length; o++) {
    console.log(dirArray)
    var newJob = function () {
        // if(movieTitle['subtitles'] == -1) {
        var newProc = execSync(`D:/ffmpeg -i "${dirArray[o]['path']}${dirArray[o]['video']}" -aspect 16/9 -pix_fmt yuv420p "${dirArray[o]['path']}output${o}.mp4"`)

        console.log('stdout here: \n' + newProc.stdout);
        }
      newJob()
}