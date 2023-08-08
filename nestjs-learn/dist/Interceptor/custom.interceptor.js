"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomInterceptor = void 0;
const rxjs_1 = require("rxjs");
class CustomInterceptor {
    intercept(context, handler) {
        return handler.handle().pipe((0, rxjs_1.map)((data) => {
            const response = {
                ...data,
                createdAt: data.created_at,
            };
            delete response.created_at;
            delete response.updated_at;
            return response;
        }));
    }
}
exports.CustomInterceptor = CustomInterceptor;
//# sourceMappingURL=custom.interceptor.js.map