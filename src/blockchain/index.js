// == Blockchain ==
// coinsupply <height>
function coinsupply(rpc) {
    return new Promise((resolve, reject) => {
        rpc.coinsupply().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getbestblockhash
function getbestblockhash(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getbestblockhash().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblock "hash|height" ( verbose )
function getblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblock().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockchaininfo
function getblockchaininfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockchaininfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockcount
function getblockcount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockcount().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockhash index
function getblockhash(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockhash().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockhashes timestamp
function getblockhashes(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockhashes().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockheader "hash" ( verbose )
function getblockheader(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockheader().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getchaintips
function getchaintips(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getchaintips().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getdifficulty
function getdifficulty(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getdifficulty().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getmempoolinfo
function getmempoolinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getmempoolinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getrawmempool ( verbose )
function getrawmempool(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getrawmempool().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getspentinfo
function getspentinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getspentinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettxout "txid" n ( includemempool )
function gettxout(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettxout().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettxoutproof ["txid",...] ( blockhash )
function gettxoutproof(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettxoutproof().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettxoutsetinfo
function gettxoutsetinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettxoutsetinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// kvsearch key
function kvsearch(rpc) {
    return new Promise((resolve, reject) => {
        rpc.kvsearch().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// kvupdate key "value" days passphrase
function kvupdate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.kvupdate().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// minerids needs height
function minerids(rpc) {
    return new Promise((resolve, reject) => {
        rpc.minerids().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// notaries height timestamp
function notaries(rpc) {
    return new Promise((resolve, reject) => {
        rpc.notaries().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// paxpending needs no args
function paxpending(rpc) {
    return new Promise((resolve, reject) => {
        rpc.paxpending().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// paxprice "base" "rel" height
function paxprice(rpc) {
    return new Promise((resolve, reject) => {
        rpc.paxprice().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// paxprices "base" "rel" maxsamples
function paxprices(rpc) {
    return new Promise((resolve, reject) => {
        rpc.paxprices().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// verifychain ( checklevel numblocks )
function verifychain(rpc) {
    return new Promise((resolve, reject) => {
        rpc.verifychain().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// verifytxoutproof "proof"
function verifytxoutproof(rpc) {
    return new Promise((resolve, reject) => {
        rpc.verifytxoutproof().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


export {
    coinsupply,
    getbestblockhash,
    getblock,
    getblockchaininfo,
    getblockcount,
    getblockhash,
    getblockhashes,
    getblockheader,
    getchaintips,
    getdifficulty,
    getmempoolinfo,
    getrawmempool,
    getspentinfo,
    gettxout,
    gettxoutproof,
    gettxoutsetinfo,
    kvsearch,
    kvupdate,
    minerids,
    notaries,
    paxpending,
    paxprice,
    paxprices,
    verifychain,
    verifytxoutproof
}