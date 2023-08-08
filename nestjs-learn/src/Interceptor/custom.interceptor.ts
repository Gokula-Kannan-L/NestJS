import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs";


export class CustomInterceptor implements NestInterceptor{
    intercept( context: ExecutionContext, handler: CallHandler ){

        //This is INTERCEPTING THE REQUEST.....

        return handler.handle().pipe(
            map( (data) => {
                //This is INTERCEPTING THE RESPONSE.....

                const response = {
                    ...data,
                    createdAt : data.created_at,
                };

                delete response.created_at;
                delete response.updated_at;

                return response;
            })
        )   
    }
}