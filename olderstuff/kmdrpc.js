const stdrpc = require('stdrpc')

class KMDrpc {
    constructor(url, username, password) {
        this.url = url;
        this.username = username;
        this.password = password;
        this._rpc = this.connect(this.url, this.username, this.password)
    }

    connect(url, username, password) {
        console.log("Connecting to " + url )
        const rpc = stdrpc({
            url: url,
            username: username,
            password: password
        })
        return rpc ;
    }

    getinfo() {
        this._rpc.getinfo().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    getbalance(){
        this._rpc.getbalance().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    importprivkey(key, label, rescan) {
        this._rpc.importprivkey(key, label, rescan).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    generate(numblocks){
        this._rpc.generate(numblocks).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    getwalletinfo(){
        this._rpc.getwalletinfo().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    faucetinfo(){
        this._rpc.faucetinfo().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    faucetaddress(){
        this._rpc.faucetaddress().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    faucetfund(amount){
        this._rpc.faucetfund(amount).then(resp => {
            console.log(resp)
            return resp
        }).catch(error => {
            console.log(error)
        })
    }

    faucetget(){
        this._rpc.faucetget().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    validateaddress(address){
        this._rpc.validateaddress(address).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    stop(){
        this._rpc.stop().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    getnewaddress(account = ""){
        this._rpc.getnewaddress(account).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    dumpprivkey(address){
        this._rpc.dumpprivkey(address).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }

    decoderawtransaction(hexstring){
        this._rpc.decoderawtransaction(hexstring).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = kmdrpc
