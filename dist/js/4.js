(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{119:function(e,t){e.exports="/assets/images/danger.png"},120:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),o=r(78),l=(a=o)&&a.__esModule?a:{default:a},i=r(46);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(121),r(81);var c=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onFormChange=t.onFormChange.bind(t),t.updateUser=t.updateUser.bind(t),t.state={fieldsValue:{},fieldsError:{},updateError:null},t}var a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),s(r,[{key:"render",value:function(){return e.createElement("form",{onSubmit:this.updateUser},e.createElement(l.default,{error:this.state.updateError,successMessage:"Профиль обновлен"}),e.createElement("input",{type:"text",name:"userName",onInput:this.onFormChange,value:this.state.fieldsValue.userName,className:"form-control",placeholder:"Введите новое имя"}),e.createElement("label",{className:"text-danger text-small d-block mb-3"},this.state.fieldsError.userName),e.createElement("div",{className:"custom-file mb-3"},e.createElement("input",{type:"file",accept:"image",name:"userPhoto",onChange:this.onFormChange,className:"custom-file-input",placeholder:"Выберите фото"}),this.state.fieldsError.userPhoto?e.createElement("label",{className:"text-danger text-small custom-file-label"},this.state.fieldsError.userPhoto):e.createElement("label",{className:"custom-file-label"},"Выберите фото")),e.createElement("input",{type:"password",name:"userPassword",onInput:this.onFormChange,value:this.state.fieldsValue.userPassword,className:"form-control",placeholder:"Введите новый пароль"}),e.createElement("label",{className:"text-danger text-small d-block mb-3"},this.state.fieldsError.userPassword),e.createElement("input",{type:"password",name:"confirmPassword",onInput:this.onFormChange,value:this.state.fieldsValue.confirmPassword,className:"form-control",placeholder:"Подтвердите пароль"}),e.createElement("label",{className:"text-danger text-small d-block mb-3"},this.state.fieldsError.confirmPassword),e.createElement("button",{type:"submit",name:"updating",className:"btn btn-primary"},"Обновить"))}},{key:"onFormChange",value:function(e){var t=e.target,r=t.files?t.files[0]:t.value;this.setState((function(e){return{fieldsValue:n({},e.fieldsValue,u({},t.name,r))}}))}},{key:"updateUser",value:(a=regeneratorRuntime.mark((function e(t){var r,a,n,s,o,l=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=this.testForm(),!Object.keys(r).length){e.next=6;break}return this.setState({fieldsError:r}),(0,i.showDangerMessage)("Ошибки заполнения формы"),e.abrupt("return");case 6:if(a=firebaseProj.auth().currentUser,n="",s=this.state.fieldsValue.userName?this.state.fieldsValue.userName:a.displayName,!this.state.fieldsValue.userPhoto){e.next=14;break}return o=firebaseProj.storage().ref("/"+a.uid+this.state.fieldsValue.userPhoto.name.slice(this.state.fieldsValue.userPhoto.name.lastIndexOf("."))),e.next=11,o.put(this.state.fieldsValue.userPhoto);case 11:return e.next=13,o.getDownloadURL();case 13:n=e.sent;case 14:firebaseProj.auth().currentUser.updateProfile({displayName:s,photoURL:n}).then((function(){return l.state.fieldsValue.userPassword?firebaseProj.auth().currentUser.updatePassword(l.state.fieldsValue.userPassword):Promise.resolve()})).then((function(){l.props.onProfileChange(),(0,i.showSuccessMessage)("Профиль обновлен"),l.setState({fieldsError:{},updateError:""})})).catch((function(e){(0,i.showDangerMessage)("Ошибка обновления"),l.setState({updateError:e.message})}));case 15:case"end":return e.stop()}}),e,this)})),o=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,s){try{var o=e[n](s),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(l)}("next")}))},function(e){return o.apply(this,arguments)})},{key:"testForm",value:function(){var e={};return this.state.fieldsValue.userName&&this.state.fieldsValue.userName<3&&(e.userName="Минимальная длина имени 3 символа"),this.state.fieldsValue.userPassword&&this.state.fieldsValue.userPassword.length<8&&(e.userPassword="Минимальная длина пароля 8 символов"),this.state.fieldsValue.confirmPassword!==this.state.fieldsValue.userPassword&&(e.confirmPassword="Пароли не совпадают"),this.state.fieldsValue.userPhoto?(this.state.fieldsValue.userPhoto.type.includes("image")||(e.userPhoto="Файл должен быть фотографией"),this.state.fieldsValue.userPhoto.size>5242880&&(e.userPhoto="Превышен максимальный размер фото(5Мб)"),e):e}}]),r}(e.Component);t.default=c}).call(this,r(5))},176:function(e,t){e.exports="/assets/images/success.png"},177:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(60);t.default=function(){return e.createElement("div",{className:"d-flex justify-content-between mb-3 p-2 align-items-center"},e.createElement("div",{className:"logo"},e.createElement("img",{src:r(178),alt:"Logo",className:"ml-3 logo-image"})),e.createElement("div",{className:"menu"},e.createElement(a.NavLink,{activeClassName:"active",className:"mr-3",to:"/profile"},"Профиль"),e.createElement(a.NavLink,{activeClassName:"active",className:"mr-3",to:"/history"},"История"),e.createElement(a.NavLink,{activeClassName:"active",to:"/dashboard",className:"mr-3"},"Доска объявлений"),e.createElement(a.NavLink,{to:"/",onClick:function(){firebaseProj.auth().signOut()},className:"mr-3"},"Выйти")))}}).call(this,r(5))},178:function(e,t){e.exports="/assets/images/logo.jpg"},391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(82),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),l=r(46);function i(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function a(n,s){try{var o=t[n](s),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then((function(e){a("next",e)}),(function(e){a("throw",e)}));e(l)}("next")}))}}var u=[r(392),r(393),r(394),r(395)],c=[{lat:46.6716677,lng:32.6389526},{lat:46.66058779999999,lng:32.6554837},{lat:46.6625253,lng:32.6390332},{lat:46.654205,lng:32.5625972},{lat:46.6518956,lng:32.6144419},{lat:46.619408,lng:32.5900442},{lat:46.6264618,lng:32.6073008},{lat:46.662465,lng:32.6058125},{lat:46.6342376,lng:32.5742038},{lat:46.6569232,lng:32.5794143},{lat:46.6177539,lng:32.5787427}];r(81);var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=null,this.googleMaps=t,this.geodecoder=new t.Geocoder,this.database=firebaseProj.database(),this.dbInfo=this.database.ref("/"),this.selectedAuto=null,this.orders=[],this.auto=[],this.icons={car:{free:r(396),wait:r(397),busy:r(398)},order:{free:r(399),inWait:r(400),withOrder:r(401)}},this.areas=[]}var t,d;return n(e,[{key:"animateChange",value:function(e,t){var r=this;if(e.withOrder){if(t.status===o.ORDER_WAIT)e.status=o.AUTO_WAIT,e.path.loaded=!1,e.marker.setIcon(this.icons.car.wait),t.status=o.ORDER_AUTO,t.marker.setMap(null),this.updateAutoData(e.autoID,{status:o.AUTO_WAIT}).then((function(){return r.updateOrderData(t.orderID,{status:o.ORDER_AUTO})}));else if(t.status===o.ORDER_MOVE)return e.withOrder=!1,t.status=o.ORDER_PAY,e.status=o.AUTO_PAY,t.marker.setMap(null),e.marker.setIcon(this.icons.car.wait),this.updateAutoData(e.autoID,{status:o.AUTO_PAY}).then((function(){return r.updateOrderData(t.orderID,{status:o.ORDER_PAY})})),!0}else{for(var a=c[Math.round(Math.random()*c.length)];a==e.path.coords;)a=c[Math.round(Math.random()*c.length)];e.path.dest=a}}},{key:"findNewPoint",value:function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01,a={lat:e.lat,lng:e.lng};r>0&&t.length;){var n=t[0].end_point,s=Math.sqrt(Math.pow(e.lat-n.lat(),2)+Math.pow(e.lng-n.lng(),2));if(s>r){a=n;for(var o=0;o<t[0].path.length;o++){var l=t[0].path[o],i=Math.sqrt(Math.pow(e.lat-l.lat(),2)+Math.pow(e.lng-l.lng(),2));if(i>r){a={lat:t[0].path[o].lat(),lng:t[0].path[o].lng()};break}}r=0}else a={lat:n.lat(),lng:n.lng()},r-=s,t.shift()}return a}},{key:"animateMove",value:function(){var e=this;this.auto.forEach((function(t){var r=e.orders.find((function(e){return e.orderID===t.orderID}));if(!t.path||!t.path.steps||t.path.steps.length&&t.path.steps[0].distance.value||!t.path.loaded||!e.animateChange(t,r)){var a=t.coords;t.path&&t.path.steps&&(a=e.findNewPoint(t.coords,t.path.steps)),t.withOrder&&r.status===o.ORDER_MOVE&&(t.distance+=e.googleMaps.geometry.spherical.computeDistanceBetween(new e.googleMaps.LatLng(t.coords.lat,t.coords.lng),new e.googleMaps.LatLng(a.lat,a.lng))/1e3),t.marker.setPosition(a),t.coords=a,e.updateAutoData(t.autoID,{coords:t.coords,distance:t.distance}),[o.AUTO_PAY,o.AUTO_WAIT].includes(t.status)||(t.path.directionServ.route({origin:t.coords,destination:t.path.dest,travelMode:"DRIVING"},(function(e,r){"OK"===r&&(t.path.steps=e.routes[0].legs[0].steps,t.path.directionRenderer.setDirections(e),t.path.directionRenderer.setOptions({suppressPolylines:!t.withOrder}),t.path.steps[0].distance.value&&(t.path.loaded=!0))})),t.messageWindow.setContent(e.createContentForAuto(t)))}}))}},{key:"createMap",value:function(e){var t=this;this.map=new this.googleMaps.Map(e,{center:{lat:46.65,lng:32.58},zoom:12,mapTypeControl:!1}),this.areas=u.map((function(e){var r=new t.googleMaps.Polygon(a({paths:e.paths},e.style));return r.setMap(t.map),r})),this.makeAreaControl(),setInterval(this.animateMove.bind(this),5e3)}},{key:"createOrder",value:(d=i(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.ORDER_FINISHED!==t.status){e.next=2;break}return e.abrupt("return");case 2:return r=this.icons.order.free,a=t.start,[o.ORDER_WAIT,o.ORDER_AUTO].includes(t.status)?r=this.icons.order.inWait:t.status!==o.ORDER_FREE&&(r=this.icons.order.withOrder,a=t.destination),e.next=6,this.geocode({address:a});case 6:n=e.sent,t.coords=n[0].geometry.location,t.marker=this.createMarker(t.coords,r),[o.ORDER_PAY,o.ORDER_AUTO].includes(t.status)&&t.marker.setMap(null),t.messageWindow=this.createWindow(this.createContentForOrder(t)),t.marker.addListener("click",this.orderMarkerListener.bind(this,t)),this.orders.push(t);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"createAuto",value:function(e){var t=this.icons.car.free;if([o.AUTO_WAIT,o.AUTO_PAY].includes(e.status)?t=this.icons.car.wait:e.status!==o.AUTO_FREE&&(t=this.icons.car.busy),e.marker=this.createMarker(e.coords,t),e.messageWindow=this.createWindow(this.createContentForAuto(e)),e.marker.addListener("click",this.autoMarkerClick.bind(this,e)),e.orderID){if(e.orderID&&o.AUTO_PAY!==e.status){var r=this.orders.find((function(t){return t.orderID===e.orderID}));e.withOrder=!0,this.createPath(e,r.coords)}}else{var a=c[Math.round(Math.random()*c.length)];this.createPath(e,a)}this.auto.push(e)}},{key:"createWindow",value:function(e){return new this.googleMaps.InfoWindow({content:e})}},{key:"createPath",value:function(e,t){var r=this,a={dest:t};a.directionServ=new this.googleMaps.DirectionsService,a.directionRenderer=new this.googleMaps.DirectionsRenderer({map:this.map,suppressMarkers:!0,preserveViewport:!0}),a.directionRenderer.setOptions({suppressPolylines:!e.withOrder}),a.directionServ.route({origin:e.coords,destination:t,travelMode:"DRIVING"},(function(n,s){if("OK"===s){if(e.path.steps=n.routes[0].legs[0].steps,e.path.loaded=!0,a.directionRenderer.setDirections(n),e.tax)return;var o=r.selectTax(t);e.tax=o,r.updateAutoData(e.autoID,{tax:o})}})),e.path=a}},{key:"createMarker",value:function(e,t){return new this.googleMaps.Marker({map:this.map,position:e,icon:t})}},{key:"createContentForAuto",value:function(t){var r="";if(window.onAutoButClick=this.autoButClick.bind(this),this.selectedAuto==t)return"<div>Выберите заказ</div>";if(t.orderID&&""!==t.orderID){var a=(t.distance*t.tax).toFixed(2);r="<div>Номер заказа: "+t.orderID+"</div>",t.status!==o.AUTO_MOVE&&t.status!==o.AUTO_PAY||(r+="<div>Проехано на: "+a+" грн.</div>"),t.status===o.AUTO_WAIT&&(r+=e.makeBut(o.EVENT_WAIT,t.nomer,"Пассажир прибыл")),t.status===o.AUTO_PAY&&(r+=e.makeBut(o.EVENT_PAY,t.nomer,"Оплачено"))}else r=e.makeBut(o.EVENT_TRAVEL,t.nomer,"В путь");return'\n        <div class = "justify-content-center">\n            <div>Номер машины: '+t.nomer+"</div>\n            <div>Статус: "+t.status+"</div>\n            "+r+"\n        </div>"}},{key:"createContentForOrder",value:function(e){var t=Math.ceil((new Date-e.orderCreate)/6e4),r="";return r+='\n        <div class = "justify-content-center">\n            <div>Номер заказа: '+e.orderID+"</div>\n            <div>Телефон: "+e.phone+"</div>\n            <div>Пункт назначения: "+e.destination+"</div>",e.status===o.ORDER_FREE&&(r+="<div>Время ожидания: "+t+" минут</div>"),r+="<div>Статус: "+e.status+"</div></div>"}},{key:"eventTravelHandler",value:function(){this.selectedAuto&&this.selectedAuto.nomer===event.target.dataset.nomer?this.selectedAuto=null:(this.selectedAuto=this.auto.find((function(e){return e.nomer===event.target.dataset.nomer})),this.selectedAuto.messageWindow.setContent("<div>Выберите заказ</div>"))}},{key:"eventPayHandler",value:function(e,t){var r=this;this.updateAutoData(e.autoID,{status:o.AUTO_FREE,orderID:"",distance:0,tax:""}).then((function(){return r.updateOrderData(t.orderID,{status:o.ORDER_FINISHED,price:(e.distance*e.tax).toFixed(2),orderFinished:+new Date})})).then((function(){e.orderID="",e.tax=null,e.distance=0,e.withOrder=!1,e.status=o.AUTO_FREE,e.marker.setIcon(r.icons.car.free),e.messageWindow.close()}))}},{key:"eventWaitHandler",value:function(e,t){var r=this;e.status=o.AUTO_MOVE,e.marker.setIcon(this.icons.car.busy),t.status=o.ORDER_MOVE,this.geocode({address:t.destination}).then((function(a){r.updateAutoData(e.autoID,{status:o.AUTO_MOVE}).then((function(){return r.updateOrderData(t.orderID,{status:o.ORDER_MOVE})})).then((function(){t.marker.setPosition(a[0].geometry.location),t.marker.setMap(r.map),t.marker.setIcon(r.icons.order.withOrder),e.path.dest=a[0].geometry.location,e.path.loaded=!1}))}))}},{key:"loadData",value:(t=i(regeneratorRuntime.mark((function e(t){var r,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(t.orders);case 1:if((e.t1=e.t0()).done){e.next=7;break}return r=e.t1.value,e.next=5,this.createOrder(a({orderID:r},t.orders[r]));case 5:e.next=1;break;case 7:t.auto.forEach((function(e,t){e&&n.createAuto(a({autoID:t},e))}));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"orderMarkerListener",value:function(e){var t=this;if(this.selectedAuto)if(e.status!==o.ORDER_FREE)alert("Невозможно выбрать заказ который уже принят!");else{this.selectedAuto.marker.setIcon(this.icons.car.busy),e.marker.setIcon(this.icons.order.inWait),e.status=o.ORDER_WAIT,e.messageWindow.setContent(this.createContentForOrder(e));var r=this.auto.findIndex((function(e){return e==t.selectedAuto})),a={coords:this.auto[r].coords,status:o.AUTO_ORDER,autoID:this.auto[r].autoID,orderID:e.orderID,nomer:this.auto[r].nomer,name:this.auto[r].name,distance:0};this.auto[r].marker.setMap(null),this.auto.splice(r,1),this.createAuto(a),this.updateOrderData(e.orderID,{autoID:a.autoID,status:o.ORDER_WAIT,orderAccept:+new Date}).then((function(){return t.updateAutoData(t.selectedAuto.autoID,{orderID:e.orderID,status:o.AUTO_ORDER})})).then((function(){t.createPath(t.selectedAuto),t.selectedAuto=null}))}else e.messageWindow.setContent(this.createContentForOrder(e)),e.messageWindow.open(this.map,e.marker)}},{key:"autoMarkerClick",value:function(e){if(this.selectedAuto===e)this.selectedAuto=null;else if(this.selectedAuto)return void alert("Выберите заказ или отмените выбор заказа");e.messageWindow.setContent(this.createContentForAuto(e)),e.messageWindow.open(this.map,e.marker)}},{key:"autoButClick",value:function(e){var t=e.target.dataset.type,r=this.auto.find((function(t){return t.nomer==e.target.dataset.nomer})),a=this.orders.find((function(e){return e.orderID==r.orderID}));t===o.EVENT_TRAVEL?this.eventTravelHandler():t===o.EVENT_WAIT?this.eventWaitHandler(r,a):t===o.EVENT_PAY&&this.eventPayHandler(r,a)}},{key:"geocode",value:function(e){var t=this;return new Promise((function(r,a){try{t.geodecoder.geocode(e,(function(e,t){"OK"!==t?a(e):r(e)}))}catch(e){a(e)}})).catch((function(e){return(0,l.showDangerMessage)(e.message)}))}},{key:"updateAutoData",value:function(e,t){return this.dbInfo.child("auto/"+e).update(t).catch((function(e){return(0,l.showDangerMessage)(e.message)}))}},{key:"updateOrderData",value:function(e,t){return this.dbInfo.child("orders/"+e).update(t).catch((function(e){return(0,l.showDangerMessage)(e.message)}))}},{key:"selectTax",value:function(e){var t=this,r=this.areas.find((function(r){return t.googleMaps.geometry.poly.containsLocation(e,r)}));return r?this.auto.reduce((function(e,a){return t.googleMaps.geometry.poly.containsLocation(new t.googleMaps.LatLng(a.coords),r)?e+1:e}),0)<3?s.COST_BUSY_PER_KM:s.COST_PER_KM:s.COST_OFFCITY_PER_KM}},{key:"makeAreaControl",value:function(){var e=this,t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("input"),n=document.createElement("label");return t.append(r),r.append(a,n),t.className="p-3 bg-white",r.className="custom-control custom-checkbox",a.className="custom-control-input",a.style.zIndex=999,a.type="checkbox",a.name="showAreas",a.onchange=function(){e.areas.forEach((function(t){t.setMap(t.map?null:e.map)}))},n.className="custom-control-label",n.setAttribute("for","showAreas"),n.textContent="Скрыть районы",this.map.controls[this.googleMaps.ControlPosition.TOP_RIGHT].push(t),t}}],[{key:"makeBut",value:function(e,t,r){return"<div \n                    onclick = \"onAutoButClick(event)\"\n                    class = 'btn btn-link'\n                    data-type = "+e+" \n                    data-nomer = "+t+">\n                        "+r+"\n                    </div>"}}]),e}();t.default=d},392:function(e){e.exports=JSON.parse('{"style":{"strokeColor":"#0000FF","strokeOpacity":0.8,"strokeWeight":2,"fillColor":"#0000FF","fillOpacity":0.2},"paths":[{"lat":46.62,"lng":32.615},{"lat":46.615,"lng":32.613},{"lat":46.61,"lng":32.606},{"lat":46.611,"lng":32.603},{"lat":46.604,"lng":32.597},{"lat":46.603,"lng":32.593},{"lat":46.601,"lng":32.592},{"lat":46.598,"lng":32.584},{"lat":46.599,"lng":32.57},{"lat":46.598,"lng":32.563},{"lat":46.593,"lng":32.549},{"lat":46.593,"lng":32.545},{"lat":46.599,"lng":32.541},{"lat":46.619365581504,"lng":32.55666374625817},{"lat":46.62596781555112,"lng":32.56713509025231},{"lat":46.62643937288847,"lng":32.57932304801598},{"lat":46.626321483939236,"lng":32.586189503094104},{"lat":46.62596781555112,"lng":32.59511589469567},{"lat":46.62431733252116,"lng":32.604900593181995},{"lat":46.62302048912441,"lng":32.612110371014026},{"lat":46.62160571544314,"lng":32.62206673087731}]}')},393:function(e){e.exports=JSON.parse('{"style":{"strokeColor":"#00FF00","strokeOpacity":0.8,"strokeWeight":2,"fillColor":"#00FF00","fillOpacity":0.2},"paths":[{"lat":46.686,"lng":32.561},{"lat":46.686,"lng":32.566},{"lat":46.692,"lng":32.568},{"lat":46.692,"lng":32.572},{"lat":46.69,"lng":32.574},{"lat":46.694,"lng":32.578},{"lat":46.694,"lng":32.591},{"lat":46.697,"lng":32.591},{"lat":46.7,"lng":32.594},{"lat":46.701,"lng":32.6},{"lat":46.707,"lng":32.601},{"lat":46.709,"lng":32.608},{"lat":46.709,"lng":32.61},{"lat":46.7,"lng":32.619},{"lat":46.705,"lng":32.631},{"lat":46.694,"lng":32.655},{"lat":46.68864300456689,"lng":32.66078713215195},{"lat":46.67254290671487,"lng":32.6401112299168},{"lat":46.66252996718983,"lng":32.62723662664531},{"lat":46.66005589640207,"lng":32.61865355779766},{"lat":46.659231180980775,"lng":32.61607863714336},{"lat":46.65881881855283,"lng":32.61487700750469}]}')},394:function(e){e.exports=JSON.parse('{"style":{"strokeColor":"#FF0000","strokeOpacity":0.8,"strokeWeight":2,"fillColor":"#FF0000","fillOpacity":0.2},"paths":[{"lat":46.686,"lng":32.561},{"lat":46.67362902313192,"lng":32.5548966288245},{"lat":46.66514776493996,"lng":32.55420998331669},{"lat":46.65030236077375,"lng":32.5548966288245},{"lat":46.63616009132673,"lng":32.560389792887},{"lat":46.62955910040463,"lng":32.55815819498661},{"lat":46.62448993590961,"lng":32.55884484049442},{"lat":46.6239079268685,"lng":32.55936109436536},{"lat":46.62437950214957,"lng":32.56103479279065},{"lat":46.625528949687606,"lng":32.5623222531178},{"lat":46.62608892810822,"lng":32.564339274297},{"lat":46.626737316937366,"lng":32.566141718755006},{"lat":46.62726781111186,"lng":32.56828748596692},{"lat":46.62747411299792,"lng":32.57030450714612},{"lat":46.62714325300521,"lng":32.57522300290908},{"lat":46.62702536558893,"lng":32.577797923563374},{"lat":46.627379027067626,"lng":32.58071616697158},{"lat":46.62705483746708,"lng":32.582261119364155},{"lat":46.62743797042277,"lng":32.583505664347065},{"lat":46.62720219661711,"lng":32.58517936277236},{"lat":46.62699589369475,"lng":32.588226352213276},{"lat":46.62681906199261,"lng":32.593247447489155},{"lat":46.62661275761005,"lng":32.59779396243404},{"lat":46.62577065204671,"lng":32.60256088463972},{"lat":46.6248600455151,"lng":32.607538790508556},{"lat":46.624506367578896,"lng":32.61037120322828},{"lat":46.623563215119155,"lng":32.612797882206124},{"lat":46.6251842482601,"lng":32.61786189282624},{"lat":46.626908541550314,"lng":32.621380324890055},{"lat":46.63504218852414,"lng":32.61700295977775},{"lat":46.64863743283586,"lng":32.609091283687924},{"lat":46.65607221120781,"lng":32.60525993116524},{"lat":46.65880204724848,"lng":32.61463022315341},{"lat":46.658868320014186,"lng":32.61470532500583},{"lat":46.65881881855283,"lng":32.61487700750469}]}')},395:function(e){e.exports=JSON.parse('{"style":{"strokeColor":"#FFFF00","strokeOpacity":0.8,"strokeWeight":2,"fillColor":"#FFFF00","fillOpacity":0.2},"paths":[{"lat":46.64863743283586,"lng":32.609091283687924},{"lat":46.65607221120781,"lng":32.60525993116524},{"lat":46.65881881855283,"lng":32.61487700750469},{"lat":46.66252996718983,"lng":32.62723662664531},{"lat":46.67254290671487,"lng":32.6401112299168},{"lat":46.68864300456689,"lng":32.66078713215195},{"lat":46.68133836098231,"lng":32.66643529969558},{"lat":46.6690042292498,"lng":32.6674716210217},{"lat":46.65991047311372,"lng":32.67250925078899},{"lat":46.655732561661445,"lng":32.658752405295424},{"lat":46.65452124219093,"lng":32.6560282361271},{"lat":46.65139871932914,"lng":32.65225168583413},{"lat":46.64705838390696,"lng":32.64773855762838},{"lat":46.64426835365248,"lng":32.64483425691426},{"lat":46.6441586437947,"lng":32.64422384157214},{"lat":46.64190877030884,"lng":32.64126859499513},{"lat":46.64013550110595,"lng":32.639815601940256},{"lat":46.63764080043684,"lng":32.636154552635425},{"lat":46.6340873379837,"lng":32.6325184513261},{"lat":46.630435813604784,"lng":32.6272134416386},{"lat":46.62886008282364,"lng":32.6247575153268},{"lat":46.628144596153746,"lng":32.62298222318123},{"lat":46.62695099628392,"lng":32.621587910680255},{"lat":46.626908541550314,"lng":32.621380324890055}]}')},396:function(e,t){e.exports="/assets/images/carFree.png"},397:function(e,t){e.exports="/assets/images/carWait.png"},398:function(e,t){e.exports="/assets/images/carBusy.png"},399:function(e,t){e.exports="/assets/images/peopleFree.png"},400:function(e,t){e.exports="/assets/images/peopleBusy.png"},401:function(e,t){e.exports="/assets/images/target.png"},402:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(46);var o=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onFormChange=t.onFormChange.bind(t),t.addOrder=t.addOrder.bind(t),t.state={fieldsValue:{orderStart:"",orderDestination:"",orderPhone:""},fieldsError:{},savingError:null},t}var o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),n(r,[{key:"render",value:function(){return firebaseProj.auth().currentUser.emailVerified?e.createElement("form",{onSubmit:this.addOrder,className:"align-items-center d-flex flex-column"},this.state.savingError?e.createElement("div",{className:"alert alert-danger"},this.state.savingError):null,e.createElement("h4",{className:"text-center"},"Добавить заказ"),e.createElement("input",{type:"text",name:"orderStart",onChange:this.onFormChange,value:this.state.fieldsValue.orderStart||"",className:"form-control",placeholder:"Введите начальный адресс"}),e.createElement("label",{className:"text-danger text-small"},this.state.fieldsError.orderStart),e.createElement("input",{type:"text",name:"orderDestination",onChange:this.onFormChange,value:this.state.fieldsValue.orderDestination||"",className:"form-control",placeholder:"Введите конечный адресс"}),e.createElement("label",{className:"text-danger text-small"},this.state.fieldsError.orderDestination),e.createElement("input",{type:"text",name:"orderPhone",onChange:this.onFormChange,value:this.state.fieldsValue.orderPhone||"",className:"form-control",placeholder:"Введите номер телефона"}),e.createElement("label",{className:"text-danger text-small"},this.state.fieldsError.orderPhone),e.createElement("button",{type:"submit",name:"create",className:"btn btn-primary mt-3 w-50"},"Создать")):e.createElement("div",{className:"text-center text-danger"},"Только пользователи с верифицированным аккаунтом могут делать заказы.")}},{key:"onFormChange",value:function(e){var t=e.target;this.setState((function(e){return{fieldsValue:a({},e.fieldsValue,(r={},n=t.name,s=t.value,n in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s,r))};var r,n,s}))}},{key:"addOrder",value:(o=regeneratorRuntime.mark((function e(t){var r,n,o,l=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=this.testForm(),this.setState({fieldsError:r}),!Object.keys(r).length){e.next=6;break}return(0,s.showDangerMessage)("Ошибка заполнения формы заказа"),e.abrupt("return");case 6:return n={destination:this.state.fieldsValue.orderDestination,start:this.state.fieldsValue.orderStart,status:"Свободен",orderCreate:+new Date,phone:this.state.fieldsValue.orderPhone,user:firebaseProj.auth().currentUser.uid},e.next=9,firebaseProj.database().ref("/orders").push(n);case 9:(o=e.sent).set(n).then((function(){l.props.onCreate(a({orderID:o.key},n)),(0,s.showSuccessMessage)("Заказ добавлен"),l.setState({fieldsError:{},fieldsValue:{orderStart:"",orderDestination:"",orderPhone:""},savingError:null})}),(function(e){(0,s.showDangerMessage)("Ошибка сохранения формы"),l.setState({savingError:e.message})}));case 11:case"end":return e.stop()}}),e,this)})),l=function(){var e=o.apply(this,arguments);return new Promise((function(t,r){return function a(n,s){try{var o=e[n](s),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(l)}("next")}))},function(e){return l.apply(this,arguments)})},{key:"testForm",value:function(){var e={};return new RegExp("\\+\\d{10}").test(this.state.fieldsValue.orderPhone)||(e.orderPhone="Введите корректный телефон(like +380501122333)"),this.state.fieldsValue.orderStart||(e.userName="Введите начальный адресс"),this.state.fieldsValue.orderDestination||(e.userName="Введите конечный адресс"),e}}]),r}(e.Component);t.default=o}).call(this,r(5))},403:function(e,t,r){"use strict";var a="https://maps.googleapis.com/maps/api/js",n="__googleMapsApiOnLoadCallback",s=["channel","client","key","language","region","v"],o=null;e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o=o||new Promise((function(t,r){var o=setTimeout((function(){window[n]=function(){},r(new Error("Could not load the Google Maps API"))}),e.timeout||1e4);window[n]=function(){null!==o&&clearTimeout(o),t(window.google.maps),delete window[n]};var l=document.createElement("script"),i=["callback="+n];s.forEach((function(t){e[t]&&i.push(t+"="+e[t])})),e.libraries&&e.libraries.length&&i.push("libraries="+e.libraries.join(",")),l.src=(e.apiUrl||a)+"?"+i.join("&"),document.body.appendChild(l)}))}},409:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=l(r(391)),s=l(r(402)),o=l(r(80));l(r(120));function l(e){return e&&e.__esModule?e:{default:e}}r(121);var i=r(403),u=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.mapControll=null,t.mapElem=null,t.onOrderCreate=t.onOrderCreate.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),a(r,[{key:"componentDidMount",value:function(){var e=this;i({key:"AIzaSyDdJjjkx2zXC_pIjlW7MtTgU2HvYFrqIqY"}).then((function(t){e.mapControll=new n.default(t),e.mapControll.createMap(e.mapElem)})),firebaseProj.database().ref("/").once("value").then((function(t){e.mapControll.loadData(t.val())}))}},{key:"render",value:function(){var t=this;return e.createElement(e.Fragment,null,e.createElement("div",{id:"map",ref:function(e){return t.mapElem=e}},"."),e.createElement("div",null,e.createElement("div",{className:"p-3 addOrderPopupBut bg-primary","data-toggle":"modal","data-target":"#addOrder"},"+"),e.createElement("div",{className:"modal",role:"dialog",id:"addOrder"},e.createElement("div",{className:"modal-dialog",role:"document"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header d-flex justify-content-end"},e.createElement("span",{"data-dismiss":"modal",className:"cursor"},"×")),e.createElement("div",{className:"modal-body"},e.createElement(s.default,{onCreate:this.onOrderCreate})))))))}},{key:"onOrderCreate",value:function(e){this.mapControll.createOrder(e)}}]),r}(e.Component);t.default=(0,o.default)(u)}).call(this,r(5))},46:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=null,n=document.querySelector("#message-window");function s(){n.classList.remove("show"),n.classList.remove("hide"),n.classList.remove("alert-success"),n.classList.remove("alert-danger"),a&&clearTimeout(a),a=setTimeout((function(){n.classList.add("hide")}),5e3)}t.showSuccessMessage=function(e){s(),n.classList.add("show"),n.classList.add("alert-success"),n.querySelector(".img").src=r(176),n.querySelector(".text").textContent=e},t.showDangerMessage=function(e){s(),n.classList.add("show"),n.classList.add("alert-danger"),n.querySelector(".img").src=r(119),n.querySelector(".text").textContent=e}},78:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(60);t.default=function(t){return t.error?e.createElement("div",{className:"alert alert-danger"},t.error):""===t.error&&t.successRedirect?e.createElement(a.Redirect,{to:t.successRedirect,push:!0}):""===t.error&&t.successMessage?e.createElement("div",null,t.successMessage):null}}).call(this,r(5))},80:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a,n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(177),o=(a=s)&&a.__esModule?a:{default:a};r(79),r(179);var l=r(60);t.default=function(t){return function(r){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r),n(a,[{key:"render",value:function(){return firebaseProj.auth().currentUser?e.createElement(e.Fragment,null,e.createElement(o.default,null),e.createElement(t,null)):e.createElement(l.Redirect,{to:"/"})}}]),a}(e.Component)}}).call(this,r(5))},82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUTO_FREE="Свободен",t.AUTO_ORDER="В пути к заказу",t.AUTO_WAIT="В ожидании",t.AUTO_MOVE="Движется",t.AUTO_PAY="Оплачивается",t.ORDER_FREE="Свободен",t.ORDER_WAIT="В ожидании",t.ORDER_AUTO="В пути к машине",t.ORDER_MOVE="Движется",t.ORDER_PAY="Оплачивается",t.ORDER_FINISHED="Завершен",t.EVENT_TRAVEL="InMove",t.EVENT_PAY="Pay",t.EVENT_WAIT="Wait",t.COST_PER_KM=10,t.COST_BUSY_PER_KM=12.5,t.COST_OFFCITY_PER_KM=20}}]);