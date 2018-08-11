// == Disclosure ==
// z_getpaymentdisclosure "txid" "js_index" "output_index" ("message") 
function z_getpaymentdisclosure(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getpaymentdisclosure().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// z_validatepaymentdisclosure "paymentdisclosure"
function z_validatepaymentdisclosure(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_validatepaymentdisclosure().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    z_getpaymentdisclosure,
    z_validatepaymentdisclosure
}