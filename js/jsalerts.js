function JSAlerts(params)
{
    /* Assign object methods  */
    console.log(navigator.userAgent)
    //Set the userAgent attribute here
    if (navigator.userAgent.indexOf('Chrome') != -1)
    {
        console.log("Browser is Chrome");
        this.browser_type = "Webkit";
    }
    else if (navigator.userAgent.indexOf('Safari') != -1)
    {
        console.log("Broswer is Safari");
        this.browser_type = "Webkit";
    }
    else if (navigator.userAgent.indexOf('Firefox') != -1)
    {
        console.log("Browser is Firefox");
        this.browser_type = "Moz";
    }
    else if (navigator.userAgent.indexOf('Opera') != -1)
    {
        console.log("Browser is Opera");
        this.browser_type = "O";
    }

    else if (navigator.userAgent.indexOf("MSIE") != -1)
    {
        console.log("Browser is IE");
        this.browser_type = "IE";
    }

    this.parentEl = document.createElement("div");
    parentEl = this.parentEl;
    this.parentEl.className = "notification-sandbox";
    document.body.appendChild(this.parentEl);

    //Precedence of location is as follows:
    // 1. Top - Bottom  (Top has higher precedence over Bottom)
    // 2. Right - Left  (Right has higher precedence over Left)

    if (params.hasOwnProperty('top'))
    {
        //Assign top position to the parentElement
        this.parentEl.style.top = params.top;
        //Top is present. Check for left or right property
        if (params.hasOwnProperty('right'))
        {
            this.parentEl.style.right = params.right;
        }
        else if (params.hasOwnProperty('left'))
        {
            this.parentEl.style.left = params.left;
        }
        else
        {
            //In case no left or right is present, assign right : 4em
            this.parentEl.style.right = "4em";
        }
    }
    else if (params.hasOwnProperty('bottom'))
    {
        //Assign bottom position to the parentElement

        this.parentEl.style.bottom = params.bottom;
        //Top is present. Check for left or right property
        if (params.hasOwnProperty('right'))
        {
            this.parentEl.style.right = params.right;
        }
        else if (params.hasOwnProperty('left'))
        {
            this.parentEl.style.left = params.left;
        }
        else
        {
            //In case no left or right is present, assign right : 4em
            this.parentEl.style.right = "4em";
        }
    }
    else
    {
        //This is the case where neither top nor bottom is present in the parameters; Assign top - 2em, and right 4em as the default;
        this.parentEl.style.top = "2em";
        this.parentEl.style.right = "4em";
    }

    console.log(this);

    // The list of parameters are:
    // 1. text              -->     Could consist of any HTML text
    // 2. duration          -->     The duration for which the notification needs to be visible on screen. This excludes the animationIn and animationOut times.
    // 3. animationIn       -->     The class that is used to animate-in the notification
    // 4. animationOut      -->     The class that is used to animate-out the notification
    // 5. style             -->     The class that is used to display the notification
    // 6. autoClose         -->     true/false. Auto closes the notification. Default behavior is to autoclose when duration is mentioned.
    // 7. animateInDuration -->     Duration of animation during entry. Value is in ms. Default is 400.
    // 8. animateOutDuration-->     Duration of animation during exit. Value is in ms. Default is 400.
    // 9. closeButtonColor  -->     Color of the close button. Defaults to black.
    //10. closeButton       -->     true/false. Option to display the 'x' to close the notification. Default behavior is to display it.
    //11. frame             -->     The class that styles the notification frame.
    //12. beforeEnter       -->     Function that is called before entering the viewport. This is called before animationIn begins.
    //13. afterEnter        -->     Function that is called right after entering the viewport and after the animationIn concludes.
    //14. beforeLeave       -->     Function that is called just before leaving, or before the animationOut kicks in.
    //15. afterLeave        -->     Function that is called right after animationOut concludes. This is when the notification completely leaves the viewport.
    //16. onClick           -->     Function that is called when the notification is clicked.

    //this.Notify = function(text, duration, animationIn, animationOut)
    this.Notify = function(parameters)
    {
        /* This method creates a notification */

        ///////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        /* Assign the variables */

        /* Check for HTML text */
        if (parameters.hasOwnProperty('text'))
        {
            this.text = parameters.text;
        }
        else
        {
            this.text = "Hello from JSAlerts!";
        }
        /* Check for duration */
        if (parameters.hasOwnProperty('duration'))
        {
            this.duration = parameters.duration;
        }
        else
        {
            this.duration = "3000";
        }
        /* Check for animationIn */
        if (parameters.hasOwnProperty('animationIn'))
        {
            this.animationIn = parameters.animationIn;
        }
        else
        {
            this.animationIn = "slideInRight";
        }
        /* Check for animationOut */
        if (parameters.hasOwnProperty('animationOut'))
        {
            this.animationOut = parameters.animationOut;
            console.log("parameters : animationOUt "+ this.animationOut);
        }
        else
        {
            this.animationOut = "slideOutTop";
        }
        /* Check for style */
        if (parameters.hasOwnProperty('style'))
        {
            this.style = parameters.style;
        }
        else
        {
            this.style = "error";
        }
        /* Check for autoClose */
        if (parameters.hasOwnProperty('autoClose'))
        {
            this.autoClose = parameters.autoClose;
        }
        else
        {
            this.autoClose = true;
        }
        /* Check for animateInDuration */
        if (parameters.hasOwnProperty('animateInDuration'))
        {
            this.animateInDuration = parameters.animateInDuration;
        }
        else
        {
            this.animateInDuration = "400";
        }
        /* Check for animateOutDuration */
        if (parameters.hasOwnProperty('animateOutDuration'))
        {
            this.animateOutDuration = parameters.animateOutDuration;
        }
        else
        {
            this.animateOutDuration = "400";
        }
        /* Check for closeButton */
        if (parameters.hasOwnProperty('closeButton'))
        {
            this.closeButton = parameters.closeButton;
        }
        else
        {
            this.closeButton = true;
        }
        /* Check for closeButtonColor */
        if (parameters.hasOwnProperty('closeButtonColor'))
        {
            this.closeButtonColor = parameters.closeButtonColor;
        }
        else
        {
            this.closeButtonColor = "#000";
        }
        /* Check for frame */
        if (parameters.hasOwnProperty('frame'))
        {
            this.frame = parameters.frame;
        }
        else
        {
            this.frame = "frame";
        }
        /* Check for beforeEnter */
        if (parameters.hasOwnProperty('beforeEnter'))
        {
            this.beforeEnter = parameters.beforeEnter;
        }
        else
        {
            this.beforeEnter = doNothing;
        }
        /* Check for afterEnter */
        if (parameters.hasOwnProperty('afterEnter'))
        {
            this.afterEnter = parameters.afterEnter;
        }
        else
        {
            this.afterEnter = doNothing;
        }
        /* Check for beforeLeave */
        if (parameters.hasOwnProperty('beforeLeave'))
        {
            this.beforeLeave = parameters.beforeLeave;
        }
        else
        {
            this.beforeLeave = doNothing;
        }
        /* Check for afterLeave */
        if (parameters.hasOwnProperty('afterLeave'))
        {
            this.afterLeave = parameters.afterLeave;
        }
        else
        {
            this.afterLeave = doNothing;
        }
        /* Check for onClick */
        if (parameters.hasOwnProperty('onClick'))
        {
            this.onClick = parameters.onClick;
            this.clickable = true;
        }
        else
        {
            this.onClick = doNothing;
            this.clickable = false;
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////

        var object = this;

        var el = document.createElement("div");

        //Attach the close button to the element here if this.closeButton is true.
        if (this.closeButton)
        {
            var close_button = document.createElement("img");
            close_button.src = "images/close.png";
			close_button.className = "notification-action";

            //Add event handlers of close_button here
            close_button.onclick = function()
            {
                object.destroy(el);
            }


            el.appendChild(close_button);
        }

        var el_content = document.createElement("div");

        el_content.innerHTML = this.text;   //Can also take HTML text as input --> this makes it simpler to extend and include HTML.
        //Check if onClick has been attached.
        if (this.clickable)
        {
            el_content.onclick = this.onClick;  //If clickable, attach the onclick event
            el_content.style.cursor = "pointer";
        }
        el.appendChild(el_content);

        el.defaultClassName =  this.frame + " " + this.style + " ";
        el.className = this.frame + " " + this.style + " " + this.animationIn;
        console.log("el.className :: "+ el.className);
        console.log("el.animationOut :: "+ object.animationOut);
        //-------------------------------------------------------------
        //Check for browser type here --> whether it is webkit based or IE or moz.
        if (this.browser_type == "Webkit")
        {
            el.style.WebkitAnimationDuration = parseFloat(this.animateInDuration/1000).toString() + "s";
        }
        else if (this.browser_type == "MSIE")
        {
            el.style.animationDuration = parseFloat(this.animateInDuration/1000).toString() + "s";
        }
        else if (this.browser_type == "Moz")
        {
            el.style.MozAnimationDuration = parseFloat(this.animateInDuration/1000).toString() + "s";
        }
        else if (this.browser_type == "O")
        {
            el.style.animationDuration = parseFloat(this.animateInDuration/1000).toString() + "s";
        }
        //-------------------------------------------------------------


        /* fire --> fires the notification */
        this.fire = function(resolve, reject)
        {
            //Create a promise for creation of the notification.
            this.parentEl.appendChild(el);
            this.beforeEnter();     //Call beforeEnter right after appending the notification element.
            window.setTimeout(function(){
                object.afterEnter();  //Call afterEnter after the animationIn completes.
            }, this.animateInDuration);

            window.setTimeout(function()
            {
                resolve(el);    //Resolve the promise once the duration completes.
            }, this.duration);
        }
        //Wrap this in a promise
        this.p1 = new Promise
        (
            function(resolve, reject)
            {
                var el = object.fire(resolve, reject);
            }
        )
        this.p1.then
        (
            function(el)
            {
                if (object.autoClose)
                {
                    object.destroy(el);
                }
            }
        ).catch(function(error)
        {
            console.log("Something went wrong. This might be helpful: "+error);
        })

        return el;

    }

    this.destroy = function(el)
    {

        var object = this;
        console.log(this);
        // var object = el;
        var destroy_promise = new Promise
        (
            function(resolve, reject)
            {
                // el.className = (el.className).slice(0,15) + " "+ object.animationOut;
                el.className += " "+ object.animationOut;
                console.log("defClassName "+el.defaultClassName);
                console.log("el.className:" +el.className);
                console.log("obj AniOut::"+object.animationOut);

                object.beforeLeave();    //Call beforeLeave here, so that the callback is fired just before the animationOut kicks in.
                //-------------------------------------------------------------
                //Check for browser type here --> whether it is webkit based or IE or moz.
                //el.style.WebkitAnimationDuration = parseFloat(object.animateOutDuration/1000).toString() + "s";


                if (this.browser_type == "Webkit")
                {
                    el.style.WebkitAnimationDuration = parseFloat(object.animateOutDuration/1000).toString() + "s";
                }
                else if (this.browser_type == "MSIE")
                {
                    el.style.animationDuration = parseFloat(object.animateOutDuration/1000).toString() + "s";
                }
                else if (this.browser_type == "Moz")
                {
                    el.style.MozAnimationDuration = parseFloat(object.animateOutDuration/1000).toString() + "s";
                }
                else if (this.browser_type == "O")
                {
                    el.style.animationDuration = parseFloat(object.animateOutDuration/1000).toString() + "s";
                }
                //-------------------------------------------------------------

                window.setTimeout(function()
                {

                    resolve(el);
                    object.afterLeave();    //Call afterLeave right after the animation completes, and before the notification is removed from the parent element.
                }, object.animateOutDuration);
            }
        )
        destroy_promise.then
        (
            function(el)
            {
                console.log("Before removing parentEl");
                console.log(el.parentNode);
                el.parentNode.style.display = "none";
                // el.parentNode.removeChild(el);
                el.parentNode.parentNode.removeChild(el.parentNode);
                console.log("After removing parentEl");
            }
        ).catch(function(error)
        {
            console.log("Something went wrong. This might be helpful: "+error);
        })
    }








    this.Alert = function(text, duration, animationIn, animationOut)
    {
        /* This method creates a fancy Alert. Write this in v2.0 */

        /* Assign the variables */
        this.text = typeof text !== 'undefined' ?  text : "Hey";
        this.duration = typeof duration !== 'undefined' ?  duration : "0.2";
        this.animationIn = typeof animationIn !== 'undefined' ?  animationIn : "slideInRight";
        this.animationOut = typeof animationOut !== 'undefined' ?  animationOut : "slideOutTop";
    }

}

function doNothing()
{
    //This is a placeholder callback function that is used for JSAlerts events. This will be called whenever an event occurs, in case a callback hasn't been initialized.
}
