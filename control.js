module.exports = {
    getinfo: function () {
        console.log("control.getinfo")
        rpc = getRpc()
        rpc.getinfo().then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }
}