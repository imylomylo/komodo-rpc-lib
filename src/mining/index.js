// == Mining ==
// getblocksubsidy height
rpc.getblocksubsidy().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblocktemplate ( "jsonrequestobject" )
rpc.getblocktemplate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})
// getlocalsolps
rpc.getlocalsolps().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getmininginfo
rpc.getmininginfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getnetworkhashps ( blocks height )
rpc.getnetworkhashps().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getnetworksolps ( blocks height )
rpc.getnetworksolps().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// prioritisetransaction <txid> <priority delta> <fee delta>
rpc.prioritisetransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// submitblock "hexdata" ( "jsonparametersobject" )
rpc.submitblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})