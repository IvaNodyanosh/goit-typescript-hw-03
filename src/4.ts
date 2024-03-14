class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature
  }
}

class Person {
  private Key: Key;
  constructor(key: Key) {
    this.Key = key;
  }
  getKey() {
    return this.Key;
  }
}

abstract class House {
  protected Door: boolean;
  protected Key: Key;
  protected Tenants: Person[];

  constructor(key: Key) {
    this.Door = false;
    this.Key = key;
    this.Tenants = [];
  }
    
    abstract OpenDoor(key: Key): void;

  comeIn(person: Person) {
      if (this.Door) {
        this.Tenants.push(person)
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  OpenDoor(key: Key) {
    if (key.getSignature() === this.Key.getSignature()) {
      this.Door = true;
    }

  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
