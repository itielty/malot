// const { JsonWebTokenError } = require("jsonwebtoken")
const 
    express = require("express")
    app = express()
    jwt = require("jsonwebtoken")
    secret = "212122659"

const users = [{
    _id :"1223444",
    name:"avi",
    email:"a@vi",
    pass:"1234"
}]
// const createToklen(id)
function loging(email,pass){
    const user = users.find(u=> u.email === email)
    if(!user||user.pass != pass) throw "not found"
    const token = createToklen(user._id)
    console.log(token);
    return  token
}
function aoutToken (token){
    const decode = jwt.verify(token,secret)
    console.log(decode);
    const id = decode._id
    const user=  users.find(u=> u._id == id)
    return user
}
function createToklen(id){
    const token = jwt.sign({_id:id},secret,{expiresIn:"1000ms"}) 
    return token
}
function log() {
    try {
        const token = loging("a@vi","1234")
        const res = aoutToken(token)
        console.log(res); 
    } catch (error) {
        console.log(error);
    }
}
log()
app.listen(3012, ()=> console.log(`server is upp on port: `))