$(function() { 
             $(".gender-dropdown").click(function(e) {
                e.preventDefault(); 

                var thisText = $(this).text();
                $(this).text($(".gender-val").text());
                $(".gender-val").text(thisText);

                if (thisText.includes('Libido')) {
                    var introText = $("#dropdown-panel-test-intro").text('In this panel you’ll get a reading for your Testosterone and Cortisol.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Testosterone: A sex hormone produced by the adrenal cortex, by both men and women. Making sure you’re producing enough testosterone is essential to restoring your sex drive.\n\n Cortisol (Morning): The stress hormone is often an underlying cause of low sex drive. Besides the clear effects of being stressed while connecting with your partner, Cortisol leads to a decrease in testosterone levels.');
                } else if (thisText.includes('Testosterone')) {
                    var introText = $("#dropdown-panel-test-intro").text('This panel, for men, will give you a reading for DHEA and SHBG.\n\n');
                    var panelText = $("#dropdown-panel-text").text('DHEA: A sex hormone, known as the “age hormone,” is a precursor for testosterone and has been associated with antiaging properties.\n\n Sex Hormone Binding Globulin (SHBG): This is a protein produced by the liver that transports the hormones testosterone, dihydrotestosterone (DHT) and estradiol in the blood as biologically inactive forms.');
                } else if (thisText.includes('Female')) {
                    var introText = $("#dropdown-panel-test-intro").text('This panel, only for women, will give you a reading for Estradiol and Progesterone.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Estradiol: An estrogen steroid hormone and the major female sex hormone. It’s involved in the regulation of the estrous and menstrual female reproductive cycles.\n\n Progesterone: A hormone that’s produced mainly by a woman’s ovaries. It’s one of the hormones that fluctuate with a woman’s menstrual period.');
                } else if (thisText.includes('Focus')) {
                    var introText = $("#dropdown-panel-test-intro").text('This panel, only for men, will give you a reading for Vitamin D and HbA1c.\n\n');
                    var panelText = $("#dropdown-panel-text").text('Vitamin D: Maintaining Vitamin D levels is critical when preventing fatigue and promoting a good night’s sleep. When you’re deficient it usually results in brain fog, feelings of general weakness, and frequent infections.\n\n HbA1c: A form of hemoglobin that shows the average glucose, sugar levels, in your blood. High levels indicate too much sugar in your blood and are associated with poorer memory and the ability to learn and focus.');
                } else if (thisText.includes('DHEA')) {
                    var introText = $("#dropdown-panel-test-intro").text('This panel, only for women, will give you a reading for DHEA.\n\n');
                    var panelText = $("#dropdown-panel-text").text('DHEA: A sex hormone, known as the “age hormone,” is a precursor for testosterone and has been associated with antiaging properties.');
                }
                introText.html(introText.html().replace(/\n/g,'<br/>'));
                panelText.html(panelText.html().replace(/\n/g,'<br/>'));
            });
         });