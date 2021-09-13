export class UserModel {
    constructor(public id: number,
                public name: string,
                public apellido: string,
                public correo: string,
                public domicilio: string,
                public nacimiento: string,
                public password: string,
                public level: number,
                public horario: number,
                public foto: string) {}
}
