import { ReportService } from "./report.service";
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from "../../dtos/report.dto";
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    getAllReports(type: string): ReportResponseDto[];
    getReportsById(type: string, id: string): ReportResponseDto;
    createReport({ amount, source }: CreateReportDto, type: string): ReportResponseDto;
    updateReport(type: string, id: string, body: UpdateReportDto): ReportResponseDto;
    deleteReport(id: string): string;
}
