let person = {
  firstName: "Steven",
  lastName: "Hancock",
  email: "shancock@allthingsjavascript.com",
  type: {
    type1: "admin",
    type2: "user"
  },
  active: true,
  address: {
    street: {
      street1: "100 N. Main",
      street2: "Apt. 5",
    },
    city: "Lehi",
    zip: 10001
  }
};

const isObject = function(val) {
  if (val === null) {
    return false;
  }
  return (typeof val === 'object');
};

const objProps = function(obj) {
  for (let val in obj) {
    if (isObject(obj[val])) {
      objProps(obj[val]);
    } else {
      console.log(val, obj[val]);
    }
  }
} 

objProps(person);

