function(c, a) {
    function locked(out) {
        return /LOCK_ERROR/g.test(out)
    }

    var response = a.t.call({}),
        ez_21 = ["unlock", "open", "release"],
//        locked = /LOCK_ERROR/g,
//        unlocked = /LOCK_UNLOCKED/g,
        args = {}

    do {
        // TODO: figure out how to get LOCK_ERROR from output
        // and properly figure out which lock is blocking.
        // The text should be:
        // LOCK_ERROR
        // Denied access by HALERYON SYSTEMS EZ_21 lock.
        let type = locked(response)
        return type
        switch(type) {
            case "EZ_21":
                for (var i=0; ez_21.length; i++) {
                    response = a.t.call({ez_21:ez_21[i]})
                    if (unlocked.test(response)) {
                        args["ez_21"] = ez_21[i]
                        break
                    }
                }
                break
            case "EZ_35":
                return "cracked ez_21, staring ez_35"
                break
            default:
                return response
                break
        }
    } while (locked(response))
    return {ok:true, msg:args}
}
