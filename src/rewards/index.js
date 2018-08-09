// == Rewards ==
// rewardsaddfunding name fundingtxid amount
function rewardsaddfunding(rpc) {
    rpc.rewardsaddfunding().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

// rewardsaddress [pubkey]
function rewardsaddress(rpc) {
    rpc.rewardsaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

// rewardscreatefunding name amount APR mindays maxdays mindeposit
function rewardscreatefunding(rpc) {
    rpc.rewardscreatefunding().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

// rewardsinfo fundingtxid
function rewardsinfo(rpc) {
    rpc.rewardsinfo().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

// rewardslist
function rewardslist(rpc) {
    rpc.rewardslist().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

// rewardslock name fundingtxid amount
function rewardslock(rpc) {
    rpc.rewardslock().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

// rewardsunlock name fundingtxid [txid]
function rewardsunlock(rpc) {
    rpc.rewardsunlock().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

export { rewardsaddfunding, rewardsaddress, rewardscreatefunding, rewardsinfo, rewardslist, rewardslock, rewardsunlock }