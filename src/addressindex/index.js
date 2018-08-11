// == Addressindex ==
// getaddressbalance
function getaddressbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressbalance().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddressdeltas
function getaddressdeltas(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressdeltas().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddressmempool
function getaddressmempool(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressmempool().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}
// getaddresstxids
function getaddresstxids(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddresstxids().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}
// getaddressutxos
function getaddressutxos(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressutxos().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}
// getsnapshot
function getsnapshot(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getsnapshot().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    getaddressbalance,
    getaddressdeltas,
    getaddressmempool,
    getaddresstxids,
    getaddressutxos,
    getsnapshot
}