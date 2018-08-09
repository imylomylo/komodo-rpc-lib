// == Auction ==
// auctionaddress [pubkey]
rpc.auctionaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})