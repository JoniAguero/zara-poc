import { HTTPRepository } from '../repositories';

export class GetHeroDetailUseCase {
  _repository;

  static create() {
    const repository = HTTPRepository.create();
    return new GetHeroDetailUseCase({ repository });
  }

  constructor({ repository }: { repository: HTTPRepository }) {
    this._repository = repository;
  }

  async execute({ id }: { id: number }) {
    const response = await this._repository.getHeroDetail({ id });
    return response?.serialize();
  }
}
