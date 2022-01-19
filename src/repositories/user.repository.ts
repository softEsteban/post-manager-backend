import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConfedataDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.confedata') dataSource: ConfedataDataSource,
  ) {
    super(User, dataSource);
  }
}
