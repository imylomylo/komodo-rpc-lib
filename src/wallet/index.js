// == Wallet ==
// addmultisigaddress nrequired ["key",...] ( "account" )
function addmultisigaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.addmultisigaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// backupwallet "destination"
function backupwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.backupwallet().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// dumpprivkey "komodoaddress"
function dumpprivkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dumpprivkey().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// dumpwallet "filename"
function dumpwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dumpwallet().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// encryptwallet "passphrase"
function encryptwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.encryptwallet().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaccount "KMD_address"
function getaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaccount().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaccountaddress "account"
function getaccountaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaccountaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getaddressesbyaccount "account"
function getaddressesbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getaddressesbyaccount().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getbalance ( "account" minconf includeWatchonly )
function getbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getbalance().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getbalance64
function getbalance64(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getbalance64().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getnewaddress ( "account" )
function getnewaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getnewaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getrawchangeaddress
function getrawchangeaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getrawchangeaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getreceivedbyaccount "account" ( minconf )
function getreceivedbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getreceivedbyaccount().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getreceivedbyaddress "KMD_address" ( minconf )
function getreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getreceivedbyaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// gettransaction "txid" ( includeWatchonly )
function gettransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.gettransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getunconfirmedbalance
function getunconfirmedbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getunconfirmedbalance().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getwalletinfo
function getwalletinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getwalletinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// importaddress "address" ( "label" rescan )
function importaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.importaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// importprivkey "komodoprivkey" ( "label" rescan )
function importprivkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.importprivkey().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// importwallet "filename"
function importwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.importwallet().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// keypoolrefill ( newsize )
function keypoolrefill(rpc) {
    return new Promise((resolve, reject) => {
        rpc.keypoolrefill().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listaccounts ( minconf includeWatchonly)
function listaccounts(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listaccounts().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listaddressgroupings
function listaddressgroupings(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listaddressgroupings().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listlockunspent
function listlockunspent(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listlockunspent().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listreceivedbyaccount ( minconf includeempty includeWatchonly)
function listreceivedbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listreceivedbyaccount().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listreceivedbyaddress ( minconf includeempty includeWatchonly)
function listreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listreceivedbyaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listsinceblock ( "blockhash" target-confirmations includeWatchonly)
function listsinceblock(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listsinceblock().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listtransactions ( "account" count from includeWatchonly)
function listtransactions(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listtransactions().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// listunspent ( minconf maxconf  ["address",...] )
function listunspent(rpc) {
    return new Promise((resolve, reject) => {
        rpc.listunspent().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// lockunspent unlock [{"txid":"txid","vout":n},...]
function lockunspent(rpc) {
    return new Promise((resolve, reject) => {
        rpc.lockunspent().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// move "fromaccount" "toaccount" amount ( minconf "comment" )
function move(rpc) {
    return new Promise((resolve, reject) => {
        rpc.move().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// resendwallettransactions
function resendwallettransactions(rpc) {
    return new Promise((resolve, reject) => {
        rpc.resendwallettransactions().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// sendfrom "fromaccount" "toKMDaddress" amount ( minconf "comment" "comment-to" )
function sendfrom(rpc) {
    return new Promise((resolve, reject) => {
        rpc.sendfrom().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
function sendmany(rpc) {
    return new Promise((resolve, reject) => {
        rpc.sendmany().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// sendtoaddress "KMD_address" amount ( "comment" "comment-to" subtractfeefromamount )
function sendtoaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.sendtoaddress(address, amount).then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// setaccount "KMD_address" "account"
function setaccount(rpc) {
    return new Promise((resolve, reject) => {
        rpc.setaccount().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// settxfee amount
function settxfee(rpc) {
    return new Promise((resolve, reject) => {
        rpc.settxfee().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// signmessage "KMD address" "message"
function signmessage(rpc) {
    return new Promise((resolve, reject) => {
        rpc.signmessage().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_exportkey "zaddr"
function z_exportkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_exportkey().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_exportviewingkey "zaddr"
function z_exportviewingkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_exportviewingkey().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_exportwallet "filename"
function z_exportwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_exportwallet().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getbalance "address" ( minconf )
function z_getbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getbalance().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getnewaddress
function z_getnewaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getnewaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getoperationresult (["operationid", ... ]) 
function z_getoperationresult(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getoperationresult().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_getoperationstatus (["operationid", ... ]) 
function z_getoperationstatus(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_getoperationstatus().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_gettotalbalance ( minconf includeWatchonly )
function z_gettotalbalance(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_gettotalbalance().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_importkey "zkey" ( rescan startHeight )
function z_importkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_importkey().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_importviewingkey "vkey" ( rescan startHeight )
function z_importviewingkey(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_importviewingkey().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_importwallet "filename"
function z_importwallet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_importwallet().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_listaddresses ( includeWatchonly )
function z_listaddresses(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_listaddresses().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_listoperationids
function z_listoperationids(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_listoperationids().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_listreceivedbyaddress "address" ( minconf )
function z_listreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_listreceivedbyaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_mergetoaddress ["fromaddress", ... ] "toaddress" ( fee ) ( transparent_limit ) ( shielded_limit ) ( memo )
function z_mergetoaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_mergetoaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_sendmany "fromaddress" [{"address":... ,"amount":...},...] ( minconf ) ( fee )
function z_sendmany(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_sendmany().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// z_shieldcoinbase "fromaddress" "tozaddress" ( fee ) ( limit )
function z_shieldcoinbase(rpc) {
    return new Promise((resolve, reject) => {
        rpc.z_shieldcoinbase().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcbenchmark benchmarktype samplecount
function zcbenchmark(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcbenchmark().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcrawjoinsplit rawtx inputs outputs vpub_old vpub_new
function zcrawjoinsplit(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcrawjoinsplit().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcrawkeygen
function zcrawkeygen(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcrawkeygen().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcrawreceive zcsecretkey encryptednote
function zcrawreceive(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcrawreceive().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// zcsamplejoinsplit
function zcsamplejoinsplit(rpc) {
    return new Promise((resolve, reject) => {
        rpc.zcsamplejoinsplit().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


export {
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