// == Crosschain ==
// MoMoMdata symbol kmdheight ccid
export function MoMoMdata(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.MoMoMdata().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("MoMoMdata - Not supported yet")
    })
}


// assetchainproof needs a txid
export function assetchainproof(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.assetchainproof().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("assetchainproof - Not supported yet")
    })
}


// calc_MoM height MoMdepth
export function calc_MoM(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.calc_MoM().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("calc_MoM - Not supported yet")
    })
}


// height_MoM height
export function height_MoM(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.height_MoM().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("height_MoM - Not supported yet")
    })
}


// migrate_completeimporttransaction importTx
export function migrate_completeimporttransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.migrate_completeimporttransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("migrate_completeimporttransaction - Not supported yet")
    })
}


// migrate_converttoexport rawTx dest_symbol export_amount
export function migrate_converttoexport(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.migrate_converttoexport().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("migrate_converttoexport - Not supported yet")
    })
}


// migrate_createimporttransaction burnTx payouts
export function migrate_createimporttransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.migrate_createimporttransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("migrate_createimporttransaction - Not supported yet")
    })
}

export default {
    MoMoMdata,
    assetchainproof,
    calc_MoM,
    height_MoM,
    migrate_completeimporttransaction,
    migrate_converttoexport,
    migrate_createimporttransaction
}