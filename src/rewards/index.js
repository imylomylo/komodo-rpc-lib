// == Rewards ==
// rewardsaddfunding name fundingtxid amount
rpc.rewardsaddfunding().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardsaddress [pubkey]
rpc.rewardsaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardscreatefunding name amount APR mindays maxdays mindeposit
rpc.rewardscreatefunding().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardsinfo fundingtxid
rpc.rewardsinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardslist
rpc.rewardslist().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardslock name fundingtxid amount
rpc.rewardslock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardsunlock name fundingtxid [txid]
rpc.rewardsunlock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})