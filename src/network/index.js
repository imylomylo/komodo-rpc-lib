// == Network ==
// addnode "node" "add|remove|onetry"
rpc.addnode().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// clearbanned
rpc.clearbanned().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// disconnectnode "node" 
rpc.disconnectnode().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddednodeinfo dns ( "node" )
rpc.getaddednodeinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getconnectioncount
rpc.getconnectioncount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getdeprecationinfo
rpc.getdeprecationinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getnettotals
rpc.getnettotals().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getnetworkinfo
rpc.getnetworkinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getpeerinfo
rpc.getpeerinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listbanned
rpc.listbanned().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// ping
rpc.ping().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// setban "ip(/netmask)" "add|remove" (bantime) (absolute)
rpc.setban().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})