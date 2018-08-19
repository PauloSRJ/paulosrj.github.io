/** *************Angular controller JS*********************/
"use strict"; 

const cards = [{
    img: 'https://camo.githubusercontent.com/4e7f2698331bd82cc707e9f13be5922891f4038a/68747470733a2f2f692e696d6775722e636f6d2f58396f395a61302e706e67',
    url: 'https://github.com/PaulaoDev/khan',
    name: 'khan framework'   
},{
    img: 'https://camo.githubusercontent.com/54abc19aab1fe6f40b7195ab592d62fab525a18a/68747470733a2f2f692e696d6775722e636f6d2f5059434b4750462e706e67',
    url: 'https://github.com/PaulaoDev/router-khan-js',
    name: 'router khan'   
},{
    img: 'https://camo.githubusercontent.com/a2f569b35cda7cd44b3c34b0ba02a9db09e97310/68747470733a2f2f692e696d6775722e636f6d2f5a6b735259546c2e706e67',
    url: 'https://github.com/PaulaoDev/chatbot-php-facebook',
    name: 'chatbot php'   
},{
    img: 'https://camo.githubusercontent.com/d9e3fc9afb3926d240cb5e49dfe3f4ba4624b04c/68747470733a2f2f692e696d6775722e636f6d2f70516d44676a422e706e67',
    url: 'https://github.com/PaulaoDev/KhanChat',
    name: 'khanchat'   
},{
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png',
    url: 'https://github.com/PaulaoDev/upload-react',
    name: 'upload react'   
},{
    img: 'https://camo.githubusercontent.com/70fa139225ba0739ff17819df2cb1c3b895f040e/68747470733a2f2f692e696d6775722e636f6d2f68764969344b412e676966',
    url: 'https://github.com/PaulaoDev/bot-data-mining',
    name: 'bot data mining'   
}];

$('.portf').html(cards.map(card => `
    <li class="item mdl-card mdl-shadow--2dp pa-0 web card-insert" id="${card.name.replace(/\s/g, '')}">
    <div class="light-img-wrap mdl-card__title pa-0">
            <img class="img-responsive" src="${card.img}" alt="${card.name}" />
            <div class="light-img-overlay"></div>
            <span class="img-cap">${ card.name }</span>
    </div>
    <span class="bottom-links mdl-card__actions">
            <a href="${card.url}" target="_blank"><i class="zmdi zmdi-eye"></i></a>
            <a href="#${card.name.replace(/\s/g, '')}"><i class="zmdi zmdi-format-subject"></i></a>
    </span>
    </li>
`).join(' '));

// app.controller('Portfolio', function ($scope, $http) {

    // $scope.cards = JSON.parse('[{"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/2000px-Php_logo.svg.png","url":"git://github.com/PaulaoDev/chatbot-php-facebook.git","name":"chatbot-php-facebook"},{"img":"https://qordoba.com/wp-content/uploads/2018/04/js.png","url":"git://github.com/PaulaoDev/io-script-js.git","name":"io-script-js"},{"img":"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg","url":"git://github.com/PaulaoDev/free-courses.git","name":"free-courses"},{"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/2000px-Php_logo.svg.png","url":"git://github.com/PaulaoDev/bot-data-mining.git","name":"bot-data-mining"},{"img":"https://qordoba.com/wp-content/uploads/2018/04/js.png","url":"git://github.com/PaulaoDev/ClientModuleJS.git","name":"ClientModuleJS"},{"img":"https://qordoba.com/wp-content/uploads/2018/04/js.png","url":"git://github.com/PaulaoDev/BotWeb.git","name":"BotWeb"},{"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/2000px-Php_logo.svg.png","url":"git://github.com/PaulaoDev/DesignPatternsPHP.git","name":"DesignPatternsPHP"},{"img":"https://qordoba.com/wp-content/uploads/2018/04/js.png","url":"git://github.com/PaulaoDev/estudos-javascript.git","name":"estudos-javascript"}]');

//     // var dataSort = (a, b) => a['stargazers_count'] - b['stargazers_count'];
//     // var icon = ({ language }) => {
//     //     let i = {
//     //         PHP(){
//     //             return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/2000px-Php_logo.svg.png";
//     //         },
//     //         JavaScript(){
//     //             return "https://qordoba.com/wp-content/uploads/2018/04/js.png";
//     //         }
//     //     }
//     //     if(language !== null){
//     //         return i[language]();
//     //     }
//     //     return "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";
//     // };

//     // let headers = new Headers();
//     // headers.append('User-Agent', 'Awesome-Octocat-App');

//     // fetch('https://api.github.com/users/PaulaoDev/repos', { headers })
//     //     .then((resp) => resp.json())
//     //     .then(function(data) {
//     //         var res = data.sort(dataSort).reverse();
//     //         res.length = 8;
//     //         let response = res.map(r => ({
//     //             img: icon(r),
//     //             url: r.git_url,
//     //             name: r.name
//     //         }));
//     //         console.log(JSON.stringify(response));
//     //         $scope.cards = [{name: "Paulao"}];
//     //     });

// });

app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform, e) {
		e.preventDefault();
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            (function(data, emailjs){
                emailjs.init("user_w2W1T1jBayarcAzAF3t9q");
                // parameters: service_id, template_id, template_parameters
                emailjs.send("gmail", "email_de_contato", data).then(function(response) {
                   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function(err) {
                   console.log("FAILED. error=", err);
                });
            })($scope.formData, emailjs);
            /*$http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = false;
		$scope.formData = null;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
					$scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });*/
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
});