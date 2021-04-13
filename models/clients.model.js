const {Schema} = require('mongoose');

module.exports = mongoose => {
            const Client = mongoose.model(
                "client",
        mongoose.Schema(
            {
                name: String,
                email: String,
                phone: String,
                providers:[{
                    type: Schema.Types.ObjectId,
                    ref: 'provider',
                }]
            },
        )
    );

    return Client;
};