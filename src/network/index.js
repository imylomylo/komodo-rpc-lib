// == Network ==
// addnode "node" "add|remove|onetry"
export function addnode(rpc) {
    return new Promise((resolve, reject) => {
        rpc.addnode().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// clearbanned
export function clearbanned(rpc) {
    return new Promise((resolve, reject) => {
        rpc.clearbanned().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// disconnectnode "node" 
export function disconnectnode(rpc) {
    return new Promise((resolve, reject) => {
        rpc.disconnectnode().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddednodeinfo dns ( "node" )
export function getaddednodeinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddednodeinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getconnectioncount
export function getconnectioncount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getconnectioncount().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getdeprecationinfo
export function getdeprecationinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getdeprecationinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnettotals
export function getnettotals(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnettotals().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnetworkinfo
export function getnetworkinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnetworkinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getpeerinfo
export function getpeerinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getpeerinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listbanned
export function listbanned(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listbanned().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// ping
export function ping(rpc) {
    return new Promise((resolve, reject) => {
        rpc.ping().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// setban "ip(/netmask)" "add|remove" (bantime) (absolute)
export function setban(rpc) {
    return new Promise((resolve, reject) => {
        rpc.setban().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
    addnode,
    clearbanned,
    disconnectnode,
    getaddednodeinfo,
    getconnectioncount,
    getdeprecationinfo,
    getnettotals,
    getnetworkinfo,
    getpeerinfo,
    listbanned,
    ping,
    setban
}