class Park {
  constructor(name, numberOfTrees, area, age) {
    this.name = name;
    this.numberOfTrees = numberOfTrees;
    this.area = area;
    this.age = age;
  }

  getTreeDensity() {
    return `${this.name} has a tree density of ${(
      this.numberOfTrees / this.area
    ).toFixed(2)} per square km`;
  }
}

class Street {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }

}

function average(map,objAttr) {
  let avg = 0;
  map.forEach(el => {
    avg += el[objAttr];
  });
  return avg / map.size;
}

function mostTreesPark(parks) {
  let returnPark = [];
  parks.forEach(park => {
    if (park.numberOfTrees > 1000) {
      returnPark.push(park.name);
    }
  });
  return returnPark;
}

const parks = new Map();
parks.set('Alcala', new Park('Alcala', 10000, 42, 120));
parks.set('Virrey', new Park('Virrey', 1500, 85, 213));
parks.set('Cedritos', new Park('Cedritos', 54, 65, 93));
parks.set('Arrayanes', new Park('Arrayanes', 7, 15, 10));

const streets = new Map();
streets.set('Siempre Viva', new Street('Siempre Viva', 40));
streets.set('Calle 127', new Street('Calle 127', 122));
streets.set('Heroes', new Street('Heroes', 10));

console.log(average(parks, 'age'));
console.log(mostTreesPark(parks));
console.log(parks.get('Alcala').getTreeDensity());

console.log(average(streets, 'length'));
