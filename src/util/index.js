// == Util ==
// createmultisig nrequired ["key",...]
function createmultisig(rpc) {
    return new Promise((resolve, reject) => {
        rpc.createmultisig().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// estimatefee nblocks
function estimatefee(rpc) {
    return new Promise((resolve, reject) => {
        rpc.estimatefee().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// estimatepriority nblocks
function estimatepriority(rpc) {
    return new Promise((resolve, reject) => {
        rpc.estimatepriority().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// invalidateblock "hash"
function invalidateblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.invalidateblock().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_deposit "depositaddress"
function jumblr_deposit(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_deposit().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_pause
function jumblr_pause(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_pause().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_resume
function jumblr_resume(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_resume().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_secret "secretaddress"
function jumblr_secret(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_secret().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// reconsiderblock "hash"
function reconsiderblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.reconsiderblock().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// validateaddress "komodoaddress"
function validateaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.validateaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// verifymessage "komodoaddress" "signature" "message"
function verifymessage(rpc) {
    return new Promise((resolve, reject) => {
        rpc.verifymessage().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_validateaddress "zaddr"
function z_validateaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_validateaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    createmultisig,
    estimatefee,
    estimatepriority,
    invalidateblock,
    jumblr_deposit,
    jumblr_pause,
    jumblr_resume,
    jumblr_secret,
    reconsiderblock,
    validateaddress,
    verifymessage,
    z_validateaddress
}