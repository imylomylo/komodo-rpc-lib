// == Mining ==
// getblocksubsidy height
function getblocksubsidy(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblocksubsidy().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblocktemplate ( "jsonrequestobject" )
function getblocktemplate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblocktemplate().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getlocalsolps
function getlocalsolps(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getlocalsolps().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getmininginfo
function getmininginfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getmininginfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnetworkhashps ( blocks height )
function getnetworkhashps(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnetworkhashps().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnetworksolps ( blocks height )
function getnetworksolps(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnetworksolps().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// prioritisetransaction <txid> <priority delta> <fee delta>
function prioritisetransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.prioritisetransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// submitblock "hexdata" ( "jsonparametersobject" )
function submitblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.submitblock().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    getblocksubsidy,
    getblocktemplate,
    getlocalsolps,
    getmininginfo,
    getnetworkhashps,
    getnetworksolps,
    prioritisetransaction,
    submitblock
}