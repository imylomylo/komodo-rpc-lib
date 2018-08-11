// == Auction ==
// auctionaddress [pubkey]
function auctionaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.auctionaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export { auctionaddress }