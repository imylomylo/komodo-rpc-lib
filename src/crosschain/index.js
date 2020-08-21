// == Crosschain ==
// MoMoMdata symbol kmdheight ccid
  function MoMoMdata(rpc) {
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
  function assetchainproof(rpc) {
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
  function calc_MoM(rpc) {
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
  function height_MoM(rpc) {
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
  function migrate_completeimporttransaction(rpc) {
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


// migrate_convertto  rawTx dest_symbol  _amount
  function migrate_convertto (rpc) {
    return new Promise((resolve, reject) => {
        // rpc.migrate_convertto ().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("migrate_convertto  - Not supported yet")
    })
}


// migrate_createimporttransaction burnTx payouts
  function migrate_createimporttransaction(rpc) {
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

   module.exports = {
    MoMoMdata,
    assetchainproof,
    calc_MoM,
    height_MoM,
    migrate_completeimporttransaction,
    migrate_convertto ,
    migrate_createimporttransaction
}
