import fs from 'node:fs';
import { transformTokens } from 'token-transformer';

const rawTokens = JSON.parse(fs.readFileSync('tokens.json').toString('utf-8'));