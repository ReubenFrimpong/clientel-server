const {Schema} = require('mongoose');
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            client:{
                type: Schema.Types.ObjectId,
                ref: "Client"
            }
        },
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("provider", schema);
};