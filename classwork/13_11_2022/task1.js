const users = [
  { first_name: "hasnain", last_name: "ahmad", age: 24 },
  { first_name: "asim", last_name: "qamar", age: 89 },
  { first_name: "nabeel", last_name: "khan", age: 52 },
  { first_name: "hasaan", last_name: "gul", age: 60 },
  { first_name: "faisal", last_name: "islam", age: 09 },
];

function fullname() {
  const full_name = [];
  users.map((user) => {
    full_name.push(user.first_name + " " + user.last_name);
  });
  return full_name;
}

function age() {
  const agelist = [];
  users.filter((user) => {
    agelist.push(user.age);
  });
  return agelist;
}

function greater_age() {
  const greater_age_list = [];
  users.map((user) => {
    if (user.age > 50) {
      greater_age_list.push(user.age);
    }
  });
  return greater_age_list;
}
console.log(fullname());
console.log(age());
console.log(greater_age());
