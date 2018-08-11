// == Network ==
// addnode "node" "add|remove|onetry"
function addnode(rpc) {
    return new Promise((resolve, reject) => {
        rpc.addnode().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// clearbanned
function clearbanned(rpc) {
    return new Promise((resolve, reject) => {
        rpc.clearbanned().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// disconnectnode "node" 
function disconnectnode(rpc) {
    return new Promise((resolve, reject) => {
        rpc.disconnectnode().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddednodeinfo dns ( "node" )
function getaddednodeinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddednodeinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getconnectioncount
function getconnectioncount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getconnectioncount().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getdeprecationinfo
function getdeprecationinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getdeprecationinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnettotals
function getnettotals(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnettotals().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnetworkinfo
function getnetworkinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnetworkinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getpeerinfo
function getpeerinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getpeerinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listbanned
function listbanned(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listbanned().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// ping
function ping(rpc) {
    return new Promise((resolve, reject) => {
        rpc.ping().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// setban "ip(/netmask)" "add|remove" (bantime) (absolute)
function setban(rpc) {
    return new Promise((resolve, reject) => {
        rpc.setban().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
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