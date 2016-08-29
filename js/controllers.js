var contactManager = angular.module('contactManager', []);
var contactFactory = angular.module('contactFactory', []);


//Contacts List Controller
// contactManager.controller('ListController', ['$scope', '$http', , function($scope, $http) {
//   $http.get('js/data.json').success(function(data) {
//     $scope.contacts = data;
//     //$scope.contacts = 'name';
//   });
// }]);

// Contacts Details Controller
contactManager.controller('DetailsController', ['$scope','$alert', '$http', '$routeParams',  'ContactList',
  function($scope,$alert, $http, $routeParams, ContactList ) {

    
            // var ref = new Firebase("https://mycontactmanager.firebaseio.com/");
            // $scope.contacts = $firebaseObject(ref);




          $scope.contacts = ContactList.getContact();
          $scope.submit = function(){
                  ContactList.create($scope.formInput);
                    $scope.formInput = null;
                    alert.show();
                    
                            };                 
                            
          $scope.contactId = ContactList.findContact($routeParams.contactId);

          $scope.deleteContact = function(index){
                  ContactList.destroy(index);
                  deleteAlert.show();
                            };

           var alert = $alert({
                        title: 'Success!',
                        content: 'The contact was added successfully.',
                        type: 'success',
                        container: '#alertContainer',
                        show: false
                        });  

           var deleteAlert = $alert({
                        title: 'Success!',
                        content: 'The contact was deleted successfully.',
                        type: 'success',
                        container: '#delete-AlertContainer',
                        show: false
                        });  

          

           
          
          //$scope.contactId = $routeParams.contacts ;

     // $scope.contact  = [
                 //      {
                 //        fname:"Stephen Radford",
                 //        phone:"0123456789",
                 //        address:"123, Some Street\nLeicester\nGH1 2SR",
                 //        email:"stephen@email.com",
                 //        website: "stephenradford.me",
                 //        notes: ""
                 //      },
                 //      {
                 //        fname:"Alan Border",
                 //        phone:"154648445",
                 //        address:"457, Some Street\nBirmingham\nLM1 2AB",
                 //        email:"stephen@email.com",
                 //        website: "alanborder.me",
                 //        notes: ""
                 //      },
                 //      {
                 //        fname:"Misbah ul Haq",
                 //        phone:"8899556744",
                 //        address:"458, Some Street\nFaisalabad\nFD1 2MH",
                 //        email:"misbah@email.com",
                 //        website: "misbah.me",
                 //        notes: ""
                 //      }                             
                 //                          ];



                  // $scope.addContact = function(){
                  //   $scope.contacts.push($scope.user);
                  //   $scope.user = null;
                  //   };

                  // $scope.addName = function () {
                  //   $scope.contact.push($scope.user);
                            
                  //   $scope.user = null;
                  //       }; 


      
                  
          
  }]);


//var contactFactory = angular.module('contactFactory');
contactFactory.factory('ContactList', function($firebaseObject){

    //var contact = new Firebase("https://mycontactmanager.firebaseio.com");
             
     var  contact  = [
                        {
                        name: 'Stephen Radford',
                        phone: '0123456789',
                        address: '123, Some Street\nLeicester\nLE1 2AB',
                        email: 'stephen@email.com',
                        website: 'stephenradford.me',
                        notes: ''
                        },
                        {
                        name: 'Declan Proud',
                        phone: '91234859',
                        address: '234, Some Street\nLeicester\nLE1 2AB',
                        email: 'declan@declan.com',
                        website: 'declanproud.me',
                        notes: 'Some notes about the contact.'
                        }
                        ];
                                              
                    return {
                          getContact: function(){
                          return contact;
                          },
                          findContact: function(index){
                          return contact[index];
                          },
                          create: function(contacts){
                              contact.push(contacts)

                          },
                          destroy: function(index){
                          contact.splice(index,1);
                          }
                            
                      } ;   



                          

                            


                                // $scope.addContact = function(){
                                // $scope.contact.push($scope.contacts);
                                // $scope.contacts = null;
                                // };

                              // $scope.addName = function () {
                              //   $scope.contact.push($scope.user);
                                        
                              //   $scope.user = null;
                              //       };   
                                  



});



// Adds active class to the current element of the navigation bar
contactManager.controller('NavigationController', function($scope, $location) {

          $scope.startSearch = function(){
                $location.path('/');
                };

    $scope.isActive = function(route) {
        return route === $location.path();
    };

               

});







