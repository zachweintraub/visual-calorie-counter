const Clarifai = require('clarifai');
const app = new Clarifai.App({
    apiKey: 'ae61257611a4460bb27fadb94e19566a'
});

export class ClarifaiService {
    
    readFoods(url) {
        return app.models.predict("bd367be194cf45149e75f01d59f77ba7", url);
    }

    parseFoods(response) {
        let data = response.outputs[0].data.concepts;
        let output = data[0].name;
        // for(let i = 0; i < data.length; i++) {
        //     if(data[i].value > 0.6) {
        //         output.push(data[i].name);
        //     }
        // }
      return output;   
    }

}


