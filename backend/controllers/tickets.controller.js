const jsend = require("jsend");
const { reset } = require("nodemon");
const TicketModel = require("../model/ticketModel");

exports.create = (req,res)=>{

    const newTicket = new TicketModel({
        
        issue: req.body.issue,
        priority: req.body.priority,
        summary: req.body.summary,
        assignee: req.body.assignee,
        description:  req.body.description    
    });

    newTicket.save();
    res.status(201).send(
        jsend(201, {
            newTicket
        })
    );
    console.log(newTicket);
};

exports.getAll = (req,res)=>{

    TicketModel.find({}).then(docs=>{

        if(docs.length ===0){
            return res.status(404).send(
                jsend(404,{
                    message:'Empty list of documents!',
                })
            );
        }
        res.send(docs);

    }) .catch((err)=> console.log(err.mesage));
}

exports.getById =(req,res)=>{

    TicketModel.findOne({_id:req.params.ticketID})
    .then((ticket)=>{
        if(!ticket){
            return res.status(404).send(
                jsend(404,{
                    message:'Ticket not found!',
                })
            );
        }
        res.status(200).send(
            jsend(200, {
                ticket,
            })
        );

    })
    .catch((err)=>{
        reset.status(404).send(
            jsend(404, {
                message: "Ticket not found!",
            })
        );
    });

};

exports.patchById =(req,res)=>{
    
    TicketModel.findOneAndUpdate({_id: req.params.ticketId}, req.body)
    .then((ticket)=>{
        if(!ticket){
            return res.status(404).send(
                jsend(404, {
                    message:"Ticket not found!",
                })
            );
        }
        res.status(200).send(
            jsend(200, {
                ticket,
            })
        )
    })
    .catch((err)=>{
        res.status(404).send(
            jsend(404, {
                message:"Ticket not found!",
            })
        )
    })
}
exports.delete=(req,res)=>{
    TicketModel.findOneAndDelete(
        {_id:req.params.productId},
        (err, ticket)=>{

            if(err){
                return res.status(500).send(
                    jsend(500, {
                        message: "Ann error occured and the ticket could not be found!",
                    })
                )
            }
            if(!ticket){
                return res.status(404).send(
                    jsend(404,{
                        mesage: "Product not found!",
                    })
                );
            }
             res.status(200).send(
                jsend(200,{
                    product,
                })
             );
        }
    );
};