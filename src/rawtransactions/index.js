// == Rawtransactions ==
// createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}
export function createrawtransaction(rpc) {
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
export function decoderawtransaction(rpc) {
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
export function decodescript(rpc) {
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
export function fundrawtransaction(rpc) {
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
export function getrawtransaction(rpc) {
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
export function sendrawtransaction(rpc) {
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
export function signrawtransaction(rpc) {
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

export default {
    createrawtransaction,
    decoderawtransaction,
    decodescript,
    fundrawtransaction,
    getrawtransaction,
    sendrawtransaction,
    signrawtransaction
}