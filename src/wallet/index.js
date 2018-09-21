// == Wallet ==
// addmultisigaddress nrequired ["key",...] ( "account" )
export function addmultisigaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.addmultisigaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("addmultisigaddress - Not supported yet")
    })
}

// backupwallet "destination"
export function backupwallet(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.backupwallet().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("backupwallet - Not supported yet")
    })
}

// dumpprivkey "komodoaddress"
export function dumpprivkey(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.dumpprivkey().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("dumpprivkey - Not supported yet")
    })
}

// dumpwallet "filename"
export function dumpwallet(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.dumpwallet().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("dumpwallet - Not supported yet")
    })
}

// encryptwallet "passphrase"
export function encryptwallet(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.encryptwallet().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("encryptwallet - Not supported yet")
    })
}

// getaccount "KMD_address"
export function getaccount(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getaccount().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getaccount - Not supported yet")
    })
}

// getaccountaddress "account"
export function getaccountaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getaccountaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getaccountaddress - Not supported yet")
    })
}

// getaddressesbyaccount "account"
export function getaddressesbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getaddressesbyaccount().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getaddressesbyaccount - Not supported yet")
    })
}

// getbalance ( "account" minconf includeWatchonly )
export function getbalance(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getbalance().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getbalance - Not supported yet")
    })
}

// getbalance64
export function getbalance64(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getbalance64().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getbalance64 - Not supported yet")
    })
}

// getnewaddress ( "account" )
export function getnewaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getnewaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getnewaddress - Not supported yet")
    })
}

// getrawchangeaddress
export function getrawchangeaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getrawchangeaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getrawchangeaddress - Not supported yet")
    })
}

// getreceivedbyaccount "account" ( minconf )
export function getreceivedbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getreceivedbyaccount().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getreceivedbyaccount - Not supported yet")
    })
}

// getreceivedbyaddress "KMD_address" ( minconf )
export function getreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getreceivedbyaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getreceivedbyaddress - Not supported yet")
    })
}

// gettransaction "txid" ( includeWatchonly )
export function gettransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.gettransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("gettransaction - Not supported yet")
    })
}

// getunconfirmedbalance
export function getunconfirmedbalance(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.getunconfirmedbalance().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("getunconfirmedbalance - Not supported yet")
    })
}

/**
 * @api {post} / getwalletinfo
 * @apiName getwalletinfo
 * @apiGroup wallet
 * @apiDescription get wallet info
 * @apiSampleRequest http://localhost:7771/
 *
 * @apiParam {Object} rpc the object configured using control.connect(url,username,password)
 *
 * @apiSuccess {Object} resp returns json object of daemon info
 */
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
        // rpc.importaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("importaddress - Not supported yet")
    })
}

// importprivkey "komodoprivkey" ( "label" rescan )
export function importprivkey(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.importprivkey().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("importprivkey - Not supported yet")
    })
}

// importwallet "filename"
export function importwallet(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.importwallet().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("importwallet - Not supported yet")
    })
}

// keypoolrefill ( newsize )
export function keypoolrefill(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.keypoolrefill().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("keypoolrefill - Not supported yet")
    })
}

// listaccounts ( minconf includeWatchonly)
export function listaccounts(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listaccounts().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listaccounts - Not supported yet")
    })
}

// listaddressgroupings
export function listaddressgroupings(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listaddressgroupings().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listaddressgroupings - Not supported yet")
    })
}

// listlockunspent
export function listlockunspent(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listlockunspent().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listlockunspent - Not supported yet")
    })
}

// listreceivedbyaccount ( minconf includeempty includeWatchonly)
export function listreceivedbyaccount(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listreceivedbyaccount().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listreceivedbyaccount - Not supported yet")
    })
}

// listreceivedbyaddress ( minconf includeempty includeWatchonly)
export function listreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listreceivedbyaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listreceivedbyaddress - Not supported yet")
    })
}

// listsinceblock ( "blockhash" target-confirmations includeWatchonly)
export function listsinceblock(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listsinceblock().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listsinceblock - Not supported yet")
    })
}

// listtransactions ( "account" count from includeWatchonly)
export function listtransactions(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listtransactions().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listtransactions - Not supported yet")
    })
}

// listunspent ( minconf maxconf  ["address",...] )
export function listunspent(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.listunspent().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("listunspent - Not supported yet")
    })
}

// lockunspent unlock [{"txid":"txid","vout":n},...]
export function lockunspent(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.lockunspent().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("lockunspent - Not supported yet")
    })
}

// move "fromaccount" "toaccount" amount ( minconf "comment" )
export function move(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.move().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("move - Not supported yet")
    })
}

// resendwallettransactions
export function resendwallettransactions(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.resendwallettransactions().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("resendwallettransactions - Not supported yet")
    })
}

// sendfrom "fromaccount" "toKMDaddress" amount ( minconf "comment" "comment-to" )
export function sendfrom(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.sendfrom().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("sendfrom - Not supported yet")
    })
}

// sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
export function sendmany(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.sendmany().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("sendmany - Not supported yet")
    })
}

// sendtoaddress "KMD_address" amount ( "comment" "comment-to" subtractfeefromamount )
export function sendtoaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.sendtoaddress(address, amount).then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("sendtoaddress - Not supported yet")
    })
}

// setaccount "KMD_address" "account"
export function setaccount(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.setaccount().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("setaccount - Not supported yet")
    })
}

// settxfee amount
export function settxfee(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.settxfee().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("settxfee - Not supported yet")
    })
}

// signmessage "KMD address" "message"
export function signmessage(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.signmessage().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("signmessage - Not supported yet")
    })
}

// z_exportkey "zaddr"
export function z_exportkey(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_exportkey().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_exportkey - Not supported yet")
    })
}

// z_exportviewingkey "zaddr"
export function z_exportviewingkey(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_exportviewingkey().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_exportviewingkey - Not supported yet")
    })
}

// z_exportwallet "filename"
export function z_exportwallet(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_exportwallet().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_exportwallet - Not supported yet")
    })
}

// z_getbalance "address" ( minconf )
export function z_getbalance(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_getbalance().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_getbalance - Not supported yet")
    })
}

// z_getnewaddress
export function z_getnewaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_getnewaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_getnewaddress - Not supported yet")
    })
}

// z_getoperationresult (["operationid", ... ]) 
export function z_getoperationresult(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_getoperationresult().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_getoperationresult - Not supported yet")
    })
}

// z_getoperationstatus (["operationid", ... ]) 
export function z_getoperationstatus(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_getoperationstatus().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_getoperationstatus - Not supported yet")
    })
}

// z_gettotalbalance ( minconf includeWatchonly )
export function z_gettotalbalance(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_gettotalbalance().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_gettotalbalance - Not supported yet")
    })
}

// z_importkey "zkey" ( rescan startHeight )
export function z_importkey(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_importkey().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_importkey - Not supported yet")
    })
}

// z_importviewingkey "vkey" ( rescan startHeight )
export function z_importviewingkey(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_importviewingkey().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_importviewingkey - Not supported yet")
    })
}

// z_importwallet "filename"
export function z_importwallet(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_importwallet().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_importwallet - Not supported yet")
    })
}

// z_listaddresses ( includeWatchonly )
export function z_listaddresses(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_listaddresses().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_listaddresses - Not supported yet")
    })
}

// z_listoperationids
export function z_listoperationids(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_listoperationids().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_listoperationids - Not supported yet")
    })
}

// z_listreceivedbyaddress "address" ( minconf )
export function z_listreceivedbyaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_listreceivedbyaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_listreceivedbyaddress - Not supported yet")
    })
}

// z_mergetoaddress ["fromaddress", ... ] "toaddress" ( fee ) ( transparent_limit ) ( shielded_limit ) ( memo )
export function z_mergetoaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_mergetoaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_mergetoaddress - Not supported yet")
    })
}

// z_sendmany "fromaddress" [{"address":... ,"amount":...},...] ( minconf ) ( fee )
export function z_sendmany(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_sendmany().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_sendmany - Not supported yet")
    })
}

// z_shieldcoinbase "fromaddress" "tozaddress" ( fee ) ( limit )
export function z_shieldcoinbase(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.z_shieldcoinbase().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("z_shieldcoinbase - Not supported yet")
    })
}

// zcbenchmark benchmarktype samplecount
export function zcbenchmark(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.zcbenchmark().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("zcbenchmark - Not supported yet")
    })
}

// zcrawjoinsplit rawtx inputs outputs vpub_old vpub_new
export function zcrawjoinsplit(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.zcrawjoinsplit().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("zcrawjoinsplit - Not supported yet")
    })
}

// zcrawkeygen
export function zcrawkeygen(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.zcrawkeygen().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("zcrawkeygen - Not supported yet")
    })
}

// zcrawreceive zcsecretkey encryptednote
export function zcrawreceive(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.zcrawreceive().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("zcrawreceive - Not supported yet")
    })
}

// zcsamplejoinsplit
export function zcsamplejoinsplit(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.zcsamplejoinsplit().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("zcsamplejoinsplit - Not supported yet")
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