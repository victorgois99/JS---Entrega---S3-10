function positions(firstPlace, secondPlace, lastPlace){
    let podio = [firstPlace, secondPlace, lastPlace]
    if("Daniel" == secondPlace){
        podio = [secondPlace, firstPlace, lastPlace]
    }
    else if("Daniel" == lastPlace){
        podio = [firstPlace, lastPlace, secondPlace]
    }
    console.log("1°- Colocado: " + podio[0] + " 2°- Colocado: " + podio[1] + " 3°- Colocado: " + podio[2])
}
positions("Manoel", "Rafael", "Daniel")
