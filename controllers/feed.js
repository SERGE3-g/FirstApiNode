exports.getPosts = (req,res,next) => {
    res.json({ 
        posts : [
            {
                id : 1 ,
                title : 'first' , 
                description : 'il mio primo post sul server',
                image : 'images/duck.jpg',
                author: {
                    name : 'Serge'
                },
                creation_date : new Date()
            },
            {
                id : 2 ,
                title : 'first' , 
                description : 'il mio primo post sul server',
                image : 'images/duck.jpg',
                author: {
                    name : 'Serge'
                },
                creation_date : new Date()
            },
            {
                id : 3 ,
                title : 'first' , 
                description : 'il mio primo post sul server',
                image : 'images/duck.jpg',
                author: {
                    name : 'Guea'
                },
                creation_date : new Date()
            },{
                id : 4 ,
                title : 'first' , 
                description : 'il mio primo post sul server',
                image : 'images/duck.jpg',
                author: {
                    name : 'SergeGuea'
                },
                creation_date : new Date()
            },{
                id : 5 ,
                title : 'first' , 
                description : 'il mio primo post sul server',
                image : 'images/duck.jpg',
                author: {
                    name : 'Serge'
                },
                creation_date : new Date()
            },{
                id : 6 ,
                title : 'first' , 
                description : 'il mio primo post sul server',
                image : 'images/duck.jpg',
                author: {
                    name : 'Serge'
                },
                creation_date : new Date()
            },{
                id : 7 ,
                title : 'first' , 
                description : 'il mio primo post sul server',
                image : 'images/duck.jpg',
                author: {
                    name : 'Serge'
                },
                creation_date : new Date()
            }
        ]
    });
};


exports.createPosts = (req,res,next) => {
    const title = req.body.title;
    const description = req.body.description;

    //Salvo nel DB e torno il nuovo ID
    const ID = 1324; //back to DB

    res.status(201).json({ 
        messages : 'Post creato con successo',
        post : [
            {
                id : ID ,
                title : title , 
                description : description
            }
        ]
    });
};