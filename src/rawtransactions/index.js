// == Rawtransactions ==
// createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}
 function createrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.createrawtransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("createrawtransaction - Not supported yet")
    })
}

// decoderawtransaction "hexstring"
 function decoderawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.decoderawtransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("decoderawtransaction - Not supported yet")
    })
}

// decodescript "hex"
 function decodescript(rpc) {
    return new Promise((resolve, reject) => {
        //     rpc.decodescript().then(resp => {
        //         resolve(resp)
        //     }).catch(error => {
        //         console.log(error)
        //         reject(error)
        //     })
        reject("decodescript - Not supported yet")
    })
}

// fundrawtransaction "hexstring"
 function fundrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.fundrawtransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("fundrawtransaction - Not supported yet")
    })
}

// getrawtransaction "txid" ( verbose )
 function getrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getrawtransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getrawtransaction - Not supported yet")
    })
}

// sendrawtransaction "hexstring" ( allowhighfees )
 function sendrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.sendrawtransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("sendrawtransaction - Not supported yet")
    })
}

// signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )
 function signrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.signrawtransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("signrawtransaction - Not supported yet")
    })
}

 module.exports = {
    createrawtransaction,
    decoderawtransaction,
    decodescript,
    fundrawtransaction,
    getrawtransaction,
    sendrawtransaction,
    signrawtransaction
}
