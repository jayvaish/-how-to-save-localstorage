
function product(n,fn,mn,sn,bn){           //function name randmoly
    this.name=n;
    this.fname=fn;
    this.mname=mn;
    this.sname=sn;
    this.bname=bn
}


function formSubmit(event){          // button ko diya hua onclick naam dena pdta hai
    event.preventDefault()

    let form=document.getElementById("container");
    let name=form.name.value;
    let fname=form.fname.value;
    let mname=form.mname.value;
    let bname=form.bname.value;
    let sname=form.sname.value;

    let s1=new product(name,fname,mname,bname,sname)
    let data=JSON.parse(localStorage.getItem("ajay"))||[]    // ajay ki jgh jo bhi naam localstorage me save krna hai won dal do

    data.push(s1)

    localStorage.setItem("ajay",JSON.stringify(data))        //same ajay ki jgh
    console.log(s1)
}