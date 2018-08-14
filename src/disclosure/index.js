// == Disclosure ==
// z_getpaymentdisclosure "txid" "js_index" "output_index" ("message") 
export function z_getpaymentdisclosure(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getpaymentdisclosure().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// z_validatepaymentdisclosure "paymentdisclosure"
export function z_validatepaymentdisclosure(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_validatepaymentdisclosure().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
    z_getpaymentdisclosure,
    z_validatepaymentdisclosure
}