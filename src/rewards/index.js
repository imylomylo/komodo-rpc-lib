// == Rewards ==
// rewardsaddfunding name fundingtxid amount
export function rewardsaddfunding(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.rewardsaddfunding().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("rewardsaddfunding - Not supported yet")
    })
}


// rewardsaddress [pubkey]
export function rewardsaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.rewardsaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("rewardsaddress - Not supported yet")
    })
}

// rewardscreatefunding name amount APR mindays maxdays mindeposit
export function rewardscreatefunding(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.rewardscreatefunding().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("rewardscreatefunding - Not supported yet")
    })
}

// rewardsinfo fundingtxid
export function rewardsinfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.rewardsinfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("rewardsinfo - Not supported yet")
    })
}

// rewardslist
export function rewardslist(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.rewardslist().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("rewardslist - Not supported yet")
    })
}

// rewardslock name fundingtxid amount
export function rewardslock(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.rewardslock().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("rewardslock - Not supported yet")
    })
}

// rewardsunlock name fundingtxid [txid]
export function rewardsunlock(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.rewardsunlock().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("rewardsunlock - Not supported yet")
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