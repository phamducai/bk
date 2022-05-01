
import postUser from '../connect/Model.js'
// Save data of the user in database
export const addUser = async (request, response) => {
    const user = request.body;
    console.log(user)
    const newUser = new postUser(user);
    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}
export const getUser = async (request, response) => {

    try {
        const users = await postUser.find()
        response.status(200).json(users);
        console.log(response)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}