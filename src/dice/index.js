// == Dice ==
// diceaddfunds name fundingtxid amount
function diceaddfunds(rpc) {
    return new Promise((resolve, reject) => {
        rpc.diceaddfunds().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// diceaddress [pubkey]
function diceaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.diceaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicebet name fundingtxid amount odds
function dicebet(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicebet().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicefinish name fundingtxid bettxid
function dicefinish(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicefinish().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicefund name funds minbet maxbet maxodds timeoutblocks
function dicefund(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicefund().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// diceinfo fundingtxid
function diceinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.diceinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicelist
function dicelist(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicelist().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// dicestatus name fundingtxid bettxid
function dicestatus(rpc) {
    return new Promise((resolve, reject) => {
        rpc.dicestatus().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    diceaddfunds,
    diceaddress,
    dicebet,
    dicefinish,
    dicefund,
    diceinfo,
    dicelist,
    dicestatus
}