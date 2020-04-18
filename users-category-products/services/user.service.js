const uuidv1 = require('uuid/v1');
const _ = require("lodash");

const users = [];

class UserService {
    async getAllUser() {
        const userList = new Promise((resolve, reject) => {
            resolve(users);
        });
        const result = await userList;
        return result;
    }

    async createUser(user) {
        const promise = new Promise((resolve, reject) => {
            user.id = uuidv1();
            users.push(user);
            resolve(user);
        });
        const result = await promise;
        return result;
    }

    async updateUser(user) {
        const promise = new Promise((resolve, reject) => {
            const idx = _.findIndex(users, function (o) {
                return o.id == user.id;
            });
            users.splice(idx, 1, user);
            resolve(user);
        });
        const result = await promise;
        return result;
    }

    async deleteUser(userId) {
        const promise = new Promise((resolve, reject) => {
            const idx = _.findIndex(users, function (o) {
                return o.id == userId;
            });
            users.splice(idx, 1);
            resolve(userId);
        });
        const result = await promise;
        return result;
    }
}

module.exports = UserService;