// == Rewards ==
// rewardsaddfunding name fundingtxid amount
function rewardsaddfunding(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsaddfunding().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// rewardsaddress [pubkey]
function rewardsaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardscreatefunding name amount APR mindays maxdays mindeposit
function rewardscreatefunding(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardscreatefunding().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardsinfo fundingtxid
function rewardsinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardslist
function rewardslist(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardslist().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardslock name fundingtxid amount
function rewardslock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardslock().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// rewardsunlock name fundingtxid [txid]
function rewardsunlock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.rewardsunlock().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    rewardsaddfunding,
    rewardsaddress,
    rewardscreatefunding,
    rewardsinfo,
    rewardslist,
    rewardslock,
    rewardsunlock
}