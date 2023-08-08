"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.ReportType = void 0;
var ReportType;
(function (ReportType) {
    ReportType["INCOME"] = "income";
    ReportType["EXPENSE"] = "expense";
})(ReportType || (exports.ReportType = ReportType = {}));
exports.data = {
    report: [
        {
            id: 'uuid1',
            source: 'salary',
            amount: 25000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'uuid2',
            source: 'youtube',
            amount: 12000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'uuid3',
            source: 'food',
            amount: 2000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
};
//# sourceMappingURL=data.js.map