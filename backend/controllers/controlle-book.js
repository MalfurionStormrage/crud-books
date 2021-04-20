 const modell_book = require('../modells/modell_book');
const { errorHandler } = require('../helpers/errorHandler');
const { unlink } = require('fs-extra');
const path = require('path');

exports.list = async (req, res) => {
    try {

        const resultado = await modell_book.find();
        res.status(200).json(resultado);

    } catch (error) {

        res.status(400).json({
            message: 'error en la consulta'
        })
    }
}

exports.create = async (req, res) => {

    const { Title, Author, Description } = req.body;
    
    if(Title === "" || Author === "" || Description === "" || req.file === undefined) {
        return res.status(400).json({
            message: "No se puede realizar la solicitud"
        });
    }

    const pinture = '/uploads/' + req.file.filename;
    
    try {

        const newModell_book = new modell_book({ Title, Author, Description, pinture });
        const resultado = await newModell_book.save();

        res.status(200).json({ message: "ok"});

    } catch (error) {
        
        res.status(400).json({
            "message":errorHandler(error), 
        })

        unlink(path.resolve('./dist/public' + pinture));
    }
}

exports.update = async (req, res) => {
    try {

        const { Title, Author, Description } = req.body;
    
        if(Title === "" || Author === "" || Description === "" ) {
            return res.status(400).json({
                message: "No se puede realizar la solicitud"
            });
        }

        const resultado = await modell_book.findByIdAndUpdate(req.params.id, { Title, Author, Description }, { new: true });
        res.status(200).json({ message: "ok" });

    } catch (error) {

        res.status(400).json({
            message: errorHandler(error)
        })

    }
}

exports.remove = async (req, res) => {
    try {

        const resultado = await modell_book.findByIdAndDelete(req.params.id);
        unlink(path.resolve('./dist/public' + resultado.pinture));
        res.status(200).json({ message: "ok", resultado });

    } catch (error) {
        res.status(400).json({
            message: `error en la consulta , causa :  ${errorHandler(error)}`
        })
        
    }
}
