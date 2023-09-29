const listcontainer = document.getElementById('listcontainer');
        const val=document.getElementById("inputlist")
        function addTolist(){
           
           
            
            if(val.value==''){
                alert("you write something");
            }
            else {
                const ll = document.createElement("li");
                console.log(ll);
                ll.innerHTML=val.value
                document.getElementById("listcontainer").appendChild(ll);
                let span = document.createElement("span");
                span.innerHTML="\u00d7";
                ll.appendChild(span);
                val.value="";
            }
            saveData();

        }
        
        listcontainer.addEventListener('click', function(e){
            if(e.target.tagName==="LI"){
                e.target.classList.toggle("checked");
                saveData();
                
            }
            else if(e.target.tagName==="SPAN"){
                e.target.parentElement.remove()
                saveData();
            }
        },false);

        function saveData(){
            localStorage.setItem('data',listcontainer.innerHTML);
        }
        function showTask(){
            listcontainer.innerHTML=localStorage.getItem('data');
        }
        showTask();