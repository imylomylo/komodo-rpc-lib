// == Blockchain ==
// coinsupply <height>
rpc.coinsupply().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getbestblockhash
rpc.getbestblockhash().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblock "hash|height" ( verbose )
rpc.getblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockchaininfo
rpc.getblockchaininfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockcount
rpc.getblockcount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockhash index
rpc.getblockhash().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockhashes timestamp
rpc.getblockhashes().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockheader "hash" ( verbose )
rpc.getblockheader().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getchaintips
rpc.getchaintips().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getdifficulty
rpc.getdifficulty().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getmempoolinfo
rpc.getmempoolinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getrawmempool ( verbose )
rpc.getrawmempool().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getspentinfo
rpc.getspentinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// gettxout "txid" n ( includemempool )
rpc.gettxout().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// gettxoutproof ["txid",...] ( blockhash )
rpc.gettxoutproof().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// gettxoutsetinfo
rpc.gettxoutsetinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// kvsearch key
rpc.kvsearch().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// kvupdate key "value" days passphrase
rpc.kvupdate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// minerids needs height
rpc.minerids().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// notaries height timestamp
rpc.notaries().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// paxpending needs no args
rpc.paxpending().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// paxprice "base" "rel" height
rpc.paxprice().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// paxprices "base" "rel" maxsamples
rpc.paxprices().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// verifychain ( checklevel numblocks )
rpc.verifychain().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// verifytxoutproof "proof"
rpc.verifytxoutproof().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})
