// == Addressindex ==
// getaddressbalance
function getaddressbalance(rpc) {
    rpc.getaddressbalance().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getaddressdeltas
function getaddressdeltas(rpc) {
    rpc.getaddressdeltas().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getaddressmempool
function getaddressmempool(rpc) {
    rpc.getaddressmempool().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getaddresstxids
function getaddresstxids(rpc) {
    rpc.getaddresstxids().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getaddressutxos
function getaddressutxos(rpc) {
    rpc.getaddressutxos().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getsnapshot
function getsnapshot(rpc) {
    rpc.getsnapshot().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
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