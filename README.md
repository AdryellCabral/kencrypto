# KenCrypto

## Descrição

Biblioteca para acessar a [CoinMarketCap API](https://coinmarketcap.com/api/)

## Atenção

Para usar a lib, você precisa ter o valor da sua api key no arquivo .env na raiz
do projeto registrada na variável `KEY_VALUE`

## - Métodos -

### Para acessar os resultados use a seguinte estrutura

    const response = kenCrypto.`[método](parâmetros)`.then((response) => {return response})

## Quotes

O método quotes recebe como parâmetro uma string contendo as siglas das moedas que deseja ver
Exemplo:

    kenCrypto.quotes("btc, eth")

## Conversion

o método convert recebe como parâmetro dois valores separados por vírgula, primeiro o montante que deseja converter, e segundo uma string contendo o par que deseja converter separados por vírgula.
Exemplo:

    kenCrypto.conversion(1000, "btc,brl")
