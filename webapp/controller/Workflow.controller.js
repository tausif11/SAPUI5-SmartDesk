sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("northwindui5.northwindui.controller.Workflow", {
        onInit() {
            var oModel = new JSONModel();
            this.getView().setModel(oModel);

            var oCurrentDate = new Date();
            var oYear = oCurrentDate.getFullYear();
            var oMonth = oCurrentDate.getMonth()+1;
            var oDay  = oCurrentDate.getDate();

            if(oMonth < 10 )
            {
                oMonth = '0'+ oMonth;
            }

            if(oDay < 10)
            {
                oDay = '0' + oDay;
            }
            
            console.log(oDay);
            var oTodayDate = `${oDay}/${oMonth}/${oYear}`;
            console.log("Current month:",oTodayDate);
            

            var WorkflowData = {
                WorkflowName  : "Smart-Desk UI5",
                Status        : "Ongoing",
                startDate     : "02/24/2025",
                endDate       : "N/A",
                Technology    : "UI5, JavaScript, CSS, JSON-Data",
                AssignedTo    : "Md. Tausif Alam",
                Client        : "INK IT Solutions Pvt. Ltd.",
                Priority      : "High",
                CreatedBy     : "Project Manager",
                LastUpdated   :  oTodayDate,
                ProcessType   : "Approval",
                ApprovalStatus: "Pending",
                Deadline      : "04/30/2025",
                Description   : "This workflow is for UI5 project management and tracking.",
                Steps         : [
                    {    
                        Step: "Requirement Gathering", 
                        Status: "Completed", 
                        AssignedTo: "Business Analyst" ,
                        Documents : [
                            { 
                                Name: "Project_Scope_Document.pdf", 
                                Type: "PDF", 
                                UploadedBy: "Manager", 
                                Date: "03/20/2025" 
                            }
                        ]
                    },
                    { 
                        Step: "Design UI Mockups", 
                        Status: "Ongoing", 
                        AssignedTo: "Md. Tausif Alam" ,
                        Documents : [
                            { 
                                Name: "UI_Designs.pdf", 
                                Type: "PDF", 
                                UploadedBy: "Md. Tausif Alam", 
                                Date: "03/22/2025" 
                            }
                        ]
                    },
                    { 
                        Step: "Development", 
                        Status: "Ongoing", 
                        AssignedTo: "Md. Tausif Alam",
                        Documents: [
                            { 
                                Name: "Development.pdf", 
                                Type: "PDF", 
                                UploadedBy: "Md. Tausif Alam" ,
                                Date: "03/25/2025" 
                            }
                        ] 
                    },
                    { 
                        Step: "Testing", 
                        Status: "Pending", 
                        AssignedTo: "QA Team" ,
                        Documents : [
                            { 
                                Name: "Testing.pdf", 
                                Type: "PDF", 
                                UploadedBy: "QA Team", 
                                Date: "03/22/2025" 
                            }
                        ]
                    },
                    { 
                        Step: "Deployment", 
                        Status: "Pending", 
                        AssignedTo: "DevOps Team" ,
                        Documents : [
                            { 
                                Name: "Deployment.pdf", 
                                Type: "PDF", 
                                UploadedBy: "DevOps Team", 
                                Date: "03/22/2025" 
                            }
                        ]
                    }
                ]
            };

            oModel.setProperty("/WorkflowData", WorkflowData);
        }
    });
});
