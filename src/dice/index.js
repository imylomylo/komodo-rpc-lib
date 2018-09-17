// == Dice ==
// diceaddfunds name fundingtxid amount
export function diceaddfunds(rpc) {
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
export function diceaddress(rpc) {
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
export function dicebet(rpc) {
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
export function dicefinish(rpc) {
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
export function dicefund(rpc) {
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
export function diceinfo(rpc) {
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
export function dicelist(rpc) {
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
export function dicestatus(rpc) {
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

export default {
    diceaddfunds,
    diceaddress,
    dicebet,
    dicefinish,
    dicefund,
    diceinfo,
    dicelist,
    dicestatus
}