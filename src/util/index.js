// == Util ==
// createmultisig nrequired ["key",...]
export function createmultisig(rpc) {
    return new Promise((resolve, reject) => {
        rpc.createmultisig().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// estimatefee nblocks
export function estimatefee(rpc) {
    return new Promise((resolve, reject) => {
        rpc.estimatefee().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// estimatepriority nblocks
export function estimatepriority(rpc) {
    return new Promise((resolve, reject) => {
        rpc.estimatepriority().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// invalidateblock "hash"
export function invalidateblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.invalidateblock().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_deposit "depositaddress"
export function jumblr_deposit(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_deposit().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_pause
export function jumblr_pause(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_pause().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_resume
export function jumblr_resume(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_resume().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// jumblr_secret "secretaddress"
export function jumblr_secret(rpc) {
    return new Promise((resolve, reject) => {
        rpc.jumblr_secret().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// reconsiderblock "hash"
export function reconsiderblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.reconsiderblock().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// validateaddress "komodoaddress"
export function validateaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.validateaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// verifymessage "komodoaddress" "signature" "message"
export function verifymessage(rpc) {
    return new Promise((resolve, reject) => {
        rpc.verifymessage().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_validateaddress "zaddr"
export function z_validateaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_validateaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
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