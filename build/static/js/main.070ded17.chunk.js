(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/welcome.59efeccc.jpg"},24:function(e,t,a){e.exports=a(38)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(20),c=a.n(o),r=a(10),l=a(11),u=a(3),i=a(4),m=a(6),p=a(5),d=a(7);function h(){return s.a.createElement("div",{className:"Header"},s.a.createElement("header",null,s.a.createElement("p",null,s.a.createElement(r.b,{className:"nav title",to:"/"},"Petful"))),s.a.createElement("ol",{className:"navbar"},s.a.createElement("li",null),s.a.createElement("li",null,s.a.createElement(r.b,{className:"nav",to:"/adoption"},"Adopt")),s.a.createElement("li",null,s.a.createElement(r.b,{className:"nav",to:"/queue"},"Wait Line")),s.a.createElement("li",null,s.a.createElement(r.b,{className:"nav",to:"/successstories"},"Success Stories"))))}a(34);var f=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.pet;return s.a.createElement("div",{className:"pet"},s.a.createElement("img",{className:"pet-pic",src:e.imageURL,alt:"picutre of said pet"}),s.a.createElement("div",{className:"info"},s.a.createElement("h3",{className:"pet-name"},e.name),s.a.createElement("div",{className:"breed-age-sex"},s.a.createElement("ul",{className:"breed-age-sex-list"},s.a.createElement("li",null,e.breed),s.a.createElement("li",null,e.age),s.a.createElement("li",null,e.gender))),s.a.createElement("p",null,e.description)))}}]),t}(n.Component),g="https://petful-server-nhgi-taylorp.herokuapp.com/api",E={getUsers:function(){return fetch("".concat(g,"/people")).then((function(e){return e.json()}))},postUsers:function(e){return fetch("".concat(g,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},deleteUsers:function(e){return fetch("".concat(g,"/people"),{method:"DELETE",body:JSON.stringify(e)})},getPets:function(){return fetch("".concat(g,"/pets")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deletePets:function(e){return fetch("".concat(g,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({type:e})}).then((function(e){return e.json()}))}},b=a(17),v=s.a.createContext({users:[],user:"",canAdopt:!1,successStories:[],updateUser:function(){},removeUser:function(){},updateUsers:function(){},toggleAdoptionStatus:function(){}}),y=v,N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={users:[],user:"",successStories:[{imageURL:"https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all",name:"Fluffy"},{imageURL:"https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Oreo"},{imageURL:"https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"P-Tato"}],canAdopt:!1},a.updateUser=function(e){a.setState({user:e})},a.removeUser=function(){var e=a.state.users.slice(1);a.setState({users:e})},a.updateUsers=function(e){e.includes(a.state.user)?a.setState({users:e}):a.setState({users:[].concat(Object(b.a)(e),[a.state.user])})},a.updateSuccessStories=function(e){var t={imageURL:e.imageURL,name:e.name};a.setState({successStories:[t].concat(Object(b.a)(a.state.successStories))})},a.toggleAdoptionStatus=function(){a.setState({canAdopt:!a.state.canAdopt})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={users:this.state.users,user:this.state.user,canAdopt:this.state.canAdopt,updateUser:this.updateUser,removeUser:this.removeUser,updateUsers:this.updateUsers,successStories:this.state.successStories,updateSuccessStories:this.updateSuccessStories,toggleAdoptionStatus:this.toggleAdoptionStatus};return s.a.createElement(v.Provider,{value:e},this.props.children)}}]),t}(n.Component),x=(a(35),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={cats:null,dogs:null,loaded:!1,adoptedCat:!1,adoptedDog:!1},a.handleOnClickCat=function(){alert("Congratulations, you've adopted our beloved ".concat(a.state.cats[0].name,"! Please see the success stories tab to for ").concat(a.state.cats[0].name,"'s feature.")),a.setState({adoptedCat:!0}),E.deletePets("cat").then((function(e){a.context.updateSuccessStories(e)}))},a.handleOnClickDog=function(){alert("Congratulations, you've adopted our beloved ".concat(a.state.dogs[0].name,"! Please see the success stories tab to for ").concat(a.state.dogs[0].name,"'s feature.")),a.setState({adoptedDog:!0}),E.deletePets("dog").then((function(e){a.context.updateSuccessStories(e)}))},a.renderUpNextCatsList=function(){var e=a.state.cats;return(void 0===e?[]:e).map((function(e){return s.a.createElement("li",null,e.name)}))},a.renderUpNextDogsList=function(){var e=a.state.dogs;return(void 0===e?[]:e).map((function(e){return s.a.createElement("li",null,e.name)}))},a.renderAdoptCatButton=function(){if(a.context.canAdopt&&!a.state.adoptedCat)return s.a.createElement("button",{type:"button",onClick:a.handleOnClickCat},"Adopt Me!")},a.renderAdoptDogButton=function(){if(a.context.canAdopt&&!a.state.adoptedDog)return s.a.createElement("button",{type:"button",onClick:a.handleOnClickDog},"Adopt Me!")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"openTab",value:function(e){var t,a,n,s=e.currentTarget.value;for(a=document.getElementsByClassName("tabContent"),t=0;t<a.length;t++)a[t].style.display="none";for(n=document.getElementsByClassName("tabLinks"),t=0;t<n.length;t++)n[t].className=n[t].className.replace("active","");document.getElementById(s).style.display="block",e.currentTarget.className+="active"}},{key:"componentDidMount",value:function(){var e=this;document.getElementsByClassName("tabLinks")[0].click(),E.getPets().then((function(t){e.setState({cats:t.cat,dogs:t.dog,loaded:!0})}))}},{key:"render",value:function(){var e=this.state.loaded;return s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),s.a.createElement("section",{className:"AdoptionPage"},s.a.createElement("section",{className:"up-next"},s.a.createElement("div",{className:"cats-next"},s.a.createElement("h2",null,"Cats:"),s.a.createElement("ol",{className:"upNext-list"},e&&this.renderUpNextCatsList())),s.a.createElement("div",{className:"dogs-next"},s.a.createElement("h2",null,"Dogs:"),s.a.createElement("ol",{className:"upNext-list"},e&&this.renderUpNextDogsList()))),s.a.createElement("section",{className:"available-pet"},s.a.createElement("div",{className:"tab"},s.a.createElement("button",{className:"tabLinks",id:"defaultOpen",value:"Cat",onClick:this.openTab},"Cat"),s.a.createElement("button",{className:"tabLinks",value:"Dog",onClick:this.openTab},"Dog")),s.a.createElement("div",{id:"Cat",className:"tabContent"},e&&s.a.createElement(f,{pet:this.state.cats[0]})," ",this.renderAdoptCatButton()),s.a.createElement("div",{id:"Dog",className:"tabContent"},e&&s.a.createElement(f,{pet:this.state.dogs[0]})," ",this.renderAdoptDogButton()))))}}]),t}(n.Component));x.contextType=y;var j=a(23),O=a.n(j),S=(a(36),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).addUser=function(){var e=prompt("What is your name?");e&&(a.context.updateUser(e),E.postUsers({name:e}).then((function(){return a.props.addToQueue()})))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"HomePage"},s.a.createElement("h1",null,"Petful:"),s.a.createElement("p",null,'A place to find your next doggo and catto besfriends! Each adoptor can bring one doggo, one catto, or one of each home. To help our doggo and catto quickly find a home, we made it a rule for the adoptor to only claim the next available doggo and catto. Click "Adopt Now" to be entered in our waiting queue!'),s.a.createElement("img",{src:O.a,alt:"welcome cat"}),s.a.createElement("button",{type:"button",onClick:this.addUser},"Adopt now"))}}]),t}(n.Component));S.contextType=y;var C=null,U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={message:"Adopting Queue:"},a.stopTimer=function(){clearTimeout(C)},a.setTimer=function(e){C=setTimeout(a.dequeue,15e3)},a.dequeue=function(){E.deleteUsers(a.context.users[0]).then((function(e){return a.context.removeUser()}));var e=["cat","dog"],t=e[Math.floor(Math.random()*e.length)];E.deletePets(t).then((function(e){a.context.updateSuccessStories(e)})).then((function(){a.context.users.length>1&&(C=setTimeout(a.dequeue,15e3))}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.context.users.length?this.context.updateUsers[0]!==this.context.user&&this.setTimer():E.getUsers().then((function(t){e.context.updateUsers(t)})).then((function(){var t=15*(e.context.users.length-1),a="Your approximate wait time is ".concat(t," seconds.");e.setState({message:a}),e.setTimer()})).catch((function(e){return console.log(e)})),this.context.user!==this.context.users[0]||this.context.canAdopt||(this.context.toggleAdoptionStatus(),this.setState({message:'Congratulations, please navigate to the "Adopt" tab to start your adoption process.'}))}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,this.state.message),s.a.createElement("ul",{className:"queue-list"},this.context.users.map((function(e,t){return s.a.createElement("li",{key:t+e},e)}))))}}]),t}(n.Component);function k(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),s.a.createElement("section",{className:"QueuePage"},s.a.createElement(U,null)))}U.contextType=y;var A=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("ul",null,this.context.successStories.map((function(e,t){return s.a.createElement("li",{key:t+e.name,className:"pet_story"},s.a.createElement("h3",{className:"pet-name_story"},"Name: ",e.name),s.a.createElement("img",{className:"pet-pic_story",src:e.imageURL,alt:"adopted pet"}))})))}}]),t}(n.Component);function T(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),s.a.createElement("section",{className:"SuccessStoriesPage"},s.a.createElement("h2",null,"Congratulations for finding a home!"),s.a.createElement(A,null)))}function P(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),s.a.createElement("section",{className:"NotFoundPage"},s.a.createElement("h2",null,"Oops, this page doesn't exist."),s.a.createElement("p",null,"Please select any pages from the navigation.")))}A.contextType=y;var L=function(){return s.a.createElement("main",{className:"Root"},s.a.createElement(l.c,null,s.a.createElement(l.a,{exact:!0,path:"/",render:function(e){var t=e.history;return s.a.createElement(S,{addToQueue:function(){return t.push("/queue")}})}}),s.a.createElement(l.a,{path:"/adoption",component:x}),s.a.createElement(l.a,{path:"/queue",component:k}),s.a.createElement(l.a,{path:"/successstories",component:T}),s.a.createElement(l.a,{component:P})))};a(37);c.a.render(s.a.createElement(r.a,null,s.a.createElement(N,null,s.a.createElement(L,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.070ded17.chunk.js.map