// == Wallet ==
// addmultisigaddress nrequired ["key",...] ( "account" )
rpc.addmultisigaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// backupwallet "destination"
rpc.backupwallet().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// dumpprivkey "komodoaddress"
rpc.dumpprivkey().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// dumpwallet "filename"
rpc.dumpwallet().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// encryptwallet "passphrase"
rpc.encryptwallet().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaccount "KMD_address"
rpc.getaccount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaccountaddress "account"
rpc.getaccountaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddressesbyaccount "account"
rpc.getaddressesbyaccount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getbalance ( "account" minconf includeWatchonly )
rpc.getbalance().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getbalance64
rpc.getbalance64().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getnewaddress ( "account" )
rpc.getnewaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getrawchangeaddress
rpc.getrawchangeaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getreceivedbyaccount "account" ( minconf )
rpc.getreceivedbyaccount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getreceivedbyaddress "KMD_address" ( minconf )
rpc.getreceivedbyaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// gettransaction "txid" ( includeWatchonly )
rpc.gettransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getunconfirmedbalance
rpc.getunconfirmedbalance().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getwalletinfo
rpc.getwalletinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// importaddress "address" ( "label" rescan )
rpc.importaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// importprivkey "komodoprivkey" ( "label" rescan )
rpc.importprivkey().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// importwallet "filename"
rpc.importwallet().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// keypoolrefill ( newsize )
rpc.keypoolrefill().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listaccounts ( minconf includeWatchonly)
rpc.listaccounts().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listaddressgroupings
rpc.listaddressgroupings().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listlockunspent
rpc.listlockunspent().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listreceivedbyaccount ( minconf includeempty includeWatchonly)
rpc.listreceivedbyaccount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listreceivedbyaddress ( minconf includeempty includeWatchonly)
rpc.listreceivedbyaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listsinceblock ( "blockhash" target-confirmations includeWatchonly)
rpc.listsinceblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listtransactions ( "account" count from includeWatchonly)
rpc.listtransactions().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// listunspent ( minconf maxconf  ["address",...] )
rpc.listunspent().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// lockunspent unlock [{"txid":"txid","vout":n},...]
rpc.lockunspent().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// move "fromaccount" "toaccount" amount ( minconf "comment" )
rpc.move().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// resendwallettransactions
rpc.resendwallettransactions().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// sendfrom "fromaccount" "toKMDaddress" amount ( minconf "comment" "comment-to" )
rpc.sendfrom().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
rpc.sendmany().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// sendtoaddress "KMD_address" amount ( "comment" "comment-to" subtractfeefromamount )
rpc.sendtoaddress(address,amount).then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// setaccount "KMD_address" "account"
rpc.setaccount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// settxfee amount
rpc.settxfee().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// signmessage "KMD address" "message"
rpc.signmessage().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_exportkey "zaddr"
rpc.z_exportkey().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_exportviewingkey "zaddr"
rpc.z_exportviewingkey().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_exportwallet "filename"
rpc.z_exportwallet().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_getbalance "address" ( minconf )
rpc.z_getbalance().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_getnewaddress
rpc.z_getnewaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_getoperationresult (["operationid", ... ]) 
rpc.z_getoperationresult().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_getoperationstatus (["operationid", ... ]) 
rpc.z_getoperationstatus().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_gettotalbalance ( minconf includeWatchonly )
rpc.z_gettotalbalance().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_importkey "zkey" ( rescan startHeight )
rpc.z_importkey().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_importviewingkey "vkey" ( rescan startHeight )
rpc.z_importviewingkey().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_importwallet "filename"
rpc.z_importwallet().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_listaddresses ( includeWatchonly )
rpc.z_listaddresses().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_listoperationids
rpc.z_listoperationids().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_listreceivedbyaddress "address" ( minconf )
rpc.z_listreceivedbyaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_mergetoaddress ["fromaddress", ... ] "toaddress" ( fee ) ( transparent_limit ) ( shielded_limit ) ( memo )
rpc.z_mergetoaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_sendmany "fromaddress" [{"address":... ,"amount":...},...] ( minconf ) ( fee )
rpc.z_sendmany().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_shieldcoinbase "fromaddress" "tozaddress" ( fee ) ( limit )
rpc.z_shieldcoinbase().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// zcbenchmark benchmarktype samplecount
rpc.zcbenchmark().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// zcrawjoinsplit rawtx inputs outputs vpub_old vpub_new
rpc.zcrawjoinsplit().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// zcrawkeygen
rpc.zcrawkeygen().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// zcrawreceive zcsecretkey encryptednote
rpc.zcrawreceive().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// zcsamplejoinsplit
rpc.zcsamplejoinsplit().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})
