// == Rewards ==
// rewardsaddfunding name fundingtxid amount
export function rewardsaddfunding(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsaddfunding().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// rewardsaddress [pubkey]
export function rewardsaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardscreatefunding name amount APR mindays maxdays mindeposit
export function rewardscreatefunding(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardscreatefunding().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardsinfo fundingtxid
export function rewardsinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardslist
export function rewardslist(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardslist().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardslock name fundingtxid amount
export function rewardslock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardslock().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardsunlock name fundingtxid [txid]
export function rewardsunlock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsunlock().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default{
    rewardsaddfunding,
    rewardsaddress,
    rewardscreatefunding,
    rewardsinfo,
    rewardslist,
    rewardslock,
    rewardsunlock
}