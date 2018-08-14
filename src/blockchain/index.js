// == Blockchain ==
// coinsupply <height>
export function coinsupply(rpc) {
    return new Promise((resolve, reject) => {
        rpc.coinsupply().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getbestblockhash
export function getbestblockhash(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getbestblockhash().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblock "hash|height" ( verbose )
export function getblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblock().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockchaininfo
export function getblockchaininfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockchaininfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockcount
export function getblockcount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockcount().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockhash index
export function getblockhash(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockhash().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockhashes timestamp
export function getblockhashes(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockhashes().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockheader "hash" ( verbose )
export function getblockheader(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getblockheader().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getchaintips
export function getchaintips(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getchaintips().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getdifficulty
export function getdifficulty(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getdifficulty().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getmempoolinfo
export function getmempoolinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getmempoolinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getrawmempool ( verbose )
export function getrawmempool(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getrawmempool().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getspentinfo
export function getspentinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getspentinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettxout "txid" n ( includemempool )
export function gettxout(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettxout().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettxoutproof ["txid",...] ( blockhash )
export function gettxoutproof(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettxoutproof().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettxoutsetinfo
export function gettxoutsetinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettxoutsetinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// kvsearch key
export function kvsearch(rpc) {
    return new Promise((resolve, reject) => {
        rpc.kvsearch().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// kvupdate key "value" days passphrase
export function kvupdate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.kvupdate().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// minerids needs height
export function minerids(rpc) {
    return new Promise((resolve, reject) => {
        rpc.minerids().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// notaries height timestamp
export function notaries(rpc) {
    return new Promise((resolve, reject) => {
        rpc.notaries().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// paxpending needs no args
export function paxpending(rpc) {
    return new Promise((resolve, reject) => {
        rpc.paxpending().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// paxprice "base" "rel" height
export function paxprice(rpc) {
    return new Promise((resolve, reject) => {
        rpc.paxprice().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// paxprices "base" "rel" maxsamples
export function paxprices(rpc) {
    return new Promise((resolve, reject) => {
        rpc.paxprices().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// verifychain ( checklevel numblocks )
export function verifychain(rpc) {
    return new Promise((resolve, reject) => {
        rpc.verifychain().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// verifytxoutproof "proof"
export function verifytxoutproof(rpc) {
    return new Promise((resolve, reject) => {
        rpc.verifytxoutproof().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


export default {
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