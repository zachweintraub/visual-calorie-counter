import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ClarifaiService } from './ClarifaiService';
import { FoodService } from './FoodService';

function processPhoto(url) {
    let output = [];
    let clarifai = new ClarifaiService();
    let foodService = new FoodService();
    clarifai.readFoods(url)
    .then(function(response){
        let mainFood = clarifai.parseFoods(response);
        output.push(mainFood);
        return foodService.getCalories(mainFood);
    })
    .then(function(response){
        let cals = foodService.parseCals(response);
        output.push(cals.toFixed(2));
        $('#foodName').text(output[0]);
        $('#cals').text(output[1]);
    })
}

$().ready(function(){

    $('#input').submit(function(e){
        e.preventDefault();
        let url = $('#imgUrl').val();
        $('#userImage').attr('src', url);
        $('#results').show();
        processPhoto(url);
    })
    
});