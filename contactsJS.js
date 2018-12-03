function Contact(name, phone, email, address) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
}
var contact1 = new Contact("John Doe", "509.123.4567", "johndoe@example.com", "2792 Trainer Avenue Houston, TX 77063");
var contact2 = new Contact("Jessica Betton", "509.123.4567", "jbetton@example.com", "1234 W. Garland St. Spokane, WA 99205");
var contact3 = new Contact("Kiersten Passmore", "509.123.4567", "passmorekp@example.com", "697 Buffalo Creek Road Birmingham, AL 35209");
var contact4 = new Contact("Happy Gilmore", "509.123.4567", "happiness@example.com", "2482 Still Pastures Drive Spokane, WA 99205");
var contact5 = new Contact("Jane Doe", "509.123.4567", "janedoe@example.com", "3194 Ocello Street Dallas, TX 75204");
var contact6 = new Contact("Allen Boyde", "509.123.4567", "allen.boyde@example.com", "183 Michigan Avenue San Francisco, CA 94143");
var contact7 = new Contact("Randal Cobb", "509.123.4567", "cobbs@example.com", "504 Arbor Court Columbia, MD 21045");
var contact8 = new Contact("Jordy Nelson", "509.123.4567", "jnelson@example.com", "3412 Crim Lane Terre Haute, OH 43078");

var contacts = [contact1, contact2, contact3, contact4, contact5, contact6, contact7, contact8];

function displayContacts(contacts){

  for(var i = 0; contacts.length > i; i++){

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td2.setAttribute("class", "block");
    var td3 = document.createElement("td");
    td3.setAttribute("class", "hide");
    var td4 = document.createElement("td");
    td4.setAttribute("class", "hide");


    td1.appendChild(document.createTextNode(contacts[i].name));
    td2.appendChild(document.createTextNode(contacts[i].phone));
    td3.appendChild(document.createTextNode(contacts[i].email));
    td4.appendChild(document.createTextNode(contacts[i].address));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("contactTable").appendChild(tr);
  }

};

function displayByEmail(contacts){

if (document.getElementById("select").value == "phone"){
  location.reload();
}
else{

  document.getElementById("contactTable").innerHTML = "";

  for(var i = 0; contacts.length > i; i++){

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td2.setAttribute("class", "block");
    var td3 = document.createElement("td");
    td3.setAttribute("class", "hide");
    var td4 = document.createElement("td");
    td4.setAttribute("class", "hide");

    td1.appendChild(document.createTextNode(contacts[i].name));
    td2.appendChild(document.createTextNode(contacts[i].email));
    td3.appendChild(document.createTextNode(contacts[i].phone));
    td4.appendChild(document.createTextNode(contacts[i].address));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("contactTable").appendChild(tr);
  }
}
}






//test comment




















//
