import kmdrpc from './src/kmdrpc'
import control, { connect, stop } from './src/control'

const rpc = connect("http://127.0.0.1:7771","user","pass")
control.getinfo(rpc).then(console.log("MYLO"))

// control.stop(rpc).then(displayResponse)
// TEST KEY
// pub: RWPg8B91kfK5UtUN7z6s6TeV9cHSGtVY8D 
// priv: UqMgxk7ySPNQ4r9nKAFPjkXy6r5t898yhuNCjSZJLg3RAM4WW1m9
//######################################################################
// ab.importprivkey("UqMgxk7ySPNQ4r9nKAFPjkXy6r5t898yhuNCjSZJLg3RAM4WW1m9","",false)
// ab.generate(20)
// ab.getwalletinfo()
// ab.faucetinfo()
// ab.validateaddress("RWPg8B91kfK5UtUN7z6s6TeV9cHSGtVY8D")
// ab.dumpprivkey("RWPg8B91kfK5UtUN7z6s6TeV9cHSGtVY8D")
// ab.stop()
// ab.getnewaddress()
// ab.getbalance()
// ab.faucetfund("7")
// let cd = ab.faucetfund("7")
// console.log(cd)
// ab.decoderawtransaction(cd.hex)
// console.log(ab.getinfo())
