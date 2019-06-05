import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './ClarifaiService'
// import { ClarifaiService } from './ClarifaiService';

const app = new Clarifai.App({
    apiKey: 'ae61257611a4460bb27fadb94e19566a'
});
const foodModelId = "bd367be194cf45149e75f01d59f77ba7";

$().ready(function(){

    console.log('model id' + foodModelId);
    app.models.predict(foodModelId, "https://samples.clarifai.com/food.jpg").then(
        
        function(response) {
          console.log(response);
        },
        function(err) {
          console.log(err);
        }
      );
    
  
});