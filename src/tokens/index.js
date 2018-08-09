// == Tokens ==
// tokenaddress [pubkey]
rpc.tokenaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokenask numtokens tokenid price
rpc.tokenask().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokenbalance tokenid [pubkey]
rpc.tokenbalance().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokenbid numtokens tokenid price
rpc.tokenbid().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokencancelask tokenid asktxid
rpc.tokencancelask().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokencancelbid tokenid bidtxid
rpc.tokencancelbid().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokencreate name supply description
rpc.tokencreate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokenfillask tokenid asktxid fillunits
rpc.tokenfillask().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokenfillbid tokenid bidtxid fillamount
rpc.tokenfillbid().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokeninfo tokenid
rpc.tokeninfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokenlist
rpc.tokenlist().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokenorders [tokenid]
rpc.tokenorders().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// tokentransfer tokenid destpubkey amount
rpc.tokentransfer().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})