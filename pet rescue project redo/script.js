// get get button and all pets
const buttonStatus = document.querySelector("button");
document.querySelectorAll(".all-pets");
// create function to create pets
const createPet = function(name, specices) {
    // pet object 
    const pet = {
        name: name,
        specices:specices,
        isTired: 1,
        // function sleep
        sleep: function(){
            console.log(`To tired ${this.name} needs a nap ZZZ`);
            this.isTired = 1;
        },
        // play function
        play: function() {
            if(this.isTired == 10){
                console.log(`${this.name} is to tired to play`);
                this.isTired+= 10;
                this.sleep();

            } else {
                console.log(`Yay ${this.name} loves to play!`);
            }
        }
    }
    return pet;
}
const sorra = createPet("Sorra, Ferra");
const felix = createPet("Felix, hamster");
const hank = createPet("Hank, bird");
const benny = createPet("Benny, rabbit")
console.log("sorra, felix, hank, benny")
sorra.sleep()
felix.play()
hank.sleep()
benny.play()