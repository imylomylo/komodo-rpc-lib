// == Blockchain ==
// coinsupply <height>
 function coinsupply(rpc) {
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
 function getbestblockhash(rpc) {
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
 function getblock(rpc, hash_or_height) {
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
 function getblockchaininfo(rpc) {
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
 function getblockcount(rpc) {
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
 function getblockhash(rpc, index) {
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
 function getblockhashes(rpc,timestamp) {
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
 function getblockheader(rpc, hash, verbose = 0) {
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
 function getchaintips(rpc) {
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
 function getdifficulty(rpc) {
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
 function getmempoolinfo(rpc) {
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
 function getrawmempool(rpc, verbose = 0) {
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
 function getspentinfo(rpc) {
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
 function gettxout(rpc) {
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
 function gettxoutproof(rpc) {
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
 function gettxoutsetinfo(rpc) {
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
 function kvsearch(rpc, key) {
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
 function kvupdate(rpc) {
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
 function minerids(rpc) {
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
 function notaries(rpc) {
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
 function paxpending(rpc) {
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
 function paxprice(rpc) {
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
 function paxprices(rpc) {
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
 function verifychain(rpc) {
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
 function verifytxoutproof(rpc) {
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


 module.exports = {
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
