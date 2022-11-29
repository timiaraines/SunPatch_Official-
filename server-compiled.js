(()=>{var e={198:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(358),s=a(689),r=a.n(s);const o=()=>r().createElement("footer",{className:"footer"},r().createElement(n.Container,null,r().createElement(n.Row,{className:"align-items-center"},r().createElement(n.Col,{size:12,sm:6},r().createElement("img",{src:"/logo.png"})),r().createElement(n.Col,{size:12,sm:6,className:"text-center text-sm-end"},r().createElement("p",null,"Made by Timia Raines and Aman Singh"),r().createElement("p",null,"Copyright 2022. All Rights Reserved")))))},605:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(689),s=a.n(n),r=a(358);const o=()=>{const[e,t]=(0,n.useState)("home"),[a,o]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const l=e=>{t(e)};return s().createElement(r.Navbar,{expand:"md",className:a?"scrolled":""},s().createElement(r.Container,null,s().createElement(r.Navbar.Toggle,{"aria-controls":"basic-navbar-nav"},s().createElement("span",{className:"navbar-toggler-icon"})),s().createElement(r.Navbar.Collapse,{id:"basic-navbar-nav"},s().createElement(r.Nav,{className:"ms-auto"},s().createElement(r.Nav.Link,{href:"/",className:"home"===e?"active navbar-link":"navbar-link",onClick:()=>l("home")},"Home"),s().createElement(r.Nav.Link,{href:"/admin",className:"garden-tracker"===e?"active navbar-link":"navbar-link",onClick:()=>l("garden-tracker")},"Garden Tracker")))))}},960:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});const n=require("axios");var s=a.n(n),r=a(689),o=a.n(r);const l=function(e){const[t,a]=(0,r.useState)(!1),[n,l]=(0,r.useState)(""),[i,c]=(0,r.useState)(),[d,m]=(0,r.useState)("");return o().createElement("div",{className:"card"},o().createElement("div",{className:"our-card-top"},t&&o().createElement("div",{className:"our-custom-input"},o().createElement("div",{className:"our-custom-input-interior"},o().createElement("input",{onChange:e=>c(e.target.files[0]),className:"form-control form-control-sm",type:"file"}))),o().createElement("img",{src:e.photo?`/uploaded-photos/${e.photo}`:"/fallback.png",className:"card-img-top",alt:`${e.species} named ${e.name}`})),o().createElement("div",{className:"card-body"},!t&&o().createElement(o().Fragment,null,o().createElement("h4",null,e.name),o().createElement("p",{className:"text-muted small"},e.species),!e.readOnly&&o().createElement(o().Fragment,null,o().createElement("button",{onClick:()=>{a(!0),l(e.name),m(e.species),c("")},className:"btn btn-sm btn-primary"},"Edit")," ",o().createElement("button",{onClick:async()=>{s().delete(`/plant/${e.id}`),e.setPlants((t=>t.filter((t=>t._id!=e.id))))},className:"btn btn-sm btn-outline-danger"},"Delete"))),t&&o().createElement("form",{onSubmit:async function(t){t.preventDefault(),a(!1),e.setPlants((t=>t.map((function(t){return t._id==e.id?{...t,name:n,species:d}:t}))));const r=new FormData;i&&r.append("photo",i),r.append("_id",e.id),r.append("name",n),r.append("species",d);const o=await s().post("/update-plant",r,{headers:{"Content-Type":"multipart/form-data"}});o.data&&e.setPlants((t=>t.map((function(t){return t._id==e.id?{...t,photo:o.data}:t}))))}},o().createElement("div",{className:"mb-1"},o().createElement("input",{autoFocus:!0,onChange:e=>l(e.target.value),type:"text",className:"form-control form-control-sm",value:n})),o().createElement("div",{className:"mb-2"},o().createElement("input",{onChange:e=>m(e.target.value),type:"text",className:"form-control form-control-sm",value:d})),o().createElement("button",{className:"btn btn-sm btn-success"},"Save")," ",o().createElement("button",{onClick:()=>a(!1),className:"btn btn-sm btn-outline-secondary"},"Cancel"))))}},860:e=>{"use strict";e.exports=require("express")},470:e=>{"use strict";e.exports=require("fs-extra")},13:e=>{"use strict";e.exports=require("mongodb")},738:e=>{"use strict";e.exports=require("multer")},689:e=>{"use strict";e.exports=require("react")},358:e=>{"use strict";e.exports=require("react-bootstrap")},684:e=>{"use strict";e.exports=require("react-dom/server")},109:e=>{"use strict";e.exports=require("sanitize-html")},441:e=>{"use strict";e.exports=require("sharp")},17:e=>{"use strict";e.exports=require("path")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const{MongoClient:e,ObjectId:t}=a(13),n=a(860),s=a(738)(),r=a(109),o=a(470),l=a(441),i=a(17),c=a(689),d=a(684),m=a(960).Z,p=a(198).Z,u=a(605).Z;o.ensureDirSync(i.join("public","uploaded-photos"));const b=n();let g;function f(e,t,a){"string"!=typeof e.body.name&&(e.body.name=""),"string"!=typeof e.body.species&&(e.body.species=""),"string"!=typeof e.body._id&&(e.body._id=""),e.cleanData={name:r(e.body.name.trim(),{allowedTags:[],allowedAttributes:{}}),species:r(e.body.species.trim(),{allowedTags:[],allowedAttributes:{}})},a()}b.set("view engine","ejs"),b.set("views","./views"),b.use(n.static("public")),b.use(n.json()),b.use(n.urlencoded({extended:!1})),b.get("/",(async(e,t)=>{const a=await g.collection("plants").find().toArray(),n=d.renderToString(c.createElement("div",{className:"container"},c.createElement(u,null),c.createElement("div",null,c.createElement("br",null),c.createElement("br",null),c.createElement("br",null),c.createElement("br",null)),!a.length&&c.createElement("h1",null," There are no plants to be taken care of, admin needs to add few"),c.createElement("div",{className:"animal-grid mb-3"},a.map((e=>c.createElement(m,{key:e._id,name:e.name,species:e.species,photo:e.photo,id:e.id,readOnly:!0})))),c.createElement(p,null)));t.render("home",{generatedHTML:n})})),b.use((function(e,t,a){t.set("WWW-Authenticate","Basic Realm='Our Mern App'"),"Basic YWRtaW46YWRtaW4="==e.headers.authorization?a():(console.log(e.headers.authorization),t.status(401).send("Try again"))})),b.get("/admin",((e,t)=>{t.render("admin")})),b.get("/api/plants",(async(e,t)=>{const a=await g.collection("plants").find().toArray();t.json(a)})),b.post("/create-plants",s.single("photo"),f,(async(e,a)=>{if(e.file){const t=`${Date.now()}.jpg`;await l(e.file.buffer).resize(844,456).jpeg({quality:60}).toFile(i.join("public","uploaded-photos",t)),e.cleanData.photo=t}console.log(e.body);const n=await g.collection("plants").insertOne(e.cleanData),s=await g.collection("plants").findOne({_id:new t(n.insertedId)});a.send(s)})),b.delete("/plant/:id",(async(e,a)=>{"string"!=typeof e.params.id&&(e.params.id="");const n=await g.collection("plants").findOne({_id:new t(e.params.id)});n.photo&&o.remove(i.join("public","uplaoded-photos",n.photo)),g.collection("plants").deleteOne({_id:new t(e.params.id)}),a.send("Good Job")})),b.post("/update-plant",s.single("photo"),f,(async(e,a)=>{if(e.file){const n=`${Date.now()}.jpg`;await l(e.file.buffer).resize(844,456).jpeg({quality:60}).toFile(i.join("public","uploaded-photos",n)),e.cleanData.photo=n;const s=await g.collection("plants").findOneAndUpdate({_id:new t(e.body._id)},{$set:e.cleanData});s.value.photo&&o.remove(i.join("public","uploaded-photos",s.value.photo)),a.send(n)}else console.log("yesssss"),g.collection("plants").findOneAndUpdate({_id:new t(e.body._id)},{$set:e.cleanData}),a.send(!1)})),async function(){const t=new e("mongodb+srv://admin2:K1M2oQqjnq9owQpd@mern.5drfrse.mongodb.net/AmazingMernApp?retrywrites=true&w=majority");await t.connect(),g=t.db(),console.log(g.collection),b.listen(5e3)}()})()})();