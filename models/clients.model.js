module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            phone: Boolean,
            providers: Object
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Client = mongoose.model("client", schema);
    return Client;
};