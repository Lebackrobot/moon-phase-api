# moon-phase-api 🌖🌗🌘🌑🌒🌓🌔

É uma simples API RESTful que calcula a fase da lua de uma determinada data


# Routes
Você poderá estar consumindo a api batendo nos seguintes endpoints: 

| **GET** | **http://localhost:4000/noauth/moon-phase** |
| --- | --- |

A query esperada é: **date=yyyy-mm-dd**

A consequência dessa consulta será um *json document* contendo as seguintes propriedades: 

- **success**: true || false
- **info**: fase lunar
- **message**: mensagem de status da requisição

Então aqui vai um exemplo de uma requisição local: http://localhost:4000/noauth/moon-phase?date=2023-04-20

#### response json

```json
{
  "success": true,
  "info": "🌑 New Moon",
  "message": "successful query 😀" 
}
```
