// == Lotto ==
// lottoaddress [pubkey]
export function lottoaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.lottoaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("lottoaddress - Not supported yet")
    })
}

export default {
    lottoaddress
}