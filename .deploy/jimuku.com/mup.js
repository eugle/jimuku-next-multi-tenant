module.exports = {
    servers: {
        one: {
            host: '49.4.95.113',
            username: 'root',
            password: 'Eugle2013+++',
            opts: {
                port: 22
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
                port: 22
            },
        }
    },
    app: {
        name: 'www.jimuku.com',
        path: '../../../', //项目源代码相对于当前文件对应的相对路径
        type: 'docker-image',
        volumes: {
            '/etc/localtime': '/etc/localtime', //配置docker容器时间为当前服务器时间（解决中国地区主机的UTC问题）
            '/home/wwwroot/next/domain/admin/data': '/data',
        },
        servers: {
            one: {},
            two: {},
            three: {}
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
        domains: 'www.jimuku.com',
        loadBalancing: true,
        ssl: {
            forceSSL: true,
            letsEncryptEmail: 'eugle@eugle.cn'
        }
    },
    plugins: ['mup-disk'],
};
