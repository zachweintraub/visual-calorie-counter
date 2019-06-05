export class FoodService {
    getCalories(food) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.edamam.com/api/food-database/parser?ingr=${food}&app_id=7805b4c3&app_key=67c16d650df651eaccbd84a745d4bf4c`
            request.onload = function() {
                if (this.status == 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET", url, true);
            request.send();
        });
    }
}