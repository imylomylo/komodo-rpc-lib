// == Faucet ==
// faucetaddress [pubkey]
export function faucetaddress(rpc, pubkey) {
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
export function faucetfund(rpc) {
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
export function faucetget(rpc) {
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
export function faucetinfo(rpc) {
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

export default {
    faucetaddress,
    faucetfund,
    faucetget,
    faucetinfo
}