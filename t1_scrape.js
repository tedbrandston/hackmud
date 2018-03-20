function(c, a) { // t:#s.username.target
  function cr(z) { // simple function to check for corruption in a string
    let r = /^[A-Za-z0-9_|:\" ]+$/g    // This regexp checks for corruption.
    return r.test(z)
  }
  // Get this corp's navigation
  do {
    var f = a.t.call().split("\n"),  // Call front page and split by newline,
      n = f[f.length-1]             // just so we can get the last line.

  } while (!(cr(n)))

  var [k,l] = n.split(" | ")          // This splits our navigation pages into
                                      // the two separate page names we need.

  do {
    var f = a.t.call({}).split(" "),  // Call front page and split by newline,
      n = f[f.length-1]             // just so we can get the last line.

  } while (!(cr(n)))

  var [j,m] = n.split(":")

  // TODO: pass args
  do {
    var args = [{j:m}]
      return a.t.call(args)
      f = a.t.call(args).split("\n"),  // Call front page and split by newline,
      n = f[f.length-1]             // just so we can get the last line.

    return  n
  } while (!(cr(n)))

  return {ok:true, msg:j}         // This should only be hit if its good :)
                                      // Now we have our navigation.
}
