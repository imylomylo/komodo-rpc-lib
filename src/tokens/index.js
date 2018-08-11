// == Tokens ==
// tokenaddress [pubkey]
function tokenaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokenask numtokens tokenid price
function tokenask(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenask().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokenbalance tokenid [pubkey]
function tokenbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenbalance().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokenbid numtokens tokenid price
function tokenbid(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenbid().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokencancelask tokenid asktxid
function tokencancelask(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokencancelask().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokencancelbid tokenid bidtxid
function tokencancelbid(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokencancelbid().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokencreate name supply description
function tokencreate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokencreate().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokenfillask tokenid asktxid fillunits
function tokenfillask(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenfillask().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokenfillbid tokenid bidtxid fillamount
function tokenfillbid(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenfillbid().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokeninfo tokenid
function tokeninfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokeninfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokenlist
function tokenlist(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenlist().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokenorders [tokenid]
function tokenorders(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokenorders().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// tokentransfer tokenid destpubkey amount
function tokentransfer(rpc) {
    return new Promise((resolve, reject) => {
        rpc.tokentransfer().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
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