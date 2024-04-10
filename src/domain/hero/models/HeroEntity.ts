export class HeroEntity {
  static create({ id, name, description, image }: { id: number; name: string; description: string; image: string }) {
    return new HeroEntity({
      id,
      name,
      description,
      image,
    });
  }

  private _id: number;
  private _name: string;
  private _description: string;
  private _image: string;

  constructor({ id, name, description, image }: { id: number; name: string; description: string; image: string }) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._image = image;
  }

  id() {
    return this._id;
  }
  name() {
    return this._name;
  }
  description() {
    return this._description;
  }
  image() {
    return this._image;
  }

  serialize() {
    return {
      id: this.id(),
      name: this.name(),
      description: this.description(),
      image: this.image(),
    };
  }
}
