$(function() { 
             $(".gender-dropdown").click(function(e) {
                e.preventDefault(); 

                var thisText = $(this).text();
                $(this).text($(".gender-val").text());
                $(".gender-val").text(thisText);

                if (thisText.includes('Lipids')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your HDL, LDL, Triglycerides and Total Cholesterol.\n\n');
                    var panelText = $("#dropdown-panel-text").text('HDL: This is known as your “good cholesterol” and it works towards reducing the amount of blockage in your arteries promoting blood flow.\n\n LDL: Typically known as the “bad cholesterol” and will determine the blockage to your arteries and will hinder blood flow.\n\nTriglycerides: This is the fat stored in your body that is released as energy between your eating cycles.\n\nTotal Cholesterol: Used as a benchmark to measure heart health.');
                } else if (thisText.includes('Thyroid')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading on your thyroid hormones. These hormones are an integral part of your endocrine system and they’re known as the “regulator” of energy.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Triiodothyronine (T3): This hormone affects almost every physiological process in the body, specifically growth and development, your metabolism, body temperature, and heart rate.\n\nThyroxine (T4): This hormone works in conjunction with T3 to help regulate your metabolism, body temperature, and heart rate.\n\nThyroid-stimulating hormone (TSH): TSH is a pituitary hormone that stimulates the thyroid gland to produce T3 and T4. This hormone is critical in screening for any potential thyroid diseases and conditions.');
                } else if (thisText.includes('Recovery')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your HbA1c and CRP.\n\n');
                    var panelText = $("#dropdown-panel-text").text('HbA1c: A form of hemoglobin that shows the average glucose, sugar levels, in your blood. High levels indicate too much sugar in your blood and are associated with poor sleep and feelings of unrest.\n\n CRP: This protein is produced by your liver in response to inflammation in your body. A high level of CRP indicates insufficient recovery and has been linked to heart disease.');
                } else if (thisText.includes('Vitamins')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your Vitamin B6, Vitamin B9, and  Vitamin B12.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Vitamin B6: Also known as pyridoxine, this vitamin serves several functions in the body including but not limited to helping facilitate the creation of red blood cells and neurotransmitters. It impacts your protein, fat, and carbohydrate metabolism. Since your body cannot produce it naturally, you get it from food or supplements.\n\nVitamin B9: Also known as folate, this vitamin is used to enhance cognitive performance, lower inflammation, and reduce homocysteine. It’s usually found in leafy greens and helps with the formation of red blood cells that ultimately carry oxygen through your body.\n\nVitamin B12: This vitamin is known as cobalamin and is also important in the formation of red blood cells. It is related to the proper function and health of your nerve tissues. It’s usually found in meat, chicken, and fish and would be a critical vitamin to monitor if your diet does not usually consist of these proteins.');
                } else if (thisText.includes('Iron')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your Iron, Ferritin, Transferrin and TIBC.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Iron: This mineral aids in transporting oxygen and also other fundamental physiological processes required for metabolism and cardiovascular endurance.\n\nFerritin: A blood cell protein that indicates how much iron your body is storing.\n\nTransferrin: Another important protein in your blood for binding iron and transporting it throughout the body.\n\nTotal Iron-Binding Capacity (TIBC): This measures the blood’s capacity to bind iron with transferrin.');
                }
                introText.html(introText.html().replace(/\n/g,'<br/>'));
                panelText.html(panelText.html().replace(/\n/g,'<br/>'));
            });
         });