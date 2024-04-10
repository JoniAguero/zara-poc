import { HTTPRepository } from '../repositories';

export class GetHeroListUseCase {
  _repository;

  static create() {
    const repository = HTTPRepository.create();
    return new GetHeroListUseCase({ repository });
  }

  constructor({ repository }: { repository: HTTPRepository }) {
    this._repository = repository;
  }

  async execute() {
    const heroListVO = await this._repository.getHeroList({ offset: 0, search: '', rowsPerPage: 10 });

    return {
      items: heroListVO,
    };
  }
}
