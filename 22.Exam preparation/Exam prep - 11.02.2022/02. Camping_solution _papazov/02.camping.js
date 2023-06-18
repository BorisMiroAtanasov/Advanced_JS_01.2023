class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp  = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];

    }

    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp[condition]){
            throw new Error(`Unsuccessful registration at the camp.`)

        }
    }

}













const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));