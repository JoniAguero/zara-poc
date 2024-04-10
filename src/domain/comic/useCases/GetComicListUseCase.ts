import { HTTPRepository } from '../repositories';

export class GetComicListUseCase {
  _repository;

  static create() {
    const repository = HTTPRepository.create();
    return new GetComicListUseCase({ repository });
  }

  constructor({ repository }: { repository: HTTPRepository }) {
    this._repository = repository;
  }

  async execute({ id }: { id: number }) {
    const response = await this._repository.getComicList({ id });
    const items = response?.items?.comicEntityList || [];
    const count = response?.metadata?.count;
    return {
      items,
      count,
    };
  }
}
