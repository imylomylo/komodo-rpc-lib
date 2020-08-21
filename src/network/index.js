// == Network ==
// addnode "node" "add|remove|onetry"
 function addnode(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.addnode().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("addnode - Not supported yet")
    })
}

// clearbanned
 function clearbanned(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.clearbanned().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("clearbanned - Not supported yet")
    })
}

// disconnectnode "node"
 function disconnectnode(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.disconnectnode().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("disconnectnode - Not supported yet")
    })
}

// getaddednodeinfo dns ( "node" )
 function getaddednodeinfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getaddednodeinfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getaddednodeinfo - Not supported yet")
    })
}

// getconnectioncount
 function getconnectioncount(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getconnectioncount().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getconnectioncount - Not supported yet")
    })
}

// getdeprecationinfo
 function getdeprecationinfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getdeprecationinfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getdeprecationinfo - Not supported yet")
    })
}

// getnettotals
 function getnettotals(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getnettotals().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getnettotals - Not supported yet")
    })
}

// getnetworkinfo
 function getnetworkinfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getnetworkinfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getnetworkinfo - Not supported yet")
    })
}

// getpeerinfo
 function getpeerinfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getpeerinfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getpeerinfo - Not supported yet")
    })
}

// listbanned
 function listbanned(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listbanned().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listbanned - Not supported yet")
    })
}

// ping
 function ping(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.ping().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("ping - Not supported yet")
    })
}

// setban "ip(/netmask)" "add|remove" (bantime) (absolute)
 function setban(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.setban().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("setban - Not supported yet")
    })
}

 module.exports = {
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
