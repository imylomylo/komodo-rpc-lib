// == Rewards ==
// rewardsaddfunding name fundingtxid amount
 function rewardsaddfunding(rpc) {
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
 function rewardsaddress(rpc) {
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
 function rewardscreatefunding(rpc) {
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
 function rewardsinfo(rpc) {
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
 function rewardslist(rpc) {
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
 function rewardslock(rpc) {
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
 function rewardsunlock(rpc) {
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

 module.exports ={
    rewardsaddfunding,
    rewardsaddress,
    rewardscreatefunding,
    rewardsinfo,
    rewardslist,
    rewardslock,
    rewardsunlock
}
