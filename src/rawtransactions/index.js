// == Rawtransactions ==
// createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}
rpc.createrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// decoderawtransaction "hexstring"
rpc.decoderawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// decodescript "hex"
rpc.decodescript().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// fundrawtransaction "hexstring"
rpc.fundrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getrawtransaction "txid" ( verbose )
rpc.getrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// sendrawtransaction "hexstring" ( allowhighfees )
rpc.sendrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )
rpc.signrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})