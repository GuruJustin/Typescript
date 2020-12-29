require("babel-runtime/regenerator")
require('webpack-hot-middleware/client')
require("./main.css")
require("./index.html")

var a = async ( args ) => {
    const {a,b} = args
    await console.log("hello form the future", a,b)
    console.log("Done")
}

a({a:23,b:23})