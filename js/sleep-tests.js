$(function() { 
             $(".gender-dropdown").click(function(e) {
                e.preventDefault(); 

                var thisText = $(this).text();
                $(this).text($(".gender-val").text());
                $(".gender-val").text(thisText);

                if (thisText.includes('Melatonin')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get 3 Melatonin readings (morning - night).\n\n');
                    var panelText = $("#dropdown-panel-text").text('Melatonin helps evaluate problems related to your sleep-wake cycle. The different times of the day set off signals to your body that result in specific melatonin levels correlating to how your body should feel during that time. For example, in the evening your melatonin levels should begin to rise due to your retina signalers that detect darkness. These levels will also follow seasonal patterns to match the longer nights in fall/winter and the longer days in spring/summer.');
                } else if (thisText.includes('Cortisol')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get 3 Cortisol readings (morning -  night).\n\n');
                    var panelText = $("#dropdown-panel-text").text('Cortisol is produced by your adrenal glands and is known as your body’s primary stress hormone. Your cortisol levels are dependent on the time of day to elicit a specific response from your body. You should have the highest record of cortisol during the morning and reach your lowest level at around midnight');
                } else if (thisText.includes('Inflammation')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your Vitamin D and CRP.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Vitamin D: This protein is produced by your liver and released in response to inflammation. It ultimately influences how sharp, strong you feel as well as your overall immunity. When you’re deficient it usually results in brain fog, feelings of general weakness, and frequent infections. \n\n CRP: This protein is produced by your liver in response to inflammation in your body. A high level of CRP indicates insufficient recovery and has been linked to heart disease.');
                } else if (thisText.includes('Recovery')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your HbA1c and CRP.\n\n');
                    var panelText = $("#dropdown-panel-text").text('HbA1c: A form of hemoglobin that shows the average glucose, sugar levels, in your blood. High levels indicate too much sugar in your blood and are associated with poor sleep and feelings of unrest. \n\n CRP: This protein is produced by your liver in response to inflammation in your body. A high level of CRP indicates insufficient recovery and has been linked to heart disease.');
                }
                introText.html(introText.html().replace(/\n/g,'<br/>'));
                panelText.html(panelText.html().replace(/\n/g,'<br/>'));
            });
         });