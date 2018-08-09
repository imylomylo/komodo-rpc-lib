// == Auction ==
// auctionaddress [pubkey]
function auctionaddress(rpc) {
    rpc.auctionaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

export { auctionaddress }