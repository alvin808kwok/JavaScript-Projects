function my_Dictionary() {
    var Animal = {
        Speicies:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;
    // output of this code would be: undefined since the value no longer exists in our dictionary
    document.getElementById("dictionary").innerHTML = Animal.Sound;
}

