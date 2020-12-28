import { Report } from './report.interface';
import { Config } from './config.interface';
export interface Site {
    id: number;
    url:string;
    report:Report;
    config:Config;

}