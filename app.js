// let box = document.getElementById('div')

// let dragEl = null


// box.addEventListener('dragend',function(e){
// box.style.top=e.clientY-(box.offsetHeight / 2)+"px"
// box.style.left=e.clientX-(box.offsetWidth / 2)+"px"
// dragEl = box
// })


// area.addEventListener("dragleave",function(){
//     area.style.border="solid 7px cyan"
//     area.style.background="rgba(200,200,200,0.4)"
// })

is_opened = true
function property_OC() {
    if (is_opened) {
        is_opened = false
        icon.innerText = "arrow_forward_ios"
        props.style.width = "0%"
        site.style.width = "100%"
        span.style.display="none"
        span2.style.display="none"
    }
    else {
        is_opened = true
        icon.innerText = "arrow_back_ios"
        props.style.width = "25%"
        site.style.width = "75%"
        span.style.display="inline"
        span2.style.display="inline"
    }
}

// let where_to_create = null

function addStyles(element){
    how.innerHTML=`<input type="number" value="10" placeholder="Width" id="iWidth"/>
    <input type="number" placeholder="Height" value="10" id="iHeight"/>
    <input type="text" placeholder="Content" id="iContent"/>
    <span id="span">Background</span>
    <input type="color" placeholder="Background" id="iBack"/>
    <span id="span2">Color</span>
    <input type="color" placeholder="Color" id="iColor"/>
    <input type="number" placeholder="Font-Size" id="iFontSize"/>
    <input type="button" value="CREATE" onclick="create()"/>`
    // where_to_create = element
}


let header_created = false
let footer_created = false
let def_z_index = 10

function create() {
    // if(iWidth.value>100){
    //     alert("Width above 100 not allowed")
    //     return 0
    // }
    // if(iHeight.value>15 && where_to_create===header){
    //     alert("Height above 15 for header not allowed")
    //     return 0
    // }
    // if(iHeight.value>30 && where_to_create===footer){
    //     alert("Height above 30 for footer not allowed")
    //     return 0
    // }
    // if (where_to_create === footer && footer_created) {
    //     alert("Footer already created")
    //     return 0
    // }
    // else if (where_to_create === footer) {
    //     footer_created = true
    // }
    // if (where_to_create === header && header_created) {
    //     alert("Header already created")
    //     return 0
    // }
    // else if (where_to_create === header) {
    //     header_created = true
    // }
   
    let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
    let x  = document.createElement('div')
    x.style.width=iWidth.value+"%"
    x.style.height=iHeight.value+"vh"
    x.innerText=iContent.value
    x.style.background=iBack.value
    x.style.color=iColor.value
    x.style.fontSize=iFontSize.value+"px"
    x.style.cursor="move";
    x.style.zIndex=def_z_index
    x.draggable = true
    // x.contentEditable = true
    site.appendChild(x)

    x.addEventListener('dragstart', function(e){
        e.preventDefault();

        def_z_index+=1
        x.style.zIndex=def_z_index

        startPosX = e.clientX;
        startPosY = e.clientY;
        document.addEventListener('mousemove', mouseMove);
        
        document.addEventListener('mouseup', function(){
            document.removeEventListener('mousemove', mouseMove);
        });
        
    });
    function mouseMove(e) {
        newPosX = startPosX - e.clientX;
        newPosY = startPosY - e.clientY;
        startPosX = e.clientX;
        startPosY = e.clientY;
        x.style.top = (x.offsetTop - newPosY) + "px";
        x.style.left = (x.offsetLeft - newPosX) + "px";
    }
}



// header.addEventListener("dragover",function(e){
//     alert(1)
//     e.preventDefault()
//     x.style.marginLeft=e.clientX-(x.offsetWidth / 2)+"px"
//     x.style.marginTop=e.clientY-(x.offsetHeight / 2)+"px"
// })

