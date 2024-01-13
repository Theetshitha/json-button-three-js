let testimony_obj=[

    {
       
        Name:"Gunasri",
        Degin:"FrontEnd Develeper",
        About:"Another outstanding product by Turow.  He makes me feel intelligent and informed about important current issues, makes it so I can understand them, and entertains with good romance, man-woman stuff."
       
    }
    ,
{
    
    Name:"Theetshitha",
    Degin:"Designer",
    About:" Ehh.. he lost me on page 30 The book was kind of slow moving anyway. Glad I onlymakes it so I can understand them, and entertains me with  perspiciatis aper iam assum  enda earum, ipsum alias adipisci!"
   
},
{
   
    Name:"Vijayalakshmi",
    Degin:"BackEnd Develeper",
    About:"The trial was riveting, the discourse after was however somewhat tedious and long winded. Overall a very good book, easy to read with several makes it so I can understand them, and entegood plot twists."
}
]

let bt=document.querySelectorAll('.btn');


bt.forEach((btn,index) => {
    
btn.addEventListener("click",()=>{
    window.open('index2.html',"blank");
    var a=JSON.stringify(testimony_obj[index]);
    a=localStorage.setItem("obj",a);
});


});