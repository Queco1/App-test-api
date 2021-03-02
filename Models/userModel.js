module.exports = (mongoose) => {
    const user = mongoose.model(
        'user',
        mongoose.Schema(
            {
                name: String,
                age: Number,
                maritalStatus: String,
                CPF: Number,
                state: String,
                city: String,
            },
            { timestamps: true },
        ),
    );

    return user;
};
