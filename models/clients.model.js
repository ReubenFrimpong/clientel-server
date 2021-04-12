const {Schema} = require('mongoose');
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            phone: String,
            providers:[{
                id:{
                    type: Schema.Types.ObjectId,
                    ref: 'Provider',
                }
            }]
        },
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("client", schema);
};
