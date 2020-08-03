import express from 'express';
import multer from 'multer';
import path from 'path';



const storage = multer.diskStorage({
  destination: `./frontend/public/uploads/`,
  filename(req, file, cb) {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.filename}`);
});

router.put('/', upload.single('pdf'), (req, res , next) => {
  res.send(`/${req.file.filename}`);
})

export default router;
