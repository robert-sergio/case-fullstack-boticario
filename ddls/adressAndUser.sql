-- Endereços
insert into endereco(cep, rua, bairro, cidade, numero, complemento, uf)
values(
	'11110-000',
	'das flores',
	'centro',
	'Maceió',
	'477',
	'lote A quadra 2',
	'AL'
)



-- Clientes
insert into public.cliente (email,username,senha,nome,cpf, telefone,data_nascimento, endereco_id)
values(
	'oi@oi.com',
	'oi',
	'abc123',
	'oi',
	'12345678910',
	'98987654321',
	'1980-10-01',
	1
)
