let ekle=document.querySelector("#liveToastBtn");
let giris=document.querySelector("#task");
let list=document.querySelector("#list");
let savedTasks=[];

function load(){
    var savedTasksString = localStorage.getItem("savedTasks");
    var savedTasksArray = JSON.parse(savedTasksString);
    savedTasks=savedTasksArray
    for(let i=0;i<savedTasksArray.length;i++){
     var li=document.createElement("li")
     li.textContent=savedTasksArray[i] 
     var spanNode=document.createElement("span")
     spanNode.innerHTML="&times;"  
    spanNode.classList.add("close")
    li.appendChild(spanNode)
    list.appendChild(li)

     localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    
    spanNode.addEventListener("click", e => { 
        var spanContent=e.target.parentElement.querySelector('span').textContent 
        let taskToRemove = e.target.parentElement.textContent.replace(spanContent,''); 
        console.log(taskToRemove);  
        let index = savedTasks.indexOf(taskToRemove);
        savedTasks.splice(index, 1);
        // console.log(taskToRemove)
        console.log(li)
        
        list.removeChild(e.target.parentElement)
    
        // console.log(li.textContent)
        // console.log(savedTasks)   
        // console.log(spanNode.parentElement)
        



       
        localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    
        
      
    })
    
    
    } 
   
 
   
 }

 
 load();



function renk(){
list.childNodes.forEach((item)=>{

    item.addEventListener("click",e=>{
        if(item.classList.contains("checked")){
            item.classList.remove("checked")
        }else
        item.classList.add("checked")       
        
    })

})}

renk();
function newElement(){

    if(giris.value.trim()==""){
        
        giris.value="";
        giris.placeholder="Bugün ne yapacaksın?"
        $('#invalidToast').toast('show')
        
    }
    else
    {
        // add function
    var li=document.createElement("li")
   li.textContent=giris.value;
   var spanNode=document.createElement("span")
   spanNode.innerHTML="&times;"
   spanNode.classList.add("close")
   list.appendChild(li)
   savedTasks.push(li.innerHTML)
  
   localStorage.setItem("savedTasks",JSON.stringify(savedTasks))
   giris.value="";  
   giris.placeholder="Bugün ne yapacaksın?"
   $('#validToast').toast('show')
  
   
  
  
   // remove function
  
   spanNode.addEventListener("click",e=>{
    var spanContent = li.querySelector('span').textContent;
    let taskToRemove= li.textContent.replace(spanContent, '');
   
    let index=savedTasks.indexOf(taskToRemove)
    savedTasks.splice(index,1)
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    li.remove();

   }
   )

  

   
   li.appendChild(spanNode)
   function checkEvent(){
   li.addEventListener("click",e=>{
    if(li.classList.contains("checked")){
        li.classList.remove("checked")
    }else
    li.classList.add("checked")       
    
})
   }
   checkEvent();
    
   
    
}
}