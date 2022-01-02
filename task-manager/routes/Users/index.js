const {Router} = require('express')
const router = Router()
const auth = require('../../middleware/auth')
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
    const token = await newUser.generateAuthToken()
    res.status(201).send({newUser, token})
}catch(e){
    res.status(400).send(e)
}
})

router.post("/users/login", async (req, res)=>{
    try{
      let user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(400).send()
        console.log(e)
    }
})


router.get("/users/me", auth, async (req, res)=>{
    try{
        const user = req.user
    if(!user){
        return res.status(404).send();
    }
    res.status(200).send(user);
    }catch(e){
        res.status(404).send(e);
    }
    })
    
    
router.post("/users/logout", auth, async (req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})


router.post("/users/logoutall", auth, async (req, res)=>{
    try{
        // req.user.tokens = req.user.tokens.filter((token)=>{
        //     return token.token !== token.token
        // })
        //Both identical but this is less wordy
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})
    // router.get("/users/:id", auth, async(req,res)=> {
    //     let id = req.params.id;
    //     try{
    //         const user = await User.findById(id)
    //         console.log(user)
    //         if(!user){
    //             return res.status(404).send()
    //         }
    //         res.send(user)
    //     }catch(e){
    //         res.status(500).send()
    //     }
    // })
    
    

    
    router.patch("/users/me", auth, async(req,res)=>{
        let updates = Object.keys(req.body)
        let allowedUpdates = ['name','age','password']
        let isTrue = updates.every((update)=> allowedUpdates.includes(update))
        if(!isTrue){
            return res.status(400).send()
        }
            try{
             
                // let user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidator:true})
                // let user = await User.findById(req.params.id)
                updates.forEach((x)=>req.user[x] = req.body[x])
                await req.user.save()
             
                //  if(!user){
                //      return res.status(404).send()
                //  }
                 res.send(req.user)
            }catch(e){
                res.status(400).send(e)
            }
        })
        
    router.delete("/users/me", auth,  async(req,res)=>{
        try{
            // const user = await User.findByIdAndDelete(req.params.id)
            // if(!user){
            //     return res.status(404).send()
            // }
            await req.user.remove()
            res.send(req.user)
        }catch(e){
            res.status(500).send()
        }
    })
    
    module.exports = router