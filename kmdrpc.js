import stdrpc from 'stdrpc'
import { getinfo, help, stop } from './src/control'
import { addmultisigaddress, backupwallet, dumpprivkey, dumpwallet, encryptwallet, getaccount, getaccountaddress, getaddressesbyaccount, getbalance, getbalance64, getnewaddress, getrawchangeaddress, getreceivedbyaccount, getreceivedbyaddress, gettransaction, getunconfirmedbalance, getwalletinfo, importaddress, importprivkey, importwallet, keypoolrefill, listaccounts, listaddressgroupings, listlockunspent, listreceivedbyaccount, listreceivedbyaddress, listsinceblock, listtransactions, listunspent, lockunspent, move, resendwallettransactions, sendfrom, sendmany, sendtoaddress, setaccount, settxfee, signmessage, z_exportkey, z_exportviewingkey, z_exportwallet, z_getbalance, z_getnewaddress, z_getoperationresult, z_getoperationstatus, z_gettotalbalance, z_importkey, z_importviewingkey, z_importwallet, z_listaddresses, z_listoperationids, z_listreceivedbyaddress, z_mergetoaddress, z_sendmany, z_shieldcoinbase, zcbenchmark, zcrawjoinsplit, zcrawkeygen, zcrawreceive, zcsamplejoinsplit } from './src/wallet'
import { rewardsaddfunding, rewardsaddress, rewardscreatefunding, rewardsinfo, rewardslist, rewardslock, rewardsunlock } from './src/rewards'
import {
    coinsupply,
    getbestblockhash,
    getblock,
    getblockchaininfo,
    getblockcount,
    getblockhash,
    getblockhashes,
    getblockheader,
    getchaintips,
    getdifficulty,
    getmempoolinfo,
    getrawmempool,
    getspentinfo,
    gettxout,
    gettxoutproof,
    gettxoutsetinfo,
    kvsearch,
    kvupdate,
    minerids,
    notaries,
    paxpending,
    paxprice,
    paxprices,
    verifychain,
    verifytxoutproof
} from './src/blockchain'

import {
    getaddressbalance,
    getaddressdeltas,
    getaddressmempool,
    getaddresstxids,
    getaddressutxos,
    getsnapshot
} from './addressindex'

import { auctionaddress } from './auction'

export default class {
    constructor(url, username, password) {
        this.url = url;
        this.username = username;
        this.password = password;
        this._rpc = this.connect(this.url, this.username, this.password)
    }

    connect(url, username, password) {
        console.log("Connecting to " + url)
        const rpc = stdrpc({
            url: url,
            username: username,
            password: password
        })
        return rpc;
    }

    // control
    getinfo() {
        return getinfo(this._rpc)
    }

    help() {
        return help(this._rpc)
    }

    stop() {
        return stop(this._rpc)
    }

    // wallet
    addmultisigaddress() {
        return addmultisigaddress(this._rpc)
    }

    backupwallet() {
        return backupwallet(this._rpc)
    }

    dumpprivkey() {
        return dumpprivkey(this._rpc)
    }

    dumpwallet() {
        return dumpwallet(this._rpc)
    }

    encryptwallet() {
        return encryptwallet(this._rpc)
    }

    getaccount() {
        return getaccount(this._rpc)
    }

    getaccountaddress() {
        return getaccountaddress(this._rpc)
    }

    getaddressesbyaccount() {
        return getaddressesbyaccount(this._rpc)
    }

    getbalance() {
        return getbalance(this._rpc)
    }

    getbalance64() {
        return getbalance64(this._rpc)
    }

    getnewaddress() {
        return getnewaddress(this._rpc)
    }

    getrawchangeaddress() {
        return getrawchangeaddress(this._rpc)
    }

    getreceivedbyaccount() {
        return getreceivedbyaccount(this._rpc)
    }

    getreceivedbyaddress() {
        return getreceivedbyaddress(this._rpc)
    }

    gettransaction() {
        return gettransaction(this._rpc)
    }

    getunconfirmedbalance() {
        return getunconfirmedbalance(this._rpc)
    }

    getwalletinfo() {
        return getwalletinfo(this._rpc)
    }

    importaddress() {
        return importaddress(this._rpc)
    }

    importprivkey() {
        return importprivkey(this._rpc)
    }

    importwallet() {
        return importwallet(this._rpc)
    }

    keypoolrefill() {
        return keypoolrefill(this._rpc)
    }

    listaccounts() {
        return listaccounts(this._rpc)
    }

    listaddressgroupings() {
        return listaddressgroupings(this._rpc)
    }

    listlockunspent() {
        return listlockunspent(this._rpc)
    }

    listreceivedbyaccount() {
        return listreceivedbyaccount(this._rpc)
    }

    listreceivedbyaddress() {
        return listreceivedbyaddress(this._rpc)
    }

    listsinceblock() {
        return listsinceblock(this._rpc)
    }

    listtransactions() {
        return listtransactions(this._rpc)
    }

    listunspent() {
        return listunspent(this._rpc)
    }

    lockunspent() {
        return lockunspent(this._rpc)
    }

    move() {
        return move(this._rpc)
    }

    resendwallettransactions() {
        return resendwallettransactions(this._rpc)
    }

    sendfrom() {
        return sendfrom(this._rpc)
    }

    sendmany() {
        return sendmany(this._rpc)
    }

    sendtoaddress() {
        return sendtoaddress(this._rpc)
    }

    setaccount() {
        return setaccount(this._rpc)
    }

    settxfee() {
        return settxfee(this._rpc)
    }

    signmessage() {
        return signmessage(this._rpc)
    }

    z_exportkey() {
        return z_exportkey(this._rpc)
    }

    z_exportviewingkey() {
        return z_exportviewingkey(this._rpc)
    }

    z_exportwallet() {
        return z_exportwallet(this._rpc)
    }

    z_getbalance() {
        return z_getbalance(this._rpc)
    }

    z_getnewaddress() {
        return z_getnewaddress(this._rpc)
    }

    z_getoperationresult() {
        return z_getoperationresult(this._rpc)
    }

    z_getoperationstatus() {
        return z_getoperationstatus(this._rpc)
    }

    z_gettotalbalance() {
        return z_gettotalbalance(this._rpc)
    }

    z_importkey() {
        return z_importkey(this._rpc)
    }

    z_importviewingkey() {
        return z_importviewingkey(this._rpc)
    }

    z_importwallet() {
        return z_importwallet(this._rpc)
    }

    z_listaddresses() {
        return z_listaddresses(this._rpc)
    }

    z_listoperationids() {
        return z_listoperationids(this._rpc)
    }

    z_listreceivedbyaddress() {
        return z_listreceivedbyaddress(this._rpc)
    }

    z_mergetoaddress() {
        return z_mergetoaddress(this._rpc)
    }

    z_sendmany() {
        return z_sendmany(this._rpc)
    }

    z_shieldcoinbase() {
        return z_shieldcoinbase(this._rpc)
    }

    zcbenchmark() {
        return zcbenchmark(this._rpc)
    }

    zcrawjoinsplit() {
        return zcrawjoinsplit(this._rpc)
    }

    zcrawkeygen() {
        return zcrawkeygen(this._rpc)
    }

    zcrawreceive() {
        return zcrawreceive(this._rpc)
    }

    zcsamplejoinsplit() {
        return zcsamplejoinsplit(this._rpc)
    }

    // rewards
    rewardsaddfunding() {
        return rewardsaddfunding(this._rpc)
    }

    rewardsaddress() {
        return rewardsaddress(this._rpc)
    }

    rewardscreatefunding() {
        return rewardscreatefunding(this._rpc)
    }

    rewardsinfo() {
        return rewardsinfo(this._rpc)
    }

    rewardslist() {
        return rewardslist(this._rpc)
    }

    rewardslock() {
        return rewardslock(this._rpc)
    }

    rewardsunlock() {
        return rewardsunlock(this._rpc)
    }

    // blockchain
    coinsupply() {
        return coinsupply(this._rpc)
    }

    getbestblockhash() {
        return getbestblockhash(this._rpc)
    }

    getblock() {
        return getblock(this._rpc)
    }

    getblockchaininfo() {
        return getblockchaininfo(this._rpc)
    }

    getblockcount() {
        return getblockcount(this._rpc)
    }

    getblockhash() {
        return getblockhash(this._rpc)
    }

    getblockhashes() {
        return getblockhashes(this._rpc)
    }

    getblockheader() {
        return getblockheader(this._rpc)
    }

    getchaintips() {
        return getchaintips(this._rpc)
    }

    getdifficulty() {
        return getdifficulty(this._rpc)
    }

    getmempoolinfo() {
        return getmempoolinfo(this._rpc)
    }

    getrawmempool() {
        return getrawmempool(this._rpc)
    }

    getspentinfo() {
        return getspentinfo(this._rpc)
    }

    gettxout() {
        return gettxout(this._rpc)
    }

    gettxoutproof() {
        return gettxoutproof(this._rpc)
    }

    gettxoutsetinfo() {
        return gettxoutsetinfo(this._rpc)
    }

    kvsearch() {
        return kvsearch(this._rpc)
    }

    kvupdate() {
        return kvupdate(this._rpc)
    }

    minerids() {
        return rewarmineridsdsunlock(this._rpc)
    }

    notaries() {
        return notaries(this._rpc)
    }

    paxpending() {
        return paxpending(this._rpc)
    }

    paxprice() {
        return paxprice(this._rpc)
    }

    paxprices() {
        return paxprices(this._rpc)
    }

    // addressindex
    verifychain() {
        return verifychain(this._rpc)
    }

    verifytxoutproof() {
        return verifytxoutproof(this._rpc)
    }

    getaddressbalance() {
        return getaddressbalance(this._rpc)
    }

    getaddressbalance() {
        return getaddressbalance(this._rpc)
    }

    getaddressmempool() {
        return getaddressmempool(this._rpc)
    }

    getaddresstxids() {
        return getaddresstxids(this._rpc)
    }

    getaddressutxos() {
        return getaddressutxos(this._rpc)
    }

    getsnapshot() {
        return verifytxgetsnapshotoutproof(this._rpc)
    }

    // auction
    auctionaddress(){
        return auctionaddress(this._rpc)
    }
}

    // generate(numblocks){
    //     this._rpc.generate(numblocks).then(resp => {
    //         console.log(resp)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    // faucetinfo(){
    //     this._rpc.faucetinfo().then(resp => {
    //         console.log(resp)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    // faucetaddress(){
    //     this._rpc.faucetaddress().then(resp => {
    //         console.log(resp)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    // faucetfund(amount){
    //     this._rpc.faucetfund(amount).then(resp => {
    //         console.log(resp)
    //         return resp
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    // faucetget(){
    //     this._rpc.faucetget().then(resp => {
    //         console.log(resp)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    // validateaddress(address){
    //     this._rpc.validateaddress(address).then(resp => {
    //         console.log(resp)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    // decoderawtransaction(hexstring){
    //     this._rpc.decoderawtransaction(hexstring).then(resp => {
    //         console.log(resp)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }
// }