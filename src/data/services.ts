import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Helper to convert snake_case or space headers to camelCase
function toCamelCase(str: string) {
  return str
    .trim()
    .replace(/[_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^(.)/, (m) => m.toLowerCase());
}

export type Service = {
  category: string;
  id: string;
  item: string;
  description: string;
  price: number;
  priceType: string;
  extendedDescription: string;
};

const csvPath = path.resolve('./src/data/services.csv');
const csvData = fs.readFileSync(csvPath, 'utf8');
const records = parse(csvData, {
  columns: (header) => header.map(h => toCamelCase(h)),
  skip_empty_lines: true,
}) as Service[];

const servicesById: Record<string, Service> = {};
for (const row of records) {
  servicesById[row.id] = row;
}

export { records as services, servicesById };
