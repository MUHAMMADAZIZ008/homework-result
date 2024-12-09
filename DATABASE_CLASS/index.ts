class Database {
    T: { id: number }[];
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;

    constructor(T: { id: number }[], user: string, password: string, host: string, port: number, database: string) {
        this.T = T;
        this.user = user;
        this.password = password;
        this.host = host;
        this.port = port;
        this.database = database;
    }

    connect(): string {
        return `Connection to ${this.database}`;
    }

    disconnect(): string {
        return `Disconnected from ${this.database}`;
    }

    create(data: object): string {
        const id = this.T.length + 1;
        this.T.push({ id, ...data });
        return 'Created';
    }

    read(): object[] {
        return this.T;
    }

    update(id: number, data: object): string {
        const index = this.T.findIndex(item => item.id === id);
        if (index !== -1) {
            this.T[index] = { ...this.T[index], ...data };
            return 'Data is updated';
        }
        return 'Data not found';
    }

    delete(id: number): string {
        const index = this.T.findIndex(item => item.id === id);
        if (index === -1) {
            return 'User not found';
        }
        this.T.splice(index, 1);
        return 'Data is deleted';
    }
}

class MongoDB extends Database {
    constructor(T: { id: number }[], user: string, password: string, host: string, port: number, database: string) {
        super(T, user, password, host, port, database);
    }
}

const users: { id: number; username?: string; age?: number }[] = [];
const connection1 = new MongoDB(users, 'mongodb', 'qwer', 'localhost', 5432, 'market');

connection1.create({
    username: 'Muhammadaziz',
    age: 16
});
console.log(connection1.read());

console.log(connection1.update(1, {
    username: "aziz"
}));
console.log(connection1.read());
