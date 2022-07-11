import { Global, Module } from '@nestjs/common';
// import { CatsService } from './oldcontroller.cats.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

//@Global Global modules
@Module({
  controllers: [CatsController],
  providers: [CatsService]
  //,exports: [CatsService] if i want to share the modules
})
export class CatsModule {}
