const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var cors = require('cors');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const path = require("path");

var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false })); //request goes to the server in the url encoded form
app.use(bodyParser.json()); // response data should be in json format
app.use(methodOverride());
app.use(cors());
app.use(fileUpload());

var publicDir = require('path').join(__dirname,'/uploads/..');
app.use(express.static(publicDir));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'arulyan',
    password: 'forza',
    database: 'hospital-app-october'
});

con.connect(function (error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }

});

//Common Problems
app.get('/comprobs', (req, res) => {
    var com = "select * from comprobs";
    con.query(com, (err, rows) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

//Possible Diseases
app.post("/commonprobdiseases", verifyToken, (req, res) => {
    const name = req.body.nam;
    var prob = 'select * from comdiseases where (Category) = ("' + name + '")';
    con.query(prob, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            res.json(result);
            console.log(result);
        }
    })
})


//User SignUp
app.post('/UserSignUp', (req, res) => {

    // var forma = {
    //     Pass: req.body.pass1,
    //     Email: req.body.email1,
    //     Num: req.body.num2,
    //     Bg: req.body.bg1,
    //     Add: req.body.add1,
    //     Name: req.body.name1,
    //     Pm: req.body.pm1,
    //     Gen: req.body.gen1,
    //     Age: req.body.age,

    // }

    console.log(JSON.stringify(req.body));
    var Pass = req.body.pass1;
    var Email = req.body.email1;
    var Num = req.body.num2;
    var Bg = req.body.bg1;
    var Add = req.body.add1;
    var Name = req.body.name1;
    var Pm = req.body.pm1;
    var Gen = req.body.gen1;
    var Age = req.body.age;

    bcrypt.hash(Pass, saltRounds, function (err, hash) {
        //Files Start from here//
        if (req.files) {
            var file = req.files.filename;
            var fileName = Date.now() + '-' + file.name;
            var extension = path.extname(file.name);

            const host = req.hostname;
            const filePath = req.protocol + "://" + host + ':3000' + '/' + 'uploads' + '/' + fileName;

            if ((extension == '.png' || extension == '.jpeg' || extension == '.jpg' || extension == '.jfif')) {
                file.mv('./uploads/' + fileName, (err) => {
                    if (err) {
                        console.log("Error:" + err);
                        res.send({ "code": 204, "success": err })
                    }
                    else {
                        var sql = 'INSERT INTO userinfo (NAME,EMAIL,PASSWORD,AGE,CONTACT,BLOOD,ADDRESS,MEDICATION,GENDER,Image) VALUES ("' +Name + '","' +Email + '","' + hash + '","' +Age + '","' +Num + '","' +Bg + '","' +Add + '","' +Pm + '","' +Gen + '","'+filePath+'")';
                        con.query(sql, function (err, result) {
                            if (err) throw err;
                            console.log("1 record inserted");
                        });
                        res.send({ "success": "File has been Uploaded!", "code": 200 })
                    }
                })
            }
            else {
                res.send("Please send an image file!")
            }
        }
        else {
            return res.status(400).send('No files were uploaded');
        }
        //Files End Here!//
    });
});

//Show User Detials
app.post("/userDetails", (req, res) => {
    var mail = req.body.mail;
    let sql = 'SELECT * from userinfo where email="' + mail + '"';
    con.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                status: 400
            })
        }
        else {
            console.log(results);
            res.json(results);
        }
    })
})

//User Login
app.post("/login", (req, res) => {
    var mail = req.body.email1;
    var pass = req.body.pass1;
    var queryy = 'SELECT * from userinfo where EMAIL="' + mail + '"';

    con.query(queryy, (err, result) => {
        if (err)
            console.log(err)
        // res.send('Insert success.');
        else {
            console.log(result);
            if (result.length == 0) {
                res.json({
                    status: 404,
                    success: false
                })
            }
            else if (result.length == 1) {
                console.log(result[0].PASSWORD);
                bcrypt.compare(pass, result[0].PASSWORD, function (err, ans) {
                    console.log(ans);
                    if (ans == true) {
                        let token = jwt.sign({ username: result[0].NAME }, 'secret', { expiresIn: '1h' });
                        console.log("Login token:" + token + "\n");
                        return res.status(200).json(token);
                        // res.json({
                        //     status: 200,
                        //     success: true
                        // })
                    }
                    else {
                        res.json({
                            status: 400,
                            success: false
                        })
                    }
                });
            }
            else {
                res.json({
                    status: 400,
                    success: false
                })
            }
        }
    })
})

//Login for Doctors
app.post("/logindoctor", (req, res) => {
    var Email = req.body.email21;
    var Cont = req.body.pass21;
    var sql = 'select * from docinfo where (email) = ("' + Email + '")';
    con.query(sql, (err, result) => {
        if (result.length) {
            if (result[0].password == Cont) {
                console.log(result);
                res.json(result);

            }
            else {
                res.json({
                    success: false,
                    status: 400
                })
            }
        }
        else {
            console.log(Email);
            res.json({
                success: false,
                status: 400
            })
        }
    })
})


//Add a new article
app.post('/addstory', (req, res) => {
    var title = req.body.title1;
    var story = req.body.story1;
    var imgs = req.body.imgs1;
    var sql = 'INSERT INTO article (title,story,imgs) VALUES ("' + title + '","' + story + '"," ' + imgs + ' ")';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 story inserted");
    });

});


//Show Articles
app.get('/showArticles', verifyToken, (req, res) => {
    var sql = 'SELECT * FROM article';
    con.query(sql, function (err, result) {
        res.send(result)
        console.log(sql);
    });
})

//Token Verification
var decodedToken = '';
function verifyToken(req, res, next) {
    let token = req.query.token;
    jwt.verify(token, 'secret', function (error, tokendata) {
        if (error) {
            console.log("ErrorVerifyFunctionToken:" + token + "\n");
            // console.log(req.params.token);
            return res.status(400).json({ message: 'Unauthorized request' });
        }
        if (tokendata) {
            console.log("Verified TokenData:" + token);
            decodedToken = tokendata;
            next();
        }
    })
}

//Show Doctors for the current Specialization
app.post('/showDocs', verifyToken, (req, res) => {
    const spe = req.body.speciali;
    let sql = 'select * from docinfo where (specialization) = ("' + spe + '")';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(rows);
            console.log(spe);
            console.log(rows);
        }
    })
})

//View the Appointments booked with doctor (User-Side)
app.post('/showAppointmentsWithDoctor', (req, res) => {
    const userEmail = req.body.userEmail;
    let sql = 'select * from booked where (email) = ("' + userEmail + '") and prescription is null';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            req.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

//show history
app.post('/history', verifyToken, (req, res) => {
    const userEmail = req.body.userEmail;
    let sql = 'select * from booked where (email) = ("' + userEmail + '") and prescription is not null';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            req.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

//show Available Slots --> to be deleted (NOT IN USE)
app.post('/slots', (req, res) => {
    var doc = req.body.doco;
    var day = req.body.day;
    let sql = 'select time from appointment where (docname)=("' + doc + '") and (day)=("' + day + '") and (slot) = 0';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            req.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

//Slot Booking + Details of Patient
app.post("/booked", (req, res) => {
    const specialization = req.body.special;
    const tableName = req.body.docName;
    const username = req.body.username;
    const email = req.body.email;
    const contact = req.body.contact;
    const month = req.body.month;
    const day = req.body.day;
    const weekday = req.body.weekday;
    const time = req.body.time;
    const mobId = req.body.mobId;
    let sql = 'select * from ' + tableName + ' where (email) = ("' + email + '")';
    con.query(sql, (err, rows) => {
        if (err) {
            res.json({
                success: false,
                status: 401
            })
        }
        if (rows.length) {
            console.log("You Already have appointments to complete!");
            res.json({
                success: false,
                status: 451
            })
        }
        else {
            // INSERTING IN DOC TABLE
            let sql = 'update ' + tableName + ' set username = "' + username + '", email = "' + email + '", contact = "' + contact + '", month = "' + month + '", day = "' + day + '" where time = "' + time + '" and weekday = "' + weekday + '"';
            con.query(sql, (err, rows) => {
                if (err) {
                    console.log(tableName + "\n" + username + "\n" + email + "\n" + contact + "\n" + month + "\n" + day + "\n" + weekday + "\n" + time);
                    res.json({
                        success: false,
                        status: 401
                    })
                }
                else {
                    //INSERTING IN BOOKED TABLE
                    console.log("Inserted in Doc TAble!");
                    let sql2 = 'insert into booked (username,email,contact,month,day,weekday,docname,time,mobile) values ("' + username + '","' + email + '"," ' + contact + ' ","' + month + '","' + day + '","' + weekday + '","' + tableName + '","' + time + '","' + mobId + '")'
                    con.query(sql2, (err, rows) => {
                        if (err) {
                            console.log("Booked Page Triggered!:", err);
                            res.json({
                                success: false,
                                status: 401
                            })
                        }
                        else {
                            console.log("Details of Booking Added! to Booked Table!");
                            res.json(rows);
                        }
                    })
                }
            })
        }
    })
})


//cancel appointment with doctor
app.post('/cancel', (req, res) => {
    const docName = req.body.docName;
    const email = req.body.email;
    const month = req.body.month;
    const day = req.body.day;
    const weekday = req.body.weekday;
    let sql = 'select * from ' + docName + ' where (email) = ("' + email + '")';
    con.query(sql, (err, rows) => {
        if (err) {
            res.json({
                success: false,
                status: 401
            })
        }
        if (rows.length) {
            console.log("so u do have a pending appointment with the doctor");
            let sql = 'update ' + docName + ' set username = null, email = null, contact = null, month = null, day = null where weekday = "' + weekday + '"';
            con.query(sql, (err, rows) => {
                if (err) {
                    res.json({
                        success: false,
                        status: 401
                    })
                }
                else {
                    //DELETING IN BOOKED TABLE
                    let sql2 = 'delete from booked where (email) = "' + email + '" and (month) = "' + month + '" and (day) = "' + day + '"';
                    con.query(sql2, (err, rows) => {
                        if (err) {
                            console.log("Booked row to be deleted possed and err but Triggered!:", err);
                            res.json({
                                success: false,
                                status: 401
                            })
                        }
                        else {
                            console.log("Row successfully deleted");
                            res.json({
                                success: true,
                                status: 200
                            });
                        }
                    })
                }
            })
        }
        else {
            res.json({
                success: false,
                status: 404
            })
        }
    })
})


//Show available Slots
app.post('/showSlots', verifyToken, (req, res) => {
    const tableName = req.body.docName;
    var weekday = req.body.weekday;
    let sql = 'select time from ' + tableName + ' where (weekday)="' + weekday + '" and username is NULL';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            req.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

//Show Slots for Doctor --> This is a whole copy of the above slots api
app.post('/showSlotsToDoctor', (req, res) => {
    const tableName = req.body.docName;
    var weekday = req.body.weekday;
    let sql = 'select time from ' + tableName + ' where (weekday)="' + weekday + '" and username is NULL';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            req.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

//Show Appointments to Doctor
app.post('/showAppointments', (req, res) => {
    const docName = req.body.docName;
    const weekday = req.body.weekday;
    let sql = 'select * from ' + docName + ' where (weekday)="' + weekday + '" and username is not null';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

//Appointment Slots + Booking Details -->to be deleted! (NOT IN USE)
app.post("/slotBooking", (req, res) => {
    const tableName = req.body.docName;
    const username = req.body.username;
    const email = req.body.email;
    const contact = req.body.contact;
    const month = req.body.month;
    const day = req.body.day;
    const weekday = req.body.weekday;
    const time = req.body.time;
    // let sql = 'update ("'+tableName+'") set (username) = ("'+username+'"), (email) = ("'+email+'"), (contact) = ("'+contact+'"), (month) = ("'+month+'"), (day) = ("'+day+'"), (weekday) = ("'+weekday+'") where (time) = ("'+time+'") ';
    let sql = 'update ' + tableName + ' set username = "' + username + '", email = "' + email + '", contact = "' + contact + '", month = "' + month + '", day = "' + day + '" where time = "' + time + '" and weekday = "' + weekday + '"';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(tableName + "\n" + username + "\n" + email + "\n" + contact + "\n" + month + "\n" + day + "\n" + weekday + "\n" + time);
            res.json({
                success: false,
                status: 401
            })
        }
        else {
            console.log("Details of Booking Added!");
            res.json(rows);
        }
    })
})

//Doc Side -->Add prescription
app.post("/pres", (req, res) => {
    const docName = req.body.docName;
    const prescription = req.body.pres;
    const day = req.body.day;
    const email = req.body.email;
    let sql = 'update booked set prescription = "' + prescription + '" where day = "' + day + '" and docname = "' + docName + '" and email = "' + email + '"';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 401
            })
        }
        else {
            console.log("prescription written!");
            let sql2 = 'update ' + docName + ' set username = null, email = null, contact = null, month = null, day = null where day = "' + day + '" and email = "' + email + '"';
            con.query(sql2, (err, results) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 402
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                }
            })
        }
    })
})

//Delete Slot (Doctor Side)
app.post("/deleteSlot", (req, res) => {
    const docName = req.body.docName;
    const weekday = req.body.weekday;
    const time = req.body.time;
    let sql = 'delete from ' + docName + ' where (weekday)="' + weekday + '" and (time)="' + time + '"';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            throw err;
        }
        else {
            res.json({
                success: true,
                status: 200
            })
        }
    })
})

//Add a new slot (Doctor Side)
app.post("/addSlot", (req, res) => {
    const docName = req.body.docName;
    const weekday = req.body.weekday;
    const time = req.body.time;
    let sql = 'insert into ' + docName + ' (weekday,time) values ("' + weekday + '","' + time + '")';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            throw err;
        }
        else {
            res.json({
                success: true,
                status: 200
            })
        }
    })
})

app.post("/getDocInfo", (req,res) => {
    const docName = req.body.docName;
    let sql = 'select * from docinfo where (docname)="'+docName+'"';
    con.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);
        }
    })
})

const port1 = process.env.PORT || 3000;
var server = app.listen(port1, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http:%s//:%s", host, port);
})