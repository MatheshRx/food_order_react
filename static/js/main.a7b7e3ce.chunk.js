(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){},function(e,t,n){e.exports={"bg-warm-flame":"Main_bg-warm-flame__12vEX","bg-night-fade":"Main_bg-night-fade__2zziO","bg-sunny-morning":"Main_bg-sunny-morning__1c8Bw","bg-tempting-azure":"Main_bg-tempting-azure__1EUh4","bg-amy-crisp":"Main_bg-amy-crisp__vzpRL","bg-heavy-rain":"Main_bg-heavy-rain__M2PYh","bg-mean-fruit":"Main_bg-mean-fruit__14dgv","bg-malibu-beach":"Main_bg-malibu-beach__2mNJy","bg-deep-blue":"Main_bg-deep-blue__3MHK_","bg-ripe-malin":"Main_bg-ripe-malin__3Z08f","bg-arielle-smile":"Main_bg-arielle-smile__3Seeo","bg-plum-plate":"Main_bg-plum-plate__2C4BP","bg-happy-fisher":"Main_bg-happy-fisher__3cGjD","bg-happy-itmeo":"Main_bg-happy-itmeo__1Wsim","bg-mixed-hopes":"Main_bg-mixed-hopes__OBw7M","bg-strong-bliss":"Main_bg-strong-bliss__1Wim5","bg-grow-early":"Main_bg-grow-early__JCxo9","bg-love-kiss":"Main_bg-love-kiss__2l1Gy","bg-premium-dark":"Main_bg-premium-dark__2m9a3","bg-happy-green":"Main_bg-happy-green__2XF1c","bg-vicious-stance":"Main_bg-vicious-stance__2PMxo","bg-midnight-bloom":"Main_bg-midnight-bloom__oHHgw","bg-night-sky":"Main_bg-night-sky__3HKMJ","bg-slick-carbon":"Main_bg-slick-carbon__du-i8","bg-royal":"Main_bg-royal__2G8lI","bg-asteroid":"Main_bg-asteroid__1MwRd"}},,,,,,function(e,t,n){e.exports={backDrop:"Modal_backDrop__3ICRV"}},function(e,t,n){e.exports={"img-div":"Header_img-div__1q6Wv",header:"Header_header__56os8"}},,function(e,t,n){e.exports={cartItem:"Cart_cartItem__1-p2i"}},function(e,t,n){e.exports={input:"Input_input__L51AU"}},function(e,t,n){e.exports={"summary-wrapper":"Meals_summary-wrapper__Vu_95"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(7),i=n.n(c),a=(n(20),n(5)),s=n(1),r=n.n(s),o=n(2),l=n(10),d=n.n(l),b=(n(3),n(0)),m=function(e){return Object(b.jsx)("div",{onClick:e.onClose,className:"".concat(d.a.backDrop," closeModal"),children:e.children})},u=function(e){return Object(b.jsx)(m,{onClose:e.onClose,children:Object(b.jsx)("div",{className:"card col-9 col-md-7 rounded-3 p-3 ".concat(d.a.modal),children:e.children})})},j=function(e){return Object(b.jsx)(s.Fragment,{children:i.a.createPortal(Object(b.jsx)(u,{onClose:e.onClose,children:e.children}),document.getElementById("modal-root"))})},h=n(13),x=n.n(h),p=r.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){}}),g=function(e){return Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsxs)("div",{className:"row justify-content-between",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("i",{children:e.name})," ",Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:e.price.toFixed(2)})})]}),Object(b.jsx)("div",{className:"col-4 d-flex align-items-center justify-content-center",children:Object(b.jsx)("span",{className:"badge rounded-pill bg-light",children:Object(b.jsxs)("b",{children:["x ",e.amount]})})}),Object(b.jsxs)("div",{className:"col-4 d-flex align-items-center justify-content-end",children:[Object(b.jsx)("button",{className:"btn btn-sm btn-outline-info me-2",onClick:e.onRemove,children:"-"}),Object(b.jsx)("button",{className:"btn btn-sm btn-outline-info",onClick:e.onAdd,children:"+"})]})]})})},O=function(e){var t=Object(s.useContext)(p),n=t.items.length>0,c=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},a=t.items.map((function(e){return Object(b.jsx)(g,{name:e.name,price:e.price,amount:e.amount,onRemove:i.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}));return Object(b.jsxs)(j,{onClose:e.onCloseCart,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h4",{children:"Your Cart"})}),Object(b.jsx)("ul",{className:"list-group pb-2 ".concat(x.a.cartItem),children:a}),Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsx)("h3",{children:"Total Amount"}),Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["\u20b9 ",Object(b.jsx)("i",{children:t.totalAmount.toFixed(2)})]})})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(b.jsx)("button",{className:"btn btn-sm btn-outline-danger closeCart me-2",onClick:e.onCloseCart,children:"Close"}),n&&Object(b.jsx)("button",{className:"btn btn-sm btn-outline-warning",children:"Order"})]})]})},f=n.p+"static/media/meals1.bdc7d046.jpg",_=n(11),v=n.n(_),y=n(4),C=n.n(y),M=function(){return Object(b.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cart-plus",className:"svg-inline--fa fa-cart-plus fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",height:"20px",width:"20px",children:Object(b.jsx)("path",{fill:"currentColor",d:"M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"})})},N=function(e){var t=Object(s.useContext)(p).items.reduce((function(e,t){return e+t.amount}),0);return Object(b.jsxs)("button",{className:"btn btn-secondary btn-sm",onClick:e.onShow,children:[Object(b.jsx)("span",{style:{fontSize:"20px"},children:Object(b.jsx)(M,{})}),Object(b.jsx)("span",{className:"mx-2",children:"Your Cart"}),Object(b.jsx)("span",{className:"badge rounded-pill bg-warning",children:t})]})},w=function(e){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("header",{className:"card px-1 px-md-5 py-3 ".concat(v.a.header),children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsx)("h2",{className:"d-flex align-items-center",children:"Meals-Corner"}),Object(b.jsx)(N,{onShow:e.onShowCart})]})}),Object(b.jsx)("div",{className:"text-center mx-2 py-2 ".concat(v.a["img-div"]," ").concat(C.a["bg-amy-crisp"]," rounded-3"),children:Object(b.jsx)("img",{src:f,alt:"Delecious Food Here!",height:"300px",width:"80%",className:"rounded-3"})})]})},A=r.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:e.className,children:[Object(b.jsx)("label",{children:e.label}),Object(b.jsx)("input",Object(o.a)({ref:t},e.input))]})})),k=n(14),I=n.n(k),H=function(e){var t=Object(s.useState)(!0),n=Object(a.a)(t,2),c=n[0],i=n[1],r=Object(s.useRef)();return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)("form",{className:"d-flex justify-content-center",onSubmit:function(t){t.preventDefault();var n=r.current.value,c=+n;c<1||c>5||0===n.trim().length?i(!1):(e.onAddToCart(c),r.current.value="1",i(!0))},children:[Object(b.jsx)(A,{ref:r,className:"".concat(I.a.input),input:{type:"number",defaultValue:1,max:5,min:1},label:"Add Item"}),Object(b.jsx)("button",{className:"btn btn-info px-1 btn-sm ms-2",children:"+ Add"})]}),!c&&Object(b.jsx)("small",{children:Object(b.jsx)("p",{className:"text-danger",children:"Enter valid amount (1-5)."})})]})},D=function(e){var t=Object(s.useContext)(p),n="".concat(e.price.toFixed(2));return Object(b.jsx)("li",{className:"list-group-item ".concat(C.a["bg-malibu-beach"]),children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-8 col-10",children:[Object(b.jsx)("div",{children:Object(b.jsx)("b",{children:e.name})}),Object(b.jsx)("div",{children:Object(b.jsx)("i",{children:e.description})})]}),Object(b.jsxs)("div",{className:"col-md-4 col-10 text-center",children:[Object(b.jsxs)("div",{children:["Cost: ",Object(b.jsxs)("b",{children:["\u20b9",n]})]}),Object(b.jsx)(H,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,price:e.price,amount:n})}})]})]})})},F=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],S=function(){var e=F.map((function(e){return Object(b.jsx)(D,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(b.jsx)("section",{className:"col-md-8 px-2 mb-2 mx-auto",children:Object(b.jsx)("ul",{className:"list-group",children:e})})},R=n(15),z=n.n(R),B=function(){return Object(b.jsxs)("div",{className:"card col-9 col-md-6 mx-auto ".concat(C.a["bg-strong-bliss"]," ").concat(z.a["summary-wrapper"]),children:[Object(b.jsx)("h3",{className:"text-center",children:"Delicious Food List"}),Object(b.jsx)("p",{className:"px-3",children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{className:"px-3",children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},E=function(){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(B,{}),Object(b.jsx)(S,{})]})},L=n(12),V={items:[],totalAmount:0},J=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),a=e.items[i];if(-1!==i){var s=Object(o.a)(Object(o.a)({},a),{},{amount:a.amount+t.item.amount});(n=Object(L.a)(e.items))[i]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var r,l=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[l];if(1===d.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var b=Object(o.a)(Object(o.a)({},d),{},{amount:d.amount-1});(r=Object(L.a)(e.items))[l]=b}return{items:r,totalAmount:e.totalAmount-d.price}}return V},P=function(e){var t=Object(s.useReducer)(J,V),n=Object(a.a)(t,2),c=n[0],i=n[1],r={items:c.items,totalAmount:c.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(b.jsx)(p.Provider,{value:r,children:e.children})};var G=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(P,{children:[n&&Object(b.jsx)(O,{onCloseCart:function(e){(e.target.classList.contains("closeModal")||e.target.classList.contains("closeCart"))&&c(!1)}}),Object(b.jsx)(w,{onShowCart:function(){c(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(E,{})})]})};i.a.render(Object(b.jsx)(G,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.a7b7e3ce.chunk.js.map