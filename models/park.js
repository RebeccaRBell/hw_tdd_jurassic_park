const Park = function(name, ticket_price, dinosaurs){
        this.name = name;
        this.ticket_price = ticket_price;
        this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinoName){
        return this.dinosaurs.push(dinoName);
}
Park.prototype.dinosaurCount = function(){
        return this.dinosaurs.length;
}
Park.prototype.removeDinosaur = function(dinoName){
        let dinoToRemove;
        for (const dinos of this.dinosaurs){
                if (dinos === dinoName){
                        dinoToRemove = this.dinosaurs.indexOf(this.dinosaurs);
                }
        }this.dinosaurs.splice(dinoToRemove, 1);
}

// Park.prototype.dinoWithMostVisitors = function(){
//         let guestsAttracted = [];
//         for (const dinosaurs in this.dinosaurs){
//                 guests = dinosaurs.guestsAttractedPerDay;
//                 guestsAttracted.push(guests);
//         }
//         let mostVisitors = Math.max(guestsAttracted);
//         for (const dinos in this.dinosaurs){
//                 if (dinos.guestsAttractedPerDay === mostVisitors);
//                 return dinos;
//         }
// }
// //Couldn't seem to get this one


Park.prototype.findAllOfSpecies = function(species){
        let allOfSearchedSpecies = [];
        for (const dinos of this.dinosaurs){
                if (dinos.species === species){
                        allOfSearchedSpecies.push(dinos);
                }
        }return allOfSearchedSpecies;
}       

Park.prototype.totalVisitorsPerDay = function(){
        let visitorNumber = 0;
        for (const dinos of this.dinosaurs){
                visitorNumber += dinos.guestsAttractedPerDay;   
        } 
        return visitorNumber;
}

Park.prototype.totalVisitorsPerYear = function(){
        let dailyVisitors = this.totalVisitorsPerDay();
        let yearlyVisitors = dailyVisitors * 365;
        return yearlyVisitors;

}

Park.prototype.annualRevenue = function(){
        let yearlyVisitors = this.totalVisitorsPerYear();
        let ticketprice = this.ticket_price;
        let totalRevenue = yearlyVisitors * ticketprice;
        return totalRevenue;
}

module.exports = Park;