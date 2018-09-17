// == FSM ==
// FSMaddress [pubkey]
export function FSMaddress(rpc) {
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
export function FSMcreate(rpc) {
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
export function FSMinfo(rpc) {
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
export function FSMlist(rpc) {
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

export default {
    FSMaddress,
    FSMcreate,
    FSMinfo,
    FSMlist
}