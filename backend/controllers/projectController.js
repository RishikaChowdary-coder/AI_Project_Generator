const generateIdea =
require("../services/gemini");

exports.generateProject =
async (req, res) => {

    try {

        const {
            studentName,
            branch,
            year,
            domain,
            difficulty
        } = req.body;

        const project =
        await generateIdea(
            studentName,
            branch,
            year,
            domain,
            difficulty
        );

        res.json({
            success: true,
            project
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};