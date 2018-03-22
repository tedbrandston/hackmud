function(c, a) { // t:#s.username.target

  function _call(args) { return a.t.call(args) }

  function cr(z) {
  // simple function to check for corruption in a string or array
    let r = /^[A-Za-z0-9_|:\" ]+$/g // non-corrupted/acceptable characters
    switch (z.constructor) {        // this can operate on string and array
      case String:
        return r.test(z)            // for string, just return the test value
      case Array:
        for (var i in z) {          // for arrays, we want to iterate over
          if (!r.test(i))           // each indice and make sure it's not
            return false            // corrupted.
        }
        return true
    }
    return {ok:false, msg:"not a string or array"}
  }

  function call(rgx, args) {
  // execute a regex on a target command output
    let tmp,pmt                     // Just some tmp variables
    do {
      tmp = _call(args)
      pmt = rgx.exec(tmp)           // Javascript didn't like tmp = rgx.exec(tmp)
    } while (!cr("test code"))      // Do once, then loop until no corruption
                                    // recalling the command automatically
    return pmt                      // Return the regex'd out groups
  }

  // This call SHOULD get the nav from the front page, but it doesn't.
  return call(/([\w]+) |/g)
}
