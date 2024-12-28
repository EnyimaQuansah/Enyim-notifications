const mongoose = require("mongoose");
const User = require('./models/user'); // Adjust the path as necessary

async function insertUsers() {
    const users = [
        {
            id: "676e777f9f2d818fc356a03a", // Use _id as id
            username: "Daniel",
            email: "agudeydaniel8@gmail.com",
            role: "SHOP_OWNER"
        },
        {
            id: "676e79bc9f2d818fc356a045", // Use _id as id
            username: "Enyi",
            email: "quansahenyima@gmail.com",
            role: "USER"
        }
    ];

    try {
        await User.insertMany(users);
        console.log("Users inserted successfully");
    } catch (error) {
        console.error("Error inserting users:", error);
    }
}

// Connect to MongoDB and call insertUsers function
mongoose.connect('mongodb+srv://quansahenyima:WlD8hvf5zdoS2bOU@cluster0.wzjio.mongodb.net/notification?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Connected to MongoDB");
    insertUsers();
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});
