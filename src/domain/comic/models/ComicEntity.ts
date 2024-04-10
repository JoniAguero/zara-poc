export class ComicEntity {
  static create({
    id,
    title,
    description,
    year,
    image,
  }: {
    id: number;
    title: string;
    description: string;
    year: string;
    image: string;
  }) {
    return new ComicEntity({
      id,
      title,
      description,
      year,
      image,
    });
  }

  private _id: number;
  private _title: string;
  private _description: string;
  private _year: string;
  private _image: string;

  constructor({
    id,
    title,
    description,
    year,
    image,
  }: {
    id: number;
    title: string;
    description: string;
    year: string;
    image: string;
  }) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._year = year;
    this._image = image;
  }

  id() {
    return this._id;
  }
  title() {
    return this._title;
  }
  description() {
    return this._description;
  }
  year() {
    return this._year;
  }
  image() {
    return this._image;
  }

  serialize() {
    return {
      id: this.id(),
      title: this.title(),
      description: this.description(),
      year: this.year(),
      image: this.image(),
    };
  }
}
