const express = require('express');
var app = express();
var router = express.Router();
const multer = require('multer');
const testImages = require('./models/imageSchema');

testImages();
app.listen(3000, () => {
    console.log('started listening on port 3000');
  });
/////////////////////////////////////////////
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads/");

    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage });
/////////////////////////////////////////////////////
router.route('/img_data')
.post(upload.single('file'), function(req, res) {
    var new_img = new Img;
   
    new_img.img.data = fs.readFileSync(req.file.path)
    new_img.img.contentType = 'image/jpeg';
    new_img.save();
    res.json({ message: 'New image added to the db!' });
}).get(function(req, res) {
    Img.findOne({}, 'img createdAt', function(err, img) {
        if (err)
            res.send(err);
        // console.log(img);
        res.contentType('json');
        res.send(img);
    }).sort({ createdAt: 'desc' });
});