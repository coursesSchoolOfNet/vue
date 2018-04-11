var app = new Vue({
   el:'#app',
   data:{
       msg:"Starting with Vue.js",
       msg_name:"Names",
       peoples:[
           {name:"Danilo"},
           {name:"Larissa"},
           {name:"Kevin"}
       ],
       name:'',
       elements:[]
   },
   methods:{
       addElement: function(){
        //    console.log(e);
           var name = this.name.trim();
           if(name){
               this.elements.push({name:name});
               this.name = "";
           }
       },
       remove: function(e, index){
        e.preventDefault();
        this.elements.splice(index, 1);
       },
       say: function(e, index){
        e.preventDefault();
        console.log(index);
       }       
   } 
});