import { drizzle } from 'drizzle-orm/xata-http';
import { getXataClient } from '../xata';
import * as schema from './schema';

const xata = getXataClient();

// Export the Drizzle database instance
export const db = drizzle(xata, { schema });

export default db;