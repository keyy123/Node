const {Router} = require('express')
const router = Router()
const User = require("../../model/user")


router.post("/users", async (req,res)=>{
    // newUser.save().then((user)=>{
    //     if(!user){
    //         res.status(400).send()
    //     }
    //     res.status(201).send(user)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })
const newUser = new User(req.body)
try{
    await newUser.save()
    res.status(201).send(newUser)
}catch(e){
    res.status(400).send(e)
}
})

router.post("/users/login", async (req, res)=>{
    try{
      let user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    }catch(e){
        res.status(400).send()
        console.log(e)
    }
})


router.get("/users", async (req, res)=>{
    try{
        const users = await User.find(req.body);
    if(!users){
        return res.status(404).send();
    }
    res.status(200).send(users);
    }catch(e){
        res.status(404).send(e);
    }
    })
    
    
    router.get("/users/:id", async(req,res)=> {
        let id = req.params.id;
        try{
            const user = await User.findById(id)
            console.log(user)
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        }catch(e){
            res.status(500).send()
        }
    })
    
    

    
    router.patch("/users/:id", async(req,res)=>{
        let updates = Object.keys(req.body)
        let allowedUpdates = ['name','age','password']
        let isTrue = updates.every((update)=> allowedUpdates.includes(update))
        if(!isTrue){
            return res.status(400).send()
        }
            try{
             
                // let user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidator:true})
                let user = await User.findById(req.params.id)
                updates.forEach((x)=>user[x] = req.body[x])
                await user.save()
             
                 if(!user){
                     return res.status(404).send()
                 }
                 res.send(user)
            }catch(e){
                res.status(400).send(e)
            }
        })
        
    router.delete("/users/:id", async(req,res)=>{
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        }catch(e){
            res.status(500).send()
        }
    })
    
    module.exports = router