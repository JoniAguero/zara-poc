// import { HTTPRepository } from '../repositories';

// export class GetUserDetailUseCase {
//   _repository;

//   static create() {
//     const repository = HTTPRepository.create();
//     return new GetUserDetailUseCase({ repository });
//   }

//   constructor({ repository }: { repository: HTTPRepository }) {
//     this._repository = repository;
//   }

//   async execute({ userId }: { userId: string }) {
//     const userEntity = await this._repository.getHeroList({ userId });
//     return userEntity.serialize();
//   }
// }
