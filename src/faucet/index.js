// == Faucet ==
// faucetaddress [pubkey]
 function faucetaddress(rpc, pubkey) {
    return new Promise((resolve, reject) => {
        rpc.faucetaddress(pubkey).then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
        // reject("faucetaddress - Not supported yet")
    })
}


// faucetfund amount
 function faucetfund(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.faucetfund().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("faucetfund - Not supported yet")
    })
}


// faucetget
 function faucetget(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.faucetget().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("faucetget - Not supported yet")
    })
}


// faucetinfo
 function faucetinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
        // reject("faucetinfo - Not supported yet")
    })
}

 module.exports = {
    faucetaddress,
    faucetfund,
    faucetget,
    faucetinfo
}
