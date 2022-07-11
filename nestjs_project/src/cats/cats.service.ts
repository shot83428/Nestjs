import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    findAll():Cat[]{
        return this.cats;
    }
    create(obj:Cat){
        this.cats.push(obj);
        console.log(this.cats.length);
    }
    findOne(val:Number) {
        this.cats.forEach(element => {
            if( element.age==val){
                return element.name;
            }
        });
        return null;
    }
    update(val:number,obj:Object){

    }
    remove(val:number){

    }
}
