// == Dice ==
// diceaddfunds name fundingtxid amount
 function diceaddfunds(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.diceaddfunds().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("diceaddfunds - Not supported yet")
    })
}


// diceaddress [pubkey]
 function diceaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.diceaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("diceaddress - Not supported yet")
    })
}


// dicebet name fundingtxid amount odds
 function dicebet(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.dicebet().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("dicebet - Not supported yet")
    })
}


// dicefinish name fundingtxid bettxid
 function dicefinish(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.dicefinish().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("dicefinish - Not supported yet")
    })
}


// dicefund name funds minbet maxbet maxodds timeoutblocks
 function dicefund(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.dicefund().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("dicefund - Not supported yet")
    })
}


// diceinfo fundingtxid
 function diceinfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.diceinfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("diceinfo - Not supported yet")
    })
}


// dicelist
 function dicelist(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.dicelist().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("dicelist - Not supported yet")
    })
}


// dicestatus name fundingtxid bettxid
 function dicestatus(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.dicestatus().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("dicestatus - Not supported yet")
    })
}

 module.exports = {
    diceaddfunds,
    diceaddress,
    dicebet,
    dicefinish,
    dicefund,
    diceinfo,
    dicelist,
    dicestatus
}
