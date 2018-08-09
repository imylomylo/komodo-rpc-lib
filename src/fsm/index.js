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