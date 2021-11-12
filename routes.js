const express = require('express')
const routes = express.Router()



routes.get('/', (req,res)=>{
   req.getConnection((err, conn)=>{
       if(err) return res.send(err)

       conn.query('SELECT * FROM tasks', (err, rows)=>{
        if(err) return res.send(err)

        res.json(rows)
       })
   })
})

routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
 
        conn.query("INSERT INTO tasks set ?",[req.body] , (err, rows)=>{
         if(err) return res.send(err)
         
 
        res.send("La tarea ha sido añadida")
        })
    })
 })



 routes.delete('/:id', (req,res)=>{
   
    req.getConnection((err, conn)=>{
      
        if(err) return res.send(err)
 
        conn.query("DELETE FROM tasks  WHERE task_id = ?",[req.params.id] , (err, rows)=>{
            
         if(err) return res.send(err)
         
 
        res.send("La tarea ha sido eliminada")
        })
    })
 })



 
 routes.put('/:id', (req,res)=>{
   
    req.getConnection((err, conn)=>{
      
        if(err) return res.send(err)
 
        conn.query("UPDATE tasks set ? WHERE task_id = ?",[req.body, req.params.id] , (err, rows)=>{
            
         if(err) return res.send(err)
         
 
        res.send("La tarea ha sido modificada")
        })
    })
 })

 

module.exports = routes