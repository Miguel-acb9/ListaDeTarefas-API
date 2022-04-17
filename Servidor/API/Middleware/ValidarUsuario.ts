// Importação de módulos e bibliotecas
import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IPayload { sub: string; }

function ValidarUsuario(request: Request, response: Response, proxima: NextFunction) {
    const autenticacao = request.headers.authorization;
    if(!autenticacao) {  return response.status(401).end(); }
    const [, token] = autenticacao.split(" ");
    try {
        const { sub } = verify(token, "ChaveSecreta") as IPayload;
        request.id_usuario = sub;
        return proxima();
    }
    catch(erro) { return response.status(401).json({ Mensagem: "Token invalido." }); }
}

export { ValidarUsuario };