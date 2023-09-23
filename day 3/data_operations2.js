let users2 = [
    { name: "Aasha Rai", age: 25, gender: "Female", location: "Gangtok" },
    { name: "Rajesh Gurung", age: 35, gender: "Male", location: "Namchi" },
    { name: "Sarita Tamang", age: 16, gender: "Female", location: "Pelling" },
    { name: "Prabin Subba", age: 28, gender: "Male", location: "Ravangla" },
    { name: "Mina Basnet", age: 20, gender: "Female", location: "Kalimpong" },
    { name: "Kiran Thapa", age: 45, gender: "Male", location: "Nepalgunj" },
    { name: "Sushma Limbu", age: 17, gender: "Female", location: "Yuksam" },
    { name: "Amit Sharma", age: 32, gender: "Male", location: "Darjeeling" },
    { name: "Sunita Rai", age: 19, gender: "Female", location: "Mangan" },
    { name: "Dipak Chhetri", age: 21, gender: "Male", location: "Geyzing" },
    { name: "Anjali Limbu", age: 14, gender: "Female", location: "Phidim" },
    { name: "Roshan Koirala", age: 29, gender: "Male", location: "Ilam" },
    { name: "Priya Rai", age: 26, gender: "Female", location: "Jorethang" },
    { name: "Bibek Gurung", age: 42, gender: "Male", location: "Rangpo" },
    { name: "Samita Thapa", age: 23, gender: "Female", location: "Lachen" }
  ];


// Function to filter users by gender
let filterByGender = (user, gender) => user.gender.toLowerCase() === gender.toLowerCase();

// Function to get the full name of a user
let getFullNames = (user) => `${user.name}`;

  // Chaining to manipulate the users array
let femaleUsers = users2
.filter((user) => filterByGender(user, "female")) // Filter female users
.map((user) => getFullNames(user)); // Extract full names

console.log(femaleUsers);