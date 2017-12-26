var app = angular.module('treeApp', []);
app.controller('treeCtrl', function ($scope) {
    $scope.contacts = [
        {
            id: 1,
            name: "Friends",
            type: "Group",
            contacts: [
                { id: 2, name: "Udi", type: "Contact" },
                { id: 3, name: "Tommy", type: "Contact" },
                {
                    id: 6,
                    name: "Old Friends",
                    type: "Group",
                    contacts: [
                        { id: 7, name: "Itay", type: "Contact" },
                    ]
                },
            ]
        },
        {
            id: 4,
            name: "Family",
            type: "Group",
            contacts: [
                { id: 5, name: "Roni", type: "Contact" },
            ]
        },
        { id: 8, name: "Ori", type: "Contact" },
    ];

    

    $scope.treeTitle = 'Contact Tree';
    $scope.showHideContacts = function(contact) {
        if(contact.type.indexOf('Group') == 0){
            $scope.selectedGroupID = contact.id;
            
        }
         
    };
    
    
});
