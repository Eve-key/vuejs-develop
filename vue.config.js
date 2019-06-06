//この中で複数のhtmlファイルを管理する
module.exports = {
    pages: {
        index: {
            entry: 'src/entry-point/index/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        },
        office: {
            entry: 'src/entry-point/office/main.ts',
            template: 'public/office.html',
            filename: 'office.html'
        }
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{
                    from: /\/index/,
                    to: '/index.html'
                },
                {
                    from: /\/office/,
                    to: '/office.html'
                }
            ]
        }
    }
}