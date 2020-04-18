const _ = require("lodash");

const parkirs = [];

class ParkirService {
    async createLot(parkir) {
        const parkirList = new Promise((resolve, reject) => {
            for(let i=1;i<=parkir.lot;i++){
                let totalLot = {id:i,plat:null}
                parkirs.push(totalLot)
            }
            resolve(parkirs);
        });
        const result = await parkirList;
        return result;
    }

    async getLot() {
        const parkirList = new Promise((resolve, reject) => {
            resolve(parkirs);
        });
        const result = await parkirList;
        return result;
    }

    async parkirIn(parkir) {
        const parkirKosong = new Promise((resolve,reject)=>{
            for(let i=0;i<parkirs.length;i++){
                if(parkirs[i].plat==null){
                    parkirs[i].plat=parkir.plat;
                    break
                }
            }
        })
        return parkirs
    }

    async parkirOut(parkir) {
        const parkirKosong = new Promise((resolve,reject)=>{
            parkirs.forEach((data)=>{
                if(data.id==parkir.id){
                    data.plat=null
                }
            })
        })
        return parkirs
    }

    async deleteLot(parkirId) {
        const promise = new Promise((resolve, reject) => {
            const idx = _.findIndex(parkirs, function (o) {
                return o.id == parkirId;
            });
            parkirs.splice(idx, 1);
            resolve(parkirId);
        });
        const result = await promise;
        return result;
    }
}

module.exports = ParkirService;