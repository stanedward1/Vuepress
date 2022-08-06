module.exports = {
    title: "longbiu的技术知识学习文档集",

    description: '无通用架构',

    theme: 'reco',

    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {
                text: '常用站点记录',
                items: [
                    {text: 'Github', link: 'https://github.com/stanedward1'},
                    {text: 'Gitee ', link: 'https://gitee.com/'},
                    {text: 'Blog', link: 'https://www.jiangnanshaojiu.com'},
                    {text: 'LeetCode', link: 'https://leetcode-cn.com/'},
                    {text: 'CodeTop', link: 'https://codetop.cc/home'},
                    {text: 'Nowcoder', link: 'https://www.nowcoder.com/'}
                ]
            }
        ],
        sidebar: [
            {
                title: 'Java',
                path: '/',
                collapsable: true,
                children: [
                    {title: "前言", path: "/java/brief"},
                    {title: "Java的基本程序设计结构", path: "/java/java_00"},
                    {title: "Java的对象与类", path: "/java/java_01"},
                    {title: "Java的继承", path: "/java/java_02"},
                    {title: "Java的接口与内部类", path: "/java/java_03"},
                    {title: "Java的异常，断言，日志和调试", path: "/java/java_04"},
                    {title: "Java的泛型", path: "/java/java_05"},
                    {title: "Java的集合", path: "/java/java_06"},
                    {title: "Java的多线程", path: "/java/java_07"},
                    {title: "RabbitMQ入门", path: "/java/rabbitmq_00"},
                    {title: "RabbitMQ核心部分", path: "/java/rabbitmq_01"}
                ]
            },
            {
                title: 'Database',
                path: '/',
                collapsable: true,
                children: [
                    {title: "前言", path: "/database/brief"},
                    {title: "Redis基础命令以及常用的五大数据类型", path: "/database/redis01"}
                ]
            },
            {
                title: 'Computer_Network',
                path: '/',
                collapsable: true,
                children: [
                    {title: "前言", path: "/computer_network/brief"},
                ]
            },
            {
                title: 'Structures_and_Algorithms',
                path: '/',
                collapsable: true,
                children: [
                    {title: "前言", path: "/structures_and_algorithms/brief"},
                ]
            },
            {
                title: 'Design Pattern',
                path: '/',
                collapsable: true,
                children: [
                    {title: "前言", path: "/design_patterns/designpatterns01_overview"},
                    {title: "单例模式", path: "/design_patterns/designpatterns02_singleton"},
                ]
            },
            {
                title: 'Linux',
                path: '/',
                collapsable: true,
                children: [
                    {title: "前言", path: "/linux/brief"},
                ]
            },
            {
                title: 'Middleware',
                path: '/',
                collapsable: true,
                children: [
                    {title: "前言", path: "/middleware/brief"},
                ]
            }
        ]
    }

}
