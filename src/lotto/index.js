// == Lotto ==
// lottoaddress [pubkey]
function lottoaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.lottoaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    lottoaddress
}