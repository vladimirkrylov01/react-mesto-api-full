(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),i=n.n(s),o=(n(29),n(22)),r=n(2),l=n(3),u=n(8),d=n(0);var p=function(e){return Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("a",{className:"logo",href:"#",target:"_self"}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/signin",children:Object(d.jsx)(u.b,{to:"/signup",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(l.b,{exact:!0,path:"/signup",children:Object(d.jsx)(u.b,{to:"/signin",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__user-info",children:[Object(d.jsx)("p",{className:"header__email",children:e.email}),Object(d.jsx)(u.b,{to:"/signin",className:"header__link",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})})]})]})},h=c.a.createContext();var j=function(e){var t=c.a.useContext(h),n=e.card.owner===t._id,a="elements__button-trash ".concat(n?"elements__button-trash":"elements__button-trash_hidden"),s=e.card.likes.some((function(e){return e===t._id})),i="elements__button ".concat(s?"elements__button_active":"");return Object(d.jsxs)("li",{className:"elements__list-item",children:[Object(d.jsx)("img",{className:"elements__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(d.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(d.jsxs)("div",{className:"elements__block",children:[Object(d.jsx)("h2",{className:"elements__title",children:e.card.name}),Object(d.jsxs)("div",{className:"elements__like-group",children:[Object(d.jsx)("button",{className:i,type:"submit",onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("div",{className:"elements__like-count",children:e.card.likes.length})]})]})]})};var m=function(){return Object(d.jsx)("div",{className:"loader",children:"Loading..."})};var b=function(e){var t=c.a.useContext(h);return Object(d.jsxs)("div",{className:"page__container",children:[e.isLoading&&Object(d.jsx)(m,{}),Object(d.jsxs)("section",{className:"profile page__profile ".concat(e.isLoading&&"page__profile_hidden"),children:[Object(d.jsxs)("div",{className:"profile__container",children:[Object(d.jsxs)("div",{className:"profile__avatar-block",children:[Object(d.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(d.jsx)("button",{className:"profile__avatar-button",onClick:e.onEditAvatar})]}),Object(d.jsxs)("div",{className:"profile__info-block",children:[Object(d.jsxs)("div",{className:"profile__edit-block",children:[Object(d.jsx)("h1",{className:"profile__title",children:t.name}),Object(d.jsx)("button",{type:"button",id:"show-popup",className:"profile__edit-button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",onClick:e.onEditProfile})]}),Object(d.jsx)("p",{className:"profile__subtitle",children:t.about})]})]}),Object(d.jsx)("button",{className:"profile__button",type:"submit",id:"show-card-popup",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"elements page__elements",children:Object(d.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(d.jsx)(j,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var f=function(){return Object(d.jsx)("footer",{className:"footer page__footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})},_=n.p+"static/media/CloseIcon.ba3d267d.svg";var O=function(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__content",children:[Object(d.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose,children:Object(d.jsx)("img",{src:_,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430"})}),Object(d.jsxs)("form",{className:"popup__field-form popup__field-form-".concat(e.name),onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"popup__heading",children:e.title}),e.children,Object(d.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonText})]})]})})};var x=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return c.a.useEffect((function(){s(""),u("")}),[e.isOpen]),Object(d.jsxs)(O,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:a,link:l})},isDataLoading:e.isDataLoading,children:[Object(d.jsx)("input",{className:"popup__field-input popup__field-input-description",name:"name",type:"text",autoComplete:"off",id:"field-input-description",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,value:a||"",onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error",id:"field-input-description-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(d.jsx)("input",{className:"popup__field-input popup__field-input-link",type:"url",name:"link",autoComplete:"off",id:"field-input-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:l||"",onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error",id:"field-input-link-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443."})]})};var g=function(e){var t=c.a.useContext(h),n=c.a.useState(""),a=Object(r.a)(n,2),s=a[0],i=a[1],o=c.a.useState(""),l=Object(r.a)(o,2),u=l[0],p=l[1];return c.a.useEffect((function(){i(t.name),p(t.about)}),[t,e.isOpen]),Object(d.jsxs)(O,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},children:[Object(d.jsx)("input",{className:"popup__field-input popup__field-input-name",id:"field-input-name",name:"name",value:s||"",type:"text",placeholder:"\u0418\u043c\u044f",autoComplete:"off",minLength:"2",maxLength:"40",required:!0,onChange:function(e){i(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error",id:"field-input-name-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(d.jsx)("input",{className:"popup__field-input popup__field-input-about",type:"text",id:"field-input-about",name:"about",value:u||"",placeholder:"\u041e \u0441\u0435\u0431\u0435",autoComplete:"off",minLength:"2",maxLength:"200",required:!0,onChange:function(e){p(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error",id:"field-input-about-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})};var v=function(e){var t=c.a.useRef("");return Object(d.jsxs)(O,{name:"update",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),e.onClose(),t.current.value=""},children:[Object(d.jsx)("input",{ref:t,className:"popup__field-input popup__field-input-link",type:"url",name:"avatar",autoComplete:"off",id:"field-input-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"field-input-avatar-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443."})]})};var C=function(e){return Object(d.jsx)("div",{className:"popup popup_type_image ".concat(e.card.link?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__content popup__content_content_image",children:[Object(d.jsx)("button",{type:"button",className:"popup__close",children:Object(d.jsx)("img",{src:_,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430",onClick:e.onClose})}),Object(d.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(d.jsx)("p",{className:"popup__caption",children:e.card.name})]})})};var k=function(e){return Object(d.jsx)(O,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",buttonText:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCardConfirm(e.cardId)}})},N=n(20),y=n(21),S=new(function(){function e(t){Object(N.a)(this,e),this._address=t.address,this._headers=t.headers}return Object(y.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{"Content-Type":"application/json"},credentials:"include"}).then(this._checkResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers,credentials:"include"}).then(this._checkResponse)}},{key:"setUserData",value:function(e){var t=e.name,n=e.about,a=e.avatar;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({name:t,about:n,avatar:a})}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers,credentials:"include"}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers,credentials:"include"}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers,credentials:"include"}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.deleteLike(e)}}]),e}())({address:"https://api.krylov.students.nomoredomains.work",headers:{"Content-Type":"application/json"}}),L=n(23),E=n(24),T=["component"];function D(e){var t=e.component,n=Object(E.a)(e,T);return Object(d.jsx)(l.b,{children:function(){return n.isLoggedIn?Object(d.jsx)(t,Object(L.a)({},n)):Object(d.jsx)(l.a,{to:"/signin"})}})}var w=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(r.a)(i,2),l=o[0],p=o[1];return Object(d.jsxs)("section",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onRegister(a,l)},children:[Object(d.jsx)("input",{className:"auth__form-input",placeholder:"Email",name:"email",type:"email",required:!0,value:a||"",onChange:function(e){s(e.target.value)},autoComplete:"off"}),Object(d.jsx)("input",{className:"auth__form-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",required:!0,value:l||"",onChange:function(e){p(e.target.value)},autoComplete:"off"}),Object(d.jsx)("button",{className:"auth__form-submit-btn auth__form-submit-btn_size",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("div",{className:"auth__signup",children:[Object(d.jsx)("p",{className:"auth__signup_text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(d.jsx)(u.b,{to:"signin",className:"auth__signup_link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})};var P=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onLogin(a,l)},children:[Object(d.jsx)("input",{onChange:function(e){s(e.target.value)},className:"auth__form-input",placeholder:"Email",name:"email",type:"email",required:!0,value:a||"",autoComplete:"off"}),Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},className:"auth__form-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",required:!0,value:l||"",autoComplete:"off"}),Object(d.jsx)("button",{className:"auth__form-submit-btn",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},R="https://api.krylov.students.nomoredomains.work";function A(e){return e.ok?e.json():Promise.reject("".concat(e.status))}var I=n.p+"static/media/SuccessIcon.a9eb6caf.svg",U=n.p+"static/media/FailIcon.d4ce2a26.svg";var q=function(e){return Object(d.jsx)("div",{className:"popup popup_type_tooltip ".concat(e.isOpen?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__content",children:[e.isSuccess?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"".concat(I),alt:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e.",className:"popup__tooltip_image"}),Object(d.jsx)("p",{className:"popup__tooltip_message",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"".concat(U),alt:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0435 \u0431\u044b\u043b\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430.",className:"popup__tooltip_image"}),Object(d.jsx)("p",{className:"popup__tooltip_message",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437!"})]}),Object(d.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose,children:Object(d.jsx)("img",{src:_,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430"})})]})})};var F=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(r.a)(s,2),u=i[0],j=i[1],m=c.a.useState(!1),_=Object(r.a)(m,2),O=_[0],N=_[1],y=c.a.useState({name:"",link:""}),L=Object(r.a)(y,2),E=L[0],T=L[1],I=c.a.useState(!1),U=Object(r.a)(I,2),F=U[0],J=U[1],B=c.a.useState(null),G=Object(r.a)(B,2),H=G[0],M=G[1],z=c.a.useState({}),K=Object(r.a)(z,2),Q=K[0],V=K[1],W=c.a.useState([]),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(""),ce=Object(r.a)(ae,2),se=ce[0],ie=ce[1],oe=Object(l.g)(),re=c.a.useState(!1),le=Object(r.a)(re,2),ue=le[0],de=le[1],pe=c.a.useState(!1),he=Object(r.a)(pe,2),je=he[0],me=he[1];c.a.useEffect((function(){te&&Promise.all([S.getUserData(),S.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];V(n),Z(a)})).catch((function(e){return console.log(e)}))}),[te]),c.a.useEffect((function(){function e(e){"Escape"===e.key&&fe()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[te]),c.a.useEffect((function(){function e(e){e.target.classList.contains("popup_is-opened")&&fe()}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);var be=c.a.useCallback((function(){fetch("".concat(R,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(A).then((function(e){ne(!0),ie(e.data.email),oe.push("/")})).catch((function(e){401===e.status&&console.log("401 \u2014 \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435")}))}),[oe]);function fe(){N(!1),a(!1),j(!1),T({name:"",link:""}),J(!1),de(!1)}return c.a.useEffect((function(){te&&oe.push("/")}),[te,oe]),c.a.useEffect((function(){be()}),[be]),Object(d.jsx)(h.Provider,{value:Q,children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(p,{email:se,onSignOut:function(){fetch("".concat(R,"/signout"),{method:"DELETE",credentials:"include"}).then((function(e){return A(e)})).then((function(){ne(!1),ie(""),oe.push("/signin")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. ".concat(e))}))}}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(D,{exact:!0,path:"/",isLoggedIn:te,component:b,cards:Y,onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){j(!0)},onCardClick:function(e){T(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e===Q._id}));S.changeLikeCardStatus(e._id,!t).then((function(t){Z((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){J(!0),M(e)}}),Object(d.jsx)(l.b,{path:"/signin",children:Object(d.jsx)(P,{onLogin:function(e,t){(function(e,t){return fetch("".concat(R,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then(A)})(e,t).then((function(t){be(),ne(!0),ie(e),oe.push("/")})).catch((function(e){400===e.status?console.log("400 - \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status&&console.log("401 - \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),me(!1),de(!0)}))}})}),Object(d.jsx)(l.b,{path:"/signup",children:Object(d.jsx)(w,{onRegister:function(e,t){(function(e,t){return fetch("".concat(R,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(A)})(e,t).then((function(){de(!0),me(!0),oe.push("/signin")})).catch((function(e){400===e.status&&console.log("400 - \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),me(!1),de(!0)}))}})}),Object(d.jsx)(l.b,{children:te?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)(l.a,{to:"/signin"})})]}),te&&Object(d.jsx)(f,{}),Object(d.jsx)(x,{isOpen:u,onClose:fe,onAddCard:function(e){S.createCard(e).then((function(e){Z([e].concat(Object(o.a)(Y))),fe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(v,{isOpen:O,onClose:fe,onUpdateAvatar:function(e){S.updateAvatar(e).then((function(e){V(e),fe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(g,{isOpen:n,onClose:fe,onUpdateUser:function(e){S.setUserData(e).then((function(e){V(e),fe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(k,{isOpen:F,onclose:fe,onDeleteCardConfirm:function(e){S.deleteCard(e._id).then((function(){Z((function(t){return t.filter((function(t){return t!==e}))})),fe()})).catch((function(e){return console.log(e)}))},cardId:H}),Object(d.jsx)(C,{card:null!==E&&E,onClose:fe})]}),Object(d.jsx)(q,{isOpen:ue,onClose:fe,isSuccess:je})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(F,{})})}),document.getElementById("root")),J()}},[[36,1,2]]]);
//# sourceMappingURL=main.2f407ba3.chunk.js.map