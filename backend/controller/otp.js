import { OTP } from "../models/otp.js";

export const generateotp = async (req, res) => {
    function generateUnique() {
        const character = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let uniquecode = "";

        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * character.length);
            uniquecode += character.charAt(randomIndex);
        }
        return uniquecode;
    }

    try {
        const code =generateUnique()
        const otp = await OTP.findOne({code});

        if (!otp) {
            
            const op=await OTP.create({code})
            console.log("got otp",code);
            res.json({ code: code});
        }
        else
        {
           
            return res.status(409).json({
                message: "Generated code already exists in the database.",
                success: false,
            });
        }

        // Handle the case when the generated code already exists in the database
        // For example, generate a new code or return an error response.
       
    } catch (error) {
        res.status(401).json({
            message: "Something went wrong",
            success: false,
            user: req.user,
        });
        console.log(error);
    }
};
