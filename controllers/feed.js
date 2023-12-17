const { validationResult } = require('express-validator/check');
const db = require('../utils/database');

exports.getPosts = (req,res,next) => {
   db.execute('SELECT * FROM users')
    .then(([rows,fieldData]) => {
        res.json({ users: rows})
    }).catch(
        err => console.log(err)
    );
};

exports.getPost = (req,res,next) => {
   const id = req.params.id;
   db.execute(' SELECT * FROM users WHERE users.id = ?',[id])
   .then(([rows,fieldData]) => {
        res.json({ USERS : rows})
   })
   .catch(
        err => console.log(err)
   ); 
};


exports.createPost = (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            message : 'Error input Parametri',
            error : errors.array()
        });
    }

    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const  nome = req.body.nome;
    //INSERT NEL DATABASE
    var newPost = db.execute('INSERT INTO users (title,description,image,nome) VALUES (?,?,?,?)',
    [title,description,image,nome])

    //console.log(newPost);
    //SALVO NEL DATABASE e genera ID
    newPost.then(newP => {
        const ID = newP[0].insertId;
        res.status(201).json({ 
            messages : 'Success Operation',
            post : { 
                id : ID,
                title : title,
                description : description,
                image : image,
                nome : nome
            }
        });
    }).catch( err => {
        return res.status(422).json({
            message : 'Error nel Salvataggio'
        });
    })

 
    
    
};