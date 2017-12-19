import { Injectable } from "@angular/core";

Injectable();

export interface Usuario{
    usuario_nome: string,
    usuario_senha: string,
    nomes: string[];
    ver: boolean;
    nome_botao: string;
    texto_usuario: string;
}
