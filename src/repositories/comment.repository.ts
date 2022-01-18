import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConfedataDataSource} from '../datasources';
import {Comment, CommentRelations} from '../models';

export class CommentRepository extends DefaultCrudRepository<
  Comment,
  typeof Comment.prototype.id,
  CommentRelations
> {
  constructor(
    @inject('datasources.confedata') dataSource: ConfedataDataSource,
  ) {
    super(Comment, dataSource);
  }
}
