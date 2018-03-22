function(c, a) { // t:#s.username.target

  function _call(args) { return a.t.call(args) }

  function cr(z) {
  // simple function to check for corruption in a string or array
    let r = /^[A-Za-z0-9_|:\" ]+$/g
    switch (z.constructor) {
      case String:
        return r.test(z)
      case Array:
        for (var i in z) {
          if (!r.test(i))
            return false
        }
        return true
    }
    return {ok:false, msg:"not a string or array"}
  }

  function call(rgx, args) {
  // execute a regex on a target command output
    let tmp,pmt
    do {
      tmp = _call(args)
      pmt = rgx.exec(tmp)
    } while (!cr("test code"))
    return pmt
  }

  return call(/([\w])/g)

  return {ok:true, msg:k}         // Exit goodly
}
