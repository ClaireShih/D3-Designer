import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './empowerment.js';
var flag = false;
var duration = 200;

var panelClassName = 'show-front';

////////////////////
//                //
//     Utility    //
//     Function   //
//                //
////////////////////

var onButtonClick = function( className ){
  $('#cube').removeClass( panelClassName );
  panelClassName = className;
  $('#cube').addClass( panelClassName );
  console.log(className);
}

if (Meteor.isClient) {

    ////////////////////
    //                //
    //     Event      //
    //                //
    ////////////////////

    Template.index.events({
      'click .show-front': function (e) {
        onButtonClick("show-front");
      },
      'click .show-back': function (e) {
        onButtonClick("show-back");
      },
      'click .show-right': function (e) {
        onButtonClick("show-right");
      },
      'click .show-left': function (e) {
        onButtonClick("show-left");
      },
      'click .show-top': function (e) {
        onButtonClick("show-top");
      },
      'click .show-bottom': function (e) {
        onButtonClick("show-bottom");
      },
    });

    ////////////////////
    //                //
    //    Helpers     //
    //                //
    ////////////////////





}

////////////////////
//                //
//     init       //
//                //
////////////////////

window.onload = function(){


    updateAverageImportance();
    startMatching();


    $(document).scroll(function() {
      if ($(document).scrollTop() > $(window).innerHeight()) {
        $(".header").addClass("smallheader");
        // $("#logo").resizews(50);
        if (flag){
          $("#logo").animate({
            width:50
          },duration);
          $("#logo_words").animate({
            width:200
          },duration);
        }
        flag = false;

        // $("#logo").animate({width:"50"});
      } else {
        if (!flag){
          $("#logo").animate({
            width:80
          },duration);
          $("#logo_words").animate({
            width:300
          },duration);
        }
        flag = true;
      }

    });

}
