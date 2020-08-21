// == Mining ==
// getblocksubsidy height
 function getblocksubsidy(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getblocksubsidy().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getblocksubsidy - Not supported yet")
    })
}

// getblocktemplate ( "jsonrequestobject" )
 function getblocktemplate(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getblocktemplate().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getblocktemplate - Not supported yet")
    })
}

// getlocalsolps
 function getlocalsolps(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getlocalsolps().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getlocalsolps - Not supported yet")
    })
}

// getmininginfo
 function getmininginfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getmininginfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getmininginfo - Not supported yet")
    })
}

// getnetworkhashps ( blocks height )
 function getnetworkhashps(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getnetworkhashps().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getnetworkhashps - Not supported yet")
    })
}

// getnetworksolps ( blocks height )
 function getnetworksolps(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getnetworksolps().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getnetworksolps - Not supported yet")
    })
}

// prioritisetransaction <txid> <priority delta> <fee delta>
 function prioritisetransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.prioritisetransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("prioritisetransaction - Not supported yet")
    })
}

// submitblock "hexdata" ( "jsonparametersobject" )
 function submitblock(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.submitblock().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("submitblock - Not supported yet")
    })
}

 module.exports = {
    getblocksubsidy,
    getblocktemplate,
    getlocalsolps,
    getmininginfo,
    getnetworkhashps,
    getnetworksolps,
    prioritisetransaction,
    submitblock
}
