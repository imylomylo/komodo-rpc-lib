// == Lotto ==
// lottoaddress [pubkey]
rpc.lottoaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})