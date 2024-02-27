const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserController {
    async create(request = Request, response = Response){
        const { username, password, email } = request.body;

        const data = await prisma.user.create({
            data: {
                username: username,
                password: password,
                email: email
            }
        });

        return response.json(data);
    }

    async find(request = Request, response = Response){
        const params = request.params;

        const data = await prisma.user.findFirst({
            where: {
                id: parseInt(params.id)
            }
        });

        response.json(data);
    }

    async findAll(request = Request, response = Response){
        const { username } = request.body;

        const data = await prisma.user.findMany({
            where: {
                username: {
                    contains: username
                }
            },
            select: {
                id: true,
                username: true
            },
            orderBy: {
                username: 'desc'
            },
            take: 10
        });

        response.json(data);
    }

    async put(request = Request, response = Response){
        const { id, user } = request.body;

        const data = await prisma.user.update({
            data: user,
            where: {
                id: id
            }
        });

        response.json(data);
    }

    async delete(request = Request, response = Response){
        const { id } = request.body;

        const data = await prisma.user.delete({
            where: {
                id: id
            }
        });

        response.json(data);
    }
}

module.exports = UserController;