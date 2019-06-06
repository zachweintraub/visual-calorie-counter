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
        // output.push(mainFood[0]);
        output.push(mainFood);
        return foodService.getCalories(mainFood[0]);
    })
    .then(function(response){
        let cals = foodService.parseCals(response);
        output.push(cals.toFixed(2));
        $('#foodName').text(output[0][0]);
        $('#cals').text(output[1]);
        $('#results').show();
        for(let i = 1; i < output[0].length; i++) {
            $('#altOptions').append(`<option>${output[0][i]}</option>`);
        }
    })
}

$().ready(function(){

    $('#input').submit(function(e){
        e.preventDefault();
        let url = $('#imgUrl').val();
        $('#userImage').attr('src', url);
        processPhoto(url);
    });
    $('#altSelect').submit(function(e){
        e.preventDefault();
        let altOption = $('#altOptions').val();
        let foodService = new FoodService();
        foodService.getCalories(altOption)
        .then(function(response){
            let cals = foodService.parseCals(response).toFixed(2);
            $('#altFood').text(altOption);
            $('#altCals').text(cals);
            $('#altResults').show();
        });
    });
    
});