const jwt = require('../lib/jwt')
const {SECRET} = require('../config/config')


exports.auth =async (req, res, next) => {
    const token = req.cookies['username']

    if(token){
        //validate token
        try{
            const decodedToken = await jwt.verify(token, SECRET)

            req.user = decodedToken
            res.locals.user = decodedToken
            res.locals.isAuthenticated = true //lives within each req res - helps the view engine show the details of the particular requiest
            next()
        }catch(err){
            res.clearCookie('username')
            return res.redirect('/users/login')
        }
     
    }  else{
        next()
    }

}

exports.isAuth = (req, res, next) => {
    if(!req.user) {
       return res.redirect('/users/login')
    }
    next()
}