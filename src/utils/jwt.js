import jwt from 'jsonwebtoken';
import {JWT_SECRET } from '../config/constants.js';

function createAccessToken (user){
    const expToken = new Date();
    expToken.setHours(expToken.getHours()+3);
    const payload ={
        tokenType: 'access',
        userId: user._id,
        iat: Date.now(),
        exp: expToken.getTime()
    }
    return jwt.sign(payload,JWT_SECRET);
}

function refreshAccessToken (user){
    const expToken = new Date();
    expToken.getMonth(expToken.getMonth()+1)
    const payload ={
        tokenType: 'refresh',
        userId: user._id,
        iat: Date.now(),
        exp: expToken.getTime()
    }
    return jwt.sign(payload,JWT_SECRET);
}


function decodeAccessToken (token){
    return jwt.decode(token,JWT_SECRET,true);
}

export {
    createAccessToken,
    refreshAccessToken,
    decodeAccessToken
}