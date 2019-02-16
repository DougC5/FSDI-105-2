//LAB 1 Add another method to pet constructior to print the owner information, Add a method to Salon Object to dsisplay, add pets to the salon object array, add a Salon template literal; create a method on the object literal to display how amny pets are in the array, print each pet name in the array( create a method in the Salon object (for loop)

let petCounter = 1;

function registerPet(){
    var txtName = document.getElementById('txtName');
    var txtAge = document.getElementById('txtAge');
    var txtOwner = document.getElementById('txtOwner');
    var txtPhone = document.getElementById('txtPhone');
    var selService = document.getElementById('selService');

    var thePet = new Pet (txtName.value, txtAge.value, selService.value, txtOwner.value, txtPhone.value);

    console.log(thePet);

    salon.pets.push(thePet);

    displayPet(thePet);
    displayPetTable(thePet);

    txtName.value = '';
    txtAge.value = '';
    selService.value = '';
    txtOwner.value = '';
    txtPhone.value = '';
}

//Displays the pet onto the List
//expects: a pet object
function displayPet(aPet){
    //get a lsit reference

    var list = document.getElementById('petList');
    //creating a new 'li' item
//    var li = document.createElement('li');
//    li.innerHTML = aPet.name + ' - ' + aPet.type;
//    //Adds li to the list
//    list.appendChild(li);

     //#2 most used method
     var li = '<li class= pet-li bordered>' + aPet.name + ' - ' + aPet.type + '</li>';

     list.innerHTML += li;

     //list.appendChild(li);


}

function displayPetTable(aPet) {
    var tBody = document.getElementById('listBody');

    // method 2
    var row = `<tr>
                  <th scope="row">${petCounter}</th>
                  <td>${aPet.name}</td>
                  <td>${aPet.age}</td>
                  <td>${aPet.ownerName}</td>
                  <td>${aPet.ownerPhone}</td>
                  <td>${aPet.type}</td>
              </tr>`;



    // '<tr>' +
    // '<th scope = "row">' + petCounter + '</th>' +
    // '<td>' + aPet.name + '</td><td>' +
    //     aPet.age + '</td><td>' + aPet.ownerName + '</td><td>' +
    //     aPet.ownerPhone + '</td><td>' + aPet.type + '</td></tr>';

        petCounter += 1;

    tBody.innerHTML += row;
}



var salon = {
    name: 'Pet Salon',
    phone: '432 455 9400',
    address: {
        street: 'main',
        number: '123'
    },
    workingHours: {
        opens: '9:00',
        closes: '17:00'
    },

    pets: [],

    addPet: function(petName) {
        this.pets.push(petName);
    },

    printPetNum: function() {
        var petQty = 'There are: ' + this.pets.length + ' pets currently in the Salon';
        console.log(petQty);
    },

    printNames: function() {
        var petNames = '';
        for (var i = 0; i < this.pets.length; i++) {
            //console.log(this.pets[i]);
            petNames += 'Name: ' + this.pets[i] + '\n';
        }
        console.log(petNames);
    }

};

function Pet(name, age, serviceType, ownerName, contactNumber){
    this.hunger = 20;
    this.happy = 10;
    this.name = name;
    this.age = age;
    this.type = serviceType;
    this.ownerName = ownerName;
    this.ownerPhone = contactNumber;

    this.feed = function() {
        this.hunger -= 10;
        this.happy += 10;
    };
    this.status = function () {
        console.log(this.name, ' Hunger: ', this.hunger, ' Happy: ', this.happy);
    };
    this.owner = function(){
        console.log(this.ownerName, ' is the owner of ', this.name);


    };
}


var fido = new Pet('Fido', 3, 'hair cut', 'Fancy Lady', '555 555 5555');
var james = new Pet('James', 6, 'nail clipping', 'Bill Wallis', '666 557 2496');

james.status();
james.feed();
james.status();
james.feed();
james.status();
salon.addPet(fido.name);
salon.addPet(james.name);
salon.printPetNum();
salon.printNames();
