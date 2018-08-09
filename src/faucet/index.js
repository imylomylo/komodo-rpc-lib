// == Faucet ==
// faucetaddress [pubkey]
rpc.faucetaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// faucetfund amount
rpc.faucetfund().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// faucetget
rpc.faucetget().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// faucetinfo
rpc.faucetinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})