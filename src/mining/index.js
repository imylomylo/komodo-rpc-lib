// == Mining ==
// getblocksubsidy height
export function getblocksubsidy(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblocksubsidy().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblocktemplate ( "jsonrequestobject" )
export function getblocktemplate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblocktemplate().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getlocalsolps
export function getlocalsolps(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getlocalsolps().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getmininginfo
export function getmininginfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getmininginfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnetworkhashps ( blocks height )
export function getnetworkhashps(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnetworkhashps().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnetworksolps ( blocks height )
export function getnetworksolps(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnetworksolps().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// prioritisetransaction <txid> <priority delta> <fee delta>
export function prioritisetransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.prioritisetransaction().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// submitblock "hexdata" ( "jsonparametersobject" )
export function submitblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.submitblock().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
    getblocksubsidy,
    getblocktemplate,
    getlocalsolps,
    getmininginfo,
    getnetworkhashps,
    getnetworksolps,
    prioritisetransaction,
    submitblock
}