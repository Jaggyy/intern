module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(error=>{
            res.status(400).json({
                status:"fail",
                data: error
            })
        });
    };
};