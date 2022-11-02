import express, {Request,Response,Application} from 'express';
import RomanNumerals from "./RomanNumerals";

const app:Application = express();
const PORT = process.env.PORT || 8000;
const path = require('path');

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/getRoman', function (req, res){
    const checkNumber = req.query.numberInput as string;
    const number = parseInt(checkNumber,10);
     res.render(path.join(__dirname, '/index.html'), {input: number,result: RomanNumerals.roman(number)});
})

app.use(function(err: { status: any; message: any; }, req: any, res: { status: (arg0: any) => void; render: (arg0: any, arg1: { message: any; error: {}; }) => void; }, next: any) {
    res.status(err.status || 500);
    res.render(path.join(__dirname, '/error.html'), {
        message: err.message,
        error: {}
    });
});
app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
