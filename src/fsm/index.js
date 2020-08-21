// == FSM ==
// FSMaddress [pubkey]
 function FSMaddress(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.FSMaddress().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("FSMaddress - Not supported yet")
    })
}


// == FSMcreate ==
// FSMcreate name states
 function FSMcreate(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.FSMcreate().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("FSMcreate - Not supported yet")
    })
}


// == FSMinfo ==
// FSMinfo fundingtxid
 function FSMinfo(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.FSMinfo().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("FSMinfo - Not supported yet")
    })
}


// == FSMlist ==
// FSMlist
 function FSMlist(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.FSMlist().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("FSMlist - Not supported yet")
    })
}

 module.exports = {
    FSMaddress,
    FSMcreate,
    FSMinfo,
    FSMlist
}
