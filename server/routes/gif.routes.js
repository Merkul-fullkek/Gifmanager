// роут на аплоуд файла,в реквесте файл инстанс модели,конвертит файл в base64 POST /upload
// GET / модельки на фронт
// GET /gifs/my личные гифки
// POST /gifs/{id(gif)}/like лайк гифки
const {Router} = require('express');
const config = require('config');
const Gif = require('../models/Gifs');
const auth = require('../middleware/auth.middleware');
const user = require('../middleware/user.middleware');

const router  = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
    // list all elements db
    try {
       const gifs = await Gif.find({});
       res.json(gifs);
    } catch (e) {
        res.status(500).json({ message:'Something went wrong' });
    }
});

router.get('/:id', async (req, res) => {
    try {
       const gif = await Gif.findById(req.params.id);
       res.json(gif);
    } catch (e) {
        res.status(500).json({ message:'Something went wrong' });
    }
});

router.post('/upload', auth, upload.single('file'), async (req, res) => {
    try {
        const gif = await Gif.create({
            filename: req.file.originalname,
            filepath: req.file.filename,
            owner: req.user._id
        });

        res.json(gif);
    } catch (e) {
        res.status(500).json({ message:'Something went wrong' });
        console.error(e);
    }
});

router.get('/my', auth, async (req, res) => {
    try {
        const gifs = await Gif.find({ owner: req.user._id });
        res.json(gifs);
    } catch (e) {
        res.status(500).json({ message:'Something went wrong' });
    }
});

module.exports = router;
