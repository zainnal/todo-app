// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase,ref,set,push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHIlz-8MvbvqRKanOn-4yx8I0S_kMd08M",
  authDomain: "quizz-app-d5056.firebaseapp.com",
  projectId: "quizz-app-d5056",
  storageBucket: "quizz-app-d5056.appspot.com",
  messagingSenderId: "523368913948",
  appId: "1:523368913948:web:87b7e308e1bf79bd2dd3d9",
  measurementId: "G-MNJQHTS9TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()





var todolists = document.getElementById("unOrderlist");

window.addtodo = function (){
 
    var todoItems = document.getElementById("todo-items");
 
    var obj = {
    value : todoItems.value
    }
 
    console.log(obj)
    obj .id = push(ref(db, "todoItems/ ")).key
    const reference = ref(db, `todo-items/${obj.id}`)
    set(reference, obj)


    var listWork = document.createElement('li');
    var litext = document.createTextNode(todoItems.value);
    listWork.appendChild(litext);
    todolists.appendChild(listWork)


    var del = document.createElement('button');
    var delText = document.createTextNode("Delete");
    del.appendChild(delText);
    todolists.appendChild(del)  
    del.setAttribute("onclick","delitems(this)");
    
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("EDIT");
    editbtn.appendChild(edittext);
    todolists.appendChild(editbtn);
    editbtn.setAttribute("onclick" , "edititem(this)")
    
    
    todoItems.value = "" ;
    // console.log(todolists)

}


window.delitems = function(r){
    r.parentNode.remove();
    // console.log(r.parentNode)
}


window.clearall = function(){
    unOrderlist.innerHTML = "" ;
    // todo-works.innerHTML =     
}

window.edititem= function(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editval = prompt("Enter Edit Value" , "val");
    e.parentNode.firstChild.nodeValue = editval;
    

    
}