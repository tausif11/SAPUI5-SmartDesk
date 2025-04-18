sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("northwindui5.northwindui.controller.ViewTileReport", {

        onInit: function () {
            const bookData = {
                books: [
                    { 
                        ID: 1, 
                        title: "The Alchemist", 
                        author: "Paulo Coelho", 
                        stock: 10 
                    },
                    { ID: 2, 
                        title: "Harry Potter", 
                        author: "J.K. Rowling", 
                        stock: 20 
                    },
                ]
            };

            const oModel = new JSONModel();
            oModel.setData(bookData);
            this.getView().setModel(oModel, "bookModel");
        },

        onCreate: function () {
            const oModel = this.getView().getModel("bookModel");
            const aBooks = oModel.getProperty("/books");

            const ID = parseInt(this.byId("inputID").getValue());
            const title = this.byId("inputTitle").getValue();
            const author = this.byId("inputAuthor").getValue();
            const stock = parseInt(this.byId("inputStock").getValue());

            if (!ID || !title || !author || isNaN(stock)) {
                MessageToast.show("Please fill all fields correctly.");
                return;
            }

            const newBook = { ID, title, author, stock };
            aBooks.push(newBook);
            oModel.setProperty("/books", aBooks);

            console.log(aBooks);
            

            MessageToast.show("Book added!");
            // this.byId("inputID").setValue("");
            // this.byId("inputTitle").setValue("");
            // this.byId("inputAuthor").setValue("");
            // this.byId("inputStock").setValue("");
        }
    });
});




     /*
         --------------------------------------------
        |       Controller for CRUD operations       | 
        |        using OData V2 configured           | 
        |          in Manifest.json file             | 
         --------------------------------------------

      * /


/*
      sap.ui.define([
         "sap/ui/core/mvc/Controller",
         "sap/ui/model/JSONModel",
         "sap/m/MessageToast"
      ], function(Controller,JSONModel,MessageToast){
           "use strict"

           return controller.extend("controller name", {
              
              onInit: function(){
                this.oModel = this.getView().getModel();
                this.oView = this.getView();
              },

              onCreate: function(){
                 const formData = this._getFormData();

                 if(!formData){
                   return:
                 }

                this.oModel.create("entity Path", formData {
                   success: () => {
                        Message.Toast("Data created Successfully");
                        this._clearForm();
                        this.oModel.refresh(true);
                    }
                })
              },

              _getFormData: function(){
              
                    const ID        = this.byId("ID-name").getValue();
                    const title     = this.byId("ID-name").getValue();
                    const authour   = this.byId("ID-name").getValue();
                    const stock     = this.byId("ID-name").getValue();
                    const Publisher = this.byId("ID-name").getValue();

                    // Validation of Form Data
                    if(!title || !authour || !Publisher  ||isNaN(ID) ||isNaN(stock))
                    {
                       Messgae.Toast("filled Correct Data.....")
                       return null;
                    }

                    return { 
                            ID: ID, 
                            title: title,
                            stock: stock,
                            Publisher: Publisher
                         }
              }

           });
      });
 */