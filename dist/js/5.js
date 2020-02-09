(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(e,t){e.exports="/assets/images/danger.png"},120:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(78),l=(n=o)&&n.__esModule?n:{default:n},i=r(46);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(121),r(81);var c=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onFormChange=t.onFormChange.bind(t),t.updateUser=t.updateUser.bind(t),t.state={fieldsValue:{},fieldsError:{},updateError:null},t}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),s(r,[{key:"render",value:function(){return e.createElement("form",{onSubmit:this.updateUser},e.createElement(l.default,{error:this.state.updateError,successMessage:"Профиль обновлен"}),e.createElement("input",{type:"text",name:"userName",onInput:this.onFormChange,value:this.state.fieldsValue.userName,className:"form-control",placeholder:"Введите новое имя"}),e.createElement("label",{className:"text-danger text-small d-block mb-3"},this.state.fieldsError.userName),e.createElement("div",{className:"custom-file mb-3"},e.createElement("input",{type:"file",accept:"image",name:"userPhoto",onChange:this.onFormChange,className:"custom-file-input",placeholder:"Выберите фото"}),this.state.fieldsError.userPhoto?e.createElement("label",{className:"text-danger text-small custom-file-label"},this.state.fieldsError.userPhoto):e.createElement("label",{className:"custom-file-label"},"Выберите фото")),e.createElement("input",{type:"password",name:"userPassword",onInput:this.onFormChange,value:this.state.fieldsValue.userPassword,className:"form-control",placeholder:"Введите новый пароль"}),e.createElement("label",{className:"text-danger text-small d-block mb-3"},this.state.fieldsError.userPassword),e.createElement("input",{type:"password",name:"confirmPassword",onInput:this.onFormChange,value:this.state.fieldsValue.confirmPassword,className:"form-control",placeholder:"Подтвердите пароль"}),e.createElement("label",{className:"text-danger text-small d-block mb-3"},this.state.fieldsError.confirmPassword),e.createElement("button",{type:"submit",name:"updating",className:"btn btn-primary"},"Обновить"))}},{key:"onFormChange",value:function(e){var t=e.target,r=t.files?t.files[0]:t.value;this.setState((function(e){return{fieldsValue:a({},e.fieldsValue,u({},t.name,r))}}))}},{key:"updateUser",value:(n=regeneratorRuntime.mark((function e(t){var r,n,a,s,o,l=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=this.testForm(),!Object.keys(r).length){e.next=6;break}return this.setState({fieldsError:r}),(0,i.showDangerMessage)("Ошибки заполнения формы"),e.abrupt("return");case 6:if(n=firebaseProj.auth().currentUser,a="",s=this.state.fieldsValue.userName?this.state.fieldsValue.userName:n.displayName,!this.state.fieldsValue.userPhoto){e.next=14;break}return o=firebaseProj.storage().ref("/"+n.uid+this.state.fieldsValue.userPhoto.name.slice(this.state.fieldsValue.userPhoto.name.lastIndexOf("."))),e.next=11,o.put(this.state.fieldsValue.userPhoto);case 11:return e.next=13,o.getDownloadURL();case 13:a=e.sent;case 14:firebaseProj.auth().currentUser.updateProfile({displayName:s,photoURL:a}).then((function(){return l.state.fieldsValue.userPassword?firebaseProj.auth().currentUser.updatePassword(l.state.fieldsValue.userPassword):Promise.resolve()})).then((function(){l.props.onProfileChange(),(0,i.showSuccessMessage)("Профиль обновлен"),l.setState({fieldsError:{},updateError:""})})).catch((function(e){(0,i.showDangerMessage)("Ошибка обновления"),l.setState({updateError:e.message})}));case 15:case"end":return e.stop()}}),e,this)})),o=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,s){try{var o=e[a](s),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return o.apply(this,arguments)})},{key:"testForm",value:function(){var e={};return this.state.fieldsValue.userName&&this.state.fieldsValue.userName<3&&(e.userName="Минимальная длина имени 3 символа"),this.state.fieldsValue.userPassword&&this.state.fieldsValue.userPassword.length<8&&(e.userPassword="Минимальная длина пароля 8 символов"),this.state.fieldsValue.confirmPassword!==this.state.fieldsValue.userPassword&&(e.confirmPassword="Пароли не совпадают"),this.state.fieldsValue.userPhoto?(this.state.fieldsValue.userPhoto.type.includes("image")||(e.userPhoto="Файл должен быть фотографией"),this.state.fieldsValue.userPhoto.size>5242880&&(e.userPhoto="Превышен максимальный размер фото(5Мб)"),e):e}}]),r}(e.Component);t.default=c}).call(this,r(5))},176:function(e,t){e.exports="/assets/images/success.png"},177:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(60);t.default=function(){return e.createElement("div",{className:"d-flex justify-content-between mb-3 p-2 align-items-center"},e.createElement("div",{className:"logo"},e.createElement("img",{src:r(178),alt:"Logo",className:"ml-3 logo-image"})),e.createElement("div",{className:"menu"},e.createElement(n.NavLink,{activeClassName:"active",className:"mr-3",to:"/profile"},"Профиль"),e.createElement(n.NavLink,{activeClassName:"active",className:"mr-3",to:"/history"},"История"),e.createElement(n.NavLink,{activeClassName:"active",to:"/dashboard",className:"mr-3"},"Доска объявлений"),e.createElement(n.NavLink,{to:"/",onClick:function(){firebaseProj.auth().signOut()},className:"mr-3"},"Выйти")))}}).call(this,r(5))},178:function(e,t){e.exports="/assets/images/logo.jpg"},187:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(46);r(81);var s=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return t.onPhotoChange=t.onPhotoChange.bind(t),t.onButClick=t.onButClick.bind(t),t.state={file:null,message:"",updated:!1},t}var o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),n(s,[{key:"render",value:function(){return e.createElement("div",{className:"overflow-hidden col-sm-3 col-offset-2"},e.createElement("img",{src:firebaseProj.auth().currentUser.photoURL||r(389),className:"w-100 mb-3",alt:""}),e.createElement("input",{type:"file",className:"d-none",id:"userAva",onChange:this.onPhotoChange}),e.createElement("label",{onClick:this.onButClick,className:"btn-primary btn btn-block",htmlFor:"userAva"},this.state.message?this.state.message:"Обновить фото"))}},{key:"onButClick",value:(o=regeneratorRuntime.mark((function e(t){var r,n,s,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.updated){e.next=4;break}return e.abrupt("return");case 4:t.preventDefault();case 5:return r=this.state.file,n=firebaseProj.storage().ref("/"+firebaseProj.auth().currentUser.uid+r.name.slice(r.name.lastIndexOf("."))),e.next=8,n.put(r);case 8:return e.next=10,n.getDownloadURL();case 10:s=e.sent,firebaseProj.auth().currentUser.updateProfile({photoURL:s}).then((function(){o.setState({updated:!1,message:""}),o.props.onAvaChange(),(0,a.showSuccessMessage)("Аватар изменен")}));case 12:case"end":return e.stop()}}),e,this)})),l=function(){var e=o.apply(this,arguments);return new Promise((function(t,r){return function n(a,s){try{var o=e[a](s),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return l.apply(this,arguments)})},{key:"onPhotoChange",value:function(e){var t=e.target.files[0];return t.type.includes("image")?t.size>5242880?((0,a.showDangerMessage)("Файл превышает максимальный размер"),void this.setState({message:"",updated:!1})):void this.setState({message:"Загрузить",file:t,updated:!0}):((0,a.showDangerMessage)("Файл должен быть фотографией"),void this.setState({message:"",updated:!1}))}}]),s}(e.Component);t.default=s}).call(this,r(5))},389:function(e,t){e.exports="/assets/images/defAvatar.png"},390:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var t=firebaseProj.auth().currentUser;return e.createElement("table",{className:"table table-bordered"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Имя"),e.createElement("td",null,t.displayName)),e.createElement("tr",null,e.createElement("td",null,"Email"),e.createElement("td",null,t.email)),e.createElement("tr",null,e.createElement("td",null,"Email подтвержден"),t.emailVerified?e.createElement("td",{className:"text-success"},"Подтвержден"):e.createElement("td",{className:"text-danger"},"Не подтвержден"))))}}).call(this,r(5))},408:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(183),r(79);var a=i(r(80)),s=i(r(187)),o=i(r(390)),l=i(r(120));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onProfileChange=t.onProfileChange.bind(t),t.state={update:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),n(r,[{key:"render",value:function(){return e.createElement("div",{className:"container my-5 row justify-content-center"},e.createElement(s.default,{onAvaChange:this.onProfileChange}),e.createElement("div",{className:"col-sm-6"},e.createElement(o.default,null),e.createElement("div",{className:"btn btn-link","data-toggle":"modal","data-target":"#updateForm"},"Обновить профиль"),e.createElement("div",{className:"modal",role:"dialog",id:"updateForm"},e.createElement("div",{className:"modal-dialog",role:"document"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header d-flex justify-content-end"},e.createElement("span",{"data-dismiss":"modal",className:"cursor"},"×")),e.createElement("div",{className:"modal-body"},e.createElement(l.default,{onProfileChange:this.onProfileChange})))))))}},{key:"onProfileChange",value:function(){this.setState((function(e){return{update:!e.update}}))}}]),r}(e.Component);t.default=(0,a.default)(u)}).call(this,r(5))},46:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=null,a=document.querySelector("#message-window");function s(){a.classList.remove("show"),a.classList.remove("hide"),a.classList.remove("alert-success"),a.classList.remove("alert-danger"),n&&clearTimeout(n),n=setTimeout((function(){a.classList.add("hide")}),5e3)}t.showSuccessMessage=function(e){s(),a.classList.add("show"),a.classList.add("alert-success"),a.querySelector(".img").src=r(176),a.querySelector(".text").textContent=e},t.showDangerMessage=function(e){s(),a.classList.add("show"),a.classList.add("alert-danger"),a.querySelector(".img").src=r(119),a.querySelector(".text").textContent=e}},78:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(60);t.default=function(t){return t.error?e.createElement("div",{className:"alert alert-danger"},t.error):""===t.error&&t.successRedirect?e.createElement(n.Redirect,{to:t.successRedirect,push:!0}):""===t.error&&t.successMessage?e.createElement("div",null,t.successMessage):null}}).call(this,r(5))},80:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(177),o=(n=s)&&n.__esModule?n:{default:n};r(79),r(179);var l=r(60);t.default=function(t){return function(r){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r),a(n,[{key:"render",value:function(){return firebaseProj.auth().currentUser?e.createElement(e.Fragment,null,e.createElement(o.default,null),e.createElement(t,null)):e.createElement(l.Redirect,{to:"/"})}}]),n}(e.Component)}}).call(this,r(5))}}]);