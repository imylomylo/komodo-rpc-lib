console.log("Welcome to the heaps simple rpc tester!")
// stdrpc
const stdrpc = require('stdrpc')
// const rpc = stdrpc("http://localhost:11607/", { // PIZZA
const rpc = stdrpc("http://localhost:7771/", {
    req: {
        auth: {
			username: "rpcuser",
			password: "passworddrowssap"
		}
    }
});


process.exit(1)

// IN ORDER OF komodo-cli -regtest help

// == FSM ==
// FSMaddress [pubkey]
rpc.FSMaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == FSMcreate ==
// FSMcreate name states
rpc.FSMcreate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == FSMinfo ==
// FSMinfo fundingtxid
rpc.FSMinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == FSMlist ==
// FSMlist
rpc.FSMlist().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Addressindex ==
// getaddressbalance
rpc.getaddressbalance().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddressdeltas
rpc.getaddressdeltas().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddressmempool
rpc.getaddressmempool().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddresstxids
rpc.getaddresstxids().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getaddressutxos
rpc.getaddressutxos().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getsnapshot
rpc.getsnapshot().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Auction ==
// auctionaddress [pubkey]
rpc.auctionaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Blockchain ==
// coinsupply <height>
rpc.coinsupply().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getbestblockhash
rpc.getbestblockhash().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblock "hash|height" ( verbose )
rpc.getblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockchaininfo
rpc.getblockchaininfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockcount
rpc.getblockcount().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockhash index
rpc.getblockhash().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockhashes timestamp
rpc.getblockhashes().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getblockheader "hash" ( verbose )
rpc.getblockheader().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getchaintips
rpc.getchaintips().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getdifficulty
rpc.getdifficulty().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getmempoolinfo
rpc.getmempoolinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getrawmempool ( verbose )
rpc.getrawmempool().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getspentinfo
rpc.getspentinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// gettxout "txid" n ( includemempool )
rpc.gettxout().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// gettxoutproof ["txid",...] ( blockhash )
rpc.gettxoutproof().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// gettxoutsetinfo
rpc.gettxoutsetinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// kvsearch key
rpc.kvsearch().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// kvupdate key "value" days passphrase
rpc.kvupdate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// minerids needs height
rpc.minerids().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// notaries height timestamp
rpc.notaries().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// paxpending needs no args
rpc.paxpending().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// paxprice "base" "rel" height
rpc.paxprice().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// paxprices "base" "rel" maxsamples
rpc.paxprices().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// verifychain ( checklevel numblocks )
rpc.verifychain().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// verifytxoutproof "proof"
rpc.verifytxoutproof().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})


// == Control ==
// getinfo
rpc.getinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// help ( "command" )
rpc.help().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// stop
rpc.stop().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Crosschain ==
// MoMoMdata symbol kmdheight ccid
rpc.MoMoMdata().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// assetchainproof needs a txid
rpc.assetchainproof().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// calc_MoM height MoMdepth
rpc.calc_MoM().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// height_MoM height
rpc.height_MoM().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// migrate_completeimporttransaction importTx
rpc.migrate_completeimporttransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// migrate_converttoexport rawTx dest_symbol export_amount
rpc.migrate_converttoexport().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// migrate_createimporttransaction burnTx payouts
rpc.migrate_createimporttransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Dice ==
// diceaddfunds name fundingtxid amount
rpc.diceaddfunds().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// diceaddress [pubkey]
rpc.diceaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// dicebet name fundingtxid amount odds
rpc.dicebet().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// dicefinish name fundingtxid bettxid
rpc.dicefinish().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// dicefund name funds minbet maxbet maxodds timeoutblocks
rpc.dicefund().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// diceinfo fundingtxid
rpc.diceinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// dicelist
rpc.dicelist().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// dicestatus name fundingtxid bettxid
rpc.dicestatus().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

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

// == Faucet ==
// faucetaddress [pubkey]
rpc.faucetaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// faucetfund amount
rpc.faucetfund().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// faucetget
rpc.faucetget().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// faucetinfo
rpc.faucetinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Generating ==
// generate numblocks
rpc.generate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getgenerate
rpc.getgenerate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// setgenerate generate ( genproclimit )
rpc.setgenerate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Lotto ==
// lottoaddress [pubkey]
rpc.lottoaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

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

// == Rawtransactions ==
// createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}
rpc.createrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// decoderawtransaction "hexstring"
rpc.decoderawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// decodescript "hex"
rpc.decodescript().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// fundrawtransaction "hexstring"
rpc.fundrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getrawtransaction "txid" ( verbose )
rpc.getrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// sendrawtransaction "hexstring" ( allowhighfees )
rpc.sendrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )
rpc.signrawtransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// == Rewards ==
// rewardsaddfunding name fundingtxid amount
rpc.rewardsaddfunding().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardsaddress [pubkey]
rpc.rewardsaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardscreatefunding name amount APR mindays maxdays mindeposit
rpc.rewardscreatefunding().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardsinfo fundingtxid
rpc.rewardsinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardslist
rpc.rewardslist().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardslock name fundingtxid amount
rpc.rewardslock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// rewardsunlock name fundingtxid [txid]
rpc.rewardsunlock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

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

// == Util ==
// createmultisig nrequired ["key",...]
rpc.createmultisig().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// estimatefee nblocks
rpc.estimatefee().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// estimatepriority nblocks
rpc.estimatepriority().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// invalidateblock "hash"
rpc.invalidateblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_deposit "depositaddress"
rpc.jumblr_deposit().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_pause
rpc.jumblr_pause().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_resume
rpc.jumblr_resume().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_secret "secretaddress"
rpc.jumblr_secret().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// reconsiderblock "hash"
rpc.reconsiderblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// validateaddress "komodoaddress"
rpc.validateaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// verifymessage "komodoaddress" "signature" "message"
rpc.verifymessage().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_validateaddress "zaddr"
rpc.z_validateaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

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
