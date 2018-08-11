// == FSM ==
// FSMaddress [pubkey]
function FSMaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.FSMaddress().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// == FSMcreate ==
// FSMcreate name states
function FSMcreate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.FSMcreate().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// == FSMinfo ==
// FSMinfo fundingtxid
function FSMinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.FSMinfo().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// == FSMlist ==
// FSMlist
function FSMlist(rpc) {
    return new Promise((resolve, reject) => {
        rpc.FSMlist().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    FSMaddress,
    FSMcreate,
    FSMinfo,
    FSMlist
}