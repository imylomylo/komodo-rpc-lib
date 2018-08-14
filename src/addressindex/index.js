// == Addressindex ==
// getaddressbalance
export function getaddressbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressbalance().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddressdeltas
export function getaddressdeltas(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressdeltas().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddressmempool
export function getaddressmempool(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressmempool().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}
// getaddresstxids
export function getaddresstxids(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddresstxids().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}
// getaddressutxos
export function getaddressutxos(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressutxos().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}
// getsnapshot
export function getsnapshot(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getsnapshot().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
    getaddressbalance,
    getaddressdeltas,
    getaddressmempool,
    getaddresstxids,
    getaddressutxos,
    getsnapshot
}