// == Faucet ==
// faucetaddress [pubkey]
function faucetaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// faucetfund amount
function faucetfund(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetfund().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// faucetget
function faucetget(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetget().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// faucetinfo
function faucetinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    faucetaddress,
    faucetfund,
    faucetget,
    faucetinfo
}