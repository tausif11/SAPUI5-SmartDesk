sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
], (Controller, Fragment, JSONModel) => {
    "use strict";

    return Controller.extend("northwindui5.northwindui.controller.View1", {
        onInit() {

            var oModel = new JSONModel();
            this.getView().setModel(oModel);

           var currentTime = new Date();
           var hours = currentTime.getHours();
           
           var hour = currentTime.getHours();
           var minutes = currentTime.getMinutes();
           var sec = currentTime.getSeconds();

           var localTime = `Current Time: ${hour}:${minutes}`;
           console.log(`Current Time: ${hour}:${minutes}:${sec}`);
            
            var timeOfDay = "" ;

            if(hours < 12 ){
                timeOfDay = "Good Morning..."
            }
            
            else if(hours >= 12 && hours <= 16){
                timeOfDay = "Good Afternoon..."
            }

            else if(hours >= 16 && hours <= 24){
                timeOfDay = "Good Evening..."
            }
 
            oModel.setProperty("/timeOfDay", timeOfDay); 
            oModel.setProperty("/localTime", localTime); 
            
        },

        onProfile: function (oEvent) {
            var oView = this.getView(); 
            console.log(oView);

            Fragment.load({
                id: oView.getId(),
                name: "northwindui5.northwindui.Fragment.Actionsheet", 
                type: "XML"
            }).then(function(oActionSheet)
            {
                this._oActionSheet = oActionSheet; 
                oView.addDependent(oActionSheet); 
                oActionSheet.openBy(oEvent.getSource());
            }.bind(this)).catch(function (error) 
            {
                console.error("Error loading ActionSheet fragment: ", error);
            });
        },

        onTimeTracking: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
             oRouter.navTo("TimeTracking", {
                "Id" : "TimeTracking"
            });
        }   
        
    });
});
