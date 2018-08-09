// == Blockchain ==
// coinsupply <height>
function coinsupply(rpc) {
    rpc.coinsupply().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getbestblockhash
function getbestblockhash(rpc) {
    rpc.getbestblockhash().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getblock "hash|height" ( verbose )
function getblock(rpc) {
    rpc.getblock().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getblockchaininfo
function getblockchaininfo(rpc) {
    rpc.getblockchaininfo().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getblockcount
function getblockcount(rpc) {
    rpc.getblockcount().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getblockhash index
function getblockhash(rpc) {
    rpc.getblockhash().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getblockhashes timestamp
function getblockhashes(rpc) {
    rpc.getblockhashes().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getblockheader "hash" ( verbose )
function getblockheader(rpc) {
    rpc.getblockheader().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getchaintips
function getchaintips(rpc) {
    rpc.getchaintips().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getdifficulty
function getdifficulty(rpc) {
    rpc.getdifficulty().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getmempoolinfo
function getmempoolinfo(rpc) {
    rpc.getmempoolinfo().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getrawmempool ( verbose )
function getrawmempool(rpc) {
    rpc.getrawmempool().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getspentinfo
function getspentinfo(rpc) {
    rpc.getspentinfo().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// gettxout "txid" n ( includemempool )
function gettxout(rpc) {
    rpc.gettxout().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// gettxoutproof ["txid",...] ( blockhash )
function gettxoutproof(rpc) {
    rpc.gettxoutproof().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// gettxoutsetinfo
function gettxoutsetinfo(rpc) {
    rpc.gettxoutsetinfo().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// kvsearch key
function kvsearch(rpc) {
    rpc.kvsearch().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// kvupdate key "value" days passphrase
function kvupdate(rpc) {
    rpc.kvupdate().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// minerids needs height
function minerids(rpc) {
    rpc.minerids().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// notaries height timestamp
function notaries(rpc) {
    rpc.notaries().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// paxpending needs no args
function paxpending(rpc) {
    rpc.paxpending().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// paxprice "base" "rel" height
function paxprice(rpc) {
    rpc.paxprice().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// paxprices "base" "rel" maxsamples
function paxprices(rpc) {
    rpc.paxprices().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// verifychain ( checklevel numblocks )
function verifychain(rpc) {
    rpc.verifychain().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// verifytxoutproof "proof"
function verifytxoutproof(rpc) {
    rpc.verifytxoutproof().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
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