// == Addressindex ==
// getaddressbalance
rpc.getaddressbalance().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddressdeltas
rpc.getaddressdeltas().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddressmempool
rpc.getaddressmempool().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddresstxids
rpc.getaddresstxids().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddressutxos
rpc.getaddressutxos().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getsnapshot
rpc.getsnapshot().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})