// == Wallet ==
// addmultisigaddress nrequired ["key",...] ( "account" )
export function addmultisigaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.addmultisigaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// backupwallet "destination"
export function backupwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.backupwallet().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// dumpprivkey "komodoaddress"
export function dumpprivkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dumpprivkey().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// dumpwallet "filename"
export function dumpwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dumpwallet().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// encryptwallet "passphrase"
export function encryptwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.encryptwallet().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaccount "KMD_address"
export function getaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaccount().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaccountaddress "account"
export function getaccountaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaccountaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddressesbyaccount "account"
export function getaddressesbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressesbyaccount().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getbalance ( "account" minconf includeWatchonly )
export function getbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getbalance().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getbalance64
export function getbalance64(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getbalance64().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnewaddress ( "account" )
export function getnewaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnewaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getrawchangeaddress
export function getrawchangeaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getrawchangeaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getreceivedbyaccount "account" ( minconf )
export function getreceivedbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getreceivedbyaccount().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getreceivedbyaddress "KMD_address" ( minconf )
export function getreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getreceivedbyaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettransaction "txid" ( includeWatchonly )
export function gettransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettransaction().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getunconfirmedbalance
export function getunconfirmedbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getunconfirmedbalance().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getwalletinfo
export function getwalletinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getwalletinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// importaddress "address" ( "label" rescan )
export function importaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.importaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// importprivkey "komodoprivkey" ( "label" rescan )
export function importprivkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.importprivkey().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// importwallet "filename"
export function importwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.importwallet().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// keypoolrefill ( newsize )
export function keypoolrefill(rpc) {
    return new Promise((resolve, reject) => {
        rpc.keypoolrefill().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listaccounts ( minconf includeWatchonly)
export function listaccounts(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listaccounts().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listaddressgroupings
export function listaddressgroupings(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listaddressgroupings().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listlockunspent
export function listlockunspent(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listlockunspent().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listreceivedbyaccount ( minconf includeempty includeWatchonly)
export function listreceivedbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listreceivedbyaccount().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listreceivedbyaddress ( minconf includeempty includeWatchonly)
export function listreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listreceivedbyaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listsinceblock ( "blockhash" target-confirmations includeWatchonly)
export function listsinceblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listsinceblock().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listtransactions ( "account" count from includeWatchonly)
export function listtransactions(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listtransactions().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listunspent ( minconf maxconf  ["address",...] )
export function listunspent(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listunspent().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// lockunspent unlock [{"txid":"txid","vout":n},...]
export function lockunspent(rpc) {
    return new Promise((resolve, reject) => {
        rpc.lockunspent().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// move "fromaccount" "toaccount" amount ( minconf "comment" )
export function move(rpc) {
    return new Promise((resolve, reject) => {
        rpc.move().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// resendwallettransactions
export function resendwallettransactions(rpc) {
    return new Promise((resolve, reject) => {
        rpc.resendwallettransactions().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// sendfrom "fromaccount" "toKMDaddress" amount ( minconf "comment" "comment-to" )
export function sendfrom(rpc) {
    return new Promise((resolve, reject) => {
        rpc.sendfrom().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
export function sendmany(rpc) {
    return new Promise((resolve, reject) => {
        rpc.sendmany().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// sendtoaddress "KMD_address" amount ( "comment" "comment-to" subtractfeefromamount )
export function sendtoaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.sendtoaddress(address, amount).then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// setaccount "KMD_address" "account"
export function setaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.setaccount().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// settxfee amount
export function settxfee(rpc) {
    return new Promise((resolve, reject) => {
        rpc.settxfee().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// signmessage "KMD address" "message"
export function signmessage(rpc) {
    return new Promise((resolve, reject) => {
        rpc.signmessage().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_exportkey "zaddr"
export function z_exportkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_exportkey().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_exportviewingkey "zaddr"
export function z_exportviewingkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_exportviewingkey().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_exportwallet "filename"
export function z_exportwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_exportwallet().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getbalance "address" ( minconf )
export function z_getbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getbalance().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getnewaddress
export function z_getnewaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getnewaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getoperationresult (["operationid", ... ]) 
export function z_getoperationresult(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getoperationresult().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getoperationstatus (["operationid", ... ]) 
export function z_getoperationstatus(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getoperationstatus().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_gettotalbalance ( minconf includeWatchonly )
export function z_gettotalbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_gettotalbalance().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_importkey "zkey" ( rescan startHeight )
export function z_importkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_importkey().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_importviewingkey "vkey" ( rescan startHeight )
export function z_importviewingkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_importviewingkey().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_importwallet "filename"
export function z_importwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_importwallet().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_listaddresses ( includeWatchonly )
export function z_listaddresses(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_listaddresses().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_listoperationids
export function z_listoperationids(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_listoperationids().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_listreceivedbyaddress "address" ( minconf )
export function z_listreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_listreceivedbyaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_mergetoaddress ["fromaddress", ... ] "toaddress" ( fee ) ( transparent_limit ) ( shielded_limit ) ( memo )
export function z_mergetoaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_mergetoaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_sendmany "fromaddress" [{"address":... ,"amount":...},...] ( minconf ) ( fee )
export function z_sendmany(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_sendmany().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_shieldcoinbase "fromaddress" "tozaddress" ( fee ) ( limit )
export function z_shieldcoinbase(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_shieldcoinbase().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcbenchmark benchmarktype samplecount
export function zcbenchmark(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcbenchmark().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcrawjoinsplit rawtx inputs outputs vpub_old vpub_new
export function zcrawjoinsplit(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcrawjoinsplit().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcrawkeygen
export function zcrawkeygen(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcrawkeygen().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcrawreceive zcsecretkey encryptednote
export function zcrawreceive(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcrawreceive().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcsamplejoinsplit
export function zcsamplejoinsplit(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcsamplejoinsplit().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


export default {
    addmultisigaddress,
    backupwallet,
    dumpprivkey,
    dumpwallet,
    encryptwallet,
    getaccount,
    getaccountaddress,
    getaddressesbyaccount,
    getbalance,
    getbalance64,
    getnewaddress,
    getrawchangeaddress,
    getreceivedbyaccount,
    getreceivedbyaddress,
    gettransaction,
    getunconfirmedbalance,
    getwalletinfo,
    importaddress,
    importprivkey,
    importwallet,
    keypoolrefill,
    listaccounts,
    listaddressgroupings,
    listlockunspent,
    listreceivedbyaccount,
    listreceivedbyaddress,
    listsinceblock,
    listtransactions,
    listunspent,
    lockunspent,
    move,
    resendwallettransactions,
    sendfrom,
    sendmany,
    sendtoaddress,
    setaccount,
    settxfee,
    signmessage,
    z_exportkey,
    z_exportviewingkey,
    z_exportwallet,
    z_getbalance,
    z_getnewaddress,
    z_getoperationresult,
    z_getoperationstatus,
    z_gettotalbalance,
    z_importkey,
    z_importviewingkey,
    z_importwallet,
    z_listaddresses,
    z_listoperationids,
    z_listreceivedbyaddress,
    z_mergetoaddress,
    z_sendmany,
    z_shieldcoinbase,
    zcbenchmark,
    zcrawjoinsplit,
    zcrawkeygen,
    zcrawreceive,
    zcsamplejoinsplit
}