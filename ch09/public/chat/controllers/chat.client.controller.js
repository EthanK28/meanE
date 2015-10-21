/**
 * Created by Eunseok on 2015-10-21.
 */

// Invoke 'strict' JavaScript mode
'use strict';


angular.module('chat').controller('ChatController', ['$scope',
    'Socket',
        function($scope, Socket) {
            $scope.messages = [];

            Socket.on('chatMessage', function(message) {
                $scope.messages.push(message);
            });

            $scope.sendMessage = function() {
                var message = {
                    text: this.messageText,
                };
                Socket.emit('chatMessage', message);

                this.messageText = '';
            };

            $scope.$on('$destroy', function() {
                Socket.removeListener('chatMessage');
                
            });

    }]);