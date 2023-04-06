let laptop = {
  cpu: "i5",
  ram: 16,
  brand: "hp",
  getConfig: function () {
    return this.brand;
  },
};
console.log(laptop.getConfig());



const obj4 = {
  name: "obj4",

  getThis() {
    return this;
  },
  
};

const obj5 = 
{
     name: "obj5" 
};

obj5.getThis = obj4.getThis;
console.log(obj5.getThis());
