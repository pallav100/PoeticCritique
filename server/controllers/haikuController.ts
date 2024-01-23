import haikuGenerator from '../service/generateHaiku';
import haikuReviewer from '../service/reviewHaiku';
import { create } from "../database/dataAccessUtilities";
import { Request, Response } from 'express';
import { Prompt } from '../types/prompt';


/*** Get a new haiku from service that is built using APis from OpenAI */
const generateHaiku = async (req: Request,res: Response) => {
    try {
        /*** Get a new haiku from service that is built using APis from OpenAI */
        const promptResponse = await haikuGenerator();

        /*** We need to encode spacial chars before saving into DB, 
            SQL db doesn't support storing special chars */
        const specialCharsFreePromptResponse = escape(promptResponse);

        const newRecord: Prompt  = {
            "timestamp": new Date().getTime(),
            "prompt": "Generate a haiku",
            "model_response": specialCharsFreePromptResponse
        };
        create({table: "prompts", object: newRecord, callback: (success:Object | null, err: Error | null) => {
            if(success || promptResponse!=null){
                res.status(200).json({ promptResponse: promptResponse });

            } else if (err && promptResponse==null){
                console.log(`Error generating response: ${err.message}`);
                res.status(500).json({ promptResponse: promptResponse });
            }
        }})        
    } catch (error: any) {
        console.log(`Error getting response: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};


/*** Get review  on user haiku from service that is built on top of OpenAI */
const reviewHaiku = async (req: Request,res: Response) => {
        try {
            const {promptText} = req.body;
            if(!promptText || promptText == ""){
                res.status(500).json({ error: "prompt missing" });
            }
            /*** Get review  on user haiku from service that is built on top of OpenAI */
            const promptResponse = await haikuReviewer(promptText); 

            /*** We need to encode spacial chars before saving into DB, 
            SQL db doesn't support storing special chars */
            const specialCharsFreePromptResponse = escape(promptResponse);

            const newRecord : Prompt = {
                "timestamp": new Date().getTime(),
                "prompt": promptText,
                "model_response": specialCharsFreePromptResponse
            };

            create({table: "prompts", object: newRecord, callback: (success: Object | null, err: Error | null) => {
                
                if(success || promptResponse!=null){
                    res.status(200).json({ promptResponse: promptResponse });
    
                } else if (err && promptResponse==null){
                    console.log(`Error generating response: ${err.message}`);
                    res.status(500).json({ promptResponse: promptResponse });
                }
            }})   
        } catch (error: any) {
            console.log(`Error getting response: ${error.message}`);
            res.status(500).json({ error: error.message });
        }
    };
    export {
        reviewHaiku,
        generateHaiku
    }