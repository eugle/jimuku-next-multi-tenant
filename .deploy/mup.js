/** @format */

module.exports = {
	servers: {
		one: {
			host: '49.4.95.113',
			username: 'root',
			password: 'Eugle2013+++',
			opts: {
				port: 22,
			},
		},
		two: {
		    host: '119.3.195.49',
		    username: 'root',
		    password: 'Eugle2013+++',
		    opts: {
		        port: 22
		    },
		},
		three: {
			host: '119.3.195.249',
			username: 'root',
			password: 'Eugle2013+++',
			opts: {
				port: 22,
			},
		},
	},
	app: {
		name: 'jimuku.com',
		path: '../', //项目源代码相对于当前文件对应的相对路径
		type: 'docker-image',
		volumes: {
			'/etc/localtime': '/etc/localtime', //配置docker容器时间为当前服务器时间（解决中国地区主机的UTC问题）
			'/home/wwwroot/next/domain/jimuku/data': '/data',
		},
		servers: {
			one: {},
			two: {},
			three: {},
		},
		deployCheckPort: 3002,
		env: {
			TOOL_NODE_FLAGS: '--max-old-space-size = 4096',
			PORT: 3002,
		},
		enableUploadProgressBar: true,
		deployCheckWaitTime: 600, //default 10部署完成后检查的等待时间（如果网络不是很好需要加大）
	},
	proxy: {
		domains: 'jimuku.com',
		// shared: {
		// 	env: {
		// 		DEFAULT_HOST: 'jimuku.com',
		// 	},
		// },
		loadBalancing: true,
		ssl: {
			forceSSL: true,
			// crt: './chain.crt', 使用自定义域名解决通配符问题没找到SSL通配符免费证书，先不启用子域名ssl，如果需要，手动添加一个mup配置指向3008并且使用ssl加密
			// key: './key.key',
			letsEncryptEmail: 'sz@eugle.cn',
		},
	},
	plugins: ['mup-disk'],
};
