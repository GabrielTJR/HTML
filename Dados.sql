-- Criação do Schema
create schema mae_bebe;
use mae_bebe;

create table estado(
    id int primary key auto_increment,
    nome varchar(50),
    uf varchar(2)
);

create table cidade(
    id int primary key auto_increment,
    nome varchar(50),
    id_estado int,
    foreign key (id_estado) references estado (id)
);

create table endereco(
    id int primary key auto_increment,
    id_cidade int,
    logradouro varchar(100),
    numero int,
    bairro varchar(50),
    cep varchar(9),
    complemento varchar(100),
    ponto_referencia varchar(100),
    foreign key (id_cidade) references cidade (id)
);

create table mae(
    id int primary key auto_increment,
    nome varchar(50),
    data_nascimento date,
    id_endereco int,
    foreign key (id_endereco) references endereco (id)
);

create table telefone(
    id int primary key auto_increment,
    id_mae int,
    numero varchar(15),
    tipo tinyint(1),
    foreign key (id_mae) references mae (id)
);

create table especialidade(
    id int primary key auto_increment,
    nome varchar(100)
);

create table medico(
    crm int primary key not null,
    nome varchar(150),
    celular varchar(15),
    id_especialidade int,
    foreign key (id_especialidade) references especialidade (id)
);

create table bebe(
    id int primary key auto_increment,
    nome varchar(150),
    crm_medico int,
    id_mae int,
    data_nascimento datetime,
    peso decimal(5,3),
    altura tinyint,
    foreign key (crm_medico) references medico (crm),
    foreign key (id_mae) references mae (id)
);

insert into estado (nome,uf) values ('Ceará','CE'), ('Santa Catarina', 'SC'), ('Paraná', 'PR');

insert into cidade (nome, id_estado) values ('Fortaleza','1'), ('Camboriú', '2'), ('Curitiba', '3');

insert into endereco (id_cidade, logradouro, numero, bairro, cep) values ('1','Rua VIII', '162', 'Serrinha', '60744890'), ('2','Santa bárbara', '52', 'Rio Pequeno', '88343229'), ('3','Marechal', '500', 'Centro', '80054621');

insert into mae (id_endereco, nome, data_nascimento) values ('1', 'Susana', '10/10/1969'), ('2', 'Lucia', '02/05/1650'), ('3', 'Raimunda', '08/04/1637');

insert into telefone (id_mae, numero, tipo) values ('1', '47996035112', '1'), ('2', '4898462545', '2'), ('3', '49955465421', '3');

insert into especialidade (nome) values ('otorrino'), ('cardiologista'), ('ortopedista');

insert into medico (crm, nome, celular, id_especilidade) values ('3564', 'Rodrigo', '47991546532', '1'), ('4522', 'Maria', '48991445493', '2'), ('7844', 'Pedro', '49999624451', '3');

insert into bebe (nome, crm_medico, id_mae, data_nascimento, peso, altura) values ('Thiago', '3564', '1', '01/04/2022', '8.52', '0.5'), ('Caio', '4522', '2', '09/07/2023', '4.66', '0.36'), ('Rafaela', '7844', '3', '29/02/2024', '3.2', '0.27');

SELECT * FROM estado;
SELECT * FROM cidade;
SELECT * FROM endereco;
SELECT * FROM mae;
SELECT * FROM telefone;
SELECT * FROM especialidade;
SELECT * FROM medico;
SELECT * FROM bebe;