const fs = require('fs')

function someAsyncOp(callback) {
    fs.readFile('C:/Users/Admin/NODE/mern_node/app1.js',callback)
}
const timeoutSchedule = Date.now()
setTimeout(() => {
    const delay = Date.now() - timeoutSchedule
    console.log(`${delay}ms have been passed `)
}, 100)
someAsyncOp(() => {
    const startCallback = Date.now()
})