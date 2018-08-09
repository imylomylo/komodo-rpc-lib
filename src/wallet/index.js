// == Wallet ==
// addmultisigaddress nrequired ["key",...] ( "account" )
function addmultisigaddress(rpc) {
    rpc.addmultisigaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

// backupwallet "destination"
function backupwallet(rpc) {
    rpc.backupwallet().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// dumpprivkey "komodoaddress"
function dumpprivkey(rpc) {
    rpc.dumpprivkey().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// dumpwallet "filename"
function dumpwallet(rpc) {
    rpc.dumpwallet().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// encryptwallet "passphrase"
function encryptwallet(rpc) {
    rpc.encryptwallet().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getaccount "KMD_address"
function getaccount(rpc) {
    rpc.getaccount().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getaccountaddress "account"
function getaccountaddress(rpc) {
    rpc.getaccountaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getaddressesbyaccount "account"
function getaddressesbyaccount(rpc) {
    rpc.getaddressesbyaccount().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getbalance ( "account" minconf includeWatchonly )
function getbalance(rpc) {
    rpc.getbalance().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getbalance64
function getbalance64(rpc) {
    rpc.getbalance64().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getnewaddress ( "account" )
function getnewaddress(rpc) {
    rpc.getnewaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getrawchangeaddress
function getrawchangeaddress(rpc) {
    rpc.getrawchangeaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getreceivedbyaccount "account" ( minconf )
function getreceivedbyaccount(rpc) {
    rpc.getreceivedbyaccount().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getreceivedbyaddress "KMD_address" ( minconf )
function getreceivedbyaddress(rpc) {
    rpc.getreceivedbyaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// gettransaction "txid" ( includeWatchonly )
function gettransaction(rpc) {
    rpc.gettransaction().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getunconfirmedbalance
function getunconfirmedbalance(rpc) {
    rpc.getunconfirmedbalance().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// getwalletinfo
function getwalletinfo(rpc) {
    rpc.getwalletinfo().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// importaddress "address" ( "label" rescan )
function importaddress(rpc) {
    rpc.importaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// importprivkey "komodoprivkey" ( "label" rescan )
function importprivkey(rpc) {
    rpc.importprivkey().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// importwallet "filename"
function importwallet(rpc) {
    rpc.importwallet().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// keypoolrefill ( newsize )
function keypoolrefill(rpc) {
    rpc.keypoolrefill().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listaccounts ( minconf includeWatchonly)
function listaccounts(rpc) {
    rpc.listaccounts().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listaddressgroupings
function listaddressgroupings(rpc) {
    rpc.listaddressgroupings().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listlockunspent
function listlockunspent(rpc) {
    rpc.listlockunspent().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listreceivedbyaccount ( minconf includeempty includeWatchonly)
function listreceivedbyaccount(rpc) {
    rpc.listreceivedbyaccount().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listreceivedbyaddress ( minconf includeempty includeWatchonly)
function listreceivedbyaddress(rpc) {
    rpc.listreceivedbyaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listsinceblock ( "blockhash" target-confirmations includeWatchonly)
function listsinceblock(rpc) {
    rpc.listsinceblock().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listtransactions ( "account" count from includeWatchonly)
function listtransactions(rpc) {
    rpc.listtransactions().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// listunspent ( minconf maxconf  ["address",...] )
function listunspent(rpc) {
    rpc.listunspent().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// lockunspent unlock [{"txid":"txid","vout":n},...]
function lockunspent(rpc) {
    rpc.lockunspent().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// move "fromaccount" "toaccount" amount ( minconf "comment" )
function move(rpc) {
    rpc.move().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// resendwallettransactions
function resendwallettransactions(rpc) {
    rpc.resendwallettransactions().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// sendfrom "fromaccount" "toKMDaddress" amount ( minconf "comment" "comment-to" )
function sendfrom(rpc) {
    rpc.sendfrom().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
function sendmany(rpc) {
    rpc.sendmany().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// sendtoaddress "KMD_address" amount ( "comment" "comment-to" subtractfeefromamount )
function sendtoaddress(rpc) {
    rpc.sendtoaddress(address, amount).then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// setaccount "KMD_address" "account"
function setaccount(rpc) {
    rpc.setaccount().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// settxfee amount
function settxfee(rpc) {
    rpc.settxfee().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// signmessage "KMD address" "message"
function signmessage(rpc) {
    rpc.signmessage().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_exportkey "zaddr"
function z_exportkey(rpc) {
    rpc.z_exportkey().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_exportviewingkey "zaddr"
function z_exportviewingkey(rpc) {
    rpc.z_exportviewingkey().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_exportwallet "filename"
function z_exportwallet(rpc) {
    rpc.z_exportwallet().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_getbalance "address" ( minconf )
function z_getbalance(rpc) {
    rpc.z_getbalance().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_getnewaddress
function z_getnewaddress(rpc) {
    rpc.z_getnewaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_getoperationresult (["operationid", ... ]) 
function z_getoperationresult(rpc) {
    rpc.z_getoperationresult().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_getoperationstatus (["operationid", ... ]) 
function z_getoperationstatus(rpc) {
    rpc.z_getoperationstatus().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_gettotalbalance ( minconf includeWatchonly )
function z_gettotalbalance(rpc) {
    rpc.z_gettotalbalance().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_importkey "zkey" ( rescan startHeight )
function z_importkey(rpc) {
    rpc.z_importkey().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_importviewingkey "vkey" ( rescan startHeight )
function z_importviewingkey(rpc) {
    rpc.z_importviewingkey().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_importwallet "filename"
function z_importwallet(rpc) {
    rpc.z_importwallet().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_listaddresses ( includeWatchonly )
function z_listaddresses(rpc) {
    rpc.z_listaddresses().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_listoperationids
function z_listoperationids(rpc) {
    rpc.z_listoperationids().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_listreceivedbyaddress "address" ( minconf )
function z_listreceivedbyaddress(rpc) {
    rpc.z_listreceivedbyaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_mergetoaddress ["fromaddress", ... ] "toaddress" ( fee ) ( transparent_limit ) ( shielded_limit ) ( memo )
function z_mergetoaddress(rpc) {
    rpc.z_mergetoaddress().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_sendmany "fromaddress" [{"address":... ,"amount":...},...] ( minconf ) ( fee )
function z_sendmany(rpc) {
    rpc.z_sendmany().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// z_shieldcoinbase "fromaddress" "tozaddress" ( fee ) ( limit )
function z_shieldcoinbase(rpc) {
    rpc.z_shieldcoinbase().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// zcbenchmark benchmarktype samplecount
function zcbenchmark(rpc) {
    rpc.zcbenchmark().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// zcrawjoinsplit rawtx inputs outputs vpub_old vpub_new
function zcrawjoinsplit(rpc) {
    rpc.zcrawjoinsplit().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// zcrawkeygen
function zcrawkeygen(rpc) {
    rpc.zcrawkeygen().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// zcrawreceive zcsecretkey encryptednote
function zcrawreceive(rpc) {
    rpc.zcrawreceive().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}
// zcsamplejoinsplit
function zcsamplejoinsplit(rpc) {
    rpc.zcsamplejoinsplit().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

export { addmultisigaddress, backupwallet, dumpprivkey, dumpwallet, encryptwallet, getaccount, getaccountaddress, getaddressesbyaccount, getbalance, getbalance64, getnewaddress, getrawchangeaddress, getreceivedbyaccount, getreceivedbyaddress, gettransaction, getunconfirmedbalance, getwalletinfo, importaddress, importprivkey, importwallet, keypoolrefill, listaccounts, listaddressgroupings, listlockunspent, listreceivedbyaccount, listreceivedbyaddress, listsinceblock, listtransactions, listunspent, lockunspent, move, resendwallettransactions, sendfrom, sendmany, sendtoaddress, setaccount, settxfee, signmessage, z_exportkey, z_exportviewingkey, z_exportwallet, z_getbalance, z_getnewaddress, z_getoperationresult, z_getoperationstatus, z_gettotalbalance, z_importkey, z_importviewingkey, z_importwallet, z_listaddresses, z_listoperationids, z_listreceivedbyaddress, z_mergetoaddress, z_sendmany, z_shieldcoinbase, zcbenchmark, zcrawjoinsplit, zcrawkeygen, zcrawreceive, zcsamplejoinsplit }