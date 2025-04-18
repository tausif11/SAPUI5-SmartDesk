sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("northwindui5.northwindui.controller.TimeTracking", {
        onInit() {
            var oModel = new JSONModel();
            this.getView().setModel(oModel);

            var TimeTracking = {
                date: null,
                startTime: null,
                endTime: null,
                task: "",
                description: "",
                entries: []    
            }
            oModel.setProperty("/TimeTracking",TimeTracking);
        },

        onSubmit: function() {
            var oModel = this.getView().getModel();
            var oTimeTracking = oModel.getProperty("/TimeTracking");
            console.log("Time Tracking Data:", oTimeTracking);
            this.clearForm();
        },

        clearForm: function() {
            var oModel = this.getView().getModel();
            oModel.setData({
                date: null,
                startTime: null,
                endTime: null,
                task: "",
                description: "",
                entries: oModel.getData().entries
            });
        }
        
    });
});
