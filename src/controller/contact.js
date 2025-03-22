const contact = require("../model/contact");

const userContact = async (req, res) => {
    try {
        console.log("Received request body:", req.body);

        const register = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message, 
        });

        const userdata = await register.save();
        console.log("Saved Contact Data:", userdata);
        res.status(201).json({ success: true, data: userdata });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error });
    }
};

const getContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error });
    }
};

module.exports= {userContact, getContact};