// == Dice ==
// diceaddfunds name fundingtxid amount
export function diceaddfunds(rpc) {
    return new Promise((resolve, reject) => {
        rpc.diceaddfunds().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// diceaddress [pubkey]
export function diceaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.diceaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicebet name fundingtxid amount odds
export function dicebet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicebet().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicefinish name fundingtxid bettxid
export function dicefinish(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicefinish().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicefund name funds minbet maxbet maxodds timeoutblocks
export function dicefund(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicefund().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// diceinfo fundingtxid
export function diceinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.diceinfo().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicelist
export function dicelist(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicelist().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicestatus name fundingtxid bettxid
export function dicestatus(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicestatus().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
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