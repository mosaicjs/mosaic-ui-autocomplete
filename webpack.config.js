module.exports = {
    entry : __dirname + '/index.js',
    output : {
        path : __dirname + '/dist',
        filename : 'index.js',
        libraryTarget : 'umd'
    },
    module : {
        loaders : [ {
            test : /\.jsx?$/,
            loader : 'babel'
        },{
            test : /\.less|\.css/,
            loader : "style-loader!css-loader!less-loader"
        } ],
        noParse : [ __dirname + '/node_modules/react' ]
    },
    externals : [ 'react', 'react-select', 'promise' ]
};
