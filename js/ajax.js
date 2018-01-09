function WebHttpAPICall(pMethod, pServiceURL, pMethodName, pParameters, pSuccessCallBack, pFailureCallBack) {
   this.Method = pMethod;
   this.ServiceURL = pServiceURL;
   this.MethodName = pMethodName;
   this.Parameters = pParameters;
   this.SuccessCallBack = pSuccessCallBack;
   this.FailureCallBack = pFailureCallBack;

   this.CallServiceAPI = function () {

   // Set the Ajax Options:
       var options = {
           type: this.Method,
           url: this.ServiceURL + '/' + this.MethodName,
           processData: true,
           data: this.Parameters,
           contentType: 'application/json; charset=utf-8',
           dataType: 'json',
           success: this.SuccessCallBack,
           error: this.FailureCallBack
       };

       //Call API 
       $.ajax(options);
   }
}

// calling
 var apicallobjectForEditingGrid;
   apicallobjectForEditingGrid = new WebHttpAPICall('POST', URL, "PerformWorkflowActionNew", JSON.stringify(myParams), succeededCallbackSaveGrid, failedCallbackSaveGrid);
   apicallobjectForEditingGrid.CallServiceAPI();


//********************
  
// other way
  
  // var URL = common.instance.GetURLForPriceMasterLite();
  // URL = URL + '/GetDetailsForConfiguredDataSources'; // added function name.
   $.when(callService(URL, myParams, 'GET'))
    .then(function (result) {
       common.instance.RemoveDisableImage(common.instance.RenderDiv);
    });


var callService = function (Url, inputdata, type) {
   return $.ajax({
       type: type,
       contentType: "application/json; charset=utf-8",
       url: Url,
       data: inputdata,
       dataType: "json",
       processData: true,
       error: function(xhr, textStatus, errorThrown){
           var Message = "Error";  //failure.d.Message;
           alert(Message);
      }

   }).done(function (data) { // promise
       console.log(data);
   });

};


///////////////////////////////////
/* Deferred object is an object than can create a promise and change its state to resolved or rejected.
Deferreds are typically used if you write your own function and want to provide a promise to the calling code. 
You are the producer of the value.

A promise is, as the name says, a promise about a future value. 
You can attach callbacks to it to get that value. The promise was "given" to you and you are the receiver of the future value.
You cannot modify the state of the promise. Only the code that created the promise can change its state.


Examples:
1. (produce) You use deferred objects when you want to provide promise-support for your own functions. 
You compute a value and want to control when the promise is resolved.
*/


function callMe() {
    var d = new $.Deferred();
    setTimeout(function() {
        d.resolve('some_value_compute_asynchronously');
    }, 1000);
    return d.promise();
}

callMe().done(function(value) {
    alert(value);
});

//////////
//(forward) If you are calling a function which itself returns a promise, then you don't have to create your own deferred object.
// You can just return that promise. In this case the function does note create a value, but forwards it (kind of):

function fetchData() {
    // do some configuration here and pass to `$.ajax`
    return $.ajax({...});
}

fetchData().done(function(response) {
    // ...
});

//
