function validTime(time) {
    let realTime = time.split(":")
    if (parseInt(realTime[0]) < 24 && parseInt(realTime[1]) < 59) {
        return "true"
    } else {
        return "false"
    }
}
