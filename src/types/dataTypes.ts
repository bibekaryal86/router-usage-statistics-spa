export interface UsageResponse {
    modelList: UsageStatistics[];
    yearMonthSet: string[];
    modelTotal: UsageStatistics;
}

export interface UsageStatistics {
    id: IdObject;
    date: string;
    year: string;
    day: string;
    dataUpload: string;
    dataDownload: string;
    dataTotal: string;
}

interface IdObject {
    timestamp: string;
}

export const DefaultUsageResponse = {
    modelList: [],
    yearMonthSet: [],
    modelTotal: {},
};
