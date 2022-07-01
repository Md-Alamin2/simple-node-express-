const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello From Node');

});

const users =[
    {id:0, name: "Md Alamin", Age: 19, email:"mdalaminn8733@gmail.com"},
    {id:1, name: "Rakib", Age: 19, email:"mdalaminn8733@gmail.com"},
    {id:2, name: "Srejon", Age: 19, email:"mdalaminn8733@gmail.com"},
    {id:3, name: "Shail", Age: 19, email:"mdalaminn8733@gmail.com"},
    {id:4, name: "Showrob", Age: 19, email:"mdalaminn8733@gmail.com"}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }    
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // console.log("hitting ", req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
    
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.listen(port, () => {
    console.log('listening to port', port);
})