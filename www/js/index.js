var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
        
        app.x= document.querySelector('#disp-x');
        app.y= document.querySelector('#disp-y');
        app.z= document.querySelector('#disp-z');
        
        
        
        app.watch=navigator.accelerometer.watchAcceleration(app.onSuccess, app.onError, {frequency: 500});
        
        console.log(app.watch);
        
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    },
    
    onSuccess: function(acceleration) {
        //console.log(acceleration);
        app.x.innerHTML = 'x: ' + acceleration.x;
        app.y.innerHTML = 'y: ' + acceleration.y;
        app.z.innerHTML = 'z: ' + acceleration.z;
    },
    
    onError: function () {
        console.log(this);
    }
    
    
};
