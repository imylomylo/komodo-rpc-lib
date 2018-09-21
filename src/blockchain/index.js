// == Blockchain ==
// coinsupply <height>
export function coinsupply(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.coinsupply().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("coinsupply - Not supported yet")
    })
}

/**
 * @api {post} / getbestblockhash
 * @apiName getbestblockhash
 * @apiGroup blockchain
 * @apiDescription get best hash of block
 * @apiSampleRequest http://localhost:7771/
 *
 * @apiParam {Object} rpc the object configured using control.connect(url,username,password)
 *
 * @apiSuccess {Object} resp returns json object of daemon info
 */
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
/**
 * @api {post} / getblock
 * @apiName getblock
 * @apiGroup blockchain
 * @apiDescription get block at specified hash or height
 * @apiSampleRequest http://localhost:7771/
 *
 * @apiParam {Object} rpc the object configured using control.connect(url,username,password)
 * @apiParam {String} hash_or_height the hash|height of the block to be retrieved
 *
 * @apiSuccess {Object} resp returns json object of daemon info
 */
export function getblock(rpc, hash_or_height) {
    return new Promise((resolve, reject) => {
        rpc.getblock(hash_or_height).then(resp => {
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
export function getblockhash(rpc, index) {
    return new Promise((resolve, reject) => {
        rpc.getblockhash(index).then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockhashes timestamp
export function getblockhashes(rpc,timestamp) {
    return new Promise((resolve, reject) => {
        rpc.getblockhashes(timestamp).then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getblockheader "hash" ( verbose )
export function getblockheader(rpc, hash, verbose = 0) {
    return new Promise((resolve, reject) => {
        rpc.getblockheader(hash, verbose).then(resp => {
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
export function getrawmempool(rpc, verbose = 0) {
    return new Promise((resolve, reject) => {
        rpc.getrawmempool(verbose).then(resp => {
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
        // rpc.gettxout().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("gettxout - Not supported yet")
    })
}

// gettxoutproof ["txid",...] ( blockhash )
export function gettxoutproof(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.gettxoutproof().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("gettxoutproof - Not supported yet")
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
export function kvsearch(rpc, key) {
    return new Promise((resolve, reject) => {
        rpc.kvsearch(key).then(resp => {
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
        // rpc.kvupdate().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("kvupdate - Not supported yet")
    })
}

// minerids needs height
export function minerids(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.minerids().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("minerids - Not supported yet")
    })
}

// notaries height timestamp
export function notaries(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.notaries().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("notaries - Not supported yet")
    })
}

// paxpending needs no args
export function paxpending(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.paxpending().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("paxpending - Not supported yet")
    })
}

// paxprice "base" "rel" height
export function paxprice(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.paxprice().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("paxprice - Not supported yet")
    })
}

// paxprices "base" "rel" maxsamples
export function paxprices(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.paxprices().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("paxprices - Not supported yet")
    })
}

// verifychain ( checklevel numblocks )
export function verifychain(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.verifychain().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("verifychain - Not supported yet")
    })
}

// verifytxoutproof "proof"
export function verifytxoutproof(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.verifytxoutproof().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("verifytxoutproof - Not supported yet")
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