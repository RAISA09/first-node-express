const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('peheli najar me kesa jadu 1245bhjj kar gya tera bin beta he mera giya, my love is first time use node')
});


const users = [
    { id: 0, name: "Rakib Hasan", email: "rh938664@gmail.com", phone: "01641300682" },
    { id: 1, name: "Abir Hasan", email: "Rakib938664@gmail.com", phone: "01641300682" },
    { id: 2, name: "Sabbir Hasan", email: "Sabbir@gmail.com", phone: "01641300682" },
    { id: 3, name: "Sumon Ahmed", email: "Sumon@gmail.com", phone: "01641300682" },
    { id: 4, name: "Saif Hasan", email: "Saif@gmail.com", phone: "01641300682" },
    { id: 5, name: "Mehedi Hasan", email: "Mehedi@gmail.com", phone: "01641300682" },
    { id: 6, name: "Atik Hasan", email: "Atik@gmail.com", phone: "01641300682" },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('amake onek data daw', req.body)
    res.json(newUser)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(["mango", "orange", "banana", "apple"])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammi yammi fazli test')
})

app.listen(port, () => {
    console.log('listening to port', port)
});