import { Hono } from "hono";
import type { User } from "./src/model/user.ts";

const app = new Hono()

let data: User[] = []
let id = 1

app.get("/home", async c => {
    c.header("mensagem-customizada",  "Bom dia, boa tarde, boa noite e boa madruga pra você")
  
    return c.html("Boa tarde!")
})

app.get("/informacoes", async c => {
    return c.json(data)
})

app.post("/usuario", async c => {
    const obj = await c.req.json()
    obj.id = id
    id++
    data.push(obj)
    return c.json({status: "recebido"}, 201)
})

app.get("/usuario/:id{[0-9]+}", async c => {
    let pid: any = c.req.param("id")
    pid = Number(pid)

    for (let obj of data) {
        if(obj.id === pid) {
         return c.json (obj, 200)
         
        }
    return c.json({status:"não encontrado"}, 404)
    }

    return
})

app.delete("/usuario/:id{[0-9]+}", async c=> {
    let pid:any = c.req.param("id")
    pid = Number(pid)

    const index = data.findIndex((v) => {
        return v.id === pid
    })
    
    if (index === -1)
        return c.json({status: "não encontrado"}, 404)

    data = data.splice(index, 1)

    return c.json({status: "deletado"}, 200)

})

export default app