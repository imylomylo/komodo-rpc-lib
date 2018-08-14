// == Faucet ==
// faucetaddress [pubkey]
export function faucetaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// faucetfund amount
export function faucetfund(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetfund().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// faucetget
export function faucetget(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetget().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// faucetinfo
export function faucetinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.faucetinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
    faucetaddress,
    faucetfund,
    faucetget,
    faucetinfo
}