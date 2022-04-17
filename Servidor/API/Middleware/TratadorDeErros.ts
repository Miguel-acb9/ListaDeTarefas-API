// Importação de módulos e bibliotecas
import { Request, Response, NextFunction } from "express";

function TratadorDeErros(erro: Error, request: Request, response: Response, proximo: NextFunction) {
    if(erro instanceof Error) {
        return response.status(400).json({ Erro: erro.message });
    }
    return response.status(500).json({ Estado: "Erro", Mensagem: "Erro interno do servidor." });
}

export { TratadorDeErros };
