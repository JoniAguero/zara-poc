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

  async execute({ search }: { search: string }) {
    const response = await this._repository.getHeroList({ search });
    const items = response?.items?.heroEntityList || [];
    const count = response?.metadata?.count;
    return {
      items,
      count,
    };
  }
}
