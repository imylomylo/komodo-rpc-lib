// == Rawtransactions ==
// createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}
function createrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.createrawtransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// decoderawtransaction "hexstring"
function decoderawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.decoderawtransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// decodescript "hex"
function decodescript(rpc) {
    return new Promise((resolve, reject) => {
        rpc.decodescript().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// fundrawtransaction "hexstring"
function fundrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.fundrawtransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getrawtransaction "txid" ( verbose )
function getrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getrawtransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// sendrawtransaction "hexstring" ( allowhighfees )
function sendrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.sendrawtransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )
function signrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.signrawtransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    createrawtransaction,
    decoderawtransaction,
    decodescript,
    fundrawtransaction,
    getrawtransaction,
    sendrawtransaction,
    signrawtransaction
}