(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options


        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update



            return $(this).each(function() {
                    var _this = this;

                    options.end =  $(_this).data("end");
                    var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.end - options.start) / loops;
                    $(this).find(".value units").html(options.units);
                    setTimeout(function(){

                    console.log(options.end);
                        var loopCount = 0,
                            value = options.start,
                            interval = setInterval(updateTimer, options.refreshInterval);

                        function updateTimer() {
                            value += increment;
                            loopCount++;
                            $(_this).find(".full-line").css("width", value.toFixed(options.decimals) + "%");
                            $(_this).find(".value .number").html(value.toFixed(options.decimals));

                            if (typeof(options.onUpdate) == 'function') {
                                options.onUpdate.call(_this, value);
                            }

                            if (loopCount >= loops) {
                                clearInterval(interval);
                                value = options.end;

                                if (typeof(options.onComplete) == 'function') {
                                    options.onComplete.call(_this, value);
                                }
                            }
                        }
                    }, options.delay);
            });
        // }, 1000);

    };

    $.fn.countTo.defaults = {
        start: 0,  // the number the element should start at
        end: 80,  // the number the element should end at
        speed: 300,  // how long it should take to count between the target numbers
        refreshInterval: 2,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        delay: 0,
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);
