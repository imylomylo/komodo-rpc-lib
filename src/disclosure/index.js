// == Disclosure ==
// z_getpaymentdisclosure "txid" "js_index" "output_index" ("message") 
rpc.z_getpaymentdisclosure().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_validatepaymentdisclosure "paymentdisclosure"
rpc.z_validatepaymentdisclosure().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})