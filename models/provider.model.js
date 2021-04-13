module.exports = mongoose => {
    const Provider = mongoose.model(
        "provider",
        mongoose.Schema(
            {
                name: String,
            },
        )
    );

    return Provider;
};