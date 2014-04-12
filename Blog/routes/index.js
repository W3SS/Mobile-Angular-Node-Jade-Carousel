exports.index = function(req, res){
	
    articleProvider.findAll( function(error,docs){
        res.render('index.jade', {
            title: 'Xpressionz blog',
            articles:docs
        });
    });
};
