const { Router } = require('express');
const multer = require('multer');
const route = Router();
const path = require('path');

//import rutes to the api ( crud )
const { list, create, update, remove } = require('../controllers/controlle-book');

//config multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/', 'uploads'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

//midellwares
const upload = multer({
    storage,
    dest: path.join(__dirname, '../public/', 'uploads'),
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const minetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if (minetype && extname) {
            return cb(null, true);
        }

        cb("error , archivo o imagen no valida");
    }

}).single('pinture');

//routes
route.get('/', list);
route.post('/', upload, create);
route.put('/:id', upload, update);
route.delete('/:id', remove);

//export route for the server
export default route;

