Warning:  error handling not completed.

Functions look like this when not implemented.  If you happen to know what you want to do, remove the reject line, uncomment the remaining code inside the promise and implement yourself.  Submit a PR if you could be so kind :)
```

// createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}
export function createrawtransaction(rpc) {
    return new Promise((resolve, reject) => {
        // rpc.createrawtransaction().then(resp => {
        //     resolve(resp)
        // }).catch(error => {
        //     console.log(error)
        //     reject(error)
        // })
        reject("createrawtransaction - Not supported yet")
    })
}

```



```
git clone THIS_REPO
cd komodo-rpc-lib
npm install
npm run start
```

Need to do this atm during current dev cycle
```
 babel ./ --out-dir dist2/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files
```
and then
```
cd dist2
node index.js
```

Making the docs
```
 sudo npm install -g apidoc
 apidoc -i src/ -o apidoc/
```
