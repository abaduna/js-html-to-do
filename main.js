const trea =[]

const agregartarea=(valor)=>{

    
    document.getElementById("tarea").innerHTML=valor
}

const extraerTarea=()=>{
   const valor2 = document.getElementById("input-tarea").value
    trea.push(valor2)
   document.getElementById("five").innerHTML
    document.getElementById("tarea").innerHTML="se agregado la tarea "
    document.getElementById("input-tarea").value=""
    
    
    
    escrivar_tarea(trea)
}
const escrivar_tarea=(valor2)=>{
    divRes = document.querySelector("#lista-de-tareas")
    divRes.innerHTML = ""

    for (let i = 0; i < trea.length; i++) {
        
        switch (trea[i]) {
            case undefined:
                divItem =document.createElement("div")
                  divItem.innerHTML=`
                  <div class="card bg-warning" style="width: 18rem;">
                    <div class="card-body ">
                        <h5 class="card-title" id="${i}">tarea eliminado con exito</h5>
                        
                    </div>
                </div>`
             divRes.appendChild(divItem)
                
                break;
            case "":
                    alert("no se puede agregar un elemento vacio")
                    break;
            default:
                divItem =document.createElement("div")
                  divItem.innerHTML=`
               <div class="card" style="width: 18rem;">
                 <div class="card-body">
                     <h5 class="card-title" id="${i}">${trea[i]}</h5>
                     <button id=$valor class="btn btn-primary" onclick="eliminartarea(${i})">Eliminar</button>
                 </div>
             </div>`
             divRes.appendChild(divItem)
                break;
        }
        
    }
console.log(trea)
}

const eliminartarea=(id)=>{
    delete(trea[id])
    
    escrivar_tarea(trea)
}