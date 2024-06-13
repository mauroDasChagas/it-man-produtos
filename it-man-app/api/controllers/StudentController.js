/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        const { name, age, email } = req.body;
        const student = await Student.create({ name, age, email }).fetch();
        return res.json(student);
    },

    read: async function (req, res) {
        const students = await Student.find();
        return res.json(students);
    },

    update: async function (req, res) {
        const { id, name, age, email } = req.body;
        const student = await Student.updateOne({ id }).set({ name, age, email });
        return res.json(student);
    },

    delete: async function (req, res) {
        const { id } = req.body;
        await Student.destroyOne({ id });
        return res.json({ message: 'Student deleted' });
    },
};

