/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });


    
    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

    $(document).ready(function () {
        $('.pricing-carousel').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            smartSpeed: 800,
            nav: true,
            dots: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1200: { items: 3 }
            }
        });
    });

$(document).ready(function () {
    // Initialize the hero carousel
    $('.hero-carousel').owlCarousel({
        // your options...
    });

    // Replace .owl-stage-outer with .owl-stage-outer2 ONLY for the hero carousel
    $('.hero-carousel').each(function(){
        $(this).find('.owl-stage-outer').removeClass('owl-stage-outer').addClass('owl-stage-outer2');
    });

    // Initialize other carousels as usual
    $('.pricing-carousel').owlCarousel({
        // your options...
    });
});

$(document).ready(function(){

    function getWeightStatus(bmi){
        bmi = parseFloat(bmi);
        if(bmi < 18.5) return {status: "Underweight", color: "#1e90ff"};
        else if(bmi >= 18.5 && bmi <= 24.9) return {status: "Healthy", color: "#19b47d"};
        else if(bmi >= 25 && bmi <= 29.9) return {status: "Overweight", color: "#ff9500"};
        else return {status: "Obese", color: "#e74c3c"};
    }

    // Render the form (used on first load and on recalculate)
    function renderForm(container) {
        const formHtml = `
            <p style="margin-bottom: 22px;">Know your body, shape your future. By entering your height, weight, age, and gender, our fitness calculator provides valuable insights to support your workout routine, weight goals, and overall fitness journey.</p>
            <div class="bmi-error" style="display:none;"></div>
            <form action="#">
                <div class="row">
                    <div class="col-sm-6">
                        <input type="text" placeholder="Height / cm">
                    </div>
                    <div class="col-sm-6">
                        <input type="text" placeholder="Weight / kg">
                    </div>
                    <div class="col-sm-6">
                        <input type="text" placeholder="Age">
                    </div>
                    <div class="col-sm-6">
                        <select class="bmi-sex-select">
                            <option value="">Select Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="col-lg-12">
                        <button type="submit" class="bmi-btn">Calculate</button>
                    </div>
                </div>
            </form>
        `;
        $(container).html(formHtml);
    }

    // Render form on page load!
    renderForm('.chart-calculate-form');

    // Handle Calculate button
    $('.chart-calculate-form').on('submit', 'form', function(e){
        e.preventDefault();

        let $form = $(this);
        let height = $.trim($form.find('input[placeholder="Height / cm"]').val());
        let weight = $.trim($form.find('input[placeholder="Weight / kg"]').val());
        let age = $.trim($form.find('input[placeholder="Age"]').val());
        let sex = $form.find('select.bmi-sex-select').val();

        // Validate
        if(!height || !weight || !age || !sex){
            $form.prev('.bmi-error').text('Please fill out all fields.').show();
            return;
        }
        if(isNaN(height) || height <= 0){
            $form.prev('.bmi-error').text('Please enter a valid height in cm.').show();
            return;
        }
        if(isNaN(weight) || weight <= 0){
            $form.prev('.bmi-error').text('Please enter a valid weight in kg.').show();
            return;
        }
        if(isNaN(age) || age <= 0){
            $form.prev('.bmi-error').text('Please enter a valid age.').show();
            return;
        }

        $form.prev('.bmi-error').hide(); // Hide error if all is good

        // Calculate BMI
        let heightM = height / 100;
        let bmi = weight / (heightM * heightM);
        bmi = bmi.toFixed(1);

        // Get status and color/class
        let result = getWeightStatus(bmi);

        // Choose icon for status
        let iconHtml = '';
        switch(result.status) {
            case "Healthy":
                iconHtml = '<i class="fa fa-check-circle status-icon healthy"></i>';
                break;
            case "Underweight":
                iconHtml = '<i class="fa fa-exclamation-circle status-icon underweight"></i>';
                break;
            case "Overweight":
                iconHtml = '<i class="fa fa-exclamation-triangle status-icon overweight"></i>';
                break;
            case "Obese":
                iconHtml = '<i class="fa fa-times-circle status-icon obese"></i>';
                break;
        }

        // Show result card
        $(this).closest('.chart-calculate-form').html(`
            <div class="bmi-result-card">
                <div class="bmi-label">BMI Value:</div>
                <div class="bmi-value" style="color:${result.color};">${bmi}</div>
                <div class="bmi-label">Status:</div>
                <div class="bmi-status" style="color:${result.color};">
                    ${iconHtml}
                    <span>${result.status}</span>
                </div>
                <button class="recalculate-btn">Recalculate</button>
            </div>
        `);
    });

    // Handle Recalculate button
    $('.chart-calculate-form').on('click', '.recalculate-btn', function(){
        renderForm($(this).closest('.chart-calculate-form'));
    });

    // Hide error when user starts editing
    $('.chart-calculate-form').on('input change', 'input, select', function(){
        $(this).closest('form').prev('.bmi-error').hide();
    });
});


    
})(jQuery);

    
    
