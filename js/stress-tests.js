$(function() { 
             $(".gender-dropdown").click(function(e) {
                e.preventDefault(); 

                var thisText = $(this).text();
                $(this).text($(".gender-val").text());
                $(".gender-val").text(thisText);

                if (thisText.includes('Cortisol')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get 3 Cortisol readings (morning -  night).\n\n');
                    var panelText = $("#dropdown-panel-text").text('Cortisol is produced by your adrenal glands and is known as your body’s primary stress hormone. Your cortisol levels are dependent on the time of day to elicit a specific response from your body. You should have the highest record of cortisol during the morning and reach your lowest level at around midnight.');
                } else if (thisText.includes('Homocysteine')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your Homocysteine and Vitamin B12.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Homocysteine: High levels of this amino acid can be indicative of elevated mental stress and often time relates to Vitamin B12 and Folate deficiency.\n\n Vitamin B12: This vitamin is known as cobalamin and is also important in the formation of red blood cells. It is related to the proper function and health of your nerve tissues. This vitamin is usually found in meat, chicken, and fish and would be a critical vitamin to monitor if your diet does not usually consist of these proteins.');
                } else if (thisText.includes('Thyroid')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading on your thyroid hormones. These hormones are an integral part of your endocrine system and they’re known as the “regulator” of energy.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Triiodothyronine (T3): This hormone affects almost every physiological process in the body, specifically growth and development, your metabolism, body temperature, and heart rate.\n\n Thyroxine (T4): This hormone works in conjunction with T3 to help regulate your metabolism, body temperature, and heart rate.\n\n Thyroid-stimulating hormone (TSH): TSH is a pituitary hormone that stimulates the thyroid gland to produce T3 and T4. This hormone is critical in screening for any potential thyroid diseases and conditions.');
                } else if (thisText.includes('Recovery')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your HbA1c and CRP.\n\n');
                    var panelText = $("#dropdown-panel-text").text('HbA1c: A form of hemoglobin that shows the average glucose, sugar levels, in your blood. High levels indicate too much sugar in your blood and are associated with poor sleep and feelings of unrest.\n\n CRP: This protein is produced by your liver in response to inflammation in your body. A high level of CRP indicates insufficient recovery and has been linked to heart disease.');
                }
                introText.html(introText.html().replace(/\n/g,'<br/>'));
                panelText.html(panelText.html().replace(/\n/g,'<br/>'));
            });
         });