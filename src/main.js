import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ClarifaiService } from './ClarifaiService';
import { FoodService } from './FoodService';

$().ready(function(){

    let clarifai = new ClarifaiService();

    // clarifai.readFoods("https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg")
    let foodService = new FoodService();
    let promise = foodService.getCalories("pizza");
    promise.then(function(response) {
        let body = JSON.parse(response);
        console.log(body)
    })
  
});