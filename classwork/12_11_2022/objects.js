const object1 = {
  user: "hasnain ahmad",
  nationality: "pakistan",
  profession: "Software Enginneer",
  myBio() {
    console.log(
      `My name is ${this.user}. I'm a ${this.profession} from ${this.nationality}`
    );
  },
};
console.log(object1.user);
console.log(object1.nationality);
console.log(object1.profession); //Software Engineer
object1.myBio();
console.log(object1.user);
