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