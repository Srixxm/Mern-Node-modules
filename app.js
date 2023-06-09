const http = require('http')
const datemodule = require('./dateandtime')
const fs = require('fs');
const url = require('url')
const { log, error, info } = require('console');
const events = require('events');
const formidable = require('formidable');
const path = require('path');
const util = require('util')
const readFilepromise = util.promisify(fs.readFile)

const start = async() => {
    try{
        const fileData = await readFile('textfie.txt')
        console.log(fileData)
    }
    catch{
        console.log(error)
    }
}
start()
// const filename = path.basename('C:/Users/Admin/NODE/mern_node/app.js')
// console.log(filename)
// const resolve = path.resolve('app.js')
// console.log(resolve);

// const join = path.join('bala', 'thors', 'johan.txt')
// console.log(join);

// const parse = path.parse('/Users/Admin/NODE/mern_node/app.js')
// console.log(parse);

// const format = path.sep({dir : 'C:/Users/Admin/', base: 'app.js'})
// console.log(format)



// const nodemailer = require ('nodemailer');
// const transporter = nodemailer.createTransport({
//     service:'outlook',
//     auth:{
//         user: 'anishashabnamm@outlook.com',
//         pass: 'csesaveetha1#'
//     }
// });
// var mailOptions = {
//     from: 'anishashabnamm@outlook.com',
//     to: 'anishablackberry7@gmail.com',
//     subject: 'Sending email using node.js',
//     text: 'That was hard!'
// };
// transporter.sendMail(mailOptions, (error,info)=>
// {
//     if(error)
//     {
//         console.log(error)
//     }
//     else{
//         console.log(' Email sent: '+info.response); 
//     }
// })




// http.createServer((request, response)=> {
//     if(request.url=='/fileupload')
//     {
//         var form= new formidable.IncomingForm()
//         form.parse(request,(error, fields, files)=>
//         {
//             var oldpath = files.filetoupload.filepath
//             var newpath = 'C:/Users/Admin/' + files.filetoupload.originalFilename
//             fs.rename(oldpath, newpath, function(err) {
//                 if (err) throw err;
//                 else
//                 response.writeHead(200, {'content-type' : 'text/html'})
//                 response.write('File uploaded')
//                 response.end()
//             })
            
//         })
//     }
//     else
//     {
//     response.writeHead(200, {'Content-Type':'text/html'})
//     response.write(
//         '<form action="fileupload" method="post" enctype="multipart/form-data">'
//     )
//     response.write('<input type="file" name="filetoupload"><br>')
//     response.write('<input type="submit">')
//     response.write('</form>')
//     return response.end()
//     }
// }).listen(8081)


// const { eventEmitter } = require('stream');
// const eventEmitter = new events.EventEmitter()

// const myEventHandler = () => {
//     console.log("event handler")
// }

// eventEmitter.on('scream', myEventHandler)

// eventEmitter.emit('scream')



// http.createServer((request, response) => {
//     var q = url.parse(request.url, true)
//     var filename = "." + q.pathname;
//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             response.writeHead(404 , {'content-type' : 'text/html'})
//             response.write("404 error")
//            return response.end()
//         }

//         response.writeHead(200, {'Content-Type' : 'text/html'})
//         response.write(data)
//         console.log(filename)
//        return response.end()
//     })
// }).listen(8081)




// address = 'https://mangareader.to/az-list/B'
// var q = url.parse(address, true)
// http.createServer((request , response) => {
//     response.writeHead(200, {'content-type' : 'text/html'})
//     response.write(q.host)
//     response.end()
// }).listen(8081)







// fs.appendFile('textfile.txt', 'Text content', err => {
//     if(err) throw err;
//     console.log("saved!")
// })
// fs.rename('textfile.txt', 'renamedfile.txt', err => {
//     if(err) throw err;
//     console.log("renamed!")
// })
// fs.unlink('renamedfile.txt',  err => {
//     if(err) throw err;
//     console.log("unlinked")
// })










// http.createServer((request , response) => {
//     fs.readFile('index.html', (error, data) => {
//     response.writeHead(200,{"content-type" : "text/html"})
//     response.write(data)
//     // response.write("Hello World!")
//     // response.write(datemodule.DateandTime())
//     response.end()
// });
// }).listen(8081)
// console.log('Server strates running at http://localhost:8081')
