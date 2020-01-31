(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{108:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(59);t.default=function(t){return t.error?e.createElement("div",{className:"alert alert-danger"},t.error):""===t.error?e.createElement(n.Redirect,{to:t.successRedirect,push:!0}):null}}).call(this,r(11))},155:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(108),l=(n=o)&&n.__esModule?n:{default:n};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.signUp=t.signUp.bind(t),t.onFieldChange=t.onFieldChange.bind(t),t.state={fieldsValue:{},fieldsError:{},authorizedError:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),s(r,[{key:"render",value:function(){return e.createElement("form",{onSubmit:this.signUp},e.createElement(l.default,{error:this.state.authorizedError,successRedirect:"/map"}),e.createElement("input",{type:"email",name:"userEmail",onInput:this.onFieldChange,className:"form-control",placeholder:"Enter email"}),e.createElement("label",{className:"text-danger",htmlFor:"userEmail"},this.state.fieldsError.userEmail),e.createElement("input",{type:"password",name:"userPassword",onInput:this.onFieldChange,className:"form-control",placeholder:"Enter password"}),e.createElement("label",{className:"text-danger mb-3 d-block",htmlFor:"userPassword"},this.state.fieldsError.userPassword),e.createElement("button",{type:"submit",name:"authorization",className:"btn btn-primary"},"Авторизироваться"))}},{key:"onFieldChange",value:function(e){var t=e.target;this.setState((function(e){return{fieldsValue:a({},e.fieldsValue,i({},t.name,t.value))}}))}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var r=this.testForm();this.setState({fieldsError:r}),Object.keys(r).length||firebaseProj.auth().signInWithEmailAndPassword(this.state.fieldsValue.userEmail,this.state.fieldsValue.userPassword).then((function(){t.setState({authorizedError:""})}),(function(e){t.setState({authorizedError:e.message})}))}},{key:"testForm",value:function(){var e={};return new RegExp(".+@.{3,8}..{3,8}").test(this.state.fieldsValue.userEmail)||(e.userEmail="Input correct email"),(!this.state.fieldsValue.userPassword||this.state.fieldsValue.userPassword.length<8)&&(e.userPassword="Minimum password length is 8"),e}}]),r}(e.Component);t.default=u}).call(this,r(11))},156:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(108),l=(n=o)&&n.__esModule?n:{default:n};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onFormChange=t.onFormChange.bind(t),t.addUser=t.addUser.bind(t),t.state={fieldsValue:{},fieldsError:{},registrationError:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),s(r,[{key:"render",value:function(){return e.createElement("form",{onSubmit:this.addUser},e.createElement(l.default,{error:this.state.registrationError,successRedirect:"/profile"}),e.createElement("input",{type:"email",name:"userEmail",onInput:this.onFormChange,className:"form-control",placeholder:"Enter email"}),e.createElement("label",{className:"text-danger text-small"},this.state.fieldsError.userEmail),e.createElement("input",{type:"text",name:"userName",onInput:this.onFormChange,className:"form-control",placeholder:"Enter name"}),e.createElement("label",{className:"text-danger text-small"},this.state.fieldsError.userName),e.createElement("input",{type:"password",name:"userPassword",onInput:this.onFormChange,className:"form-control",placeholder:"Enter password"}),e.createElement("label",{className:"text-danger text-small"},this.state.fieldsError.userPassword),e.createElement("input",{type:"password",name:"confirmPassword",onInput:this.onFormChange,className:"form-control",placeholder:"Confirm password"}),e.createElement("label",{className:"text-danger text-small d-block mb-3"},this.state.fieldsError.confirmPassword),e.createElement("button",{type:"submit",name:"registing",className:"btn btn-primary"},"Зарегистрироваться"))}},{key:"onFormChange",value:function(e){var t=e.target;this.setState((function(e){return{fieldsValue:a({},e.fieldsValue,i({},t.name,t.value))}}))}},{key:"addUser",value:function(e){e.preventDefault();var t=this.testForm();this.setState({fieldsError:t}),Object.keys(t).length||this.createUser()}},{key:"testForm",value:function(){var e={};return new RegExp(".+@.{3,8}..{3,8}").test(this.state.fieldsValue.userEmail)||(e.userEmail="Input correct email"),this.state.fieldsValue.userName||(e.userName="Enter your name"),(!this.state.fieldsValue.userPassword||this.state.fieldsValue.userPassword.length<8)&&(e.userPassword="Minimum password length is 8"),this.state.fieldsValue.confirmPassword!==this.state.fieldsValue.userPassword&&(e.confirmPassword="Passwords are not equals"),e}},{key:"createUser",value:function(){var e=this;firebaseProj.auth().createUserWithEmailAndPassword(this.state.fieldsValue.userEmail,this.state.fieldsValue.userPassword).then((function(t){return t.user.updateProfile({displayName:e.state.fieldsValue.userName})})).then((function(){return e.setState({registrationError:""}),user.sendEmailVerification()})).catch((function(t){e.setState({registrationError:t.message})}))}}]),r}(e.Component);t.default=u}).call(this,r(11))},371:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(155)),a=s(r(156));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return e.createElement("div",{className:"forms"},e.createElement("div",{className:"container w-75 row"},e.createElement("div",{className:"col-sm-6 border-right"},e.createElement("h3",null,"Регистрация"),e.createElement(a.default,null)),e.createElement("div",{className:"col-sm-6"},e.createElement("h3",null,"Авторизация"),e.createElement(n.default,null))))}}).call(this,r(11))}}]);