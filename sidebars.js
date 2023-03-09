module.exports = {
    mySidebar: [
        "Home", {
            type: "category",
            label: "Sidebar",
            link: {
                type: "doc",
                id: "xuexi_index"
            },
            items: [
                {
                    type: "autogenerated",
                    dirName: "学习资料", // 从 docs/tutorials/easy 生成侧边栏切片
                },

            ]
        }, {
            type: 'category',
            label: '评审相关',
            link: {
                type: 'generated-index'
            },
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: '评审相关'
                },
            ]
        }, {
            type: 'category',
            label: '质量管理体系基础',
            link: {
                type: 'generated-index'
            },
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: '质量管理体系基础'
                },
            ]
        },
    ]
};
