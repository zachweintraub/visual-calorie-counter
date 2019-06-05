const Clarifai = require('clarifai');
const app = new Clarifai.App({
    apiKey: 'ae61257611a4460bb27fadb94e19566a'
});

export class ClarifaiService {
    
    readFoods(url) {
        let myPromise = app.models.predict("bd367be194cf45149e75f01d59f77ba7", url);
        return myPromise;
    }

    parseFoods(response) {
        let data = response.outputs[0].data.concepts;
        console.log(data);
        let output = data[0].name;
        return output;   
    }

}


