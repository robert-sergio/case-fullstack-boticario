# Case Boticario

### Stack Backend:
- javascript
- Fastify
- Prisma
- PostgreSQL
- Swagger

### Frontend
- javascript
- React NextJS 14
- Tailwind CSS

### Obs.:
* O arquivo insomnia e as DDLs do banco estão na pasta Misc

* Alterei essa constraint no Banco para conseguir fazer o delete da tabela de pedidos, mesmo com delete cascade  não estava conseguindo, então optei pela remoção para não deixar o endpoint de delete sem funcionar.

    > alter table produto_pedido DROP CONSTRAINT produto_pedido_pedido_id_fkey