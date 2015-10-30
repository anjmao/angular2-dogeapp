/// <reference path='../../_references.ts' />

interface IDbConfig{
	host?: string;
	database?: string;
	username?: string;
	password?: string;
    port?: number;
    ssl?: boolean;
}

class DbConfig{
	get(): IDbConfig {
		var result: IDbConfig = {
			host: process.env.DB_HOST || 'localhost',
			database: process.env.DB_NAME || 'candy-fun',
			username: process.env.DB_USERNAME || 'postgres',
			password: process.env.DB_PASSWORD || 'password',
            port: process.env.DB_PORT || 5432,
            ssl: process.env.DB_PORT || false
		};
		
		return result;
    }

    getHerokuConfig(): IDbConfig {
        var result: IDbConfig = {
            host: 'ec2-54-197-230-210.compute-1.amazonaws.com',
            database: 'darpfao7u8hb52',
            username: 'bcckrzizbplzua',
            password: '-C-a2oBbFsx6NymDyN4lPmWLWH',
            port: 5432,
            ssl: true
        };

        return result;
    }
}
export = DbConfig;