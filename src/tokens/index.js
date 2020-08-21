// == Tokens ==
// tokenaddress [pubkey]
function tokenaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenaddress - Not supported yet")
    })
}

// tokenask numtokens tokenid price
function tokenask(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenask().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenask - Not supported yet")
    })
}

// tokenbalance tokenid [pubkey]
function tokenbalance(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenbalance().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenbalance - Not supported yet")
    })
}

// tokenbid numtokens tokenid price
function tokenbid(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenbid().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenbid - Not supported yet")
    })
}

// tokencancelask tokenid asktxid
function tokencancelask(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokencancelask().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokencancelask - Not supported yet")
    })
}

// tokencancelbid tokenid bidtxid
function tokencancelbid(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokencancelbid().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokencancelbid - Not supported yet")
    })
}

// tokencreate name supply description
function tokencreate(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokencreate().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokencreate - Not supported yet")
    })
}

// tokenfillask tokenid asktxid fillunits
function tokenfillask(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenfillask().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenfillask - Not supported yet")
    })
}

// tokenfillbid tokenid bidtxid fillamount
function tokenfillbid(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenfillbid().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenfillbid - Not supported yet")
    })
}

// tokeninfo tokenid
function tokeninfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokeninfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokeninfo - Not supported yet")
    })
}

// tokenlist
function tokenlist(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenlist().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenlist - Not supported yet")
    })
}

// tokenorders [tokenid]
function tokenorders(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokenorders().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokenorders - Not supported yet")
    })
}

// tokentransfer tokenid destpubkey amount
function tokentransfer(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.tokentransfer().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("tokentransfer - Not supported yet")
    })
}

module.exports = {
    tokenaddress,
    tokenask,
    tokenbalance,
    tokenbid,
    tokencancelask,
    tokencancelbid,
    tokencreate,
    tokenfillask,
    tokenfillbid,
    tokeninfo,
    tokenlist,
    tokenorders,
    tokentransfer
}
