export class HeroEntity {
  static create({ id, name, image }: { id: number; name: string; image: string }) {
    return new HeroEntity({
      id,
      name,
      image,
    });
  }

  private _id: number;
  private _name: string;
  private _image: string;

  constructor({ id, name, image }: { id: number; name: string; image: string }) {
    this._id = id;
    this._name = name;
    this._image = image;
  }

  id() {
    return this._id;
  }
  name() {
    return this._name;
  }
  image() {
    return this._image;
  }

  serialize() {
    return {
      id: this.id(),
      name: this.name(),
      image: this.image(),
    };
  }
}
