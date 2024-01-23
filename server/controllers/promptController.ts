import { get, getAll } from "../database/dataAccessUtilities";
import { Request, Response } from 'express';

/*** Get history of all the prompts - shows history of prompts from user*/
const getAllPrompts = async (req: Request, res: Response) => {
        try {
    
        await getAll({ table: "prompts", callback: (data: object | null, err: Error | null) => {
            if(data){
                res.status(200).json({ prompts: data });
            } else if(err){

                console.log(`Error getting prompts: ${err.message}`);
                res.status(500).json({ error: err.message });
            }
        }})
        } catch (error: any) {
            console.log(`Error getting prompts: ${error.message}`);
            res.status(500).json({ error: error.message });
        }
};

/*** Get a particular prompt messages - fetch an old prompt*/
const getPrompt = async (req: Request, res: Response) => {
        try {
        let condition = `ID = ${req.params.id}`;
        await get({ table: "prompts", condition, callback: (data: object | null, err: Error | null) => {
            if(data){
                res.status(200).json({ prompts: data });
            } else if(err){
                console.log(`Error getting prompts: ${err.message}`);
                res.status(500).json({ error: err.message });
            }
        }})
        } catch (error:any) {
            console.log(`Error getting prompts: ${error.message}`);
            res.status(500).json({ error: error.message });
        }
};
    
export {
    getAllPrompts,
    getPrompt
}