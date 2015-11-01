/// <reference path='../../_references.ts' />
import Sequelize = require('sequelize');
import DbConfig = require('./DbConfig');

class DbConnecton {
    static create() {
        var config = new DbConfig().get();
		
		var sequelize = new Sequelize(config.database, config.username, config.password, {
			host: config.host,
			dialect: 'postgres',
			port: config.port,
			pool: {
				//max: 10,
				//min: 0,
				//idle: 10000
            }
            //dialectOptions: {
            //    ssl: config.ssl
            //}
			// SQLite only
			//storage: '../sqllite'
		});
		
		return sequelize;
	}
}

export = DbConnecton;