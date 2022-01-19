import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Keys} from '../config/keys';
import {User} from '../models';
import {UserRepository} from '../repositories/user.repository';
const jwt = require('jsonwebtoken');

// const generador = require('password-generator');
// const cryptojs = require('crypto-js');


@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository
  ) {}


  //Identify user
  identifyUser(username: string, passw:string){
    try {
      const user= this.userRepository.findOne({where: {userName: username, passw: passw} });
      return user;
      // if(user){
      //   return user;
      // }else{
      //   return false;
      // }
    } catch {
      return false;
    }
  }

  generateToken(user: User){
    const token = jwt.sign({
      data: {
        is: user.id,
        user: user.userName,
        role: user.role,
      }
    },
      Keys.claveJWT);
      return token;
  }




}
