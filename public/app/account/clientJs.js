function addInfo(){
    var fname = document.getElementById('fName').innerHTML;
    console.log(fname);
    document.getElementById('firstName').innerHTML = fname;

    var lname = document.getElementById('lName').innerHTML;
    document.getElementById('lastName').innerHTML = lname;

    var pPic = document.getElementById('pPic').innerHTML;
    document.getElementById('profilePic').innerHTML = pPic;
}