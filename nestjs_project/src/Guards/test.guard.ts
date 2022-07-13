import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
    /*
    1.dataOrRequest參數代表你可以傳入expressjs中的request object、或經由microservice、websocket的data。
    2.ExecutionContext帶有兩個成員，parent和handler，parent代表哪個Controller，handler是route handler的參考。
    3.Promise<boolean> | Observable<boolean>，代表路由警衛可以用async寫法。
    */
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        /*true會通過，false會回傳    
        {
        "statusCode": 403,
        "message": "Forbidden resource"
        }
        */
       console.log("guard");
        return true;
    }
}